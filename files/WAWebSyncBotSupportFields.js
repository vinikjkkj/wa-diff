__d(
  "WAWebSyncBotSupportFields",
  [
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebBotTos",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchWassBotProfileGQL",
    "WAWebPersistBotProfiles",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if (
            (n === void 0 && (n = !0),
            o("WAWebBotStaticProfiles").isStaticProfile(t))
          )
            return !1;
          var a = yield o("WAWebFetchWassBotProfileGQL").fetchWassBotProfileGQL(
              t.user,
            ),
            i = !0;
          e: {
            var l = a;
            if (
              (((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
                l.type === "error") ||
              (((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
                l.type === "graphql-error")
            ) {
              ((i = !1),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncBotSupportFields] WASS fetch failed (",
                        ")",
                      ])),
                    a.type,
                  )
                  .sendLogs("sbp-sync-fetch-failed"));
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.type === "exists" &&
              "value" in l
            ) {
              var c = l.value;
              yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                creatorLid: c.creatorLid,
                hcaEntrypointId: c.hcaEntrypointId,
                groupTosRequirements: c.groupTosRequirements,
                name: c.name,
                product: c.product,
                isDeprecated: c.isDeprecated,
                isDeleted: !1,
                lastFetchedTimeMs: Date.now(),
              });
              try {
                yield o("WAWebBotTos").refreshBotTosRequirements(
                  c.groupTosRequirements,
                );
              } catch (e) {
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncBotSupportFields] ToS state refresh failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("sbp-sync-tos-refresh-failed");
              }
              var d = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
                t,
                c.profilePicThumbUrl,
                c.profilePicFullUrl,
              );
              d != null &&
                o("WAWebDBBulkPersistProfilePic")
                  .persistProfilePicBatched(d)
                  .catch(function (e) {
                    o("WALogger")
                      .WARN(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncBotSupportFields] failed to persist bot profile pic",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("sbp-sync-persist-pic-error");
                  });
              break e;
            }
            if (
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.type === "deleted"
            ) {
              n
                ? o("WAWebPersistBotProfiles").isBotProfileCached(t) &&
                  (yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                    groupTosRequirements: null,
                    isDeleted: !0,
                    lastFetchedTimeMs: Date.now(),
                  }))
                : yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                    groupTosRequirements: null,
                    lastFetchedTimeMs: Date.now(),
                  });
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                l,
            );
          }
          return i;
        })),
        d.apply(this, arguments)
      );
    }
    l.syncBotSupportFields = c;
  },
  98,
);
