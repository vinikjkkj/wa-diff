__d(
  "WAWebWdsIllAiChatsIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ill-ai-chats";
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
      var S = 120,
        R = 140;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 140 120",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M71.9.9C35.9.9 6.6 23.5 6.6 51.4c0 6.9 1.8 13.5 5 19.4L1.5 87.6c-1.4 2.4.4 5.6 3 5.5l27-2.1c11.1 6.8 25.1 10.8 40.4 10.8 36 0 65.3-22.6 65.3-50.5C137.2 23.5 108 .9 71.9.9z",
                  style: {
                    fill: "#e6ffda",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinejoin: "round",
                    strokeMiterlimit: 10,
                  },
                }),
                c.jsx("path", {
                  d: "m138.6 77.9-1.1-12.1c-.1-1.2-.9-2.3-2-2.9-1.1-.5-2.5-.4-3.5.3l-9.9 7c-1 .7-1.6 1.9-1.5 3.2.1 1.2.9 2.3 2 2.9l11 5.1q.75.3 1.5.3c.7 0 1.4-.2 2-.6 1.1-.7 1.7-1.9 1.5-3.2",
                  style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#afe966",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                }),
                c.jsx("path", {
                  d: "m104.8 54.3 3.3.7-.6 3.1c-.4 1.9.8 3.8 2.7 4.2.2 0 .5.1.7.1 1.6 0 3.1-1.1 3.4-2.8l.6-3.1 3.1.6c.2 0 .5.1.7.1 1.6 0 3.1-1.1 3.4-2.8.4-1.9-.8-3.8-2.7-4.2l-3.1-.6.7-3.3c.4-1.9-.8-3.8-2.7-4.2s-3.8.8-4.2 2.7l-.7 3.3-3.3-.7c-1.9-.4-3.8.8-4.2 2.7-.2 1.9 1 3.8 2.9 4.2q0 0 0 0",
                  style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#fff",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                }),
                c.jsx("path", {
                  d: "M73.8 75.6c4.6 0 8.3-3.7 8.3-8.3S78.4 59 73.8 59s-8.3 3.7-8.3 8.3c0 4.5 3.7 8.3 8.3 8.3",
                  style: {
                    fill: "#06ce9c",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                }),
                c.jsx("path", {
                  d: "m122 87-12.2-5.2h0c-.7-.3-1.2-.8-1.4-1.4l-5.2-12.1c-1.2-2.8-3.9-3.1-4.7-3.1s-3.5.3-4.7 3.1l-5.2 12q-.45 1.05-1.5 1.5L74.9 87c-2.8 1.2-3.1 3.8-3.1 4.6s.3 3.5 3.1 4.7l11.7 5.1c.6.3 1.1.8 1.4 1.4l5.7 12.5h0c1.2 2.7 3.8 3 4.6 3s3.4-.2 4.7-3l5.3-12.3q.45-1.05 1.5-1.5l12.2-5.2h0c2.7-1.2 3-3.7 3-4.6s-.3-3.5-3-4.7q0 0 0 0",
                  style: {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    fill: "#25d366",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIllAiChatsIcon = m));
  },
  98,
);
