__d(
  "WAWebLinkDeviceQrcodeLayout.react",
  [
    "cx",
    "fbt",
    "CometHeroHoldTrigger.react",
    "CometPlaceholder.react",
    "WAWebAlternateDeviceLinkingLink.react",
    "WAWebClassnames",
    "WAWebEnvironment",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebLinkDeviceCodeView.react",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebSpinner.react",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e,
      c = e || (e = r("react")),
      d = r("deferredLoadComponent")(
        r("requireDeferred")("WAWebLogoutReasonBanner.react").__setRef(
          "WAWebLinkDeviceQrcodeLayout.react",
        ),
      ),
      m = 228;
    function p(e) {
      var t = e.apiCmd,
        n = e.autoLogoutEnabled,
        a = e.children,
        i = e.enabedAlternateDeviceLinking,
        l = e.onAutoLogoutToggle,
        s = e.onClickLinkWithPhoneNumber,
        m = e.theme,
        p = f();
      return c.jsx(o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView, {
        codeType: o("WAWebLinkDeviceCodeViewCodeType")
          .LinkDeviceCodeViewCodeType.QR,
        apiCmd: t,
        banners: c.jsx(r("CometPlaceholder.react"), {
          fallback: null,
          name: "WAWebLogoutReasonBanner",
          children: c.jsx(d, {}),
        }),
        title: p,
        autoLogoutEnabled: n,
        onAutoLogoutToggle: l,
        screenReaderSubtitleConfig: {
          onClick: s,
          shouldShow: i,
          text: u._(/*BTDS*/ "Link with phone number instead."),
        },
        alternativeLinkDeviceMethodHint: c.jsx(
          r("WAWebAlternateDeviceLinkingLink.react"),
          {
            codeType: o("WAWebLinkDeviceCodeViewCodeType")
              .LinkDeviceCodeViewCodeType.QR,
            onClick: s,
            enabled: i,
          },
        ),
        children: c.jsx(
          "div",
          babelHelpers.extends(
            {},
            {
              0: {},
              2: { className: "x14a8spa x1t7qo4d x1c76a8b xu7uy1i" },
              1: { className: "x18d9i69 xexx8yu" },
              3: { className: "x1t7qo4d xu7uy1i x18d9i69 xexx8yu" },
            }[
              (!!r("WAWebEnvironment").isWindows << 1) |
                (!!(
                  r("WAWebEnvironment").isWindows &&
                  o("WAWebHybridRegGating").isHybridRegEnabled()
                ) <<
                  0)
            ],
            { children: a },
          ),
        ),
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t,
        n = e.theme;
      return c.jsx("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}), (t._akau = !0), t),
          "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8",
        ),
        children: c.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          justify: "center",
          className: {
            0: "x1ndca9r xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p",
            1: "xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p x1od0jb8",
          }[(n === "wds") << 0],
          children: [
            c.jsx(r("CometHeroHoldTrigger.react"), {
              description: "WAWebLinkDeviceQrcodeQRSpinner",
              hold: !0,
            }),
            c.jsx(o("WAWebSpinner.react").Spinner, {}),
          ],
        }),
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return r("WAWebEnvironment").isWindows
        ? u._(/*BTDS*/ "Log in to WhatsApp")
        : u._(/*BTDS*/ "Scan to log in");
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.WAWebLinkDeviceQrcodeLayout = p),
      (l.QRSpinner = _));
  },
  226,
);
