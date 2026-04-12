__d(
  "WAWebStatusLikeIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "status-like";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.innerStyles,
        l = t.name,
        u = t.viewBox,
        m = t.width,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _;
      if (u) {
        var f = u.height,
          g = f === void 0 ? 0 : f,
          h = u.width,
          y = h === void 0 ? 0 : h,
          C = u.x,
          b = C === void 0 ? 0 : C,
          v = u.y,
          S = v === void 0 ? 0 : v;
        _ = [b, S, y, g].join(" ");
      }
      var R = 17,
        L = 18;
      return (
        (n != null || m != null) && ((R = n), (L = m)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: l != null ? l : d }, p, {
            children: c.jsxs("svg", {
              viewBox: _ != null ? _ : "0 0 18 17",
              height: R,
              width: L,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: l != null ? l : d }),
                c.jsx("path", {
                  fill: "#25D366",
                  d: "M8.46488 3.12843C6.98118 1.62981 4.58085 1.62253 3.10357 3.11467C1.62629 4.6068 1.6335 7.03128 3.11719 8.5299L8.60947 14.0774C8.83729 14.3075 9.20665 14.3075 9.43446 14.0774L14.8982 8.56198C16.372 7.06499 16.3674 4.64731 14.8834 3.14842C13.3971 1.64712 10.9956 1.63984 9.51569 3.13464L8.99386 3.66273L8.46488 3.12843Z",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  fill: "none",
                  d: "M16.3191 9.96952L10.8557 15.4845C9.84525 16.5047 8.19851 16.505 7.1882 15.4845L1.69593 9.93703C-0.552382 7.66611 -0.573625 3.98616 1.6823 1.70755C3.67116 -0.301315 6.74551 -0.531042 8.99542 0.983327C11.2521 -0.525092 14.3225 -0.260789 16.3047 1.74131C18.5559 4.01515 18.568 7.68525 16.3234 9.96514L16.3191 9.96952ZM9.72885 2.93507C9.65591 2.99832 9.5848 3.06485 9.51569 3.13465L8.99387 3.66274L8.46488 3.12843C8.39391 3.05674 8.32083 2.98846 8.24585 2.92359C6.75364 1.63255 4.51018 1.69392 3.10357 3.11467C1.62629 4.60681 1.6335 7.03129 3.1172 8.52991L8.60948 14.0774C8.83729 14.3075 9.20665 14.3075 9.43446 14.0774L14.8982 8.56199C16.372 7.065 16.3674 4.64731 14.8834 3.14843C13.4665 1.71723 11.2179 1.64378 9.72885 2.93507Z",
                  className: s(i == null ? void 0 : i.border),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.StatusLikeIcon = m));
  },
  98,
);
