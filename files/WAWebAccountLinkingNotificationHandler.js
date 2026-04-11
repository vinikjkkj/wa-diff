__d(
  "WAWebAccountLinkingNotificationHandler",
  [
    "WALogger",
    "WASmaxInWaffleWFNotificationRequest",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebAccountLinkingGatingUtils").accountLinkingEnabled()) {
            var n = o(
              "WASmaxInWaffleWFNotificationRequest",
            ).parseWFNotificationRequest(t);
            if (n.success) {
              var r = o(
                "WAWebAccountLinkingConstants",
              ).AccountLinkingNotificationEvent.cast(
                n.value.notificationMetadataEvent,
              );
              if (r == null) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Failed to parse account linking notification",
                    ])),
                );
                return;
              }
              switch (r) {
                case o("WAWebAccountLinkingConstants")
                  .AccountLinkingNotificationEvent.STATE_SUSPENDED:
                  yield o("WAWebAccountLinkingHandler").handlePausedState();
                  break;
                case o("WAWebAccountLinkingConstants")
                  .AccountLinkingNotificationEvent.STATE_DELETED:
                  yield o("WAWebAccountLinkingHandler").handleUnlinkedState();
                  break;
                case o("WAWebAccountLinkingConstants")
                  .AccountLinkingNotificationEvent.CLIENT_RESYNC:
                  yield o("WAWebAccountLinkingHandler").handleResyncState();
                  break;
                case o("WAWebAccountLinkingConstants")
                  .AccountLinkingNotificationEvent.ACCOUNT_UNLINKED:
                  n.value.notificationMetadataClientResync === "true" &&
                    (yield o("WAWebAccountLinkingHandler").handleResyncState());
                  break;
                case o("WAWebAccountLinkingConstants")
                  .AccountLinkingNotificationEvent.ACCOUNT_LINKED:
                  n.value.notificationMetadataClientResync === "true" &&
                    (yield o("WAWebAccountLinkingHandler").handleResyncState());
                  break;
                default:
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Unhandled account linking notification event",
                      ])),
                  );
                  break;
              }
            } else
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to parse account linking notification",
                  ])),
              );
          }
        })),
        d.apply(this, arguments)
      );
    }
    l.handleAccountLinkingNotification = c;
  },
  98,
);
