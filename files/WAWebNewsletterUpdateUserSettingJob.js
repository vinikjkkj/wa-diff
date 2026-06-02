__d(
  "WAWebNewsletterUpdateUserSettingJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexUpdateNewsletterUserSetting",
    "WAWebMiscErrors",
    "WAWebNewsletterModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
    "WAWebSchemaNewsletterMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterUserSetting",
          async function () {
            await d(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function d(t) {
      var n = t.muteExpirationValue,
        r = t.newsletterJid,
        a = t.type;
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "newsletter setMuteState",
          ])),
      );
      var i =
          n === o("WAWebNewsletterModelUtils").MUTED_STATE ? "mute" : "unmute",
        l = await o(
          "WAWebMexUpdateNewsletterUserSetting",
        ).mexUpdateNewsletterUserSetting({
          newsletter_id: r,
          type:
            a === o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS
              ? "MUTE_ADMIN_ACTIVITY"
              : "MUTE_FOLLOWER_ACTIVITY",
          value:
            n === o("WAWebNewsletterModelUtils").MUTED_STATE ? "ON" : "OFF",
        }),
        u = l
          .filter(function (e) {
            return e.subscriberNotFoundMixin == null;
          })
          .map(function (e) {
            return e.jid;
          });
      try {
        return await m(u, a, n);
      } catch (e) {
        throw (
          e instanceof o("WAWebMiscErrors").DbOnLogoutAbort ||
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][",
                    "Newsletter] Failed to persist the mutation on db",
                  ])),
                i,
              )
              .tags("newsletter")
              .sendLogs("newsletter-" + i + "-db-fail"),
          e
        );
      }
    }
    function m(e, t, n) {
      switch (t) {
        case o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS:
          return o("WAWebSchemaChat")
            .getChatTable()
            .bulkMergeOnly(
              e.map(function (e) {
                return { id: e, muteExpiration: n };
              }),
            );
        case o("WAWebNewsletterModelUtils").FOLLOWER_NOTIFICATIONS:
          return o("WAWebSchemaNewsletterMetadata")
            .getNewsletterMetadataTable()
            .bulkMergeOnly(
              e.map(function (e) {
                return { id: e, followerActivityMuteExpiration: n };
              }),
            );
        default:
          return (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][updateNewsletterUserSetting] Invalid setting type ",
                    "",
                  ])),
                t,
              )
              .tags("newsletter"),
            Promise.resolve()
          );
      }
    }
    l.updateNewsletterUserSetting = c;
  },
  98,
);
