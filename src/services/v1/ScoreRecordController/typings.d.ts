declare namespace API {
    interface ScoreRecordItem {
        date: string;
        score: number;
    }
    interface ScoreRecordResponse {
        success?: boolean;
        errorMessage?: string;
        data?: ScoreRecordItem[];
    }
}
