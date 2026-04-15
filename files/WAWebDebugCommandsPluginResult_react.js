__d(
  "WAWebDebugCommandsPluginResult.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebDebugCommandGetters",
    "WAWebEmojiText.react",
    "WAWebFormatConfiguration",
    "WAWebFuzzySearch",
    "react",
    "useWAWebDebugCommandValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        r = e.debugCommand,
        a = e.onMouseDown,
        i = e.onMouseEnter,
        l = e.onMouseUp,
        s = e.query,
        c = e.selected,
        d = r.id,
        m = o("useWAWebDebugCommandValues").useDebugCommandValues(d, [
          (n = o("WAWebDebugCommandGetters")).getName,
          n.getNameNormalized,
          n.getDisplayName,
          n.getParams,
          n.getDoc,
        ]),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = m[4],
        y = o("WAWebFuzzySearch").fuzzyMatches(s.toLowerCase(), _),
        C = f || p + "(" + g.join(", ") + ")";
      return u.jsxs("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}), (t._akct = c), (t._akcs = !0), t),
        ),
        onMouseDown: a,
        onMouseUp: l,
        onMouseEnter: i,
        children: [
          u.jsx("span", { className: "_akcu", children: ">" }),
          C.split("").map(function (e, t) {
            return u.jsx(
              o("WAWebEmojiText.react").EmojiText,
              {
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  y.includes(t) ? "_akcv" : "_akcw",
                  "_akcy",
                ),
                text: e,
              },
              t,
            );
          }),
          u.jsx(o("WAWebEmojiText.react").EmojiText, {
            className: "_akcx",
            ellipsify: !0,
            text: h,
            formatters: o("WAWebFormatConfiguration").QuickReply(),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
