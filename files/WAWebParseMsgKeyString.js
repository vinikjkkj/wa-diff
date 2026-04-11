__d(
  "WAWebParseMsgKeyString",
  ["WALogger", "WATypeUtils", "err"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (!t || !o("WATypeUtils").isString(t))
        throw r("err")("MsgKey fromString error: str is null or not a string");
      var n = t.split("_"),
        a = void 0;
      return (
        n.length < 3
          ? o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MsgKey error: cannot create MsgKey from ",
                  "",
                ])),
              t,
            )
          : n.length === 4
            ? n[3] !== "out" && n[3] !== "in" && (a = n[3])
            : n.length === 5 && (a = n[4]),
        { fromMe: n[0] === "true", remote: n[1], id: n[2], participant: a }
      );
    }
    l.default = s;
  },
  98,
);
