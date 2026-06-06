__d(
  "WAWebGroupMsgSendUtils",
  [
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebGroupType",
    "WAWebGroupUtils",
    "WAWebMsgGetters",
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
          var a = yield o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .get(t);
          a == null &&
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "_getGroupData: no group metadata record found for: ",
                  "",
                ])),
              t,
            );
          var i = {
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
            },
            l = (a == null ? void 0 : a.isLidAddressingMode) === !0;
          if (a != null) {
            var s = o("WAWebGroupType").getGroupTypeFromGroupMetadata(a),
              u = s === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
            ((i.wamTypeOfGroup = o("WAWebGroupType").groupTypeToWamEnum(s)),
              (i.isLid = u && (r == null ? void 0 : r.type) === "addon"),
              (i.isCag = u),
              (i.isLidAddressingMode = l),
              (i.isCapiGroup = a.hasCapi === !0),
              (i.isOpenBotGroup =
                o(
                  "WAWebBotGroupGatingUtils",
                ).isOpenGroupBotParticipantAddEnabled() &&
                a.isOpenBotGroup === !0),
              (i.isTeeBotGroup =
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled() &&
                a.isTeeBotGroup === !0));
          }
          if (n != null) {
            var c = o("WAWebGroupUtils").amIGroupAdmin(n.admins);
            ((i.amIAdmin = c),
              Object.assign(
                i,
                o("WAWebWamGroupMetricUtils").getGroupMetricsFromDbRecord(n),
              ));
          }
          return i;
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
