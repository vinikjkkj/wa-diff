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
      m = 3,
      p = null,
      _ = null,
      f = 0,
      g = !1;
    function h() {
      return p != null
        ? p
        : y()
          ? o("WAWebCanonicalGating").isCanonicalEnabled() &&
            !o("WAWebCanonicalUtils").isCanonicalPresent()
            ? (C(), (c || (c = n("Promise"))).resolve())
            : ((p = b().finally(function () {
                p = null;
              })),
              p)
          : (c || (c = n("Promise"))).resolve();
    }
    function y() {
      if (!o("WAWebBotGating").isMetaAiThreadAccountListSyncEnabled() || f >= m)
        return !1;
      var e = o("WATimeUtils").unixTimeMs();
      return _ != null && e - _ < d
        ? !1
        : e - o("WAWebUserPrefsBot").getMetaAiThreadListLastSyncTs() >=
            o("WATimeUtils").DAY_MILLISECONDS;
    }
    function C() {
      g ||
        ((g = !0),
        o("WAWebCanonicalUtils")
          .waitForCanonicalPresent()
          .then(
            function () {
              ((g = !1), h());
            },
            function () {
              ((g = !1),
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
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
              L();
              return;
            }
            var t = e.threads.flatMap(function (e) {
              var t = S(e);
              return t == null ? [] : [{ wid: t, fields: R(e) }];
            });
            if (e.threads.length > 0 && t.length === 0) {
              L();
              return;
            }
            (yield o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(t),
              (_ = null),
              (f = 0),
              yield o("WAWebUserPrefsBot").setMetaAiThreadListLastSyncTs(
                o("WATimeUtils").unixTimeMs(),
              ));
          } catch (e) {
            L();
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
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
    function R(e) {
      var t = o("WAWebBotProduct").BotProduct.META_AI_THREAD.valueOf();
      return e.isDeprecated == null
        ? { product: t }
        : { product: t, isDeprecated: e.isDeprecated };
    }
    function L() {
      ((_ = o("WATimeUtils").unixTimeMs()),
        f++,
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[bot] Meta AI thread list sync failed",
              ])),
          )
          .sendLogs("meta-ai-thread-list-sync-failed", { sampling: 0.01 }));
    }
    l.maybeSyncMetaAiThreadAccountList = h;
  },
  98,
);
