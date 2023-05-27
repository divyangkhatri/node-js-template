import { errorNotFoundHandler } from "./middlewares/errorHandler";
import { categoryRoutes } from "./modules/categories/category.routes";
import { addressRoutes } from "./modules/address/address.routes";

export function setUpRouting(app: any) {
    app.use("/category", categoryRoutes);
    app.use("/address", addressRoutes);
    app.use("*", errorNotFoundHandler);
}
