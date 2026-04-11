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
    "gkx",
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
      h,
      y,
      C = (function (e) {
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
      b = (function (e) {
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
      v = (function (e) {
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
      S = (function (e) {
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
      R = (function (e) {
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
      L = n("$InternalEnum").Mirrored([
        "NotStarted",
        "Initialized",
        "AfterSendCompanionHello",
        "AfterSendCompanionFinish",
      ]),
      E = r("qpl")._(891429758, "3258"),
      k = (function () {
        function e() {
          this.clear();
        }
        var t = e.prototype;
        return (
          (t.clear = function () {
            ((this.helloCached = null),
              (this.ref = null),
              (this.phone = null),
              (this.stage = L.NotStarted),
              (this.codeGenerationTs = null),
              (this.primaryHelloAttemptCount = 0),
              o("WAWebAltDeviceLinkingQpl").clearCurrentMarker());
          }),
          e
        );
      })(),
      I = 180,
      T = 3,
      D = new k(),
      x = o("WAWebPairingType").PairingType.QR_CODE;
    function $() {
      return x;
    }
    function P(e) {
      x = e;
    }
    function N() {
      return D.ref;
    }
    function M() {
      return D.helloCached;
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: initialize alt linking",
              ])),
          ),
            D.clear(),
            o("WAWebAltDeviceLinkingQpl").setCurrentMarker(
              o("WAWebQplFlowWrapper").QPL.markerStart(E),
            ),
            yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(),
            (D.stage = L.Initialized),
            P(o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING));
        })),
        A.apply(this, arguments)
      );
    }
    function F() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: initialize QR linking",
              ])),
          ),
            $() === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING &&
              o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "switch_to_qr",
              ),
            D.clear(),
            yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
            (D.stage = L.NotStarted),
            P(o("WAWebPairingType").PairingType.QR_CODE));
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: start linking flow",
              ])),
          );
          var n = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
          if (n == null) throw new b("alt pairing: noise info is null");
          return (
            (D.phone = e),
            (D.codeGenerationTs = o("WATimeUtils").unixTime()),
            q(D, n, t)
          );
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t, n) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (r("gkx")("26258") ||
            o("WAWebAltDeviceLinkingQpl").annotateCurrentMarker({
              string: { phone: e.phone },
            }),
            e.stage === L.Initialized || s(0, 75727, e.stage),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "generate_code_start",
            ));
          var a = yield o("WAWebAltDeviceLinkingAlgorithm").companionHello();
          if (
            ((e.helloCached = a),
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
            (e.ref = yield o("WAWebAltDeviceLinkingIq").sendCompanionHello(
              o("WAJids").toPhoneUserJid(e.phone),
              a.linkCodePairingWrappedCompanionEphemeralPub,
              t.staticKeyPair.pubKey,
              n,
            )),
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
            throw new C("alt pairing:could not get ref from companion hello");
          return (
            r("gkx")("26258") ||
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "alt pairing: companion hello ref received: ",
                    "",
                  ])),
                e.ref,
              ),
            (e.stage = L.AfterSendCompanionHello),
            a.linkCodePairingSecret
          );
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
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: handling primary hello",
              ])),
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "primaryHelloReceivedAltLinking",
              {},
            ));
          try {
            return yield j(e, D, o("WATimeUtils").unixTime());
          } catch (e) {
            return (
              o("WAWebBackendApi").frontendFireAndForget("errorAltLinking", {}),
              (y || (y = n("Promise"))).reject(e)
            );
          }
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
            (e.stage = L.AfterSendCompanionHello));
        })),
        z.apply(this, arguments)
      );
    }
    function j(e, t, n) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "handle_primary_hello_start",
            ),
            t.primaryHelloAttemptCount++,
            t.stage === L.AfterSendCompanionFinish)
          )
            if (t.primaryHelloAttemptCount <= T) yield G(t);
            else
              throw new R(
                "alt pairing: reached max allowed primary hello attempts per code",
              );
          if (
            (t.stage === L.AfterSendCompanionHello || s(0, 75728, t.stage),
            r("gkx")("26258") ||
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "alt pairing: cached companion hello ref: ",
                    "",
                  ])),
                t.ref,
              ),
            t.ref == null)
          )
            throw new C("alt pairing:could not get ref from companion hello");
          if (
            !o("WACryptoUtils").uint8ArraysEqual(
              t.ref,
              e.linkCodeCompanionRegLinkCodePairingRefElementValue,
            )
          )
            throw new v(
              "alt pairing: handle primary hello: received unexpected ref",
            );
          if (t.helloCached == null)
            throw r("err")("alt pairing: cannot find cached hello data");
          if (t.codeGenerationTs == null)
            throw r("err")("alt pairing: cannot find codeGenerationTs");
          if (n - t.codeGenerationTs > I)
            throw new S(
              "alt pairing: cannot process primaryHello for an old code",
            );
          var a = t.helloCached,
            i = yield o("WAWebAltDeviceLinkingAlgorithm").companionFinish(
              o("WAByteArray").uint8ArrayToBuffer(
                e.linkCodeCompanionRegLinkCodePairingWrappedPrimaryEphemeralPubElementValue,
              ),
              o("WAByteArray").uint8ArrayToBuffer(
                e.linkCodeCompanionRegPrimaryIdentityPubElementValue,
              ),
              a.linkCodeKey,
              a.linkCodePairingCompanionADVEphemeralKeyPair,
            );
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: completed companion finish local algorithm",
              ])),
          ),
            yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(
              o("WABase64").encodeB64(i.advSecret),
            ));
          var l = t.ref;
          if (l == null) throw new C("alt pairing: cannot find cached ref");
          var u = t.phone;
          if (u == null) throw new C("alt pairing: phone is empty");
          (yield o("WAWebAltDeviceLinkingIq").sendCompanionFinish(
            i.linkCodePairingWrappedKeyBundle,
            i.companionIdentityPublic,
            l,
            o("WAJids").toPhoneUserJid(u),
          ),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: sent companion finish to server",
                ])),
            ),
            (t.stage = L.AfterSendCompanionFinish),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "handle_primary_hello_end",
            ));
        })),
        K.apply(this, arguments)
      );
    }
    ((l.InvalidRefError = v),
      (l.OldCodeError = S),
      (l.MaxPrimaryHelloError = R),
      (l.AltPairingStage = L),
      (l.PairingState = k),
      (l.getPairingType = $),
      (l.setPairingType = P),
      (l.getCurrentRef = N),
      (l.getCurrentHelloCached = M),
      (l.initializeAltDeviceLinking = w),
      (l.initializeQRLinking = F),
      (l.startAltLinkingFlow = B),
      (l.handlePrimaryHello = V),
      (l.handlePrimaryHelloInternal = j));
  },
  98,
);
