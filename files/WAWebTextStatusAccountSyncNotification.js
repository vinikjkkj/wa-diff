__d(
  "WAWebTextStatusAccountSyncNotification",
  [
    "WAWebTextStatusGatingUtils",
    "WAWebUpdateTextStatusForContact",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.emoji,
        n = e.ephemeralDurationSeconds,
        r = e.from,
        a = e.lastUpdateTime,
        i = e.text;
      return o("WAWebTextStatusGatingUtils").receiveTextStatusEnabled()
        ? o("WAWebUpdateTextStatusForContact").updateTextStatusForContact({
            contactId: o("WAWebWidFactory").asUserWidOrThrow(r),
            textString: i,
            emoji: t,
            ephemeralDuration: n,
            newUpdateTime: a != null ? Number(a) : void 0,
            source: "account-sync",
          })
        : null;
    }
    l.applyTextStatusAccountSync = e;
  },
  98,
);
