__d(
  "WAWebBizAdCreationSuccessModalQuery.graphql",
  ["WAWebBizAdCreationSuccessModalQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "asset_id" },
          { defaultValue: null, kind: "LocalArgument", name: "budget" },
        ],
        t = [{ kind: "Variable", name: "asset_id", variableName: "asset_id" }],
        r = [{ kind: "Variable", name: "budget", variableName: "budget" }];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationSuccessModalQuery",
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
                  args: r,
                  concreteType: "XFBBillableAccountBillingInfo",
                  kind: "LinkedField",
                  name: "billing_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBillableAccountPaymentSectionDetails",
                      kind: "LinkedField",
                      name: "payment_section_details",
                      plural: !1,
                      selections: [
                        {
                          args: null,
                          kind: "FragmentSpread",
                          name: "WAWebBizAdCreationPaymentMethodLabelData",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
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
          name: "WAWebBizAdCreationSuccessModalQuery",
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
                {
                  alias: null,
                  args: r,
                  concreteType: "XFBBillableAccountBillingInfo",
                  kind: "LinkedField",
                  name: "billing_info",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBBillableAccountPaymentSectionDetails",
                      kind: "LinkedField",
                      name: "payment_section_details",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "label",
                          storageKey: null,
                        },
                        {
                          alias: "labelAx",
                          args: null,
                          kind: "ScalarField",
                          name: "label_ax",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "Image",
                          kind: "LinkedField",
                          name: "logos",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "uri",
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
                },
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
          id: n("WAWebBizAdCreationSuccessModalQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAdCreationSuccessModalQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
