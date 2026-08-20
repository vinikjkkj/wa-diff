__d(
  "WAWebLogStatusMute",
  [
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebStatusLoggingUtils",
    "WAWebStatusMuteWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusPosterContactType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.contact,
        n = e.isContact,
        a = e.isGroupStatus,
        i = e.isNewsletterStatus;
      if (i)
        return {
          statusCategory: o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
            .CHANNEL_STATUS,
          statusPosterContactType: o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.CHANNEL,
        };
      var l = o("WAWebWamEnumStatusPosterContactType")
        .STATUS_POSTER_CONTACT_TYPE.UNKNOWN;
      if (n)
        l = o("WAWebWamEnumStatusPosterContactType").STATUS_POSTER_CONTACT_TYPE
          .CONTACT;
      else if (a) {
        var s = r("WAWebGroupMetadataCollection").get(t.id);
        s != null &&
          s.isTrusted() &&
          (l = o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.TRUSTED_GROUP_MEMBER);
      }
      return {
        statusCategory: a
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS,
        statusPosterContactType: l,
      };
    }
    function s(t) {
      var n,
        r = t.contact,
        a = t.isGroupStatus,
        i = t.muteAction,
        l = t.muteOrigin,
        s = t.sessionId,
        u = t.viewerSessionId,
        c = r.id.isNewsletter(),
        d = o("WAWebFrontendContactGetters").getIsMyContact(r),
        m = o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn)
          ? { isPosterBiz: r.isBusiness, isPosterInAddressBook: d }
          : {},
        p = new (o("WAWebStatusMuteWamEvent").StatusMuteWamEvent)(
          babelHelpers.extends(
            {
              cid: o("WAWebStatusLoggingUtils").channelStatusCid(r.id),
              muteAction: i,
              muteOrigin: l,
            },
            e({
              contact: r,
              isContact: d,
              isGroupStatus: a,
              isNewsletterStatus: c,
            }),
            {
              statusSessionId: s,
              statusViewerSessionId: u,
              unifiedSessionId:
                (n = o(
                  "WAWebUnifiedSession",
                ).UnifiedSessionManager.getSessionId()) != null
                  ? n
                  : void 0,
              updatesTabSessionId: s,
            },
            m,
          ),
        );
      p.commit();
    }
    l.logStatusMute = s;
  },
  98,
);
