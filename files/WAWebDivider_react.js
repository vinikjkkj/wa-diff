__d(
  "WAWebDivider.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.direction,
        r;
      t[0] !== n
        ? ((r = {
            0: { className: "x9zucqe x1co6499 x1ptxcow x1q0q8m5 xqtp20y" },
            1: {
              className:
                "x9zucqe xbyyjgo x1lun4ml x18b5jzi x1qx5ct2 x1sa5p1d xnkmj2t",
            },
          }[(n === "vertical") << 0]),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a;
      return (
        t[2] !== r
          ? ((a = s.jsx("div", babelHelpers.extends({}, r))),
            (t[2] = r),
            (t[3] = a))
          : (a = t[3]),
        a
      );
    }
    l.default = u;
  },
  98,
);
