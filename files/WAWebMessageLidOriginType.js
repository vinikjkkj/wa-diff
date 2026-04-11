__d(
  "WAWebMessageLidOriginType",
  [
    "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
    "WAWebUsernameTypes",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e.isLid())
        return (t == null ? void 0 : t.origin) != null
          ? (t.origin,
            o(
              "WAWebUserPrefsPhoneNumberHidingThreadPromotionMigration",
            ).hasPhoneNumberHidingThreadPromotionMigrationStarted()
              ? o("WAWebUsernameTypes").LidOriginType.GENERAL
              : o("WAWebUsernameTypes").LidOriginType.cast(t.origin))
          : o("WAWebUsernameTypes").LidOriginType.GENERAL;
    }
    l.determineLidOriginTypeForIncomingMessage = e;
  },
  98,
);
