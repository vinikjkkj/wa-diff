__d(
  "WAWebFalcoCanonicalAbKey2",
  ["WAWebABPropsLocalStorage", "WAWebWamGlobals"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e, t, n;
      return (e =
        (t =
          o("WAWebWamGlobals").Global == null ||
          (n = o("WAWebWamGlobals").Global.all) == null
            ? void 0
            : n.abKey2) != null
          ? t
          : o("WAWebABPropsLocalStorage").getABKey()) != null
        ? e
        : "";
    }
    l.default = e;
  },
  98,
);
