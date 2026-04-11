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
          var m = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            h = o("WAWebUserPrefsMeUser").getMaybeMeDeviceLid(),
            y = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
            C = yield o("WAWebApiContactUsernameFields").getContactUsername(y),
            v,
            S;
          i
            ? ((v = i), (S = o("WAWebApiContact").getPhoneNumber(v)))
            : a.isLid()
              ? ((v = a), (S = o("WAWebApiContact").getPhoneNumber(a)))
              : ((v = o("WAWebApiContact").getCurrentLid(a)), (S = a));
          var R = yield o("WAWebApiContactUsernameFields").getContactUsername(
              a,
            ),
            E = o("WAWebUserPrefsMeUser").isMeAccount(a),
            k = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([a, m], a);
          try {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions(
              k,
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
          var I = [],
            T = [],
            D = o(
              "WAWebBizCoexGatingUtils",
            ).hostedDeviceSecurityCodeVerificationEnabled()
              ? (yield o(
                  "WAWebUserPrefsMultiDevice",
                ).getIsHostedMeAccount()) === !0
              : !1,
            x = !1;
          k.forEach(function (e) {
            (e.user === m.user && !e.isHosted() && T.push(e),
              (e.user !== m.user || E) &&
                (e.isHosted()
                  ? (x = o(
                      "WAWebBizCoexGatingUtils",
                    ).hostedDeviceSecurityCodeVerificationEnabled())
                  : I.push(e)));
          });
          try {
            var $ = yield o(
                "WAWebIdentityApiUtils",
              ).getAllIdentityKeysBytesOrThrow(I),
              P = yield o(
                "WAWebIdentityApiUtils",
              ).getAllIdentityKeysBytesOrThrow(T),
              N = yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .getIdentityKeyPair();
            if (!N)
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "getIdentityVerificationData: missing identity for verify",
                    ])),
                ),
                null
              );
            (P.push(new Uint8Array(N.pubKey)),
              E && $.push(new Uint8Array(N.pubKey)));
            var M = o("WAWebIdentityApiUtils").identityKeysToBinary(P),
              w = o("WAWebIdentityApiUtils").identityKeysToBinary($),
              A;
            C != null
              ? (A = g(C))
              : r("WAWebEnvironment").isGuest
                ? (A = g((h == null ? void 0 : h.toString()) || ""))
                : (A = null);
            var F = R != null ? g(R) : null,
              O = p(y),
              B = S != null ? p(S) : null,
              W = h && f(h),
              q = v != null ? f(v) : null,
              U = null,
              V =
                o("WAWebUsernameGatingUtils").canShowV3NumericCode() &&
                O != null &&
                B != null;
            V && (U = b(r("WANullthrows")(O), M, r("WANullthrows")(B), w));
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
              var z = _(r("WANullthrows")(h)),
                j = _(r("WANullthrows")(v));
              H = b(z, M, j, w);
            }
            var K = o(
                "WAWebUsernameGatingUtils",
              ).usernameSecurityCodeGenerationEnabled()
                ? C == null
                : l,
              Q =
                !r("WAWebEnvironment").isGuest &&
                o("WAWebABProps").getABPropConfigValue(
                  "hash_identity_keys_for_qr_code_device_verification",
                ),
              X = L({
                localPnIdentifier: K ? O : null,
                localLidIdentifier: W,
                localUsernameIdentifier: A,
                localKeysBinary: M,
                remotePnIdentifier: B,
                remoteLidIdentifier: q,
                remoteKeysBinary: w,
                remoteUsernameIdentifier: F,
                isMeHosted: D,
                isRemoteHosted: x,
                includeHashedKeys: Q,
                includeUnhashedKeys: !Q,
              }),
              Y = L({
                localPnIdentifier: K ? O : null,
                localLidIdentifier: W,
                localUsernameIdentifier: A,
                localKeysBinary: M,
                remotePnIdentifier: B,
                remoteLidIdentifier: q,
                remoteKeysBinary: w,
                remoteUsernameIdentifier: F,
                isMeHosted: D,
                isRemoteHosted: x,
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
