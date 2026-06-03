__d(
  "WAWebAccountLinkingNotificationHandler",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WASmaxInWaffleWFNotificationRequest",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingHandler",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 3e4,
      m = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o("WAWebAccountLinkingAPI").ping(),
                  yield o("WAWebAccountLinkingAPI").fetchServiceData());
              })(),
              d,
            );
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] ACCOUNT_LINKED resync failed: ",
                    "",
                  ])),
                t,
              )
              .tags("waffle", "account-linking", "linked")
              .sendLogs("waffle-linked-resync-failed", { sampling: 0.01 });
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
            "WASmaxInWaffleWFNotificationRequest",
          ).parseWFNotificationRequest(e);
          if (t.success) {
            var n = o(
              "WAWebAccountLinkingConstants",
            ).AccountLinkingNotificationEvent.cast(
              t.value.notificationMetadataEvent,
            );
            if (n == null) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to parse account linking notification",
                  ])),
              );
              return;
            }
            switch (n) {
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.STATE_SUSPENDED:
                (o("WAWebWaffleLifecycleWamLogger").logNotification({
                  linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                    .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.PAUSED,
                  traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                    .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_LINKED,
                }),
                  yield o("WAWebAccountLinkingHandler").handlePausedState());
                break;
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.STATE_DELETED:
                (o("WAWebWaffleLifecycleWamLogger").logPurge({
                  traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                    .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_UNLINKED,
                }),
                  yield m.purgeWaffleData());
                break;
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.CLIENT_RESYNC:
                (o("WAWebWaffleLifecycleWamLogger").logNotification({
                  traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                    .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
                }),
                  yield o("WAWebAccountLinkingHandler").handleResyncState(
                    t.value.notificationMetadataSyncDelay,
                  ));
                break;
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.ACCOUNT_UNLINKED: {
                var r = o(
                  "WAWebAccountLinkingConstants",
                ).AccountUnlinkType.cast(t.value.notificationMetadataType);
                (o("WAWebWaffleLifecycleWamLogger").logNotification({
                  traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                    .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_UNLINKED,
                }),
                  yield o("WAWebAccountLinkingHandler").handleUnlinkedState(r));
                break;
              }
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.ACCOUNT_LINKED:
                (o("WAWebWaffleLifecycleWamLogger").logNotification({
                  traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                    .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_LINKED,
                }),
                  t.value.notificationMetadataClientResync === "true" &&
                    (yield p()));
                break;
              default:
                o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Unhandled account linking notification event",
                    ])),
                );
                break;
            }
          } else
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to parse account linking notification",
                ])),
            );
        })),
        g.apply(this, arguments)
      );
    }
    l.handleAccountLinkingNotification = f;
  },
  98,
);
