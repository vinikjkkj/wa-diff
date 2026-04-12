__d(
  "WAWebStatusMediaControlsNoSoundIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "status-media-controls-no-sound";
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
                  d: "M3 9.99977V13.9998C3 14.5498 3.45 14.9998 4 14.9998H7L10.29 18.2898C10.92 18.9198 12 18.4698 12 17.5798V6.40977C12 5.51977 10.92 5.06977 10.29 5.69977L7 8.99977H4C3.45 8.99977 3 9.44977 3 9.99977Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M18.5025 12.0923L19.8825 10.7123C20.2725 10.3223 20.2725 9.69227 19.8825 9.30227C19.4925 8.91227 18.8625 8.91227 18.4725 9.30227L17.0825 10.6723L15.7025 9.29227C15.3125 8.90227 14.6825 8.90227 14.2925 9.29227C13.9025 9.68227 13.9025 10.3123 14.2925 10.7023L15.6725 12.0823L14.2925 13.4623C13.9025 13.8523 13.9025 14.4823 14.2925 14.8723C14.6825 15.2623 15.3125 15.2623 15.7025 14.8723L17.0825 13.5123L18.4625 14.8923C18.8525 15.2823 19.4825 15.2823 19.8725 14.8923C20.2625 14.5023 20.2625 13.8723 19.8725 13.4823L18.5025 12.0923Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.StatusMediaControlsNoSoundIcon = m));
  },
  98,
);
