__d(
  "MAWVaultMaterials",
  ["FBLogger", "WAArrayBufferUtils", "randomInt", "tweetnacl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = null,
      u = null;
    function c(e) {
      s = e;
    }
    function d() {
      return e;
    }
    function m(t) {
      e = t;
    }
    function p() {
      ((e = null), (s = null));
    }
    function _() {
      return h() != null && d() != null;
    }
    function f() {
      return u;
    }
    function g() {
      var e = 1e9,
        t = 9999999999;
      return r("randomInt")(e, t) + "##" + r("randomInt")(e, t);
    }
    function h() {
      return s;
    }
    function y() {
      if (!_())
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "Vault materials are null",
        );
      return { encryptionKey: e, prefixAndSuffix: s };
    }
    function C(e, t) {
      var n = _();
      return (
        r("FBLogger")("messenger_web").debug(
          "Setting vault materials -- vaultMaterials=%s, previouslySetup=%s",
          (!!e).toString(),
          n,
        ),
        n ||
          (v(e != null ? e : b()),
          (u = t != null ? t : e != null ? "existing" : "newly-generated")),
        y()
      );
    }
    function b() {
      return {
        encryptionKey: o("tweetnacl").randomBytes(32).buffer,
        prefixAndSuffix: g(),
      };
    }
    function v(e) {
      var t = e.encryptionKey,
        n = e.prefixAndSuffix;
      if (t == null || n == null)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "Cannot set null values for encryption key and prefix",
        );
      (m(t), c(n));
    }
    function S() {
      return R(y());
    }
    function R(e) {
      var t = e.encryptionKey,
        n = e.prefixAndSuffix;
      if (n != null && t != null) {
        var r = o("WAArrayBufferUtils").arrayBufferToString(t);
        return JSON.stringify({ encryptionKey: r, prefixAndSuffix: n });
      } else return "";
    }
    function L(e) {
      if (e === "") return null;
      var t = JSON.parse(e);
      if (t.encryptionKey == null || t.prefixAndSuffix == null)
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "Vault materials were not in correct format",
        );
      var n = o("WAArrayBufferUtils").stringToArrayBuffer(t.encryptionKey),
        a = t.prefixAndSuffix;
      return { encryptionKey: n, prefixAndSuffix: a };
    }
    ((l.TEST_ONLY_clearVaultMaterials = p),
      (l.hasVaultBeenSetup = _),
      (l.getVaultMaterialsSource = f),
      (l.getVaultPrefixAndSuffix = h),
      (l.getVaultMaterials = y),
      (l.initializeVaultMaterials = C),
      (l.generateNewVaultMaterials = b),
      (l.materialsToString = S),
      (l.fromMaterialsToString = R),
      (l.fromStringToMaterials = L));
  },
  98,
);
