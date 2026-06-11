__d(
  "WAWebDBEphemeralMessage",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebAck",
    "WAWebAfterReadUtils",
    "WAWebAppTracker",
    "WAWebChatThreadLogging",
    "WAWebDBMessageDelete",
    "WAWebEphemeralKeepInChatUtils",
    "WAWebEphemeralityUtils",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebSchemaMessage",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger")
            .LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "pruneExpiredMessages started",
                ])),
            )
            .tags("ephemeral-messages");
          var t = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .lessThan(["expiredTimestamp"], o("WATimeUtils").unixTime(), {
                shouldDecrypt: !1,
              }),
            n = t.filter(function (e) {
              return !o("WAWebEphemeralKeepInChatUtils").isKept(e.kicState);
            });
          return n.length === 0
            ? []
            : (f(
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
              ),
              yield o("WAWebDBMessageDelete")
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0)
            return (
              f(
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.contactId,
            a = e.messageId,
            i = yield (c || (c = n("Promise"))).all([
              o("WAWebSchemaMessage").getMessageTable().get(a),
              r("WAWebLidAwareContactsDB").get(t),
            ]),
            l = i[0],
            s = i[1];
          if (!(l == null || s == null)) {
            var d = r("WAWebMsgKey").fromString(a);
            if (
              !d.fromMe &&
              !(!d.remote.isRegularUser() || d.participant != null)
            ) {
              var m = o("WAWebWidFactory").createWid(t),
                p = o("WAWebLidMigrationUtils").toCommonAddressingMode(
                  d.remote,
                  m,
                ),
                _ = p[0],
                f = p[1];
              if (
                r("WAWebWid").equals(_, f) &&
                o(
                  "WAWebEphemeralityUtils",
                ).isEphemeralityDisabledForMessagingWithContact(s)
              ) {
                var g = l.ephemeralDuration != null && l.ephemeralDuration > 0,
                  h = l.expiredTimestamp != null;
                (!g && !h) ||
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "convertMessageNotEphemeralForContactWithEphmeralityDisabled",
                      ])),
                  ),
                  yield o("WAWebSchemaMessage")
                    .getMessageTable()
                    .merge(a, {
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
        })),
        h.apply(this, arguments)
      );
    }
    ((l.pruneExpiredMessages = d),
      (l.removeExpiredMessagesFromHistory = p),
      (l.convertMessageNotEphemeralForContactWithEphmeralityDisabled = g));
  },
  98,
);
