__d(
  "WAWebIdentityVerificationApi",
  [
    "Promise",
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
    "WAWebVoipGatingUtils",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
    "nullthrows",
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
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (e == null) return null;
          var r =
            t != null
              ? t
              : o("WAWebContactExternalUserState").isGuestUser(
                  (n = yield o("WAWebApiContact").getContactRecord(e)) == null
                    ? void 0
                    : n.externalUserState,
                );
          return r ? f(e) : null;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      var n = e.getUint32(t, !1) * 256 + e.getUint8(t + 4);
      return ("00000" + n).slice(-5);
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            C(l, 0),
            C(l, 5),
            C(l, 10),
            C(l, 15),
            C(l, 20),
            C(l, 25),
          ].join("");
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.localIdentifier,
            r = e.localIdentityKeyList,
            o = e.remoteIdentifier,
            a = e.remoteIdentityKeyList,
            i = yield (d || (d = n("Promise"))).all([b(t, r), b(o, a)]);
          return i.sort().join("");
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            var C = yield (d || (d = n("Promise"))).all([L(p), L(s)]),
              b = C[0],
              v = C[1];
            ((h.hashedPublicKey = b), (y.hashedPublicKey = v));
          }
          (a && ((h.publicKey = p), (y.publicKey = s)),
            r("nullthrows")(
              f != null ? f : _,
              "Unexpected null: remotePnIdentifier ?? remoteLidIdentifier",
            ),
            r("nullthrows")(
              c != null ? c : u,
              "Unexpected null: localPnIdentifier ?? localLidIdentifier",
            ),
            f != null && (h.pnIdentifier = f),
            u != null && _ != null && (h.lidIdentifier = _),
            c != null && (y.pnIdentifier = c),
            u != null && _ != null && (y.lidIdentifier = u),
            m != null && (y.usernameIdentifier = m),
            g != null && (h.usernameIdentifier = g),
            (y.hostedState = i
              ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
              : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE),
            (h.hostedState = l
              ? o("WAWebProtobufsFingerprintV3.pb").HostedState.HOSTED
              : o("WAWebProtobufsFingerprintV3.pb").HostedState.E2EE));
          var S = {
              version: t
                ? o("WAValidateFingerprints").V3_QR_VERSION_1
                : o("WAValidateFingerprints").V3_QR_VERSION_0,
              localFingerprint: y,
              remoteFingerprint: h,
            },
            R = new (o("WABinary").Binary)();
          return (
            o("encodeProtobuf").encodeProtobuf(
              o("WAWebProtobufsFingerprintV3.pb").CombinedFingerprintSpec,
              S,
              R,
            ),
            R.readBuffer()
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.isRemoteGuest,
            i = t.jid,
            l = t.lid,
            m = t.shareOwnPn;
          o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() &&
            !l &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[identity-verification] Migrated client did not pass a lid",
                  ])),
              )
              .sendLogs("identity-verification-migrated-client-no-lid");
          var y = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
            C = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            b = yield o("WAWebApiContactUsernameFields").getContactUsername(C),
            v,
            R;
          l
            ? ((v = l), (R = o("WAWebApiContact").getPhoneNumber(v)))
            : i.isLid()
              ? ((v = i), (R = o("WAWebApiContact").getPhoneNumber(i)))
              : ((v = o("WAWebApiContact").getCurrentLid(i)), (R = i));
          var L = yield o("WAWebApiContactUsernameFields").getContactUsername(
              i,
            ),
            E = o("WAWebUserPrefsMeUser").isMeAccount(i),
            I = yield o("WAWebSendMsgDatabaseJob").getFanOutListJob([i, y], i);
          try {
            yield o("WAWebManageE2ESessionsJob").ensureE2ESessions({
              identityChanged: !1,
              options: {
                skipOfflineDeliveryWait: o(
                  "WAWebVoipGatingUtils",
                ).isGuestViewer(),
              },
              sessionScope: o("WAWebSessionScope").SessionScope.DEFAULT,
              wids: I,
            });
          } catch (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "ensureE2ESessions with error",
                ])),
            );
          }
          var T = [],
            D = [],
            x =
              (yield o("WAWebUserPrefsMultiDevice").getIsHostedMeAccount()) ===
              !0,
            $ = !1;
          I.forEach(function (e) {
            (o("WAWebUserPrefsMeUser").isMeAccount(e) &&
              !e.isHosted() &&
              D.push(e),
              (!o("WAWebUserPrefsMeUser").isMeAccount(e) || E) &&
                (e.isHosted() ? ($ = !0) : T.push(e)));
          });
          try {
            var P = yield o(
                "WAWebIdentityApiUtils",
              ).getAllIdentityKeysBytesOrThrow(T),
              N = yield o(
                "WAWebIdentityApiUtils",
              ).getAllIdentityKeysBytesOrThrow(D),
              M = yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .getIdentityKeyPair();
            if (!M)
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "getIdentityVerificationData: missing identity for verify",
                    ])),
                ),
                null
              );
            (N.push(new Uint8Array(M.pubKey)),
              E && P.push(new Uint8Array(M.pubKey)));
            var w = o("WAWebIdentityApiUtils").identityKeysToBinary(N),
              A = o("WAWebIdentityApiUtils").identityKeysToBinary(P),
              F;
            b != null
              ? (F = g(o("WAWebUsernameTypes").serializeUsername(b)))
              : r("WAWebEnvironment").isGuest
                ? (F = f(y))
                : (F = null);
            var O =
                L != null
                  ? g(o("WAWebUsernameTypes").serializeUsername(L))
                  : yield h(v, a),
              B = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
              W = B != null ? p(B) : null,
              q = R != null ? p(R) : null,
              U = f(y),
              V = v != null ? f(v) : null,
              H = null,
              G =
                o("WAWebUsernameGatingUtils").canShowV3NumericCode() &&
                W != null &&
                q != null;
            G &&
              (H = S({
                localIdentifier: r("nullthrows")(W),
                localIdentityKeyList: w,
                remoteIdentifier: r("nullthrows")(q),
                remoteIdentityKeyList: A,
              }));
            var z = null,
              j =
                (r("WAWebEnvironment").isGuest ||
                  (o("WAWebUsernameGatingUtils").canShowV4NumericCode() &&
                    o(
                      "WAWebUsernameGatingUtils",
                    ).usernameSecurityCodeGenerationEnabled())) &&
                U != null &&
                V != null;
            if (j) {
              var K = _(y),
                Q = _(r("nullthrows")(v));
              z = S({
                localIdentifier: K,
                localIdentityKeyList: w,
                remoteIdentifier: Q,
                remoteIdentityKeyList: A,
              });
            }
            var X = o(
                "WAWebUsernameGatingUtils",
              ).usernameSecurityCodeGenerationEnabled()
                ? b == null
                : m,
              Y =
                !r("WAWebEnvironment").isGuest &&
                o("WAWebABProps").getABPropConfigValue(
                  "hash_identity_keys_for_qr_code_device_verification",
                ),
              J = k({
                localPnIdentifier: X ? W : null,
                localLidIdentifier: U,
                localUsernameIdentifier: F,
                localKeysBinary: w,
                remotePnIdentifier: q,
                remoteLidIdentifier: V,
                remoteKeysBinary: A,
                remoteUsernameIdentifier: O,
                isMeHosted: x,
                isRemoteHosted: $,
                includeHashedKeys: Y,
                includeUnhashedKeys: !Y,
              }),
              Z = k({
                localPnIdentifier: X ? W : null,
                localLidIdentifier: U,
                localUsernameIdentifier: F,
                localKeysBinary: w,
                remotePnIdentifier: q,
                remoteLidIdentifier: V,
                remoteKeysBinary: A,
                remoteUsernameIdentifier: O,
                isMeHosted: x,
                isRemoteHosted: $,
                includeHashedKeys: !0,
                includeUnhashedKeys: !0,
              }),
              ee = yield (d || (d = n("Promise"))).all([
                d.resolve(H),
                d.resolve(z),
                d.resolve(J),
                d.resolve(Z),
              ]),
              te = ee[0],
              ne = ee[1],
              re = ee[2],
              oe = ee[3];
            return {
              qrCodeDisplay: re,
              qrCodeVerify: oe,
              numericCodeV3: te,
              numericCodeV4: ne,
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
        D.apply(this, arguments)
      );
    }
    l.getIdentityVerificationData = T;
  },
  98,
);
