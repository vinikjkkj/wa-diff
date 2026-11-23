__d(
  "WAWebGroupMsgSendUtils",
  [
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebMsgGetters",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebWamGroupMetricUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t, n, r) {
      var a,
        i = await o("WAWebSchemaGroupMetadata").getGroupMetadataTable().get(t);
      i == null &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "_getGroupData: no group metadata record found for: ",
              "",
            ])),
          t,
        );
      var l = await o(
          "WAWebResolveGroupAgentParticipants",
        ).resolveGroupAgentParticipants(
          (a = n == null ? void 0 : n.participants) != null ? a : [],
        ),
        s = {
          groupId: t,
          amIAdmin: null,
          isCag: null,
          isLid: null,
          isLidAddressingMode: null,
          wamTypeOfGroup: null,
          participantCount: null,
          deviceCount: null,
          deviceSizeBucket: null,
          isAnnouncementGroup: null,
          isCapiGroup: null,
          isOpenBotGroup: null,
          isTeeBotGroup: null,
          groupAgentParticipants: l,
        },
        u = (i == null ? void 0 : i.isLidAddressingMode) === !0;
      if (i != null) {
        var c = o("WAWebGroupMetadataGetters").getGroupType(i),
          d = c === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
        ((s.wamTypeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(c)),
          (s.isLid = d && (r == null ? void 0 : r.type) === "addon"),
          (s.isCag = d),
          (s.isAnnouncementGroup = i.announce),
          (s.isLidAddressingMode = u),
          (s.isCapiGroup = i.hasCapi === !0),
          (s.isOpenBotGroup =
            o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            i.isOpenBotGroup === !0));
      }
      if (n != null) {
        var m = o("WAWebGroupUtils").amIGroupAdmin(n.admins);
        ((s.amIAdmin = m),
          (s.isTeeBotGroup = n.participants.includes(
            o("WAWebBotUtils").META_BOT_TEE_FBID_WID.toString(),
          )),
          (s = babelHelpers.extends(
            {},
            s,
            o("WAWebWamGroupMetricUtils").getGroupMetricsFromDbRecord(n),
          )));
      }
      return s;
    }
    async function c(e) {
      var t = await o("WAWebSchemaParticipant").getParticipantTable().get(e);
      return (
        t == null &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "_getParticipantRecord: no participants record found for: ",
                "",
              ])),
            e,
          ),
        t
      );
    }
    function d(e, t) {
      return t.isCag === !0
        ? o("WAWebMsgGetters").getIsReaction(e) ||
            o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type)
        : !1;
    }
    function m(e) {
      var t = e.filter(function (e) {
          return e.isLid();
        }),
        n = e.length - t.length;
      return t.length + " lid participants & " + n + " pn participants";
    }
    function p(e) {
      var t = e.isLidAddressingMode === !0 ? "lid" : "pn",
        n = e.isCag === !0 ? "cag" : "nonCag";
      return "group type: " + t + ", " + n;
    }
    ((l.getGroupData = u),
      (l.getParticipantRecord = c),
      (l.isCagAddon = d),
      (l.formatWidTypeCountsForLog = m),
      (l.formatGroupTypeForLog = p));
  },
  98,
);
