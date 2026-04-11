__d(
  "VideoPlayerUserInteractionCounter",
  ["FBLogger", "react", "react-compiler-runtime", "usePrevious"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p(e, t, n) {
      var a = o("react-compiler-runtime").c(12),
        i = d(e),
        l,
        s;
      (a[0] !== e
        ? ((l = function () {
            if (e !== i.current)
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "User interaction name should not change between renders ('%s' -> '%s').",
                i.current,
                e,
              );
          }),
          (s = [e]),
          (a[0] = e),
          (a[1] = l),
          (a[2] = s))
        : ((l = a[1]), (s = a[2])),
        c(l, s));
      var u = d(n),
        m,
        p;
      (a[3] !== n
        ? ((m = function () {
            u.current = n;
          }),
          (p = [n]),
          (a[3] = n),
          (a[4] = m),
          (a[5] = p))
        : ((m = a[4]), (p = a[5])),
        c(m, p));
      var _ = r("usePrevious")(t),
        f = d(!1),
        g,
        h;
      (a[6] !== t || a[7] !== _
        ? ((g = function () {
            var e = i.current,
              n = u.current;
            n &&
              (_ === null || t !== _) &&
              (t
                ? ((f.current = !0), n({ name: e, type: "started" }))
                : _ !== null &&
                  ((f.current = !1), n({ name: e, type: "ended" })));
          }),
          (h = [t, _]),
          (a[6] = t),
          (a[7] = _),
          (a[8] = g),
          (a[9] = h))
        : ((g = a[8]), (h = a[9])),
        c(g, h));
      var y, C;
      (a[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            var e = i.current,
              t = u.current;
            return function () {
              t && f.current && t({ name: e, type: "ended" });
            };
          }),
          (C = []),
          (a[10] = y),
          (a[11] = C))
        : ((y = a[10]), (C = a[11])),
        c(y, C));
    }
    function _() {
      var e = o("react-compiler-runtime").c(4),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = new Set()), (e[0] = t))
        : (t = e[0]);
      var n = d(t),
        r = m(0),
        a = r[0],
        i = r[1],
        l;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = function (t) {
            var e = n.current;
            t.type === "started" || t.type === "happening"
              ? (e.add(t.name), i(e.size))
              : t.type === "ended" && (e.delete(t.name), i(e.size));
          }),
          (e[1] = l))
        : (l = e[1]);
      var s = l,
        u;
      return (
        e[2] !== a
          ? ((u = { ongoingInteractionsCount: a, onUserInteraction: s }),
            (e[2] = a),
            (e[3] = u))
          : (u = e[3]),
        u
      );
    }
    ((l.useVideoPlayerUserInteraction = p),
      (l.useVideoPlayerUserInteractionCounter = _));
  },
  98,
);
