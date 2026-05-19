__d(
  "CometUFISeenByCountText_feedback$normalization.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "count",
        storageKey: null,
      };
      return {
        kind: "SplitOperation",
        metadata: {},
        name: "CometUFISeenByCountText_feedback$normalization",
        selections: [
          {
            alias: "i18n_reaction_count",
            args: null,
            kind: "ScalarField",
            name: "reaction_count_reduced",
            storageKey: null,
          },
          {
            alias: "reaction_count",
            args: null,
            concreteType: "ReactorsOfContentConnection",
            kind: "LinkedField",
            name: "reactors",
            plural: !1,
            selections: [e],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "ReactionDisplayConfig",
            kind: "LinkedField",
            name: "reaction_display_config",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "reaction_display_strategy",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            concreteType: "SeenByConnection",
            kind: "LinkedField",
            name: "seen_by",
            plural: !1,
            selections: [
              e,
              {
                alias: "i18n_seen_by_count",
                args: null,
                kind: "ScalarField",
                name: "seen_by_count_reduced",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "seen_by_everyone",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ],
      };
    })();
    a.exports = e;
  },
  null,
);
