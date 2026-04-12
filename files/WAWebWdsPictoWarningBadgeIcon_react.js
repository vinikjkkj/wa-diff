__d(
  "WAWebWdsPictoWarningBadgeIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-warning-badge";
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
                  d: "M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z",
                  fill: "#FFB938",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                }),
                c.jsx("path", {
                  d: "M16.4565 6.53755L15.549 6.53711L15.549 6.55129C14.3579 6.55072 13.3932 7.51448 13.3926 8.7056L13.3927 15.2958C13.4008 16.4868 14.3716 17.4445 15.5627 17.4364L16.4702 17.4302L16.4701 17.416C17.6612 17.4079 18.6188 16.4371 18.6107 15.246L18.6108 8.69394C18.6114 7.50283 17.6476 6.53813 16.4565 6.53755Z",
                  fill: "white",
                }),
                c.jsx("path", {
                  d: "M16.4565 20.6916L15.549 20.6912L15.549 20.7053C14.3579 20.7048 13.3932 21.6685 13.3926 22.8597L13.3928 23.3252C13.4009 24.5163 14.3717 25.4739 15.5628 25.4658L16.4703 25.4596L16.4702 25.4454C17.6613 25.4373 18.6189 24.4665 18.6108 23.2754L18.6108 22.848C18.6114 21.6569 17.6476 20.6922 16.4565 20.6916Z",
                  fill: "white",
                }),
                c.jsx("path", {
                  d: "M16.4565 6.53755L15.549 6.53711L15.549 6.55129C14.3579 6.55072 13.3932 7.51448 13.3926 8.7056L13.3927 15.2958C13.4008 16.4868 14.3716 17.4445 15.5627 17.4364L16.4702 17.4302L16.4701 17.416C17.6612 17.4079 18.6188 16.4371 18.6107 15.246L18.6108 8.69394C18.6114 7.50283 17.6476 6.53813 16.4565 6.53755Z",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M16.4565 20.6916L15.549 20.6912L15.549 20.7053C14.3579 20.7048 13.3932 21.6685 13.3926 22.8597L13.3928 23.3252C13.4009 24.5163 14.3717 25.4739 15.5628 25.4658L16.4703 25.4596L16.4702 25.4454C17.6613 25.4373 18.6189 24.4665 18.6108 23.2754L18.6108 22.848C18.6114 21.6569 17.6476 20.6922 16.4565 20.6916Z",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                  strokeMiterlimit: 10,
                  strokeLinejoin: "round",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoWarningBadgeIcon = m));
  },
  98,
);
