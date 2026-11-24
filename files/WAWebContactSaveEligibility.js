__d(
  "WAWebContactSaveEligibility",
  ["WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e.isRegularUser() &&
        !o("WAWebUserUtils").isMeAccount(e) &&
        !e.isAiHub() &&
        !e.isIAS() &&
        !e.isCAPISupportAccount() &&
        !e.isSupportAccount()
      );
    }
    l.canSaveContact = e;
  },
  98,
);
