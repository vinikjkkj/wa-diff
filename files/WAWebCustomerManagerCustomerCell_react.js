__d(
  "WAWebCustomerManagerCustomerCell.react",
  [
    "WAWebContactCollection",
    "WAWebContactImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(10),
        i = e.item,
        l;
      a[0] !== i.chatJid
        ? ((l = o("WAWebContactCollection").ContactCollection.get(i.chatJid)),
          (a[0] = i.chatJid),
          (a[1] = l))
        : (l = a[1]);
      var c = l,
        d =
          (t =
            (n = o("useWAWebContactValues").useOptionalContactValues(
              c == null ? void 0 : c.id,
              [o("WAWebFrontendContactGetters").getDisplayName],
            )) == null
              ? void 0
              : n[0]) != null
            ? t
            : "",
        m;
      a[2] !== c
        ? ((m =
            c != null &&
            s.jsx(r("WAWebContactImage.react"), { contact: c, size: 36 })),
          (a[2] = c),
          (a[3] = m))
        : (m = a[3]);
      var p;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x193iq5w" }), (a[4] = p))
        : (p = a[4]);
      var _;
      a[5] !== d
        ? ((_ = s.jsx(o("WAWebFlex.react").FlexColumn, {
            xstyle: u.textContainer,
            children: s.jsx(
              "div",
              babelHelpers.extends({}, p, {
                children: s.jsx(r("WDSText.react"), {
                  type: "Body2",
                  colorName: "contentDefault",
                  maxLines: 1,
                  children: d,
                }),
              }),
            ),
          })),
          (a[5] = d),
          (a[6] = _))
        : (_ = a[6]);
      var f;
      return (
        a[7] !== m || a[8] !== _
          ? ((f = s.jsxs(o("WAWebFlex.react").FlexRow, {
              gap: 12,
              align: "center",
              xstyle: u.row,
              testid: void 0,
              children: [m, _],
            })),
            (a[7] = m),
            (a[8] = _),
            (a[9] = f))
          : (f = a[9]),
        f
      );
    }
    l.default = c;
  },
  98,
);
