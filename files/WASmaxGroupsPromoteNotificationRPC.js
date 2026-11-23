__d(
  "WASmaxGroupsPromoteNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInGroupsCommonNotificationMixin",
    "WASmaxInGroupsEnums",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsParticipantIdentityMixin",
    "WASmaxInGroupsParticipantMixins",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("PromoteNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makePromoteNotificationResponseAck: function () {
          return c(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "type",
        o("WASmaxInGroupsEnums").ENUM_ADMIN_SUPERADMIN,
      );
      if (!n.success) return n;
      var r = o("WASmaxInGroupsParticipantMixins").parseParticipantMixins(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            participantMixins: r.value,
          })
        : r;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "promote");
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
      var u = o(
        "WASmaxInGroupsCommonNotificationMixin",
      ).parseCommonNotificationMixin(e);
      if (!u.success) return u;
      var c = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        d = o(
          "WASmaxInGroupsParticipantIdentityMixin",
        ).parseParticipantIdentityMixin(e),
        m = o("WASmaxParseUtils").mapChildrenWithTag(
          n.value,
          "participant",
          1,
          19999,
          s,
        );
      return m.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                participant: a.value,
                promoteVId: i.value,
                promotePrevVId: l.value,
              },
              u.value,
              {
                groupAddressingModeMixin: c.success ? c.value : null,
                participantIdentityMixin: d.success ? d.value : null,
                hasMissingParticipantIdentification: r.value != null,
                promoteParticipant: m.value,
              },
            ),
          )
        : m;
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
    ((l.receivePromoteNotificationRPC = e),
      (l.parsePromoteNotificationRequest = u),
      (l.makePromoteNotificationResponseAck = c));
  },
  98,
);
