__d(
  "WAWebMexFetchNewsletterAdminCountJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "newsletter_id" },
        ],
        t = [
          {
            kind: "Variable",
            name: "newsletter_id",
            variableName: "newsletter_id",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "admin_count",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebMexFetchNewsletterAdminCountJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterAdmin",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin",
              plural: !1,
              selections: [n],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebMexFetchNewsletterAdminCountJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWA2NewsletterAdmin",
              kind: "LinkedField",
              name: "xwa2_newsletter_admin",
              plural: !1,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "29186079397702825",
          metadata: {},
          name: "WAWebMexFetchNewsletterAdminCountJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
