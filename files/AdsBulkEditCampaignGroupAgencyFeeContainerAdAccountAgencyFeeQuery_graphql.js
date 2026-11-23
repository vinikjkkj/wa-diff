__d(
  "AdsBulkEditCampaignGroupAgencyFeeContainerAdAccountAgencyFeeQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        ],
        t = { vultureHash: "PmYE5JLfiMt9N4fAABLRuDdxGxU=" },
        n = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tax_country",
          storageKey: null,
        },
        o = {
          alias: "can_manage_agency_fee",
          args: [
            {
              kind: "Literal",
              name: "capability",
              value: "CAN_MANAGE_AGENCY_FEE",
            },
          ],
          kind: "ScalarField",
          name: "has_capability",
          storageKey: 'has_capability(capability:"CAN_MANAGE_AGENCY_FEE")',
        },
        a = {
          alias: "can_see_agency_fee",
          args: [
            {
              kind: "Literal",
              name: "capability",
              value: "CAN_SEE_AGENCY_FEE",
            },
          ],
          kind: "ScalarField",
          name: "has_capability",
          storageKey: 'has_capability(capability:"CAN_SEE_AGENCY_FEE")',
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "default_agency_fee_pct",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_agency_fee_disabled",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: t,
          name: "AdsBulkEditCampaignGroupAgencyFeeContainerAdAccountAgencyFeeQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                r,
                o,
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccountAgencyFeeConfig",
                  kind: "LinkedField",
                  name: "agency_fee_config",
                  plural: !1,
                  selections: [i, l],
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
          name: "AdsBulkEditCampaignGroupAgencyFeeContainerAdAccountAgencyFeeQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                r,
                o,
                a,
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccountAgencyFeeConfig",
                  kind: "LinkedField",
                  name: "agency_fee_config",
                  plural: !1,
                  selections: [i, l, s],
                  storageKey: null,
                },
                s,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "25393377113690464",
          metadata: t,
          name: "AdsBulkEditCampaignGroupAgencyFeeContainerAdAccountAgencyFeeQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
