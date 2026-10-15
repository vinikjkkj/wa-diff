__d(
  "WAWebMsgLinkContextMenuUtils",
  ["WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return r("WAWebEnvironment").isWeb && s(e) != null;
    }
    function s(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = t.closest("a");
        if (n instanceof HTMLAnchorElement && n.href !== "") return n.href;
      }
      return null;
    }
    ((l.shouldShowNativeMenuForLink = e), (l.getLinkHrefFromEvent = s));
  },
  98,
);
