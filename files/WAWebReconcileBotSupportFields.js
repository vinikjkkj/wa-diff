__d(
  "WAWebReconcileBotSupportFields",
  [
    "WALogger",
    "WAWebBotProduct",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchWassBotListProfilesGQL",
    "WAWebPersistBotProfiles",
    "WAWebSchemaBotProfile",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(t, n, a) {
      var i = [];
      for (var l of n)
        if (
          !(
            l.product !==
              o("WAWebBotProduct").BotProduct.THIRD_PARTY.valueOf() ||
            l.isDeleted === !0
          ) &&
          !(l.lastFetchedTimeMs != null && l.lastFetchedTimeMs >= a)
        ) {
          var s = void 0;
          try {
            s = o("WAWebWidFactory").createWid(l.id);
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[computeBotSupportTombstones] skipping malformed id",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("sbp-reconcile-tombstone-parse-error");
            continue;
          }
          t.has(s.user) || i.push(s);
        }
      return i;
    }
    async function m() {
      var e = Date.now(),
        t = await o(
          "WAWebFetchWassBotListProfilesGQL",
        ).fetchWassBotListProfilesGQL();
      if (t.type !== "success") return !1;
      if (t.profiles.length === 0) return !0;
      var n = Date.now(),
        a = new Set(
          t.profiles.map(function (e) {
            return e.botFbid;
          }),
        ),
        i = await o("WAWebSchemaBotProfile").getBotProfileTable().all();
      return (
        await Promise.all(
          t.profiles.map(async function (e) {
            try {
              await p(e, n);
            } catch (e) {
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcileBotSupportFields] failed to upsert a listed agent",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sbp-reconcile-upsert-error");
            }
          }),
        ),
        await Promise.all(
          d(a, i, e).map(async function (e) {
            try {
              await o("WAWebPersistBotProfiles").mergeBotSupportFields(e, {
                isDeleted: !0,
                lastFetchedTimeMs: n,
              });
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcileBotSupportFields] failed to tombstone a delisted agent",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sbp-reconcile-tombstone-error");
            }
          }),
        ),
        !0
      );
    }
    async function p(e, t) {
      var n = o("WAWebWidFactory").createWid(e.botFbid + "@bot");
      await o("WAWebPersistBotProfiles").mergeBotSupportFields(n, {
        creatorLid: e.creatorLid,
        generatedEmoji: e.generatedEmoji,
        hcaEntrypointId: e.hcaEntrypointId,
        name: e.name,
        product: e.product,
        isDeprecated: e.isDeprecated,
        isDeleted: !1,
        lastFetchedTimeMs: t,
      });
      var a = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
        n,
        e.profilePicThumbUrl,
        e.profilePicFullUrl,
      );
      return (
        a != null &&
          o("WAWebDBBulkPersistProfilePic")
            .persistProfilePicBatched(a)
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[reconcileBotSupportFields] failed to persist a listed agent pic",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("sbp-reconcile-persist-pic-error");
            }),
        n
      );
    }
    ((l.computeBotSupportTombstones = d),
      (l.reconcileBotSupportFields = m),
      (l.upsertListedAgentProfile = p));
  },
  98,
);
