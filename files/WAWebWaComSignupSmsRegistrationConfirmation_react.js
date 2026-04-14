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
      var t,
        a = e.onBack,
        i = e.onLinkDevice,
        l = e.onRetry,
        d = e.phoneNumberWithoutCountryCode,
        p = e.providerNumber,
        _ = r("useVisibility")({
          onVisible: function () {
            o(
              "WAWebLinkDeviceQplHelpLinkEvent",
            ).WAWebLinkDeviceQplHelpLinkEvent(
              o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                .REG_WACOM_CONFIRMATION_SCREEN_LOADED,
            );
          },
        }),
        f = _[0],
        g = c("1" + d);
      return u.jsxs((t = o("WAWebFlex.react")).FlexRow, {
        columnGap: 20,
        ref: f,
        children: [
          u.jsxs(t.FlexColumn, {
            rowGap: 32,
            children: [
              u.jsx(t.FlexRow, {
                children: u.jsxs(t.FlexColumn, {
                  rowGap: 12,
                  children: [
                    u.jsx(t.FlexRow, {
                      children: u.jsx(
                        o("WAWebLinkDeviceCommonComponents.react").Title,
                        { value: s._(/*BTDS*/ "Register on your phone") },
                      ),
                    }),
                    u.jsxs(t.FlexRow, {
                      columnGap: 8,
                      children: [
                        s._(/*BTDS*/ "SMS sent to {phone}", [
                          s._param("phone", g),
                        ]),
                        ".",
                        u.jsx(
                          o("WAWebLinkDeviceCommonInstructions.react")
                            .ExternalHelpLink,
                          {
                            text: s._(/*BTDS*/ "Wrong number?"),
                            isBold: !1,
                            showArrow: !1,
                            showUnderline: !0,
                            onClick: n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* () {
                              (o(
                                "WAWebLinkDeviceQplHelpLinkEvent",
                              ).WAWebLinkDeviceQplHelpLinkEvent(
                                o("WAWebLinkDeviceQplHelpLinkEvent")
                                  .WebcPairingScreenLinkType
                                  .REG_WACOM_CONFIRMATION_WRONG_NUMBER_CLICKED,
                              ),
                                a());
                            }),
                          },
                        ),
                      ],
                    }),
                  ],
                }),
              }),
              u.jsx(t.FlexRow, {
                children: u.jsxs(t.FlexColumn, {
                  rowGap: 32,
                  children: [
                    u.jsx(t.FlexRow, {
                      children: u.jsx(m, {
                        onLinkDevice: i,
                        onRetry: l,
                        providerNumber: p,
                      }),
                    }),
                    u.jsxs(t.FlexRow, {
                      columnGap: 8,
                      children: [
                        s._(/*BTDS*/ "Need help?"),
                        u.jsx(
                          o("WAWebLinkDeviceCommonInstructions.react")
                            .ExternalHelpLink,
                          {
                            text: s._(/*BTDS*/ "Contact WhatsApp"),
                            isBold: !1,
                            showArrow: !1,
                            showUnderline: !0,
                            url: "https://www.whatsapp.com/contact",
                          },
                        ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
          u.jsx(t.FlexColumn, {
            align: "center",
            alignSelf: "center",
            children: u.jsx(
              o("WAWebWdsIllPhoneTextDownloadV2Icon.react")
                .WdsIllPhoneTextDownloadV2Icon,
              {},
            ),
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.onLinkDevice,
        n = e.onRetry,
        o = e.providerNumber,
        a = [
          u.jsx(p, { onRetry: n, providerNumber: o }, "postreginstruction1"),
          u.jsx(_, {}, "postreginstruction2"),
          u.jsx(f, { onLinkDevice: t }, "postreginstruction3"),
        ];
      return u.jsx(r("WAWebLinkDeviceInstructionsList.react"), {
        instructionSource: "postreg",
        instructions: a,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.onRetry,
        r = e.providerNumber;
      return u.jsxs(u.Fragment, {
        children: [
          r != null
            ? s._(
                /*BTDS*/ "Check your phone for an {=m1} from WhatsApp number {=m4}",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(g, { children: s._(/*BTDS*/ "SMS") }),
                  ),
                  s._implicitParam(
                    "=m4",
                    u.jsx(g, {
                      children: s._(/*BTDS*/ "{provider_number}", [
                        s._param("provider_number", r),
                      ]),
                    }),
                  ),
                ],
              )
            : s._(/*BTDS*/ "Check your phone for an {=m1} from WhatsApp", [
                s._implicitParam(
                  "=m1",
                  u.jsx(g, { children: s._(/*BTDS*/ "SMS") }),
                ),
              ]),
          ".",
          " ",
          s._(/*BTDS*/ "Didn't receive SMS? {resend_sms}", [
            s._param(
              "resend_sms",
              u.jsx(
                o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink,
                {
                  text: s._(/*BTDS*/ "Resend SMS"),
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
                          .REG_WACOM_CONFIRMATION_RESEND_SMS_CLICKED,
                      ),
                        yield t());
                    },
                  ),
                },
              ),
            ),
          ]),
        ],
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(
        /*BTDS*/ "Tap the message link to open or download WhatsApp, and follow the steps to register your account.",
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.onLinkDevice;
      return u.jsxs(u.Fragment, {
        children: [
          s._(
            /*BTDS*/ "To use WhatsApp on this device, link your account from your phone.",
          ),
          "\xA0",
          u.jsx(o("WAWebLinkDeviceCommonInstructions.react").ExternalHelpLink, {
            text: s._(/*BTDS*/ "Link device"),
            isBold: !1,
            onClick: n("asyncToGeneratorRuntime").asyncToGenerator(
              function* () {
                (o(
                  "WAWebLinkDeviceQplHelpLinkEvent",
                ).WAWebLinkDeviceQplHelpLinkEvent(
                  o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                    .REG_WACOM_CONFIRMATION_CONTINUE_CLICKED,
                ),
                  t());
              },
            ),
            showArrow: !1,
            showUnderline: !0,
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.children;
      return u.jsx("strong", {
        className: "x1rg5ohu xk50ysn x1o2sk6j",
        children: t,
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
