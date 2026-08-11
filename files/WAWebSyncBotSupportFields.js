__d(
  "WAWebSyncBotSupportFields",
  [
    "WALogger",
    "WAWebBotStaticProfiles",
    "WAWebFetchWassBotProfileGQL",
    "WAWebPersistBotProfiles",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!o("WAWebBotStaticProfiles").isStaticProfile(t)) {
            var n = yield o(
              "WAWebFetchWassBotProfileGQL",
            ).fetchWassBotProfileGQL(t.user);
            e: {
              var r = n;
              if (
                (((typeof r == "object" && r !== null) ||
                  typeof r == "function") &&
                  r.type === "error") ||
                (((typeof r == "object" && r !== null) ||
                  typeof r == "function") &&
                  r.type === "graphql-error")
              ) {
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncBotSupportFields] WASS fetch failed (",
                        ")",
                      ])),
                    n.type,
                  )
                  .sendLogs("sbp-sync-fetch-failed");
                break e;
              }
              if (
                ((typeof r == "object" && r !== null) ||
                  typeof r == "function") &&
                r.type === "exists" &&
                "value" in r
              ) {
                var a = r.value;
                o("WAWebPersistBotProfiles").isBotProfileCached(t) &&
                  (yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                    product: a.product,
                    isDeprecated: a.isDeprecated,
                    isDeleted: !1,
                    lastFetchedTimeMs: Date.now(),
                  }));
                break e;
              }
              if (
                ((typeof r == "object" && r !== null) ||
                  typeof r == "function") &&
                r.type === "deleted"
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
                  r,
              );
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.syncBotSupportFields = s;
  },
  98,
);
