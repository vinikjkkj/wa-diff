__d(
  "WAWebShopFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "shop-filled";
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
                  d: "M18.2825 5.72255C18.2825 2.65588 15.6178 0.166992 12.3346 0.166992C9.05137 0.166992 6.38672 2.65588 6.38672 5.72255H3.86177C2.60543 5.72255 1.56563 6.63496 1.48726 7.80615L0.674063 19.9591C0.551119 21.7964 2.04611 23.379 4.01323 23.4938C4.08734 23.4982 4.16158 23.5003 4.23584 23.5003H20.1211H20.4316C22.4026 23.5003 24.0003 22.0079 24.0003 20.167C24.0003 20.0976 23.998 20.0283 23.9934 19.9591L23.1802 7.80615C23.1018 6.63496 22.062 5.72255 20.8057 5.72255H18.2825ZM12.3346 2.38921C14.3093 2.38921 15.9033 3.8781 15.9033 5.72255H8.76587C8.76587 3.8781 10.3599 2.38921 12.3346 2.38921ZM12.3364 13.5003C9.49219 13.5003 7.09961 11.7337 6.42822 9.33366C6.2207 8.63366 6.81884 7.94477 7.6123 7.94477C8.18603 7.94477 8.6499 8.32255 8.80859 8.83366C9.23584 10.2448 10.6519 11.2781 12.3364 11.2781C14.021 11.2781 15.437 10.2448 15.8643 8.83366C16.023 8.32255 16.4868 7.94477 17.0606 7.94477C17.854 7.94477 18.4399 8.63366 18.2446 9.33366C17.5732 11.7337 15.1807 13.5003 12.3364 13.5003Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ShopFilledIcon = m));
  },
  98,
);
