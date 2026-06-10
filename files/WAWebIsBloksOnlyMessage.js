__d(
  "WAWebIsBloksOnlyMessage",
  [
    "WAWebFrontendMsgGetters",
    "WAWebGetInteractiveFooterText",
    "WAWebHsmGatingUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bloksWidget;
      if (t == null || !o("WAWebHsmGatingUtils").isBloksWidgetEnabled())
        return !1;
      var n = e.interactiveHeader,
        a =
          n != null &&
          (n.mediaType != null || n.title != null || n.subtitle != null);
      if (
        a ||
        o("WAWebGetInteractiveFooterText").getInteractiveFooterText(e) != null
      )
        return !1;
      var i = o("WAWebFrontendMsgGetters").getText(e),
        l = !r("isStringNullOrEmpty")(i) && i !== t.fallback;
      return !l;
    }
    l.default = e;
  },
  98,
);
