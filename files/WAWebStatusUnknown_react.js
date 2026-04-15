__d(
  "WAWebStatusUnknown.react",
  ["fbt", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.onMouseDown,
        r = e.onMouseUp,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" }),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx("div", {
            className:
              "x1n2onr6 x9f619 x78zum5 x1q0g3np x6s0dn4 xl56j7k xwnkcuf x5yr21d x1xnnf8n x106a9eq x11t971q xvc5jky xngnso2 x3gokd0 x88nbbm x2b8uid x1vvkbs x47corl",
            children: s._(
              /*BTDS*/ "You received a status, but your version of WhatsApp doesn't support it.",
            ),
          })),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n || t[3] !== r
          ? ((l = u.jsx(
              "div",
              babelHelpers.extends({}, a, {
                onMouseDown: n,
                onMouseUp: r,
                children: i,
              }),
            )),
            (t[2] = n),
            (t[3] = r),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    l.default = c;
  },
  226,
);
