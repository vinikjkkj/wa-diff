__d(
  "WAWebIdentityVerificationApi",
  [
    "WABinary",
    "WAJids",
    "WALogger",
    "WANullthrows",
    "WAValidateFingerprints",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebBizCoexGatingUtils",
    "WAWebEnvironment",
    "WAWebIdentityApiUtils",
    "WAWebLid1X1MigrationGating",
    "WAWebManageE2ESessionsJob",
    "WAWebProtobufsFingerprintV3.pb",
    "WAWebSendMsgDatabaseJob",
    "WAWebSessionScope",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameGatingUtils",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d =
        /^([17]|2[07]|3[0123469]|4[013456789]|5[12345678]|6[0123456]|8[1246]|9[0123458]|\d{3})\d*?(\d{4,6})$/;
    function m(e) {
      var t = d.exec(e.user);
      return o("WABinary")
        .Binary.build(t ? t[1] + t[2] : e.toString())
        .readByteArrayView();
    }
    function p(e) {
      return o("WABinary").Binary.build(e.user).readByteArrayView();
    }
    function _(e) {
      return o("WABinary")
        .Binary.build("" + e.user + o("WAJids").LID_DOMAIN)
        .readByteArrayView();
    }
    function f(e) {
      return o("WABinary").Binary.build(e).readByteArrayView();
    }
    function g(e, t) {
      var n = e.getUint32(t, !1) * 256 + e.getUint8(t + 4);
      return ("00000" + n).slice(-5);
    }
    async function h(e, t) {
      for (
        var n = Promise.resolve(
            o("WABinary").Binary.build(0, 0, t, e).readByteArrayView(),
          ),
          r = 0;
        r < 5200;
        r++
      )
        n = n.then(function (e) {
          return self.crypto.subtle.digest(
            { name: "SHA-512" },
            o("WABinary").Binary.build(e, t).readByteArrayView(),
          );
        });
      var a = await n,
        i = new DataView(
          a instanceof ArrayBuffer ? a.slice(0, 30) : a.slice(0, 30).buffer,
        );
      return [g(i, 0), g(i, 5), g(i, 10), g(i, 15), g(i, 20), g(i, 25)].join(
        "",
      );
    }
    async function y(e, t, n, r) {
      var o = await Promise.all([h(e, t), h(n, r)]);
      return o.sort().join("");
    }
    async function C(e) {
      for (var t = Promise.resolve(e), n = 0; n < 5200; n++)
        t = t.then(function (t) {
          return self.crypto.subtle.digest(
            { name: "SHA-512" },
            o("WABinary").Binary.build(t, e).readByteArrayView(),
          );
        });
      var r = await t;
      return new Uint8Array(r instanceof ArrayBuffer ? r : r.buffer);
    }
    async function b(e) {
      var t = e.includeHashedKeys,
        n = e.includeUnhashedKeys,
        a = e.isMeHosted,
        i = e.isRemoteHosted,
        l = e.localKeysBinary,
        s = e.localLidIdentifier,
        u = e.localPnIdentifier,
        c = e.localUsernameIdentifier,
        d = e.remoteKeysBinary,
        m = e.remoteLidIdentifier,
        p = e.remotePnIdentifier,
        _ = e.remoteUsernameIdentifier,
        f = {},
        g = {};
      if (t) {
        var h = await Promise.all([C(d), C(l)]),
          y = h[0],
          b = h[1];
        ((f.hashedPublicKey = y), (g.hashedPublicKey = b));
      }
      (n && ((f.publicKey = d), (g.publicKey = l)),
        r("WANullthrows")(p != null ? p : m),
        r("WANullthrows")(u != null ? u : s),
        p != null && (f.pnIdentifier = p),
        s != null && m != null && (f.lidIdentifier = m),
        u != null && (g.pnIdentifier = u),
        s != null && m != null && (g.lidIdentifier = s),
        c != null && (g.usernameIdentifier = c),
        _ != null && (f.usernameIdentifier = _),
        o(
          "WAWebBizCoexGatingUtils",
        ).hostedDeviceSecurityCodeVerificationEnabled() &&
          ((g.hostedState = a
            ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
            : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE),
          (f.hostedState = i
            ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
            : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE)));
      var v = {
          version: t
            ? o("WAValidateFingerprints").V3_QR_VERSION_1
            : o("WAValidateFingerprints").V3_QR_VERSION_0,
          localFingerprint: g,
          remoteFingerprint: f,
        },
        S = new (o("WABinary").Binary)();
      return (
        o("encodeProtobuf").encodeProtobuf(
          o("WAWebProtobufsFingerprintV3.pb").CombinedFingerprintSpec,
          v,
          S,
        ),
        S.readBuffer()
      );
    }
    async function v(t) {
      var n = t.jid,
        a = t.lid,
        i = t.shareOwnPn;
      o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        !a &&
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[identity-verification] Migrated client did not pass a lid",
              ])),
          )
          .sendLogs("identity-verification-migrated-client-no-lid");
      var l = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
        d = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
        g = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        h = await o("WAWebApiContactUsernameFields").getContactUsername(g),
        C,
        v;
      a
        ? ((C = a), (v = o("WAWebApiContact").getPhoneNumber(C)))
        : n.isLid()
          ? ((C = n), (v = o("WAWebApiContact").getPhoneNumber(n)))
          : ((C = o("WAWebApiContact").getCurrentLid(n)), (v = n));
      var S = await o("WAWebApiContactUsernameFields").getContactUsername(n),
        R = o("WAWebUserPrefsMeUser").isMeAccount(n),
        L = await o("WAWebSendMsgDatabaseJob").getFanOutListJob([n, l], n);
      try {
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions(
          L,
          !1,
          o("WAWebSessionScope").SessionScope.DEFAULT,
        );
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "ensureE2ESessions with error",
            ])),
        );
      }
      var E = [],
        k = [],
        I = o(
          "WAWebBizCoexGatingUtils",
        ).hostedDeviceSecurityCodeVerificationEnabled()
          ? (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === !0
          : !1,
        T = !1;
      L.forEach(function (e) {
        (e.user === l.user && !e.isHosted() && k.push(e),
          (e.user !== l.user || R) &&
            (e.isHosted()
              ? (T = o(
                  "WAWebBizCoexGatingUtils",
                ).hostedDeviceSecurityCodeVerificationEnabled())
              : E.push(e)));
      });
      try {
        var D = await o("WAWebIdentityApiUtils").getAllIdentityKeysBytesOrThrow(
            E,
          ),
          x = await o("WAWebIdentityApiUtils").getAllIdentityKeysBytesOrThrow(
            k,
          ),
          $ = await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .getIdentityKeyPair();
        if (!$)
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getIdentityVerificationData: missing identity for verify",
                ])),
            ),
            null
          );
        (x.push(new Uint8Array($.pubKey)),
          R && D.push(new Uint8Array($.pubKey)));
        var P = o("WAWebIdentityApiUtils").identityKeysToBinary(x),
          N = o("WAWebIdentityApiUtils").identityKeysToBinary(D),
          M;
        h != null
          ? (M = f(h))
          : r("WAWebEnvironment").isGuest
            ? (M = f((d == null ? void 0 : d.toString()) || ""))
            : (M = null);
        var w = S != null ? f(S) : null,
          A = m(g),
          F = v != null ? m(v) : null,
          O = d && _(d),
          B = C != null ? _(C) : null,
          W = null,
          q =
            o("WAWebUsernameGatingUtils").canShowV3NumericCode() &&
            A != null &&
            F != null;
        q && (W = y(r("WANullthrows")(A), P, r("WANullthrows")(F), N));
        var U = null,
          V =
            (r("WAWebEnvironment").isGuest ||
              (o("WAWebUsernameGatingUtils").canShowV4NumericCode() &&
                o(
                  "WAWebUsernameGatingUtils",
                ).usernameSecurityCodeGenerationEnabled())) &&
            O != null &&
            B != null;
        if (V) {
          var H = p(r("WANullthrows")(d)),
            G = p(r("WANullthrows")(C));
          U = y(H, P, G, N);
        }
        var z = o(
            "WAWebUsernameGatingUtils",
          ).usernameSecurityCodeGenerationEnabled()
            ? h == null
            : i,
          j =
            !r("WAWebEnvironment").isGuest &&
            o("WAWebABProps").getABPropConfigValue(
              "hash_identity_keys_for_qr_code_device_verification",
            ),
          K = b({
            localPnIdentifier: z ? A : null,
            localLidIdentifier: O,
            localUsernameIdentifier: M,
            localKeysBinary: P,
            remotePnIdentifier: F,
            remoteLidIdentifier: B,
            remoteKeysBinary: N,
            remoteUsernameIdentifier: w,
            isMeHosted: I,
            isRemoteHosted: T,
            includeHashedKeys: j,
            includeUnhashedKeys: !j,
          }),
          Q = b({
            localPnIdentifier: z ? A : null,
            localLidIdentifier: O,
            localUsernameIdentifier: M,
            localKeysBinary: P,
            remotePnIdentifier: F,
            remoteLidIdentifier: B,
            remoteKeysBinary: N,
            remoteUsernameIdentifier: w,
            isMeHosted: I,
            isRemoteHosted: T,
            includeHashedKeys: !0,
            includeUnhashedKeys: !0,
          }),
          X = await Promise.all([
            Promise.resolve(W),
            Promise.resolve(U),
            Promise.resolve(K),
            Promise.resolve(Q),
          ]),
          Y = X[0],
          J = X[1],
          Z = X[2],
          ee = X[3];
        return {
          qrCodeDisplay: Z,
          qrCodeVerify: ee,
          numericCodeV3: Y,
          numericCodeV4: J,
        };
      } catch (e) {
        return (
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "getIdentityVerificationData: QR code gen failed: ",
                "",
              ])),
            e,
          ),
          null
        );
      }
    }
    l.getIdentityVerificationData = v;
  },
  98,
);
