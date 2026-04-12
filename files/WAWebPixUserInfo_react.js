__d(
  "WAWebPixUserInfo.react",
  [
    "fbt",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebFlex.react",
    "WAWebPencilRefreshedIcon.react",
    "WAWebPixLogoIcon.react",
    "WAWebSvgButton.react",
    "WDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        userProfile: {
          backgroundColor: "x4wrhlh",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingTop: "x1p57kb1",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          display: "x78zum5",
          columnGap: "x1aj3ljl",
          $$css: !0,
        },
        userInfo: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          paddingInlineStart: "x1iw51ew",
          paddingInlineEnd: "xde1mab",
          paddingLeft: null,
          paddingRight: null,
          flexGrow: "x1iyjqo2",
          $$css: !0,
        },
        editButton: { alignSelf: "xamitd3", $$css: !0 },
      },
      d = {
        background: { fill: "x1mb9w2k", $$css: !0 },
        pixIconFill: { fill: "xfifr3o", $$css: !0 },
      };
    function m(e) {
      var t = e.onEdit,
        n = e.pixData,
        a = o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(
          n.key,
          n.key_type,
        ),
        i = o("WAWebBrazilPixKeyFormattingUtils").getPixKeyTypeLabel(
          n.key_type,
        );
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        xstyle: c.userProfile,
        children: [
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            children: [
              " ",
              u.jsx(o("WAWebPixLogoIcon.react").PixLogoIcon, {
                height: 50,
                width: 50,
                innerStyles: {
                  background: d.background,
                  primary: d.pixIconFill,
                },
              }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.userInfo,
            children: [
              u.jsx("div", {
                className: "xkhhb68 x14ug900 x13m54ha",
                children: n.display_name,
              }),
              u.jsxs(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: [i, " ", a],
              }),
            ],
          }),
          t != null &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              xstyle: c.editButton,
              children: u.jsx(r("WAWebSvgButton.react"), {
                Icon: o("WAWebPencilRefreshedIcon.react").PencilRefreshedIcon,
                onClick: t,
                "aria-label": s._(/*BTDS*/ "Edit Pix key"),
              }),
            }),
        ],
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
