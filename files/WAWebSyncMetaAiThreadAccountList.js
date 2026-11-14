__d(
  "WAWebSyncMetaAiThreadAccountList",
  [
    "$InternalEnum",
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
      d = n("$InternalEnum")({
        RequestFailed: "request-failed",
        MissingList: "missing-list",
        AllIdsInvalid: "all-ids-invalid",
        Threw: "threw",
      }),
      m = 15 * o("WATimeUtils").MINUTE_MILLISECONDS,
      p = 3,
      _ = null,
      f = null,
      g = 0,
      h = !1;
    function y() {
      return _ != null
        ? _
        : C()
          ? o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent()
            ? (b(), (c || (c = n("Promise"))).resolve())
            : ((_ = v().finally(function () {
                _ = null;
              })),
              _)
          : (c || (c = n("Promise"))).resolve();
    }
    function C() {
      if (!o("WAWebBotGating").isMetaAiThreadAccountListSyncEnabled() || g >= p)
        return !1;
      var e = o("WATimeUtils").unixTimeMs();
      return f != null && e - f < m
        ? !1
        : e - o("WAWebUserPrefsBot").getMetaAiThreadListLastSyncTs() >=
            o("WATimeUtils").DAY_MILLISECONDS;
    }
    function b() {
      h ||
        ((h = !0),
        o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(
            function () {
              ((h = !1), y());
            },
            function () {
              ((h = !1),
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
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o(
              "WAWebFetchMetaAiThreadServerListGQL",
            ).fetchMetaAiThreadServerListGQL();
            if (e.type === "unavailable") {
              yield o("WAWebUserPrefsBot").setMetaAiThreadListLastSyncTs(
                o("WATimeUtils").unixTimeMs(),
              );
              return;
            }
            if (e.type !== "success") {
              E(e.reason === "missing-list" ? d.MissingList : d.RequestFailed);
              return;
            }
            var t = e.threads.flatMap(function (e) {
              var t = R(e);
              return t == null ? [] : [{ wid: t, fields: L(e) }];
            });
            if (e.threads.length > 0 && t.length === 0) {
              E(d.AllIdsInvalid);
              return;
            }
            (yield o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(t),
              (f = null),
              (g = 0),
              yield o("WAWebUserPrefsBot").setMetaAiThreadListLastSyncTs(
                o("WATimeUtils").unixTimeMs(),
              ));
          } catch (e) {
            E(d.Threw);
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
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
    function L(e) {
      var t = o("WAWebBotProduct").BotProduct.META_AI_THREAD.valueOf();
      return e.isDeprecated == null
        ? { product: t }
        : { product: t, isDeprecated: e.isDeprecated };
    }
    function E(e) {
      ((f = o("WATimeUtils").unixTimeMs()),
        g++,
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] Meta AI thread list sync failed",
              ])),
          )
          .tags(e)
          .sendLogs("meta-ai-thread-list-sync-failed", { sampling: 0.01 }));
    }
    l.maybeSyncMetaAiThreadAccountList = y;
  },
  98,
);
