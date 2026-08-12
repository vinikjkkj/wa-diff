__d(
  "WAWebSyncBotSupportFields",
  [
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebDBBulkPersistProfilePic",
    "WAWebFetchWassBotProfileGQL",
    "WAWebPersistBotProfiles",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebBotStaticProfiles").isStaticProfile(t)) return !1;
          var n = yield o("WAWebFetchWassBotProfileGQL").fetchWassBotProfileGQL(
              t.user,
            ),
            a = !0;
          e: {
            var i = n;
            if (
              (((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
                i.type === "error") ||
              (((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
                i.type === "graphql-error")
            ) {
              ((a = !1),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncBotSupportFields] WASS fetch failed (",
                        ")",
                      ])),
                    n.type,
                  )
                  .sendLogs("sbp-sync-fetch-failed"));
              break e;
            }
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.type === "exists" &&
              "value" in i
            ) {
              var l = i.value;
              yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                name: l.name,
                product: l.product,
                isDeprecated: l.isDeprecated,
                isDeleted: !1,
                lastFetchedTimeMs: Date.now(),
              });
              var u = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
                t,
                l.profilePicThumbUrl,
                l.profilePicFullUrl,
              );
              u != null &&
                o("WAWebDBBulkPersistProfilePic")
                  .persistProfilePicBatched(u)
                  .catch(function (e) {
                    o("WALogger")
                      .WARN(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncBotSupportFields] failed to persist bot profile pic",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("sbp-sync-persist-pic-error");
                  });
              break e;
            }
            if (
              ((typeof i == "object" && i !== null) ||
                typeof i == "function") &&
              i.type === "deleted"
            ) {
              o("WAWebPersistBotProfiles").isBotProfileCached(t) &&
                (yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                  isDeleted: !0,
                  lastFetchedTimeMs: Date.now(),
                }));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                i,
            );
          }
          return a;
        })),
        c.apply(this, arguments)
      );
    }
    l.syncBotSupportFields = u;
  },
  98,
);
