__d(
  "WAWebProfileDrawerPhoneNumber.react",
  [
    "fbt",
    "WAWebCopyRefreshedIcon.react",
    "WAWebCopyToClipboard",
    "WAWebDrawerBlock.react",
    "WAWebDrawerSection.react",
    "WAWebFlex.react",
    "WAWebPhoneIcon.react",
    "WAWebStopEvent",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFormat",
    "WDSButton.react",
    "WDSText.react",
    "WDSTooltip.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        sectionPadding: {
          paddingTop: "xyinxu5",
          marginBottom: "xat24cr",
          $$css: !0,
        },
        titlePadding: {
          paddingInlineStart: "x162tt16",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
        phoneIcon: { color: "xhslqc4", $$css: !0 },
        selectableText: { userSelect: "x1hx0egp", $$css: !0 },
      };
    function d(e) {
      var t = e.myPn,
        n = o("WAWebWidFormat").widToFormattedUser(t),
        a = s._(/*BTDS*/ "Phone"),
        i = function () {
          o("WAWebCopyToClipboard")
            .copyTextToClipboard(n)
            .then(function (e) {
              e &&
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Phone number copied"),
                  }),
                );
            });
        },
        l = s._(/*BTDS*/ "Copy"),
        d = u.jsx(r("WAWebDrawerBlock.react"), {
          side: u.jsx(o("WAWebFlex.react").FlexRow, {
            justify: "end",
            children: u.jsx(r("WDSTooltip.react"), {
              label: l,
              children: u.jsx(r("WDSButton.react"), {
                Icon: o("WAWebCopyRefreshedIcon.react").CopyRefreshedIcon,
                variant: "borderless",
                onPress: i,
                "aria-label": l,
              }),
            }),
          }),
          children: u.jsxs(o("WAWebFlex.react").FlexRow, {
            gap: 24,
            align: "center",
            children: [
              u.jsx(o("WAWebPhoneIcon.react").PhoneIcon, {
                xstyle: c.phoneIcon,
              }),
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                gap: 8,
                children: u.jsx("div", {
                  onCopy: o("WAWebStopEvent").stopPropagation,
                  children: u.jsx(r("WDSText.react"), {
                    type: "Body1",
                    colorName: "contentDefault",
                    xstyle: c.selectableText,
                    children: n,
                  }),
                }),
              }),
            ],
          }),
        });
      return u.jsx(r("WAWebDrawerSection.react"), {
        theme: "no-padding",
        animation: !1,
        title: a,
        titleXStyle: c.titlePadding,
        xstyle: c.sectionPadding,
        children: d,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
