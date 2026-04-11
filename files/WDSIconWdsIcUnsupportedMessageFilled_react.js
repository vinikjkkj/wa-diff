__d(
  "WDSIconWdsIcUnsupportedMessageFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-unsupported-message-filled";
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
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.3333 4C20.8061 4 22 5.19391 22 6.66667V17.3333C22 18.8061 20.8061 20 19.3333 20H5.66665C4.19389 20 2.99998 18.8061 2.99998 17.3333V8.84848L0.944298 5.52617C0.532088 4.85997 1.01126 4 1.79468 4H19.3333ZM13.8971 9.20104L12.5 10.5982L11.1027 9.20088C10.7967 8.89484 10.3212 8.77978 9.93648 8.9788C9.29872 9.30927 9.21013 10.1118 9.67137 10.573L11.0983 11.9999L9.70083 13.3973C9.39445 13.7037 9.27965 14.1795 9.47925 14.5642C9.80996 15.2016 10.6121 15.2892 11.0731 14.8282L12.4998 13.4015L13.8968 14.7984C14.2032 15.1048 14.6786 15.2199 15.0634 15.0208C15.7008 14.6907 15.7897 13.8879 15.3285 13.4266L13.9016 11.9997L15.3283 10.573C15.789 10.1123 15.7014 9.31017 15.064 8.97945C14.6796 8.77955 14.2035 8.89465 13.8971 9.20104Z",
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
