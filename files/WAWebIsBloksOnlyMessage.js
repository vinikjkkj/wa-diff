__d(
  "WAWebIsBloksOnlyMessage",
  ["isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bloksWidget,
        n = e.footerText,
        o = e.interactiveHeader,
        a = e.text;
      if (t == null) return !1;
      var i =
        o != null &&
        (o.mediaType != null || o.title != null || o.subtitle != null);
      if (i || n != null) return !1;
      var l = !r("isStringNullOrEmpty")(a) && a !== t.fallback;
      return !l;
    }
    l.default = e;
  },
  98,
);
