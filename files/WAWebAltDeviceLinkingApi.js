__d(
  "WAWebAltDeviceLinkingApi",
  [
    "invariant",
    "$InternalEnum",
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
      g = r("requireDeferred")("WAWebAltDeviceLinkingIq").__setRef(
        "WAWebAltDeviceLinkingApi",
      ),
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
    async function N() {
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
        await o("WAWebUserPrefsMultiDevice").setADVSecretKey(),
        (I.stage = S.Initialized),
        x(o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING));
    }
    async function M() {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: initialize QR linking",
          ])),
      ),
        D() === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING &&
          o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("switch_to_qr"),
        I.clear(),
        await o("WAWebAdvSignatureApi").generateADVSecretKey(),
        (I.stage = S.NotStarted),
        x(o("WAWebPairingType").PairingType.QR_CODE));
    }
    async function w(e, t) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: start linking flow",
          ])),
      );
      var n = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
      if (n == null) throw new y("alt pairing: noise info is null");
      return (
        (I.phone = e),
        (I.codeGenerationTs = o("WATimeUtils").unixTime()),
        A(I, n, t)
      );
    }
    async function A(e, t, n) {
      (e.stage === S.Initialized || s(0, 75727, e.stage),
        o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
          "generate_code_start",
        ));
      var r = await o("WAWebAltDeviceLinkingAlgorithm").companionHello();
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
      var i = await g.load(),
        l = i.sendCompanionHello;
      if (
        (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
          "send_companion_hello_start",
        ),
        (e.ref = await l({
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
        throw new h("alt pairing:could not get ref from companion hello");
      return ((e.stage = S.AfterSendCompanionHello), r.linkCodePairingSecret);
    }
    async function F(e) {
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
        return await B(e, I, o("WATimeUtils").unixTime());
      } catch (e) {
        return (
          o("WAWebBackendApi").frontendFireAndForget("errorAltLinking", {}),
          Promise.reject(e)
        );
      }
    }
    async function O(e) {
      (await o("WAWebAdvSignatureApi").generateADVSecretKey(),
        (e.stage = S.AfterSendCompanionHello));
    }
    async function B(e, t, n) {
      if (
        (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
          "handle_primary_hello_start",
        ),
        t.primaryHelloAttemptCount++,
        t.stage === S.AfterSendCompanionFinish)
      )
        if (t.primaryHelloAttemptCount <= k) await O(t);
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
        throw new b("alt pairing: cannot process primaryHello for an old code");
      var a = t.helloCached,
        i = await o("WAWebAltDeviceLinkingAlgorithm").companionFinish({
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
      var l = await g.load(),
        u = l.sendCompanionFinish;
      await o("WAWebUserPrefsMultiDevice").setADVSecretKey(
        o("WABase64").encodeB64(i.advSecret),
      );
      var c = t.ref;
      if (c == null) throw new h("alt pairing: cannot find cached ref");
      var d = t.phone;
      if (d == null) throw new h("alt pairing: phone is empty");
      (await u({
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
        (t.stage = S.AfterSendCompanionFinish),
        o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
          "handle_primary_hello_end",
        ));
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
      (l.initializeQRLinking = M),
      (l.startAltLinkingFlow = w),
      (l.handlePrimaryHello = F),
      (l.handlePrimaryHelloInternal = B));
  },
  98,
);
