__d(
  "WAWebMastercardLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "mastercard-logo";
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
      var S = 13,
        R = 22;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 22 13",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M7.932 1.634h6.139v9.731H7.93z",
                  style: { fill: "color(display-p3 1 .3725 0)" },
                }),
                c.jsx("path", {
                  d: "M8.564 6.5c0-.937.218-1.862.64-2.705A6.2 6.2 0 0 1 11 1.635 6.5 6.5 0 0 0 7.74.348a6.55 6.55 0 0 0-3.466.587 6.3 6.3 0 0 0-2.618 2.283A6.06 6.06 0 0 0 .683 6.5c0 1.161.337 2.3.972 3.284a6.3 6.3 0 0 0 2.618 2.283 6.55 6.55 0 0 0 3.467.587A6.5 6.5 0 0 0 11 11.367a6.2 6.2 0 0 1-1.796-2.16 6 6 0 0 1-.64-2.707",
                  style: { fill: "color(display-p3 .9216 0 .1059)" },
                }),
                c.jsx("path", {
                  d: "M20.707 10.336v-.2h.089v-.041h-.21v.041h.082v.2zm.41 0v-.241h-.064l-.075.172-.074-.172h-.064v.24h.046v-.182l.07.157h.047l.07-.157v.183zm.2-3.836c0 1.162-.337 2.3-.972 3.284a6.3 6.3 0 0 1-2.618 2.283 6.55 6.55 0 0 1-3.468.587A6.5 6.5 0 0 1 11 11.365a6.2 6.2 0 0 0 1.795-2.16 6.04 6.04 0 0 0 .642-2.705 6.04 6.04 0 0 0-.642-2.706A6.2 6.2 0 0 0 11 1.634 6.5 6.5 0 0 1 14.26.345a6.55 6.55 0 0 1 3.468.587 6.3 6.3 0 0 1 2.618 2.283c.635.985.972 2.122.972 3.284z",
                  style: { fill: "color(display-p3 .9686 .6196 .1059)" },
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MastercardLogoIcon = m));
  },
  98,
);
