__d(
  "WAWebMexIntegrityChallengeNotificationHandler",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[mex][integrity-challenge] kill switch on, skip",
            ])),
        )
        .tags("mex", "integrity-challenge");
    }
    l.mexHandleIntegrityChallengeNotification = s;
  },
  98,
);
