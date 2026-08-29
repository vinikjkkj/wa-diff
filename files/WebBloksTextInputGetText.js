__d(
  "WebBloksTextInputGetText",
  ["WebBloksConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r,
        a,
        i = e.bloksContext.getAssociatedObject_INTERNAL(
          t,
          o("WebBloksConstants").TEXT_INPUT_ASSOCIATED_OBJECT,
        );
      return (r =
        (a = i == null ? void 0 : i.text) != null ? a : t.get("text")) != null
        ? r
        : "";
    }
    l.default = e;
  },
  98,
);
