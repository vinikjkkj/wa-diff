__d(
  "CometUFISharesCount_feedback.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "CometUFISharesCount_feedback",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: "i18n_share_count",
          args: null,
          kind: "ScalarField",
          name: "share_count_reduced",
          storageKey: null,
        },
        {
          alias: "share_count",
          args: null,
          concreteType: "ResharesOfContentConnection",
          kind: "LinkedField",
          name: "reshares",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "count",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Feedback",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
