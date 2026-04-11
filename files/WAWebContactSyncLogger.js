__d(
  "WAWebContactSyncLogger",
  ["WAWebContactSyncEventWamEvent", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = {
        UNKNOWN: 0,
        PERIODIC_SYNC: 6,
        CONTACT_SAVE: 7,
        CONVERSATION_CONTACT_ADD: 14,
        CONTACT_MUTATION_CONTACT_DELETE: 26,
        DM_FORCE_REFRESH: 41,
        STATUS_FORCE_REFRESH: 42,
        DEVICE_REQUEST: 48,
        BOT_REQUEST: 49,
        BUSINESS_CONTACT_CHAT: 56,
        DEBUG_TOOL: 61,
        DEBUG_FULL: 62,
        DEEPLINK: 101,
        CHAT_OPEN: 102,
        PRIVACY_MODE_CHANGE: 103,
        BUSINESS_BROADCAST: 104,
        USERNAME_KEY_VERIFICATION: 105,
        UNKNOWN_CONTACT_SEARCH: 106,
        UNKNOWN_CONTACT_SEARCH_GLOBAL: 107,
        UNKNOWN_CONTACT_SEARCH_GROUP: 108,
        UNKNOWN_CONTACT_SEARCH_CONTACT_LIST: 109,
        UNKNOWN_CONTACT_SEARCH_NEW_CHAT: 110,
        UNKNOWN_CONTACT_SEARCH_DIALER: 111,
      },
      s = {
        CONTACT: 0,
        STATUS: 2,
        PICTURE: 3,
        BUSINESS: 4,
        DEVICE: 5,
        DISAPPEARING_MODE: 7,
        LID: 8,
        BOT: 9,
        USERNAME: 10,
      };
    function u() {
      return {
        statusChange: 0,
        deviceChange: 0,
        businessChange: 0,
        disappearingModeChange: 0,
      };
    }
    function c(e) {
      var t, n, r, o;
      return {
        statusChange: (t = e.statusChange) != null ? t : 0,
        deviceChange: (n = e.deviceChange) != null ? n : 0,
        businessChange: (r = e.businessChange) != null ? r : 0,
        disappearingModeChange: (o = e.disappearingModeChange) != null ? o : 0,
      };
    }
    function d(e, t) {
      return (e + "_" + t).toUpperCase();
    }
    var m = {
      contact: s.CONTACT,
      status: s.STATUS,
      picture: s.PICTURE,
      business: s.BUSINESS,
      devices: s.DEVICE,
      disappearing_mode: s.DISAPPEARING_MODE,
      lid: s.LID,
      bot: s.BOT,
      username: s.USERNAME,
    };
    function p(e) {
      var t = 0;
      for (var n of e) {
        var r = n.getName();
        m[r] != null && (t |= 1 << m[r]);
      }
      return t;
    }
    function _(e) {
      var t = 0;
      for (var n of Object.keys(e)) e[n] && m[n] != null && (t |= 1 << m[n]);
      return t;
    }
    var f = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.createEventContext = function (t) {
            return {
              startTimestamp: Date.now(),
              syncType: t.syncType,
              requestOrigin: t.requestOrigin,
              requestedCount: t.requestedCount,
              requestProtocolBitmask: p(t.protocols),
            };
          }),
          (t.logSuccess = function (t, n, r) {
            var e = Date.now(),
              a = _(n.error),
              i = new (o(
                "WAWebContactSyncEventWamEvent",
              ).ContactSyncEventWamEvent)({
                contactSyncType: t.syncType,
                contactSyncRequestOrigin: t.requestOrigin,
                contactSyncSuccess: !0,
                contactSyncNoop: t.requestedCount === 0,
                contactSyncStartTimestamp: Math.round(t.startTimestamp / 1e3),
                contactSyncEndTimestamp: Math.round(e / 1e3),
                contactSyncLatency: e - t.startTimestamp,
                contactSyncRequestedCount: t.requestedCount,
                contactSyncResponseCount: n.list.length,
                contactSyncRequestProtocol: t.requestProtocolBitmask,
                contactSyncFailureProtocol: a,
                contactSyncStatusResponseNew:
                  r == null ? void 0 : r.statusChange,
                contactSyncDeviceResponseNew:
                  r == null ? void 0 : r.deviceChange,
                contactSyncBusinessResponseNew:
                  r == null ? void 0 : r.businessChange,
                contactSyncDisappearingModeResponseNew:
                  r == null ? void 0 : r.disappearingModeChange,
              });
            i.commit();
          }),
          (t.logFailure = function (t, n, r) {
            var e,
              a = Date.now(),
              i = r ? _(r.error) : 0,
              l = new (o(
                "WAWebContactSyncEventWamEvent",
              ).ContactSyncEventWamEvent)({
                contactSyncType: t.syncType,
                contactSyncRequestOrigin: t.requestOrigin,
                contactSyncSuccess: !1,
                contactSyncNoop: !1,
                contactSyncErrorCode: n,
                contactSyncStartTimestamp: Math.round(t.startTimestamp / 1e3),
                contactSyncEndTimestamp: Math.round(a / 1e3),
                contactSyncLatency: a - t.startTimestamp,
                contactSyncRequestedCount: t.requestedCount,
                contactSyncResponseCount:
                  (e = r == null ? void 0 : r.list.length) != null ? e : 0,
                contactSyncRequestProtocol: t.requestProtocolBitmask,
                contactSyncFailureProtocol: i,
              });
            l.commit();
          }),
          (t.executeWithLogging = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                try {
                  return yield t();
                } catch (t) {
                  throw (this.logFailure(e, void 0, void 0), t);
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          e
        );
      })(),
      g = new f();
    ((l.SYNC_REQUEST_ORIGIN = e),
      (l.PROTOCOL_BIT = s),
      (l.createUpdateCounter = u),
      (l.createUpdateCounterWith = c),
      (l.getSyncTypeString = d),
      (l.computeFailureProtocolBitmask = _),
      (l.contactSyncLogger = g));
  },
  98,
);
