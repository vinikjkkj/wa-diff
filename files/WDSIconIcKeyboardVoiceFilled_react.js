__d(
  "WDSIconIcKeyboardVoiceFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-keyboard-voice-filled";
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
                  d: "M12 14C11.1667 14 10.4583 13.7083 9.875 13.125C9.29166 12.5417 9 11.8333 9 11V5C9 4.16667 9.29166 3.45833 9.875 2.875C10.4583 2.29167 11.1667 2 12 2C12.8333 2 13.5417 2.29167 14.125 2.875C14.7083 3.45833 15 4.16667 15 5V11C15 11.8333 14.7083 12.5417 14.125 13.125C13.5417 13.7083 12.8333 14 12 14ZM12 21C11.7167 21 11.4792 20.9042 11.2875 20.7125C11.0958 20.5208 11 20.2833 11 20V17.9C9.45 17.7 8.13333 17.0583 7.05 15.975C5.96666 14.8917 5.30833 13.5917 5.075 12.075C5.025 11.7917 5.1 11.5417 5.3 11.325C5.5 11.1083 5.76666 11 6.1 11C6.33333 11 6.54166 11.0875 6.725 11.2625C6.90833 11.4375 7.025 11.65 7.075 11.9C7.29166 13.0667 7.85833 14.0417 8.775 14.825C9.69166 15.6083 10.7667 16 12 16C13.2333 16 14.3083 15.6083 15.225 14.825C16.1417 14.0417 16.7083 13.0667 16.925 11.9C16.975 11.65 17.0958 11.4375 17.2875 11.2625C17.4792 11.0875 17.6917 11 17.925 11C18.2417 11 18.5 11.1083 18.7 11.325C18.9 11.5417 18.975 11.7917 18.925 12.075C18.6917 13.5917 18.0333 14.8917 16.95 15.975C15.8667 17.0583 14.55 17.7 13 17.9V20C13 20.2833 12.9042 20.5208 12.7125 20.7125C12.5208 20.9042 12.2833 21 12 21Z",
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
