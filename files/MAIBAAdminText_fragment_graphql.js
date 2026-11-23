__d(
  "MAIBAAdminText_fragment.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "MAIBAAdminText_fragment",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "XFBShibaSMAGXMAT",
          kind: "LinkedField",
          name: "render_payload",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "text",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBMAIBACTA",
              kind: "LinkedField",
              name: "cta",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "title",
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "useMAIBAOnCTAClick_fragment",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBMAIBAAdminTextAttachment",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
