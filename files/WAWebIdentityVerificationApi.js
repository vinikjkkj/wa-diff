__d(
  "WAWebIdentityVerificationApi",
  [
    "Promise",
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
    "WAWebUsernameTypes",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m =
        /^([17]|2[07]|3[0123469]|4[013456789]|5[12345678]|6[0123456]|8[1246]|9[0123458]|\d{3})\d*?(\d{4,6})$/;
    function p(e) {
      var t = m.exec(e.user);
      return o("WABinary")
        .Binary.build(t ? t[1] + t[2] : e.toString())
        .readByteArrayView();
    }
    function _(e) {
      return o("WABinary").Binary.build(e.user).readByteArrayView();
    }
    function f(e) {
      return o("WABinary")
        .Binary.build("" + e.user + o("WAJids").LID_DOMAIN)
        .readByteArrayView();
    }
    function g(e) {
      return o("WABinary").Binary.build(e).readByteArrayView();
    }
    function h(e, t) {
      var n = e.getUint32(t, !1) * 256 + e.getUint8(t + 4);
      return ("00000" + n).slice(-5);
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          for (
            var r = (d || (d = n("Promise"))).resolve(
                o("WABinary").Binary.build(0, 0, t, e).readByteArrayView(),
              ),
              a = 0;
            a < 5200;
            a++
          )
            r = r.then(function (e) {
              return self.crypto.subtle.digest(
                { name: "SHA-512" },
                o("WABinary").Binary.build(e, t).readByteArrayView(),
              );
            });
          var i = yield r,
            l = new DataView(
              i instanceof ArrayBuffer ? i.slice(0, 30) : i.slice(0, 30).buffer,
            );
          return [
            h(l, 0),
            h(l, 5),
            h(l, 10),
            h(l, 15),
            h(l, 20),
            h(l, 25),
          ].join("");
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, o) {
            var a = yield (d || (d = n("Promise"))).all([y(e, t), y(r, o)]);
            return a.sort().join("");
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (
            var t = (d || (d = n("Promise"))).resolve(e), r = 0;
            r < 5200;
            r++
          )
            t = t.then(function (t) {
              return self.crypto.subtle.digest(
                { name: "SHA-512" },
                o("WABinary").Binary.build(t, e).readByteArrayView(),
              );
            });
          var a = yield t;
          return new Uint8Array(a instanceof ArrayBuffer ? a : a.buffer);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.includeHashedKeys,
            a = e.includeUnhashedKeys,
            i = e.isMeHosted,
            l = e.isRemoteHosted,
            s = e.localKeysBinary,
            u = e.localLidIdentifier,
            c = e.localPnIdentifier,
            m = e.localUsernameIdentifier,
            p = e.remoteKeysBinary,
            _ = e.remoteLidIdentifier,
            f = e.remotePnIdentifier,
            g = e.remoteUsernameIdentifier,
            h = {},
            y = {};
          if (t) {
            var C = yield (d || (d = n("Promise"))).all([S(p), S(s)]),
              b = C[0],
              v = C[1];
            ((h.hashedPublicKey = b), (y.hashedPublicKey = v));
          }
          (a && ((h.publicKey = p), (y.publicKey = s)),
            r("WANullthrows")(f != null ? f : _),
            r("WANullthrows")(c != null ? c : u),
            f != null && (h.pnIdentifier = f),
            u != null && _ != null && (h.lidIdentifier = _),
            c != null && (y.pnIdentifier = c),
            u != null && _ != null && (y.lidIdentifier = u),
            m != null && (y.usernameIdentifier = m),
            g != null && (h.usernameIdentifier = g),
            o(
              "WAWebBizCoexGatingUtils",
            ).hostedDeviceSecurityCodeVerificationEnabled() &&
              ((y.hostedState = i
                ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
                : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE),
              (h.hostedState = l
                ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
                : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE)));
          var R = {
              version: t
                ? o("WAValidateFingerprints").V3_QR_VERSION_1
                : o("WAValidateFingerprints").V3_QR_VERSION_0,
              localFingerprint: y,
              remoteFingerprint: h,
            },
            L = new (o("WABinary").Binary)();
          return (
            o("encodeProtobuf").encodeProtobuf(
              o("WAWebProtobufsFingerprintV3.pb").CombinedFingerprintSpec,
              R,
              L,
            ),
            L.readBuffer()
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.jid,
            i = t.lid,
            l = t.shareOwnPn;
          o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() &&
            !i &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[identity-verification] Migrated client did not pass a lid",
                  ])),
              )
              .sendLogs("identity-verification-migrated-client-no-lid");
          var m = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            h = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            y = yield o("WAWebApiContactUsernameFields").getContactUsername(h),
            C,
            v;
          i
            ? ((C = i), (v = o("WAWebApiContact").getPhoneNumber(C)))
            : a.isLid()
              ? ((C = a), (v = o("WAWebApiContact").getPhoneNumber(a)))
              : ((C = o("WAWebApiContact").getCurrentLid(a)), (v = a));
          var S = yield o("WAWebApiContactUsernameFields").getContactUsername(
              a,
            ),
            R = o("WAWebUserPrefsMeUser").isMeAccount(a),
            E = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([a, m], a);
          try {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              E,
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
          var k = [],
            I = [],
            T = o(
              "WAWebBizCoexGatingUtils",
            ).hostedDeviceSecurityCodeVerificationEnabled()
              ? (yield o(
                  "WAWebUserPrefsMultiDevice",
                ).getIsHostedMeAccount()) === !0
              : !1,
            D = !1;
          E.forEach(function (e) {
            (o("WAWebUserPrefsMeUser").isMeAccount(e) &&
              !e.isHosted() &&
              I.push(e),
              (!o("WAWebUserPrefsMeUser").isMeAccount(e) || R) &&
                (e.isHosted()
                  ? (D = o(
                      "WAWebBizCoexGatingUtils",
                    ).hostedDeviceSecurityCodeVerificationEnabled())
                  : k.push(e)));
          });
          try {
            var x = yield o(
                "WAWebIdentityApiUtils",
              ).getAllIdentityKeysBytesOrThrow(k),
              $ = yield o(
                "WAWebIdentityApiUtils",
              ).getAllIdentityKeysBytesOrThrow(I),
              P = yield o("WAWebSignalProtocolStore")
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
              R && x.push(new Uint8Array(P.pubKey)));
            var N = o("WAWebIdentityApiUtils").identityKeysToBinary($),
              M = o("WAWebIdentityApiUtils").identityKeysToBinary(x),
              w;
            y != null
              ? (w = g(o("WAWebUsernameTypes").serializeUsername(y)))
              : r("WAWebEnvironment").isGuest
                ? (w = g(m.toString()))
                : (w = null);
            var A =
                S != null
                  ? g(o("WAWebUsernameTypes").serializeUsername(S))
                  : null,
              F = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
              O = F != null ? p(F) : null,
              B = v != null ? p(v) : null,
              W = f(m),
              q = C != null ? f(C) : null,
              U = null,
              V =
                o("WAWebUsernameGatingUtils").canShowV3NumericCode() &&
                O != null &&
                B != null;
            V && (U = b(r("WANullthrows")(O), N, r("WANullthrows")(B), M));
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
              var z = _(m),
                j = _(r("WANullthrows")(C));
              H = b(z, N, j, M);
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
              X = L({
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
              Y = L({
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
              J = yield (d || (d = n("Promise"))).all([
                d.resolve(U),
                d.resolve(H),
                d.resolve(X),
                d.resolve(Y),
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
        })),
        I.apply(this, arguments)
      );
    }
    l.getIdentityVerificationData = k;
  },
  98,
);
