__d(
  "WAWebMsgLinkContextMenuUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.target;
      if (t instanceof HTMLElement) {
        var n = t.closest("a");
        if (n instanceof HTMLAnchorElement && n.href !== "") return n.href;
      }
      return null;
    }
    i.getLinkHrefFromEvent = e;
  },
  66,
);
