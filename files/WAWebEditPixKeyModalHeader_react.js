__d(
  "WAWebEditPixKeyModalHeader.react",
  [
    "fbt",
    "WAWebCloseRefreshedIcon.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebWdsPictoBankPixIcon.react",
    "WDSButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        editRow: { height: "xn3w4p2", $$css: !0 },
        addRow: { height: "xjp8j0k", $$css: !0 },
      };
    function d(e) {
      var t = e.isUpdate,
        n = e.onClose;
      return t
        ? u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            xstyle: c.editRow,
            gap: 16,
            children: [
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                paddingEnd: 2,
                children: u.jsx(r("WDSButton.react"), {
                  "aria-label": r("WAWebFbtCommon")("Close"),
                  Icon: o("WAWebCloseRefreshedIcon.react").CloseRefreshedIcon,
                  onPress: n,
                  variant: "borderless",
                }),
              }),
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                paddingStart: 12,
                children: u.jsx(r("WDSText.react"), {
                  type: "Headline2",
                  colorName: "contentDefault",
                  children: s._(/*BTDS*/ "Edit Pix"),
                }),
              }),
            ],
          })
        : u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: c.addRow,
            children: u.jsx(
              o("WAWebWdsPictoBankPixIcon.react").WdsPictoBankPixIcon,
              {},
            ),
          });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
