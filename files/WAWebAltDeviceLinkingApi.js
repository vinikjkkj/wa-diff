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
    "WAWebAltDeviceLinkingIq",
    "WAWebAltDeviceLinkingQpl",
    "WAWebBackendApi",
    "WAWebPairingType",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsInfoStore",
    "WAWebUserPrefsMultiDevice",
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
    async function M() {
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
        await o("WAWebUserPrefsMultiDevice").setADVSecretKey(),
        (T.stage = R.Initialized),
        $(o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING));
    }
    async function w() {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: initialize QR linking",
          ])),
      ),
        x() === o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING &&
          o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker("switch_to_qr"),
        T.clear(),
        await o("WAWebAdvSignatureApi").generateADVSecretKey(),
        (T.stage = R.NotStarted),
        $(o("WAWebPairingType").PairingType.QR_CODE));
    }
    async function A(e, t) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: start linking flow",
          ])),
      );
      var n = await o("WAWebUserPrefsInfoStore").waNoiseInfo.get();
      if (n == null) throw new C("alt pairing: noise info is null");
      return (
        (T.phone = e),
        (T.codeGenerationTs = o("WATimeUtils").unixTime()),
        F(T, n, t)
      );
    }
    async function F(e, t, n) {
      (r("gkx")("26258") ||
        o("WAWebAltDeviceLinkingQpl").annotateCurrentMarker({
          string: { phone: e.phone },
        }),
        e.stage === R.Initialized || s(0, 75727, e.stage),
        o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
          "generate_code_start",
        ));
      var a = await o("WAWebAltDeviceLinkingAlgorithm").companionHello();
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
        (e.ref = await o("WAWebAltDeviceLinkingIq").sendCompanionHello(
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
        throw new y("alt pairing:could not get ref from companion hello");
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
        (e.stage = R.AfterSendCompanionHello),
        a.linkCodePairingSecret
      );
    }
    async function O(e) {
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
        return await W(e, T, o("WATimeUtils").unixTime());
      } catch (e) {
        return (
          o("WAWebBackendApi").frontendFireAndForget("errorAltLinking", {}),
          Promise.reject(e)
        );
      }
    }
    async function B(e) {
      (await o("WAWebAdvSignatureApi").generateADVSecretKey(),
        (e.stage = R.AfterSendCompanionHello));
    }
    async function W(e, t, n) {
      if (
        (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
          "handle_primary_hello_start",
        ),
        t.primaryHelloAttemptCount++,
        t.stage === R.AfterSendCompanionFinish)
      )
        if (t.primaryHelloAttemptCount <= I) await B(t);
        else
          throw new S(
            "alt pairing: reached max allowed primary hello attempts per code",
          );
      if (
        (t.stage === R.AfterSendCompanionHello || s(0, 75728, t.stage),
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
        throw new v("alt pairing: cannot process primaryHello for an old code");
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
      (o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "alt pairing: completed companion finish local algorithm",
          ])),
      ),
        await o("WAWebUserPrefsMultiDevice").setADVSecretKey(
          o("WABase64").encodeB64(i.advSecret),
        ));
      var l = t.ref;
      if (l == null) throw new y("alt pairing: cannot find cached ref");
      var u = t.phone;
      if (u == null) throw new y("alt pairing: phone is empty");
      (await o("WAWebAltDeviceLinkingIq").sendCompanionFinish({
        cachedRef: l,
        companionIdentityPublic: i.companionIdentityPublic,
        linkCodeCompanionRegJid: o("WAJids").toPhoneUserJid(u),
        linkCodePairingWrappedKeyBundle: i.linkCodePairingWrappedKeyBundle,
      }),
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "alt pairing: sent companion finish to server",
            ])),
        ),
        (t.stage = R.AfterSendCompanionFinish),
        o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
          "handle_primary_hello_end",
        ));
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
      (l.initializeQRLinking = w),
      (l.startAltLinkingFlow = A),
      (l.handlePrimaryHello = O),
      (l.handlePrimaryHelloInternal = W));
  },
  98,
);
