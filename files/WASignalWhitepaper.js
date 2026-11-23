__d(
  "WASignalWhitepaper",
  [
    "WABinary",
    "WACryptoDependencies",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Uint8Array(32);
    e.fill(255);
    var s = new Uint8Array([1]),
      u = new Uint8Array([2]);
    async function c(t, n, a) {
      var i,
        l = t.regId,
        s = t.staticKeyPair,
        u = n.identity,
        c = n.signedKey.publicKey,
        d = a.privateKey,
        m = s.privateKey,
        p = (i = n.oneTimeKey) == null ? void 0 : i.publicKey,
        _ = r("gkx")("28506")
          ? o("WABinary")
              .Binary.build.apply(
                o("WABinary").Binary,
                [e].concat(
                  await Promise.all([
                    o("WASignalKeys").ecdhAsync(m, c),
                    o("WASignalKeys").ecdhAsync(d, u),
                    o("WASignalKeys").ecdhAsync(d, c),
                    p && o("WASignalKeys").ecdhAsync(d, p),
                  ]),
                ),
              )
              .readByteArrayView()
          : o("WABinary")
              .Binary.build(e, y(m, c), y(d, u), y(d, c), p && y(d, p))
              .readByteArrayView(),
        f = await h(_, "WhisperText"),
        C = f[0],
        b = f[1],
        v = n.ratchetKey,
        S = o("WASignalSessions").makeFreshRecvChain(v, b),
        R = r("gkx")("28506")
          ? await o("WASignalKeys").makeSerializedKeyPairAsync()
          : o("WASignalKeys").makeSerializedKeyPair(),
        L = await g(C, R, v),
        E = o("WASignalSessions").makeInitialExchangeInfo(
          n.oneTimeKey == null ? null : n.oneTimeKey.id,
          n.signedKey.id,
          o("WASignalKeys").serializePubKey(a),
        );
      return o("WASignalSessions").makeFreshSession(
        { regId: l, pubKey: o("WASignalKeys").serializePubKey(s) },
        { regId: n.regId, pubKey: u },
        L.rootKey,
        [S],
        o("WASignalSessions").makeFreshSendChain(R, L.chainKey),
        E,
        o("WASignalKeys").serializePubKey(a),
      );
    }
    async function d(t, n, a, i) {
      var l,
        s = t.regId,
        u = t.staticKeyPair,
        c = u.privateKey,
        d = i.signed.privateKey,
        m = a,
        p = n.pubKey,
        _ = (l = i.oneTime) == null ? void 0 : l.privateKey,
        f = r("gkx")("28506")
          ? o("WABinary")
              .Binary.build.apply(
                o("WABinary").Binary,
                [e].concat(
                  await Promise.all([
                    o("WASignalKeys").ecdhAsync(d, p),
                    o("WASignalKeys").ecdhAsync(c, m),
                    o("WASignalKeys").ecdhAsync(d, m),
                    _ && o("WASignalKeys").ecdhAsync(_, m),
                  ]),
                ),
              )
              .readByteArrayView()
          : o("WABinary")
              .Binary.build(e, C(p, d), C(m, c), C(m, d), _ && C(m, _))
              .readByteArrayView(),
        g = await h(f, "WhisperText"),
        y = g[0],
        b = g[1],
        v = i.ratchet,
        S = o("WASignalSessions").makeFreshSendChain(v, b);
      return o("WASignalSessions").makeSession(
        { regId: s, pubKey: o("WASignalKeys").serializePubKey(u) },
        n,
        y,
        [],
        S,
        null,
        0,
        [],
        a,
      );
    }
    function m(e) {
      var t = o("WASignalGroupSession").makeSenderKeyState(
        o("WASignalKeys").serializePubKey(e),
        e.privateKey,
        o("WASignalGroupSession").makeSenderKeyChainKey(
          0,
          o("WASignalKeys").makeRawSenderKey(),
        ),
        o("WASignalOther").makeSenderKeyId(),
        [],
      );
      return Promise.resolve(
        o("WASignalGroupSession").makeNewSenderKeySession(t),
      );
    }
    function p(e, t, n, r, a) {
      var i = o("WASignalGroupSession").makeSenderKeyState(
          n,
          void 0,
          o("WASignalGroupSession").makeSenderKeyChainKey(t, r),
          e,
          [],
        ),
        l = null;
      return (
        a
          ? (l = o("WASignalGroupSession").updateSessionWithNewSenderKeyState(
              a,
              i,
            ))
          : (l = o("WASignalGroupSession").makeNewSenderKeySession(i)),
        Promise.resolve(l)
      );
    }
    async function _(e, t) {
      var n = await o("WASignalOther").makeCryptoKey(t, "hmac-sha256"),
        r = function (t) {
          return o("WACryptoDependencies")
            .getCrypto()
            .subtle.sign({ name: "HMAC", hash: "SHA-256" }, n, t);
        },
        a = r(s)
          .then(function (e) {
            return o("WASignalOther").hkdf(
              new Uint8Array(e),
              null,
              "WhisperMessageKeys",
              80,
            );
          })
          .then(function (t) {
            return o("WASignalSessions").splitMsgKey(e, t);
          }),
        i = r(u).then(function (e) {
          return o("WASignalOther").toBytes(e, 32);
        });
      return Promise.all([i, a]);
    }
    async function f(e, t) {
      var n = await o("WASignalOther").makeCryptoKey(t, "hmac-sha256"),
        r = function (t) {
          return o("WACryptoDependencies")
            .getCrypto()
            .subtle.sign({ name: "HMAC", hash: "SHA-256" }, n, t);
        },
        a = r(s)
          .then(function (e) {
            return o("WASignalOther").hkdf(
              new Uint8Array(e),
              null,
              "WhisperGroup",
              50,
            );
          })
          .then(function (t) {
            return o("WASignalGroupSession").makeSenderKeyMsgKey(e, t);
          }),
        i = r(u).then(function (e) {
          return o("WASignalOther").toBytes(e, 32);
        });
      return Promise.all([i, a]);
    }
    async function g(e, t, n) {
      var a = t.privateKey,
        i = n,
        l = r("gkx")("28506")
          ? await o("WASignalKeys").ecdhAsync(a, i)
          : o("WASignalKeys").ecdh(a, i),
        s = await h(new Uint8Array(l), "WhisperRatchet", e),
        u = s[0],
        c = s[1];
      return { rootKey: u, chainKey: c };
    }
    async function h(e, t, n) {
      n === void 0 && (n = null);
      var r = await o("WASignalOther").hkdf(e, n, t, 64);
      return [
        o("WASignalOther").sliceBytes(r, 0, 32),
        o("WASignalOther").sliceBytes(r, 32, 32),
      ];
    }
    function y(e, t) {
      return new Uint8Array(o("WASignalKeys").ecdh(e, t));
    }
    function C(e, t) {
      return y(t, e);
    }
    ((l.initiateSessionOutgoing = c),
      (l.initiateSessionIncoming = d),
      (l.initiateSenderKeySessionOutgoing = m),
      (l.initiateSenderKeySessionIncoming = p),
      (l.deriveMsgKey = _),
      (l.deriveSenderKeyMsgKey = f),
      (l.calculateRatchet = g));
  },
  98,
);
