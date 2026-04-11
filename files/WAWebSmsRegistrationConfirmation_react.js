__d(
  "WAWebSmsRegistrationConfirmation.react",
  [
    "fbt",
    "WAIsoToCc",
    "WAWebFlex.react",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructionsList.react",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "WAWebWdsIllPhoneTextDownloadIcon.react",
    "WAWebWdsIllPhoneTextDownloadV2Icon.react",
    "WDSButton.react",
    "asyncToGeneratorRuntime",
    "once",
    "react",
    "react-compiler-runtime",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        continueButton: { minWidth: "x173radd", $$css: !0 },
        container: {
          flexDirection: "x1q0g3np",
          "@media (max-width: 600px)_flexDirection": "x3wxgri",
          $$css: !0,
        },
        contentColumn: {
          "@media (max-width: 600px)_alignItems": "xcjwdqn",
          $$css: !0,
        },
        illustrationColumn: {
          width: "x9r4l05",
          "@media (max-width: 600px)_marginBottom": "xudy9kh",
          $$css: !0,
        },
      };
    function d(e) {
      var t,
        a = o("react-compiler-runtime").c(44),
        i = e.onBack,
        l = e.onContinue,
        d = e.onRetry,
        _ = e.phoneNumberWithoutCountryCode,
        f = e.providerNumber,
        g = e.selectedCountryId,
        h = e.theme,
        y;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { onVisible: r("once")(m) }), (a[0] = y))
        : (y = a[0]);
      var C = r("useVisibility")(y),
        b = C[0],
        v;
      a[1] !== _ || a[2] !== g
        ? ((v = o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).formatPhoneNumberInput({
            phoneNumberWithoutCountryCode: _,
            countryCodeIso: g,
          })),
          (a[1] = _),
          (a[2] = g),
          (a[3] = v))
        : (v = a[3]);
      var S = v,
        R = (t = r("WAIsoToCc")[g]) != null ? t : "",
        L = h === "wds" ? "+" + R : R,
        E =
          (S == null ? void 0 : S.formattedInputValue) != null
            ? L + " " + (S == null ? void 0 : S.formattedInputValue)
            : L + " " + _,
        k;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = s._(/*BTDS*/ "Register on your phone")), (a[4] = k))
        : (k = a[4]);
      var I;
      a[5] !== h
        ? ((I = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
              value: k,
              theme: h,
            }),
          })),
          (a[5] = h),
          (a[6] = I))
        : (I = a[6]);
      var T;
      a[7] !== E
        ? ((T = s._(/*BTDS*/ "SMS sent to {phone}", [s._param("phone", E)])),
          (a[7] = E),
          (a[8] = T))
        : (T = a[8]);
      var D;
      a[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = s._(/*BTDS*/ "Wrong number?")), (a[9] = D))
        : (D = a[9]);
      var x = h === "wds",
        $ = h !== "wds",
        P;
      a[10] !== i
        ? ((P = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o(
                "WAWebLinkDeviceQplHelpLinkEvent",
              ).WAWebLinkDeviceQplHelpLinkEvent(
                o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                  .REG_CONFIRMATION_WRONG_NUMBER_CLICKED,
              ),
                i());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (a[10] = i),
          (a[11] = P))
        : (P = a[11]);
      var N;
      a[12] !== x || a[13] !== $ || a[14] !== P
        ? ((N = u.jsx(
            o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
            { text: D, isBold: x, showArrow: !1, showUnderline: $, onClick: P },
          )),
          (a[12] = x),
          (a[13] = $),
          (a[14] = P),
          (a[15] = N))
        : (N = a[15]);
      var M;
      a[16] !== N || a[17] !== T
        ? ((M = u.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            children: [T, ".", N],
          })),
          (a[16] = N),
          (a[17] = T),
          (a[18] = M))
        : (M = a[18]);
      var w;
      a[19] !== M || a[20] !== I
        ? ((w = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 12,
              children: [I, M],
            }),
          })),
          (a[19] = M),
          (a[20] = I),
          (a[21] = w))
        : (w = a[21]);
      var A;
      a[22] !== d || a[23] !== f || a[24] !== h
        ? ((A = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(p, { onRetry: d, providerNumber: f, theme: h }),
          })),
          (a[22] = d),
          (a[23] = f),
          (a[24] = h),
          (a[25] = A))
        : (A = a[25]);
      var F;
      a[26] !== l || a[27] !== h
        ? ((F =
            h === "wds" &&
            l != null &&
            u.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 16,
              children: [
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  children: u.jsx(r("WDSButton.react"), {
                    label: s._(/*BTDS*/ "Link device"),
                    onPress: function () {
                      (o(
                        "WAWebLinkDeviceQplHelpLinkEvent",
                      ).WAWebLinkDeviceQplHelpLinkEvent(
                        o("WAWebLinkDeviceQplHelpLinkEvent")
                          .WebcPairingScreenLinkType
                          .REG_CONFIRMATION_CONTINUE_CLICKED,
                      ),
                        l());
                    },
                    variant: "filled",
                    widthMode: "fit",
                    xstyle: c.continueButton,
                  }),
                }),
                u.jsx(o("WAWebFlex.react").FlexRow, {
                  children: u.jsx(
                    o("WAWebLinkDeviceCommonInstructions.react")
                      .ExternalHelpLink,
                    {
                      text: s._(/*BTDS*/ "Need help?"),
                      isBold: !0,
                      showArrow: !1,
                      showUnderline: !1,
                      url: "https://www.whatsapp.com/contact",
                    },
                  ),
                }),
              ],
            })),
          (a[26] = l),
          (a[27] = h),
          (a[28] = F))
        : (F = a[28]);
      var O;
      a[29] !== h
        ? ((O =
            h !== "wds" &&
            u.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 8,
              children: [
                s._(/*BTDS*/ "Need help?"),
                u.jsx(
                  o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
                  {
                    text: s._(/*BTDS*/ "Contact WhatsApp"),
                    isBold: !1,
                    showArrow: !1,
                    showUnderline: !0,
                    url: "https://www.whatsapp.com/contact",
                  },
                ),
              ],
            })),
          (a[29] = h),
          (a[30] = O))
        : (O = a[30]);
      var B;
      a[31] !== A || a[32] !== F || a[33] !== O
        ? ((B = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 32,
              children: [A, F, O],
            }),
          })),
          (a[31] = A),
          (a[32] = F),
          (a[33] = O),
          (a[34] = B))
        : (B = a[34]);
      var W;
      a[35] !== w || a[36] !== B
        ? ((W = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 32,
            xstyle: c.contentColumn,
            children: [w, B],
          })),
          (a[35] = w),
          (a[36] = B),
          (a[37] = W))
        : (W = a[37]);
      var q;
      a[38] !== h
        ? ((q = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            alignSelf: "center",
            xstyle: c.illustrationColumn,
            shrink: 0,
            children:
              h === "wds"
                ? u.jsx(
                    o("WAWebWdsIllPhoneTextDownloadV2Icon.react")
                      .WdsIllPhoneTextDownloadV2Icon,
                    {},
                  )
                : u.jsx(
                    o("WAWebWdsIllPhoneTextDownloadIcon.react")
                      .WdsIllPhoneTextDownloadIcon,
                    {},
                  ),
          })),
          (a[38] = h),
          (a[39] = q))
        : (q = a[39]);
      var U;
      return (
        a[40] !== b || a[41] !== W || a[42] !== q
          ? ((U = u.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 20,
              ref: b,
              xstyle: c.container,
              children: [W, q],
            })),
            (a[40] = b),
            (a[41] = W),
            (a[42] = q),
            (a[43] = U))
          : (U = a[43]),
        U
      );
    }
    function m() {
      o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(
        o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
          .REG_CONFIRMATION_SCREEN_LOADED,
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onRetry,
        a = e.providerNumber,
        i = e.theme,
        l;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        var s =
          i === "wds"
            ? [
                u.jsx(
                  _,
                  { onRetry: n, providerNumber: a, theme: i },
                  "smsregistrationconfirmationinstruction1",
                ),
                u.jsx(f, {}, "smsregistrationconfirmationinstruction2"),
                u.jsx(
                  y,
                  { theme: i },
                  "smsregistrationconfirmationinstruction3",
                ),
              ]
            : [
                u.jsx(
                  _,
                  { onRetry: n, providerNumber: a, theme: i },
                  "smsregistrationconfirmationinstruction1",
                ),
                u.jsx(g, {}, "smsregistrationconfirmationinstruction2"),
                u.jsx(h, {}, "smsregistrationconfirmationinstruction3"),
                u.jsx(
                  y,
                  { theme: i },
                  "smsregistrationconfirmationinstruction4",
                ),
              ];
        ((l = u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
          instructionSource: "smsreg",
          instructions: s,
        })),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l));
      } else l = t[3];
      return l;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(18),
        r = e.onRetry,
        a = e.providerNumber,
        i = e.theme,
        l = i === "wds",
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Check your phone for an {=m1} from WhatsApp.", [
            s._implicitParam(
              "=m1",
              u.jsx(C, { children: s._(/*BTDS*/ "SMS") }),
            ),
          ])),
          (t[0] = c))
        : (c = t[0]);
      var d = c,
        m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Resend SMS")), (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] !== r
        ? ((_ = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o(
                "WAWebLinkDeviceQplHelpLinkEvent",
              ).WAWebLinkDeviceQplHelpLinkEvent(
                o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                  .REG_CONFIRMATION_RESEND_SMS_CLICKED,
              ),
                yield r());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[2] = r),
          (t[3] = _))
        : (_ = t[3]);
      var f = _;
      if (l) {
        var g;
        t[4] !== a
          ? ((g =
              a != null && a.length > 0
                ? s._(
                    /*BTDS*/ "Check your phone for an {=m1} from WhatsApp number {provider_number}.",
                    [
                      s._param("provider_number", u.jsx(C, { children: a })),
                      s._implicitParam(
                        "=m1",
                        u.jsx(C, { children: s._(/*BTDS*/ "SMS") }),
                      ),
                    ],
                  )
                : d),
            (t[4] = a),
            (t[5] = g))
          : (g = t[5]);
        var h;
        t[6] !== f
          ? ((h = s._(/*BTDS*/ "Didn't get it? {resend_sms}", [
              s._param(
                "resend_sms",
                u.jsx(
                  o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
                  {
                    text: p,
                    isBold: !0,
                    showArrow: !1,
                    showUnderline: !1,
                    onClick: f,
                  },
                ),
              ),
            ])),
            (t[6] = f),
            (t[7] = h))
          : (h = t[7]);
        var y;
        return (
          t[8] !== g || t[9] !== h
            ? ((y = u.jsxs(u.Fragment, { children: [g, " ", h] })),
              (t[8] = g),
              (t[9] = h),
              (t[10] = y))
            : (y = t[10]),
          y
        );
      }
      var b;
      t[11] !== a
        ? ((b =
            a != null && a.length > 0
              ? s._(
                  /*BTDS*/ "Check your phone for an {=m1} from WhatsApp number {provider_number}.",
                  [
                    s._param("provider_number", a),
                    s._implicitParam(
                      "=m1",
                      u.jsx(C, { children: s._(/*BTDS*/ "SMS") }),
                    ),
                  ],
                )
              : d),
          (t[11] = a),
          (t[12] = b))
        : (b = t[12]);
      var v;
      t[13] !== f
        ? ((v = s._(/*BTDS*/ "Didn't receive SMS? {resend_sms}", [
            s._param(
              "resend_sms",
              u.jsx(
                o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
                {
                  text: p,
                  isBold: !1,
                  showArrow: !1,
                  showUnderline: !0,
                  onClick: f,
                },
              ),
            ),
          ])),
          (t[13] = f),
          (t[14] = v))
        : (v = t[14]);
      var S;
      return (
        t[15] !== b || t[16] !== v
          ? ((S = u.jsxs(u.Fragment, { children: [b, " ", v] })),
            (t[15] = b),
            (t[16] = v),
            (t[17] = S))
          : (S = t[17]),
        S
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(
              /*BTDS*/ "{=m0} the message link to open or download WhatsApp, and follow the steps to {=m2} your account.",
              [
                s._implicitParam(
                  "=m0",
                  u.jsx(C, { children: s._(/*BTDS*/ "Tap") }),
                ),
                s._implicitParam(
                  "=m2",
                  u.jsx(C, { children: s._(/*BTDS*/ "register") }),
                ),
              ],
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(
              /*BTDS*/ "{=m0} the message link to open or download WhatsApp.",
              [
                s._implicitParam(
                  "=m0",
                  u.jsx(C, { children: s._(/*BTDS*/ "Tap") }),
                ),
              ],
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function h() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(/*BTDS*/ "Follow the steps to {=m1} your account.", [
              s._implicitParam(
                "=m1",
                u.jsx(C, { children: s._(/*BTDS*/ "register") }),
              ),
            ])),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.theme,
        r;
      return (
        t[0] !== n
          ? ((r = u.jsx(u.Fragment, {
              children:
                n === "wds"
                  ? s._(
                      /*BTDS*/ "Next, you can {=m1} this device to your WhatsApp account.",
                      [
                        s._implicitParam(
                          "=m1",
                          u.jsx(C, { children: s._(/*BTDS*/ "link") }),
                        ),
                      ],
                    )
                  : u.jsxs(u.Fragment, {
                      children: [
                        s._(
                          /*BTDS*/ "To use WhatsApp on this device, {=m1} your account from your phone.",
                          [
                            s._implicitParam(
                              "=m1",
                              u.jsx(C, { children: s._(/*BTDS*/ "link") }),
                            ),
                          ],
                        ),
                        "\xA0",
                        u.jsx(
                          o("WAWebLinkDeviceCommonInstructions.react")
                            .ExternalHelpLink,
                          {
                            text: s._(/*BTDS*/ "Learn more"),
                            url: "https://faq.whatsapp.com/497209988909970",
                            isBold: n === "wds",
                            showArrow: !1,
                            showUnderline: n !== "wds",
                          },
                        ),
                      ],
                    }),
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function C(e) {
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
    l.default = d;
  },
  226,
);
