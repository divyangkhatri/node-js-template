import { auth } from "firebase-admin";
import ListUsersResult = auth.ListUsersResult;

export const CUSTOM_ROLE = {
    SUPER_ADMIN: "super_admin",
    ADMIN: "admin",
    BRAND_ADMIN: "brand_admin",
    USER: "user",
};

type IRoleType = keyof typeof CUSTOM_ROLE;
type IRoleValue = typeof CUSTOM_ROLE[IRoleType];
export const listAllUsers = () => {
    // List batch of users, 1000 at a time.
    auth()
        .listUsers(1000)
        .then((listUsersResult: ListUsersResult) => {
            listUsersResult.users.forEach(userRecord => {
                console.log("user", userRecord.toJSON());
            });
        })
        .catch(error => {
            console.error("Error listing users:", error);
        });
};

export const setCustomRole = async (uid: string, role: IRoleValue) => {
    try {
        return await auth().setCustomUserClaims(uid, { [role]: true });
    } catch (e) {
        console.error("Error in set firebase role", e);
        throw e;
    }
};
