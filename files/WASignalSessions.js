__d(
  "WASignalSessions",
  ["WABinary", "WACryptoLibraryConfig", "WASignalKeys", "WASignalOther", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3,
      s = 4;
    function u(e) {
      return !o("WACryptoLibraryConfig").getCryptoLibraryConfig()
        .S508658AutoAcknowledgeStaleSessions || e.initialExchangeInfo == null
        ? e
        : C(
            e.local,
            e.remote,
            e.rootKey,
            e.recvChains,
            e.sendChain,
            null,
            e.prevSendChainHighestIndex,
            e.prevSessions,
            e.aliceBaseKey,
            e.sessionVersion,
          );
    }
    function c(e, t) {
      return d(e, 0, t, []);
    }
    function d(e, t, n, r) {
      return {
        ratchetPubKey: e,
        nextMsgIndex: t,
        chainKey: n,
        unusedMsgKeys: r,
      };
    }
    function m(e, t) {
      return p(e, 0, t);
    }
    function p(e, t, n) {
      return { ratchetKey: e, nextMsgIndex: t, chainKey: n };
    }
    function _(e, t, n, r, o) {
      return (
        r === void 0 && (r = null),
        o === void 0 && (o = null),
        {
          remoteOneTimeId: e,
          remoteSignedId: t,
          localOneTimePubKey: n,
          kyberPreKeyId: r,
          kemCiphertext: o,
        }
      );
    }
    function f(e, t) {
      return C(
        e.local,
        e.remote,
        e.rootKey,
        e.recvChains,
        e.sendChain,
        e.initialExchangeInfo,
        e.prevSendChainHighestIndex,
        t,
        e.aliceBaseKey,
        e.sessionVersion,
      );
    }
    function g(e, t, n) {
      return C(
        e.local,
        e.remote,
        e.rootKey,
        t,
        n,
        e.initialExchangeInfo,
        e.prevSendChainHighestIndex,
        e.prevSessions,
        e.aliceBaseKey,
        e.sessionVersion,
      );
    }
    function h(e, t, n, r) {
      return (
        n === void 0 && (n = e.sendChain),
        C(
          e.local,
          e.remote,
          r,
          t,
          n,
          null,
          Math.max(e.sendChain.nextMsgIndex - 1, 0),
          e.prevSessions,
          e.aliceBaseKey,
          e.sessionVersion,
        )
      );
    }
    function y(t, n, r, o, a, i, l, s) {
      return (s === void 0 && (s = e), C(t, n, r, o, a, i, 0, [], l, s));
    }
    function C(t, n, r, o, a, i, l, s, u, c) {
      return (
        c === void 0 && (c = e),
        {
          sessionVersion: c,
          local: t,
          remote: n,
          rootKey: r,
          sendChain: a,
          recvChains: o,
          initialExchangeInfo: i,
          prevSendChainHighestIndex: l,
          prevSessions: s,
          aliceBaseKey: u,
        }
      );
    }
    function b(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = o("WASignalOther").readBytes(n, 32),
        a = o("WASignalOther").readBytes(n, 32),
        i = o("WASignalOther").readBytes(n, 16);
      return v(e, r, a, i);
    }
    function v(e, t, n, r) {
      return { index: e, cipherKey: t, macKey: n, iv: r };
    }
    function S(e) {
      return {
        senderRatchetKey: e.ratchetPubKey,
        chainKey: { index: e.nextMsgIndex, key: e.chainKey },
        messageKeys: e.unusedMsgKeys,
      };
    }
    function R(e) {
      var t = e.ratchetKey;
      return {
        senderRatchetKey: t.serializedPubKey,
        senderRatchetKeyPrivate: t.privateKey,
        chainKey: { index: e.nextMsgIndex, key: e.chainKey },
      };
    }
    function L(t) {
      var n,
        r = t.initialExchangeInfo,
        o = t.local,
        a = t.remote,
        i = void 0;
      if (r) {
        var l = r.remoteOneTimeId;
        i = {
          preKeyId: l != null ? l : void 0,
          signedPreKeyId: r.remoteSignedId,
          baseKey: r.localOneTimePubKey,
          kyberPreKeyId: r.kyberPreKeyId != null ? r.kyberPreKeyId : void 0,
          kyberCiphertext: r.kemCiphertext != null ? r.kemCiphertext : void 0,
        };
      }
      return {
        currentSession: {
          sessionVersion: (n = t.sessionVersion) != null ? n : e,
          localIdentityPublic: o.pubKey,
          remoteIdentityPublic: a.pubKey,
          rootKey: t.rootKey,
          previousCounter: t.prevSendChainHighestIndex,
          senderChain: R(t.sendChain),
          receiverChains: t.recvChains.map(S),
          pendingPreKey: i,
          remoteRegistrationId: a.regId,
          localRegistrationId: o.regId,
          aliceBaseKey: t.aliceBaseKey,
        },
        previousSessions: t.prevSessions,
      };
    }
    function E(t) {
      var n,
        r = t.initialExchangeInfo,
        a = t.local,
        i = t.remote,
        l = t.sendChain,
        s = void 0;
      if (r) {
        var u = r.remoteOneTimeId;
        s = {
          preKeyId: u != null ? u : void 0,
          signedPreKeyId: r.remoteSignedId,
          baseKey: o("WASignalOther").toBuffer(r.localOneTimePubKey),
          kyberPreKeyId: r.kyberPreKeyId != null ? r.kyberPreKeyId : void 0,
          kyberCiphertext:
            r.kemCiphertext != null
              ? o("WASignalOther").toBuffer(r.kemCiphertext)
              : void 0,
        };
      }
      return {
        sessionVersion: (n = t.sessionVersion) != null ? n : e,
        localIdentityPublic: o("WASignalOther").toBuffer(a.pubKey),
        remoteIdentityPublic: o("WASignalOther").toBuffer(i.pubKey),
        rootKey: o("WASignalOther").toBuffer(t.rootKey),
        previousCounter: t.prevSendChainHighestIndex,
        senderChain: {
          senderRatchetKey: o("WASignalOther").toBuffer(
            l.ratchetKey.serializedPubKey,
          ),
          senderRatchetKeyPrivate: o("WASignalOther").toBuffer(
            l.ratchetKey.privateKey,
          ),
          chainKey: {
            index: l.nextMsgIndex,
            key: o("WASignalOther").toBuffer(l.chainKey),
          },
          messageKeys: [],
        },
        receiverChains: t.recvChains.map(function (e) {
          return {
            senderRatchetKey: o("WASignalOther").toBuffer(e.ratchetPubKey),
            chainKey: {
              index: e.nextMsgIndex,
              key: o("WASignalOther").toBuffer(e.chainKey),
            },
            messageKeys: e.unusedMsgKeys.map(function (e) {
              return {
                index: e.index,
                cipherKey: o("WASignalOther").toBuffer(e.cipherKey),
                macKey: o("WASignalOther").toBuffer(e.macKey),
                iv: o("WASignalOther").toBuffer(e.iv),
              };
            }),
          };
        }),
        pendingPreKey: s,
        remoteRegistrationId: i.regId,
        localRegistrationId: a.regId,
        aliceBaseKey:
          t.aliceBaseKey == null
            ? void 0
            : o("WASignalOther").toBuffer(t.aliceBaseKey),
      };
    }
    function k(e) {
      var t = P(e.currentSession, "currentSession");
      return T(t, e.previousSessions);
    }
    function I(e) {
      return T(e, []);
    }
    function T(t, n) {
      var a,
        i = (a = t.sessionVersion) != null ? a : e;
      if (i < e || i > s) throw r("err")("Signal: bad session version " + i);
      var l = P(t.senderChain, "senderChain"),
        u = P(l.chainKey, "senderChain.chainKey"),
        c = p(
          o("WASignalKeys").makeSerializedKeyPairFrom(
            $(l.senderRatchetKeyPrivate, 32, "senderRatchetKeyPrivate"),
            x(l.senderRatchetKey, "senderRatchetKey"),
          ),
          P(u.index, "senderChain.chainKey.index"),
          $(u.key, 32, "senderChain.chainKey.key"),
        ),
        m = P(t.receiverChains, "receiverChains").map(function (e) {
          var t = P(e.chainKey, "receiverChains[].chainKey");
          return d(
            x(e.senderRatchetKey, "receiverChains[].senderRatchetKey"),
            P(t.index, "receiverChains[].chainKey.index"),
            $(t.key, 32, "receiverChains[].chainKey.key"),
            D(e.messageKeys),
          );
        }),
        f = {
          regId: o("WASignalOther").castRegistrationId(
            P(t.localRegistrationId, "localRegistrationId"),
          ),
          pubKey: x(t.localIdentityPublic, "localIdentityPublic"),
        },
        g = {
          regId: o("WASignalOther").castRegistrationId(
            P(t.remoteRegistrationId, "remoteRegistrationId"),
          ),
          pubKey: x(t.remoteIdentityPublic, "remoteIdentityPublic"),
        },
        h = t.pendingPreKey,
        y = null;
      if (h) {
        var b = h.preKeyId;
        y = _(
          b != null ? o("WASignalKeys").castToPreKeyId(b) : null,
          o("WASignalKeys").castToSignedPreKeyId(
            P(h.signedPreKeyId, "pendingPreKey.signedPreKeyId"),
          ),
          x(h.baseKey, "pendingPreKey.baseKey"),
          h.kyberPreKeyId != null ? h.kyberPreKeyId : null,
          h.kyberCiphertext != null ? new Uint8Array(h.kyberCiphertext) : null,
        );
      }
      var v = t.aliceBaseKey == null ? null : x(t.aliceBaseKey, "aliceBaseKey");
      return C(
        f,
        g,
        $(t.rootKey, 32, "rootKey"),
        m,
        c,
        y,
        t.previousCounter || 0,
        n,
        v,
        i,
      );
    }
    function D(e) {
      return e.map(function (e) {
        return {
          index: P(e.index, "messageKeys[].index"),
          cipherKey: $(e.cipherKey, 32, "messageKeys[].cipherKey"),
          macKey: $(e.macKey, 32, "messageKeys[].macKey"),
          iv: $(e.iv, 16, "messageKeys[].iv"),
        };
      });
    }
    function x(e, t) {
      return o("WASignalKeys").castToSerializedPubKey(new Uint8Array(P(e, t)));
    }
    function $(e, t, n) {
      return o("WASignalOther").toBytes(P(e, n), t);
    }
    function P(e, t) {
      if (e == null) throw r("err")("Signal: protobuf is missing " + t);
      return e;
    }
    ((l.FORMAT_VERSION = e),
      (l.PQXDH_FORMAT_VERSION = s),
      (l.maybeClearPendingPreKey = u),
      (l.makeFreshRecvChain = c),
      (l.makeRecvChain = d),
      (l.makeFreshSendChain = m),
      (l.makeSendChain = p),
      (l.makeInitialExchangeInfo = _),
      (l.setPrevSessions = f),
      (l.updateChains = g),
      (l.ratchetSession = h),
      (l.makeFreshSession = y),
      (l.makeSession = C),
      (l.splitMsgKey = b),
      (l.serializeSession = L),
      (l.detachSession = E),
      (l.parseSessionFromRecord = k),
      (l.parseSession = I),
      (l._parseSession = T),
      (l.bytesOrThrow = $),
      (l.definedOrThrow = P));
  },
  98,
);
