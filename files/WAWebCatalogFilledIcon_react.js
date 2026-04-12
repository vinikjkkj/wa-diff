__d(
  "WAWebCatalogFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "catalog-filled";
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
      var S = 32,
        R = 32;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 32 32",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M8.93898 7H23.1415C24.3842 7 25.475 7.79566 25.8101 8.94657L27.0147 12.153C27.058 12.3019 27.08 12.4557 27.08 12.6103C27.08 13.5469 26.2905 14.3063 25.3165 14.3063H6.76395C6.60323 14.3063 6.44326 14.2851 6.28849 14.2435C5.3506 13.9909 4.80316 13.055 5.06575 12.153L6.27038 8.94657C6.60544 7.79566 7.69622 7 8.93898 7Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M27.08 15.6514V15.2196H5V15.6514C5 16.6235 5.9968 17.9595 7.22641 17.9595C8.37781 17.9595 9.31446 16.7177 9.42996 15.8317C9.54546 16.7177 10.4809 17.9595 11.6329 17.9595C12.7849 17.9595 13.7216 16.7177 13.8365 15.8317C13.952 16.7177 14.8874 17.9595 16.04 17.9595C17.192 17.9595 18.128 16.7177 18.2435 15.8317C18.359 16.7177 19.2945 17.9595 20.4471 17.9595C21.5985 17.9595 22.5345 16.7177 22.6506 15.8317C22.7655 16.7177 23.7016 17.9595 24.8536 17.9595C26.0832 17.9595 27.08 16.6235 27.08 15.6514Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M5.96003 20.4987V24.337C5.96003 25.2554 6.74269 26 7.70814 26H19.6952C20.6606 26 21.4433 25.2554 21.4433 24.337V20.4987C21.4433 20.1051 21.1078 19.786 20.6941 19.786C20.2803 19.786 19.9449 20.1051 19.9449 20.4987V24.337C19.9449 24.4682 19.8331 24.5745 19.6952 24.5745H7.70814C7.57022 24.5745 7.45841 24.4682 7.45841 24.337V20.4987C7.45841 20.1051 7.12298 19.786 6.70922 19.786C6.29545 19.786 5.96003 20.1051 5.96003 20.4987Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M25.6986 20.3508V25.1393C25.6986 25.533 25.3632 25.8521 24.9494 25.8521C24.5357 25.8521 24.2002 25.533 24.2002 25.1393V20.3508C24.2002 19.9571 24.5357 19.638 24.9494 19.638C25.3632 19.638 25.6986 19.9571 25.6986 20.3508Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.CatalogFilledIcon = m));
  },
  98,
);
