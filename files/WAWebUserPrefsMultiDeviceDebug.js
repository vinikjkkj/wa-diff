__d(
  "WAWebUserPrefsMultiDeviceDebug",
  ["WAWebUserPrefsDebugKeys", "WAWebUserPrefsStore", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (typeof e == "string") return e;
    }
    function s(e) {
      if (typeof e == "number") return e;
    }
    function u(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_PASSIVE_MODE,
        e,
      );
    }
    function c() {
      return r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_PASSIVE_MODE,
      );
    }
    function d(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_ENABLE_OFFLINE_MOCK,
        e,
      );
    }
    function m() {
      return !!r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_ENABLE_OFFLINE_MOCK,
      );
    }
    function p(e) {
      return r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_OFFLINE_MOCK_TRAFFIC,
        e,
      );
    }
    function _() {
      return r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_OFFLINE_MOCK_TRAFFIC,
      );
    }
    function f(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_DECRYPT_FAIL,
        e,
      );
    }
    function g() {
      return s(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_DECRYPT_FAIL,
        ),
      );
    }
    function h(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_DO_NOT_SEND_RETRY_RECEIPT,
        e,
      );
    }
    function y() {
      return s(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_DO_NOT_SEND_RETRY_RECEIPT,
        ),
      );
    }
    function C(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_ROUTING_TOKEN,
        e,
      );
    }
    function b() {
      return e(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_ROUTING_TOKEN,
        ),
      );
    }
    function v(e) {
      var t;
      if (e == null) {
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_ONLY_DEFAULT_BOT_OVERRIDE,
          null,
        );
        return;
      }
      var n;
      (e.endsWith("@bot") ? (n = e) : (n = e + "@c.us"),
        (t = o("WAWebWidFactory").createWid(n)) != null &&
          t.isBot() &&
          r("WAWebUserPrefsStore").set(
            r("WAWebUserPrefsDebugKeys").DEBUG_ONLY_DEFAULT_BOT_OVERRIDE,
            n,
          ));
    }
    function S() {
      return e(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_ONLY_DEFAULT_BOT_OVERRIDE,
        ),
      );
    }
    function R(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").LID_MIGRATION_DEBUG_MODE,
        e,
      );
    }
    function L() {
      return !!r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").LID_MIGRATION_DEBUG_MODE,
      );
    }
    ((l.setDebugPassiveMode = u),
      (l.getDebugPassiveMode = c),
      (l.setDebugEnableOfflineMock = d),
      (l.getDebugEnableOfflineMock = m),
      (l.setDebugOfflineMockTraffic = p),
      (l.getDebugOfflineMockTraffic = _),
      (l.setDebugDecryptFail = f),
      (l.getDebugDecryptFail = g),
      (l.setDebugDoNotSendRetryReceipt = h),
      (l.getDebugDoNotSendRetryReceipt = y),
      (l.setDebugRoutingTokenPref = C),
      (l.getDebugRoutingTokenPref = b),
      (l.setDebugDefaultBotOverride = v),
      (l.getDebugDefaultBotOverride = S),
      (l.setLidMigrationDebugMode = R),
      (l.getLidMigrationDebugMode = L));
  },
  98,
);
