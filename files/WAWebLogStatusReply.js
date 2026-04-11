__d(
  "WAWebLogStatusReply",
  [
    "WAWebConnModel",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebMsgGetters",
    "WAWebStatusLoggingUtils",
    "WAWebStatusReplyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumReplyEntryMethod",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusPosterContactType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.isGroupStatus,
        a = e.isQuickReply,
        i = e.mediaHeight,
        l = e.mediaWidth,
        s = e.msg,
        u = e.replyType,
        c = e.result,
        d = e.sessionId,
        m = e.statusContact,
        p = e.statusContentType,
        _ = e.viewerSessionId,
        f = o("WAWebConnModel").Conn.isSMB
          ? {
              isPosterBiz: m.isBusiness,
              isPosterInAddressBook: o(
                "WAWebFrontendContactGetters",
              ).getIsMyContact(m),
            }
          : {},
        g = !!o("WAWebMsgGetters").getStatusMentioned(s),
        h = o("WAWebFrontendContactGetters").getIsMyContact(m),
        y = t ? r("WAWebGroupMetadataCollection").get(m.id) : null,
        C = t && y != null && y.isTrusted(),
        b = o("WAWebWamEnumStatusPosterContactType").STATUS_POSTER_CONTACT_TYPE
          .UNKNOWN;
      (h
        ? (b = o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.CONTACT)
        : C &&
          (b = o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.TRUSTED_GROUP_MEMBER),
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            n = yield o("WAWebStatusLoggingUtils").statusIdForLogging(s),
            r = new (o("WAWebStatusReplyWamEvent").StatusReplyWamEvent)(
              babelHelpers.extends(
                {
                  isMentioned: g,
                  isRecentQuickReplyUsed: a,
                  mediaHeight: i,
                  mediaWidth: l,
                  replyEntryMethod: o("WAWebWamEnumReplyEntryMethod")
                    .REPLY_ENTRY_METHOD.TAP_REPLY_BAR,
                  statusCategory: t
                    ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .GROUP_STATUS
                    : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .REGULAR_STATUS,
                  statusContentType: p,
                  statusId: n,
                  statusPosterContactType: b,
                  statusReplyMessageType: u,
                  statusReplyResult: c,
                  statusSessionId: d,
                  statusViewerSessionId: _,
                  unifiedSessionId:
                    (e = o(
                      "WAWebUnifiedSession",
                    ).UnifiedSessionManager.getSessionId()) != null
                      ? e
                      : void 0,
                  updatesTabSessionId: d,
                },
                f,
              ),
            );
          d != null && r.commit();
        })());
    }
    l.logStatusReply = e;
  },
  98,
);
