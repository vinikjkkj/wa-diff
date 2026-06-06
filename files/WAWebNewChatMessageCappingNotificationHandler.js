__d(
  "WAWebNewChatMessageCappingNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWamEnumMessageCappingActionType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
            messageCappingActionType: o("WAWebWamEnumMessageCappingActionType")
              .MESSAGE_CAPPING_ACTION_TYPE.API,
            userActionTarget: "capping_notification_received",
            extraAttributes: JSON.stringify({
              capping_info: n.xwa2_notify_new_chat_messages_capping_info_update,
            }),
          }).commit();
          var r = n.xwa2_notify_new_chat_messages_capping_info_update,
            a = r.capping_status,
            i = r.cycle_end_timestamp,
            l = r.cycle_start_timestamp,
            s = r.mv_status,
            u = r.ote_status,
            d = r.server_sent_timestamp,
            m = r.total_quota,
            p = r.used_quota;
          try {
            (yield c({
              total_quota: m,
              used_quota: p,
              cycle_start_timestamp: l,
              cycle_end_timestamp: i,
              capping_status: a,
              ote_status: u,
              mv_status: s,
              server_sent_timestamp: d,
            }),
              o("WAWebBackendApi").frontendFireAndForget(
                "individualNewChatMessageCappingStateChange",
                {},
              ));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][msg-capping] handle notif failed",
                  ])),
              )
              .sendLogs(
                "mex-handle-individual-new-chat-message-capping-notification-failed",
              );
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.capping_status,
            n = e.cycle_end_timestamp,
            r = e.cycle_start_timestamp,
            a = e.mv_status,
            i = e.ote_status,
            l = e.server_sent_timestamp,
            s = e.total_quota,
            u = e.used_quota,
            c = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebIndividualNewChatMessageCappingLimitUtils")
                .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
            );
          if (c == null || c.server_sent_timestamp < Number(l)) {
            var d;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              (d = o("WAWebIndividualNewChatMessageCappingLimitUtils"))
                .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
              {
                capping_status: d.getCappingStatusType(t),
                ote_status: d.getCappingOTEStatusType(i),
                mv_status: d.getCappingMVStatusType(a),
                total_quota: s,
                used_quota: Math.min(u, s),
                cycle_start_timestamp: Number(r),
                cycle_end_timestamp: Number(n),
                server_sent_timestamp: Number(l),
              },
            );
          } else
            new (o("WAWebMessageCappingWamEvent").MessageCappingWamEvent)({
              messageCappingActionType: o(
                "WAWebWamEnumMessageCappingActionType",
              ).MESSAGE_CAPPING_ACTION_TYPE.DEBUG,
              userActionTarget: "capping_info_not_saved_on_client",
              extraAttributes: JSON.stringify({
                reason: "stale_data",
                server_capping_info: {
                  total_quota: s,
                  used_quota: u,
                  cycle_start_timestamp: r,
                  cycle_end_timestamp: n,
                  capping_status: t,
                  ote_status: i,
                  mv_status: a,
                  server_sent_timestamp: l,
                },
                client_capping_info: c,
              }),
            }).commit();
        })),
        d.apply(this, arguments)
      );
    }
    ((l.mexHandleNewChatMessageCappingNotification = s),
      (l.handleCapStatusUpdate = c));
  },
  98,
);
