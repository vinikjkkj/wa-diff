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
        r("WAWebUserPrefsDebugKeys").DEBUG_READ_RECEIPT,
        e,
      );
    }
    function c() {
      return r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_READ_RECEIPT,
      );
    }
    function d(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_PASSIVE_MODE,
        e,
      );
    }
    function m() {
      return r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_PASSIVE_MODE,
      );
    }
    function p(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_ENABLE_OFFLINE_MOCK,
        e,
      );
    }
    function _() {
      return !!r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_ENABLE_OFFLINE_MOCK,
      );
    }
    function f(e) {
      return r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_OFFLINE_MOCK_TRAFFIC,
        e,
      );
    }
    function g() {
      return r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").DEBUG_OFFLINE_MOCK_TRAFFIC,
      );
    }
    function h(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_DECRYPT_FAIL,
        e,
      );
    }
    function y() {
      return s(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_DECRYPT_FAIL,
        ),
      );
    }
    var C = new Map();
    function b(e, t) {
      C.set(e.user, t);
    }
    function v(e) {
      var t;
      return (t = C.get(e.user)) != null ? t : !1;
    }
    function S(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_DO_NOT_SEND_RETRY_RECEIPT,
        e,
      );
    }
    function R() {
      return s(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_DO_NOT_SEND_RETRY_RECEIPT,
        ),
      );
    }
    function L(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_ROUTING_TOKEN,
        e,
      );
    }
    function E() {
      return e(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_ROUTING_TOKEN,
        ),
      );
    }
    function k(e) {
      var t;
      if (e == null) {
        r("WAWebUserPrefsStore").set(
          r("WAWebUserPrefsDebugKeys").DEBUG_ONLY_DEFAULT_BOT_OVERIDE,
          null,
        );
        return;
      }
      var n;
      (e.endsWith("@bot") ? (n = e) : (n = e + "@c.us"),
        (t = o("WAWebWidFactory").createWid(n)) != null &&
          t.isBot() &&
          r("WAWebUserPrefsStore").set(
            r("WAWebUserPrefsDebugKeys").DEBUG_ONLY_DEFAULT_BOT_OVERIDE,
            n,
          ));
    }
    function I() {
      return e(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_ONLY_DEFAULT_BOT_OVERIDE,
        ),
      );
    }
    function T(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").DEBUG_IGNORE_PARTICIPANT_ADD,
        e,
      );
    }
    function D() {
      return s(
        r("WAWebUserPrefsStore").get(
          r("WAWebUserPrefsDebugKeys").DEBUG_IGNORE_PARTICIPANT_ADD,
        ),
      );
    }
    function x(e) {
      r("WAWebUserPrefsStore").set(
        r("WAWebUserPrefsDebugKeys").LID_MIGRATION_DEBUG_MODE,
        e,
      );
    }
    function $() {
      return !!r("WAWebUserPrefsStore").get(
        r("WAWebUserPrefsDebugKeys").LID_MIGRATION_DEBUG_MODE,
      );
    }
    ((l.setDebugReadReceipt = u),
      (l.getDebugReadReceipt = c),
      (l.setDebugPassiveMode = d),
      (l.getDebugPassiveMode = m),
      (l.setDebugEnableOfflineMock = p),
      (l.getDebugEnableOfflineMock = _),
      (l.setDebugOfflineMockTraffic = f),
      (l.getDebugOfflineMockTraffic = g),
      (l.setDebugDecryptFail = h),
      (l.getDebugDecryptFail = y),
      (l.setDebugEncryptFail = b),
      (l.getDebugEncryptFail = v),
      (l.setDebugDoNotSendRetryReceipt = S),
      (l.getDebugDoNotSendRetryReceipt = R),
      (l.setDebugRoutingTokenPref = L),
      (l.getDebugRoutingTokenPref = E),
      (l.setDebugDefaultBotOverride = k),
      (l.getDebugDefaultBotOverride = I),
      (l.setDebugIgnoreParticipantAdd = T),
      (l.getDebugIgnoreParticipantAdd = D),
      (l.setLidMigrationDebugMode = x),
      (l.getLidMigrationDebugMode = $));
  },
  98,
);
