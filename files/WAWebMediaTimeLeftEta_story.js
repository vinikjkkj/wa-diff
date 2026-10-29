__d(
  "WAWebMediaTimeLeftEta.story",
  [
    "WAWebMediaTimeLeftEta.react",
    "react",
    "react-compiler-runtime",
    "useWAWebInterval",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e = o("react-compiler-runtime").c(17),
        t = u(0),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a(d);
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = r("useWAWebInterval")(i, 1e3),
        c = l[0],
        m = l[1],
        p;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = function () {
            return a(0);
          }),
          (e[1] = p))
        : (p = e[1]);
      var _ = p,
        f;
      e[2] !== c
        ? ((f = s.jsx("button", { onClick: c, children: "Start" })),
          (e[2] = c),
          (e[3] = f))
        : (f = e[3]);
      var g;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s.jsx("br", {})), (e[4] = g))
        : (g = e[4]);
      var h;
      e[5] !== m
        ? ((h = s.jsx("button", { onClick: m, children: "Stop" })),
          (e[5] = m),
          (e[6] = h))
        : (h = e[6]);
      var y, C, b, v;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s.jsx("br", {})),
          (C = s.jsx("button", { onClick: _, children: "Reset" })),
          (b = s.jsx("br", {})),
          (v = s.jsx("br", {})),
          (e[7] = y),
          (e[8] = C),
          (e[9] = b),
          (e[10] = v))
        : ((y = e[7]), (C = e[8]), (b = e[9]), (v = e[10]));
      var S;
      e[11] !== n
        ? ((S = s.jsx(r("WAWebMediaTimeLeftEta.react"), {
            loadedSize: n,
            size: 15728640,
          })),
          (e[11] = n),
          (e[12] = S))
        : (S = e[12]);
      var R;
      return (
        e[13] !== f || e[14] !== h || e[15] !== S
          ? ((R = s.jsxs("div", { children: [f, g, h, y, C, b, v, S] })),
            (e[13] = f),
            (e[14] = h),
            (e[15] = S),
            (e[16] = R))
          : (R = e[16]),
        R
      );
    }
    function d(e) {
      return e < 15728640 ? e + 524288 : e;
    }
    var m = {
      storyName: "WAWebMediaTimeLeftEta",
      component: r("WAWebMediaTimeLeftEta.react"),
      description: "Time Left ETA",
      examples: [{ example: c, title: "Basic" }],
    };
    l.default = m;
  },
  98,
);
