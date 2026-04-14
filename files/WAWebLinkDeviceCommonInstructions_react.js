__d(
  "WAWebLinkDeviceCommonInstructions.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebEnvironment",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebMenuIcon.react",
    "WAWebSettingsIphoneIcon.react",
    "WAWebWaBrandArrowOutIconWrapper.react",
    "WAWebWaSquareIconIcon.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        bold: { fontWeight: "x1xlr1w8", $$css: !0 },
        icon: { opacity: "x1ks1olk", color: "x1hql6x6", $$css: !0 },
        underline: {
          textDecorationLine: "xujl8zx",
          textDecorationColor: "xlkh4gg",
          textDecorationThickness: "xewurvo",
          textUnderlineOffset: "x3pynha",
          $$css: !0,
        },
        noUnderlineLink: {
          color: "xo1mcw5",
          ":hover_color": "xyla9g4",
          ":hover_textDecorationLine": "x1sur9pj",
          ":hover_textDecorationColor": "x7v4iwh",
          ":hover_textDecorationThickness": "x1yp5wxd",
          ":hover_textUnderlineOffset": "xqyrhhy",
          $$css: !0,
        },
        moreHelpText: {
          display: "x1rg5ohu",
          color: "x1hql6x6",
          fontWeight: "xk50ysn",
          ":hover_color": "x1xnyc8c",
          ":focus-visible_color": "x42e3j",
          $$css: !0,
        },
        tcText: {
          color: "x9tdjrj",
          textAlign: "x2b8uid",
          fontSize: "x1pg5gke",
          fontWeight: "xo1l8bm",
          lineHeight: "xetkqiv",
          letterSpacing: "xqhqf4p",
          ":hover_textDecoration": "xt0b8zv",
          $$css: !0,
        },
        waLogo: {
          borderStartStartRadius: "xrxyp3c",
          borderStartEndRadius: "xv0oops",
          borderEndEndRadius: "x1isl5vh",
          borderEndStartRadius: "xn8zj9a",
          $$css: !0,
        },
        waLogoFill: { fill: "xl0owvu", $$css: !0 },
        iconThemed: { color: "x14ug900", opacity: "x1hc1fzr", $$css: !0 },
        moreHelpTextWindows: { color: "xo1mcw5", $$css: !0 },
        moreHelpTextThemed: {
          color: "x14ug900",
          ":hover_color": "xyla9g4",
          ":focus-visible_color": "x1079x1i",
          $$css: !0,
        },
        tcTextThemed: { color: "xhslqc4", $$css: !0 },
      };
    function d(e) {
      var t = e.children;
      return u.jsx("strong", {
        className: "x1rg5ohu xk50ysn x1o2sk6j",
        children: t,
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Scan the QR code with your phone's camera");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Tap the link to open {=m2}", [
        s._implicitParam(
          "=m2",
          u.jsx(d, {
            children: s._(/*BTDS*/ "WhatsApp {=m2}", [
              s._implicitParam(
                "=m2",
                u.jsx("div", {
                  className: "x6s0dn4 x1rg5ohu x16dsc37 xxk0z11",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(o("WAWebWaSquareIconIcon.react").WaSquareIconIcon, {
                        width: 24,
                        height: 24,
                        iconXstyle: c.waLogo,
                        innerStyles: { background: c.waLogoFill },
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
              ),
            ]),
          }),
        ),
      ]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Scan the QR code again to link to your account");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Open {=m2} on your phone", [
        s._implicitParam(
          "=m2",
          u.jsx(d, {
            children: s._(/*BTDS*/ "WhatsApp {=m2}", [
              s._implicitParam(
                "=m2",
                u.jsx("div", {
                  className: "x6s0dn4 x1rg5ohu x16dsc37 xxk0z11",
                  children: s._(/*BTDS*/ "{=m1}", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(o("WAWebWaSquareIconIcon.react").WaSquareIconIcon, {
                        width: 24,
                        height: 24,
                        iconXstyle: c.waLogo,
                        innerStyles: { background: c.waLogoFill },
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
              ),
            ]),
          }),
        ),
      ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.theme;
      return s._(/*BTDS*/ "On Android tap {=m1} \u00b7 On iPhone tap {=m5}", [
        s._implicitParam(
          "=m1",
          u.jsx(d, {
            children: s._(/*BTDS*/ "Menu {=m1}", [
              s._implicitParam(
                "=m1",
                u.jsx(b, { theme: t, children: s._(/*BTDS*/ "") }),
              ),
            ]),
          }),
        ),
        s._implicitParam(
          "=m5",
          u.jsx(d, {
            children: s._(/*BTDS*/ "Settings {=m1}", [
              s._implicitParam(
                "=m1",
                u.jsx(v, { theme: t, children: s._(/*BTDS*/ "") }),
              ),
            ]),
          }),
        ),
      ]);
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Tap {=m1}, then {=m3}", [
        s._implicitParam(
          "=m1",
          u.jsx(d, { children: s._(/*BTDS*/ "Linked devices") }),
        ),
        s._implicitParam(
          "=m3",
          u.jsx(d, { children: s._(/*BTDS*/ "Link device") }),
        ),
      ]);
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Scan the QR code to confirm");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Tap {=m1} and enter this code on your phone", [
        s._implicitParam(
          "=m1",
          u.jsx(d, {
            children: s._(/*BTDS*/ "Link with phone number instead"),
          }),
        ),
      ]);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = e.theme,
        n = t === "wds" || r("WAWebEnvironment").isWindows;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1gxa6cn xa0aww2",
            },
            1: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1od0jb8 x1gxa6cn xa0aww2",
            },
          }[!!n << 0],
          {
            children: u.jsx(o("WAWebMenuIcon.react").MenuIcon, {
              iconXstyle: [c.icon, n && c.iconThemed],
              width: 18,
              height: 20,
            }),
          },
        ),
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.theme,
        n = t === "wds" || r("WAWebEnvironment").isWindows;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          {
            0: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z",
            },
            1: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1od0jb8 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z",
            },
          }[!!n << 0],
          {
            children: u.jsx(
              o("WAWebSettingsIphoneIcon.react").SettingsIphoneIcon,
              {
                iconXstyle: [c.icon, n && c.iconThemed],
                width: 18,
                height: 18,
              },
            ),
          },
        ),
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.isBold,
        a = t === void 0 ? !1 : t,
        i = e.onClick,
        l = e.showArrow,
        s = l === void 0 ? !0 : l,
        d = e.showUnderline,
        m = d === void 0 ? !0 : d,
        p = e.text,
        _ = e.theme,
        f = e.url,
        g = _ === "wds";
      return u.jsx(o("WAWebClickable.react").Clickable, {
        xstyle: [
          c.moreHelpText,
          g && c.moreHelpTextThemed,
          m ? c.underline : c.noUnderlineLink,
          a && c.bold,
          r("WAWebEnvironment").isWindows && c.moreHelpTextWindows,
        ],
        as: "div",
        dataTestId: "link-device-qrcode-alt-linking-help",
        onClick: n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (i && (yield i()),
            f != null && o("WAWebExternalLink.react").openExternalLink(f));
        }),
        children: u.jsxs(o("WAWebFlex.react").FlexRow, {
          align: "center",
          columnGap: 4,
          children: [
            u.jsx(o("WAWebFlex.react").FlexColumn, { children: p }),
            s &&
              u.jsx(o("WAWebFlex.react").FlexColumn, {
                children: u.jsx(r("WAWebWaBrandArrowOutIconWrapper.react"), {}),
              }),
          ],
        }),
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.theme,
        n = t === "wds" || r("WAWebEnvironment").isWindows;
      return u.jsx(o("WAWebClickable.react").Clickable, {
        xstyle: [c.tcText, n && c.tcTextThemed],
        as: "div",
        dataTestId: "link-device-qrcode-alt-linking-tc",
        onClick: L,
        children: s._(/*BTDS*/ "Terms & Privacy Policy"),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WAWebExternalLink.react").openExternalLink(
            "https://www.whatsapp.com/legal/",
          );
        })),
        E.apply(this, arguments)
      );
    }
    ((l.Strong = d),
      (l.LinkDeviceInstructionPhoneCamera = m),
      (l.LinkDeviceInstructionOpenWhatsApp = p),
      (l.LinkDeviceInstructionScanCodeAgain = _),
      (l.LinkDeviceInstructionOpenWhatsAppOnPhone = f),
      (l.LinkDeviceInstructionNavigateToSettings = g),
      (l.LinkDeviceInstructionsTapLinkedDevices = h),
      (l.LinkDeviceInstructionsScanQRCode = y),
      (l.LinkDeviceInstructionsLinkWithPhoneNumberInstead = C),
      (l.ExternalHelpLink = S),
      (l.TCLink = R));
  },
  226,
);
