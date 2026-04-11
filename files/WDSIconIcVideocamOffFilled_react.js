__d(
  "WDSIconIcVideocamOffFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-videocam-off-filled";
    function m(t) {
      var n = t.height,
        o = t.iconXstyle,
        a = t.viewBox,
        i = t.width,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u;
      if (a) {
        var m = a.height,
          p = m === void 0 ? 0 : m,
          _ = a.width,
          f = _ === void 0 ? 0 : _,
          g = a.x,
          h = g === void 0 ? 0 : g,
          y = a.y,
          C = y === void 0 ? 0 : y;
        u = [h, C, f, p].join(" ");
      }
      var b = 24,
        v = 24;
      return (
        (n != null || i != null) && ((b = n), (v = i)),
        c.jsx(
          r("WDSSvgComponentBase.react"),
          babelHelpers.extends({}, l, {
            children: c.jsxs("svg", {
              viewBox: u != null ? u : "0 0 24 24",
              height: b,
              width: v,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(o),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: d }),
                c.jsx("path", {
                  d: "M1.75004 4.14998L2.64091 5.04085C2.48033 5.3281 2.40004 5.64781 2.40004 5.99998V18C2.40004 18.55 2.59587 19.0208 2.98754 19.4125C3.3792 19.8041 3.85004 20 4.40004 20H16.4C16.7522 20 17.0719 19.9197 17.3592 19.7591L20.25 22.65C20.4334 22.8333 20.6667 22.925 20.95 22.925C21.2334 22.925 21.4667 22.8333 21.65 22.65C21.8334 22.4666 21.925 22.2333 21.925 21.95C21.925 21.6666 21.8334 21.4333 21.65 21.25L18.4 18L4.40004 3.99998L3.15004 2.74998C2.9667 2.56664 2.73337 2.47498 2.45004 2.47498C2.1667 2.47498 1.93337 2.56664 1.75004 2.74998C1.5667 2.93331 1.47504 3.16664 1.47504 3.44998C1.47504 3.73331 1.5667 3.96664 1.75004 4.14998ZM21.55 7.34998L18.4 10.5V5.99998C18.4 5.44998 18.2042 4.97914 17.8125 4.58748C17.4209 4.19581 16.95 3.99998 16.4 3.99998H9.65004C9.4167 3.99998 9.22504 4.05831 9.07504 4.17498C8.92504 4.29164 8.80837 4.44164 8.72504 4.62498C8.6417 4.80831 8.61254 4.99164 8.63754 5.17498C8.66254 5.35831 8.75837 5.53331 8.92504 5.69998L16.7 13.475C16.9334 13.7083 17.2042 13.8 17.5125 13.75C17.8209 13.7 18.0584 13.5583 18.225 13.325L21.55 16.65C21.7167 16.8166 21.9 16.8583 22.1 16.775C22.3 16.6916 22.4 16.5333 22.4 16.3V7.69998C22.4 7.46664 22.3 7.30831 22.1 7.22498C21.9 7.14164 21.7167 7.18331 21.55 7.34998Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
