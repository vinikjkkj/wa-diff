__d(
  "WAWebNewChatMessageCappingNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebIndividualNewChatMessageCappingLimitUtils",
    "WAWebMessageCappingWamEvent",
    "WAWebNux",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsNuxPreferences",
    "WAWebUserPrefsTypes",
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
            m = r.subscription_status,
            p = r.total_quota,
            _ = r.used_quota;
          try {
            (yield c({
              total_quota: p,
              used_quota: _,
              cycle_start_timestamp: l,
              cycle_end_timestamp: i,
              capping_status: a,
              ote_status: u,
              mv_status: s,
              server_sent_timestamp: d,
              subscription_status: m,
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
            s = e.subscription_status,
            u = e.total_quota,
            c = e.used_quota,
            d = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebIndividualNewChatMessageCappingLimitUtils")
                .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
            ),
            m =
              s == null
                ? void 0
                : o(
                    "WAWebIndividualNewChatMessageCappingLimitUtils",
                  ).getCappingSubscriptionStatusType(s.status);
          if (d == null || d.server_sent_timestamp < Number(l)) {
            var p, _;
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              (_ = o("WAWebIndividualNewChatMessageCappingLimitUtils"))
                .NEW_CHAT_MESSAGE_CAPPING_IDB_KEY,
              {
                capping_status: _.getCappingStatusType(t),
                ote_status: _.getCappingOTEStatusType(i),
                mv_status: _.getCappingMVStatusType(a),
                subscription_status:
                  s == null || m == null
                    ? void 0
                    : {
                        status: m,
                        name: o(
                          "WAWebIndividualNewChatMessageCappingLimitUtils",
                        ).getCappingSubscriptionName(s.name),
                      },
                total_quota: u,
                used_quota: Math.min(c, u),
                cycle_start_timestamp: Number(r),
                cycle_end_timestamp: Number(n),
                server_sent_timestamp: Number(l),
              },
            );
            var f =
              d == null || (p = d.subscription_status) == null
                ? void 0
                : p.status;
            m ===
              o("WAWebUserPrefsTypes")
                .NewChatMessageCappingSubscriptionStatusType.ACTIVE &&
              f !==
                o("WAWebUserPrefsTypes")
                  .NewChatMessageCappingSubscriptionStatusType.ACTIVE &&
              o("WAWebUserPrefsNuxPreferences").resetNux(
                o("WAWebNux").NUX.NCT_CAPPING_SUBSCRIPTION_TOAST,
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
                  total_quota: u,
                  used_quota: c,
                  cycle_start_timestamp: r,
                  cycle_end_timestamp: n,
                  capping_status: t,
                  ote_status: i,
                  mv_status: a,
                  subscription_status: s,
                  server_sent_timestamp: l,
                },
                client_capping_info: d,
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
