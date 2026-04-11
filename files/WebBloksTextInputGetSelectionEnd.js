__d(
  "WebBloksTextInputGetSelectionEnd",
  ["WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = e.bloksContext.getAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
        );
      return r == null ||
        (n = r.ref) == null ||
        (n = n.current) == null ||
        (n = n.getSelection()) == null
        ? void 0
        : n.end;
    }
    l.default = e;
  },
  98,
);
