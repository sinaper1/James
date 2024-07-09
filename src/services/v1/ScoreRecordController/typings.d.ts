declare namespace API {
  interface ScoreRecordItem {
    id: number;
    pid: number;
    date: string;
    score: number;
  }
  interface ScoreRecordResponse {
    status?: boolean;
    msg?: string;
    code: number;
    data?: { data: ScoreRecordItem[]; total: number };
  }
}
