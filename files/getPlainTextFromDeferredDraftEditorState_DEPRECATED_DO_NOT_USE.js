__d(
  "getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      switch (e.__type) {
        case "plain-text":
          return e.text;
        case "editor-state-based":
          return e.draftEditorState.getCurrentContent().getPlainText();
        default:
          return e;
      }
    }
    i.default = e;
  },
  66,
);
