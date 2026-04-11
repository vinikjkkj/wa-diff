__d(
  "WAValidateFingerprints",
  [
    "$InternalEnum",
    "WACryptoUtils",
    "WAFingerprint.pb",
    "WANullthrows",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "SUCCESS",
        "MALFORMED_CODE",
        "UNEXPECTED_VERSION_OLD",
        "UNEXPECTED_VERSION_NEW",
        "REMOTE_WRONG_CHAT_PEER",
        "REMOTE_WRONG_CHAT",
        "LOCAL_WRONG_CHAT",
        "LOCAL_KEYS_MISMATCH",
        "REMOTE_KEYS_MISMATCH",
        "LOCAL_PN_MISMATCH_PEER",
        "LOCAL_PN_MISMATCH",
        "REMOTE_PN_MISMATCH_PEER",
        "REMOTE_PN_MISMATCH",
        "REMOTE_PN_MISSING_PEER",
        "REMOTE_PN_MISSING",
        "LOCAL_USERNAME_MISMATCH_PEER",
        "LOCAL_USERNAME_MISMATCH",
        "LOCAL_USERNAME_MISSING_PEER",
        "LOCAL_USERNAME_MISSING",
        "LOCAL_USERNAME_UNEXPECTED",
        "REMOTE_USERNAME_MISMATCH_PEER",
        "REMOTE_USERNAME_MISMATCH",
        "REMOTE_USERNAME_MISSING_PEER",
        "REMOTE_USERNAME_MISSING",
        "REMOTE_USERNAME_UNEXPECTED",
        "LOCAL_DISPLAY_NAME_MISSING",
        "LOCAL_DISPLAY_NAME_MISSING_PEER",
        "REMOTE_DISPLAY_NAME_MISSING",
        "REMOTE_DISPLAY_NAME_MISSING_PEER",
        "REMOTE_HOSTED_DEVICE_MISSMATCH",
        "LOCAL_HOSTED_DEVICE_MISSMATCH",
      ]),
      s = 0,
      u = 1;
    function c(e, t, n, r) {
      return (r === void 0 && (r = !1), n ? m(e, t, r) : d(e, t, r));
    }
    function d(t, n, a) {
      var i = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          t,
        ),
        l = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          n,
        );
      if (!i || i.version == null) return e.MALFORMED_CODE;
      if (i.version < s) return e.UNEXPECTED_VERSION_OLD;
      if (i.version > u) return e.UNEXPECTED_VERSION_NEW;
      var c = r("WANullthrows")(l.localFingerprint),
        d = c.pnIdentifier,
        m = c.lidIdentifier,
        _ = r("WANullthrows")(l.remoteFingerprint),
        f = _.pnIdentifier,
        g = _.lidIdentifier,
        h = i.localFingerprint,
        y = i.remoteFingerprint;
      if (!h || !y) return e.MALFORMED_CODE;
      var C = p(h.pnIdentifier, d),
        b = p(h.lidIdentifier, m),
        v = p(y.pnIdentifier, d),
        S = p(y.lidIdentifier, m),
        R = !1,
        L,
        E;
      if (C || b) {
        ((R = !0), (L = h));
        var k = p(y.pnIdentifier, f),
          I = p(y.lidIdentifier, g);
        if (k || I) E = y;
        else return e.REMOTE_WRONG_CHAT_PEER;
      } else if (v || S) {
        L = y;
        var T = p(h.pnIdentifier, f),
          D = p(h.lidIdentifier, g);
        if (T || D) E = h;
        else return e.REMOTE_WRONG_CHAT;
      } else return e.LOCAL_WRONG_CHAT;
      if (i.version === s) {
        if (!p(L.publicKey, c.publicKey)) return e.LOCAL_KEYS_MISMATCH;
        if (!p(E.publicKey, _.publicKey)) return e.REMOTE_KEYS_MISMATCH;
      } else {
        if (!p(L.hashedPublicKey, c.hashedPublicKey))
          return e.LOCAL_KEYS_MISMATCH;
        if (!p(E.hashedPublicKey, _.hashedPublicKey))
          return e.REMOTE_KEYS_MISMATCH;
      }
      var x = p(L.pnIdentifier, c.pnIdentifier);
      if (L.pnIdentifier && !x)
        return R ? e.LOCAL_PN_MISMATCH_PEER : e.LOCAL_PN_MISMATCH;
      if (_.pnIdentifier)
        if (E.pnIdentifier) {
          var $ = o("WACryptoUtils").arrayBuffersEqual(
            E.pnIdentifier,
            _.pnIdentifier,
          );
          if (!$) return R ? e.REMOTE_PN_MISMATCH_PEER : e.REMOTE_PN_MISMATCH;
        } else return R ? e.REMOTE_PN_MISSING_PEER : e.REMOTE_PN_MISSING;
      else if (E.pnIdentifier) return e.REMOTE_PN_MISSING;
      if (c.usernameIdentifier != null)
        if (L.usernameIdentifier != null) {
          var P = o("WACryptoUtils").arrayBuffersEqual(
            L.usernameIdentifier,
            c.usernameIdentifier,
          );
          if (!P)
            return R
              ? e.LOCAL_USERNAME_MISMATCH_PEER
              : e.LOCAL_USERNAME_MISMATCH;
        } else
          return R ? e.LOCAL_USERNAME_MISSING_PEER : e.LOCAL_USERNAME_MISSING;
      else if (L.usernameIdentifier != null) return e.LOCAL_USERNAME_UNEXPECTED;
      if (_.usernameIdentifier != null)
        if (E.usernameIdentifier != null) {
          var N = o("WACryptoUtils").arrayBuffersEqual(
            E.usernameIdentifier,
            _.usernameIdentifier,
          );
          if (!N)
            return R
              ? e.REMOTE_USERNAME_MISMATCH_PEER
              : e.REMOTE_USERNAME_MISMATCH;
        } else
          return R ? e.REMOTE_USERNAME_MISSING_PEER : e.REMOTE_USERNAME_MISSING;
      else if (E.usernameIdentifier != null)
        return e.REMOTE_USERNAME_UNEXPECTED;
      if (a) {
        if (c.hostedState !== L.hostedState)
          return e.LOCAL_HOSTED_DEVICE_MISSMATCH;
        if (_.hostedState !== E.hostedState)
          return e.REMOTE_HOSTED_DEVICE_MISSMATCH;
      }
      return e.SUCCESS;
    }
    function m(t, n, a) {
      var i = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          t,
        ),
        l = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          n,
        );
      if (!i || i.version == null) return e.MALFORMED_CODE;
      if (i.version < s) return e.UNEXPECTED_VERSION_OLD;
      if (i.version > u) return e.UNEXPECTED_VERSION_NEW;
      var c = r("WANullthrows")(l.localFingerprint),
        d = c.lidIdentifier,
        m = r("WANullthrows")(l.remoteFingerprint),
        _ = m.lidIdentifier,
        f = i.localFingerprint,
        g = i.remoteFingerprint;
      if (!f || !g || !f.lidIdentifier || !g.lidIdentifier)
        return e.MALFORMED_CODE;
      var h = p(f.lidIdentifier, d),
        y = p(g.lidIdentifier, d),
        C = !1,
        b,
        v;
      if (h) {
        ((C = !0), (b = f));
        var S = p(g.lidIdentifier, _);
        if (S) v = g;
        else return e.REMOTE_WRONG_CHAT_PEER;
      } else if (y) {
        b = g;
        var R = p(f.lidIdentifier, _);
        if (R) v = f;
        else return e.REMOTE_WRONG_CHAT;
      } else return e.LOCAL_WRONG_CHAT;
      if (i.version === s) {
        if (!p(b.publicKey, c.publicKey)) return e.LOCAL_KEYS_MISMATCH;
        if (!p(v.publicKey, m.publicKey)) return e.REMOTE_KEYS_MISMATCH;
      } else {
        if (!p(b.hashedPublicKey, c.hashedPublicKey))
          return e.LOCAL_KEYS_MISMATCH;
        if (!p(v.hashedPublicKey, m.hashedPublicKey))
          return e.REMOTE_KEYS_MISMATCH;
      }
      var L = c.usernameIdentifier != null || c.pnIdentifier != null,
        E = b.usernameIdentifier != null || b.pnIdentifier != null;
      if (!L || !E)
        return C
          ? e.LOCAL_DISPLAY_NAME_MISSING_PEER
          : e.LOCAL_DISPLAY_NAME_MISSING;
      var k = m.usernameIdentifier != null || m.pnIdentifier != null,
        I = v.usernameIdentifier != null || v.pnIdentifier != null;
      if (!k || !I)
        return C
          ? e.REMOTE_DISPLAY_NAME_MISSING_PEER
          : e.REMOTE_DISPLAY_NAME_MISSING;
      if (c.usernameIdentifier != null)
        if (b.usernameIdentifier != null) {
          var T = o("WACryptoUtils").arrayBuffersEqualCaseInsensitive(
            b.usernameIdentifier,
            c.usernameIdentifier,
          );
          if (!T)
            return C
              ? e.LOCAL_USERNAME_MISMATCH_PEER
              : e.LOCAL_USERNAME_MISMATCH;
        } else
          return C ? e.LOCAL_USERNAME_MISSING_PEER : e.LOCAL_USERNAME_MISSING;
      else if (b.usernameIdentifier != null) return e.LOCAL_USERNAME_UNEXPECTED;
      if (m.usernameIdentifier != null)
        if (v.usernameIdentifier != null) {
          var D = o("WACryptoUtils").arrayBuffersEqualCaseInsensitive(
            v.usernameIdentifier,
            m.usernameIdentifier,
          );
          if (!D)
            return C
              ? e.REMOTE_USERNAME_MISMATCH_PEER
              : e.REMOTE_USERNAME_MISMATCH;
        } else
          return C ? e.REMOTE_USERNAME_MISSING_PEER : e.REMOTE_USERNAME_MISSING;
      else if (v.usernameIdentifier != null)
        return e.REMOTE_USERNAME_UNEXPECTED;
      var x = p(b.pnIdentifier, c.pnIdentifier);
      if (b.pnIdentifier && c.pnIdentifier && !x)
        return C ? e.LOCAL_PN_MISMATCH_PEER : e.LOCAL_PN_MISMATCH;
      var $ = p(v.pnIdentifier, m.pnIdentifier);
      if (v.pnIdentifier && m.pnIdentifier && !$)
        return C ? e.REMOTE_PN_MISMATCH_PEER : e.REMOTE_PN_MISMATCH;
      if (a) {
        if (c.hostedState !== b.hostedState)
          return e.LOCAL_HOSTED_DEVICE_MISSMATCH;
        if (m.hostedState !== v.hostedState)
          return e.REMOTE_HOSTED_DEVICE_MISSMATCH;
      }
      return e.SUCCESS;
    }
    function p(e, t) {
      return !e || !t ? !1 : o("WACryptoUtils").arrayBuffersEqual(e, t);
    }
    ((l.FingerprintValidationResult = e),
      (l.V3_QR_VERSION_0 = s),
      (l.V3_QR_VERSION_1 = u),
      (l.validateFingerprint = c));
  },
  98,
);
