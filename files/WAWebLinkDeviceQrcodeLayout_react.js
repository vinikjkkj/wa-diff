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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(17),
        n = e.apiCmd,
        a = e.autoLogoutEnabled,
        i = e.children,
        l = e.enabedAlternateDeviceLinking,
        s = e.onAutoLogoutToggle,
        m = e.onClickLinkWithPhoneNumber,
        p;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = f()), (t[0] = p))
        : (p = t[0]);
      var _ = p,
        g;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = c.jsx(r("CometPlaceholder.react"), {
            fallback: null,
            name: "WAWebLogoutReasonBanner",
            children: c.jsx(d, {}),
          })),
          (t[1] = g))
        : (g = t[1]);
      var h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u._(/*BTDS*/ "Link with phone number instead.")), (t[2] = h))
        : (h = t[2]);
      var y, C;
      t[3] !== l || t[4] !== m
        ? ((y = { onClick: m, shouldShow: l, text: h }),
          (C = c.jsx(r("WAWebAlternateDeviceLinkingLink.react"), {
            codeType: o("WAWebLinkDeviceCodeViewCodeType")
              .LinkDeviceCodeViewCodeType.QR,
            onClick: m,
            enabled: l,
          })),
          (t[3] = l),
          (t[4] = m),
          (t[5] = y),
          (t[6] = C))
        : ((y = t[5]), (C = t[6]));
      var b;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = {
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
          ]),
          (t[7] = b))
        : (b = t[7]);
      var v;
      t[8] !== i
        ? ((v = c.jsx("div", babelHelpers.extends({}, b, { children: i }))),
          (t[8] = i),
          (t[9] = v))
        : (v = t[9]);
      var S;
      return (
        t[10] !== n ||
        t[11] !== a ||
        t[12] !== s ||
        t[13] !== y ||
        t[14] !== C ||
        t[15] !== v
          ? ((S = c.jsx(o("WAWebLinkDeviceCodeView.react").LinkDeviceCodeView, {
              codeType: o("WAWebLinkDeviceCodeViewCodeType")
                .LinkDeviceCodeViewCodeType.QR,
              apiCmd: n,
              banners: g,
              title: _,
              autoLogoutEnabled: a,
              onAutoLogoutToggle: s,
              screenReaderSubtitleConfig: y,
              alternativeLinkDeviceMethodHint: C,
              children: v,
            })),
            (t[10] = n),
            (t[11] = a),
            (t[12] = s),
            (t[13] = y),
            (t[14] = C),
            (t[15] = v),
            (t[16] = S))
          : (S = t[16]),
        S
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.theme,
        a;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var i;
        ((a = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((i = {}), (i._akau = !0), i),
          "x1n2onr6 x78zum5 x1okw0bk x6s0dn4 xl56j7k x9r4l05 x8idabb x6ikm8r x10wlt62 xr9e8f9 x1e4oeot x1ui04y5 x6en5u8",
        )),
          (t[0] = a));
      } else a = t[0];
      var l;
      t[1] !== n
        ? ((l = {
            0: "x1ndca9r xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p",
            1: "xh8yej3 x5yr21d x16qb05n xi7iut8 x1dm3dyd x1pv694p x1od0jb8",
          }[(n === "wds") << 0]),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var s, u;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = c.jsx(r("CometHeroHoldTrigger.react"), {
            description: "WAWebLinkDeviceQrcodeQRSpinner",
            hold: !0,
          })),
          (u = c.jsx(o("WAWebSpinner.react").Spinner, {})),
          (t[3] = s),
          (t[4] = u))
        : ((s = t[3]), (u = t[4]));
      var d;
      return (
        t[5] !== l
          ? ((d = c.jsx("div", {
              className: a,
              children: c.jsxs(o("WAWebFlex.react").FlexRow, {
                align: "center",
                justify: "center",
                className: l,
                children: [s, u],
              }),
            })),
            (t[5] = l),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
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
