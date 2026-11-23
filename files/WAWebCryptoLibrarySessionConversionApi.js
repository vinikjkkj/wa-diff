__d(
  "WAWebCryptoLibrarySessionConversionApi",
  [
    "WAArrayBufferUtils",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = u(e),
        r = await s(n, t),
        a = [];
      for (var i in e.sessions)
        if (e.sessions[i].indexInfo.closed !== -1) {
          var l = await s(e.sessions[i], t),
            c = o("WASignalSessions").detachSession(l);
          a.push(c);
        }
      return o("WASignalSessions").setPrevSessions(r, a);
    }
    async function s(e, t) {
      try {
        var n = [];
        if (e.currentRatchet.lastRemoteEphemeralKey) {
          var r =
            e[
              o("WAArrayBufferUtils").arrayBufferToString(
                e.currentRatchet.lastRemoteEphemeralKey,
              )
            ];
          if (r) {
            for (
              var a = [],
                i = async function (t) {
                  var e = r.messageKeys[t],
                    n = await o("WASignalOther")
                      .hkdf(new Uint8Array(e), null, "WhisperMessageKeys", 80)
                      .then(function (e) {
                        return o("WASignalSessions").splitMsgKey(t, e);
                      });
                  a.push(n);
                },
                l = 0;
              l < r.messageKeys.length;
              l++
            )
              await i(l);
            var s = e.currentRatchet.lastRemoteEphemeralKey,
              u = r.chainKey.key;
            if (s != null && u != null) {
              var c = o("WASignalSessions").makeRecvChain(
                o("WASignalKeys").castToSerializedPubKey(new Uint8Array(s)),
                r.chainKey.counter + 1,
                o("WASignalOther").toBytes(u, 32),
                a,
              );
              n.push(c);
            }
          }
        }
        var d =
            e[
              o("WAArrayBufferUtils").arrayBufferToString(
                e.currentRatchet.ephemeralKeyPair.pubKey,
              )
            ],
          m = o("WASignalKeys").castToSerializedPubKey(
            new Uint8Array(e.currentRatchet.ephemeralKeyPair.pubKey),
          ),
          p = d.chainKey.key,
          _ = o("WASignalOther").toBytes(
            e.currentRatchet.ephemeralKeyPair.privKey,
            32,
          ),
          f = o("WASignalKeys").makeSerializedKeyPairFrom(_, m),
          g = o("WASignalSessions").makeSendChain(
            f,
            d.chainKey.counter + 1,
            o("WASignalOther").toBytes(p, 32),
          ),
          h = t && {
            regId: t.registrationId,
            pubKey: o("WASignalKeys").serializeIdentity(
              new Uint8Array(t.identityKeyPair.pubKey),
            ),
          },
          y = t && {
            regId: e.registrationId,
            pubKey: new Uint8Array(e.indexInfo.remoteIdentityKey),
          },
          C =
            e.indexInfo.baseKey &&
            o("WASignalKeys").castToSerializedPubKey(
              new Uint8Array(e.indexInfo.baseKey),
            ),
          b = e.currentRatchet.previousCounter,
          v = o("WASignalOther").toBytes(e.currentRatchet.rootKey, 32),
          S;
        e.pendingPreKey != null &&
          (S = o("WASignalSessions").makeInitialExchangeInfo(
            e.pendingPreKey.preKeyId,
            e.pendingPreKey.signedKeyId,
            o("WASignalKeys").castToSerializedPubKey(
              new Uint8Array(e.pendingPreKey.baseKey),
            ),
          ));
        var R = [],
          L = o("WASignalSessions").makeSession(
            h,
            y,
            v,
            n,
            g,
            S,
            Math.max(b, 0),
            R,
            C,
          );
        return L;
      } catch (e) {
        throw e;
      }
    }
    function u(e) {
      var t = e.sessions;
      for (var n in t) if (t[n].indexInfo.closed === -1) return t[n];
      throw r("err")("getOpenSession: There are no open session");
    }
    ((l.toCryptoLibrarySessionPrevSessions = e),
      (l.toCryptoManagerSession = s));
  },
  98,
);
