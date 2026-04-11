__d(
  "WAWebSmsRegistrationPhoneNumberInput.react",
  [
    "fbt",
    "$InternalEnum",
    "CometHeroHoldTrigger.react",
    "WAIsoToCc",
    "WALogger",
    "WAWebAppRootInteractionContext.react",
    "WAWebCountriesUtils",
    "WAWebCountryPhoneNumberInput.react",
    "WAWebEnvironment",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebHybridRegGating",
    "WAWebInteractionTracePolicy",
    "WAWebL10N",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLinkDeviceFlagEmojiSetup",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLinkDeviceQplHelpLinkEvent",
    "WAWebLinkDeviceScreenPrimaryButton.react",
    "WAWebSmsRegistrationConfirmation.react",
    "WAWebSpinner.react",
    "WAWebWaBrandArrowRightIconWrapper.react",
    "WAXWhatsAppWebRegistrationControllerRouteBuilder",
    "WDSBanner.react",
    "WDSIconIcWarning.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useVisibility",
    "useWAWebAsync",
    "useWAWebCountries",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useImperativeHandle,
      f = m.useMemo,
      g = m.useState,
      h = {
        subtitle: {
          lineHeight: "x1qfxs89",
          letterSpacing: "xfq947u",
          textAlign: "x2b8uid",
          $$css: !0,
        },
        error: {
          backgroundColor: "x19lcxje",
          color: "xap1gg5",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          marginBottom: "x1e56ztr",
          paddingTop: "x1xrf6ya",
          paddingInlineEnd: "xvtqlqk",
          paddingBottom: "xscbp6u",
          paddingInlineStart: "xdx6fka",
          $$css: !0,
        },
      },
      y = "for (;;);",
      C = n("$InternalEnum")({ SENT: 1, ERROR: 2 });
    function b(e) {
      var t = e.experimentBucket,
        a = e.imperativeRef,
        i = e.onBack,
        l = e.onContinue,
        u = e.setApiCmd,
        c = g(""),
        m = c[0],
        h = c[1],
        y = g("US"),
        b = y[0],
        L = y[1],
        k = g(!1),
        I = k[0],
        T = k[1],
        D = g(!1),
        x = D[0],
        $ = D[1],
        P = g(),
        N = P[0],
        M = P[1],
        w = p(
          function () {
            return (N == null ? void 0 : N.status) === C.SENT
              ? (h(""), M(null), !0)
              : i != null
                ? i()
                : !1;
          },
          [i, N == null ? void 0 : N.status],
        );
      _(
        a,
        function () {
          return { handleBack: w };
        },
        [w],
      );
      var A = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []),
        F = p(function (e, t) {
          h(t.substr(0, 10));
        }, []),
        O = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN,
          !1,
          !0,
        ),
        B = O.startInteraction,
        W = o("useWAWebCountries").useCountries({
          filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
            .WHATSAPP_REGISTRATION,
        }),
        q = W.error,
        U = W.value,
        V = f(
          function () {
            return (
              I ||
              x ||
              !o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).isPhoneNumberValid(r("WAIsoToCc")[b], m)
            );
          },
          [x, I, m, b],
        ),
        H = r("useVisibility")({
          onVisible: function () {
            o(
              "WAWebLinkDeviceQplHelpLinkEvent",
            ).WAWebLinkDeviceQplHelpLinkEvent(
              t == null
                ? o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                    .REG_PN_SCREEN_LOADED
                : o("WAWebLinkDeviceQplHelpLinkEvent").WebcPairingScreenLinkType
                    .REG_WACOM_PN_SCREEN_LOADED,
            );
          },
        }),
        G = H[0];
      if (U == null || q != null || A.loading || A.error)
        return d.jsxs(o("WAWebFlex.react").FlexRow, {
          justify: "center",
          children: [
            d.jsx(r("CometHeroHoldTrigger.react"), {
              description: "WAWebSmsRegistrationPhoneNumberInput",
              hold: !0,
            }),
            d.jsx(o("WAWebSpinner.react").Spinner, {}),
          ],
        });
      var z;
      r("gkx")("26259")
        ? (z = U)
        : (z = U.filter(function (e) {
            var t = e[0],
              n = e[1];
            return t === "US";
          }));
      var j = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            if (!V) {
              (o(
                "WAWebLinkDeviceQplHelpLinkEvent",
              ).WAWebLinkDeviceQplHelpLinkEvent(
                t == null
                  ? o("WAWebLinkDeviceQplHelpLinkEvent")
                      .WebcPairingScreenLinkType.REG_PN_SCREEN_CONTINUE_CLICKED
                  : o("WAWebLinkDeviceQplHelpLinkEvent")
                      .WebcPairingScreenLinkType
                      .REG_WACOM_PN_SCREEN_CONTINUE_CLICKED,
              ),
                T(!0));
              var n = ((e = r("WAIsoToCc")[b]) != null ? e : "") + m,
                a = yield E(n),
                i = a == null ? void 0 : a.retry_after;
              ((a == null ? void 0 : a.status) === C.ERROR &&
                i != null &&
                i > 0 &&
                ($(!0),
                window.setTimeout(function () {
                  $(!1);
                }, i * 1e3)),
                M(a),
                T(!1));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        K = o("WAWebHybridRegGating").isHybridRegEnabled();
      return (N == null ? void 0 : N.status) === C.SENT
        ? d.jsx(r("WAWebSmsRegistrationConfirmation.react"), {
            selectedCountryId: b,
            phoneNumberWithoutCountryCode: m,
            onBack: function () {
              (h(""), M(null));
            },
            onContinue: l,
            onRetry: j,
            providerNumber: N == null ? void 0 : N.provider_number,
            theme: K ? "wds" : void 0,
          })
        : d.jsxs(o("WAWebFlex.react").FlexColumn, {
            rowGap: 24,
            className: K ? void 0 : "light",
            ref: G,
            children: [
              d.jsx(o("WAWebFlex.react").FlexRow, {
                alignSelf: "center",
                children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  rowGap: o("WAWebHybridRegGating").isHybridRegEnabled()
                    ? 0
                    : 16,
                  children: [
                    d.jsx(o("WAWebFlex.react").FlexRow, {
                      alignSelf: "center",
                      children: d.jsx(
                        o("WAWebLinkDeviceCommonComponents.react").Title,
                        {
                          value: s._(/*BTDS*/ "Enter your phone number"),
                          theme: o("WAWebHybridRegGating").isHybridRegEnabled()
                            ? "wds"
                            : void 0,
                        },
                      ),
                    }),
                    d.jsx(o("WAWebFlex.react").FlexRow, {
                      children: d.jsx(S, {}),
                    }),
                  ],
                }),
              }),
              d.jsx(o("WAWebFlex.react").FlexRow, {
                alignSelf: "center",
                children: d.jsxs(o("WAWebFlex.react").FlexColumn, {
                  rowGap: 4,
                  align: "center",
                  children: [
                    d.jsx(r("WAWebCountryPhoneNumberInput.react"), {
                      countries: z,
                      shouldDisplayError: !1,
                      phoneNumberWithoutCountryCode: m,
                      selectedCountryId: b,
                      onChangePhoneNumber: F,
                      onChangeSelectedCountry: L,
                      showCountrySelect: o(
                        "WAWebHybridRegGating",
                      ).shouldShowCountrySelector(),
                      surface: "link-device-phone-number",
                      onSubmit: function () {
                        j();
                      },
                      error: N == null ? void 0 : N.error_reason,
                      theme: o("WAWebHybridRegGating").isHybridRegEnabled()
                        ? "wds"
                        : "default",
                    }),
                    (N == null ? void 0 : N.error_reason) != null &&
                      (function (e, t) {
                        if (e === !0) {
                          var n;
                          return d.jsx(r("WDSBanner.react"), {
                            type: "warning",
                            icon: r("WDSIconIcWarning.react"),
                            body:
                              (n = N == null ? void 0 : N.error_reason) != null
                                ? n
                                : r("WAWebFbtCommon")("Try Again"),
                          });
                        }
                        return d.jsx(R, {
                          errorReason:
                            (t = N == null ? void 0 : N.error_reason) != null
                              ? t
                              : r("WAWebFbtCommon")("Try Again"),
                        });
                      })(o("WAWebHybridRegGating").isHybridRegEnabled()),
                    d.jsx(r("WAWebLinkDeviceScreenPrimaryButton.react"), {
                      text: r("WAWebFbtCommon")("Continue"),
                      onClick: j,
                      animate: !1,
                      disabled: V,
                      testId: "link-device-sms-pn-entry-continue-button",
                      icon: d.jsx(
                        r("WAWebWaBrandArrowRightIconWrapper.react"),
                        {},
                      ),
                      theme: o("WAWebHybridRegGating").isHybridRegEnabled()
                        ? "wds"
                        : void 0,
                    }),
                  ],
                }),
              }),
              d.jsxs(o("WAWebFlex.react").FlexRow, {
                columnGap: 8,
                alignSelf: "center",
                children: [
                  d.jsx(o("WAWebFlex.react").FlexColumn, {
                    children: d.jsx(v, {
                      children: s._(/*BTDS*/ "Already have an account?"),
                    }),
                  }),
                  d.jsx(o("WAWebFlex.react").FlexColumn, {
                    children: d.jsx(v, {
                      children: d.jsx(
                        o("WAWebLinkDeviceCommonInstructions.react")
                          .ExternalHelpLink,
                        {
                          isBold: o(
                            "WAWebHybridRegGating",
                          ).isHybridRegEnabled(),
                          text: s._(/*BTDS*/ "Log in"),
                          onClick: n(
                            "asyncToGeneratorRuntime",
                          ).asyncToGenerator(function* () {
                            (B(), u(null));
                          }),
                          showArrow: o(
                            "WAWebHybridRegGating",
                          ).isHybridRegEnabled()
                            ? !1
                            : void 0,
                          showUnderline: o(
                            "WAWebHybridRegGating",
                          ).isHybridRegEnabled()
                            ? !1
                            : void 0,
                        },
                      ),
                    }),
                  }),
                ],
              }),
            ],
          });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children;
      if (o("WAWebHybridRegGating").isHybridRegEnabled()) {
        var a;
        return (
          t[0] !== n
            ? ((a = d.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                children: n,
              })),
              (t[0] = n),
              (t[1] = a))
            : (a = t[1]),
          a
        );
      }
      return n;
    }
    function S() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = d.jsx(o("WAWebFlex.react").FlexRow, {
            alignSelf: "center",
            align: "center",
            wrap: "wrap",
            justify: "center",
            children: d.jsx(v, {
              children: s._(
                /*BTDS*/ "We'll send an SMS to your phone, where you can download WhatsApp and register your account.",
              ),
            }),
          })),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = d.jsxs(o("WAWebFlex.react").FlexColumn, {
              rowGap: 2,
              xstyle: h.subtitle,
              children: [
                t,
                d.jsx(o("WAWebFlex.react").FlexRow, {
                  alignSelf: "center",
                  align: "center",
                  wrap: "wrap",
                  justify: "center",
                  children: d.jsx(v, {
                    children: s._(
                      /*BTDS*/ 'Message and data rates may apply. Read our\u00a0{privacy_policy_link}. Click "Continue" to accept the\u00a0{terms_of_service_link}.',
                      [
                        s._param(
                          "privacy_policy_link",
                          d.jsx(
                            o("WAWebLinkDeviceCommonInstructions.react")
                              .ExternalHelpLink,
                            {
                              isBold: o(
                                "WAWebHybridRegGating",
                              ).isHybridRegEnabled(),
                              text: s._(/*BTDS*/ "Privacy Policy"),
                              url: "https://www.whatsapp.com/legal/privacy-policy",
                              showArrow: !1,
                              showUnderline: o(
                                "WAWebHybridRegGating",
                              ).isHybridRegEnabled()
                                ? !1
                                : void 0,
                            },
                          ),
                        ),
                        s._param(
                          "terms_of_service_link",
                          d.jsx(
                            o("WAWebLinkDeviceCommonInstructions.react")
                              .ExternalHelpLink,
                            {
                              isBold: o(
                                "WAWebHybridRegGating",
                              ).isHybridRegEnabled(),
                              text: s._(/*BTDS*/ "Terms of Service"),
                              url: "https://www.whatsapp.com/legal/terms-of-service",
                              showArrow: !1,
                              showUnderline: o(
                                "WAWebHybridRegGating",
                              ).isHybridRegEnabled()
                                ? !1
                                : void 0,
                            },
                          ),
                        ),
                      ],
                    ),
                  }),
                }),
              ],
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.errorReason,
        r;
      return (
        t[0] !== n
          ? ((r = d.jsx(o("WAWebFlex.react").FlexRow, {
              alignSelf: "center",
              xstyle: h.error,
              children: n,
            })),
            (t[0] = n),
            (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    var L = n("$InternalEnum")({ WEB: 1, WWW: 2, WINDOWS: 3 });
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = r("WAXWhatsAppWebRegistrationControllerRouteBuilder")
                .buildUri({
                  phone: t,
                  step: "otp",
                  locale: r("WAWebL10N").getLocale(),
                  source: r("WAWebEnvironment").isWindows ? L.WINDOWS : void 0,
                })
                .toString()
                .concat("&__a=1"),
              a = yield window.fetch(n, {
                headers: { "Content-Type": "application/json" },
              }),
              i = yield a.text();
            i.startsWith(y) && (i = i.substring(y.length));
            var l = JSON.parse(i).payload;
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebSmsRegistrationPhoneNumberInput] sendSmsCall +",
                  ])),
              ),
              l
            );
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebSmsRegistrationPhoneNumberInput] sendSmsCall - ",
                    "",
                  ])),
                e,
              )
              .sendLogs("wa-web-reg");
          }
          return {
            status: C.ERROR,
            error_reason: r("WAWebFbtCommon")("Try Again"),
            retry_after: 5,
          };
        })),
        k.apply(this, arguments)
      );
    }
    l.default = b;
  },
  226,
);
