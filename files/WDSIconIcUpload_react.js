__d(
  "WDSIconIcUpload.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-upload";
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
                  d: "M6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V16C4 15.7167 4.09583 15.4792 4.2875 15.2875C4.47917 15.0958 4.71667 15 5 15C5.28333 15 5.52083 15.0958 5.7125 15.2875C5.90417 15.4792 6 15.7167 6 16V18H18V16C18 15.7167 18.0958 15.4792 18.2875 15.2875C18.4792 15.0958 18.7167 15 19 15C19.2833 15 19.5208 15.0958 19.7125 15.2875C19.9042 15.4792 20 15.7167 20 16V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6ZM11 7.84999L9.125 9.72499C8.925 9.92499 8.6875 10.0208 8.4125 10.0125C8.1375 10.0042 7.9 9.89999 7.7 9.69999C7.51667 9.49999 7.42083 9.26665 7.4125 8.99999C7.40417 8.73332 7.5 8.49999 7.7 8.29999L11.3 4.69999C11.4 4.59999 11.5083 4.52915 11.625 4.48749C11.7417 4.44582 11.8667 4.42499 12 4.42499C12.1333 4.42499 12.2583 4.44582 12.375 4.48749C12.4917 4.52915 12.6 4.59999 12.7 4.69999L16.3 8.29999C16.5 8.49999 16.5958 8.73332 16.5875 8.99999C16.5792 9.26665 16.4833 9.49999 16.3 9.69999C16.1 9.89999 15.8625 10.0042 15.5875 10.0125C15.3125 10.0208 15.075 9.92499 14.875 9.72499L13 7.84999V15C13 15.2833 12.9042 15.5208 12.7125 15.7125C12.5208 15.9042 12.2833 16 12 16C11.7167 16 11.4792 15.9042 11.2875 15.7125C11.0958 15.5208 11 15.2833 11 15V7.84999Z",
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
