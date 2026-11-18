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
    "WAWebDBBulkPersistProfilePic",
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
        PicNotStored: "pic-not-stored",
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
              D(e.reason === "missing-list" ? d.MissingList : d.RequestFailed);
              return;
            }
            var t = o("WATimeUtils").unixTimeMs(),
              n = e.threads.flatMap(function (e) {
                var t = R(e);
                return t == null ? [] : [{ wid: t, thread: e }];
              });
            if (e.threads.length > 0 && n.length === 0) {
              D(d.AllIdsInvalid);
              return;
            }
            (yield o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(
              n.map(function (e) {
                var n = e.thread,
                  r = e.wid;
                return { wid: r, fields: L(n, t) };
              }),
            ),
              n.forEach(function (e) {
                var t = e.thread,
                  n = e.wid;
                return k(n, t);
              }));
            var r = new Set(
                n.map(function (e) {
                  var t = e.wid;
                  return t.toString();
                }),
              ),
              a = yield I(r);
            if (!a) {
              D(d.PicNotStored);
              return;
            }
            ((f = null),
              (g = 0),
              yield o("WAWebUserPrefsBot").setMetaAiThreadListLastSyncTs(
                o("WATimeUtils").unixTimeMs(),
              ));
          } catch (e) {
            D(d.Threw);
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
    function L(e, t) {
      var n = {
        generatedEmoji: e.generatedEmoji,
        isDeleted: !1,
        lastFetchedTimeMs: t,
        name: e.name,
        product: o("WAWebBotProduct").BotProduct.META_AI_THREAD.valueOf(),
      };
      return e.isDeprecated == null
        ? n
        : babelHelpers.extends({}, n, { isDeprecated: e.isDeprecated });
    }
    var E = new Map();
    function k(e, t) {
      var n = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
        e,
        t.profilePicThumbUrl,
        t.profilePicFullUrl,
      );
      n != null && E.set(n.id, n);
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t of E) {
            var r = t[0],
              a = t[1];
            o("WAWebPersistBotProfiles").isBotPicRowInMemory(a) || E.delete(r);
          }
          var i = yield (c || (c = n("Promise"))).allSettled(
            Array.from(E.values())
              .filter(function (t) {
                return e.has(t.id);
              })
              .map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      (yield o(
                        "WAWebDBBulkPersistProfilePic",
                      ).persistProfilePicBatched(e),
                        E.get(e.id) === e && E.delete(e.id));
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
          );
          return i.every(function (e) {
            return e.status === "fulfilled";
          });
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
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
