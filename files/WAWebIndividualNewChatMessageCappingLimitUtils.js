__d(
  "WAWebIndividualNewChatMessageCappingLimitUtils",
  [
    "WATimeUtils",
    "WAWebContactGetters",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "WANewChatMessageCappingData";
    function s() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (t == null) return !1;
      var n = o("WATimeUtils").unixTime(),
        r = n > t.cycle_end_timestamp;
      return r
        ? (I(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE), !1)
        : t.capping_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.CAPPED &&
            o(
              "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
            ).isIndividualNewChatMessageCappingEnabled();
    }
    function u() {
      if (
        o(
          "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
        ).isCappingKillSwitched()
      )
        return !1;
      var e = p();
      return (
        e != null &&
        e.capping_status !==
          o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE
      );
    }
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(e);
        })),
        d.apply(this, arguments)
      );
    }
    function m() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e),
        n =
          typeof (t == null ? void 0 : t.capping_status) == "string"
            ? o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.cast(
                t.capping_status,
              )
            : null;
      return n != null
        ? n
        : o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE;
    }
    function p() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
    }
    function _(e) {
      var t = e.chat,
        n = e.contact;
      return !o("WAWebContactGetters").getIsUser(n) ||
        o("WAWebContactGetters").getIsMe(n) ||
        o("WAWebContactGetters").getIsEnterprise(n) ||
        o("WAWebContactGetters").getIsSupportAccount(n) ||
        n.id.isBot() ||
        o("WAWebContactGetters").getIsBroadcast(n) ||
        o("WAWebContactGetters").getIsPSA(n)
        ? !0
        : (t == null ? void 0 : t.getTcToken()) != null;
    }
    function f(e) {
      var t;
      return (t = o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.cast(
        e,
      )) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE;
    }
    function g(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingOTEStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType.ELIGIBLE;
    }
    function h(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingMVStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingMVStatusType.NOT_ACTIVE;
    }
    function y(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingSubscriptionStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionStatusType
            .NOT_ACTIVE;
    }
    function C(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingSubscriptionName.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionName
            .UNKNOWN;
    }
    function b() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (t == null) return !1;
      var n = o("WATimeUtils").unixTime(),
        r = n > t.cycle_end_timestamp;
      return r
        ? (I(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE), !1)
        : (t.capping_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
              .FIRST_WARNING ||
            t.capping_status ===
              o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
                .SECOND_WARNING) &&
            o(
              "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
            ).isIndividualNewChatMessageCappingEnabled();
    }
    function v() {
      return b() ? m() : null;
    }
    function S() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      return t == null || t.total_quota === 0
        ? 0
        : Math.min(100, Math.max(0, (t.used_quota / t.total_quota) * 100));
    }
    function R(t) {
      var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (n == null || n.cycle_end_timestamp === 0) return "";
      var r = new Date(n.cycle_end_timestamp * 1e3);
      return r.toLocaleDateString(t, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
    function L() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      return t == null
        ? !1
        : t.ote_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType
              .ELIGIBLE;
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
          n != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              e,
              babelHelpers.extends({}, n, {
                total_quota: t.total_quota,
                used_quota: t.used_quota,
                cycle_start_timestamp: Number(t.cycle_start_timestamp),
                cycle_end_timestamp: Number(t.cycle_end_timestamp),
                server_sent_timestamp: Number(t.server_sent_timestamp),
                ote_status: g(t.ote_status),
                mv_status: h(t.mv_status),
                capping_status: f(t.capping_status),
              }),
            ));
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
          n != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              e,
              babelHelpers.extends({}, n, { capping_status: t }),
            ));
        })),
        T.apply(this, arguments)
      );
    }
    ((l.NEW_CHAT_MESSAGE_CAPPING_IDB_KEY = e),
      (l.isUserCapped = s),
      (l.shouldShowNewChatsStartedSettingsEntry = u),
      (l.clearCappingData = c),
      (l.getCappingStatus = m),
      (l.getCappingData = p),
      (l.canSendMsgWhileCapped = _),
      (l.getCappingStatusType = f),
      (l.getCappingOTEStatusType = g),
      (l.getCappingMVStatusType = h),
      (l.getCappingSubscriptionStatusType = y),
      (l.getCappingSubscriptionName = C),
      (l.isUserWarned = b),
      (l.getCappingWarningLevel = v),
      (l.getUsagePercentage = S),
      (l.getCycleEndDateFormatted = R),
      (l.isOTEEligible = L),
      (l.updateCappingDataFromOTEResponse = E),
      (l.resetCappingStatus = I));
  },
  98,
);
