__d(
  "WASmaxGroupsAddNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxInGroupsParticipantMixin",
    "WASmaxInGroupsParticipantNotAddressableMixin",
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
      var t = u(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("AddNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeAddNotificationResponseAck: function () {
          return c(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxInGroupsParticipantMixin").parseParticipantMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInGroupsParticipantNotAddressableMixin",
      ).parseParticipantNotAddressableMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          participantNotAddressableMixin: r.success ? r.value : null,
        }),
      );
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "add");
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
      var i = o("WASmaxParseUtils").attrString(n.value, "v_id");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "prev_v_id",
      );
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "reason",
        o("WASmaxInGroupsEnums")
          .ENUM_ACCEPT_AUTOADD_DEFAULTSUBGROUPPROMOTE_INVITE_INVITEAUTOADD_LINKEDGROUPJOIN,
      );
      if (!u.success) return u;
      var c = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      if (!c.success) return c;
      var d = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        m = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e),
        p = o("WASmaxParseUtils").mapChildrenWithTag(
          n.value,
          "participant",
          1,
          19999,
          s,
        );
      return p.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                participant: a.value,
                addVId: i.value,
                addPrevVId: l.value,
                addReason: u.value,
              },
              c.value,
              {
                groupAddressingModeMixin: d.success ? d.value : null,
                participantIdentityMixin: m.success ? m.value : null,
                hasMissingParticipantIdentification: r.value != null,
                addParticipant: p.value,
              },
            ),
          )
        : p;
    }
    function c(e) {
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
    ((l.receiveAddNotificationRPC = e),
      (l.parseAddNotificationRequest = u),
      (l.makeAddNotificationResponseAck = c));
  },
  98,
);
