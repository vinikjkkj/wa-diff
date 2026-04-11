__d(
  "WAWebSendPixPaymentRequestPixCredentialsRow.react",
  [
    "fbt",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebFlex.react",
    "WAWebPencilRefreshedIcon.react",
    "WAWebRoundShape.react",
    "WAWebSvgButton.react",
    "WAWebWdsSmbPaymentsPixFilledIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        row: { height: "x1peatla", $$css: !0 },
        icon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x100vrsf",
          height: "x1vqgdyp",
          color: "x14ug900",
          background: "xpfvu57",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        editIcon: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.onEditCredential,
        a = e.pixData,
        i;
      t[0] !== a.key || t[1] !== a.key_type
        ? ((i = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
            a.key,
            a.key_type,
          )),
          (t[0] = a.key),
          (t[1] = a.key_type),
          (t[2] = i))
        : (i = t[2]);
      var l = i,
        d = a.key_type,
        m;
      t[3] !== d
        ? ((m = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(d)),
          (t[3] = d),
          (t[4] = m))
        : (m = t[4]);
      var p = m,
        _;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            paddingEnd: 2,
            children: u.jsx(r("WAWebRoundShape.react"), {
              xstyle: c.icon,
              children: u.jsx(
                o("WAWebWdsSmbPaymentsPixFilledIcon.react")
                  .WdsSmbPaymentsPixFilledIcon,
                {},
              ),
            }),
          })),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Using")), (t[6] = f))
        : (f = t[6]);
      var g;
      t[7] !== l || t[8] !== p
        ? ((g = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "start",
            grow: 1,
            paddingStart: 12,
            children: u.jsx(o("WAWebFlex.react").FlexRow, {
              children: u.jsxs(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                children: [
                  f,
                  " ",
                  u.jsxs(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: [p, " ", l],
                  }),
                ],
              }),
            }),
          })),
          (t[7] = l),
          (t[8] = p),
          (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== n
        ? ((h =
            n != null &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: u.jsx(r("WAWebSvgButton.react"), {
                Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                onClick: n,
                xstyle: c.editIcon,
                "aria-label": s._(/*BTDS*/ "Edit Pix key"),
              }),
            })),
          (t[10] = n),
          (t[11] = h))
        : (h = t[11]);
      var y;
      return (
        t[12] !== g || t[13] !== h
          ? ((y = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: c.row,
              children: [_, g, h],
            })),
            (t[12] = g),
            (t[13] = h),
            (t[14] = y))
          : (y = t[14]),
        y
      );
    }
    l.default = d;
  },
  226,
);
