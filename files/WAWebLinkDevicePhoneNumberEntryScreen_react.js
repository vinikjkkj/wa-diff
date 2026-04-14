__d(
  "WAWebLinkDevicePhoneNumberEntryScreen.react",
  [
    "fbt",
    "CometHeroHoldTrigger.react",
    "WAIsoToCc",
    "WALogger",
    "WAWebAlternateDeviceLinkingLink.react",
    "WAWebAppRootInteractionContext.react",
    "WAWebButton.react",
    "WAWebCountriesUtils",
    "WAWebCountryPhoneNumberInput.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebInteractionTracePolicy",
    "WAWebLinkDeviceCodeViewCodeType",
    "WAWebLinkDeviceCommonComponents.react",
    "WAWebLinkDeviceFlagEmojiSetup",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebLoggedOutBanner.react",
    "WAWebSpinner.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
    "useWAWebCountries",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = m.useRef,
      g = m.useState,
      h = "link-device-phone-number-entry-screen-error",
      y = {
        error: {
          backgroundColor: "x19lcxje",
          color: "xap1gg5",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          $$css: !0,
        },
        phoneNumberSectionWrapper: { width: "x1m258z3", $$css: !0 },
        spacer: { height: "xsdox4t", $$css: !0 },
        marginBottom8: { marginBottom: "xefnzgg", $$css: !0 },
        marginBottom4: { marginBottom: "x4tpdpg", $$css: !0 },
        marginBottom24: { marginBottom: "x14mdic9", $$css: !0 },
        paddingVert12: {
          paddingTop: "x1xrf6ya",
          paddingBottom: "xscbp6u",
          $$css: !0,
        },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function C() {
      return d.jsx(r("WAWebFlexItem.react"), { xstyle: y.spacer });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return d.jsx(o("WAWebFlex.react").FlexRow, {
        alignSelf: "center",
        xstyle: [y.error, y.marginBottom8, y.paddingVert12, y.paddingHoriz16],
        align: "center",
        justify: "center",
        children: d.jsx(r("WAWebFlexItem.react"), {
          children: d.jsx("span", {
            id: h,
            children: s._(/*BTDS*/ "Valid phone number is required."),
          }),
        }),
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.initialCountryId,
        a = e.initialPhoneNumber,
        i = e.isLinkingPageLoading,
        l = e.onClickLinkWithQr,
        u = e.onSubmitPhoneNumber,
        c = e.showUpdatePrimaryAppBanner,
        m = g(function () {
          if (a != null)
            return o(
              "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
            ).getCountryCodeIso(a);
          var e = t == null ? null : t.toUpperCase();
          return e != null && r("WAIsoToCc")[e] != null ? e : "US";
        }),
        _ = m[0],
        h = m[1],
        C = g(function () {
          return a == null
            ? ""
            : o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).cleanPhoneNumberInputValue(a).phoneNumberWithoutCountryCode;
        }),
        b = C[0],
        v = C[1],
        L = f(null),
        E = g(!1),
        k = E[0],
        I = E[1],
        T = p(
          function () {
            if (
              _ != null &&
              o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).isPhoneNumberValid(r("WAIsoToCc")[_], b, "pn_linking")
            ) {
              var e = "" + r("WAIsoToCc")[_] + b;
              u(e);
            } else {
              var t;
              ((t = L.current) == null || t.focus(), I(!0));
            }
          },
          [u, b, _],
        ),
        D = p(function (e, t) {
          (I(!1), h(e), v(t));
        }, []),
        x = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN,
          !0,
          !0,
        ),
        $ = x.failInteraction,
        P = x.startInteraction,
        N = x.stopInteraction,
        M = p(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (P(), yield l());
          }),
          [l, P],
        ),
        w = s._(/*BTDS*/ "Enter phone number"),
        A = s._(/*BTDS*/ "Select a country and enter your phone number.");
      return d.jsxs(d.Fragment, {
        children: [
          d.jsx(R, { shouldShowUpdatePrimaryErrorBanner: c }),
          d.jsxs(o("WAWebFlex.react").FlexColumn, {
            testid: void 0,
            className: "light",
            align: "center",
            children: [
              d.jsx(r("WAWebFlexItem.react"), {
                xstyle: y.marginBottom4,
                children: d.jsx(
                  o("WAWebLinkDeviceCommonComponents.react").Title,
                  { value: w },
                ),
              }),
              d.jsx(r("WAWebFlexItem.react"), {
                children: d.jsx(
                  o("WAWebLinkDeviceCommonComponents.react").Subtitle,
                  { value: A },
                ),
              }),
              d.jsx(S, {
                shouldDisplayError: k,
                phoneNumberWithoutCountryCode: b,
                selectedCountryId: _,
                onSubmit: T,
                onChangePhoneNumber: D,
                onChangeSelectedCountry: h,
                actionButtonText: r("WAWebFbtCommon")("Next"),
                isLinkingPageLoading: i,
                surface: "link-device-phone-number",
                onFailInteraction: $,
                onStopInteraction: N,
              }),
              d.jsx(r("WAWebFlexItem.react"), {
                children: d.jsx(r("WAWebAlternateDeviceLinkingLink.react"), {
                  codeType: o("WAWebLinkDeviceCodeViewCodeType")
                    .LinkDeviceCodeViewCodeType.PHONE_NUMBER_LINK_CODE,
                  onClick: M,
                }),
              }),
            ],
          }),
        ],
      });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var n = t.actionButtonText,
        a = t.isInsideModal,
        i = a === void 0 ? !1 : a,
        l = t.isLinkingPageLoading,
        s = l === void 0 ? !1 : l,
        c = t.onChangePhoneNumber,
        m = t.onChangeSelectedCountry,
        p = t.onFailInteraction,
        f = t.onStopInteraction,
        g = t.onSubmit,
        h = t.phoneNumberWithoutCountryCode,
        v = t.selectedCountryId,
        S = t.shouldDisplayError,
        R = t.surface,
        L = R === void 0 ? "default" : R,
        E = o("useWAWebCountries").useCountries({
          filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
            .WHATSAPP_REGISTRATION,
        }),
        k = E.error,
        I = E.value,
        T = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), []);
      if (
        (_(
          function () {
            T.error && p
              ? p(T.error)
              : f != null &&
                !T.loading &&
                !T.error &&
                s !== !0 &&
                I != null &&
                f();
          },
          [I, s, p, f, T.error, T.loading],
        ),
        T.loading || T.error || s === !0 || I == null)
      )
        return (
          T.error
            ? o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[AltDeviceLink] PhoneNumEntry emoji load failed",
                    ])),
                )
                .catching(T.error)
                .sendLogs("alt-device-linking load error", { sampling: 0.01 })
            : k &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[AltDeviceLink] PhoneNumEntry countries load failed",
                    ])),
                )
                .catching(k)
                .sendLogs("alt-device-linking load error", { sampling: 0.01 }),
          d.jsx(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            justify: "around",
            className: { 0: "x1ym45yv", 1: "x1fb2l0r" }[!!i << 0],
            children: d.jsxs(r("WAWebFlexItem.react"), {
              children: [
                d.jsx(r("CometHeroHoldTrigger.react"), {
                  description: "WAWebLinkDevicePhoneNumberEntryScreen",
                  hold: !0,
                }),
                d.jsx(o("WAWebSpinner.react").Spinner, {}),
              ],
            }),
          })
        );
      var D = L === "link-device-phone-number" && S;
      return d.jsxs(o("WAWebFlex.react").FlexColumn, {
        align: "stretch",
        xstyle: y.phoneNumberSectionWrapper,
        children: [
          d.jsx(r("WAWebCountryPhoneNumberInput.react"), {
            countries: I,
            shouldDisplayError: S,
            phoneNumberWithoutCountryCode: h,
            selectedCountryId: v,
            onChangePhoneNumber: c,
            onChangeSelectedCountry: m,
            onSubmit: g,
            surface: L,
          }),
          D ? d.jsx(b, {}) : d.jsx(C, {}),
          n != null &&
            d.jsx(r("WAWebFlexItem.react"), {
              xstyle: y.marginBottom24,
              align: "center",
              children: d.jsx(o("WAWebButton.react").Button, {
                type: "primary",
                onClick: g,
                testid: void 0,
                children: n,
              }),
            }),
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = e.shouldShowUpdatePrimaryErrorBanner;
      if (t === !0) {
        var n = s._(/*BTDS*/ "Update WhatsApp on phone"),
          o = s._(
            /*BTDS*/ "This feature is not available on the current version of WhatsApp on your phone. Please update the app and try again.",
          );
        return d.jsx(r("WAWebLoggedOutBanner.react"), {
          header: n,
          text: o,
          category: "warning",
        });
      }
      return null;
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.LinkWithPhoneNumberEntryScreen = v),
      (l.PhoneNumberSection = S));
  },
  226,
);
