__d(
  "WAWebMsgInfoUtils",
  [
    "WAWebAgentModelUtils",
    "WAWebBizCtwaAGMUtils",
    "WAWebChatCollection",
    "WAWebFrontendMsgGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebMsgModelUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      return o("WAWebMsgGetters").getIsNewsletterMsg(e) ||
        o("WAWebFrontendMsgGetters").getAsAlbum(e) ||
        o("WAWebFrontendMsgGetters").getAsCallLog(e) ||
        o("WAWebBizCtwaAGMUtils").isAutomatedGreetingMessage({
          isAGMShown:
            (t = e.ctwaContext) == null
              ? void 0
              : t.automatedGreetingMessageShown,
          msgSource: (n = e.ctwaContext) == null ? void 0 : n.sourceApp,
          msgSubtype: e.subtype,
          msgType: e.type,
        })
        ? !1
        : !!(
            o("WAWebMsgGetters").getIsSentByMe(e) &&
            !o("WAWebFrontendMsgGetters").getAsRevoked(e) &&
            !o("WAWebMsgModelUtils").msgMayFail(e) &&
            (!e.isMdHistoryMsg ||
              (o("WAWebAgentModelUtils").canUserSeeMessageAttribution() &&
                e.agentId != null))
          );
    }
    function s(e, t) {
      var n = {};
      return (e.isGroup() && (n.groupData = u(e, t)), n);
    }
    function u(e, t) {
      var n = o("WAWebChatCollection").ChatCollection.get(e),
        r = {
          groupId: e.toString(),
          amIAdmin: null,
          isCag: null,
          isLid: t,
          isLidAddressingMode: null,
          wamTypeOfGroup: null,
          participantCount: null,
          deviceCount: null,
          deviceSizeBucket: null,
          isCapiGroup: null,
          isOpenBotGroup: null,
          isTeeBotGroup: null,
        },
        a = n == null ? void 0 : n.groupMetadata;
      if (a) {
        var i = !!(a != null && a.isLidAddressingMode),
          l = o("WAWebGroupMetadataGetters").getGroupType(a),
          s = l === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        ((r.wamTypeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(l)),
          (r.isCag = s),
          (r.isLidAddressingMode = i),
          (r.isCapiGroup = a.hasCapi === !0),
          (r.amIAdmin = a.participants.iAmAdmin()),
          (r.participantCount = a.participants.length));
      }
      return r;
    }
    ((l.canOpenInfoDrawer = e), (l.getGroupMessageSendReporterOptions = s));
  },
  98,
);
