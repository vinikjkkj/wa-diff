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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.isGroupStatus,
        n = e.isQuickReply,
        a = e.mediaHeight,
        i = e.mediaWidth,
        l = e.msg,
        s = e.replyType,
        u = e.result,
        c = e.sessionId,
        d = e.statusContact,
        m = e.statusContentType,
        p = e.viewerSessionId,
        _ = o("WAWebConnModel").Conn.isSMB
          ? {
              isPosterBiz: d.isBusiness,
              isPosterInAddressBook: o(
                "WAWebFrontendContactGetters",
              ).getIsMyContact(d),
            }
          : {},
        f = !!o("WAWebMsgGetters").getStatusMentioned(l),
        g = o("WAWebFrontendContactGetters").getIsMyContact(d),
        h = t ? r("WAWebGroupMetadataCollection").get(d.id) : null,
        y = t && h != null && h.isTrusted(),
        C = o("WAWebWamEnumStatusPosterContactType").STATUS_POSTER_CONTACT_TYPE
          .UNKNOWN;
      (g
        ? (C = o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.CONTACT)
        : y &&
          (C = o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.TRUSTED_GROUP_MEMBER),
        (async function (e) {
          var r = await o("WAWebStatusLoggingUtils").statusIdForLogging(l),
            d = new (o("WAWebStatusReplyWamEvent").StatusReplyWamEvent)(
              babelHelpers.extends(
                {
                  isMentioned: f,
                  isRecentQuickReplyUsed: n,
                  mediaHeight: a,
                  mediaWidth: i,
                  replyEntryMethod: o("WAWebWamEnumReplyEntryMethod")
                    .REPLY_ENTRY_METHOD.TAP_REPLY_BAR,
                  statusCategory: t
                    ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .GROUP_STATUS
                    : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
                        .REGULAR_STATUS,
                  statusContentType: m,
                  statusId: r,
                  statusPosterContactType: C,
                  statusReplyMessageType: s,
                  statusReplyResult: u,
                  statusSessionId: c,
                  statusViewerSessionId: p,
                  unifiedSessionId:
                    (e = o(
                      "WAWebUnifiedSession",
                    ).UnifiedSessionManager.getSessionId()) != null
                      ? e
                      : void 0,
                  updatesTabSessionId: c,
                },
                _,
              ),
            );
          c != null && d.commit();
        })());
    }
    l.logStatusReply = e;
  },
  98,
);
