__d(
  "WAWebAudioStatusIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "innerStyles", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "audio-status";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.innerStyles,
        l = t.name,
        u = t.viewBox,
        m = t.width,
        p = babelHelpers.objectWithoutPropertiesLoose(t, e),
        _;
      if (u) {
        var f = u.height,
          g = f === void 0 ? 0 : f,
          h = u.width,
          y = h === void 0 ? 0 : h,
          C = u.x,
          b = C === void 0 ? 0 : C,
          v = u.y,
          S = v === void 0 ? 0 : v;
        _ = [b, S, y, g].join(" ");
      }
      var R = 19,
        L = 19;
      return (
        (n != null || m != null) && ((R = n), (L = m)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: l != null ? l : d }, p, {
            children: c.jsxs("svg", {
              viewBox: _ != null ? _ : "0 0 19 19",
              height: R,
              width: L,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: l != null ? l : d }),
                c.jsx("path", {
                  fill: "#FFFFFF",
                  className:
                    s(i == null ? void 0 : i.background) +
                    " ptt-status-background",
                  d: "M8.48311 0.463216C4.0294 0.752054 0.757935 4.62515 0.757935 8.95218V13.9874C0.757935 16.0652 2.43806 17.7453 4.51588 17.7453H5.26853C6.92487 17.7453 8.27383 16.3964 8.27383 14.74V14.7294C8.76927 14.8705 9.29428 14.8705 9.78972 14.7294V14.74C9.78972 16.3964 11.1387 17.7453 12.795 17.7453H13.5477C15.6255 17.7453 17.3056 16.0652 17.3056 13.9874V8.71886C17.3056 3.9662 13.297 0.150866 8.48311 0.463216Z",
                }),
                c.jsx("path", {
                  fill: "currentColor",
                  className:
                    s(i == null ? void 0 : i.primary) + " ptt-status-icon",
                  d: "M8.70732 1.89651C5.10966 2.12984 2.38507 5.28343 2.38507 8.88862V13.9238C2.38507 15.1732 3.39362 16.1818 4.64302 16.1818H5.39567C6.22358 16.1818 6.90096 15.5044 6.90096 14.6765V11.6659C6.90096 10.838 6.22358 10.1606 5.39567 10.1606H3.89037V8.87357C3.89037 5.9834 6.11821 3.46955 9.00085 3.38676C11.9889 3.30397 14.4274 5.68986 14.4274 8.6553V10.1606H12.9222C12.0942 10.1606 11.4169 10.838 11.4169 11.6659V14.6765C11.4169 15.5044 12.0942 16.1818 12.9222 16.1818H13.6748C14.9242 16.1818 15.9327 15.1732 15.9327 13.9238V8.6553C15.9327 4.76411 12.6512 1.64061 8.70732 1.89651Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AudioStatusIcon = m));
  },
  98,
);
