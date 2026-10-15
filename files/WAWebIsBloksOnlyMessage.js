__d(
  "WAWebIsBloksOnlyMessage",
  ["WAWebHsmGatingUtils", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bloksWidget,
        n = e.footerText,
        a = e.interactiveHeader,
        i = e.text;
      if (t == null || !o("WAWebHsmGatingUtils").isBloksWidgetEnabled())
        return !1;
      var l =
        a != null &&
        (a.mediaType != null || a.title != null || a.subtitle != null);
      if (l || n != null) return !1;
      var s = !r("isStringNullOrEmpty")(i) && i !== t.fallback;
      return !s;
    }
    l.default = e;
  },
  98,
);
