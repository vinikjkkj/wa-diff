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
    "react-compiler-runtime",
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
      var a = o("react-compiler-runtime").c(46),
        l = t.apiCmd,
        s = t.autoLogoutEnabled,
        h = t.imperativeRef,
        C = t.onAutoLogoutToggle,
        b = t.onBack,
        v = t.onContinue,
        S = t.setApiCmd,
        R = o("WAWebUA").UA.isOculusBroswer,
        L = c(R),
        E = L[0],
        k = L[1],
        I = c(R),
        T = I[0],
        D = I[1],
        x;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = yield (e || (e = n("Promise"))).all([d.load()]),
                  a = r[0],
                  i = a.resetLinkDeviceState;
                (yield i({
                  linkDeviceMethod: t
                    ? o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING
                    : o("WAWebPairingType").PairingType.QR_CODE,
                }),
                  D(t));
              },
            );
            return function (n) {
              return t.apply(this, arguments);
            };
          })()),
          (a[0] = x))
        : (x = a[0]);
      var $ = x,
        P = c(null),
        N = P[0],
        M = P[1],
        w;
      a[1] !== E || a[2] !== T
        ? ((w = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (E && T) {
                var t = yield (e || (e = n("Promise"))).all([d.load()]),
                  r = t[0],
                  a = r.resetLinkDeviceState;
                a({
                  linkDeviceMethod:
                    o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING,
                }).then(function () {
                  return k(!1);
                });
                return;
              }
              var i = yield d.load(),
                l = i.getPreselectedCountryCodeIso,
                s = yield l();
              M(s);
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (a[1] = E),
          (a[2] = T),
          (a[3] = w))
        : (w = a[3]);
      var A;
      if (
        (a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = { once: !0 }), (a[4] = A))
          : (A = a[4]),
        o("useWAWebListener").useListener(
          o("WAWebConnModel").Conn,
          "change:ref",
          w,
          A,
        ),
        (l == null ? void 0 : l.resultType) === "WEB_REGISTRATION" &&
          o(
            "WAWebLinkDeviceScreenGatedUtils",
          ).getOptimizedRegFromWebVariant() === "test")
      ) {
        var F;
        a[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = u.jsx("div", {})), (a[5] = F))
          : (F = a[5]);
        var O;
        return (
          a[6] !== h || a[7] !== b || a[8] !== v || a[9] !== S
            ? ((O = u.jsx(r("CometPlaceholder.react"), {
                fallback: F,
                name: "WAWebSmsRegistrationPhoneNumberInput",
                children: u.jsx(f, {
                  imperativeRef: h,
                  onBack: b,
                  onContinue: v,
                  setApiCmd: S,
                }),
              })),
              (a[6] = h),
              (a[7] = b),
              (a[8] = v),
              (a[9] = S),
              (a[10] = O))
            : (O = a[10]),
          O
        );
      }
      if ((l == null ? void 0 : l.resultType) === "WEB_REGISTRATION_CAMPAIGN") {
        if (
          l.data.phoneNumberWithoutCountryCode == null ||
          l.data.group == null ||
          l.data.group ===
            o("WAWebRegistrationCampaignConstants")
              .WHATSAPP_DOT_COM_REG_EXP_CONTROL
        ) {
          var B, W;
          a[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((W = u.jsx("div", {})), (a[11] = W))
            : (W = a[11]);
          var q = l == null || (B = l.data) == null ? void 0 : B.group,
            U;
          return (
            a[12] !== h ||
            a[13] !== b ||
            a[14] !== v ||
            a[15] !== S ||
            a[16] !== q
              ? ((U = u.jsx(r("CometPlaceholder.react"), {
                  fallback: W,
                  name: "WAWebSmsRegistrationPhoneNumberInput",
                  children: u.jsx(f, {
                    experimentBucket: q,
                    imperativeRef: h,
                    onBack: b,
                    onContinue: v,
                    setApiCmd: S,
                  }),
                })),
                (a[12] = h),
                (a[13] = b),
                (a[14] = v),
                (a[15] = S),
                (a[16] = q),
                (a[17] = U))
              : (U = a[17]),
            U
          );
        }
        var V;
        a[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = u.jsx("div", {})), (a[18] = V))
          : (V = a[18]);
        var H;
        return (
          a[19] !== l.data.group ||
          a[20] !== l.data.phoneNumberWithoutCountryCode ||
          a[21] !== S
            ? ((H = u.jsx(r("CometPlaceholder.react"), {
                fallback: V,
                name: "WAWebWaComSignupSmsPhoneNumberInput",
                children: u.jsx(g, {
                  setApiCmd: S,
                  experimentBucket: l.data.group,
                  phoneNumberWithoutCountryCodeFromQueryParams:
                    l.data.phoneNumberWithoutCountryCode,
                }),
              })),
              (a[19] = l.data.group),
              (a[20] = l.data.phoneNumberWithoutCountryCode),
              (a[21] = S),
              (a[22] = H))
            : (H = a[22]),
          H
        );
      }
      if (T) {
        var G;
        a[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = u.jsx("div", {})), (a[23] = G))
          : (G = a[23]);
        var z;
        a[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  (e == null || e.preventDefault(),
                    e == null || e.stopPropagation(),
                    yield $(!1));
                },
              );
              return function (n) {
                return e.apply(this, arguments);
              };
            })()),
            (a[24] = z))
          : (z = a[24]);
        var j;
        return (
          a[25] !== l || a[26] !== E || a[27] !== N
            ? ((j = u.jsx(r("CometPlaceholder.react"), {
                fallback: G,
                name: i.id,
                children: u.jsx(_, {
                  apiCmd: l,
                  initialCountryId: N,
                  isLinkingPageLoading: E,
                  onClickLinkWithQr: z,
                }),
              })),
              (a[25] = l),
              (a[26] = E),
              (a[27] = N),
              (a[28] = j))
            : (j = a[28]),
          j
        );
      }
      var K;
      a[29] !== s
        ? ((K = !s || o("WAWebAutoLogoutGating").isRunningInAutoLogoutIframe()),
          (a[29] = s),
          (a[30] = K))
        : (K = a[30]);
      var Q = K,
        X;
      a[31] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (e == null || e.preventDefault(),
                  e == null || e.stopPropagation(),
                  m.onReady(y),
                  yield $(!0));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[31] = X))
        : (X = a[31]);
      var Y = X,
        J;
      a[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = u.jsx(o("WAWebLinkDeviceQrcodeLayout.react").QRSpinner, {})),
          (a[32] = J))
        : (J = a[32]);
      var Z;
      a[33] !== l || a[34] !== s || a[35] !== Q || a[36] !== C
        ? ((Z = u.jsx(
            o("WAWebLinkDeviceQrcodeLayout.react").WAWebLinkDeviceQrcodeLayout,
            {
              apiCmd: l,
              autoLogoutEnabled: s,
              enabedAlternateDeviceLinking: Q,
              onAutoLogoutToggle: C,
              onClickLinkWithPhoneNumber: Y,
              children: J,
            },
          )),
          (a[33] = l),
          (a[34] = s),
          (a[35] = Q),
          (a[36] = C),
          (a[37] = Z))
        : (Z = a[37]);
      var ee;
      a[38] !== l || a[39] !== s || a[40] !== Q || a[41] !== C
        ? ((ee = u.jsx(p, {
            apiCmd: l,
            enabedAlternateDeviceLinking: Q,
            onAutoLogoutToggle: C,
            autoLogoutEnabled: s,
            onClickLinkWithPhoneNumber: Y,
          })),
          (a[38] = l),
          (a[39] = s),
          (a[40] = Q),
          (a[41] = C),
          (a[42] = ee))
        : (ee = a[42]);
      var te;
      return (
        a[43] !== Z || a[44] !== ee
          ? ((te = u.jsx(r("CometPlaceholder.react"), {
              fallback: Z,
              name: "WAWebLinkDeviceQrcode",
              children: ee,
            })),
            (a[43] = Z),
            (a[44] = ee),
            (a[45] = te))
          : (te = a[45]),
        te
      );
    }
    function y(e) {
      return e.companionDeviceLinkingScreenQpl.switchToPhoneNumber();
    }
    l.default = h;
  },
  98,
);
