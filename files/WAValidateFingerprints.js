__d(
  "WAValidateFingerprints",
  [
    "$InternalEnum",
    "WACryptoUtils",
    "WAFingerprint.pb",
    "decodeProtobuf",
    "nullthrows",
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
    function c(e, t, n) {
      return n ? m(e, t) : d(e, t);
    }
    function d(t, n) {
      var a = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          t,
        ),
        i = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          n,
        );
      if (!a || a.version == null) return e.MALFORMED_CODE;
      if (a.version < s) return e.UNEXPECTED_VERSION_OLD;
      if (a.version > u) return e.UNEXPECTED_VERSION_NEW;
      var l = r("nullthrows")(i.localFingerprint),
        c = l.pnIdentifier,
        d = l.lidIdentifier,
        m = r("nullthrows")(i.remoteFingerprint),
        _ = m.pnIdentifier,
        f = m.lidIdentifier,
        g = a.localFingerprint,
        h = a.remoteFingerprint;
      if (!g || !h) return e.MALFORMED_CODE;
      var y = p(g.pnIdentifier, c),
        C = p(g.lidIdentifier, d),
        b = p(h.pnIdentifier, c),
        v = p(h.lidIdentifier, d),
        S = !1,
        R,
        L;
      if (y || C) {
        ((S = !0), (R = g));
        var E = p(h.pnIdentifier, _),
          k = p(h.lidIdentifier, f);
        if (E || k) L = h;
        else return e.REMOTE_WRONG_CHAT_PEER;
      } else if (b || v) {
        R = h;
        var I = p(g.pnIdentifier, _),
          T = p(g.lidIdentifier, f);
        if (I || T) L = g;
        else return e.REMOTE_WRONG_CHAT;
      } else return e.LOCAL_WRONG_CHAT;
      if (a.version === s) {
        if (!p(R.publicKey, l.publicKey)) return e.LOCAL_KEYS_MISMATCH;
        if (!p(L.publicKey, m.publicKey)) return e.REMOTE_KEYS_MISMATCH;
      } else {
        if (!p(R.hashedPublicKey, l.hashedPublicKey))
          return e.LOCAL_KEYS_MISMATCH;
        if (!p(L.hashedPublicKey, m.hashedPublicKey))
          return e.REMOTE_KEYS_MISMATCH;
      }
      var D = p(R.pnIdentifier, l.pnIdentifier);
      if (R.pnIdentifier && !D)
        return S ? e.LOCAL_PN_MISMATCH_PEER : e.LOCAL_PN_MISMATCH;
      if (m.pnIdentifier)
        if (L.pnIdentifier) {
          var x = o("WACryptoUtils").arrayBuffersEqual(
            L.pnIdentifier,
            m.pnIdentifier,
          );
          if (!x) return S ? e.REMOTE_PN_MISMATCH_PEER : e.REMOTE_PN_MISMATCH;
        } else return S ? e.REMOTE_PN_MISSING_PEER : e.REMOTE_PN_MISSING;
      else if (L.pnIdentifier) return e.REMOTE_PN_MISSING;
      if (l.usernameIdentifier != null)
        if (R.usernameIdentifier != null) {
          var $ = o("WACryptoUtils").arrayBuffersEqual(
            R.usernameIdentifier,
            l.usernameIdentifier,
          );
          if (!$)
            return S
              ? e.LOCAL_USERNAME_MISMATCH_PEER
              : e.LOCAL_USERNAME_MISMATCH;
        } else
          return S ? e.LOCAL_USERNAME_MISSING_PEER : e.LOCAL_USERNAME_MISSING;
      else if (R.usernameIdentifier != null) return e.LOCAL_USERNAME_UNEXPECTED;
      if (m.usernameIdentifier != null)
        if (L.usernameIdentifier != null) {
          var P = o("WACryptoUtils").arrayBuffersEqual(
            L.usernameIdentifier,
            m.usernameIdentifier,
          );
          if (!P)
            return S
              ? e.REMOTE_USERNAME_MISMATCH_PEER
              : e.REMOTE_USERNAME_MISMATCH;
        } else
          return S ? e.REMOTE_USERNAME_MISSING_PEER : e.REMOTE_USERNAME_MISSING;
      else if (L.usernameIdentifier != null)
        return e.REMOTE_USERNAME_UNEXPECTED;
      return l.hostedState !== R.hostedState
        ? e.LOCAL_HOSTED_DEVICE_MISSMATCH
        : m.hostedState !== L.hostedState
          ? e.REMOTE_HOSTED_DEVICE_MISSMATCH
          : e.SUCCESS;
    }
    function m(t, n) {
      var a = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          t,
        ),
        i = o("decodeProtobuf").decodeProtobuf(
          o("WAFingerprint.pb").CombinedFingerprintSpec,
          n,
        );
      if (!a || a.version == null) return e.MALFORMED_CODE;
      if (a.version < s) return e.UNEXPECTED_VERSION_OLD;
      if (a.version > u) return e.UNEXPECTED_VERSION_NEW;
      var l = r("nullthrows")(i.localFingerprint),
        c = l.lidIdentifier,
        d = r("nullthrows")(i.remoteFingerprint),
        m = d.lidIdentifier,
        _ = a.localFingerprint,
        f = a.remoteFingerprint;
      if (!_ || !f || !_.lidIdentifier || !f.lidIdentifier)
        return e.MALFORMED_CODE;
      var g = p(_.lidIdentifier, c),
        h = p(f.lidIdentifier, c),
        y = !1,
        C,
        b;
      if (g) {
        ((y = !0), (C = _));
        var v = p(f.lidIdentifier, m);
        if (v) b = f;
        else return e.REMOTE_WRONG_CHAT_PEER;
      } else if (h) {
        C = f;
        var S = p(_.lidIdentifier, m);
        if (S) b = _;
        else return e.REMOTE_WRONG_CHAT;
      } else return e.LOCAL_WRONG_CHAT;
      if (a.version === s) {
        if (!p(C.publicKey, l.publicKey)) return e.LOCAL_KEYS_MISMATCH;
        if (!p(b.publicKey, d.publicKey)) return e.REMOTE_KEYS_MISMATCH;
      } else {
        if (!p(C.hashedPublicKey, l.hashedPublicKey))
          return e.LOCAL_KEYS_MISMATCH;
        if (!p(b.hashedPublicKey, d.hashedPublicKey))
          return e.REMOTE_KEYS_MISMATCH;
      }
      var R = l.usernameIdentifier != null || l.pnIdentifier != null,
        L = C.usernameIdentifier != null || C.pnIdentifier != null;
      if (!R || !L)
        return y
          ? e.LOCAL_DISPLAY_NAME_MISSING_PEER
          : e.LOCAL_DISPLAY_NAME_MISSING;
      var E = d.usernameIdentifier != null || d.pnIdentifier != null,
        k = b.usernameIdentifier != null || b.pnIdentifier != null;
      if (!E || !k)
        return y
          ? e.REMOTE_DISPLAY_NAME_MISSING_PEER
          : e.REMOTE_DISPLAY_NAME_MISSING;
      if (l.usernameIdentifier != null)
        if (C.usernameIdentifier != null) {
          var I = o("WACryptoUtils").arrayBuffersEqualCaseInsensitive(
            C.usernameIdentifier,
            l.usernameIdentifier,
          );
          if (!I)
            return y
              ? e.LOCAL_USERNAME_MISMATCH_PEER
              : e.LOCAL_USERNAME_MISMATCH;
        } else
          return y ? e.LOCAL_USERNAME_MISSING_PEER : e.LOCAL_USERNAME_MISSING;
      else if (C.usernameIdentifier != null) return e.LOCAL_USERNAME_UNEXPECTED;
      if (d.usernameIdentifier != null)
        if (b.usernameIdentifier != null) {
          var T = o("WACryptoUtils").arrayBuffersEqualCaseInsensitive(
            b.usernameIdentifier,
            d.usernameIdentifier,
          );
          if (!T)
            return y
              ? e.REMOTE_USERNAME_MISMATCH_PEER
              : e.REMOTE_USERNAME_MISMATCH;
        } else
          return y ? e.REMOTE_USERNAME_MISSING_PEER : e.REMOTE_USERNAME_MISSING;
      else if (b.usernameIdentifier != null)
        return e.REMOTE_USERNAME_UNEXPECTED;
      var D = p(C.pnIdentifier, l.pnIdentifier);
      if (C.pnIdentifier && l.pnIdentifier && !D)
        return y ? e.LOCAL_PN_MISMATCH_PEER : e.LOCAL_PN_MISMATCH;
      var x = p(b.pnIdentifier, d.pnIdentifier);
      return b.pnIdentifier && d.pnIdentifier && !x
        ? y
          ? e.REMOTE_PN_MISMATCH_PEER
          : e.REMOTE_PN_MISMATCH
        : l.hostedState !== C.hostedState
          ? e.LOCAL_HOSTED_DEVICE_MISSMATCH
          : d.hostedState !== b.hostedState
            ? e.REMOTE_HOSTED_DEVICE_MISSMATCH
            : e.SUCCESS;
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
