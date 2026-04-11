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
      if (
        !o(
          "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
        ).isIndividualNewChatMessageCappingEnabled()
      )
        return !1;
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (t == null) return !1;
      var n = o("WATimeUtils").unixTime(),
        r = n > t.cycle_end_timestamp;
      return r
        ? (R(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE), !1)
        : t.capping_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.CAPPED;
    }
    function u() {
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
    function c() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
    }
    function d(e) {
      var t = e.chat,
        n = e.contact;
      return !o("WAWebContactGetters").getIsUser(n) ||
        o("WAWebContactGetters").getIsMe(n) ||
        o("WAWebContactGetters").getIsEnterprise(n) ||
        o("WAWebContactGetters").getIsSupportAccount(n) ||
        n.id.isBot() ||
        o("WAWebContactGetters").getIsHosted(n) ||
        o("WAWebContactGetters").getIsBroadcast(n) ||
        o("WAWebContactGetters").getIsPSA(n)
        ? !0
        : (t == null ? void 0 : t.getTcToken()) != null;
    }
    function m(e) {
      var t;
      return (t = o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.cast(
        e,
      )) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE;
    }
    function p(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingOTEStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType.ELIGIBLE;
    }
    function _(e) {
      var t;
      return (t = o(
        "WAWebUserPrefsTypes",
      ).NewChatMessageCappingMVStatusType.cast(e)) != null
        ? t
        : o("WAWebUserPrefsTypes").NewChatMessageCappingMVStatusType.NOT_ACTIVE;
    }
    function f() {
      if (
        !o(
          "WAWebIndividualNewChatMessageCappingLimitGatingUtils",
        ).isIndividualNewChatMessageCappingEnabled()
      )
        return !1;
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (t == null) return !1;
      var n = o("WATimeUtils").unixTime(),
        r = n > t.cycle_end_timestamp;
      return r
        ? (R(o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType.NONE), !1)
        : t.capping_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
              .FIRST_WARNING ||
            t.capping_status ===
              o("WAWebUserPrefsTypes").NewChatMessageCappingStatusType
                .SECOND_WARNING;
    }
    function g() {
      return f() ? u() : null;
    }
    function h() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      return t == null || t.total_quota === 0
        ? 0
        : Math.min(100, Math.max(0, (t.used_quota / t.total_quota) * 100));
    }
    function y() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (t == null || t.cycle_end_timestamp === 0) return "";
      var n = new Date(t.cycle_end_timestamp * 1e3);
      return n.toLocaleDateString(void 0, {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
    function C() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      return t == null
        ? !1
        : t.ote_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType
              .ELIGIBLE;
    }
    function b() {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      return t == null
        ? !1
        : t.ote_status ===
            o("WAWebUserPrefsTypes").NewChatMessageCappingOTEStatusType
              .ACTIVE_IN_CURRENT_CYCLE;
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                ote_status: p(t.ote_status),
                mv_status: _(t.mv_status),
                capping_status: m(t.capping_status),
              }),
            ));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
          n != null &&
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              e,
              babelHelpers.extends({}, n, { capping_status: t }),
            ));
        })),
        L.apply(this, arguments)
      );
    }
    ((l.NEW_CHAT_MESSAGE_CAPPING_IDB_KEY = e),
      (l.isUserCapped = s),
      (l.getCappingStatus = u),
      (l.getCappingData = c),
      (l.canSendMsgWhileCapped = d),
      (l.getCappingStatusType = m),
      (l.getCappingOTEStatusType = p),
      (l.getCappingMVStatusType = _),
      (l.isUserWarned = f),
      (l.getCappingWarningLevel = g),
      (l.getUsagePercentage = h),
      (l.getCycleEndDateFormatted = y),
      (l.isOTEEligible = C),
      (l.isOTEActive = b),
      (l.updateCappingDataFromOTEResponse = v),
      (l.resetCappingStatus = R));
  },
  98,
);
