__d(
  "WAWebUserPrefsScreenLock",
  [
    "WAArrayBufferUtils",
    "WABase64",
    "WABinary",
    "WAWebDbEncryptionKey",
    "WAWebDirectConnectionX509",
    "WAWebPermanentStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
      var t = parseInt(
        (e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        )) != null
          ? e
          : 0,
        10,
      );
      return t !== 0;
    }
    function s() {
      return (
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        )
      );
    }
    function u() {
      var e;
      return (
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
        (e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        )) != null
          ? e
          : 0
      );
    }
    function c(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        e,
      );
    }
    function d(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV,
        e,
      );
    }
    function m() {
      return (
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV,
        )
      );
    }
    function p(e) {
      return r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT,
        e,
        { shouldWriteToIdb: !1 },
      );
    }
    function _() {
      return (
        T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT, !1),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT,
        )
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = I(),
            n = yield R(String(e), t);
          return r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
            n + "_" + t,
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS);
          var e = r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
          );
          if (e == null) return null;
          if (typeof e == "number") return parseInt(e, 10);
          var t = e.split("_"),
            n = t[0],
            a = t[1];
          if (n == null || a == null) return null;
          var i = yield E(n, a);
          return parseInt(i, 10);
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          T(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
          var e = r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
          );
          if (e == null) return 0;
          if (typeof e == "number") return parseInt(e, 10);
          var t = e.split("_"),
            n = t[0],
            a = t[1],
            i = yield E(n, a);
          return parseInt(i, 10);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = I(),
            a = yield R(String(e), n);
          t.aborted ||
            r("WAWebUserPrefsStore").setUser(
              o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
              a + "_" + n,
            );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Uint8Array(o("WABase64").decodeB64(t)),
            r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
            a = yield self.crypto.subtle.encrypt(
              { iv: n, name: "AES-CBC" },
              r.key,
              o("WAArrayBufferUtils").stringToArrayBuffer(e),
            );
          return o("WABase64").encodeB64(a);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Uint8Array(o("WABase64").decodeB64(t));
          yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit();
          var r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
            a = yield self.crypto.subtle.decrypt(
              { iv: n, name: "AES-CBC" },
              r.key,
              o("WABase64").decodeB64(e),
            );
          return o("WAWebDirectConnectionX509").arrayBufferToString(a);
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      var e = new Uint8Array(16);
      self.crypto.getRandomValues(e);
      var t = new (o("WABinary").Binary)(e).readByteArrayView(16);
      return o("WABase64").encodeB64(t);
    }
    function T(e, t) {
      var n = r("WAWebUserPrefsStore").get(e);
      if (n != null) {
        var o = t != null ? { shouldWriteToIdb: t } : null;
        (r("WAWebUserPrefsStore").setUser(e, n, o != null ? o : {}),
          r("WAWebPermanentStorage").removeItem(e));
      }
    }
    ((l.getScreenLockEnabled = e),
      (l.getScreenLockDurationForLogging = s),
      (l.getScreenLockDurationInSeconds = u),
      (l.setScreenLockDurationInSeconds = c),
      (l.setScreenLockIvString = d),
      (l.getScreenLockIvString = m),
      (l.setScreenLockSalt = p),
      (l.getScreenLockSalt = _),
      (l.setScreenLockIterations = f),
      (l.getScreenLockIterations = h),
      (l.getScreenUnlockTryCount = C),
      (l.setScreenUnlockTryCount = v));
  },
  98,
);
