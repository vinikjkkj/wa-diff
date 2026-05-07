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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 3e4,
      p = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function _() {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAPromiseTimeout").promiseTimeout(
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (yield o("WAWebAccountLinkingAPI").ping(),
                  yield o("WAWebAccountLinkingAPI").fetchServiceData());
              })(),
              m,
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
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                yield o("WAWebAccountLinkingHandler").handlePausedState();
                break;
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.STATE_DELETED:
                yield p.purgeWaffleData();
                break;
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.CLIENT_RESYNC:
                (o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE-TRACE] handleResyncState triggered by CLIENT_RESYNC notification",
                      ])),
                  )
                  .sendLogs("waffle-nonce-trace-notification", { sampling: 1 }),
                  yield o("WAWebAccountLinkingHandler").handleResyncState(
                    t.value.notificationMetadataSyncDelay,
                  ));
                break;
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.ACCOUNT_UNLINKED:
                yield o("WAWebAccountLinkingHandler").handleUnlinkedState(
                  o("WAWebAccountLinkingConstants").AccountUnlinkType.cast(
                    t.value.notificationMetadataType,
                  ),
                );
                break;
              case o("WAWebAccountLinkingConstants")
                .AccountLinkingNotificationEvent.ACCOUNT_LINKED:
                t.value.notificationMetadataClientResync === "true" &&
                  (yield _());
                break;
              default:
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Unhandled account linking notification event",
                    ])),
                );
                break;
            }
          } else
            o("WALogger").ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] Failed to parse account linking notification",
                ])),
            );
        })),
        h.apply(this, arguments)
      );
    }
    l.handleAccountLinkingNotification = g;
  },
  98,
);
