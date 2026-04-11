__d(
  "WebBloksRequestFocus",
  ["WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a = e.bloksContext.getAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
        );
      a == null ||
        (r = a.ref) == null ||
        (r = r.current) == null ||
        r.requestFocus();
    }
    l.default = e;
  },
  98,
);
