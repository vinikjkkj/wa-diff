__d(
  "WAWebInitializeBots",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotCanonicalRetry",
    "WAWebBotGating",
    "WAWebBotProfilesRestoreStatus",
    "WAWebPersistBotProfiles",
    "WAWebRequestBotProfiles",
    "WAWebRestoreBotProfilesFromDb",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebUserPrefsBot",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = r("requireDeferred")("WAWebRequestBotList").__setRef(
        "WAWebInitializeBots",
      ),
      v = r("JSResourceForInteraction")(
        "WAWebSyncMetaAiThreadAccountList",
      ).__setRef("WAWebInitializeBots"),
      S = 2e3;
    function R() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    var L = null;
    function E(e) {
      (L != null && self.clearTimeout(L),
        (L = self.setTimeout(function () {
          ((L = null), T());
        }, e * 1e3)));
    }
    function k(t) {
      var n = t.didFetchFromServer,
        r = t.durationMs;
      r <= S ||
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] initializeBots slow ms=",
                " fetchedFromServer=",
                "",
              ])),
            Math.round(r),
            n,
          )
          .sendLogs("bot-initialize-slow", { sampling: 0.01 });
    }
    var I = null;
    function T() {
      if (I != null) return I;
      var e = !1;
      return (
        (I = x()
          .then(function (t) {
            e = t;
          })
          .finally(function () {
            ((I = null), e && o("WAWebBotCanonicalRetry").armCanonicalRetry(D));
          })),
        I
      );
    }
    function D() {
      var e = I != null ? I : (C || (C = n("Promise"))).resolve();
      e.then(T, T).catch(function (e) {
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] canonical retry bot sync failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("bot-canonical-retry-sync-failed", { sampling: 0.01 });
      });
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebRuntimeEnvironmentUtils").isWorker())
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] skipping bot initialization in worker",
                  ])),
              ),
              !1
            );
          if (!o("WAWebBotBaseGating").isBotEnabled())
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] not initializing bots due to feature being disabled",
                  ])),
              ),
              !1
            );
          var e = self.performance.now(),
            t = R(),
            n = o("WATimeUtils").unixTime(),
            a = o("WAWebABProps").getABPropConfigValue(
              "bonsai_update_interval",
            ),
            i,
            l = !1;
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] restoring bots from DB",
              ])),
          );
          try {
            yield o("WAWebRestoreBotProfilesFromDb").restoreBotProfilesFromDb();
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] restoreBotProfilesFromDb error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-restore-bot-profiles-error");
          }
          return (
            o("WAWebBotProfilesRestoreStatus").markBotProfilesRestored(),
            t + a < n
              ? ((l = !0),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] requesting bots from server",
                    ])),
                ),
                yield M(),
                (i = a))
              : (i = t + a - n),
            P(),
            k({
              didFetchFromServer: l,
              durationMs: self.performance.now() - e,
            }),
            E(i),
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] initializing bots complete, next fetch at ",
                  "",
                ])),
              n + i,
            ),
            l
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebBotGating").isMetaAiThreadAccountListSyncEnabled())
            try {
              var e = yield v.load(),
                t = e.maybeSyncMetaAiThreadAccountList;
              t();
            } catch (e) {
              o("WALogger")
                .WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] Meta AI thread list sync could not start",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("bot-thread-list-sync-start-failed", {
                  sampling: 0.01,
                });
            }
        })),
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            var t = yield b.load(),
              n = t.requestBotList;
            e = yield n();
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotList error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-request-bot-list-error");
            return;
          }
          var a;
          try {
            a = yield o("WAWebRequestBotProfiles").requestBotProfiles(e);
          } catch (e) {
            o("WALogger")
              .LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] requestBotProfiles rejected",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
            return;
          }
          try {
            yield o("WAWebPersistBotProfiles").persistBotProfiles(a);
          } catch (e) {
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] persistBotProfiles error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-persist-bot-profiles-error");
            return;
          }
          A();
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    ((l.initializeBots = T), (l.getBotProfilesFromServer = M));
  },
  98,
);
