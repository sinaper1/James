declare namespace API {
    interface ImageResponse {
        success?: boolean;
        errorMessage?: string;
        data?: ImageArr;
    }

    interface ImageArr {
        list?: string[];
    }
}
