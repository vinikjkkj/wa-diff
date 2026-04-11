__d(
  "WAWebStickerControlledAnimationCanvas.react",
  [
    "WAAbortError",
    "WAWebAnimateStickerOnCanvas",
    "WAWebRgbaCanvas.react",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = e.animationFrames,
        n = e.maxLoops,
        a = e.startAnimation,
        i = r("useWAWebUnmountSignal")(),
        l = d(!1),
        u = d(0),
        p = d(!1),
        _ = m(null),
        f = _[0],
        g = _[1],
        h = function () {
          l.current ||
            ((l.current = !0),
            r("WAWebAnimateStickerOnCanvas")({
              animationFrames: t,
              signal: i,
              onFrameChange: function (t) {
                return g(t);
              },
              shouldStop: function () {
                return u.current >= n ? !0 : (p.current || u.current++, !1);
              },
            })
              .catch(function (e) {
                if (e.name !== o("WAAbortError").ABORT_ERROR) throw e;
              })
              .finally(function () {
                l.current = !1;
              }));
        },
        y = function () {
          t.length !== 0 && g(t[0].rgbaBuffer);
        };
      c(function () {
        a ? h() : y();
      }, []);
      var C = function () {
          n !== 1 / 0 && ((p.current = !0), (u.current = 1), h());
        },
        b = function () {
          p.current = !1;
        };
      return f
        ? s.jsx(r("WAWebRgbaCanvas.react"), {
            rgbaBuffer: f,
            className: e.className,
            width: e.width,
            height: e.height,
            onClick: e.onClick,
            onMouseEnter: C,
            onMouseLeave: b,
          })
        : null;
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
