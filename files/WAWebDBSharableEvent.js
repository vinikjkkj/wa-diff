__d(
  "WAWebDBSharableEvent",
  [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebSchemaSharableEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "sharable-event",
      u = "sharable-event-invitee",
      c = "sharable-event-change",
      d = "sharable-event-invite-link-token",
      m = "sharable-event-creator-push-name",
      p = "sharable-event-invite-message",
      _ = !1;
    function f() {
      var t,
        n = o("WAWebModelStorageUtils").getStorage(),
        r = [
          (t = o("WAWebModelStorageVersions")).sharableEventCreateTable(),
          t.sharableEventInviteeCreateTable(),
          t.sharableEventChangeCreateTable(),
          t.sharableEventInviteLinkTokenCreateTable(),
          t.sharableEventCreatorPushNameCreateTable(),
        ].every(function (e) {
          return n.doesLocalSchemaIncludeVersion(e);
        });
      return (
        !r &&
          !_ &&
          ((_ = !0),
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][storage] unavailable, the local schema lacks one or more Events tables",
              ])),
          )),
        r
      );
    }
    function g() {
      return (
        f() &&
        o("WAWebModelStorageUtils")
          .getStorage()
          .doesLocalSchemaIncludeVersion(
            o(
              "WAWebModelStorageVersions",
            ).sharableEventInviteMessageCreateTable(),
          )
      );
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return f()
            ? o("WAWebSchemaSharableEvent").getSharableEventTable().all()
            : [];
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return f()
            ? o("WAWebSchemaSharableEvent").getSharableEventTable().get(e)
            : null;
        })),
        b.apply(this, arguments)
      );
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return f()
            ? o("WAWebSchemaSharableEvent")
                .getSharableEventTable()
                .allPrimaryKeys()
            : [];
        })),
        S.apply(this, arguments)
      );
    }
    ((l.SHARABLE_EVENT_TABLE = s),
      (l.SHARABLE_EVENT_INVITEE_TABLE = u),
      (l.SHARABLE_EVENT_CHANGE_TABLE = c),
      (l.SHARABLE_EVENT_INVITE_LINK_TOKEN_TABLE = d),
      (l.SHARABLE_EVENT_CREATOR_PUSH_NAME_TABLE = m),
      (l.SHARABLE_EVENT_INVITE_MESSAGE_TABLE = p),
      (l.canUseSharableEventStorage = f),
      (l.canUseSharableEventInviteMessageStorage = g),
      (l.getSharableEvents = h),
      (l.getSharableEvent = C),
      (l.getSharableEventIds = v));
  },
  98,
);
