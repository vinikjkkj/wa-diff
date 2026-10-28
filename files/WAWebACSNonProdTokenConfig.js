__d(
  "WAWebACSNonProdTokenConfig",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { WA_ChatsMusicInternal: "WA_ChatsMusicInternal" };
    function s(t) {
      return t === e.WA_ChatsMusicInternal
        ? { maxRedeemCount: 50, maxExpirySeconds: o("WATimeUtils").DAY_SECONDS }
        : null;
    }
    ((l.ACS_NON_PROD_PROJECTS = e), (l.getNonProdTokenConfig = s));
  },
  98,
);
