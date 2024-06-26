declare namespace API {
    interface careerHistoryItem {
        year: string;
        team: string;
        logo: string;
    }
    interface careerHonorsItem {
        year: string[];
        name: string;
        logo: string;
    }
    interface dataItem {
        id: number;
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
        careerHonors: careerHonorsItem[];
        lakes: string;
        // heat: string;
        // cleveland: string;
        mvp: string;
        amvp: string;
        fmvp: string;
        bestRookie: string;
        champion: string;
    }
    interface HomeResponse {
        success?: boolean;
        errorMessage?: string;
        data?: dataItem;
    }
}
