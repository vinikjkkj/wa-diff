__d(
  "WAWebDBSharableEventInviteMessage",
  [
    "WALogger",
    "WAWebDBSharableEvent",
    "WAWebMsgType",
    "WAWebSchemaSharableEventInviteMessage",
    "WAWebSharableEventGatingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      e.length === 0 ||
        !o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage() ||
        (await o("WAWebSchemaSharableEventInviteMessage")
          .getSharableEventInviteMessageTable()
          .bulkCreateOrReplace([].concat(e)));
    }
    async function c(t) {
      var n = t.flatMap(function (e) {
        return e.type === o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE &&
          e.sharableEventInviteId != null &&
          e.sharableEventInviteId !== ""
          ? [{ msgKey: e.id.toString(), eventId: e.sharableEventInviteId }]
          : [];
      });
      if (
        !(
          n.length === 0 ||
          !o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabled() ||
          !o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage()
        )
      )
        try {
          (await u(n),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite_message] recorded ",
                  "",
                ])),
              n.length,
            ));
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite_message] recording ",
                  " failed",
                ])),
              n.length,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("sharable-event-invite-message-record-failed");
        }
    }
    async function d(e) {
      if (!o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage())
        return [];
      var t = await o("WAWebSchemaSharableEventInviteMessage")
        .getSharableEventInviteMessageTable()
        .equals(["eventId"], e);
      return t.map(function (e) {
        return e.msgKey;
      });
    }
    async function m(e) {
      e.length === 0 ||
        !o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage() ||
        (await o("WAWebSchemaSharableEventInviteMessage")
          .getSharableEventInviteMessageTable()
          .bulkRemove([].concat(e)));
    }
    ((l.recordSharableEventInviteMessages = u),
      (l.recordSharableEventInviteMessagesFrom = c),
      (l.getSharableEventInviteMessageKeys = d),
      (l.removeSharableEventInviteMessages = m));
  },
  98,
);
