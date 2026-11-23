__d(
  "BizWebUnifiedTableRowHeaderTrendingNowPill_rowHeader.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BizWebUnifiedTableRowHeaderTrendingNowPill_rowHeader",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_trending_now",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "TofuEntity",
          kind: "LinkedField",
          name: "entity",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "caller_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "entity_id",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "TofuUnifiedTablePublishedPostRowHeader",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
