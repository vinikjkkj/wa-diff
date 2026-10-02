__d(
  "WASmaxInMessageRequestFolderIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrInt(e, "folder_id");
      return t.success
        ? o("WAResultOrError").makeResult({ folderId: t.value })
        : t;
    }
    l.parseFolderIDMixin = e;
  },
  98,
);
