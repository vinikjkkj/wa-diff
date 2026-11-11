__d(
  "WAWebIndividualNewChatMessageCappingLimitUtils",
  [
    "WATimeUtils",
    "WAWebContactGetters",
    "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
    "WAWebStateUtils",
    "WAWebTrustedContactsUtils",
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
        ? (T(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE), !1)
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
        n = e.contact,
        r = t == null ? null : o("WAWebStateUtils").unproxy(t);
      return f({
        contact: n,
        tcToken: r == null ? void 0 : r.tcToken,
        tcTokenTimestamp: r == null ? void 0 : r.tcTokenTimestamp,
      });
    }
    function f(e) {
      var t = e.contact,
        n = e.tcToken,
        r = e.tcTokenTimestamp;
      return !o("WAWebContactGetters").getIsUser(t) ||
        o("WAWebContactGetters").getIsMe(t) ||
        o("WAWebContactGetters").getIsEnterprise(t) ||
        o("WAWebContactGetters").getIsSupportAccount(t) ||
        t.id.isBot() ||
        o("WAWebContactGetters").getIsBroadcast(t) ||
        o("WAWebContactGetters").getIsPSA(t)
        ? !0
        : n != null &&
            r != null &&
            !o("WAWebTrustedContactsUtils").isTokenExpired(
              r,
              o("WAWebTrustedContactsUtils").TcTokenMode.Receiver,
            );
    }
    function g(e) {
      var t;
      return (t = o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.cast(
        e,
      )) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE;
    }
    function h(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingOTEStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType.ELIGIBLE;
    }
    function y(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingMVStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingMVStatusType.NOT_ACTIVE;
    }
    function C(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingSubscriptionStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionStatusType
            .NOT_ACTIVE;
    }
    function b(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingSubscriptionName.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingSubscriptionName
            .UNKNOWN;
    }
    function v() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (t == null) return !1;
      var n = o("WATimeUtils").unixTime(),
        r = n > t.cycle_end_timestamp;
      return r
        ? (T(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE), !1)
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
    function S() {
      return v() ? m() : null;
    }
    function R() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      return t == null || t.total_quota === 0
        ? 0
        : Math.min(100, Math.max(0, (t.used_quota / t.total_quota) * 100));
    }
    function L(t) {
      var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (n == null || n.cycle_end_timestamp === 0) return "";
      var r = new Date(n.cycle_end_timestamp * 1e3);
      return r.toLocaleDateString(t, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
    function E() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      return t == null
        ? !1
        : t.ote_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType
              .ELIGIBLE;
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                ote_status: h(t.ote_status),
                mv_status: y(t.mv_status),
                capping_status: g(t.capping_status),
              }),
            ));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
          n != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              e,
              babelHelpers.extends({}, n, { capping_status: t }),
            ));
        })),
        D.apply(this, arguments)
      );
    }
    ((l.NEW_CHAT_MESSAGE_CAPPING_IDB_KEY = e),
      (l.isUserCapped = s),
      (l.shouldShowNewChatsStartedSettingsEntry = u),
      (l.clearCappingData = c),
      (l.getCappingStatus = m),
      (l.getCappingData = p),
      (l.canSendMsgWhileCapped = _),
      (l.canSendMsgWhileCappedFor = f),
      (l.getCappingStatusType = g),
      (l.getCappingOTEStatusType = h),
      (l.getCappingMVStatusType = y),
      (l.getCappingSubscriptionStatusType = C),
      (l.getCappingSubscriptionName = b),
      (l.isUserWarned = v),
      (l.getCappingWarningLevel = S),
      (l.getUsagePercentage = R),
      (l.getCycleEndDateFormatted = L),
      (l.isOTEEligible = E),
      (l.updateCappingDataFromOTEResponse = k),
      (l.resetCappingStatus = T));
  },
  98,
);
