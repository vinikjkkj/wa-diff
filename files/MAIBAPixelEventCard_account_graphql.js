__d(
  "MAIBAPixelEventCard_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: { throwOnFieldError: !0 },
      name: "MAIBAPixelEventCard_account",
      selections: [
        {
          alias: null,
          args: [{ kind: "Literal", name: "first", value: 20 }],
          concreteType: "AdAccountAdsPixelsConnection",
          kind: "LinkedField",
          name: "ads_pixels",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "AdsPixel",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
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
                  kind: "ScalarField",
                  name: "name",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "ads_pixels(first:20)",
        },
      ],
      type: "AdAccount",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
