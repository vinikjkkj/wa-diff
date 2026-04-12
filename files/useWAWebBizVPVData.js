__d(
  "useWAWebBizVPVData",
  [
    "WAWebABProps",
    "WAWebBizMessageAttributionFields",
    "WAWebBizVPVEligibility",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMsgGetters",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumMessageBodyTypeEnum",
    "WAWebWamEnumQbmFlag",
    "react",
    "useWAWebChatValues",
    "useWAWebContactValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t,
        n,
        r,
        a = o("WAWebFrontendMsgGetters").getChat(e),
        i = (t = e.id) == null ? void 0 : t.id,
        l =
          o("WAWebABProps").getABPropConfigValue(
            "biz_vpv_impression_logging_enabled",
          ) === !0,
        u = a == null ? void 0 : a.id,
        c = e.from,
        d = o("useWAWebChatValues").useChatValues(u, [
          o("WAWebChatGetters").getIsNewsletter,
          o("WAWebChatGetters").getIsGroup,
          o("WAWebChatGetters").getArchive,
          o("WAWebChatGetters").getMuteExpiration,
        ]),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = o("useWAWebContactValues").useOptionalContactValues(c, [
          o("WAWebContactGetters").getIsEnterprise,
          o("WAWebContactGetters").getIsHosted,
        ]),
        h = (n = g == null ? void 0 : g[0]) != null ? n : !1,
        y = (r = g == null ? void 0 : g[1]) != null ? r : !1,
        C = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getHsmTag,
          o("WAWebMsgGetters").getT,
          o("WAWebMsgGetters").getClientReceivedTsMillis,
          o("WAWebMsgGetters").getBizSource,
        ]),
        b = C[0],
        v = C[1],
        S = C[2],
        R = C[3],
        L = o("WAWebBizVPVEligibility").isEligibleForBizVPV(
          e,
          h,
          y,
          p != null ? p : !1,
        ),
        E = l && !m && i != null && u != null && L;
      return s(
        function () {
          if (!E || i == null || u == null) return null;
          var t = o("WAWebMsgGetters").isBizSourceFromMarketingMessage(R)
              ? o("WAWebWamEnumQbmFlag").QBM_FLAG.MARKETING_MESSAGE_SMB
              : b === "UTILITY"
                ? o("WAWebWamEnumQbmFlag").QBM_FLAG.TRANSACTIONAL
                : b === "MARKETING"
                  ? o("WAWebWamEnumQbmFlag").QBM_FLAG.PROMOTIONAL
                  : b === "AUTHENTICATION"
                    ? o("WAWebWamEnumQbmFlag").QBM_FLAG.OTP
                    : o("WAWebWamEnumQbmFlag").QBM_FLAG.OTHER,
            n = o(
              "WAWebBizMessageAttributionFields",
            ).extractBizMessageAttribution(e);
          return babelHelpers.extends(
            {
              messageId: i,
              chatId: u.toString(),
              qbmFlag: t,
              contactType: h
                ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
                : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB,
              hsmTagStr: b,
              readReceiptsEnabled: !0,
              chatsFolderType: _
                ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
              isMuted: f > 0,
              isBroadcastMessage: !1,
              isInsubContact: !1,
              serverTimestamp: v,
              clientReceivedTsMillis: S,
            },
            n,
            {
              messageBodyType: o("WAWebWamEnumMessageBodyTypeEnum")
                .MESSAGE_BODY_TYPE_ENUM.MESSAGE,
            },
          );
        },
        [_, R, u, S, b, h, e, f, v, E, i],
      );
    }
    l.default = u;
  },
  98,
);
