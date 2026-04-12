__d(
  "WAWebForwardRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "forward-refreshed";
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
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M19.175 11L15.3 7.12505C15.1 6.92505 15 6.68755 15 6.41255C15 6.13755 15.1 5.90005 15.3 5.70005C15.5 5.51672 15.7375 5.42505 16.0125 5.42505C16.2875 5.42505 16.5167 5.51672 16.7 5.70005L21.3 10.3C21.4 10.4 21.4708 10.5084 21.5125 10.625C21.5542 10.7417 21.575 10.8667 21.575 11C21.575 11.1334 21.5542 11.2584 21.5125 11.375C21.4708 11.4917 21.4 11.6 21.3 11.7L16.7 16.3C16.5 16.5 16.2667 16.5959 16 16.5875C15.7333 16.5792 15.5 16.4834 15.3 16.3C15.1 16.1 14.9958 15.8667 14.9875 15.6C14.9792 15.3334 15.075 15.1 15.275 14.9L19.175 11ZM13.175 12H7C6.16667 12 5.45833 12.2917 4.875 12.875C4.29167 13.4584 4 14.1667 4 15V18C4 18.2834 3.90417 18.5209 3.7125 18.7125C3.52083 18.9042 3.28333 19 3 19C2.71667 19 2.47917 18.9042 2.2875 18.7125C2.09583 18.5209 2 18.2834 2 18V15C2 13.6167 2.4875 12.4375 3.4625 11.4625C4.4375 10.4875 5.61667 10 7 10H13.175L10.3 7.12505C10.1 6.92505 10 6.68755 10 6.41255C10 6.13755 10.1 5.90005 10.3 5.70005C10.5 5.51672 10.7375 5.42505 11.0125 5.42505C11.2875 5.42505 11.5167 5.51672 11.7 5.70005L16.3 10.3C16.4 10.4 16.4708 10.5084 16.5125 10.625C16.5542 10.7417 16.575 10.8667 16.575 11C16.575 11.1334 16.5542 11.2584 16.5125 11.375C16.4708 11.4917 16.4 11.6 16.3 11.7L11.7 16.3C11.5 16.5 11.2667 16.5959 11 16.5875C10.7333 16.5792 10.5 16.4834 10.3 16.3C10.1 16.1 9.99583 15.8667 9.9875 15.6C9.97917 15.3334 10.075 15.1 10.275 14.9L13.175 12Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ForwardRefreshedIcon = m));
  },
  98,
);
