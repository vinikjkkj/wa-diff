__d(
  "WASmaxInMessageRequestFolderMixin",
  ["WASmaxInMessageRequestFolderIDMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "thread_actions");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "folder");
      if (!n.success) return n;
      var r = o("WASmaxInMessageRequestFolderIDMixin").parseFolderIDMixin(
        n.value,
      );
      return (r.success, r);
    }
    l.parseFolderMixin = e;
  },
  98,
);
