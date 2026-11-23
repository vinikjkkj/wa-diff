__d(
  "AnomalyTopRootCauseContentAdObjectExplanationsFragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AnomalyTopRootCauseContentAdObjectExplanationsFragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XFBAnomalyExplanationsAttributedAdObjects",
          kind: "LinkedField",
          name: "attributed_ad_objects",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ad_object_name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "edit_timestamp",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBAnomalyExplanationsOutput",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
