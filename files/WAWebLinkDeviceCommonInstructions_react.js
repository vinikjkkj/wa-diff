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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { className: "x1rg5ohu xk50ysn x1o2sk6j" }), (t[0] = r))
        : (r = t[0]);
      var a;
      return (
        t[1] !== n
          ? ((a = u.jsx(
              "strong",
              babelHelpers.extends({}, r, { children: n }),
            )),
            (t[1] = n),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Scan the QR code with your phone's camera")),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Tap the link to open {=m2}", [
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
                            u.jsx(
                              o("WAWebWaSquareIconIcon.react").WaSquareIconIcon,
                              {
                                width: 24,
                                height: 24,
                                iconXstyle: c.waLogo,
                                innerStyles: { background: c.waLogoFill },
                                children: s._(/*BTDS*/ ""),
                              },
                            ),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              ),
            ])),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function _() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(
              /*BTDS*/ "Scan the QR code again to link to your account",
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Open {=m2} on your phone", [
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
                            u.jsx(
                              o("WAWebWaSquareIconIcon.react").WaSquareIconIcon,
                              {
                                width: 24,
                                height: 24,
                                iconXstyle: c.waLogo,
                                innerStyles: { background: c.waLogoFill },
                                children: s._(/*BTDS*/ ""),
                              },
                            ),
                          ),
                        ]),
                      }),
                    ),
                  ]),
                }),
              ),
            ])),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.theme,
        r;
      return (
        t[0] !== n
          ? ((r = s._(
              /*BTDS*/ "On Android tap {=m1} \u00b7 On iPhone tap {=m5}",
              [
                s._implicitParam(
                  "=m1",
                  u.jsx(d, {
                    children: s._(/*BTDS*/ "Menu {=m1}", [
                      s._implicitParam(
                        "=m1",
                        u.jsx(b, { theme: n, children: s._(/*BTDS*/ "") }),
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
                        u.jsx(v, { theme: n, children: s._(/*BTDS*/ "") }),
                      ),
                    ]),
                  }),
                ),
              ],
            )),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Tap {=m1}, then {=m3}", [
              s._implicitParam(
                "=m1",
                u.jsx(d, { children: s._(/*BTDS*/ "Linked devices") }),
              ),
              s._implicitParam(
                "=m3",
                u.jsx(d, { children: s._(/*BTDS*/ "Link device") }),
              ),
            ])),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function y() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Scan the QR code to confirm")), (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function C() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Tap {=m1} and enter this code on your phone", [
              s._implicitParam(
                "=m1",
                u.jsx(d, {
                  children: s._(/*BTDS*/ "Link with phone number instead"),
                }),
              ),
            ])),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.theme,
        a = n === "wds" || r("WAWebEnvironment").isWindows,
        i;
      t[0] !== a
        ? ((i = {
            0: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1gxa6cn xa0aww2",
            },
            1: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1od0jb8 x1gxa6cn xa0aww2",
            },
          }[!!a << 0]),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = a && c.iconThemed,
        s;
      t[2] !== l
        ? ((s = u.jsx(o("WAWebMenuIcon.react").MenuIcon, {
            iconXstyle: [c.icon, l],
            width: 18,
            height: 20,
          })),
          (t[2] = l),
          (t[3] = s))
        : (s = t[3]);
      var d;
      return (
        t[4] !== i || t[5] !== s
          ? ((d = u.jsx("div", babelHelpers.extends({}, i, { children: s }))),
            (t[4] = i),
            (t[5] = s),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.theme,
        a = n === "wds" || r("WAWebEnvironment").isWindows,
        i;
      t[0] !== a
        ? ((i = {
            0: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x9fbagp x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z",
            },
            1: {
              className:
                "x6s0dn4 x1rg5ohu x16dsc37 x1pyc6se x1mlb2bo x16pkwpw xqe4bef xr9w4p7 x7f0h72 x1nug9m2 x18qtlnh x13fuv20 x18b5jzi x1q0q8m5 x1t7ytsu x178xt8z x1lun4ml xso031l xpilrb4 xxk0z11 x9f619 x1od0jb8 x1gxa6cn x1j8ymqv xa0aww2 x4tra6z",
            },
          }[!!a << 0]),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = a && c.iconThemed,
        s;
      t[2] !== l
        ? ((s = u.jsx(o("WAWebSettingsIphoneIcon.react").SettingsIphoneIcon, {
            iconXstyle: [c.icon, l],
            width: 18,
            height: 18,
          })),
          (t[2] = l),
          (t[3] = s))
        : (s = t[3]);
      var d;
      return (
        t[4] !== i || t[5] !== s
          ? ((d = u.jsx("div", babelHelpers.extends({}, i, { children: s }))),
            (t[4] = i),
            (t[5] = s),
            (t[6] = d))
          : (d = t[6]),
        d
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(18),
        a = e.isBold,
        i = e.onClick,
        l = e.showArrow,
        s = e.showUnderline,
        d = e.text,
        m = e.theme,
        p = e.url,
        _ = a === void 0 ? !1 : a,
        f = l === void 0 ? !0 : l,
        g = s === void 0 ? !0 : s,
        h = m === "wds",
        y = h && c.moreHelpTextThemed,
        C = g ? c.underline : c.noUnderlineLink,
        b = _ && c.bold,
        v;
      t[0] !== y || t[1] !== C || t[2] !== b
        ? ((v = [
            c.moreHelpText,
            y,
            C,
            b,
            r("WAWebEnvironment").isWindows && c.moreHelpTextWindows,
          ]),
          (t[0] = y),
          (t[1] = C),
          (t[2] = b),
          (t[3] = v))
        : (v = t[3]);
      var S;
      t[4] !== i || t[5] !== p
        ? ((S = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (i && (yield i()),
                p != null && o("WAWebExternalLink.react").openExternalLink(p));
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[4] = i),
          (t[5] = p),
          (t[6] = S))
        : (S = t[6]);
      var R;
      t[7] !== d
        ? ((R = u.jsx(o("WAWebFlex.react").FlexColumn, { children: d })),
          (t[7] = d),
          (t[8] = R))
        : (R = t[8]);
      var L;
      t[9] !== f
        ? ((L =
            f &&
            u.jsx(o("WAWebFlex.react").FlexColumn, {
              children: u.jsx(r("WAWebWaBrandArrowOutIconWrapper.react"), {}),
            })),
          (t[9] = f),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== L || t[12] !== R
        ? ((E = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            columnGap: 4,
            children: [R, L],
          })),
          (t[11] = L),
          (t[12] = R),
          (t[13] = E))
        : (E = t[13]);
      var k;
      return (
        t[14] !== E || t[15] !== v || t[16] !== S
          ? ((k = u.jsx(o("WAWebClickable.react").Clickable, {
              xstyle: v,
              as: "div",
              dataTestId: "link-device-qrcode-alt-linking-help",
              onClick: S,
              children: E,
            })),
            (t[14] = E),
            (t[15] = v),
            (t[16] = S),
            (t[17] = k))
          : (k = t[17]),
        k
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.theme,
        a = n === "wds" || r("WAWebEnvironment").isWindows,
        i = a && c.tcTextThemed,
        l;
      t[0] !== i ? ((l = [c.tcText, i]), (t[0] = i), (t[1] = l)) : (l = t[1]);
      var d;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Terms & Privacy Policy")), (t[2] = d))
        : (d = t[2]);
      var m;
      return (
        t[3] !== l
          ? ((m = u.jsx(o("WAWebClickable.react").Clickable, {
              xstyle: l,
              as: "div",
              dataTestId: "link-device-qrcode-alt-linking-tc",
              onClick: L,
              children: d,
            })),
            (t[3] = l),
            (t[4] = m))
          : (m = t[4]),
        m
      );
    }
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
