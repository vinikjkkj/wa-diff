__d(
  "GroupsCometAdminToolsLeftRailOverviewItem_group$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      kind: "SplitOperation",
      metadata: {},
      name: "GroupsCometAdminToolsLeftRailOverviewItem_group$normalization",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "GroupLeadersEngagementLoggingSettings",
          kind: "LinkedField",
          name: "leaders_engagement_logging_settings",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "comet_surface_mappings",
              plural: !0,
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
                  args: null,
                  kind: "ScalarField",
                  name: "surface",
                  storageKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "trace_policy",
                      storageKey: null,
                    },
                  ],
                  type: "GroupLeadersEngagementLoggingExactCometSurfaceMapping",
                  abstractKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "prefixes",
                      storageKey: null,
                    },
                  ],
                  type: "GroupLeadersEngagementLoggingPrefixCometSurfaceMapping",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    };
    a.exports = e;
  },
  null,
);
