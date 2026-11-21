__d(
  "WAWebContactSaveEligibility",
  ["WAWebBizAiHomeChat", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.isRegularUser() &&
        !o("WAWebUserUtils").isMeAccount(e) &&
        !o("WAWebBizAiHomeChat").isProductionBizAiHub(e) &&
        !e.isIAS() &&
        !e.isCAPISupportAccount() &&
        !e.isSupportAccount()
      );
    }
    l.canSaveContact = e;
  },
  98,
);
