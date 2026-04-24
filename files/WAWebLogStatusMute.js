__d(
  "WAWebLogStatusMute",
  [
    "WAWebConnModel",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebStatusMuteWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumStatusCategory",
    "WAWebWamEnumStatusPosterContactType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a) {
      if (a)
        return {
          statusCategory: o("WAWebWamEnumStatusCategory").STATUS_CATEGORY
            .CHANNEL_STATUS,
          statusPosterContactType: o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.CHANNEL,
        };
      var i = o("WAWebWamEnumStatusPosterContactType")
        .STATUS_POSTER_CONTACT_TYPE.UNKNOWN;
      if (t)
        i = o("WAWebWamEnumStatusPosterContactType").STATUS_POSTER_CONTACT_TYPE
          .CONTACT;
      else if (n) {
        var l = r("WAWebGroupMetadataCollection").get(e.id);
        l != null &&
          l.isTrusted() &&
          (i = o("WAWebWamEnumStatusPosterContactType")
            .STATUS_POSTER_CONTACT_TYPE.TRUSTED_GROUP_MEMBER);
      }
      return {
        statusCategory: n
          ? o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.GROUP_STATUS
          : o("WAWebWamEnumStatusCategory").STATUS_CATEGORY.REGULAR_STATUS,
        statusPosterContactType: i,
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
        m = o("WAWebConnModel").Conn.isSMB
          ? { isPosterBiz: r.isBusiness, isPosterInAddressBook: d }
          : {},
        p = new (o("WAWebStatusMuteWamEvent").StatusMuteWamEvent)(
          babelHelpers.extends(
            { cid: c ? r.id.user : void 0, muteAction: i, muteOrigin: l },
            e(r, d, a, c),
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
