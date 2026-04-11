__d(
  "VideoPlayerCaptionsArea.react",
  [
    "VideoPlayerCaptions.react",
    "VideoPlayerContexts",
    "VideoPlayerHooks",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = e || (e = o("react")),
      d = e,
      m = d.useReducer,
      p = d.useState;
    function _(e, t) {
      switch (t.type) {
        case "reserve":
          return e.concat(t.reservation);
        case "release":
          return e.filter(function (e) {
            return e !== t.reservation;
          });
        default:
          return e;
      }
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = []), (t[0] = a))
        : (a = t[0]);
      var i = m(_, a),
        l = i[0],
        d = i[1],
        f;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = {
            release: function (t) {
              d({ reservation: t, type: "release" });
            },
            reserve: function (t) {
              return (d({ reservation: t, type: "reserve" }), t);
            },
          }),
          (t[1] = f))
        : (f = t[1]);
      var g = p(f),
        h = g[0],
        y = (s || (s = o("VideoPlayerHooks"))).useCaptionsVisible(),
        C;
      t[2] !== y
        ? ((C = y ? c.jsx(r("VideoPlayerCaptions.react"), {}) : null),
          (t[2] = y),
          (t[3] = C))
        : (C = t[3]);
      var b;
      t[4] !== n || t[5] !== l || t[6] !== C
        ? ((b = c.jsxs(
            (u || (u = o("VideoPlayerContexts")))
              .VideoPlayerCaptionsReservationsContext.Provider,
            { value: l, children: [C, n] },
          )),
          (t[4] = n),
          (t[5] = l),
          (t[6] = C),
          (t[7] = b))
        : (b = t[7]);
      var v;
      return (
        t[8] !== h || t[9] !== b
          ? ((v = c.jsx(
              (u || (u = o("VideoPlayerContexts")))
                .VideoPlayerCaptionsReservationActionsContext.Provider,
              { value: h, children: b },
            )),
            (t[8] = h),
            (t[9] = b),
            (t[10] = v))
          : (v = t[10]),
        v
      );
    }
    l.default = f;
  },
  98,
);
