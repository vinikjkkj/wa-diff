__d(
  "useWAWebContextualBanner",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBannerEventWamEvent",
    "WAWebContextualBannerConfig",
    "WAWebNuxSync",
    "WAWebUserPrefsContextualBanner",
    "WAWebUserPrefsNuxPreferences",
    "WAWebWamEnumBannerOperations",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useMemo;
    function p(t) {
      var n = t.endT,
        r = t.id,
        a = t.startT,
        i = o("WATimeUtils").convertISO8601DateFormatToUnixTime(a),
        l = o("WATimeUtils").convertISO8601DateFormatToUnixTime(n);
      return i != null &&
        !o("WATimeUtils").isInFuture(i) &&
        l != null &&
        o("WATimeUtils").isInFuture(l)
        ? !0
        : (i == null &&
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[banner] invalid start time for ",
                  " in config: ",
                  "",
                ])),
              r,
              a,
            ),
          l == null &&
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[banner] invalid end time for ",
                  " in config: ",
                  "",
                ])),
              r,
              n,
            ),
          !1);
    }
    function _(e) {
      var t = o("WAWebUserPrefsContextualBanner").getBannerState(e);
      if (
        t === o("WAWebUserPrefsContextualBanner").BannerState.SYNCED ||
        t === o("WAWebUserPrefsContextualBanner").BannerState.CLICKED ||
        t === o("WAWebUserPrefsContextualBanner").BannerState.DISMISSED
      )
        return !0;
      var n = o("WAWebUserPrefsNuxPreferences").getNuxSyncList(),
        r = n.includes(String(e));
      return r
        ? (o("WAWebUserPrefsContextualBanner").setBannerState(
            e,
            o("WAWebUserPrefsContextualBanner").BannerState.SYNCED,
          ),
          !0)
        : !1;
    }
    var f = function (t) {
      var e = !0;
      return (
        (t == null ? void 0 : t.condition) != null && (e = t.condition()),
        t != null && p(t) && !_(t.id) && e
      );
    };
    function g(e) {
      switch (e) {
        case o("WAWebUserPrefsContextualBanner").BannerState.CLICKED:
          return o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK;
        case o("WAWebUserPrefsContextualBanner").BannerState.DISMISSED:
          return o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.DISMISS;
        case o("WAWebUserPrefsContextualBanner").BannerState.VIEWED:
          return o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN;
        case o("WAWebUserPrefsContextualBanner").BannerState.SYNCED:
          return null;
      }
    }
    function h(e, t) {
      if (e) {
        var n = g(t);
        if (e.metricField && n) {
          var r = { bannerType: e.metricField, bannerOperation: n };
          new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)(r).commit();
        }
      }
    }
    function y(e) {
      var t = m(
          function () {
            return new Map(
              e.map(function (e) {
                return [
                  String(e),
                  o("WAWebContextualBannerConfig").getContextualBannerConfig(e),
                ];
              }),
            );
          },
          [e],
        ),
        n = d(
          function (e) {
            return f(t.get(String(e)));
          },
          [t],
        ),
        a = d(
          function (e) {
            var n = t.get(String(e));
            n &&
              (o("WAWebUserPrefsContextualBanner").setBannerState(
                e,
                o("WAWebUserPrefsContextualBanner").BannerState.VIEWED,
              ),
              h(n, o("WAWebUserPrefsContextualBanner").BannerState.VIEWED));
          },
          [t],
        ),
        i = d(
          function (e) {
            var n = t.get(String(e));
            ((n == null ? void 0 : n.syncEnabled) === !0 &&
              r("WAWebNuxSync").acknowledgeNux(e),
              o("WAWebUserPrefsContextualBanner").setBannerState(
                e,
                o("WAWebUserPrefsContextualBanner").BannerState.CLICKED,
              ),
              h(n, o("WAWebUserPrefsContextualBanner").BannerState.CLICKED));
          },
          [t],
        ),
        l = d(
          function (e) {
            var n = t.get(String(e));
            ((n == null ? void 0 : n.syncEnabled) === !0 &&
              r("WAWebNuxSync").acknowledgeNux(e),
              o("WAWebUserPrefsContextualBanner").setBannerState(
                e,
                o("WAWebUserPrefsContextualBanner").BannerState.DISMISSED,
              ),
              h(n, o("WAWebUserPrefsContextualBanner").BannerState.DISMISSED));
          },
          [t],
        ),
        s = d(
          function (e) {
            var n;
            (((n = t.get(String(e))) == null ? void 0 : n.syncEnabled) === !0 &&
              r("WAWebNuxSync").unAcknowledgeNux(e),
              o("WAWebUserPrefsContextualBanner").clearBannerState(e));
          },
          [t],
        );
      return [n, a, i, l, s];
    }
    l.default = y;
  },
  98,
);
