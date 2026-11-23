__d(
  "WASmaxGroupsRemoveNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxInGroupsParticipantMixin",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("RemoveNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeRemoveNotificationResponseAck: function () {
          return u(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "remove");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChild(
        e,
        "missing_participant_identification",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      if (!i.success) return i;
      var l = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        s = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e),
        u = c(n.value);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ participant: a.value }, i.value, {
              groupAddressingModeMixin: l.success ? l.value : null,
              participantIdentityMixin: s.success ? s.value : null,
              removeRemoveNotificationOrRemoveNotificationNonMemberMixinGroup:
                u.value,
              hasMissingParticipantIdentification: r.value != null,
            }),
          )
        : u;
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
    function c(e) {
      var t = m(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RemoveNotificationMember",
          value: t.value,
        });
      var n = p(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "RemoveNotificationNonMember",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Member", "NonMember"],
            [t, n],
          );
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "remove");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "v_id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "prev_v_id",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "subject",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "reason",
        "default_sub_group_demote",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        e,
        "participant",
        1,
        19999,
        d,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            vId: n.value,
            prevVId: r.value,
            subject: a.value,
            reason: i.value,
            participant: l.value,
          })
        : l;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "remove");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "participant");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "subject",
      );
      if (!r.success) return r;
      var a = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(
        n.value,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            subject: r.value,
            participantParticipantMixin: a.value,
          })
        : a;
    }
    ((l.receiveRemoveNotificationRPC = e),
      (l.parseRemoveNotificationRequest = s),
      (l.makeRemoveNotificationResponseAck = u));
  },
  98,
);
