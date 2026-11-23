__d(
  "WAWebSyncMetaAiThreadAccountList",
  [
    "$InternalEnum",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = n("$InternalEnum")({
        RequestFailed: "request-failed",
        MissingList: "missing-list",
        AllIdsInvalid: "all-ids-invalid",
        Threw: "threw",
        PicNotStored: "pic-not-stored",
      }),
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
            ? (C(), Promise.resolve())
            : ((p = b().finally(function () {
                p = null;
              })),
              p)
          : Promise.resolve();
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
    async function b() {
      try {
        var e = await o(
          "WAWebFetchMetaAiThreadServerListGQL",
        ).fetchMetaAiThreadServerListGQL();
        if (e.type === "unavailable") {
          await o("WAWebUserPrefsBot").setMetaAiThreadListLastSyncTs(
            o("WATimeUtils").unixTimeMs(),
          );
          return;
        }
        if (e.type !== "success") {
          k(e.reason === "missing-list" ? c.MissingList : c.RequestFailed);
          return;
        }
        var t = o("WATimeUtils").unixTimeMs(),
          n = e.threads.flatMap(function (e) {
            var t = v(e);
            return t == null ? [] : [{ wid: t, thread: e }];
          });
        if (e.threads.length > 0 && n.length === 0) {
          k(c.AllIdsInvalid);
          return;
        }
        (await o("WAWebPersistBotProfiles").mergeBotSupportFieldsBatch(
          n.map(function (e) {
            var n = e.thread,
              r = e.wid;
            return { wid: r, fields: S(n, t) };
          }),
        ),
          n.forEach(function (e) {
            var t = e.thread,
              n = e.wid;
            return L(n, t);
          }));
        var r = new Set(
            n.map(function (e) {
              var t = e.wid;
              return t.toString();
            }),
          ),
          a = await E(r);
        if (!a) {
          k(c.PicNotStored);
          return;
        }
        ((_ = null),
          (f = 0),
          await o("WAWebUserPrefsBot").setMetaAiThreadListLastSyncTs(
            o("WATimeUtils").unixTimeMs(),
          ));
      } catch (e) {
        k(c.Threw);
      }
    }
    function v(e) {
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
    function S(e, t) {
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
    var R = new Map();
    function L(e, t) {
      var n = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
        e,
        t.profilePicThumbUrl,
        t.profilePicFullUrl,
      );
      n != null && R.set(n.id, n);
    }
    async function E(e) {
      for (var t of R) {
        var n = t[0],
          r = t[1];
        o("WAWebPersistBotProfiles").isBotPicRowInMemory(r) || R.delete(n);
      }
      var a = await Promise.allSettled(
        Array.from(R.values())
          .filter(function (t) {
            return e.has(t.id);
          })
          .map(async function (e) {
            (await o("WAWebDBBulkPersistProfilePic").persistProfilePicBatched(
              e,
            ),
              R.get(e.id) === e && R.delete(e.id));
          }),
      );
      return a.every(function (e) {
        return e.status === "fulfilled";
      });
    }
    function k(e) {
      ((_ = o("WATimeUtils").unixTimeMs()),
        f++,
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
    l.maybeSyncMetaAiThreadAccountList = h;
  },
  98,
);
