__d(
  "WAWebBizAdCreationRoot_adAccount.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAdCreationRoot_adAccount",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "spec",
          plural: !1,
          selections: [
            {
              alias: null,
              args: [{ kind: "Literal", name: "is_forced", value: !0 }],
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "id",
                  storageKey: null,
                },
              ],
              storageKey: "ad_account(is_forced:true)",
            },
          ],
          storageKey: null,
        },
      ],
      type: "BoostedComponentCommonWrapper",
      abstractKey: "__isBoostedComponentCommonWrapper",
    };
    a.exports = e;
  },
  null,
);
