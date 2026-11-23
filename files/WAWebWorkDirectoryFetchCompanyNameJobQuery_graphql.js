__d(
  "WAWebWorkDirectoryFetchCompanyNameJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "lid" }],
        t = [{ kind: "Variable", name: "lid", variableName: "lid" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "company_name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebWorkDirectoryFetchCompanyNameJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAWhatsAppForWorkMember",
              kind: "LinkedField",
              name: "xwa_whatsapp_for_work_employee_directory_member",
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
          name: "WAWebWorkDirectoryFetchCompanyNameJobQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XWAWhatsAppForWorkMember",
              kind: "LinkedField",
              name: "xwa_whatsapp_for_work_employee_directory_member",
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
          id: "29201500926171542",
          metadata: {},
          name: "WAWebWorkDirectoryFetchCompanyNameJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
