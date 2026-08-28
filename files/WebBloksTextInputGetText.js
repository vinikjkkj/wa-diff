__d(
  "WebBloksTextInputGetText",
  ["WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    var e = "2";
    function s(t, n, r) {
      var a,
        i,
        l = t.bloksContext.getAssociatedObject_INTERNAL(
          n,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
        );
      return (a = (i = l == null ? void 0 : l.text) != null ? i : n.get(e)) !=
        null
        ? a
        : "";
    }
    l.default = s;
  },
  98,
);
