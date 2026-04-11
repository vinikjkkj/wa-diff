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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(20),
        i;
      a[0] !== e
        ? ((i = o("WAWebFrontendMsgGetters").getChat(e)),
          (a[0] = e),
          (a[1] = i))
        : (i = a[1]);
      var l = i,
        s = (t = e.id) == null ? void 0 : t.id,
        u =
          o("WAWebABProps").getABPropConfigValue(
            "biz_vpv_impression_logging_enabled",
          ) === !0,
        c = l == null ? void 0 : l.id,
        d = e.from,
        m;
      if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
        var p;
        ((m = [
          (p = o("WAWebChatGetters")).getIsNewsletter,
          p.getIsGroup,
          p.getArchive,
          p.getMuteExpiration,
        ]),
          (a[2] = m));
      } else m = a[2];
      var _ = o("useWAWebChatValues").useChatValues(c, m),
        f = _[0],
        g = _[1],
        h = _[2],
        y = _[3],
        C;
      a[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = [
            o("WAWebContactGetters").getIsEnterprise,
            o("WAWebContactGetters").getIsHosted,
          ]),
          (a[3] = C))
        : (C = a[3]);
      var b = o("useWAWebContactValues").useOptionalContactValues(d, C),
        v = (n = b == null ? void 0 : b[0]) != null ? n : !1,
        S = (r = b == null ? void 0 : b[1]) != null ? r : !1,
        R;
      if (a[4] === Symbol.for("react.memo_cache_sentinel")) {
        var L;
        ((R = [
          (L = o("WAWebMsgGetters")).getHsmTag,
          L.getT,
          L.getClientReceivedTsMillis,
          L.getBizSource,
        ]),
          (a[4] = R));
      } else R = a[4];
      var E = o("useWAWebMsgValues").useMsgValues(e.id, R),
        k = E[0],
        I = E[1],
        T = E[2],
        D = E[3],
        x = o("WAWebBizVPVEligibility").isEligibleForBizVPV(
          e,
          v,
          S,
          g != null ? g : !1,
        ),
        $ = u && !f && s != null && c != null && x,
        P;
      e: {
        if (!$ || s == null || c == null) {
          P = null;
          break e;
        }
        var N = o("WAWebMsgGetters").isBizSourceFromMarketingMessage(D)
            ? o("WAWebWamEnumQbmFlag").QBM_FLAG.MARKETING_MESSAGE_SMB
            : k === "UTILITY"
              ? o("WAWebWamEnumQbmFlag").QBM_FLAG.TRANSACTIONAL
              : k === "MARKETING"
                ? o("WAWebWamEnumQbmFlag").QBM_FLAG.PROMOTIONAL
                : k === "AUTHENTICATION"
                  ? o("WAWebWamEnumQbmFlag").QBM_FLAG.OTP
                  : o("WAWebWamEnumQbmFlag").QBM_FLAG.OTHER,
          M;
        a[5] !== e
          ? ((M = o(
              "WAWebBizMessageAttributionFields",
            ).extractBizMessageAttribution(e)),
            (a[5] = e),
            (a[6] = M))
          : (M = a[6]);
        var w = M,
          A;
        a[7] !== c ? ((A = c.toString()), (a[7] = c), (a[8] = A)) : (A = a[8]);
        var F = v
            ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
            : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB,
          O = h
            ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
            : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
          B = y > 0,
          W;
        (a[9] !== w ||
        a[10] !== T ||
        a[11] !== k ||
        a[12] !== N ||
        a[13] !== I ||
        a[14] !== s ||
        a[15] !== A ||
        a[16] !== F ||
        a[17] !== O ||
        a[18] !== B
          ? ((W = babelHelpers.extends(
              {
                messageId: s,
                chatId: A,
                qbmFlag: N,
                contactType: F,
                hsmTagStr: k,
                readReceiptsEnabled: !0,
                chatsFolderType: O,
                isMuted: B,
                isBroadcastMessage: !1,
                isInsubContact: !1,
                serverTimestamp: I,
                clientReceivedTsMillis: T,
              },
              w,
              {
                messageBodyType: o("WAWebWamEnumMessageBodyTypeEnum")
                  .MESSAGE_BODY_TYPE_ENUM.MESSAGE,
              },
            )),
            (a[9] = w),
            (a[10] = T),
            (a[11] = k),
            (a[12] = N),
            (a[13] = I),
            (a[14] = s),
            (a[15] = A),
            (a[16] = F),
            (a[17] = O),
            (a[18] = B),
            (a[19] = W))
          : (W = a[19]),
          (P = W));
      }
      return P;
    }
    l.default = u;
  },
  98,
);
