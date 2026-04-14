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
      var t,
        n = e.onEditCredential,
        a = e.pixData,
        i = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          a.key,
          a.key_type,
        ),
        l = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(
          a.key_type,
        );
      return u.jsxs((t = o("WAWebFlex.react")).FlexRow, {
        align: "center",
        xstyle: c.row,
        children: [
          u.jsx(t.FlexColumn, {
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
          }),
          u.jsx(t.FlexColumn, {
            align: "start",
            grow: 1,
            paddingStart: 12,
            children: u.jsx(t.FlexRow, {
              children: u.jsxs(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDeemphasized",
                children: [
                  s._(/*BTDS*/ "Using"),
                  " ",
                  u.jsxs(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    children: [l, " ", i],
                  }),
                ],
              }),
            }),
          }),
          n != null &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              children: u.jsx(r("WAWebSvgButton.react"), {
                Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                onClick: n,
                xstyle: c.editIcon,
                "aria-label": s._(/*BTDS*/ "Edit Pix key"),
              }),
            }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
