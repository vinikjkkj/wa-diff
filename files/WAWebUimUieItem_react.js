__d(
  "WAWebUimUieItem.react",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.ref,
        a = d(),
        i;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            return {
              getElement: function () {
                return a.current;
              },
            };
          }),
          (t[0] = i))
        : (i = t[0]),
        c(r, i));
      var l;
      return (
        t[1] !== n
          ? ((l = s.jsx("div", { ref: a, children: n })),
            (t[1] = n),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    l.default = m;
  },
  98,
);
