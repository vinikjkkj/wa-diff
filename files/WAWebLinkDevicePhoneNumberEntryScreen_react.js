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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = d.jsx(r("WAWebFlexItem.react"), { xstyle: y.spacer })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function b() {
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = [y.error, y.marginBottom8, y.paddingVert12, y.paddingHoriz16]),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = d.jsx(o("WAWebFlex.react").FlexRow, {
              alignSelf: "center",
              xstyle: t,
              align: "center",
              justify: "center",
              children: d.jsx(r("WAWebFlexItem.react"), {
                children: d.jsx("span", {
                  id: h,
                  children: s._(/*BTDS*/ "Valid phone number is required."),
                }),
              }),
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
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
      var n = o("react-compiler-runtime").c(33),
        a = t.actionButtonText,
        i = t.isInsideModal,
        l = t.isLinkingPageLoading,
        s = t.onChangePhoneNumber,
        c = t.onChangeSelectedCountry,
        m = t.onFailInteraction,
        p = t.onStopInteraction,
        f = t.onSubmit,
        g = t.phoneNumberWithoutCountryCode,
        h = t.selectedCountryId,
        v = t.shouldDisplayError,
        S = t.surface,
        R = i === void 0 ? !1 : i,
        L = l === void 0 ? !1 : l,
        E = S === void 0 ? "default" : S,
        k;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = {
            filterType: o("WAWebCountriesUtils").COUNTRY_FILTER_TYPE
              .WHATSAPP_REGISTRATION,
          }),
          (n[0] = k))
        : (k = n[0]);
      var I = o("useWAWebCountries").useCountries(k),
        T = I.error,
        D = I.value,
        x;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = []), (n[1] = x))
        : (x = n[1]);
      var $ = r("useWAWebAsync")(r("WAWebLinkDeviceFlagEmojiSetup"), x),
        P,
        N;
      if (
        (n[2] !== D ||
        n[3] !== L ||
        n[4] !== m ||
        n[5] !== p ||
        n[6] !== $.error ||
        n[7] !== $.loading
          ? ((P = function () {
              $.error && m
                ? m($.error)
                : p != null &&
                  !$.loading &&
                  !$.error &&
                  L !== !0 &&
                  D != null &&
                  p();
            }),
            (N = [D, L, m, p, $.error, $.loading]),
            (n[2] = D),
            (n[3] = L),
            (n[4] = m),
            (n[5] = p),
            (n[6] = $.error),
            (n[7] = $.loading),
            (n[8] = P),
            (n[9] = N))
          : ((P = n[8]), (N = n[9])),
        _(P, N),
        $.loading || $.error || L === !0 || D == null)
      ) {
        $.error
          ? o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[AltDeviceLink] PhoneNumEntry emoji load failed",
                  ])),
              )
              .catching($.error)
              .sendLogs("alt-device-linking load error", { sampling: 0.01 })
          : T &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[AltDeviceLink] PhoneNumEntry countries load failed",
                  ])),
              )
              .catching(T)
              .sendLogs("alt-device-linking load error", { sampling: 0.01 });
        var M;
        n[10] !== R
          ? ((M = { 0: "x1ym45yv", 1: "x1fb2l0r" }[!!R << 0]),
            (n[10] = R),
            (n[11] = M))
          : (M = n[11]);
        var w;
        n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = d.jsxs(r("WAWebFlexItem.react"), {
              children: [
                d.jsx(r("CometHeroHoldTrigger.react"), {
                  description: "WAWebLinkDevicePhoneNumberEntryScreen",
                  hold: !0,
                }),
                d.jsx(o("WAWebSpinner.react").Spinner, {}),
              ],
            })),
            (n[12] = w))
          : (w = n[12]);
        var A;
        return (
          n[13] !== M
            ? ((A = d.jsx(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                justify: "around",
                className: M,
                children: w,
              })),
              (n[13] = M),
              (n[14] = A))
            : (A = n[14]),
          A
        );
      }
      var F = E === "link-device-phone-number" && v,
        O;
      n[15] !== D ||
      n[16] !== s ||
      n[17] !== c ||
      n[18] !== f ||
      n[19] !== g ||
      n[20] !== h ||
      n[21] !== v ||
      n[22] !== E
        ? ((O = d.jsx(r("WAWebCountryPhoneNumberInput.react"), {
            countries: D,
            shouldDisplayError: v,
            phoneNumberWithoutCountryCode: g,
            selectedCountryId: h,
            onChangePhoneNumber: s,
            onChangeSelectedCountry: c,
            onSubmit: f,
            surface: E,
          })),
          (n[15] = D),
          (n[16] = s),
          (n[17] = c),
          (n[18] = f),
          (n[19] = g),
          (n[20] = h),
          (n[21] = v),
          (n[22] = E),
          (n[23] = O))
        : (O = n[23]);
      var B;
      n[24] !== F
        ? ((B = F ? d.jsx(b, {}) : d.jsx(C, {})), (n[24] = F), (n[25] = B))
        : (B = n[25]);
      var W;
      n[26] !== a || n[27] !== f
        ? ((W =
            a != null &&
            d.jsx(r("WAWebFlexItem.react"), {
              xstyle: y.marginBottom24,
              align: "center",
              children: d.jsx(o("WAWebButton.react").Button, {
                type: "primary",
                onClick: f,
                testid: void 0,
                children: a,
              }),
            })),
          (n[26] = a),
          (n[27] = f),
          (n[28] = W))
        : (W = n[28]);
      var q;
      return (
        n[29] !== O || n[30] !== B || n[31] !== W
          ? ((q = d.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "stretch",
              xstyle: y.phoneNumberSectionWrapper,
              children: [O, B, W],
            })),
            (n[29] = O),
            (n[30] = B),
            (n[31] = W),
            (n[32] = q))
          : (q = n[32]),
        q
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.shouldShowUpdatePrimaryErrorBanner;
      if (n === !0) {
        var a;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = s._(/*BTDS*/ "Update WhatsApp on phone")), (t[0] = a))
          : (a = t[0]);
        var i = a,
          l;
        if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
          var u = s._(
            /*BTDS*/ "This feature is not available on the current version of WhatsApp on your phone. Please update the app and try again.",
          );
          ((l = d.jsx(r("WAWebLoggedOutBanner.react"), {
            header: i,
            text: u,
            category: "warning",
          })),
            (t[1] = l));
        } else l = t[1];
        return l;
      }
      return null;
    }
    ((l.LinkWithPhoneNumberEntryScreen = v), (l.PhoneNumberSection = S));
  },
  226,
);
