__d(
  "WAWebNonContactsIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "non-contacts";
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
              fill: "#010101",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M9.77007 6.19461C10.3688 5.26701 11.4144 4.65986 12.595 4.65986C14.4587 4.65986 15.9681 6.16931 15.9681 8.03294C15.9681 9.21352 15.361 10.2592 14.4334 10.8579L9.77007 6.19461ZM19.3412 15.7657C19.3243 14.8381 18.8099 13.9864 17.9835 13.5564C17.5282 13.3202 17.0306 13.101 16.4909 12.9155L19.3412 15.7657ZM19.7544 18.5654L5.43567 4.24666C5.10679 3.91778 4.57553 3.91778 4.24666 4.24666C3.91778 4.57553 3.91778 5.10679 4.24666 5.43567L11.1446 12.3336C9.60985 12.5276 8.26905 13.0082 7.18124 13.5648C6.35483 14.0033 5.84887 14.8719 5.84887 15.8079V18.1522H16.9547L18.5569 19.7544C18.8858 20.0833 19.4171 20.0833 19.746 19.7544C20.0833 19.4255 20.0833 18.8943 19.7544 18.5654Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.NonContactsIcon = m));
  },
  98,
);
