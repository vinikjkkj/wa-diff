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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
              var u = l.value;
              yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                creatorLid: u.creatorLid,
                hcaEntrypointId: u.hcaEntrypointId,
                name: u.name,
                product: u.product,
                isDeprecated: u.isDeprecated,
                isDeleted: !1,
                lastFetchedTimeMs: Date.now(),
              });
              var c = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
                t,
                u.profilePicThumbUrl,
                u.profilePicFullUrl,
              );
              c != null &&
                o("WAWebDBBulkPersistProfilePic")
                  .persistProfilePicBatched(c)
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
              ((typeof l == "object" && l !== null) ||
                typeof l == "function") &&
              l.type === "deleted"
            ) {
              n &&
                o("WAWebPersistBotProfiles").isBotProfileCached(t) &&
                (yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                  isDeleted: !0,
                  lastFetchedTimeMs: Date.now(),
                }));
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                l,
            );
          }
          return i;
        })),
        c.apply(this, arguments)
      );
    }
    l.syncBotSupportFields = u;
  },
  98,
);
