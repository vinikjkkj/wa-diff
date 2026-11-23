__d(
  "WASmaxGroupsJoinNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsDedupAttrsMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxInGroupsParticipantPNMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsNotificationClientAckMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("JoinNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeJoinNotificationResponseAck: function () {
          return m(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "create");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "group");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "new",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "reason",
        o("WASmaxInGroupsEnums")
          .ENUM_ACCEPT_AUTOADD_DEFAULTSUBGROUPADMINADD_GENERALCHATAUTOADD_INVITE_INVITEAUTOADD_LINKEDGROUPJOIN_SUBGROUPSUGGESTIONAPPROVED,
      );
      if (!s.success) return s;
      var d = o("WASmaxParseUtils").attrIntRange(r.value, "size", 1, 19999);
      if (!d.success) return d;
      var m = o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(r.value);
      if (!m.success) return m;
      var p = u(n.value),
        _ = o("WASmaxInGroupsDedupAttrsMixin").parseDedupAttrsMixin(n.value),
        f = o(
          "WASmaxInGroupsCommonNotificationMixin",
        ).parseCommonNotificationMixin(e);
      if (!f.success) return f;
      var g = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        h = c(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            participant: i.value,
            createType: l.value,
            createReason: s.value,
            createGroupSize: d.value,
            createGroupGroupInfoMixin: m.value,
            createOptionalContextGroupMixin: p.success ? p.value : null,
            createDedupAttrsMixin: _.success ? _.value : null,
          },
          f.value,
          {
            groupAddressingModeMixin: g.success ? g.value : null,
            participantIdentityAndCountryCodeMixin: h.success ? h.value : null,
            hasMissingParticipantIdentification: a.value != null,
          },
        ),
      );
    }
    function u(e) {
      var t = o("WASmaxParseJid").attrGroupJid(e, "context_group_jid");
      return t.success
        ? o("WAResultOrError").makeResult({ contextGroupJid: t.value })
        : t;
    }
    function c(e) {
      var t = o("WASmaxInGroupsParticipantPNMixin").parseParticipantPNMixin(e),
        n = d(e);
      return o("WAResultOrError").makeResult({
        participantPNMixin: t.success ? t.value : null,
        participantUsernameWithCountryCodeMixin: n.success ? n.value : null,
      });
    }
    function d(e) {
      var t = o("WASmaxParseUtils").attrString(e, "participant_username");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_country_code",
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            participantUsername: t.value,
            participantCountryCode: n.value,
          })
        : n;
    }
    function m(e) {
      var t = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrUserJid,
        e,
        ["participant"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o(
        "WASmaxOutGroupsNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(
        o("WASmaxJsx").smax("ack", {
          participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, t.value),
        }),
        e,
      );
      return n;
    }
    ((l.receiveJoinNotificationRPC = e),
      (l.parseJoinNotificationRequest = s),
      (l.makeJoinNotificationResponseAck = m));
  },
  98,
);
