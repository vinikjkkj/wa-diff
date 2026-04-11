__d(
  "WAWebUtilsGetColor",
  ["WANullthrows", "err"],
  function (t, n, r, o, a, i, l) {
    var e = new Map([
        ["sand-200", "rgb(234, 224, 214)"],
        ["sand-300", "rgb(170, 148, 125)"],
        ["sand-600", "rgb(94, 83, 72)"],
      ]),
      s = function (t) {
        return getComputedStyle(
          r("WANullthrows")(document.body),
        ).getPropertyValue(t);
      };
    function u(t, n) {
      var o =
        t === "sand"
          ? r("WANullthrows")(e.get(t + "-" + n))
          : s("--wds-" + t + "-" + n);
      if (o === "")
        throw r("err")(
          "Get color failed (color=" +
            t +
            " depth=" +
            n +
            "). Please check whether wds color changed or there is a typo in color name.",
        );
      return o;
    }
    l.default = u;
  },
  98,
);
