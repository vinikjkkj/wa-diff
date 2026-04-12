__d(
  "WAWebBusinessAdBudgetIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-ad-budget";
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
      var S = 16,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M15.8335 8.66658V1.99992C15.8335 1.08325 15.0835 0.333252 14.1668 0.333252H2.50016C1.5835 0.333252 0.833496 1.08325 0.833496 1.99992V8.66658C0.833496 9.58325 1.5835 10.3333 2.50016 10.3333H14.1668C15.0835 10.3333 15.8335 9.58325 15.8335 8.66658ZM8.3335 7.83325C6.95016 7.83325 5.8335 6.71659 5.8335 5.33325C5.8335 3.94992 6.95016 2.83325 8.3335 2.83325C9.71683 2.83325 10.8335 3.94992 10.8335 5.33325C10.8335 6.71659 9.71683 7.83325 8.3335 7.83325ZM19.1668 2.83325V11.9999C19.1668 12.9166 18.4168 13.6666 17.5002 13.6666H3.3335V11.9999H17.5002V2.83325H19.1668Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BusinessAdBudgetIcon = m));
  },
  98,
);
