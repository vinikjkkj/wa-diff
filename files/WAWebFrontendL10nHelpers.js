__d(
  "WAWebFrontendL10nHelpers",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAlarm",
    "WAWebL10NCookieUtils",
    "WAWebL10nGetRenderedLocale",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebURLUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = null,
      u = "\uD83C\uDF10",
      c = "%F0%9F%8C%90";
    function d(t) {
      o("WAWebRuntimeEnvironmentUtils").isWorker() ||
        (s != null && r("WAWebAlarm").clearTimeout(s),
        o("WAWebL10NCookieUtils").setWAWebLocalePrefCookieValue(t),
        (s = r("WAWebAlarm").setLocalTimeout(
          function () {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "l10n: renewing lang pref cookie TTL to: ",
                  "",
                ])),
              t,
            ),
              d(t));
          },
          o("WATimeUtils").castUnixTimeToMillisTime(
            o("WATimeUtils").futureUnixTime(2 * o("WATimeUtils").WEEK_SECONDS),
          ),
        )));
    }
    function m() {
      if (!o("WAWebRuntimeEnvironmentUtils").isWorker()) {
        var e = o("WAWebL10NCookieUtils").getWAWebLocalePrefCookieValue();
        e == null
          ? d(o("WAWebL10nGetRenderedLocale").WAWebL10nGetRenderedLocale())
          : d(e);
      }
    }
    function p() {
      if (
        !(
          o("WAWebRuntimeEnvironmentUtils").isWorker() ||
          !r("WAWebURLUtils").canMuckHistory()
        )
      ) {
        var e = self.location.href;
        (e.includes("/" + c + "/") || e.includes("/" + u + "/")) &&
          window.history.replaceState({}, "", "/");
        var t = new URL(e);
        t.searchParams.get("locale") != null &&
          (t.searchParams.delete("locale"),
          window.history.replaceState({}, "", t.href));
      }
    }
    ((l.extendWAWebLocalePrefCookieTtl = m),
      (l.mungeWAWebLocaleOverrideFromUrlIfNecessary = p));
  },
  98,
);
