__d(
  "WAWebIdentityVerificationApi",
  [
    "WABinary",
    "WAJids",
    "WALogger",
    "WAValidateFingerprints",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebContactExternalUserState",
    "WAWebEnvironment",
    "WAWebIdentityApiUtils",
    "WAWebManageE2ESessionsJob",
    "WAWebPQGatingUtils",
    "WAWebProtobufsFingerprintV3.pb",
    "WAWebSendMsgDatabaseJob",
    "WAWebSignalProtocolStore",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserUtils",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebVoipGatingUtils",
    "encodeProtobuf",
    "nullthrows",
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
    async function g(e, t) {
      var n;
      if (e == null) return null;
      var r =
        t != null
          ? t
          : o("WAWebContactExternalUserState").isGuestUser(
              (n = await o("WAWebApiContact").getContactRecord(e)) == null
                ? void 0
                : n.externalUserState,
            );
      return r ? _(e) : null;
    }
    function h(e, t) {
      var n = e.getUint32(t, !1) * 256 + e.getUint8(t + 4);
      return ("00000" + n).slice(-5);
    }
    async function y(e, t) {
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
      return [h(i, 0), h(i, 5), h(i, 10), h(i, 15), h(i, 20), h(i, 25)].join(
        "",
      );
    }
    async function C(e) {
      var t = e.localIdentifier,
        n = e.localIdentityKeyList,
        r = e.remoteIdentifier,
        o = e.remoteIdentityKeyList,
        a = await Promise.all([y(t, n), y(r, o)]);
      return a.sort().join("");
    }
    async function b(e) {
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
    async function v(e) {
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
        var h = await Promise.all([b(d), b(l)]),
          y = h[0],
          C = h[1];
        ((f.hashedPublicKey = y), (g.hashedPublicKey = C));
      }
      (n && ((f.publicKey = d), (g.publicKey = l)),
        r("nullthrows")(
          p != null ? p : m,
          "Unexpected null: remotePnIdentifier ?? remoteLidIdentifier",
        ),
        r("nullthrows")(
          u != null ? u : s,
          "Unexpected null: localPnIdentifier ?? localLidIdentifier",
        ),
        p != null && (f.pnIdentifier = p),
        s != null && m != null && (f.lidIdentifier = m),
        u != null && (g.pnIdentifier = u),
        s != null && m != null && (g.lidIdentifier = s),
        c != null && (g.usernameIdentifier = c),
        _ != null && (f.usernameIdentifier = _),
        (g.hostedState = a
          ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
          : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE),
        (f.hostedState = i
          ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
          : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE));
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
    async function S(t) {
      var n = t.isRemoteGuest,
        a = t.jid,
        i = t.lid,
        l = t.shareOwnPn;
      i ||
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[identity-verification] Migrated client did not pass a lid",
              ])),
          )
          .sendLogs("identity-verification-migrated-client-no-lid");
      var d = o("WAWebUserUtils").getMeDeviceLidOrThrow(),
        h = o("WAWebUserUtils").getMeLidUserOrThrow(),
        y = await o("WAWebApiContactUsernameFields").getContactUsername(h),
        b,
        S;
      i
        ? ((b = i), (S = o("WAWebApiContact").getPhoneNumber(b)))
        : a.isLid()
          ? ((b = a), (S = o("WAWebApiContact").getPhoneNumber(a)))
          : ((b = o("WAWebApiContact").getCurrentLid(a)), (S = a));
      var R = await o("WAWebApiContactUsernameFields").getContactUsername(a),
        L = o("WAWebUserUtils").isMeAccount(a),
        E = await o("WAWebSendMsgDatabaseJob").getFanOutListJob([a, d], a);
      try {
        await o("WAWebManageE2ESessionsJob").ensureE2ESessions({
          identityChanged: !1,
          options: {
            skipOfflineDeliveryWait: o("WAWebVoipGatingUtils").isGuestViewer(),
          },
          sessionScope: o("WAWebPQGatingUtils").getOneToOneChatSessionScope(),
          wids: E,
        });
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "ensureE2ESessions with error",
            ])),
        );
      }
      var k = [],
        I = [],
        T =
          (await o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) === !0,
        D = !1;
      E.forEach(function (e) {
        (o("WAWebUserUtils").isMeAccount(e) && !e.isHosted() && I.push(e),
          (!o("WAWebUserUtils").isMeAccount(e) || L) &&
            (e.isHosted() ? (D = !0) : k.push(e)));
      });
      try {
        var x = await o("WAWebIdentityApiUtils").getAllIdentityKeysBytesOrThrow(
            k,
          ),
          $ = await o("WAWebIdentityApiUtils").getAllIdentityKeysBytesOrThrow(
            I,
          ),
          P = await o("WAWebSignalProtocolStore")
            .getSignalProtocolStore()
            .getIdentityKeyPair();
        if (!P)
          return (
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "getIdentityVerificationData: missing identity for verify",
                ])),
            ),
            null
          );
        ($.push(new Uint8Array(P.pubKey)),
          L && x.push(new Uint8Array(P.pubKey)));
        var N = o("WAWebIdentityApiUtils").identityKeysToBinary($),
          M = o("WAWebIdentityApiUtils").identityKeysToBinary(x),
          w;
        y != null
          ? (w = f(o("WAWebUsernameTypes").serializeUsername(y)))
          : r("WAWebEnvironment").isGuest
            ? (w = _(d))
            : (w = null);
        var A =
            R != null
              ? f(o("WAWebUsernameTypes").serializeUsername(R))
              : await g(b, n),
          F = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
          O = F != null ? m(F) : null,
          B = S != null ? m(S) : null,
          W = _(d),
          q = b != null ? _(b) : null,
          U = null,
          V =
            o("WAWebUsernameGatingUtils").canShowV3NumericCode() &&
            O != null &&
            B != null;
        V &&
          (U = C({
            localIdentifier: r("nullthrows")(O),
            localIdentityKeyList: N,
            remoteIdentifier: r("nullthrows")(B),
            remoteIdentityKeyList: M,
          }));
        var H = null,
          G =
            (r("WAWebEnvironment").isGuest ||
              (o("WAWebUsernameGatingUtils").canShowV4NumericCode() &&
                o(
                  "WAWebUsernameGatingUtils",
                ).usernameSecurityCodeGenerationEnabled())) &&
            W != null &&
            q != null;
        if (G) {
          var z = p(d),
            j = p(r("nullthrows")(b));
          H = C({
            localIdentifier: z,
            localIdentityKeyList: N,
            remoteIdentifier: j,
            remoteIdentityKeyList: M,
          });
        }
        var K = o(
            "WAWebUsernameGatingUtils",
          ).usernameSecurityCodeGenerationEnabled()
            ? y == null
            : l,
          Q =
            !r("WAWebEnvironment").isGuest &&
            o("WAWebABProps").getABPropConfigValue(
              "hash_identity_keys_for_qr_code_device_verification",
            ),
          X = v({
            localPnIdentifier: K ? O : null,
            localLidIdentifier: W,
            localUsernameIdentifier: w,
            localKeysBinary: N,
            remotePnIdentifier: B,
            remoteLidIdentifier: q,
            remoteKeysBinary: M,
            remoteUsernameIdentifier: A,
            isMeHosted: T,
            isRemoteHosted: D,
            includeHashedKeys: Q,
            includeUnhashedKeys: !Q,
          }),
          Y = v({
            localPnIdentifier: K ? O : null,
            localLidIdentifier: W,
            localUsernameIdentifier: w,
            localKeysBinary: N,
            remotePnIdentifier: B,
            remoteLidIdentifier: q,
            remoteKeysBinary: M,
            remoteUsernameIdentifier: A,
            isMeHosted: T,
            isRemoteHosted: D,
            includeHashedKeys: !0,
            includeUnhashedKeys: !0,
          }),
          J = await Promise.all([
            Promise.resolve(U),
            Promise.resolve(H),
            Promise.resolve(X),
            Promise.resolve(Y),
          ]),
          Z = J[0],
          ee = J[1],
          te = J[2],
          ne = J[3];
        return {
          qrCodeDisplay: te,
          qrCodeVerify: ne,
          numericCodeV3: Z,
          numericCodeV4: ee,
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
    l.getIdentityVerificationData = S;
  },
  98,
);
