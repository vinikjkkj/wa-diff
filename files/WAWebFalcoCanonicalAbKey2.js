__d(
  "WAWebFalcoCanonicalAbKey2",
  ["WAWebABPropsLocalStorage", "WAWebWam", "WAWebWamGlobals"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e, t, n, r;
      return (e =
        (t =
          (n = o("WAWebWam").getSerializedAbKey2()) != null
            ? n
            : o("WAWebWamGlobals").Global == null ||
                (r = o("WAWebWamGlobals").Global.all) == null
              ? void 0
              : r.abKey2) != null
          ? t
          : o("WAWebABPropsLocalStorage").getABKey()) != null
        ? e
        : "";
    }
    l.default = e;
  },
  98,
);
