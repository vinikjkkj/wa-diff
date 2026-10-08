__d(
  "WAWebAltDeviceLinkingApi",
  [
    "invariant",
    "$InternalEnum",
    "Promise",
    "WABase64",
    "WAByteArray",
    "WACryptoUtils",
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebAdvSignatureApi",
    "WAWebAltDeviceLinkingAlgorithm",
    "WAWebAltDeviceLinkingIq",
    "WAWebAltDeviceLinkingQpl",
    "WAWebBackendApi",
    "WAWebPairingType",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "err",
    "qpl",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "MissingCachedRefError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      y = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "NoiseInfoIsNullError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      C = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "InvalidRefError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      b = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "OldCodeError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      v = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "MaxPrimaryHelloError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      S = n("$InternalEnum").Mirrored([
        "NotStarted",
        "Initialized",
        "AfterSendCompanionHello",
        "AfterSendCompanionFinish",
      ]),
      R = r("qpl")._(891429758, "3258"),
      L = (function () {
        function e() {
          this.clear();
        }
        var t = e.prototype;
        return (
          (t.clear = function () {
            ((this.helloCached = null),
              (this.ref = null),
              (this.phone = null),
              (this.stage = S.NotStarted),
              (this.codeGenerationTs = null),
              (this.primaryHelloAttemptCount = 0),
              o("WAWebAltDeviceLinkingQpl").clearCurrentMarker());
          }),
          e
        );
      })(),
      E = 180,
      k = 3,
      I = new L(),
      T = o("WAWebPairingType").PairingType.QR_CODE;
    function D() {
      return T;
    }
    function x(e) {
      T = e;
    }
    function $() {
      return I.ref;
    }
    function P() {
      return I.helloCached;
    }
    function N() {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: initialize alt linking",
              ])),
          ),
            I.clear(),
            o("WAWebAltDeviceLinkingQpl").setCurrentMarker(
              o("WAWebQplFlowWrapper").QPL.markerStart(R),
            ),
            yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(),
            (I.stage = S.Initialized),
            x(o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING));
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: initialize QR linking",
              ])),
          ),
            D() === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING &&
              o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "switch_to_qr",
              ),
            I.clear(),
            yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
            (I.stage = S.NotStarted),
            x(o("WAWebPairingType").PairingType.QR_CODE));
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: start linking flow",
              ])),
          );
          var n = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
          if (n == null) throw new y("alt pairing: noise info is null");
          return (
            (I.phone = e),
            (I.codeGenerationTs = o("WATimeUtils").unixTime()),
            B(I, n, t)
          );
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, n) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (e.stage === S.Initialized || s(0, 75727, e.stage),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "generate_code_start",
            ));
          var r = yield o("WAWebAltDeviceLinkingAlgorithm").companionHello();
          if (
            ((e.helloCached = r),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "generate_code_end",
            ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: completed companion hello generation",
                ])),
            ),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "send_companion_hello_start",
            ),
            e.phone != null || s(0, 67482),
            (e.ref = yield o("WAWebAltDeviceLinkingIq").sendCompanionHello({
              companionServerAuthKeyPub: t.staticKeyPair.pubKey,
              linkCodePairingWrappedCompanionEphemeralPub:
                r.linkCodePairingWrappedCompanionEphemeralPub,
              phone: o("WAJids").toPhoneUserJid(e.phone),
              shouldPush: n,
            })),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "send_companion_hello_end",
            ),
            o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: sent companion hello",
                ])),
            ),
            e.ref == null)
          )
            throw new h("alt pairing:could not get ref from companion hello");
          return (
            (e.stage = S.AfterSendCompanionHello),
            r.linkCodePairingSecret
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: handling primary hello",
              ])),
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "primaryHelloReceivedAltLinking",
              {},
            ));
          try {
            return yield G(e, I, o("WATimeUtils").unixTime());
          } catch (e) {
            return (
              o("WAWebBackendApi").frontendFireAndForget("errorAltLinking", {}),
              (g || (g = n("Promise"))).reject(e)
            );
          }
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
            (e.stage = S.AfterSendCompanionHello));
        })),
        H.apply(this, arguments)
      );
    }
    function G(e, t, n) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "handle_primary_hello_start",
            ),
            t.primaryHelloAttemptCount++,
            t.stage === S.AfterSendCompanionFinish)
          )
            if (t.primaryHelloAttemptCount <= k) yield V(t);
            else
              throw new v(
                "alt pairing: reached max allowed primary hello attempts per code",
              );
          if (
            (t.stage === S.AfterSendCompanionHello || s(0, 75728, t.stage),
            t.ref == null)
          )
            throw new h("alt pairing:could not get ref from companion hello");
          if (
            !o("WACryptoUtils").uint8ArraysEqual(
              t.ref,
              e.linkCodeCompanionRegLinkCodePairingRefElementValue,
            )
          )
            throw new C(
              "alt pairing: handle primary hello: received unexpected ref",
            );
          if (t.helloCached == null)
            throw r("err")("alt pairing: cannot find cached hello data");
          if (t.codeGenerationTs == null)
            throw r("err")("alt pairing: cannot find codeGenerationTs");
          if (n - t.codeGenerationTs > E)
            throw new b(
              "alt pairing: cannot process primaryHello for an old code",
            );
          var a = t.helloCached,
            i = yield o("WAWebAltDeviceLinkingAlgorithm").companionFinish({
              linkCodeKey: a.linkCodeKey,
              linkCodePairingCompanionADVEphemeralKeyPair:
                a.linkCodePairingCompanionADVEphemeralKeyPair,
              linkCodePairingWrappedPrimaryEphemeralPub: o(
                "WAByteArray",
              ).uint8ArrayToBuffer(
                e.linkCodeCompanionRegLinkCodePairingWrappedPrimaryEphemeralPubElementValue,
              ),
              primaryIdentityPublic: o("WAByteArray").uint8ArrayToBuffer(
                e.linkCodeCompanionRegPrimaryIdentityPubElementValue,
              ),
            });
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: completed companion finish local algorithm",
              ])),
          ),
            yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(
              o("WABase64").encodeB64(i.advSecret),
            ));
          var l = t.ref;
          if (l == null) throw new h("alt pairing: cannot find cached ref");
          var u = t.phone;
          if (u == null) throw new h("alt pairing: phone is empty");
          (yield o("WAWebAltDeviceLinkingIq").sendCompanionFinish({
            cachedRef: l,
            companionIdentityPublic: i.companionIdentityPublic,
            linkCodeCompanionRegJid: o("WAJids").toPhoneUserJid(u),
            linkCodePairingWrappedKeyBundle: i.linkCodePairingWrappedKeyBundle,
          }),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: sent companion finish to server",
                ])),
            ),
            (t.stage = S.AfterSendCompanionFinish),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "handle_primary_hello_end",
            ));
        })),
        z.apply(this, arguments)
      );
    }
    ((l.InvalidRefError = C),
      (l.OldCodeError = b),
      (l.MaxPrimaryHelloError = v),
      (l.AltPairingStage = S),
      (l.PairingState = L),
      (l.getPairingType = D),
      (l.setPairingType = x),
      (l.getCurrentRef = $),
      (l.getCurrentHelloCached = P),
      (l.initializeAltDeviceLinking = N),
      (l.initializeQRLinking = w),
      (l.startAltLinkingFlow = F),
      (l.handlePrimaryHello = q),
      (l.handlePrimaryHelloInternal = G));
  },
  98,
);
