__d(
  "WAWebBizAiHubIdentity",
  ["WAWebBizAiHomeChat", "WAWebBizAiStrings"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebBizAiHomeChat").isProductionBizAiHub(e)
        ? o("WAWebBizAiStrings").getBizAiHubTitle().toString()
        : null;
    }
    l.getBizAiHubDisplayName = e;
  },
  98,
);
