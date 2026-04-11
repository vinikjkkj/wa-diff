__d(
  "WAWebProgressBar.react",
  ["cx", "WAWebClassnames", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.className,
        r = e.max,
        a = e.value,
        i = r === void 0 ? 100 : r,
        l;
      t[0] !== n
        ? ((l = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "_ak0k",
            n,
          )),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var s;
      return (
        t[2] !== i || t[3] !== l || t[4] !== a
          ? ((s = u.jsx("progress", { value: a, max: i, className: l })),
            (t[2] = i),
            (t[3] = l),
            (t[4] = a),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    l.default = c;
  },
  98,
);
