declare namespace API {
  interface StatisticsItem {
    season: string[];
    gp: number[];
    gs: number[];
    score: number[];
    backboard: number[];
    assist: number[];
    steal: number[];
    blockShot: number[];
    mistake: number[];
    foul: number[];
  }
  interface StatisticsResponse {
    status?: boolean;
    msg?: string;
    code: number;
    data?: { data: StatisticsItem; totalData: TotalItem };
  }
  type TotalItem = {
    // gp: number,
    // gs: number,
    // score: number,
    // backboard: number,
    // assist: number,
    // steal: number,
    // blockShot: number,
    // mistake: number,
    // foul: number,
    [key in string]: number;
  };
  // interface TotalResponse{
  //     success?: boolean;
  //     errorMessage?: string;
  //     data?: TotalItem;
  // }
}
