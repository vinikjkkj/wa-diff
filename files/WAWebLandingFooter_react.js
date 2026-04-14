__d(
  "WAWebLandingFooter.react",
  [
    "fbt",
    "WAWebAppRootInteractionContext.react",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLockOutlineIcon.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        landingFooterWrapper: { paddingTop: "x1y1aw1k", $$css: !0 },
        noWaAccountText: {
          fontSize: "x1c3i2sq",
          lineHeight: "x1a6qonq",
          $$css: !0,
        },
        externalHelpLinkText: {
          fontSize: "x1jchvi3",
          fontWeight: "xk50ysn",
          lineHeight: "x1ud3kw6",
          $$css: !0,
        },
        e2ee: {
          color: "x9tdjrj",
          lineHeight: "x9d7mpn",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        a = e.isWebReg,
        i = e.onClick,
        l = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_GET_STARTED,
          !1,
          !0,
        ),
        d = l.startInteraction,
        p = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (d(), yield i());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      return u.jsxs((t = o("WAWebFlex.react")).FlexColumn, {
        align: "center",
        xstyle: c.landingFooterWrapper,
        rowGap: 24,
        children: [
          u.jsx(m, { isWebReg: a, onClick: p }),
          u.jsxs(t.FlexRow, {
            columnGap: 4,
            align: "center",
            children: [
              u.jsx(t.FlexItem, {
                children: u.jsx(
                  o("WAWebLockOutlineIcon.react").LockOutlineIcon,
                  { width: 20, iconXstyle: c.e2ee },
                ),
              }),
              u.jsx(t.FlexItem, {
                xstyle: c.e2ee,
                children: s._(
                  /*BTDS*/ "Your personal messages are end-to-end encrypted",
                ),
              }),
            ],
          }),
          u.jsx(o("WAWebLinkDeviceCommonInstructions.react").TCLink, {}),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.isWebReg,
        n = e.onClick;
      return t
        ? null
        : u.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            children: [
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                paddingTop: 8,
                xstyle: c.noWaAccountText,
                children: s._(/*BTDS*/ "Don't have a WhatsApp account?"),
              }),
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                paddingTop: 12,
                xstyle: c.externalHelpLinkText,
                children: u.jsx(
                  o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
                  { text: s._(/*BTDS*/ "Get started"), onClick: n },
                ),
              }),
            ],
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
