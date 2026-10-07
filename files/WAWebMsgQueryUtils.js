__d(
  "WAWebMsgQueryUtils",
  [
    "WAPromiseProps",
    "WATypeUtils",
    "WAWebCollectionConstants",
    "WAWebDBGetGroupMemberUpdateMessages",
    "WAWebDBGroupAgentRichResponseLinkBackfill",
    "WAWebDBMessageFindLocal",
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
            i = yield o("WAWebDBMessageFindLocal").msgFindStarred({
              count: r,
              chat: e != null ? e : void 0,
              anchor: n,
            });
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
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r =
              typeof t == "number" && !Number.isNaN(t)
                ? t
                : o("WAWebCollectionConstants").PAGE_SIZE,
            a = { add: "search" },
            i = yield o("WAWebDBMessageFindLocal").msgFindEvents({
              count: r,
              chat: e,
              anchor: n,
            });
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            i,
            a,
            "msgCollectionGetEvents",
          );
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
              typeof e == "number" && !isNaN(e)
                ? e
                : o("WAWebCollectionConstants").PAGE_SIZE,
            r = yield o("WAWebDBMessageFindLocal").msgFindCallLog({
              count: n,
              anchor: t,
            });
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            r,
            { add: "search" },
            "msgCollectionGetVoipCallLogs",
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e != null ? e : o("WAWebMsgCollection").MEDIA_QUERY_LIMIT,
            a = n === "after" ? "after" : "before",
            i = yield o("WAWebDBMessageFindLocal").getAllDocsMessages({
              chat: t == null ? void 0 : t.remote,
              count: r,
              direction: a,
              msgKey: t,
            });
          return o("WAWebMsgCollection").MsgCollection.processMultipleMessages(
            void 0,
            i,
            { add: "search" },
            "msgCollectionGetAllMedia",
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r, o) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            var i =
                o("WATypeUtils").isNumber(t) && t !== 0
                  ? t
                  : o("WAWebCollectionConstants").PAGE_SIZE,
              l = n || "before",
              s = { add: "search" },
              u = yield o("WAWebDBMessageFindLocal").msgFindMedia({
                count: i,
                mediaType: a,
                direction: l,
                chat: e,
                anchor: r,
              });
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
        b.apply(this, arguments)
      );
    }
    ((l.getStarred = e),
      (l.getEventMsgs = u),
      (l.getGroupMemberUpdateMsgs = d),
      (l.getVoipCallLogMsgs = p),
      (l.getAllDocsMsgs = f),
      (l.backfillGroupAgentRichResponseLinks = h),
      (l.queryMedia = C));
  },
  98,
);
