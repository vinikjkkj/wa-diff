__d(
  "WASmaxGroupsMemberAddModeChangeNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsGroupMemberAddModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "MemberAddModeChangeNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeMemberAddModeChangeNotificationResponseAck: function () {
          return u(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsGroupMemberAddModeMixin",
      ).parseGroupMemberAddModeMixin(e);
      if (!i.success) return i;
      var l = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        s = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ participant: r.value }, a.value, i.value, {
          groupAddressingModeMixin: l.success ? l.value : null,
          participantIdentityMixin: s.success ? s.value : null,
          hasMissingParticipantIdentification: n.value != null,
        }),
      );
    }
    function u(e) {
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
    ((l.receiveMemberAddModeChangeNotificationRPC = e),
      (l.parseMemberAddModeChangeNotificationRequest = s),
      (l.makeMemberAddModeChangeNotificationResponseAck = u));
  },
  98,
);
