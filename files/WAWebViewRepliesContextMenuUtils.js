__d(
  "WAWebViewRepliesContextMenuUtils",
  ["WAWebThreadMsgUtils", "WAWebThreadsGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (!o("WAWebThreadsGating").isViewRepliesContextMenuEnabled(t))
        return null;
      var n = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(e);
      if (n != null) return n;
      var r = t.viewRepliesThreads;
      if (r != null) {
        var a;
        return (a = r.hasThreadForMsgKey(e.id)) != null ? a : null;
      }
      return null;
    }
    l.getViewRepliesThreadIdForContextMenu = e;
  },
  98,
);
