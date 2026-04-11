__d(
  "WebBloksTextInputSetText",
  ["WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a = e.bloksContext.updateAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
          { text: n != null ? n : "" },
        );
      (r = a.ref) == null ||
        (r = r.current) == null ||
        r.onExternalUpdate(a.text);
    }
    l.default = e;
  },
  98,
);
