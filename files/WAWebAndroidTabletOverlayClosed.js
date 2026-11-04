__d(
  "WAWebAndroidTabletOverlayClosed",
  ["WALogger", "WAWebUserPrefsKeys", "WAWebUserPrefsStore"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      try {
        return (
          r("WAWebUserPrefsStore").get(
            o("WAWebUserPrefsKeys").KEYS.WA_WEB_ANDROID_TABLET_OVERLAY_CLOSED,
          ) === !0
        );
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[android-tablet-interstitial] closed state not read",
              ])),
          ),
          !1
        );
      }
    }
    function c() {
      try {
        r("WAWebUserPrefsStore").set(
          o("WAWebUserPrefsKeys").KEYS.WA_WEB_ANDROID_TABLET_OVERLAY_CLOSED,
          !0,
          { shouldWriteToIdb: !1 },
        );
      } catch (e) {
        o("WALogger").WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[android-tablet-interstitial] closed state not saved",
            ])),
        );
      }
    }
    ((l.wasAndroidTabletOverlayClosed = u),
      (l.rememberAndroidTabletOverlayClosed = c));
  },
  98,
);
