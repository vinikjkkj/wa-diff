__d(
  "WAWebConversationNewBanner.react",
  [
    "WAWebButton.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 1250,
      c = {
        container: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          backgroundColor: "x1280gxy",
          display: "x78zum5",
          justifyContent: "x1l1ennw",
          $$css: !0,
        },
      };
    function d(e) {
      var t = e.buttons,
        n = e.primaryText,
        a = e.secondaryText,
        i = e.testId,
        l = r("useWAWebWindowSize")(),
        d = l.width,
        m =
          d <= u
            ? o("WAWebFlex.react").FlexColumn
            : o("WAWebFlex.react").FlexRow;
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        padding: 8,
        children: s.jsxs(m, {
          alignSelf: "stretch",
          align: "center",
          justify: "all",
          xstyle: c.container,
          padding: [16, 16, 16, 16],
          gap: 16,
          testid: void 0,
          children: [
            s.jsxs(o("WAWebFlex.react").FlexColumn, {
              children: [
                s.jsx(o("WAWebText.react").WAWebTextTitle, { children: n }),
                a != null &&
                  s.jsx(o("WAWebText.react").WAWebTextMuted, { children: a }),
              ],
            }),
            s.jsx(o("WAWebButton.react").ButtonGroup, {
              direction: "horizontal",
              shrink: 0,
              children: t,
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
