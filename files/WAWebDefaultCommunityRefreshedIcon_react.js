__d(
  "WAWebDefaultCommunityRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "default-community-refreshed";
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
      var R = 212,
        L = 212;
      return (
        (n != null || m != null) && ((R = n), (L = m)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: l != null ? l : d }, p, {
            children: c.jsxs("svg", {
              viewBox: _ != null ? _ : "0 0 48 48",
              height: R,
              width: L,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: l != null ? l : d }),
                c.jsx("path", {
                  d: "M15.029 24.901a9.5 9.5 0 0 0-2.965.346c-.592.167-1.264.44-1.828.875-.576.444-1.1 1.108-1.203 2.022-.048.427-.033 1.342-.021 1.86.02.924.777 1.996 1.684 1.996h3.767c-.224-.475-.357-1.356-.374-1.918-.016-.551-.06-2.039.048-2.828.055-.412.153-.797.281-1.154a5.4 5.4 0 0 1 .61-1.199M33.937 32h3.767c.907 0 1.663-1.072 1.684-1.996.012-.518.027-1.433-.021-1.86-.104-.914-.627-1.578-1.203-2.022-.564-.435-1.236-.708-1.828-.875a9.5 9.5 0 0 0-2.965-.346c.24.35.45.748.61 1.199.129.357.227.742.282 1.154.107.79.064 2.277.048 2.828-.017.562-.15 1.443-.374 1.918",
                  fill: "#606263",
                  className: s(i == null ? void 0 : i.primary),
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.803 24.383a16 16 0 0 1 4.397-.616c1.818 0 3.335.308 4.397.616.548.159 1.202.383 1.788.743.594.366 1.183.913 1.477 1.734q.117.321.17.696c.076.56.047 1.82.028 2.46-.027.918-.781 1.984-1.684 1.984H18.024c-.903 0-1.657-1.066-1.684-1.984-.019-.64-.048-1.9.028-2.46q.053-.375.17-.696c.294-.821.883-1.368 1.477-1.734.585-.36 1.24-.585 1.787-.743m10.591-4.632a3.37 3.37 0 0 1 3.377-3.369 3.37 3.37 0 0 1 3.378 3.37 3.38 3.38 0 0 1-3.378 3.381 3.38 3.38 0 0 1-3.378-3.382M19.696 17.51A4.51 4.51 0 0 1 24.2 13a4.51 4.51 0 0 1 4.504 4.51 4.5 4.5 0 0 1-4.504 4.496 4.5 4.5 0 0 1-4.504-4.497m-8.444 2.242a3.37 3.37 0 0 1 3.378-3.369 3.37 3.37 0 0 1 3.377 3.37 3.38 3.38 0 0 1-3.377 3.381 3.38 3.38 0 0 1-3.378-3.382",
                  fill: "#606263",
                  className: s(i == null ? void 0 : i.primary),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.DefaultCommunityRefreshedIcon = m));
  },
  98,
);
