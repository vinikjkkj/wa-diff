__d(
  "WAWebBaseShimmerComponents.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = "x9hsi78-B",
      d = {
        background: { backgroundColor: "x4wrhlh", $$css: !0 },
        container: {
          position: "x1n2onr6",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      },
      m = {
        container: {
          position: "x1n2onr6",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          backgroundColor: "x4wrhlh",
          $$css: !0,
        },
      };
    function p(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.diameter,
        i = t.xstyle,
        l;
      n[0] !== i
        ? ((l = (e || (e = r("stylex")))([d.container, d.background, i])),
          (n[0] = i),
          (n[1] = l))
        : (l = n[1]);
      var s = a + "px",
        c = a + "px",
        m;
      n[2] !== s || n[3] !== c
        ? ((m = { height: s, width: c }), (n[2] = s), (n[3] = c), (n[4] = m))
        : (m = n[4]);
      var p;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx("div", {
            className:
              "x1n8ec5w x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl",
          })),
          (n[5] = p))
        : (p = n[5]);
      var _;
      return (
        n[6] !== l || n[7] !== m
          ? ((_ = u.jsx("div", { className: l, style: m, children: p })),
            (n[6] = l),
            (n[7] = m),
            (n[8] = _))
          : (_ = n[8]),
        _
      );
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(9),
        a = t.height,
        i = t.width,
        l = t.xstyle,
        s = a + "px",
        c = i === "100%" ? i : i + "px",
        d;
      n[0] !== s || n[1] !== c
        ? ((d = { height: s, width: c }), (n[0] = s), (n[1] = c), (n[2] = d))
        : (d = n[2]);
      var p = d,
        _;
      n[3] !== l
        ? ((_ = (e || (e = r("stylex")))([m.container, l])),
          (n[3] = l),
          (n[4] = _))
        : (_ = n[4]);
      var f;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx("div", {
            className:
              "x1n8ec5w x11mqxog xvjg3zp x1esw782 xa4qsjk x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d x47corl",
          })),
          (n[5] = f))
        : (f = n[5]);
      var g;
      return (
        n[6] !== p || n[7] !== _
          ? ((g = u.jsx("div", { className: _, style: p, children: f })),
            (n[6] = p),
            (n[7] = _),
            (n[8] = g))
          : (g = n[8]),
        g
      );
    }
    function f(e, t) {
      return Array(t)
        .fill(null)
        .map(function (t, n) {
          return u.jsx(e, {}, n);
        });
    }
    ((l.CircleShimmer = p), (l.RectangleShimmer = _), (l.times = f));
  },
  98,
);
