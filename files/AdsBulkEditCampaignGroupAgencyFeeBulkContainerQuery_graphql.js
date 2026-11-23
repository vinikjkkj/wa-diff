__d(
  "AdsBulkEditCampaignGroupAgencyFeeBulkContainerQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        ],
        t = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "tax_country",
          storageKey: null,
        },
        r = {
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
        o = {
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
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "default_agency_fee_pct",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_agency_fee_disabled",
          storageKey: null,
        },
        l = {
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
          metadata: null,
          name: "AdsBulkEditCampaignGroupAgencyFeeBulkContainerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                n,
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccountAgencyFeeConfig",
                  kind: "LinkedField",
                  name: "agency_fee_config",
                  plural: !1,
                  selections: [a, i],
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
          name: "AdsBulkEditCampaignGroupAgencyFeeBulkContainerQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                n,
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType: "AdAccountAgencyFeeConfig",
                  kind: "LinkedField",
                  name: "agency_fee_config",
                  plural: !1,
                  selections: [a, i, l],
                  storageKey: null,
                },
                l,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "25592298897124600",
          metadata: {},
          name: "AdsBulkEditCampaignGroupAgencyFeeBulkContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
