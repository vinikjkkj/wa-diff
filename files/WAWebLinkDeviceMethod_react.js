__d(
  "WAWebLinkDeviceMethod.react",
  [
    "CometPlaceholder.react",
    "Promise",
    "WAWebAutoLogoutGating",
    "WAWebConnModel",
    "WAWebLinkDeviceQrcodeLayout.react",
    "WAWebLinkDeviceScreenGatedUtils",
    "WAWebPairingType",
    "WAWebRegistrationCampaignConstants",
    "WAWebUA",
    "asyncToGeneratorRuntime",
    "deferredLoadComponent",
    "react",
    "requireDeferred",
    "requireDeferredForDisplay",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useState,
      d = r("requireDeferred")("WAWebLinkDeviceAction").__setRef(
        "WAWebLinkDeviceMethod.react",
      ),
      m = r("requireDeferred")("WAWebQrDeviceLinkingQpl").__setRef(
        "WAWebLinkDeviceMethod.react",
      ),
      p = r("deferredLoadComponent")(
        r("requireDeferredForDisplay")("WAWebLinkDeviceQrcode.react").__setRef(
          "WAWebLinkDeviceMethod.react",
        ),
      ),
      _ = r("deferredLoadComponent")(
        r("requireDeferred")("WAWebLinkDevicePhoneNumber.react").__setRef(
          "WAWebLinkDeviceMethod.react",
        ),
      ),
      f = r("deferredLoadComponent")(
        r("requireDeferred")(
          "WAWebSmsRegistrationPhoneNumberInput.react",
        ).__setRef("WAWebLinkDeviceMethod.react"),
      ),
      g = r("deferredLoadComponent")(
        r("requireDeferred")(
          "WAWebWaComSignupSmsPhoneNumberInput.react",
        ).__setRef("WAWebLinkDeviceMethod.react"),
      );
    function h(t) {
      var a = t.apiCmd,
        l = t.autoLogoutEnabled,
        s = t.imperativeRef,
        h = t.onAutoLogoutToggle,
        y = t.onBack,
        C = t.onContinue,
        b = t.setApiCmd,
        v = o("WAWebUA").UA.isOculusBroswer,
        S = c(v),
        R = S[0],
        L = S[1],
        E = c(v),
        k = E[0],
        I = E[1],
        T = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var r = yield (e || (e = n("Promise"))).all([d.load()]),
              a = r[0].resetLinkDeviceState;
            (yield a({
              linkDeviceMethod: t
                ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
                : o("WAWebPairingType").PairingType.QR_CODE,
            }),
              I(t));
          });
          return function (n) {
            return t.apply(this, arguments);
          };
        })(),
        D = c(null),
        x = D[0],
        $ = D[1];
      if (
        (o("useWAWebListener").useListener(
          o("WAWebConnModel").Conn,
          "change:ref",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (R && k) {
              var t = yield (e || (e = n("Promise"))).all([d.load()]),
                r = t[0].resetLinkDeviceState;
              r({
                linkDeviceMethod:
                  o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING,
              }).then(function () {
                return L(!1);
              });
              return;
            }
            var a = yield d.load(),
              i = a.getPreselectedCountryCodeIso,
              l = yield i();
            $(l);
          }),
          { once: !0 },
        ),
        (a == null ? void 0 : a.resultType) === "WEB_REGISTRATION" &&
          o(
            "WAWebLinkDeviceScreenGatedUtils",
          ).getOptimizedRegFromWebVariant() === "test")
      )
        return u.jsx(r("CometPlaceholder.react"), {
          fallback: u.jsx("div", {}),
          name: "WAWebSmsRegistrationPhoneNumberInput",
          children: u.jsx(f, {
            imperativeRef: s,
            onBack: y,
            onContinue: C,
            setApiCmd: b,
          }),
        });
      if ((a == null ? void 0 : a.resultType) === "WEB_REGISTRATION_CAMPAIGN") {
        if (
          a.data.phoneNumberWithoutCountryCode == null ||
          a.data.group == null ||
          a.data.group ===
            o("WAWebRegistrationCampaignConstants")
              .WHATSAPP_DOT_COM_REG_EXP_CONTROL
        ) {
          var P;
          return u.jsx(r("CometPlaceholder.react"), {
            fallback: u.jsx("div", {}),
            name: "WAWebSmsRegistrationPhoneNumberInput",
            children: u.jsx(f, {
              experimentBucket:
                a == null || (P = a.data) == null ? void 0 : P.group,
              imperativeRef: s,
              onBack: y,
              onContinue: C,
              setApiCmd: b,
            }),
          });
        }
        return u.jsx(r("CometPlaceholder.react"), {
          fallback: u.jsx("div", {}),
          name: "WAWebWaComSignupSmsPhoneNumberInput",
          children: u.jsx(g, {
            setApiCmd: b,
            experimentBucket: a.data.group,
            phoneNumberWithoutCountryCodeFromQueryParams:
              a.data.phoneNumberWithoutCountryCode,
          }),
        });
      }
      if (k)
        return u.jsx(r("CometPlaceholder.react"), {
          fallback: u.jsx("div", {}),
          name: i.id,
          children: u.jsx(_, {
            apiCmd: a,
            initialCountryId: x,
            isLinkingPageLoading: R,
            onClickLinkWithQr: (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (e == null || e.preventDefault(),
                    e == null || e.stopPropagation(),
                    yield T(!1));
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
          }),
        });
      var N = !l || o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe(),
        M = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            (e == null || e.preventDefault(),
              e == null || e.stopPropagation(),
              m.onReady(function (e) {
                return e.companionDeviceLinkingScreenQpl.switchToPhoneNumber();
              }),
              yield T(!0));
          });
          return function (n) {
            return e.apply(this, arguments);
          };
        })();
      return u.jsx(r("CometPlaceholder.react"), {
        fallback: u.jsx(
          o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout,
          {
            apiCmd: a,
            autoLogoutEnabled: l,
            enabedAlternateDeviceLinking: N,
            onAutoLogoutToggle: h,
            onClickLinkWithPhoneNumber: M,
            children: u.jsx(
              o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner,
              {},
            ),
          },
        ),
        name: "WAWebLinkDeviceQrcode",
        children: u.jsx(p, {
          apiCmd: a,
          enabedAlternateDeviceLinking: N,
          onAutoLogoutToggle: h,
          autoLogoutEnabled: l,
          onClickLinkWithPhoneNumber: M,
        }),
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  98,
);
