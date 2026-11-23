__d(
  "WAWebUseAboutDisplayStatus",
  [
    "WAWebFrontendContactGetters",
    "WAWebTextStatusUtils",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("useWAWebContactValues").useContactValues(e.id, [
          (t = o("WAWebFrontendContactGetters")).getTextStatusString,
          t.getTextStatusEmoji,
          t.getTextStatusLastUpdateTime,
          t.getTextStatusExpiryTs,
          t.getTextStatusEphemeralDuration,
        ]),
        r = n[0],
        a = n[1],
        i = n[2],
        l = n[3],
        s = n[4],
        u = e.id.isRegularUser(),
        c =
          u &&
          o("WAWebTextStatusUtils").shouldDisplayTextStatus({
            textStatusEmoji: a,
            textStatusEphemeralDuration: s,
            textStatusExpiryTs: l,
            textStatusLastUpdateTime: i,
            textStatusString: r,
          });
      return {
        shouldRenderAboutSection:
          u && (o("WAWebTextStatusUtils").isTextStatusNotFetched(i) || c),
        displayTextStatus: c,
        hasEverHadTextStatus: o("WAWebTextStatusUtils").hasEverHadTextStatus(i),
      };
    }
    l.useAboutDisplayStatus = e;
  },
  98,
);
