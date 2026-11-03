__d(
  "WAWebDBSharableEventInviteMessage",
  [
    "WALogger",
    "WAWebDBSharableEvent",
    "WAWebMsgType",
    "WAWebSchemaSharableEventInviteMessage",
    "WAWebSharableEventGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.length === 0 ||
            !o(
              "WAWebDBSharableEvent",
            ).canUseSharableEventInviteMessageStorage() ||
            (yield o("WAWebSchemaSharableEventInviteMessage")
              .getSharableEventInviteMessageTable()
              .bulkCreateOrReplace([].concat(e)));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.flatMap(function (e) {
            return e.type ===
              o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE &&
              e.sharableEventInviteId != null &&
              e.sharableEventInviteId !== ""
              ? [{ msgKey: e.id.toString(), eventId: e.sharableEventInviteId }]
              : [];
          });
          if (
            !(
              n.length === 0 ||
              !o(
                "WAWebSharableEventGatingUtils",
              ).isEventsV2OnCompanionEnabled() ||
              !o(
                "WAWebDBSharableEvent",
              ).canUseSharableEventInviteMessageStorage()
            )
          )
            try {
              (yield u(n),
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
          if (
            !o("WAWebDBSharableEvent").canUseSharableEventInviteMessageStorage()
          )
            return [];
          var t = yield o("WAWebSchemaSharableEventInviteMessage")
            .getSharableEventInviteMessageTable()
            .equals(["eventId"], e);
          return t.map(function (e) {
            return e.msgKey;
          });
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
          e.length === 0 ||
            !o(
              "WAWebDBSharableEvent",
            ).canUseSharableEventInviteMessageStorage() ||
            (yield o("WAWebSchemaSharableEventInviteMessage")
              .getSharableEventInviteMessageTable()
              .bulkRemove([].concat(e)));
        })),
        g.apply(this, arguments)
      );
    }
    ((l.recordSharableEventInviteMessages = u),
      (l.recordSharableEventInviteMessagesFrom = d),
      (l.getSharableEventInviteMessageKeys = p),
      (l.removeSharableEventInviteMessages = f));
  },
  98,
);
