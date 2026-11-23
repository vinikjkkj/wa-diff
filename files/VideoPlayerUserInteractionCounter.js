__d(
  "VideoPlayerUserInteractionCounter",
  ["FBLogger", "react", "usePrevious"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect,
      d = s.useRef,
      m = s.useState;
    function p(e, t, n) {
      var o = d(e);
      c(
        function () {
          if (e !== o.current)
            throw r("FBLogger")("comet_video_player").mustfixThrow(
              "User interaction name should not change between renders ('%s' -> '%s').",
              o.current,
              e,
            );
        },
        [e],
      );
      var a = d(n);
      c(
        function () {
          a.current = n;
        },
        [n],
      );
      var i = r("usePrevious")(t),
        l = d(!1);
      (c(
        function () {
          var e = o.current,
            n = a.current;
          n &&
            (i === null || t !== i) &&
            (t
              ? ((l.current = !0), n({ name: e, type: "started" }))
              : i !== null &&
                ((l.current = !1), n({ name: e, type: "ended" })));
        },
        [t, i],
      ),
        c(function () {
          var e = o.current,
            t = a.current;
          return function () {
            t && l.current && t({ name: e, type: "ended" });
          };
        }, []));
    }
    function _() {
      var e = d(new Set()),
        t = m(0),
        n = t[0],
        r = t[1],
        o = u(function (t) {
          var n = e.current;
          t.type === "started" || t.type === "happening"
            ? (n.add(t.name), r(n.size))
            : t.type === "ended" && (n.delete(t.name), r(n.size));
        }, []);
      return { ongoingInteractionsCount: n, onUserInteraction: o };
    }
    ((l.useVideoPlayerUserInteraction = p),
      (l.useVideoPlayerUserInteractionCounter = _));
  },
  98,
);
