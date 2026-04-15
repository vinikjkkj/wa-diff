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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
        n;
      t[0] !== e
        ? ((n = new Map(e.map(C))), (t[0] = e), (t[1] = n))
        : (n = t[1]);
      var a = n,
        i;
      t[2] !== a
        ? ((i = function (t) {
            return f(a.get(String(t)));
          }),
          (t[2] = a),
          (t[3] = i))
        : (i = t[3]);
      var l = i,
        s;
      t[4] !== a
        ? ((s = function (t) {
            var e = a.get(String(t));
            e &&
              (o("WAWebUserPrefsContextualBanner").setBannerState(
                t,
                o("WAWebUserPrefsContextualBanner").BannerState.VIEWED,
              ),
              h(e, o("WAWebUserPrefsContextualBanner").BannerState.VIEWED));
          }),
          (t[4] = a),
          (t[5] = s))
        : (s = t[5]);
      var u = s,
        c;
      t[6] !== a
        ? ((c = function (t) {
            var e = a.get(String(t));
            ((e == null ? void 0 : e.syncEnabled) === !0 &&
              r("WAWebNuxSync").acknowledgeNux(t),
              o("WAWebUserPrefsContextualBanner").setBannerState(
                t,
                o("WAWebUserPrefsContextualBanner").BannerState.CLICKED,
              ),
              h(e, o("WAWebUserPrefsContextualBanner").BannerState.CLICKED));
          }),
          (t[6] = a),
          (t[7] = c))
        : (c = t[7]);
      var d = c,
        m;
      t[8] !== a
        ? ((m = function (t) {
            var e = a.get(String(t));
            ((e == null ? void 0 : e.syncEnabled) === !0 &&
              r("WAWebNuxSync").acknowledgeNux(t),
              o("WAWebUserPrefsContextualBanner").setBannerState(
                t,
                o("WAWebUserPrefsContextualBanner").BannerState.DISMISSED,
              ),
              h(e, o("WAWebUserPrefsContextualBanner").BannerState.DISMISSED));
          }),
          (t[8] = a),
          (t[9] = m))
        : (m = t[9]);
      var p = m,
        _;
      t[10] !== a
        ? ((_ = function (t) {
            var e;
            (((e = a.get(String(t))) == null ? void 0 : e.syncEnabled) === !0 &&
              r("WAWebNuxSync").unAcknowledgeNux(t),
              o("WAWebUserPrefsContextualBanner").clearBannerState(t));
          }),
          (t[10] = a),
          (t[11] = _))
        : (_ = t[11]);
      var g = _,
        y;
      return (
        t[12] !== l || t[13] !== d || t[14] !== p || t[15] !== g || t[16] !== u
          ? ((y = [l, u, d, p, g]),
            (t[12] = l),
            (t[13] = d),
            (t[14] = p),
            (t[15] = g),
            (t[16] = u),
            (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    function C(e) {
      return [
        String(e),
        o("WAWebContextualBannerConfig").getContextualBannerConfig(e),
      ];
    }
    l.default = y;
  },
  98,
);
