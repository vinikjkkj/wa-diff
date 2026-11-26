__d(
  "WAWebDBEphemeralMessage",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebAppTracker",
    "WAWebChatThreadLogging",
    "WAWebDBMessageDelete",
    "WAWebDBRemoveMsgsAndUpdateChats",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebInstantMsgTypes",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebSchemaMessage",
    "WAWebWid",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Set([
        o("WAWebMsgType").MSG_TYPE.INSTANT_IMAGE,
        o("WAWebMsgType").MSG_TYPE.INSTANT_VIDEO,
      ]);
    async function d() {
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
      if (n.length === 0) return [];
      (_(
        n.map(function (e) {
          return {
            ack: e.ack,
            afterReadDuration: e.afterReadDuration,
            chatId: r("WAWebMsgKey").fromString(e.id.toString()).remote,
          };
        }),
      ),
        o("WAWebAppTracker").AppTracker.start(
          o("WAWebAppTracker").AppTrackerType.PurgeEphemeral,
        ));
      var a = n.reduce(
          function (e, t) {
            return (e.ids.push(t.id.toString()), e.types.add(t.type), e);
          },
          { ids: [], types: new Set() },
        ),
        i = a.ids,
        l = a.types;
      return (
        await p(i, l).finally(function () {
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
        n
      );
    }
    async function m(e) {
      if (e.length !== 0) {
        (_(
          e.map(function (e) {
            return {
              ack: e.ack,
              afterReadDuration: e.afterReadDuration,
              chatId: e.id.remote,
            };
          }),
        ),
          o("WAWebAppTracker").AppTracker.start(
            o("WAWebAppTracker").AppTrackerType.PurgeEphemeral,
          ));
        var t = e.reduce(
            function (e, t) {
              return (e.ids.push(t.id.toString()), e.types.add(t.type), e);
            },
            { ids: [], types: new Set() },
          ),
          n = t.ids,
          r = t.types;
        return p(n, r).finally(function () {
          return o("WAWebAppTracker").AppTracker.stop(
            o("WAWebAppTracker").AppTrackerType.PurgeEphemeral,
          );
        });
      }
    }
    function p(e, t) {
      return Array.from(t).some(function (e) {
        return c.has(e);
      })
        ? o("WAWebDBRemoveMsgsAndUpdateChats").removeMessagesAndUpdateChats(
            e,
            function (e) {
              return o("WAWebInstantMsgTypes").isInstantMsgType(e.type);
            },
          )
        : o("WAWebDBMessageDelete").removeMessagesFromHistory(e);
    }
    function _(e) {
      if (o("WAWebAfterReadUtils").isAfterReadEnabled()) {
        var t = o("WATimeUtils").unixTime(),
          n = [];
        for (var r of e) {
          var a = r.afterReadDuration;
          a == null ||
            a <= 0 ||
            n.push({
              activityType: "afterReadMsgExpired",
              ts: t,
              chatId: r.chatId,
              wasUnread: r.ack == null || r.ack < o("WAWebAck").ACK.READ,
            });
        }
        n.length > 0 &&
          o("WAWebChatThreadLogging").handleActivitiesForChatThreadLogging(n);
      }
    }
    async function f(e) {
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
    ((l.pruneExpiredMessages = d),
      (l.removeExpiredMessagesFromHistory = m),
      (l.convertMessageNotEphemeralForContactWithEphmeralityDisabled = f));
  },
  98,
);
