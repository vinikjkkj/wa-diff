__d(
  "WAWebVoipCallLogOrderingContext",
  [
    "WAWebCallLogMsgData.flow",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebDBMessageStoreUtils",
    "WAWebDBMessageUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "WAWebViewModeUtils",
    "WAWebVoipCallLogPlaceholderTracker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 200,
      u = new Set([
        (e = o("WAWebCommonMsgSubtypeTypes")).MsgSubtype.EphemeralSetting,
        e.MsgSubtype.SharePhoneNumber,
        e.MsgSubtype.EventEditDecrypted,
        e.MsgSubtype.LimitSharingSystemMessage,
        e.MsgSubtype.StatusMentionMessage,
        e.MsgSubtype.StatusGroupMentionMessage,
      ]);
    async function c(e, t, n, r) {
      var o,
        a = await Promise.all([
          _(e, t, n, !0),
          n == null
            ? Promise.resolve({ rows: [], scanLimited: !1 })
            : _(e, t, n, !1),
        ]),
        i = a[0],
        l = a[1],
        s =
          (o = l.rows.find(function (e) {
            return !p(e);
          })) == null
            ? void 0
            : o.t,
        u = i.scanLimited ? null : f(i.rows, s);
      return {
        isOutOfOrder: (u != null && u > r) || (s != null && s < r),
        predecessorT: u,
        successorT: s,
        scanLimited: i.scanLimited || l.scanLimited,
      };
    }
    function d(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG &&
        e.callOutcome !== o("WAWebCallLogMsgData.flow").CallOutcome.Ongoing &&
        o("WAWebViewModeUtils").isViewModeVisibleInSurface(
          o("WAWebViewMode.flow").ViewModeSurface.CHAT,
          e.viewMode,
        )
      );
    }
    function m(e) {
      return e.switchEntryCallLogTime === "pending" ||
        (e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
          (e.subtype == null || !u.has(e.subtype)))
        ? !1
        : o("WAWebDBMessageStoreUtils").shouldRenderInUI(e, []) &&
            !o("WAWebDBMessageStoreUtils").isInvalidCAGSystemMessage(e) &&
            o("WAWebViewModeUtils").isViewModeVisibleInSurface(
              o("WAWebViewMode.flow").ViewModeSurface.CHAT,
              e.viewMode,
            );
    }
    function p(e) {
      return (
        e.internalId != null &&
        d(e) &&
        !o("WAWebVoipCallLogPlaceholderTracker").isPlaceholderPending(
          r("WAWebMsgKey").fromString(e.id).id,
        )
      );
    }
    async function _(e, t, n, r) {
      var a = [],
        i = 0,
        l = !1;
      return (
        await e.between(
          ["internalId"],
          r
            ? o("WAWebDBMessageUtils").beginningOfChat(t)
            : n != null
              ? n
              : o("WAWebDBMessageUtils").beginningOfChat(t),
          r && n != null ? n : o("WAWebDBMessageUtils").endOfChat(t),
          {
            reverse: r,
            lowerInclusive: !1,
            upperInclusive: !1,
            shouldDecrypt: !1,
          },
          function (e) {
            return ((i += 1), m(e) && (a.push(e), (l = !p(e))), l || i >= s);
          },
        ),
        { rows: a, scanLimited: !l && i >= s }
      );
    }
    function f(e, t) {
      var n = null;
      return (
        Array.from(e)
          .reverse()
          .forEach(function (e) {
            (p(e) && ((n != null && e.t < n) || (t != null && e.t > t))) ||
              (n = e.t);
          }),
        n
      );
    }
    ((l.MAX_CALL_LOG_ORDERING_NEIGHBOR_ROWS = s),
      (l.getCallLogOrdering = c),
      (l.isTerminalVisibleCallLog = d),
      (l.isVisibleOrderingRow = m),
      (l.canRepairCallLogOrdering = p));
  },
  98,
);
