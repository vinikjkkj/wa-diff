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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c(t, n) {
      var a = n === void 0 ? {} : n,
        i = a.groupJid,
        l = i === void 0 ? null : i,
        c = a.tombstoneOnMissing,
        d = c === void 0 ? !0 : c;
      if (o("WAWebBotStaticProfiles").isStaticProfile(t)) return !1;
      var m = await o("WAWebFetchWassBotProfileGQL").fetchWassBotProfileGQL(
          t.user,
          l,
        ),
        p = !0;
      e: {
        var _ = m;
        if (
          (((typeof _ == "object" && _ !== null) || typeof _ == "function") &&
            _.type === "error") ||
          (((typeof _ == "object" && _ !== null) || typeof _ == "function") &&
            _.type === "graphql-error")
        ) {
          var f;
          ((p = !1),
            m.type === "graphql-error" &&
              o("WAWebBotProfileFetchPause").isPausingBotProfileErrorCode(
                (f = m.error.source) == null ? void 0 : f.errors,
              ) &&
              (await o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
                fetchPauseUntilMs: o(
                  "WAWebBotProfileFetchPause",
                ).getBotProfileFetchPauseUntilMs(o("WATimeUtils").unixTimeMs()),
              })),
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncBotSupportFields] WASS fetch failed (",
                    ")",
                  ])),
                m.type,
              )
              .sendLogs("sbp-sync-fetch-failed"));
          break e;
        }
        if (
          ((typeof _ == "object" && _ !== null) || typeof _ == "function") &&
          _.type === "exists" &&
          "value" in _
        ) {
          var g = _.value;
          await o("WAWebPersistBotProfiles").mergeBotSupportFields(t, {
            creatorLid: g.creatorLid,
            fetchPauseUntilMs: null,
            generatedEmoji: g.generatedEmoji,
            hcaEntrypointId: g.hcaEntrypointId,
            groupTosRequirements: g.groupTosRequirements,
            name: g.name,
            product: g.product,
            isDeprecated: g.isDeprecated,
            isDeleted: !1,
            lastFetchedTimeMs: o("WATimeUtils").unixTimeMs(),
          });
          try {
            o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() &&
            o("WAWebBotProduct").usesMuseGroupTosNotice(g.product)
              ? await o("WAWebBotTos").refreshMuseGroupTosNotices()
              : await o("WAWebBotTos").refreshBotTosRequirements(
                  g.groupTosRequirements,
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
          var h = o("WAWebPersistBotProfiles").setBotProfilePicUrls(
            t,
            g.profilePicThumbUrl,
            g.profilePicFullUrl,
          );
          h != null &&
            o("WAWebDBBulkPersistProfilePic")
              .persistProfilePicBatched(h)
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
          ((typeof _ == "object" && _ !== null) || typeof _ == "function") &&
          _.type === "deleted"
        ) {
          var y = o("WATimeUtils").unixTimeMs(),
            C = {
              fetchPauseUntilMs: o(
                "WAWebBotProfileFetchPause",
              ).getBotProfileFetchPauseUntilMs(y),
            };
          if (await o("WAWebPersistBotProfiles").hasStoredBotProfile(t)) {
            var b = babelHelpers.extends({}, C, {
              groupTosRequirements: null,
              lastFetchedTimeMs: y,
            });
            await o("WAWebPersistBotProfiles").mergeBotSupportFields(
              t,
              d ? babelHelpers.extends({}, b, { isDeleted: !0 }) : b,
            );
          } else await o("WAWebPersistBotProfiles").mergeBotSupportFields(t, C);
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            _,
        );
      }
      return p;
    }
    l.syncBotSupportFields = c;
  },
  98,
);
