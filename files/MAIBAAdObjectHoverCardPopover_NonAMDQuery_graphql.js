__d(
  "MAIBAAdObjectHoverCardPopover_NonAMDQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "adObjectId" },
        t = { defaultValue: null, kind: "LocalArgument", name: "isAdgroup" },
        n = { defaultValue: null, kind: "LocalArgument", name: "isCampaign" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "isCampaignGroup",
        },
        o = [{ kind: "Variable", name: "id", variableName: "adObjectId" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        l = [a],
        s = {
          alias: null,
          args: null,
          concreteType: "AdDeliveryStatusNode",
          kind: "LinkedField",
          name: "delivery_status_info",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "AdDeliverySubstatusNode",
              kind: "LinkedField",
              name: "substatuses",
              plural: !0,
              selections: l,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        u = {
          alias: null,
          args: null,
          concreteType: "MAIBACreative",
          kind: "LinkedField",
          name: "creative",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [
                { kind: "Literal", name: "height", value: 48 },
                { kind: "Literal", name: "width", value: 48 },
              ],
              kind: "ScalarField",
              name: "thumbnail_url",
              storageKey: "thumbnail_url(height:48,width:48)",
            },
          ],
          storageKey: null,
        },
        c = {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 3 }],
          concreteType: "MAIBAAdgroupConnection",
          kind: "LinkedField",
          name: "adgroups",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "MAIBAAdgroupNode",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [u],
              storageKey: null,
            },
          ],
          storageKey: "adgroups(first:3)",
        },
        d = {
          alias: null,
          args: null,
          concreteType: "MAIBAParentCampaignGroup",
          kind: "LinkedField",
          name: "ad_campaign_group",
          plural: !1,
          selections: l,
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAAdObjectHoverCardPopover_NonAMDQuery",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "adObjectId",
                  variableName: "adObjectId",
                },
                {
                  kind: "Variable",
                  name: "isAdgroup",
                  variableName: "isAdgroup",
                },
                {
                  kind: "Variable",
                  name: "isCampaign",
                  variableName: "isCampaign",
                },
                {
                  kind: "Variable",
                  name: "isCampaignGroup",
                  variableName: "isCampaignGroup",
                },
              ],
              kind: "FragmentSpread",
              name: "useMAIBAPublishedAdObjectHoverCardData_Fragment",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, n, t],
          kind: "Operation",
          name: "MAIBAAdObjectHoverCardPopover_NonAMDQuery",
          selections: [
            {
              condition: "isCampaignGroup",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "campaign_group",
                  args: o,
                  concreteType: "MAIBAAdCampaignGroupData",
                  kind: "LinkedField",
                  name: "maiba_ad_campaign_group",
                  plural: !1,
                  selections: [
                    a,
                    i,
                    s,
                    {
                      alias: null,
                      args: [{ kind: "Literal", name: "first", value: 1 }],
                      concreteType: "MAIBACampaignConnection",
                      kind: "LinkedField",
                      name: "ad_campaigns",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "MAIBACampaignNode",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [c],
                          storageKey: null,
                        },
                      ],
                      storageKey: "ad_campaigns(first:1)",
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
            {
              condition: "isCampaign",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "campaign",
                  args: o,
                  concreteType: "MAIBAAdCampaignData",
                  kind: "LinkedField",
                  name: "maiba_ad_campaign",
                  plural: !1,
                  selections: [a, i, d, s, c],
                  storageKey: null,
                },
              ],
            },
            {
              condition: "isAdgroup",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "adgroup",
                  args: o,
                  concreteType: "MAIBAAdgroupData",
                  kind: "LinkedField",
                  name: "maiba_adgroup",
                  plural: !1,
                  selections: [a, i, d, s, u],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "38740022442263866",
          metadata: {},
          name: "MAIBAAdObjectHoverCardPopover_NonAMDQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
