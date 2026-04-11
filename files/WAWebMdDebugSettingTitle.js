__d(
  "WAWebMdDebugSettingTitle",
  ["WAWebText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.title,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { marginBottom: "6px" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = s.jsx("div", {
              style: r,
              children: s.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
                marginBottom: 8,
                children: n,
              }),
            })),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = u;
  },
  98,
);
