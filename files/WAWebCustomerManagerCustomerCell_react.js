__d(
  "WAWebCustomerManagerCustomerCell.react",
  [
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        row: { width: "xh8yej3", $$css: !0 },
        textContainer: {
          minWidth: "xeuugli",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function c(e) {
      var t,
        n,
        a = e.item,
        i = o("WAWebContactCollection").ContactCollection.get(a.chatJid),
        l =
          (t =
            (n = o("useWAWebContactValues").useOptionalContactValues(
              i == null ? void 0 : i.id,
              [o("WAWebFrontendContactGetters").getDisplayName],
            )) == null
              ? void 0
              : n[0]) != null
            ? t
            : "";
      return s.jsxs(o("WAWebFlex.react").FlexRow, {
        gap: 12,
        align: "center",
        xstyle: u.row,
        testid: void 0,
        children: [
          i != null &&
            s.jsx(r("WAWebContactImage.react"), { contact: i, size: 36 }),
          s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.textContainer,
            children: s.jsx("div", {
              className: "x193iq5w",
              children: s.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDefault",
                maxLines: 1,
                children: l,
              }),
            }),
          }),
        ],
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
