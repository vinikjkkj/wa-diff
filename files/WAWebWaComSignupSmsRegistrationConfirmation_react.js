__d(
  "WAWebWaComSignupSmsRegistrationConfirmation.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceInstructionsList.react",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "WAWebWdsIllPhoneTextDownloadV2Icon.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e.length === 11
        ? "+" +
            e.slice(0, 1) +
            " (" +
            e.slice(1, 4) +
            ") " +
            e.slice(4, 7) +
            "-" +
            e.slice(7)
        : e;
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(27),
        a = e.onBack,
        i = e.onLinkDevice,
        l = e.onRetry,
        d = e.phoneNumberWithoutCountryCode,
        _ = e.providerNumber,
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { onVisible: m }), (t[0] = f))
        : (f = t[0]);
      var g = r("useVisibility")(f),
        h = g[0],
        y = "1" + d,
        C;
      t[1] !== y ? ((C = c(y)), (t[1] = y), (t[2] = C)) : (C = t[2]);
      var b = C,
        v;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(o("WAWebLinkDeviceCommonComponents.react").Title, {
              value: s._(/*BTDS*/ "Register on your phone"),
            }),
          })),
          (t[3] = v))
        : (v = t[3]);
      var S;
      t[4] !== b
        ? ((S = s._(/*BTDS*/ "SMS sent to {phone}", [s._param("phone", b)])),
          (t[4] = b),
          (t[5] = S))
        : (S = t[5]);
      var R;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Wrong number?")), (t[6] = R))
        : (R = t[6]);
      var L;
      t[7] !== a
        ? ((L = u.jsx(
            o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
            {
              text: R,
              isBold: !1,
              showArrow: !1,
              showUnderline: !0,
              onClick: n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  (o(
                    "WAWebLinkDeviceQplHelpLinkEvent",
                  ).WAWebLinkDeviceQplHelpLinkEvent(
                    o("WAWebLinkDeviceQplHelpLinkEvent")
                      .WebcPairingScreenLinkType
                      .REG_WACOM_CONFIRMATION_WRONG_NUMBER_CLICKED,
                  ),
                    a());
                },
              ),
            },
          )),
          (t[7] = a),
          (t[8] = L))
        : (L = t[8]);
      var E;
      t[9] !== S || t[10] !== L
        ? ((E = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 12,
              children: [
                v,
                u.jsxs(o("WAWebFlex.react").FlexRow, {
                  columnGap: 8,
                  children: [S, ".", L],
                }),
              ],
            }),
          })),
          (t[9] = S),
          (t[10] = L),
          (t[11] = E))
        : (E = t[11]);
      var k;
      t[12] !== i || t[13] !== l || t[14] !== _
        ? ((k = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsx(p, {
              onLinkDevice: i,
              onRetry: l,
              providerNumber: _,
            }),
          })),
          (t[12] = i),
          (t[13] = l),
          (t[14] = _),
          (t[15] = k))
        : (k = t[15]);
      var I;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Need help?")), (t[16] = I))
        : (I = t[16]);
      var T;
      t[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = u.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 8,
            children: [
              I,
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
          (t[17] = T))
        : (T = t[17]);
      var D;
      t[18] !== k
        ? ((D = u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 32,
              children: [k, T],
            }),
          })),
          (t[18] = k),
          (t[19] = D))
        : (D = t[19]);
      var x;
      t[20] !== D || t[21] !== E
        ? ((x = u.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 32,
            children: [E, D],
          })),
          (t[20] = D),
          (t[21] = E),
          (t[22] = x))
        : (x = t[22]);
      var $;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? (($ = u.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            alignSelf: "center",
            children: u.jsx(
              o("WAWebWdsIllPhoneTextDownloadV2Icon.react")
                .WdsIllPhoneTextDownloadV2Icon,
              {},
            ),
          })),
          (t[23] = $))
        : ($ = t[23]);
      var P;
      return (
        t[24] !== h || t[25] !== x
          ? ((P = u.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 20,
              ref: h,
              children: [x, $],
            })),
            (t[24] = h),
            (t[25] = x),
            (t[26] = P))
          : (P = t[26]),
        P
      );
    }
    function m() {
      o("WAWebLinkDeviceQplHelpLinkEvent").WAWebLinkDeviceQplHelpLinkEvent(
        o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
          .REG_WACOM_CONFIRMATION_SCREEN_LOADED,
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.onLinkDevice,
        a = e.onRetry,
        i = e.providerNumber,
        l;
      t[0] !== a || t[1] !== i
        ? ((l = u.jsx(
            _,
            { onRetry: a, providerNumber: i },
            "postreginstruction1",
          )),
          (t[0] = a),
          (t[1] = i),
          (t[2] = l))
        : (l = t[2]);
      var s;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = u.jsx(f, {}, "postreginstruction2")), (t[3] = s))
        : (s = t[3]);
      var c;
      t[4] !== n
        ? ((c = u.jsx(g, { onLinkDevice: n }, "postreginstruction3")),
          (t[4] = n),
          (t[5] = c))
        : (c = t[5]);
      var d;
      if (t[6] !== l || t[7] !== c) {
        var m = [l, s, c];
        ((d = u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
          instructionSource: "postreg",
          instructions: m,
        })),
          (t[6] = l),
          (t[7] = c),
          (t[8] = d));
      } else d = t[8];
      return d;
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(10),
        r = e.onRetry,
        a = e.providerNumber,
        i;
      t[0] !== a
        ? ((i =
            a != null
              ? s._(
                  /*BTDS*/ "Check your phone for an {=m1} from WhatsApp number {=m4}",
                  [
                    s._implicitParam(
                      "=m1",
                      u.jsx(h, { children: s._(/*BTDS*/ "SMS") }),
                    ),
                    s._implicitParam(
                      "=m4",
                      u.jsx(h, {
                        children: s._(/*BTDS*/ "{provider_number}", [
                          s._param("provider_number", a),
                        ]),
                      }),
                    ),
                  ],
                )
              : s._(/*BTDS*/ "Check your phone for an {=m1} from WhatsApp", [
                  s._implicitParam(
                    "=m1",
                    u.jsx(h, { children: s._(/*BTDS*/ "SMS") }),
                  ),
                ])),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l;
      if (t[2] !== r) {
        var c;
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = s._(/*BTDS*/ "Resend SMS")), (t[4] = c))
          : (c = t[4]);
        var d = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (o(
                "WAWebLinkDeviceQplHelpLinkEvent",
              ).WAWebLinkDeviceQplHelpLinkEvent(
                o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                  .REG_WACOM_CONFIRMATION_RESEND_SMS_CLICKED,
              ),
                yield r());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          m;
        (t[5] !== d
          ? ((m = u.jsx(
              o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
              {
                text: c,
                isBold: !1,
                showArrow: !1,
                showUnderline: !0,
                onClick: d,
              },
            )),
            (t[5] = d),
            (t[6] = m))
          : (m = t[6]),
          (l = s._(/*BTDS*/ "Didn't receive SMS? {resend_sms}", [
            s._param("resend_sms", m),
          ])),
          (t[2] = r),
          (t[3] = l));
      } else l = t[3];
      var p;
      return (
        t[7] !== i || t[8] !== l
          ? ((p = u.jsxs(u.Fragment, { children: [i, ".", " ", l] })),
            (t[7] = i),
            (t[8] = l),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    function f() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(
              /*BTDS*/ "Tap the message link to open or download WhatsApp, and follow the steps to register your account.",
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(4),
        r = e.onLinkDevice,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s._(
            /*BTDS*/ "To use WhatsApp on this device, link your account from your phone.",
          )),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Link device")), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== r
          ? ((l = u.jsxs(u.Fragment, {
              children: [
                a,
                "\xA0",
                u.jsx(
                  o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
                  {
                    text: i,
                    isBold: !1,
                    onClick: n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        (o(
                          "WAWebLinkDeviceQplHelpLinkEvent",
                        ).WAWebLinkDeviceQplHelpLinkEvent(
                          o("WAWebLinkDeviceQplHelpLinkEvent")
                            .WebcPairingScreenLinkType
                            .REG_WACOM_CONFIRMATION_CONTINUE_CLICKED,
                        ),
                          r());
                      },
                    ),
                    showArrow: !1,
                    showUnderline: !0,
                  },
                ),
              ],
            })),
            (t[2] = r),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    function h(e) {
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
