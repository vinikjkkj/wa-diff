__d(
  "WAWebCameraIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "camera";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 24 24",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M21.317,4.381H10.971L9.078,2.45C8.832,2.199,8.342,1.993,7.989,1.993H4.905 c-0.352,0-0.837,0.211-1.078,0.468L1.201,5.272C0.96,5.529,0.763,6.028,0.763,6.38v1.878c0,0.003-0.002,0.007-0.002,0.01v11.189 c0,1.061,0.86,1.921,1.921,1.921h18.634c1.061,0,1.921-0.86,1.921-1.921V6.302C23.238,5.241,22.378,4.381,21.317,4.381z  M12.076,18.51c-3.08,0-5.577-2.497-5.577-5.577s2.497-5.577,5.577-5.577s5.577,2.497,5.577,5.577 C17.654,16.013,15.157,18.51,12.076,18.51z M12.076,9.004c-2.17,0-3.929,1.759-3.929,3.929s1.759,3.929,3.929,3.929 s3.929-1.759,3.929-3.929C16.004,10.763,14.245,9.004,12.076,9.004z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.CameraIcon = m));
  },
  98,
);
