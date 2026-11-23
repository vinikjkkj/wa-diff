__d(
  "WAWebAeaHistoryChatType",
  ["$InternalEnum", "WAWebAeaAccountCategory", "WAWebAeaAccountState"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      NONE: 0,
      GENERIC_FUTUREPROOF: 1,
      WORK: 2,
      COEX: 3,
      CAPI: 4,
    });
    function s(t) {
      return t == null
        ? null
        : (function (t) {
            return t === e.COEX
              ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
              : t === e.CAPI &&
                  o(
                    "WAWebAeaAccountCategory",
                  ).isAeaEnforcementEnabledForCategory(
                    o("WAWebAeaAccountCategory").AeaAccountCategory.CAPI,
                  )
                ? o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
                : null;
          })(e.cast(t));
    }
    ((l.AeaHistoryChatType = e), (l.aeaThreadStateFromHistoryChatType = s));
  },
  98,
);
