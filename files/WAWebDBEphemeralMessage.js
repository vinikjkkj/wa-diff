__d(
  "WAWebDBEphemeralMessage",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebDBMessageDelete",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    async function c() {
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "pruneExpiredMessages started",
            ])),
        )
        .tags("ephemeral-messages");
      var t = await o("WAWebSchemaMessage")
          .getMessageTable()
          .lessThan(["expiredTimestamp"], o("WATimeUtils").unixTime(), {
            shouldDecrypt: !1,
          }),
        n = t.filter(function (e) {
          return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState);
        });
      return n.length === 0
        ? []
        : (o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.PurgeEphemeral,
          ),
          await o("WAWebDBMessageDelete")
            .removeMessagesFromHistory(
              n.map(function (e) {
                return e.id.toString();
              }),
            )
            .finally(function () {
              return o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.PurgeEphemeral,
              );
            }),
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "pruneExpiredMessages completed",
                ])),
            )
            .tags("ephemeral-messages"),
          n);
    }
    async function d(e) {
      if (e.length !== 0)
        return (
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.PurgeEphemeral,
          ),
          o("WAWebDBMessageDelete")
            .removeMessagesFromHistory(
              e.map(function (e) {
                return e.id.toString();
              }),
            )
            .finally(function () {
              return o("WAWebAppTracker").AppTracker.stop(
                o("WAWebAppTracker").AppTrackerType.PurgeEphemeral,
              );
            })
        );
    }
    async function m(e) {
      var t = e.contactId,
        n = e.messageId,
        a = await Promise.all([
          o("WAWebSchemaMessage").getMessageTable().get(n),
          r("WAWebLidAwareContactsDB").get(t),
        ]),
        i = a[0],
        l = a[1];
      if (!(i == null || l == null)) {
        var s = r("WAWebMsgKey").fromString(n);
        if (
          !s.fromMe &&
          !(!s.remote.isRegularUser() || s.participant != null)
        ) {
          var c = o("WAWebWidFactory").createWid(t),
            d = o("WAWebLidMigrationUtils").toCommonAddressingMode(s.remote, c),
            m = d[0],
            p = d[1];
          if (
            r("WAWebWid").equals(m, p) &&
            o(
              "WAWebEphemeralityUtils",
            ).isEphemeralityDisabledForMessagingWithContact(l)
          ) {
            var _ = i.ephemeralDuration != null && i.ephemeralDuration > 0,
              f = i.expiredTimestamp != null;
            (!_ && !f) ||
              (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "convertMessageNotEphemeralForContactWithEphmeralityDisabled",
                  ])),
              ),
              await o("WAWebSchemaMessage")
                .getMessageTable()
                .merge(n, {
                  ephemeralDuration: 0,
                  ephemeralStartTimestamp: void 0,
                  ephemeralSettingTimestamp: void 0,
                  ephemeralOutOfSync: void 0,
                  expiredTimestamp: void 0,
                  ephemeralSettingUser: void 0,
                }));
          }
        }
      }
    }
    ((l.pruneExpiredMessages = c),
      (l.removeExpiredMessagesFromHistory = d),
      (l.convertMessageNotEphemeralForContactWithEphmeralityDisabled = m));
  },
  98,
);
