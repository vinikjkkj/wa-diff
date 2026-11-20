__d(
  "WAWebUserPrefsScreenLock",
  [
    "WAArrayBufferUtils",
    "WABase64",
    "WABinary",
    "WAWebDbEncryptionKey",
    "WAWebEventEmitter",
    "WAWebPermanentStorage",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "WAWebX509Utils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))();
    function s() {
      var e;
      D(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
      var t = parseInt(
        String(
          (e = r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
          )) != null
            ? e
            : 0,
        ),
        10,
      );
      return t !== 0;
    }
    function u() {
      return (
        D(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        )
      );
    }
    function c() {
      var e;
      return (
        D(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
        (e = r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        )) != null
          ? e
          : 0
      );
    }
    function d(t) {
      (r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        t,
      ),
        e.trigger("change:duration", t));
    }
    function m(e) {
      r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV,
        e,
      );
    }
    function p() {
      return (
        D(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV,
        )
      );
    }
    function _(e) {
      return r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT,
        e,
        { shouldWriteToIdb: !1 },
      );
    }
    function f() {
      return (
        D(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT, !1),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT,
        )
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = T(),
            n = yield L(String(e), t);
          return r("WAWebUserPrefsStore").setUser(
            o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
            n + "_" + t,
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          D(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS);
          var e = r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
          );
          if (e == null) return null;
          if (typeof e == "number") return parseInt(e, 10);
          var t = e.split("_"),
            n = t[0],
            a = t[1];
          if (n == null || a == null) return null;
          var i = yield k(n, a);
          return parseInt(i, 10);
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          D(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
          var e = r("WAWebUserPrefsStore").getUser(
            o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
          );
          if (e == null) return 0;
          if (typeof e == "number") return parseInt(e, 10);
          var t = e.split("_"),
            n = t[0],
            a = t[1],
            i = yield k(n, a);
          return parseInt(i, 10);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = T(),
            a = yield L(String(e), n);
          t.aborted ||
            r("WAWebUserPrefsStore").setUser(
              o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
              a + "_" + n,
            );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Uint8Array(o("WABase64").decodeB64(t)),
            r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
            a = yield self.crypto.subtle.encrypt(
              { iv: n, name: "AES-CBC" },
              r.key,
              o("WAArrayBufferUtils").stringToArrayBuffer(e),
            );
          return o("WABase64").encodeB64(a);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Uint8Array(o("WABase64").decodeB64(t));
          yield o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit();
          var r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
            a = yield self.crypto.subtle.decrypt(
              { iv: n, name: "AES-CBC" },
              r.key,
              o("WABase64").decodeB64(e),
            );
          return o("WAWebX509Utils").arrayBufferToString(a);
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      var e = new Uint8Array(16);
      self.crypto.getRandomValues(e);
      var t = new (o("WABinary").Binary)(e).readByteArrayView(16);
      return o("WABase64").encodeB64(t);
    }
    function D(e, t) {
      var n = r("WAWebUserPrefsStore").get(e);
      if (n != null) {
        var o = t != null ? { shouldWriteToIdb: t } : null;
        (r("WAWebUserPrefsStore").setUser(e, n, o != null ? o : {}),
          r("WAWebPermanentStorage").removeItem(e));
      }
    }
    ((l.screenLockSettingsEventEmitter = e),
      (l.getScreenLockEnabled = s),
      (l.getScreenLockDurationForLogging = u),
      (l.getScreenLockDurationInSeconds = c),
      (l.setScreenLockDurationInSeconds = d),
      (l.setScreenLockIvString = m),
      (l.getScreenLockIvString = p),
      (l.setScreenLockSalt = _),
      (l.getScreenLockSalt = f),
      (l.setScreenLockIterations = g),
      (l.getScreenLockIterations = y),
      (l.getScreenUnlockTryCount = b),
      (l.setScreenUnlockTryCount = S));
  },
  98,
);
