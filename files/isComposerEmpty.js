__d(
  "isComposerEmpty",
  ["cr:47", "gkx", "isAttachmentEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e == null ? void 0 : e.editorState;
      if (t == null) return !0;
      var n = (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__type === "plain-text" &&
          "text" in e
        ) {
          var t = e.text;
          return t;
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.__type === "editor-state-based" &&
          "draftEditorState" in e
        ) {
          var n = e.draftEditorState;
          return n.getCurrentContent().getPlainText();
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(t);
      return n.trim().length === 0;
    }
    var s = r("gkx")("20836");
    function u(t) {
      var o;
      return !(
        ((o = t.isEmptyMetaData) == null ? void 0 : o.useIsEmpty) !== !0 ||
        (s && t.lexicalEditorIsEmpty === !1) ||
        (!s && t.lexicalEditorIsDirty === !0) ||
        (t.lexicalEditor == null && !e(t)) ||
        !r("isAttachmentEmpty")(t) ||
        (n("cr:47") != null && n("cr:47")(t))
      );
    }
    l.default = u;
  },
  98,
);
