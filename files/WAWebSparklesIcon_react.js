__d(
  "WAWebSparklesIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "sparkles";
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
      var S = 25,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 25",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M6.96618 14.136C6.90537 13.8719 6.74322 13.75 6.49997 13.75C6.25672 13.75 6.07429 13.8922 6.03376 14.136C5.46619 17.1834 5.48646 17.1631 2.42568 17.7726C2.14189 17.8335 2 18.0164 2 18.2398C2 18.4836 2.14189 18.6665 2.42568 18.7274C5.48646 19.3369 5.38511 19.3572 6.03376 22.3437C6.07429 22.5875 6.25672 22.75 6.49997 22.75C6.76347 22.75 6.90537 22.6078 6.96618 22.3437C7.61483 19.3572 7.51347 19.3369 10.5743 18.7274C10.8377 18.6665 11 18.5039 11 18.2398C11 17.996 10.8377 17.8335 10.5743 17.7726C7.51724 17.2044 7.51348 17.1835 6.9682 14.1472L6.96618 14.136Z",
                  fill: "currentColor",
                  style: { fillOpacity: 1 },
                }),
                c.jsx("path", {
                  d: "M15.1417 3.39253C15.1195 2.99372 14.854 2.75 14.4779 2.75C14.146 2.75 13.8805 2.99372 13.8585 3.34822C13.1506 8.57718 12.9956 8.55501 7.57521 9.61853C7.24331 9.66284 7 9.90658 7 10.2611C7 10.6156 7.24331 10.8593 7.57521 10.9036C12.9956 11.6791 13.1725 11.8342 13.8585 17.1296C13.8805 17.5063 14.146 17.75 14.4779 17.75C14.854 17.75 15.1195 17.5063 15.1417 17.1075C15.7833 11.9007 16.0708 11.9228 21.4248 10.9036C21.7567 10.8371 22 10.6156 22 10.2611C22 9.88441 21.7567 9.66284 21.3362 9.61853C16.0266 8.73228 15.7833 8.59932 15.1417 3.39253Z",
                  fill: "currentColor",
                  style: { fillOpacity: 1 },
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.SparklesIcon = m));
  },
  98,
);
