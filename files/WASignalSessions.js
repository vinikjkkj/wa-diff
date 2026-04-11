__d(
  "WASignalSessions",
  ["WABinary", "WACryptoLibraryConfig", "WASignalKeys", "WASignalOther", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3;
    function s(e) {
      return !o("WACryptoLibraryConfig").getCryptoLibraryConfig()
        .S508658AutoAcknowledgeStaleSessions || e.initialExchangeInfo == null
        ? e
        : y(
            e.local,
            e.remote,
            e.rootKey,
            e.recvChains,
            e.sendChain,
            null,
            e.prevSendChainHighestIndex,
            e.prevSessions,
            e.aliceBaseKey,
          );
    }
    function u(e, t) {
      return c(e, 0, t, []);
    }
    function c(e, t, n, r) {
      return {
        ratchetPubKey: e,
        nextMsgIndex: t,
        chainKey: n,
        unusedMsgKeys: r,
      };
    }
    function d(e, t) {
      return m(e, 0, t);
    }
    function m(e, t, n) {
      return { ratchetKey: e, nextMsgIndex: t, chainKey: n };
    }
    function p(e, t, n) {
      return { remoteOneTimeId: e, remoteSignedId: t, localOneTimePubKey: n };
    }
    function _(e, t) {
      return y(
        e.local,
        e.remote,
        e.rootKey,
        e.recvChains,
        e.sendChain,
        e.initialExchangeInfo,
        e.prevSendChainHighestIndex,
        t,
        e.aliceBaseKey,
      );
    }
    function f(e, t, n) {
      return y(
        e.local,
        e.remote,
        e.rootKey,
        t,
        n,
        e.initialExchangeInfo,
        e.prevSendChainHighestIndex,
        e.prevSessions,
        e.aliceBaseKey,
      );
    }
    function g(e, t, n, r) {
      return (
        n === void 0 && (n = e.sendChain),
        y(
          e.local,
          e.remote,
          r,
          t,
          n,
          null,
          Math.max(e.sendChain.nextMsgIndex - 1, 0),
          e.prevSessions,
          e.aliceBaseKey,
        )
      );
    }
    function h(e, t, n, r, o, a, i) {
      return y(e, t, n, r, o, a, 0, [], i);
    }
    function y(e, t, n, r, o, a, i, l, s) {
      return {
        local: e,
        remote: t,
        rootKey: n,
        sendChain: o,
        recvChains: r,
        initialExchangeInfo: a,
        prevSendChainHighestIndex: i,
        prevSessions: l,
        aliceBaseKey: s,
      };
    }
    function C(e, t) {
      var n = new (o("WABinary").Binary)(t),
        r = o("WASignalOther").readBytes(n, 32),
        a = o("WASignalOther").readBytes(n, 32),
        i = o("WASignalOther").readBytes(n, 16);
      return b(e, r, a, i);
    }
    function b(e, t, n, r) {
      return { index: e, cipherKey: t, macKey: n, iv: r };
    }
    function v(e) {
      return {
        senderRatchetKey: e.ratchetPubKey,
        chainKey: { index: e.nextMsgIndex, key: e.chainKey },
        messageKeys: e.unusedMsgKeys,
      };
    }
    function S(e) {
      var t = e.ratchetKey;
      return {
        senderRatchetKey: t.serializedPubKey,
        senderRatchetKeyPrivate: t.privateKey,
        chainKey: { index: e.nextMsgIndex, key: e.chainKey },
      };
    }
    function R(t) {
      var n = t.initialExchangeInfo,
        r = t.local,
        o = t.remote,
        a = void 0;
      if (n) {
        var i = n.remoteOneTimeId;
        a = {
          preKeyId: i != null ? i : void 0,
          signedPreKeyId: n.remoteSignedId,
          baseKey: n.localOneTimePubKey,
        };
      }
      return {
        currentSession: {
          sessionVersion: e,
          localIdentityPublic: r.pubKey,
          remoteIdentityPublic: o.pubKey,
          rootKey: t.rootKey,
          previousCounter: t.prevSendChainHighestIndex,
          senderChain: S(t.sendChain),
          receiverChains: t.recvChains.map(v),
          pendingPreKey: a,
          remoteRegistrationId: o.regId,
          localRegistrationId: r.regId,
          aliceBaseKey: t.aliceBaseKey,
        },
        previousSessions: t.prevSessions,
      };
    }
    function L(t) {
      var n = t.initialExchangeInfo,
        r = t.local,
        a = t.remote,
        i = t.sendChain,
        l = void 0;
      if (n) {
        var s = n.remoteOneTimeId;
        l = {
          preKeyId: s != null ? s : void 0,
          signedPreKeyId: n.remoteSignedId,
          baseKey: o("WASignalOther").toBuffer(n.localOneTimePubKey),
        };
      }
      return {
        sessionVersion: e,
        localIdentityPublic: o("WASignalOther").toBuffer(r.pubKey),
        remoteIdentityPublic: o("WASignalOther").toBuffer(a.pubKey),
        rootKey: o("WASignalOther").toBuffer(t.rootKey),
        previousCounter: t.prevSendChainHighestIndex,
        senderChain: {
          senderRatchetKey: o("WASignalOther").toBuffer(
            i.ratchetKey.serializedPubKey,
          ),
          senderRatchetKeyPrivate: o("WASignalOther").toBuffer(
            i.ratchetKey.privateKey,
          ),
          chainKey: {
            index: i.nextMsgIndex,
            key: o("WASignalOther").toBuffer(i.chainKey),
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
        pendingPreKey: l,
        remoteRegistrationId: a.regId,
        localRegistrationId: r.regId,
        aliceBaseKey:
          t.aliceBaseKey == null
            ? void 0
            : o("WASignalOther").toBuffer(t.aliceBaseKey),
      };
    }
    function E(e) {
      var t = $(e.currentSession, "currentSession");
      return I(t, e.previousSessions);
    }
    function k(e) {
      return I(e, []);
    }
    function I(t, n) {
      var a = $(t.sessionVersion, "sessionVersion");
      if (a !== e) throw r("err")("Signal: bad session version " + a);
      var i = $(t.senderChain, "senderChain"),
        l = $(i.chainKey, "senderChain.chainKey"),
        s = m(
          o("WASignalKeys").makeSerializedKeyPairFrom(
            x(i.senderRatchetKeyPrivate, 32, "senderRatchetKeyPrivate"),
            D(i.senderRatchetKey, "senderRatchetKey"),
          ),
          $(l.index, "senderChain.chainKey.index"),
          x(l.key, 32, "senderChain.chainKey.key"),
        ),
        u = $(t.receiverChains, "receiverChains").map(function (e) {
          var t = $(e.chainKey, "receiverChains[].chainKey");
          return c(
            D(e.senderRatchetKey, "receiverChains[].senderRatchetKey"),
            $(t.index, "receiverChains[].chainKey.index"),
            x(t.key, 32, "receiverChains[].chainKey.key"),
            T(e.messageKeys),
          );
        }),
        d = {
          regId: o("WASignalOther").castRegistrationId(
            $(t.localRegistrationId, "localRegistrationId"),
          ),
          pubKey: D(t.localIdentityPublic, "localIdentityPublic"),
        },
        _ = {
          regId: o("WASignalOther").castRegistrationId(
            $(t.remoteRegistrationId, "remoteRegistrationId"),
          ),
          pubKey: D(t.remoteIdentityPublic, "remoteIdentityPublic"),
        },
        f = t.pendingPreKey,
        g = null;
      if (f) {
        var h = f.preKeyId;
        g = p(
          h != null ? o("WASignalKeys").castToPreKeyId(h) : null,
          o("WASignalKeys").castToSignedPreKeyId(
            $(f.signedPreKeyId, "pendingPreKey.signedPreKeyId"),
          ),
          D(f.baseKey, "pendingPreKey.baseKey"),
        );
      }
      var C = t.aliceBaseKey == null ? null : D(t.aliceBaseKey, "aliceBaseKey");
      return y(
        d,
        _,
        x(t.rootKey, 32, "rootKey"),
        u,
        s,
        g,
        t.previousCounter || 0,
        n,
        C,
      );
    }
    function T(e) {
      return e.map(function (e) {
        return {
          index: $(e.index, "messageKeys[].index"),
          cipherKey: x(e.cipherKey, 32, "messageKeys[].cipherKey"),
          macKey: x(e.macKey, 32, "messageKeys[].macKey"),
          iv: x(e.iv, 16, "messageKeys[].iv"),
        };
      });
    }
    function D(e, t) {
      return o("WASignalKeys").castToSerializedPubKey(new Uint8Array($(e, t)));
    }
    function x(e, t, n) {
      return o("WASignalOther").toBytes($(e, n), t);
    }
    function $(e, t) {
      if (e == null) throw r("err")("Signal: protobuf is missing " + t);
      return e;
    }
    ((l.FORMAT_VERSION = e),
      (l.maybeClearPendingPreKey = s),
      (l.makeFreshRecvChain = u),
      (l.makeRecvChain = c),
      (l.makeFreshSendChain = d),
      (l.makeSendChain = m),
      (l.makeInitialExchangeInfo = p),
      (l.setPrevSessions = _),
      (l.updateChains = f),
      (l.ratchetSession = g),
      (l.makeFreshSession = h),
      (l.makeSession = y),
      (l.splitMsgKey = C),
      (l.serializeSession = R),
      (l.detachSession = L),
      (l.parseSessionFromRecord = E),
      (l.parseSession = k),
      (l._parseSession = I),
      (l.bytesOrThrow = x),
      (l.definedOrThrow = $));
  },
  98,
);
