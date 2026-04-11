__d(
  "WAWebUserPrefsDebugMsgEdit",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return (
        ((e = r("WAWebUserPrefsStore").getUser(
          r("WAWebUserPrefsDebugKeys").MESSAGE_EDIT_RESTRICTION_ENABLED,
        )) != null
          ? e
          : "true") === "true"
      );
    }
    function s(e) {
      r("WAWebUserPrefsStore").setUser(
        r("WAWebUserPrefsDebugKeys").MESSAGE_EDIT_RESTRICTION_ENABLED,
        String(e),
      );
    }
    ((l.messageEditRestrictionEnabled = e), (l.setMessageEditRestriction = s));
  },
  98,
);
