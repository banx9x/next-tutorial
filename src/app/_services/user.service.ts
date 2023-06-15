interface GetUserPayload {
    userId: number;
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    image: string;
    username: string;
}

export const getUserById = async ({ userId }: GetUserPayload) => {
    const res = await fetch("https://dummyjson.com/users/" + userId);
    const json = (await res.json()) as User;

    return json;
};
