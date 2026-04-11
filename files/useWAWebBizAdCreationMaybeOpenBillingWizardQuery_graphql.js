__d(
  "useWAWebBizAdCreationMaybeOpenBillingWizardQuery.graphql",
  ["useWAWebBizAdCreationMaybeOpenBillingWizardQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "asset_id" },
          { defaultValue: null, kind: "LocalArgument", name: "budget" },
        ],
        t = [{ kind: "Variable", name: "asset_id", variableName: "asset_id" }],
        r = {
          alias: null,
          args: [{ kind: "Variable", name: "budget", variableName: "budget" }],
          concreteType: "XFBBillableAccountBillingInfo",
          kind: "LinkedField",
          name: "billing_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBBillableAccountRequiredAction",
              kind: "LinkedField",
              name: "required_action",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBBillableAccountBillingInfoAction",
                  kind: "LinkedField",
                  name: "action",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "wizard_name",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "wizard_props_json",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "useWAWebBizAdCreationMaybeOpenBillingWizardQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [r],
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
          name: "useWAWebBizAdCreationMaybeOpenBillingWizardQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: null,
              kind: "LinkedField",
              name: "billable_account_by_asset_id",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                r,
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
          id: n(
            "useWAWebBizAdCreationMaybeOpenBillingWizardQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationMaybeOpenBillingWizardQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
