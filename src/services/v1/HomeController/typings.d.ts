declare namespace API {
    interface careerHistoryItem {
        year: string;
        team: string;
    }
    interface dataItem {
        id: number;
        logo: string;
        avatar: string;
        name: string;
        eName: string;
        team: string;
        number: string;
        position: string;
        birth: string;
        country: string;
        height: string;
        weight: string;
        stand: string;
        wingspan: string;
        draft: string;
        career: string;
        careerHistory: careerHistoryItem[];
    }
    interface HomeResponse {
        success?: boolean;
        errorMessage?: string;
        data?: dataItem;
    }
}
