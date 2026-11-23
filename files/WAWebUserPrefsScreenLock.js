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
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WAWebEventEmitter"))();
    function s() {
      var e;
      R(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS);
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
        R(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS,
        )
      );
    }
    function c() {
      var e;
      return (
        R(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_DURATION_SECONDS),
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
        R(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_IV),
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
        R(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT, !1),
        r("WAWebUserPrefsStore").getUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_SALT,
        )
      );
    }
    async function g(e) {
      var t = S(),
        n = await b(String(e), t);
      return r("WAWebUserPrefsStore").setUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
        n + "_" + t,
      );
    }
    async function h() {
      R(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS);
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_LOCK_ITERATIONS,
      );
      if (e == null) return null;
      if (typeof e == "number") return parseInt(e, 10);
      var t = e.split("_"),
        n = t[0],
        a = t[1];
      if (n == null || a == null) return null;
      var i = await v(n, a);
      return parseInt(i, 10);
    }
    async function y() {
      R(o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT);
      var e = r("WAWebUserPrefsStore").getUser(
        o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
      );
      if (e == null) return 0;
      if (typeof e == "number") return parseInt(e, 10);
      var t = e.split("_"),
        n = t[0],
        a = t[1],
        i = await v(n, a);
      return parseInt(i, 10);
    }
    async function C(e, t) {
      var n = S(),
        a = await b(String(e), n);
      t.aborted ||
        r("WAWebUserPrefsStore").setUser(
          o("WAWebUserPrefsKeys").MD_KEYS.SCREEN_UNLOCK_TRY_COUNT,
          a + "_" + n,
        );
    }
    async function b(e, t) {
      var n = new Uint8Array(o("WABase64").decodeB64(t)),
        r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
        a = await self.crypto.subtle.encrypt(
          { iv: n, name: "AES-CBC" },
          r.key,
          o("WAArrayBufferUtils").stringToArrayBuffer(e),
        );
      return o("WABase64").encodeB64(a);
    }
    async function v(e, t) {
      var n = new Uint8Array(o("WABase64").decodeB64(t));
      await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForInit();
      var r = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
        a = await self.crypto.subtle.decrypt(
          { iv: n, name: "AES-CBC" },
          r.key,
          o("WABase64").decodeB64(e),
        );
      return o("WAWebX509Utils").arrayBufferToString(a);
    }
    function S() {
      var e = new Uint8Array(16);
      self.crypto.getRandomValues(e);
      var t = new (o("WABinary").Binary)(e).readByteArrayView(16);
      return o("WABase64").encodeB64(t);
    }
    function R(e, t) {
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
      (l.getScreenLockIterations = h),
      (l.getScreenUnlockTryCount = y),
      (l.setScreenUnlockTryCount = C));
  },
  98,
);
