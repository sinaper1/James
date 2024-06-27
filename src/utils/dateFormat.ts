import dayjs from 'dayjs';

// 计算出生日期到当前日期的年龄和天数
export const birthToAgeDiff = (birthDate: string, curDate: string): string => {
    const birth = dayjs(birthDate);
    const now = dayjs(curDate);

    // 计算总的年数
    const years = now.diff(birth, 'year');

    // 计算总的天数（去掉完整的年数）
    const remainingDays = now.diff(birth.add(years, 'year'), 'day');

    return `${years}岁${remainingDays}天`;
};

/**
 * 将日期格式从 YYYY-MM-DD 转换为 YYYY年MM月DD日
 * @param date - 输入的日期字符串，格式为 YYYY-MM-DD
 * @returns 格式化后的日期字符串，格式为 YYYY年MM月DD日
 */
export const formatDateToChinese = (date: string): string => {
    return dayjs(date).format('YYYY年MM月DD日');
};
