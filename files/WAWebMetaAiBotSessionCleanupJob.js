__d(
  "WAWebMetaAiBotSessionCleanupJob",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendEventBus",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
    "WAWebDBDeviceListFanout",
    "WAWebSignalProtocolStore",
    "WAWebSignalSessionApi",
    "WAWebUserPrefsBot",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m() {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            o("WAWebABProps").getABPropConfigValue(
              "ai_meta_ai_prekey_cleanup_enabled",
            ) &&
            o("WAWebBotBaseGating").isBotEnabled()
          ) {
            if (
              o("WATimeUtils").unixTimeMs() -
                o("WAWebUserPrefsBot").getMetaAiBotSessionLastCleanupTs() <
              o("WATimeUtils").DAY_MILLISECONDS
            ) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] skip cleanup; last run within interval",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] running bot session cleanup",
                ])),
            );
            try {
              (yield f(),
                yield o("WAWebUserPrefsBot").setMetaAiBotSessionLastCleanupTs(
                  o("WATimeUtils").unixTimeMs(),
                ));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to clean up bot session: ",
                      "",
                    ])),
                  e,
                )
                .verbose()
                .sendLogs("fbid-bot-session-cleanup-failed", {
                  sendLogsType:
                    o("WALogger").SendLogsType.CRASH_OR_UNRECOVERABLE_ERROR_SAD,
                });
            }
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _() {
      o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryEnd(
        function () {
          m();
        },
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o("WAWebDBDeviceListFanout").getFanOutList({
            wids: [
              o("WAWebBotUtils").META_BOT_PN_WID,
              o("WAWebBotUtils").META_BOT_FBID_WID,
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            ],
          });
          if (e.length !== 0) {
            var t = yield o("WAWebSignalSessionApi").hasSignalSessions(e),
              r = e.filter(function (e, n) {
                return t[n];
              });
            r.length !== 0 &&
              (yield (d || (d = n("Promise"))).all(
                r.map(function (e) {
                  return o("WAWebSignalSessionApi").deleteRemoteSession(e);
                }),
              ),
              yield o("WAWebSignalProtocolStore")
                .getSignalProtocolStore()
                .flushBufferToDiskIfNotMemOnlyMode(),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] cleaned up ",
                    " stale bot session(s)",
                  ])),
                r.length,
              ));
          }
        })),
        g.apply(this, arguments)
      );
    }
    ((l.maybeCleanupMetaAiBotSession = m),
      (l.registerMetaAiBotSessionCleanupOnResume = _));
  },
  98,
);
