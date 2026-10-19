__d(
  "WAWebInitializeBots",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotCanonicalRetry",
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
      C = r("requireDeferred")("WAWebRequestBotList").__setRef(
        "WAWebInitializeBots",
      ),
      b = 2e3;
    function v() {
      return o("WAWebUserPrefsBot").getBotListLastRequestedTimestamp();
    }
    var S = null;
    function R(e) {
      (S != null && self.clearTimeout(S),
        (S = self.setTimeout(function () {
          ((S = null), k());
        }, e * 1e3)));
    }
    function L(t) {
      var n = t.didFetchFromServer,
        r = t.durationMs;
      r <= b ||
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
    var E = null;
    function k() {
      if (E != null) return E;
      var e = !1;
      return (
        (E = T()
          .then(function (t) {
            e = t;
          })
          .finally(function () {
            ((E = null), e && o("WAWebBotCanonicalRetry").armCanonicalRetry(I));
          })),
        E
      );
    }
    function I() {
      var e = E != null ? E : (y || (y = n("Promise"))).resolve();
      e.then(k, k).catch(function (e) {
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
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            t = v(),
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
            t + a < n
              ? ((l = !0),
                o("WALogger").LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[bot] requesting bots from server",
                    ])),
                ),
                yield x(),
                (i = a))
              : (i = t + a - n),
            L({
              didFetchFromServer: l,
              durationMs: self.performance.now() - e,
            }),
            R(i),
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
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          try {
            var t = yield C.load(),
              n = t.requestBotList;
            e = yield n();
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[bot] persistBotProfiles error",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bot-persist-bot-profiles-error");
            return;
          }
          P();
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      o("WAWebUserPrefsBot").setBotListLastRequestedTimestamp(
        o("WATimeUtils").unixTime(),
      );
    }
    ((l.initializeBots = k), (l.getBotProfilesFromServer = x));
  },
  98,
);
