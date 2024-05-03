import type {EntityCards} from "~/api/entities";

/*
* Structure
*
* "*" before name param - required
* "?" after name param - optional
* "body" - only routes with body
*
* {METHOD}: {
*   {ROUTE PATH}: {
*       * response: {TYPE};
*       query?: { {QUERY KEY}: VALUE };
*       params?: { {PARAM KEY}: VALUE };
*       body?: { {DATA KEY}: VALUE };
*   };
* };
* */

export type APIRoutes = {
    'GET': {
        'items': {
            response: EntityCards[];
        }
    }
}