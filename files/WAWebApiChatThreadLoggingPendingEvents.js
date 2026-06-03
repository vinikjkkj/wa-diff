__d(
  "WAWebApiChatThreadLoggingPendingEvents",
  [
    "WAWebChatThreadLoggingBoolFlagFields",
    "WAWebChatThreadLoggingCountFields",
    "WAWebPromiseQueue",
    "WAWebSchemaChatThreadLoggingPendingEvents",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = Object.freeze({
        msgsSent: 0,
        msgsReceived: 0,
        msgsRead: 0,
        viewOnceMsgsSent: 0,
        viewOnceMsgsReceived: 0,
        viewOnceMessagesOpened: 0,
        callOffersSent: 0,
        callOffersReceived: 0,
        totalCallDuration: 0,
        commerceMsgsSent: 0,
        commerceMsgsReceived: 0,
        pdpInquiriesSent: 0,
        reactionsSent: 0,
        reactionsReceived: 0,
        forwardMessagesSent: 0,
        forwardMessagesReceived: 0,
        editedMsgsSent: 0,
        botMessagesSent: 0,
        botMessagesReceived: 0,
        botMessagesEdited: 0,
        eventCreationMessagesSent: 0,
        eventCreationMessagesReceived: 0,
        eventResponseMessagesSent: 0,
        eventResponseMessagesReceived: 0,
        eventGroupStatusReplyOthersToOwn: 0,
        eventGroupStatusReplyOthersToOthers: 0,
        eventGroupStatusReplyOwnToOthers: 0,
        eventGroupStatusReplyOwnToOwn: 0,
        eventGroupStatusLikeOthersToOthers: 0,
        eventGroupStatusLikeOthersToOwn: 0,
      }),
      s = Object.freeze(
        babelHelpers.extends(
          {},
          o("WAWebChatThreadLoggingCountFields").COUNT_FIELDS,
          o("WAWebChatThreadLoggingBoolFlagFields").FLAG_FIELDS,
          e,
        ),
      ),
      u = new (o("WAWebPromiseQueue").PromiseQueue)();
    function c(e) {
      return u.enqueue(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WAWebSchemaChatThreadLoggingPendingEvents")
              .getChatThreadLoggingPendingEventsTable()
              .bulkGet(
                e.map(function (e) {
                  var t = e.chatId,
                    n = e.startTs;
                  return [t, n];
                }),
              ),
            n = t.map(function (t, n) {
              var r = e[n],
                a = d(r.chatId, r.startTs, t);
              return (
                o(
                  "WAWebChatThreadLoggingCountFields",
                ).COUNT_FIELD_NAMES.forEach(function (e) {
                  a[e] += r[e];
                }),
                o(
                  "WAWebChatThreadLoggingBoolFlagFields",
                ).FLAG_FIELD_NAMES.forEach(function (e) {
                  a[e] = r[e];
                }),
                (a.msgsSent += r.addMsgsSent),
                (a.msgsReceived += r.addMsgsReceived),
                (a.msgsRead += r.addMsgsRead),
                (a.viewOnceMsgsSent += r.addViewOnceMsgsSent),
                (a.viewOnceMsgsReceived += r.addViewOnceMsgsReceived),
                (a.viewOnceMessagesOpened += r.addViewOnceMsgsOpened),
                (a.callOffersSent += r.addCallOffersSent),
                (a.callOffersReceived += r.addCallOffersReceived),
                (a.totalCallDuration += r.addTotalCallDuration),
                (a.commerceMsgsSent += r.addCommerceMsgsSent),
                (a.commerceMsgsReceived += r.addCommerceMsgsReceived),
                (a.pdpInquiriesSent += r.addPdpInquiriesSent),
                (a.reactionsSent += r.addReactionsSent),
                (a.reactionsReceived += r.addReactionsReceived),
                (a.forwardMessagesSent += r.addForwardMessagesSent),
                (a.forwardMessagesReceived += r.addForwardMessagesReceived),
                (a.editedMsgsSent += r.addEditedMsgsSent),
                (a.botMessagesSent += r.addBotMessagesSent),
                (a.botMessagesReceived += r.addBotMessagesReceived),
                (a.botMessagesEdited += r.addBotMessagesEdited),
                (a.eventCreationMessagesSent += r.addEventCreationMessagesSent),
                (a.eventCreationMessagesReceived +=
                  r.addEventCreationMessagesReceived),
                (a.eventResponseMessagesSent += r.addEventResponseMessagesSent),
                (a.eventResponseMessagesReceived +=
                  r.addEventResponseMessagesReceived),
                (a.eventGroupStatusReplyOthersToOwn +=
                  r.addEventGroupStatusReplyOthersToOwn),
                (a.eventGroupStatusReplyOthersToOthers +=
                  r.addEventGroupStatusReplyOthersToOthers),
                (a.eventGroupStatusReplyOwnToOthers +=
                  r.addEventGroupStatusReplyOwnToOthers),
                (a.eventGroupStatusReplyOwnToOwn +=
                  r.addEventGroupStatusReplyOwnToOwn),
                (a.eventGroupStatusLikeOthersToOthers +=
                  r.addEventGroupStatusLikeOthersToOthers),
                (a.eventGroupStatusLikeOthersToOwn +=
                  r.addEventGroupStatusLikeOthersToOwn),
                a
              );
            });
          return o("WAWebSchemaChatThreadLoggingPendingEvents")
            .getChatThreadLoggingPendingEventsTable()
            .bulkCreateOrReplace(n);
        }),
      );
    }
    function d(t, n, r) {
      return r == null
        ? babelHelpers.extends({ chatId: t, startTs: n }, s)
        : (o("WAWebChatThreadLoggingBoolFlagFields").FLAG_FIELD_NAMES.forEach(
            function (e) {
              r[e] == null && (r[e] = s[e]);
            },
          ),
          o("WAWebChatThreadLoggingCountFields").COUNT_FIELD_NAMES.forEach(
            function (e) {
              r[e] == null && (r[e] = s[e]);
            },
          ),
          Object.keys(e).forEach(function (e) {
            r[e] == null && (r[e] = s[e]);
          }),
          r);
    }
    function m(e, t) {
      return o("WAWebSchemaChatThreadLoggingPendingEvents")
        .getChatThreadLoggingPendingEventsTable()
        .get([e, t]);
    }
    function p(e) {
      return o("WAWebSchemaChatThreadLoggingPendingEvents")
        .getChatThreadLoggingPendingEventsTable()
        .lessThan(["startTs"], e, { inclusive: !0 });
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaChatThreadLoggingPendingEvents")
            .getChatThreadLoggingPendingEventsTable()
            .bulkDeleteRange(["startTs"], 0, e + 1);
          return t;
        })),
        f.apply(this, arguments)
      );
    }
    ((l.createOrUpdateChatEvents = c),
      (l.getChatEvent = m),
      (l.getBeforeInclusive = p),
      (l.deleteBeforeInclusive = _));
  },
  98,
);
