__d(
  "WAWebDBSharableEvent",
  [
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebSchemaSharableEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "sharable-event",
      s = "sharable-event-invitee",
      u = "sharable-event-change",
      c = "sharable-event-invite-link-token",
      d = "sharable-event-creator-push-name";
    function m() {
      var e,
        t = o("WAWebModelStorageUtils").getStorage();
      return [
        (e = o("WAWebModelStorageVersions")).sharableEventCreateTable(),
        e.sharableEventInviteeCreateTable(),
        e.sharableEventChangeCreateTable(),
        e.sharableEventInviteLinkTokenCreateTable(),
        e.sharableEventCreatorPushNameCreateTable(),
      ].every(function (e) {
        return t.doesLocalSchemaIncludeVersion(e);
      });
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return m()
            ? o("WAWebSchemaSharableEvent").getSharableEventTable().all()
            : [];
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return m()
            ? o("WAWebSchemaSharableEvent").getSharableEventTable().get(e)
            : null;
        })),
        g.apply(this, arguments)
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return m()
            ? o("WAWebSchemaSharableEvent")
                .getSharableEventTable()
                .allPrimaryKeys()
            : [];
        })),
        y.apply(this, arguments)
      );
    }
    ((l.SHARABLE_EVENT_TABLE = e),
      (l.SHARABLE_EVENT_INVITEE_TABLE = s),
      (l.SHARABLE_EVENT_CHANGE_TABLE = u),
      (l.SHARABLE_EVENT_INVITE_LINK_TOKEN_TABLE = c),
      (l.SHARABLE_EVENT_CREATOR_PUSH_NAME_TABLE = d),
      (l.canUseSharableEventStorage = m),
      (l.getSharableEvents = p),
      (l.getSharableEvent = f),
      (l.getSharableEventIds = h));
  },
  98,
);
