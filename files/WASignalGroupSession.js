__d(
  "WASignalGroupSession",
  ["WASignalKeys", "WASignalSessions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = 3;
    function u(e) {
      var t = o("WASignalSessions").definedOrThrow(
          e.senderSigningKey,
          "senderSigningKey",
        ),
        n = o("WASignalSessions").definedOrThrow(
          e.senderMessageKeys,
          "senderMessageKeys",
        ),
        r = o("WASignalSessions").definedOrThrow(
          e.senderChainKey,
          "senderChainKey",
        );
      return {
        senderSigningKeyPublic: S(t.public, "public"),
        senderSigningKeyPrivate: t.private
          ? o("WASignalSessions").bytesOrThrow(t.private, 32, "private")
          : void 0,
        senderKeyId: o("WASignalSessions").definedOrThrow(
          e.senderKeyId,
          "senderKeyId",
        ),
        unusedMsgKeys: n.map(function (e) {
          return _(
            o("WASignalSessions").definedOrThrow(e.iteration, "iteration"),
            o("WASignalSessions").bytesOrThrow(e.seed, 50, "seed"),
          );
        }),
        senderKeyChainKey: f(
          o("WASignalSessions").definedOrThrow(r.iteration, "iteration"),
          o("WASignalSessions").bytesOrThrow(r.seed, 32, "seed"),
        ),
      };
    }
    function c(e, t, n, r, o) {
      return {
        senderSigningKeyPublic: e,
        senderSigningKeyPrivate: t,
        senderKeyChainKey: n,
        senderKeyId: r,
        unusedMsgKeys: o == null ? [] : o,
      };
    }
    function d(e, t) {
      var n = e.senderKeyStates.findIndex(function (e) {
        return e.senderKeyId === t.senderKeyId;
      });
      return {
        senderKeyStates: e.senderKeyStates.map(function (e, r) {
          return r === n ? t : e;
        }),
      };
    }
    function m(t, n) {
      var r = t.senderKeyStates.slice(t.senderKeyStates.length > e - 1 ? 1 : 0);
      return (r.push(n), { senderKeyStates: r });
    }
    function p(e) {
      return { senderKeyStates: [e] };
    }
    function _(e, t) {
      return { iteration: e, seed: t };
    }
    function f(e, t) {
      return { nextMsgIndex: e, chainKey: t };
    }
    function g(e) {
      var t = o("WASignalSessions").definedOrThrow(
        e.senderKeyStates,
        "senderKeyStates",
      );
      return h(t);
    }
    function h(e) {
      return y(e);
    }
    function y(e) {
      var t = e.map(function (e) {
        return u(e);
      });
      return { senderKeyStates: t };
    }
    function C(e, t) {
      var n = e.senderKeyStates.findIndex(function (e) {
        return e.senderKeyId === t;
      });
      if (n !== -1) return e.senderKeyStates[n];
    }
    function b(e) {
      return {
        senderKeyStates: e.senderKeyStates.map(function (e) {
          return v(e);
        }),
      };
    }
    function v(e) {
      return {
        senderKeyId: e.senderKeyId,
        senderChainKey: {
          iteration: e.senderKeyChainKey.nextMsgIndex,
          seed: e.senderKeyChainKey.chainKey,
        },
        senderSigningKey: {
          public: e.senderSigningKeyPublic,
          private: e.senderSigningKeyPrivate,
        },
        senderMessageKeys: e.unusedMsgKeys.map(function (e) {
          var t = e.iteration,
            n = e.seed;
          return { iteration: t, seed: n };
        }),
      };
    }
    function S(e, t) {
      return o("WASignalKeys").castToSerializedPubKey(
        new Uint8Array(o("WASignalSessions").definedOrThrow(e, t)),
      );
    }
    function R(e) {
      return e;
    }
    ((l.FORMAT_VERSION = s),
      (l.makeSenderKeyState = c),
      (l.updateSessionWithUpdatedSenderKeyState = d),
      (l.updateSessionWithNewSenderKeyState = m),
      (l.makeNewSenderKeySession = p),
      (l.makeSenderKeyMsgKey = _),
      (l.makeSenderKeyChainKey = f),
      (l.parseSessionFromRecord = g),
      (l._parseSession = h),
      (l.makeSenderKeySessionFromRecord = y),
      (l.findSenderKeyState = C),
      (l.serializeSession = b),
      (l.serializeSenderKeyState = v),
      (l.convertFromRawToSenderKeyState = R));
  },
  98,
);
