import React, {ForwardedRef, useEffect, useImperativeHandle, useLayoutEffect, useRef,} from 'react';
import * as echarts from 'echarts/core';
import {EChartsType} from 'echarts/core';
import {
    DatasetComponent,
    DatasetComponentOption,
    DataZoomComponent,
    DataZoomComponentOption,
    GridComponent,
    GridComponentOption,
    LegendComponent,
    LegendComponentOption,
    TitleComponent,
    TitleComponentOption,
    ToolboxComponent,
    ToolboxComponentOption,
    TooltipComponent,
    TooltipComponentOption
} from 'echarts/components';
import {BarChart, BarSeriesOption, LineChart, LineSeriesOption,} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {SVGRenderer} from 'echarts/renderers';
import {ECElementEvent} from 'echarts/types/src/util/types.d.ts';
import {Spin} from 'antd';

echarts.use([
    DatasetComponent,
    DataZoomComponent,
    GridComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    LineChart,
    BarChart,
    UniversalTransition,
    SVGRenderer,
]);

export type EChartOption = echarts.ComposeOption<| DatasetComponentOption
    | DataZoomComponentOption
    | GridComponentOption
    | LegendComponentOption
    | TitleComponentOption
    | ToolboxComponentOption
    | TooltipComponentOption
    | LineSeriesOption
    | BarSeriesOption>;

export interface EChartProps {
    option: EChartOption | null | undefined;
    width: number | string;
    height: number | string;
    merge?: boolean;
    loading?: boolean;
    empty?: React.ReactElement;

    onClick?(event: ECElementEvent): any;
}

export interface EChartRef {
    instance(): EChartsType | undefined;
}

const EChartInner: React.ForwardRefRenderFunction<EChartRef, EChartProps> = (
    {option, width, height, loading = false, onClick},
    ref: ForwardedRef<EChartRef>
) => {
    const cRef = useRef<HTMLDivElement>(null);
    const cInstance = useRef<EChartsType>();

    // 初始化注册组件，监听 cRef 和 option 变化
    useEffect(() => {
        if (cRef.current) {
            // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
            cInstance.current = echarts.getInstanceByDom(cRef.current);
            if (!cInstance.current) {
                cInstance.current = echarts.init(cRef.current, undefined, {
                    renderer: 'svg',
                });

                cInstance.current.on('click', (event) => {
                    const ec = event as ECElementEvent;
                    if (ec && onClick) onClick(ec);
                });
            }

            // 设置配置项
            if (option) cInstance.current?.setOption(option);
        }
    }, [cRef, option]);

    // 重新适配大小并开启过渡动画
    const resize = () => {
        cInstance.current?.resize({
            animation: {duration: 300}
        });
    }

    // 监听窗口大小变化重绘
    useEffect(() => {
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, [option]);

    // 监听高度变化
    useLayoutEffect(() => {
        resize();
    }, [width, height]);

    // 获取实例
    const instance = () => {
        return cInstance.current;
    }

    // 对父组件暴露的方法
    useImperativeHandle(ref, () => ({
        instance
    }));

    return (
        <Spin spinning={loading}>
            <div ref={cRef} style={{width: width, height: height}}/>
        </Spin>
    );
};

const EChart = React.forwardRef(EChartInner);

export default EChart;
