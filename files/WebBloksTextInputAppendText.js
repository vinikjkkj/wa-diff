__d(
  "WebBloksTextInputAppendText",
  ["WebBloksConstants", "WebBloksTextInputSetText"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var a,
        i,
        l = e.bloksContext.getAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
        ),
        s = ((a = l == null ? void 0 : l.text) != null ? a : "") + n,
        u =
          l == null || (i = l.ref) == null || (i = i.current) == null
            ? void 0
            : i.appendText;
      u != null
        ? (e.bloksContext.updateAssociatedObject_INTERNAL(
            t,
            o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
            { text: s },
          ),
          u(n))
        : r("WebBloksTextInputSetText")(e, t, s);
    }
    l.default = e;
  },
  98,
);
