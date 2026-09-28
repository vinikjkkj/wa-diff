__d(
  "WAWebGroupMsgSendUtils",
  [
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebMsgGetters",
    "WAWebResolveGroupAgentParticipants",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaParticipant",
    "WAWebWamGroupMetricUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a,
            i = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .get(t);
          i == null &&
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "_getGroupData: no group metadata record found for: ",
                  "",
                ])),
              t,
            );
          var l = yield o(
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
              (s.isLidAddressingMode = u),
              (s.isCapiGroup = i.hasCapi === !0),
              (s.isOpenBotGroup =
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                i.isOpenBotGroup === !0),
              (s.isTeeBotGroup =
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                i.isTeeBotGroup === !0));
          }
          if (n != null) {
            var m = o("WAWebGroupUtils").amIGroupAdmin(n.admins);
            ((s.amIAdmin = m),
              Object.assign(
                s,
                o("WAWebWamGroupMetricUtils").getGroupMetricsFromDbRecord(n),
              ));
          }
          return s;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSchemaParticipant")
            .getParticipantTable()
            .get(e);
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return t.isCag === !0
        ? o("WAWebMsgGetters").getIsReaction(e) ||
            o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type)
        : !1;
    }
    function _(e) {
      var t = e.filter(function (e) {
          return e.isLid();
        }),
        n = e.length - t.length;
      return t.length + " lid participants & " + n + " pn participants";
    }
    function f(e) {
      var t = e.isLidAddressingMode === !0 ? "lid" : "pn",
        n = e.isCag === !0 ? "cag" : "nonCag";
      return "group type: " + t + ", " + n;
    }
    ((l.getGroupData = u),
      (l.getParticipantRecord = d),
      (l.isCagAddon = p),
      (l.formatWidTypeCountsForLog = _),
      (l.formatGroupTypeForLog = f));
  },
  98,
);
