__d(
  "WASmaxInMessageDeliverFolderMixin",
  ["WASmaxInMessageDeliverFolderIDMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverFolderIDMixin").parseFolderIDMixin(
        n.value,
      );
      return (r.success, r);
    }
    l.parseFolderMixin = e;
  },
  98,
);
