__d(
  "WAWebMsgQueryUtils",
  [
    "WAPromiseProps",
    "WATypeUtils",
    "WAWebBackendRuntime",
    "WAWebCollectionConstants",
    "WAWebDBGetGroupMemberUpdateMessages",
    "WAWebDBGroupAgentRichResponseLinkBackfill",
    "WAWebDBMessageFindLocal",
    "WAWebMessageQueryService",
    "WAWebMsgCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
              typeof t == "number" && !isNaN(t)
                ? t
                : o("WAWebCollectionConstants").PAGE_SIZE,
            a = { add: "search" },
            i = yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageQueryService").MessageQueryService,
                  ).msgFindStarred
                : o("WAWebDBMessageFindLocal").msgFindStarred
            )({ count: r, chat: e != null ? e : void 0, anchor: n });
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            i,
            a,
            "msgCollectionGetStarred",
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebMessageQueryService").MessageQueryService,
            ).msgCountStarred
          : o("WAWebDBMessageFindLocal").msgCountStarred
      )({ chat: e });
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
              typeof t == "number" && !Number.isNaN(t)
                ? t
                : o("WAWebCollectionConstants").PAGE_SIZE,
            a = { add: "search" },
            i = yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageQueryService").MessageQueryService,
                  ).msgFindEvents
                : o("WAWebDBMessageFindLocal").msgFindEvents
            )({ count: r, chat: e, anchor: n });
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            i,
            a,
            "msgCollectionGetEvents",
          );
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
              typeof t == "number" && !Number.isNaN(t)
                ? t
                : o("WAWebCollectionConstants").PAGE_SIZE,
            a = { add: "search" },
            i = yield o(
              "WAWebDBGetGroupMemberUpdateMessages",
            ).getGroupMemberUpdateMessagesForChat(e, r, n);
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            i,
            a,
            "msgCollectionGetGroupMemberUpdates",
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
              typeof e == "number" && !isNaN(e)
                ? e
                : o("WAWebCollectionConstants").PAGE_SIZE,
            r = yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageQueryService").MessageQueryService,
                  ).msgFindCallLog
                : o("WAWebDBMessageFindLocal").msgFindCallLog
            )({ count: n, anchor: t });
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            r,
            { add: "search" },
            "msgCollectionGetVoipCallLogs",
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.count,
            n = e.direction,
            r = e.msgKey,
            a = t != null ? t : o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
            i = n === "after" ? "after" : "before",
            l = yield (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageQueryService").MessageQueryService,
                  ).getAllDocsMessages
                : o("WAWebDBMessageFindLocal").getAllDocsMessages
            )({
              chat: r == null ? void 0 : r.remote,
              count: a,
              direction: i,
              msgKey: r,
            });
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            l,
            { add: "search" },
            "msgCollectionGetAllMedia",
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebDBGroupAgentRichResponseLinkBackfill",
          ).backfillGroupAgentRichResponseLinkIndex(e);
          return t.length === 0
            ? []
            : o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
                void 0,
                t,
                { add: "search" },
                "msgCollectionQueryMedia",
              );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n, r, o) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i =
                o("WATypeUtils").isNumber(t) && t !== 0
                  ? t
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              l = n || "before",
              s = { add: "search" },
              u = yield (
                o("WAWebBackendRuntime").isWebDiBackendEnabled()
                  ? o("WAWebBackendRuntime").runtime(
                      o("WAWebMessageQueryService").MessageQueryService,
                    ).msgFindMedia
                  : o("WAWebDBMessageFindLocal").msgFindMedia
              )({ count: i, mediaType: a, direction: l, chat: e, anchor: r });
            return Array.isArray(u)
              ? o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
                  void 0,
                  u,
                  { add: "search" },
                  "msgCollectionQueryMedia",
                )
              : o("WAPromiseProps").promiseProps({
                  docCount: u.docCount,
                  linkCount: u.linkCount,
                  mediaCount: u.mediaCount,
                  messages: o(
                    "WAWebMsgCollection",
                  ).MsgCollection.processMultipleMessages(
                    void 0,
                    u.messages,
                    s,
                    "msgCollectionQueryMedia",
                  ),
                });
          },
        )),
        v.apply(this, arguments)
      );
    }
    ((l.getStarred = e),
      (l.countStarred = u),
      (l.getEventMsgs = c),
      (l.getGroupMemberUpdateMsgs = m),
      (l.getVoipCallLogMsgs = _),
      (l.getAllDocsMsgs = g),
      (l.backfillGroupAgentRichResponseLinks = y),
      (l.queryMedia = b));
  },
  98,
);
