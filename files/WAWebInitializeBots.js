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
      b,
      v = r("requireDeferred")("WAWebRequestBotList").__setRef(
        "WAWebInitializeBots",
      ),
      S = r("JSResourceForInteraction")(
        "WAWebSyncMetaAiThreadAccountList",
      ).__setRef("WAWebInitializeBots"),
      R = 2e3;
    function L() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    var E = null;
    function k(e) {
      (E != null && self.clearTimeout(E),
        (E = self.setTimeout(function () {
          ((E = null), D());
        }, e * 1e3)));
    }
    function I(t) {
      var n = t.didFetchFromServer,
        r = t.durationMs;
      r <= R ||
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
    var T = null;
    function D() {
      if (T != null) return T;
      var e = !1;
      return (
        (T = $()
          .then(function (t) {
            e = t;
          })
          .finally(function () {
            ((T = null), e && o("WAWebBotCanonicalRetry").armCanonicalRetry(x));
          })),
        T
      );
    }
    function x() {
      var e = T != null ? T : (b || (b = n("Promise"))).resolve();
      e.then(D, D).catch(function (e) {
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
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebRuntimeEnvironmentUtils").isWorker())
            return (
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] skipping bot initialization in worker",
                  ])),
              ),
              !1
            );
          if (!o("WAWebBotBaseGating").isBotEnabled())
            return (
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] not initializing bots due to feature being disabled",
                  ])),
              ),
              !1
            );
          var e = self.performance.now(),
            t = L(),
            n = o("WATimeUtils").unixTime(),
            a = o("WAWebABProps").getABPropConfigValue(
              "bonsai_update_interval",
            ),
            i,
            l = !1;
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] restoring bots from DB",
              ])),
          );
          try {
            yield o("WAWebRestoreBotProfilesFromDb").restoreBotProfilesFromDb();
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
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
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] requesting bots from server",
                    ])),
                ),
                yield W(),
                (i = a))
              : (i = t + a - n),
            w(),
            I({
              didFetchFromServer: l,
              durationMs: self.performance.now() - e,
            }),
            k(i),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] initializing bots complete, next fetch at ",
                  "",
                ])),
              n + i,
            ),
            l
          );
        })),
        P.apply(this, arguments)
      );
    }
    var N = !1,
      M = null;
    function w() {
      return N || !o("WAWebBotGating").isMetaAiThreadAccountListSyncEnabled()
        ? (b || (b = n("Promise"))).resolve()
        : (M == null &&
            (M = A().finally(function () {
              M = null;
            })),
          M);
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield S.load(),
              t = e.maybeSyncMetaAiThreadAccountList;
            try {
              t().catch(O);
            } catch (e) {
              O(e);
            }
          } catch (e) {
            ((N = !0),
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] Meta AI thread list sync load failed: ",
                      "",
                    ])),
                  r("getErrorSafe")(e).name,
                )
                .sendLogs("bot-thread-list-sync-load-failed", {
                  sampling: 0.01,
                }));
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      N ||
        ((N = !0),
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] Meta AI thread list sync call failed: ",
                "",
              ])),
            r("getErrorSafe")(e).name,
          )
          .sendLogs("bot-thread-list-sync-call-failed", { sampling: 0.01 }));
    }
    function B() {
      ((N = !1), (M = null));
    }
    function W() {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            var t = yield v.load(),
              n = t.requestBotList;
            e = yield n();
          } catch (e) {
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] persistBotProfiles error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-persist-bot-profiles-error");
            return;
          }
          U();
        })),
        q.apply(this, arguments)
      );
    }
    function U() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    ((l.initializeBots = D),
      (l.resetMetaAiThreadListSyncOfferForTest = B),
      (l.getBotProfilesFromServer = W));
  },
  98,
);
