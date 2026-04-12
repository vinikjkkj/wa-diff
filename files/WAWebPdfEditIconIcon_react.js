__d(
  "WAWebPdfEditIconIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "pdf-edit-icon";
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
      var S = 17,
        R = 17;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 17 17",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M16.628 10.346c-1.267-1.318-4.732-.778-5.568-.682a15 15 0 0 1-2.34-3.073 14 14 0 0 0 .777-4.051C9.497 1.318 9.008 0 7.64 0c-.482.013-.92.27-1.17.682-.585 1.022-.341 3.073.585 5.176a35 35 0 0 1-2.392 5.568C3.247 12.011.27 13.381.026 14.84c-.09.45.058.913.392 1.222.34.29.772.444 1.222.437 1.807 0 3.562-2.488 4.784-4.59a33 33 0 0 1 4.25-1.126c1.903 1.659 3.562 1.903 4.443 1.903 1.17 0 1.614-.488 1.755-.926a1.27 1.27 0 0 0-.244-1.414m-1.222.836c-.051.34-.488.681-1.266.488a6.7 6.7 0 0 1-2.489-1.266c.637-.097 2.051-.245 3.074-.052.386.097.778.34.681.83M7.253 1.119a.5.5 0 0 1 .392-.245c.438 0 .54.54.54.978A10.8 10.8 0 0 1 7.6 4.88c-.74-1.954-.591-3.318-.347-3.761m-.096 9.471q.635-1.332 1.125-2.733c.45.72.977 1.39 1.562 2-.006.051-1.517.347-2.687.733m-2.88 1.955c-1.126 1.858-2.296 3.028-2.933 3.028a.8.8 0 0 1-.296-.096.37.37 0 0 1-.148-.437c.155-.688 1.421-1.614 3.376-2.495",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PdfEditIconIcon = m));
  },
  98,
);
