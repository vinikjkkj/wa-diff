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
    "WAWebAltDeviceLinkingQpl",
    "WAWebBackendApi",
    "WAWebPairingType",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "err",
    "qpl",
    "requireDeferred",
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
      h = r("requireDeferred")("WAWebAltDeviceLinkingIq").__setRef(
        "WAWebAltDeviceLinkingApi",
      ),
      y = (function (e) {
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
      C = (function (e) {
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
      b = (function (e) {
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
      v = (function (e) {
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
      S = (function (e) {
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
      R = n("$InternalEnum").Mirrored([
        "NotStarted",
        "Initialized",
        "AfterSendCompanionHello",
        "AfterSendCompanionFinish",
      ]),
      L = r("qpl")._(891429758, "3258"),
      E = (function () {
        function e() {
          this.clear();
        }
        var t = e.prototype;
        return (
          (t.clear = function () {
            ((this.helloCached = null),
              (this.ref = null),
              (this.phone = null),
              (this.stage = R.NotStarted),
              (this.codeGenerationTs = null),
              (this.primaryHelloAttemptCount = 0),
              o("WAWebAltDeviceLinkingQpl").clearCurrentMarker());
          }),
          e
        );
      })(),
      k = 180,
      I = 3,
      T = new E(),
      D = o("WAWebPairingType").PairingType.QR_CODE;
    function x() {
      return D;
    }
    function $(e) {
      D = e;
    }
    function P() {
      return T.ref;
    }
    function N() {
      return T.helloCached;
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: initialize alt linking",
              ])),
          ),
            T.clear(),
            o("WAWebAltDeviceLinkingQpl").setCurrentMarker(
              o("WAWebQplFlowWrapper").QPL.markerStart(L),
            ),
            yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(),
            (T.stage = R.Initialized),
            $(o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING));
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: initialize QR linking",
              ])),
          ),
            x() === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING &&
              o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "switch_to_qr",
              ),
            T.clear(),
            yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
            (T.stage = R.NotStarted),
            $(o("WAWebPairingType").PairingType.QR_CODE));
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: start linking flow",
              ])),
          );
          var n = yield o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
          if (n == null) throw new C("alt pairing: noise info is null");
          return (
            (T.phone = e),
            (T.codeGenerationTs = o("WATimeUtils").unixTime()),
            W(T, n, t)
          );
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          (e.stage === R.Initialized || s(0, 75727, e.stage),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "generate_code_start",
            ));
          var r = yield o("WAWebAltDeviceLinkingAlgorithm").companionHello();
          ((e.helloCached = r),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "generate_code_end",
            ),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: completed companion hello generation",
                ])),
            ));
          var a = e.phone;
          a != null || s(0, 67482);
          var i = yield h.load(),
            l = i.sendCompanionHello;
          if (
            (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "send_companion_hello_start",
            ),
            (e.ref = yield l({
              companionServerAuthKeyPub: t.staticKeyPair.pubKey,
              linkCodePairingWrappedCompanionEphemeralPub:
                r.linkCodePairingWrappedCompanionEphemeralPub,
              phone: o("WAJids").toPhoneUserJid(a),
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
            throw new y("alt pairing:could not get ref from companion hello");
          return (
            (e.stage = R.AfterSendCompanionHello),
            r.linkCodePairingSecret
          );
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            return yield z(e, T, o("WATimeUtils").unixTime());
          } catch (e) {
            return (
              o("WAWebBackendApi").frontendFireAndForget("errorAltLinking", {}),
              (g || (g = n("Promise"))).reject(e)
            );
          }
        })),
        V.apply(this, arguments)
      );
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebAdvSignatureApi").generateADVSecretKey(),
            (e.stage = R.AfterSendCompanionHello));
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t, n) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "handle_primary_hello_start",
            ),
            t.primaryHelloAttemptCount++,
            t.stage === R.AfterSendCompanionFinish)
          )
            if (t.primaryHelloAttemptCount <= I) yield H(t);
            else
              throw new S(
                "alt pairing: reached max allowed primary hello attempts per code",
              );
          if (
            (t.stage === R.AfterSendCompanionHello || s(0, 75728, t.stage),
            t.ref == null)
          )
            throw new y("alt pairing:could not get ref from companion hello");
          if (
            !o("WACryptoUtils").uint8ArraysEqual(
              t.ref,
              e.linkCodeCompanionRegLinkCodePairingRefElementValue,
            )
          )
            throw new b(
              "alt pairing: handle primary hello: received unexpected ref",
            );
          if (t.helloCached == null)
            throw r("err")("alt pairing: cannot find cached hello data");
          if (t.codeGenerationTs == null)
            throw r("err")("alt pairing: cannot find codeGenerationTs");
          if (n - t.codeGenerationTs > k)
            throw new v(
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
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "alt pairing: completed companion finish local algorithm",
              ])),
          );
          var l = yield h.load(),
            u = l.sendCompanionFinish;
          yield o("WAWebUserPrefsMultiDevice").setADVSecretKey(
            o("WABase64").encodeB64(i.advSecret),
          );
          var c = t.ref;
          if (c == null) throw new y("alt pairing: cannot find cached ref");
          var d = t.phone;
          if (d == null) throw new y("alt pairing: phone is empty");
          (yield u({
            cachedRef: c,
            companionIdentityPublic: i.companionIdentityPublic,
            linkCodeCompanionRegJid: o("WAJids").toPhoneUserJid(d),
            linkCodePairingWrappedKeyBundle: i.linkCodePairingWrappedKeyBundle,
          }),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "alt pairing: sent companion finish to server",
                ])),
            ),
            (t.stage = R.AfterSendCompanionFinish),
            o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
              "handle_primary_hello_end",
            ));
        })),
        j.apply(this, arguments)
      );
    }
    ((l.InvalidRefError = b),
      (l.OldCodeError = v),
      (l.MaxPrimaryHelloError = S),
      (l.AltPairingStage = R),
      (l.PairingState = E),
      (l.getPairingType = x),
      (l.setPairingType = $),
      (l.getCurrentRef = P),
      (l.getCurrentHelloCached = N),
      (l.initializeAltDeviceLinking = M),
      (l.initializeQRLinking = A),
      (l.startAltLinkingFlow = O),
      (l.handlePrimaryHello = U),
      (l.handlePrimaryHelloInternal = z));
  },
  98,
);
