__d(
  "WAWebDecodeJid",
  ["invariant", "WALogger", "WAWebWid", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e) {
      return e != null && r("WAWebWid").isWid(e)
        ? o("WAWebWidFactory").createWid(e)
        : e;
    }
    function c(t, n) {
      var r = u(t);
      return (
        typeof r == "string" &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " got decoded to a string: ",
                "",
              ])),
            n,
            r,
          ),
        r
      );
    }
    function d(e) {
      if (e != null)
        return (
          r("WAWebWid").isWid(e) || s(0, 64887),
          o("WAWebWidFactory").createWid(e)
        );
    }
    ((l.decodeJid = u), (l.decodeJidAndValidate = c), (l.strictDecodeJid = d));
  },
  98,
);
