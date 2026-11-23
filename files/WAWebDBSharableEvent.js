__d(
  "WAWebDBSharableEvent",
  [
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebModelStorageVersions",
    "WAWebSchemaSharableEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "sharable-event",
      u = "sharable-event-invitee",
      c = "sharable-event-change",
      d = "sharable-event-invite-link-token",
      m = "sharable-event-creator-push-name",
      p = !1;
    function _() {
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
          !p &&
          ((p = !0),
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][storage] unavailable, the local schema lacks one or more Events tables",
              ])),
          )),
        r
      );
    }
    function f() {
      return (
        _() &&
        o("WAWebModelStorageUtils")
          .getStorage()
          .doesLocalSchemaIncludeVersion(
            o(
              "WAWebModelStorageVersions",
            ).sharableEventInviteMessageCreateTable(),
          )
      );
    }
    async function g() {
      return _()
        ? o("WAWebSchemaSharableEvent").getSharableEventTable().all()
        : [];
    }
    async function h(e) {
      return _()
        ? o("WAWebSchemaSharableEvent").getSharableEventTable().get(e)
        : null;
    }
    async function y() {
      return _()
        ? o("WAWebSchemaSharableEvent").getSharableEventTable().allPrimaryKeys()
        : [];
    }
    ((l.SHARABLE_EVENT_TABLE = s),
      (l.SHARABLE_EVENT_INVITEE_TABLE = u),
      (l.SHARABLE_EVENT_CHANGE_TABLE = c),
      (l.SHARABLE_EVENT_INVITE_LINK_TOKEN_TABLE = d),
      (l.SHARABLE_EVENT_CREATOR_PUSH_NAME_TABLE = m),
      (l.canUseSharableEventStorage = _),
      (l.canUseSharableEventInviteMessageStorage = f),
      (l.getSharableEvents = g),
      (l.getSharableEvent = h),
      (l.getSharableEventIds = y));
  },
  98,
);
