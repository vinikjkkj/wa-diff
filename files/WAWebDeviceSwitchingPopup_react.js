__d(
  "WAWebDeviceSwitchingPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebWdsPictoMovePhoneIcon.react",
    "react",
    "stylex",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        hyphen: {
          textAlign: "x2b8uid",
          fontWeight: "xk50ysn",
          fontSize: "x579bpy",
          color: "x14ug900",
          $$css: !0,
        },
      };
    function m(t) {
      r("vulture")("DIyj0DRN0eb8aZjeYrcq6R99gB8=");
      var n = t.otpCode,
        a = function () {
          o("WAWebModalManager").ModalManager.close();
        },
        i = n.split(""),
        l = i.slice(0, 3),
        u = i.slice(3),
        m = c.jsx(
          o("WAWebWdsPictoMovePhoneIcon.react").WdsPictoMovePhoneIcon,
          {},
        ),
        _ = c.jsx("div", {
          dir: "ltr",
          children: c.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            children: [
              l.map(function (e, t) {
                return c.jsx(p, { content: e }, t + ":" + e);
              }),
              c.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(
                    d.hyphen,
                    o("WAWebUISpacing").uiPadding.top20,
                    o("WAWebUISpacing").uiPadding.horiz8,
                  ),
                  { "aria-hidden": "true", children: "-" },
                ),
              ),
              u.map(function (e, t) {
                return c.jsx(p, { content: e }, t + 3 + ":" + e);
              }),
            ],
          }),
        });
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "device-switching" },
        onOK: a,
        okText: r("WAWebFbtCommon")("OK"),
        type: o("WAWebModal.react").ModalTheme.InviteNew,
        buttonAlign: "center",
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          align: "center",
          xstyle: o("WAWebUISpacing").uiPadding.all24,
          children: [
            m,
            c.jsx(o("WAWebText.react").WAWebTextLarge, {
              paddingTop: 24,
              paddingBottom: 24,
              weight: "medium",
              children: s._(/*BTDS*/ "Code for new phone"),
            }),
            c.jsx("div", {
              className: "x1jchvi3",
              children: s._(
                /*BTDS*/ "Enter this verification code on your new phone. Please don't share it with anyone. If you didn't request a code, you can safely ignore this.",
              ),
            }),
            _,
          ],
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.content;
      return (
        r("vulture")("RnO40rXatJcT4DqTT2n1yrVDbhI="),
        c.jsx(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          xstyle: [
            o("WAWebUISpacing").uiMargin.horiz14,
            o("WAWebUISpacing").uiPadding.top20,
          ],
          children: c.jsx("span", {
            className: "x2b8uid xk50ysn x1q74xe4 x1jzgpr8 x14ug900",
            children: t,
          }),
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
