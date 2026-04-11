__d(
  "WAWebNewsletterUpdateUserSettingJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexUpdateNewsletterUserSetting",
    "WAWebMiscErrors",
    "WAWebNewsletterModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaChat",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterUserSetting",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield m(e);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.muteExpirationValue,
            n = e.newsletterJid,
            r = e.type;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "newsletter setMuteState",
              ])),
          );
          var a =
              t === o("WAWebNewsletterModelUtils").MUTED_STATE
                ? "mute"
                : "unmute",
            i = yield o(
              "WAWebMexUpdateNewsletterUserSetting",
            ).mexUpdateNewsletterUserSetting({
              newsletter_id: n,
              type:
                r === o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS
                  ? "MUTE_ADMIN_ACTIVITY"
                  : "MUTE_FOLLOWER_ACTIVITY",
              value:
                t === o("WAWebNewsletterModelUtils").MUTED_STATE ? "ON" : "OFF",
            }),
            l = i
              .filter(function (e) {
                return e.subscriberNotFoundMixin == null;
              })
              .map(function (e) {
                return e.jid;
              });
          try {
            return yield _(l, r, t);
          } catch (e) {
            throw (
              e instanceof o("WAWebMiscErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][",
                        "Newsletter] Failed to persist the mutation on db",
                      ])),
                    a,
                  )
                  .tags("newsletter")
                  .sendLogs("newsletter-" + a + "-db-fail"),
              e
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, r, a) {
      switch (r) {
        case o("WAWebNewsletterModelUtils").ADMIN_NOTIFICATIONS:
          return o("WAWebSchemaChat")
            .getChatTable()
            .bulkMergeOnly(
              t.map(function (e) {
                return { id: e, muteExpiration: a };
              }),
            );
        case o("WAWebNewsletterModelUtils").FOLLOWER_NOTIFICATIONS:
          return o("WAWebSchemaNewsletterMetadata")
            .getNewsletterMetadataTable()
            .bulkMergeOnly(
              t.map(function (e) {
                return { id: e, followerActivityMuteExpiration: a };
              }),
            );
        default:
          return (
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][updateNewsletterUserSetting] Invalid setting type ",
                    "",
                  ])),
                r,
              )
              .tags("newsletter"),
            (c || (c = n("Promise"))).resolve()
          );
      }
    }
    l.updateNewsletterUserSetting = d;
  },
  98,
);
