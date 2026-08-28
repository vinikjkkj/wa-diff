__d(
  "MessageMarketingDuplicationUpsellAYMTProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: {
          activationStatus: null,
          tipChannelData: r("immutable").Map(),
          duplicationUpsellData: {
            shouldShowTip: !1,
            campaignIDsToEnable: [],
            tip: null,
          },
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
