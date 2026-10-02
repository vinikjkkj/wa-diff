__d(
  "WAWebSyncBotSupportFields",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileFetchPause",
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
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          if (
            (n === void 0 && (n = !0),
            a === void 0 && (a = null),
            o("WAWebBotStaticProfiles").isStaticProfile(t))
          )
            return !1;
          var i = yield o("WAWebFetchWassBotProfileGQL").fetchWassBotProfileGQL(
              t.user,
              a,
            ),
            l = !0;
          e: {
            var c = i;
            if (
              (((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
                c.type === "error") ||
              (((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
                c.type === "graphql-error")
            ) {
              var d;
              ((l = !1),
                i.type === "graphql-error" &&
                  o("WAWebBotProfileFetchPause").isPausingBotProfileErrorCode(
                    (d = i.error.source) == null ? void 0 : d.errors,
                  ) &&
                  (yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                    fetchPauseUntilMs: o(
                      "WAWebBotProfileFetchPause",
                    ).getBotProfileFetchPauseUntilMs(
                      o("WATimeUtils").unixTimeMs(),
                    ),
                  })),
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncBotSupportFields] WASS fetch failed (",
                        ")",
                      ])),
                    i.type,
                  )
                  .sendLogs("sbp-sync-fetch-failed"));
              break e;
            }
            if (
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.type === "exists" &&
              "value" in c
            ) {
              var m = c.value;
              yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                creatorLid: m.creatorLid,
                fetchPauseUntilMs: null,
                hcaEntrypointId: m.hcaEntrypointId,
                groupTosRequirements: m.groupTosRequirements,
                name: m.name,
                product: m.product,
                isDeprecated: m.isDeprecated,
                isDeleted: !1,
                lastFetchedTimeMs: o("WATimeUtils").unixTimeMs(),
              });
              try {
                o(
                  "WAWebBotGroupGatingUtils",
                ).isStandardBotProfileGroupEnabled() &&
                o("WAWebBotProduct").usesMuseGroupTosNotice(m.product)
                  ? yield o("WAWebBotTos").refreshMuseGroupTosNotices()
                  : yield o("WAWebBotTos").refreshBotTosRequirements(
                      m.groupTosRequirements,
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
              var p = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
                t,
                m.profilePicThumbUrl,
                m.profilePicFullUrl,
              );
              p != null &&
                o("WAWebDBBulkPersistProfilePic")
                  .persistProfilePicBatched(p)
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
              ((typeof c == "object" && c !== null) ||
                typeof c == "function") &&
              c.type === "deleted"
            ) {
              var _ = o("WATimeUtils").unixTimeMs(),
                f = {
                  fetchPauseUntilMs: o(
                    "WAWebBotProfileFetchPause",
                  ).getBotProfileFetchPauseUntilMs(_),
                };
              if (yield o("WAWebPersistBotProfiles").hasStoredBotProfile(t)) {
                var g = babelHelpers.extends({}, f, {
                  groupTosRequirements: null,
                  lastFetchedTimeMs: _,
                });
                yield o("WAWebPersistBotProfiles").mergeBotSupportFields(
                  t,
                  n ? babelHelpers.extends({}, g, { isDeleted: !0 }) : g,
                );
              } else
                yield o("WAWebPersistBotProfiles").mergeBotSupportFields(t, f);
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                c,
            );
          }
          return l;
        })),
        d.apply(this, arguments)
      );
    }
    l.syncBotSupportFields = c;
  },
  98,
);
