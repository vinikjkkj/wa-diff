__d(
  "WAWebBizAiAssetResolver",
  ["bx"],
  function (t, n, r, o, a, i, l) {
    var e = r("bx")("13763"),
      s = r("bx")("13933"),
      u = !1,
      c;
    function d(e) {
      ((u = e), c == null || c(e));
    }
    function m() {
      return u;
    }
    function p(e) {
      c = e;
    }
    function _(t) {
      return (t === void 0 && (t = m()), r("bx").getURL(t ? s : e));
    }
    ((l.applyAiHubProfileTheme = d),
      (l.getAiHubProfileIsDarkTheme = m),
      (l.registerAiHubProfileThemeChangeHandler = p),
      (l.getAiHubProfileURL = _));
  },
  98,
);
