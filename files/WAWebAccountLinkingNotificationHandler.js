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
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                  (o("WALogger")
                    .LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAFFLE-TRACE] handleResyncState triggered by CLIENT_RESYNC notification",
                        ])),
                    )
                    .sendLogs("waffle-nonce-trace-notification", {
                      sampling: 1,
                    }),
                    yield o("WAWebAccountLinkingHandler").handleResyncState());
                  break;
                case o("WAWebAccountLinkingConstants")
                  .AccountLinkingNotificationEvent.ACCOUNT_UNLINKED:
                  n.value.notificationMetadataClientResync === "true" &&
                    (o("WALogger")
                      .LOG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE-TRACE] handleResyncState triggered by ACCOUNT_UNLINKED notification (clientResync=true)",
                          ])),
                      )
                      .sendLogs("waffle-nonce-trace-notification", {
                        sampling: 1,
                      }),
                    yield o("WAWebAccountLinkingHandler").handleResyncState());
                  break;
                case o("WAWebAccountLinkingConstants")
                  .AccountLinkingNotificationEvent.ACCOUNT_LINKED:
                  n.value.notificationMetadataClientResync === "true" &&
                    (o("WALogger")
                      .LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE-TRACE] handleResyncState triggered by ACCOUNT_LINKED notification (clientResync=true)",
                          ])),
                      )
                      .sendLogs("waffle-nonce-trace-notification", {
                        sampling: 1,
                      }),
                    yield o("WAWebAccountLinkingHandler").handleResyncState());
                  break;
                default:
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] Unhandled account linking notification event",
                      ])),
                  );
                  break;
              }
            } else
              o("WALogger").ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] Failed to parse account linking notification",
                  ])),
              );
          }
        })),
        _.apply(this, arguments)
      );
    }
    l.handleAccountLinkingNotification = p;
  },
  98,
);
