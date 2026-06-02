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
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      S(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
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
        S(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        )
      );
    }
    function u() {
      var e;
      return (
        S(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
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
        S(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV),
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
        S(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT, !1),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT,
        )
      );
    }
    async function f(e) {
      var t = v(),
        n = await C(String(e), t);
      return r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
        n + "_" + t,
      );
    }
    async function g() {
      S(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS);
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
      );
      if (e == null) return null;
      if (typeof e == "number") return parseInt(e, 10);
      var t = e.split("_"),
        n = t[0],
        a = t[1];
      if (n == null || a == null) return null;
      var i = await b(n, a);
      return parseInt(i, 10);
    }
    async function h() {
      S(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
      );
      if (e == null) return 0;
      if (typeof e == "number") return parseInt(e, 10);
      var t = e.split("_"),
        n = t[0],
        a = t[1],
        i = await b(n, a);
      return parseInt(i, 10);
    }
    async function y(e, t) {
      var n = v(),
        a = await C(String(e), n);
      t.aborted ||
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
          a + "_" + n,
        );
    }
    async function C(e, t) {
      var n = new Uint8Array(o("WABase64").decodeB64(t)),
        r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
        a = await self.crypto.subtle.encrypt(
          { iv: n, name: "AES-CBC" },
          r.key,
          o("WAArrayBufferUtils").stringToArrayBuffer(e),
        );
      return o("WABase64").encodeB64(a);
    }
    async function b(e, t) {
      var n = new Uint8Array(o("WABase64").decodeB64(t));
      await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit();
      var r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
        a = await self.crypto.subtle.decrypt(
          { iv: n, name: "AES-CBC" },
          r.key,
          o("WABase64").decodeB64(e),
        );
      return o("WAWebDirectConnectionX509").arrayBufferToString(a);
    }
    function v() {
      var e = new Uint8Array(16);
      self.crypto.getRandomValues(e);
      var t = new (o("WABinary").Binary)(e).readByteArrayView(16);
      return o("WABase64").encodeB64(t);
    }
    function S(e, t) {
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
      (l.getScreenLockIterations = g),
      (l.getScreenUnlockTryCount = h),
      (l.setScreenUnlockTryCount = y));
  },
  98,
);
