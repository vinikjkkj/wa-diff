__d(
  "WAWebScheduledMsgActionLogger",
  [
    "WAJids",
    "WALogger",
    "WATimeUtils",
    "WAWebChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebScheduledMessageActionWamEvent",
    "WAWebScheduledMsgStore",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupRoleType",
    "WAWebWamEnumScheduledMessageActionType",
    "WAWebWamMsgUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      h(
        e,
        o("WAWebWamEnumScheduledMessageActionType")
          .SCHEDULED_MESSAGE_ACTION_TYPE.OPEN_SCHEDULE_DATE_TIME_PICKER,
        {},
      );
    }
    function d(e) {
      h(
        e,
        o("WAWebWamEnumScheduledMessageActionType")
          .SCHEDULED_MESSAGE_ACTION_TYPE.SELECT_DATE_TIME,
        {},
      );
    }
    function m(e, t) {
      var n = t.countBeforeAction,
        r = t.futureDurationSecs,
        a = t.toScheduledCount;
      h(
        e,
        o("WAWebWamEnumScheduledMessageActionType")
          .SCHEDULED_MESSAGE_ACTION_TYPE.TAP_SCHEDULE_BUTTON,
        {
          scheduledMessageCount: n,
          scheduledMessageFutureDurationSecs: r,
          scheduledMessageToScheduledCount: a,
        },
      );
    }
    function p(t, n) {
      var a = n.scheduledTimestampS,
        i = n.toScheduledCount;
      o("WAWebScheduledMsgStore")
        .getScheduledMessageCount(
          o("WAJids").unsafeCoerceToChatJid(t.id.toJid()),
        )
        .then(function (e) {
          m(t, {
            countBeforeAction: e,
            futureDurationSecs: Math.max(
              0,
              Math.floor(a - o("WATimeUtils").unixTime()),
            ),
            toScheduledCount: i,
          });
        })
        .catch(function (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][wam] tap-schedule count read failed: ",
                "",
              ])),
            r("getErrorSafe")(t),
          );
        });
    }
    function _(e, t) {
      var n = t.countBeforeAction,
        r = t.entrypoint;
      h(
        e,
        o("WAWebWamEnumScheduledMessageActionType")
          .SCHEDULED_MESSAGE_ACTION_TYPE.VIEW_SCHEDULED_MESSAGE_LIST,
        { scheduledMessageCount: n, scheduledMessageEntrypoint: r },
      );
    }
    function f(e, t) {
      o("WAWebScheduledMsgStore")
        .getScheduledMessageCount(
          o("WAJids").unsafeCoerceToChatJid(e.id.toJid()),
        )
        .then(function (n) {
          _(e, { countBeforeAction: n, entrypoint: t });
        })
        .catch(function (e) {
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[scheduled_msg][wam] view-list count read failed: ",
                "",
              ])),
            r("getErrorSafe")(e),
          );
        });
    }
    function g(e, t) {
      h(
        e,
        o("WAWebWamEnumScheduledMessageActionType")
          .SCHEDULED_MESSAGE_ACTION_TYPE.TAP_UNSCHEDULE_BUTTON,
        { scheduledMessageToUnscheduleCount: t },
      );
    }
    function h(e, t, n) {
      var r = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId();
      if (r == null) {
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[scheduled_msg][wam] Unified session ID is null",
            ])),
        );
        return;
      }
      new (o(
        "WAWebScheduledMessageActionWamEvent",
      ).ScheduledMessageActionWamEvent)(
        babelHelpers.extends({}, y(e), n, {
          scheduledMessageActionType: t,
          unifiedSessionId: r,
        }),
      ).commit();
    }
    function y(e) {
      var t = o("WAWebWamMsgUtils").getWamMessageTypeForScheduledMsg(e.id),
        n = e.groupMetadata;
      return !o("WAWebChatGetters").getIsGroup(e) || n == null
        ? { messageType: t }
        : {
            groupRole: n.participants.iAmAdmin()
              ? o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.ADMIN
              : o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.MEMBER,
            groupTypeClient: o("WAWebGroupType").groupTypeToGroupTypeClient(
              o("WAWebGroupMetadataGetters").getGroupType(n),
            ),
            messageType: t,
          };
    }
    ((l.logScheduledMsgOpenPicker = c),
      (l.logScheduledMsgSelectDateTime = d),
      (l.logScheduledMsgTapSchedule = m),
      (l.logScheduledMsgTapScheduleForChat = p),
      (l.logScheduledMsgViewList = _),
      (l.logScheduledMsgViewListForChat = f),
      (l.logScheduledMsgTapUnschedule = g));
  },
  98,
);
