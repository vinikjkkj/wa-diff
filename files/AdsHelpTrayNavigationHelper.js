__d(
  "AdsHelpTrayNavigationHelper",
  ["AdsHelpTrayConstants", "DOM", "Scroll", "first", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { contentType: "HOME" };
    function s(t) {
      return t.navigationStack.length === 0
        ? e
        : t.navigationStack[t.navigationStack.length - 1];
    }
    function u(e) {
      var t = s(e);
      return t.contentType === "ARTICLE" ? r("nullthrows")(t.id) : null;
    }
    function c() {
      var e = document.getElementById(
          o("AdsHelpTrayConstants").ID.ADS_HELP_TRAY_CHROME,
        ),
        t = 0;
      if (e != null) {
        var n,
          a =
            (n = r("first")(r("DOM").scry(e, "div.uiScrollableAreaWrap"))) !=
            null
              ? n
              : e;
        t = o("Scroll").getTop(a);
      }
      return t;
    }
    function d(e) {
      var t = document.getElementById(
        o("AdsHelpTrayConstants").ID.ADS_HELP_TRAY_CHROME,
      );
      if (t != null) {
        var n = r("first")(r("DOM").scry(t, "div.uiScrollableAreaWrap"));
        o("Scroll").setTop(n, e);
      }
    }
    function m(e, t) {
      var n,
        r = babelHelpers.extends({}, t, { scrollPosition: null });
      if (e.length === 0) return [r];
      var o = e[e.length - 1];
      return [].concat(e.slice(0, -1), [
        babelHelpers.extends({}, o, {
          scrollPosition: (n = t.scrollPosition) != null ? n : c(),
        }),
        r,
      ]);
    }
    function p(e, t) {
      return e.length === 0 ? [t] : [].concat(e.slice(0, -1), [t]);
    }
    ((l.getCurrentNavigationState = s),
      (l.getCurrentContentCMSID = u),
      (l.setScrollPositionUsingCSS = d),
      (l.concatToNavigationStack = m),
      (l.replaceLastInNavigationStack = p));
  },
  98,
);
