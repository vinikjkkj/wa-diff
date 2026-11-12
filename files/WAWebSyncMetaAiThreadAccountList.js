__d(
  "WAWebSyncMetaAiThreadAccountList",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBotGating",
    "WAWebBotProduct",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
    "WAWebFetchMetaAiThreadServerListGQL",
    "WAWebPersistBotProfiles",
    "WAWebUserPrefsBot",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 15 * o("WATimeUtils").MINUTE_MILLISECONDS,
      m = null,
      p = null,
      _ = !1;
    function f() {
      return m != null
        ? m
        : g()
          ? o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent()
            ? (h(), (c || (c = n("Promise"))).resolve())
            : ((m = y().finally(function () {
                m = null;
              })),
              m)
          : (c || (c = n("Promise"))).resolve();
    }
    function g() {
      if (!o("WAWebBotGating").isMetaAiThreadAccountListSyncEnabled())
        return !1;
      var e = o("WATimeUtils").unixTimeMs();
      return p != null && e - p < d
        ? !1
        : e - o("WAWebUserPrefsBot").getMetaAiThreadListLastSyncTs() >=
            o("WATimeUtils").DAY_MILLISECONDS;
    }
    function h() {
      _ ||
        ((_ = !0),
        o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(
            function () {
              ((_ = !1), f());
            },
            function () {
              ((_ = !1),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot] Meta AI thread list sync could not wait for canonical credentials",
                      ])),
                  )
                  .sendLogs("meta-ai-thread-list-sync-canonical-wait-failed", {
                    sampling: 0.01,
                  }));
            },
          ));
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
              "WAWebFetchMetaAiThreadServerListGQL",
            ).fetchMetaAiThreadServerListGQL();
            if (e.type !== "success") {
              S();
              return;
            }
            var t = e.threads.flatMap(function (e) {
              var t = b(e);
              return t == null ? [] : [{ wid: t, fields: v(e) }];
            });
            if (e.threads.length > 0 && t.length === 0) {
              S();
              return;
            }
            (yield o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(t),
              (p = null),
              yield o("WAWebUserPrefsBot").setMetaAiThreadListLastSyncTs(
                o("WATimeUtils").unixTimeMs(),
              ));
          } catch (e) {
            S();
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(e.botFbid + "@bot");
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[bot] Meta AI thread list sync skipped a malformed id",
                ])),
            )
            .sendLogs("meta-ai-thread-list-sync-bad-id", { sampling: 0.01 }),
          null
        );
      }
    }
    function v(e) {
      var t = o("WAWebBotProduct").BotProduct.META_AI_THREAD.valueOf();
      return e.isDeprecated == null
        ? { product: t }
        : { product: t, isDeprecated: e.isDeprecated };
    }
    function S() {
      ((p = o("WATimeUtils").unixTimeMs()),
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] Meta AI thread list sync failed",
              ])),
          )
          .sendLogs("meta-ai-thread-list-sync-failed", { sampling: 0.01 }));
    }
    l.maybeSyncMetaAiThreadAccountList = f;
  },
  98,
);
