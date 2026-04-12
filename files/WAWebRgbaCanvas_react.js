__d(
  "WAWebRgbaCanvas.react",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef;
    function m(e) {
      var t = e.height,
        n = e.rgbaBuffer,
        r = e.width,
        o = d(null),
        a = d(null);
      c(
        function () {
          var e = o.current,
            t = a.current;
          e &&
            t &&
            n &&
            (t.data.set(new Uint8Array(n)), e.putImageData(t, 0, 0));
        },
        [n],
      );
      var i = function (n) {
        n
          ? ((o.current = n.getContext("2d")),
            (a.current = o.current.createImageData(r, t)))
          : ((o.current = null), (a.current = null));
      };
      return s.jsx("canvas", {
        role: "button",
        className: e.className,
        width: e.width,
        height: e.height,
        onClick: e.onClick,
        onMouseEnter: e.onMouseEnter,
        onMouseLeave: e.onMouseLeave,
        ref: i,
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
