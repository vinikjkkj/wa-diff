__d(
  "mlcErrorHandler__INTERNAL",
  ["getPrivacyAwareEditorState"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = document.activeElement,
        a = null;
      o != null &&
        (a = {
          activeElement: o.nodeName,
          rootSelected: o === t.getRootElement(),
        });
      var i = window.event,
        l = null;
      i != null &&
        (l = {
          altKey: i.altKey,
          ctrlKey: i.ctrlKey,
          data: i.data,
          inputType: i.inputType,
          isComposing: i.isComposing,
          keyCode: i.keyCode,
          metaKey: i.metaKey,
          shiftKey: i.shiftKey,
          type: i.type,
        });
      var s = null;
      try {
        s = r("getPrivacyAwareEditorState")(t.getEditorState());
      } catch (e) {}
      n(
        JSON.stringify({
          activeElement: a,
          editorState: s,
          error: e,
          event: l,
        }),
      );
    }
    l.default = e;
  },
  98,
);
