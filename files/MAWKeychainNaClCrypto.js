__d(
  "MAWKeychainNaClCrypto",
  ["MAWKeychainCrypto", "WABase64", "tweetnacl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          (n.name = "EARError"),
          (n.message = t),
          n
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(babelHelpers.wrapNativeSuper(Error));
    function s(e, t, n) {
      var r = new Uint8Array(n),
        a = o("tweetnacl").randomBytes(o("tweetnacl").secretbox.nonceLength),
        i = o("tweetnacl").secretbox(t, a, new Uint8Array(e)),
        l = new Uint8Array(r.length + a.length + i.length);
      return (
        l.set(r),
        l.set(a, r.length),
        l.set(i, r.length + a.length),
        l.buffer
      );
    }
    function u(e, t, n) {
      return o("WABase64").encodeB64(
        s(e, t, n != null ? n : o("MAWKeychainCrypto").ADDITIONAL_DATA),
      );
    }
    function c(t, n, r, a, i) {
      var l = n.slice(0, i),
        s = n.slice(i, i + o("tweetnacl").secretbox.nonceLength),
        u = n.slice(i + o("tweetnacl").secretbox.nonceLength),
        c = o("tweetnacl").secretbox.open(
          new Uint8Array(u),
          new Uint8Array(s),
          new Uint8Array(t),
        );
      if (c == null)
        throw new e(
          "decryptTweetNaCl was unable to decrypt an entity. Attempting to use key version : " +
            (r != null ? r : "non-provided") +
            ". Format version " +
            (a != null ? a : "unknown") +
            ".",
        );
      return c;
    }
    function d(e, t, n, r) {
      return c(e, o("WABase64").decodeB64(t), n, void 0, r);
    }
    function m(e, t, n) {
      return u(e, t, n);
    }
    function p(e, t, n, r) {
      return d(e, t, n, r);
    }
    function _(e, t, n, r, o) {
      return c(e, t, n, r, o);
    }
    ((l.EARDecryptionError = e),
      (l.encryptTweetNaClArrayBuffer = s),
      (l.encryptTweetNaCl = u),
      (l.decryptTweetNaClArrayBuffer = c),
      (l.decryptTweetNaCl = d),
      (l.encrypt = m),
      (l.decrypt = p),
      (l.decryptArrayBuffer = _));
  },
  98,
);
