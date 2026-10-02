__d(
  "WAParseGroupNotifications",
  [
    "WAJids",
    "WALogger",
    "WAResultOrError",
    "WASmaxDecisionTreeUtils",
    "WASmaxGroupsAddNotificationRPC",
    "WASmaxGroupsDeleteNotificationRPC",
    "WASmaxGroupsDemoteNotificationRPC",
    "WASmaxGroupsJoinNotificationRPC",
    "WASmaxGroupsMemberAddModeChangeNotificationRPC",
    "WASmaxGroupsPromoteNotificationRPC",
    "WASmaxGroupsRemoveNotificationRPC",
    "WASmaxGroupsSubjectChangeNotificationRPC",
    "WASmaxNotificationFallbackGenericNotificationRPC",
    "WATimeUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c(t) {
      var n = o("WASmaxDecisionTreeUtils").firstChild(t);
      if (!n.success) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "parseGroupNotification: Received node with no children",
            ])),
        );
        var r = o(
            "WASmaxNotificationFallbackGenericNotificationRPC",
          ).receiveGenericNotificationRPC(t),
          a = r.makeGenericNotificationResponseBadStanza,
          i = r.parsedRequest.id;
        return {
          action: { type: "unknown" },
          id: i,
          ack: function () {
            return a({ ackError: 487 });
          },
        };
      }
      var l = n.value.tag;
      switch (l) {
        case "create":
          return d(t);
        case "add":
          return p(t);
        case "remove":
          return _(t);
        case "delete": {
          var u = o(
              "WASmaxGroupsDeleteNotificationRPC",
            ).receiveDeleteNotificationRPC(t),
            c = u.makeDeleteNotificationResponseAck,
            m = u.parsedRequest,
            y = m.from,
            b = m.id,
            v = m.offline,
            S = m.participant,
            R = m.t;
          return {
            action: { type: "delete", participant: S, groupJid: y },
            ack: c,
            offline: v,
            serverTs: o("WATimeUtils").castToUnixTime(R),
            id: b,
          };
        }
        case "promote":
          return f(t);
        case "demote":
          return g(t);
        case "subject":
          return h(t);
        case "member_add_mode": {
          var L = C(t);
          if (L != null) return L;
          break;
        }
        default:
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "parseGroupNotification: Unknown notification ",
                "",
              ])),
            l,
          );
      }
      var E = o(
          "WASmaxNotificationFallbackGenericNotificationRPC",
        ).receiveGenericNotificationRPC(t),
        k = E.makeGenericNotificationResponseBadStanza,
        I = E.parsedRequest.id;
      return {
        action: { type: "unknown" },
        id: I,
        ack: function () {
          return k({ ackError: 487 });
        },
      };
    }
    function d(e) {
      var t,
        n = o("WASmaxGroupsJoinNotificationRPC").receiveJoinNotificationRPC(e),
        r = n.makeJoinNotificationResponseAck,
        a = n.parsedRequest,
        i = a.createDedupAttrsMixin,
        l = a.createGroupGroupInfoMixin,
        s = l.creation,
        u = l.creator,
        c = l.description,
        d = l.groupMemberAddModeMixin,
        m = l.id,
        p = l.namedSubjectOrUnnamedSubjectFallbackMixinGroup,
        _ = l.participant,
        f = l.pVId,
        g = l.sO,
        h = l.sT,
        C = a.createType,
        b = a.from,
        v = a.id,
        S = a.offline,
        R = a.participant,
        L = a.t,
        E = c == null ? void 0 : c.groupInfoDescriptionMixin,
        k = {
          jid: o("WAJids").toGroupJid(m),
          creator: u != null ? u : void 0,
          creationTs: o("WATimeUtils").castToUnixTime(s),
          participants: _.map(function (e) {
            var t = e.groupInfoParticipantMixins,
              n = e.participantNotAddressableMixin;
            return o("WAResultOrError").makeResult({
              addressable: (n == null ? void 0 : n.addressable) !== "false",
              type:
                t.name === "GroupInfoParticipantAdmin"
                  ? t.value.type
                  : "participant",
              user: t.value.participantMixins.value.jid,
            });
          }),
          subject: {
            content: p.value.subject,
            user: g != null ? g : void 0,
            ts: h == null ? void 0 : o("WATimeUtils").castToUnixTime(h),
          },
          description:
            E == null
              ? void 0
              : {
                  id: E.id,
                  content: E.bodyElementValue,
                  user: E.participant,
                  ts: o("WATimeUtils").castToUnixTime(E.t),
                },
          participantVersion: f != null ? f : void 0,
          inviter: R != null ? R : void 0,
          memberAddMode: y(
            d == null ||
              (t = d.memberAddModeMemberAddModes) == null ||
              (t = t.value) == null
              ? void 0
              : t.elementValue,
          ),
        },
        I = o("WATimeUtils").castToUnixTime(L);
      return {
        action: {
          type: "join",
          isNew: C === "new",
          isE2EEMigration:
            (i == null ? void 0 : i.createCtx) === "e2ee_migration",
          key: i == null ? void 0 : i.key,
          serverTs: o("WATimeUtils").castToUnixTime(L),
          groupJid: b,
          group: k,
        },
        serverTs: I,
        offline: S,
        ack: r,
        id: v,
      };
    }
    function m(e) {
      if (e !== null) return e === "invite" ? "invite" : "accept";
    }
    function p(e) {
      var t = o("WASmaxGroupsAddNotificationRPC").receiveAddNotificationRPC(e),
        n = t.makeAddNotificationResponseAck,
        r = t.parsedRequest,
        a = r.addParticipant,
        i = r.addPrevVId,
        l = r.addReason,
        s = r.addVId,
        u = r.from,
        c = r.id,
        d = r.offline,
        p = r.participant,
        _ = r.t,
        f = o("WATimeUtils").castToUnixTime(_);
      return {
        action: {
          type: "add",
          versionId: s,
          previousVersionId: i,
          reason: m(l),
          participants: a.map(function (e) {
            var t;
            return {
              user: e.participantMixins.value.jid,
              type: "participant",
              addressable:
                ((t = e.participantNotAddressableMixin) == null
                  ? void 0
                  : t.addressable) !== "false",
            };
          }),
          groupJid: u,
          participant: p,
          serverTs: f,
        },
        serverTs: f,
        offline: d,
        ack: n,
        id: c,
      };
    }
    function _(e) {
      var t = o(
          "WASmaxGroupsRemoveNotificationRPC",
        ).receiveRemoveNotificationRPC(e),
        n = t.makeRemoveNotificationResponseAck,
        r = t.parsedRequest,
        a = r.from,
        i = r.id,
        l = r.offline,
        s = r.participant,
        u = r.removeRemoveNotificationOrRemoveNotificationNonMemberMixinGroup,
        c = r.t,
        d =
          u.name === "RemoveNotificationMember"
            ? u.value.participant.map(function (e) {
                return {
                  user: e.participantMixins.value.jid,
                  type: "nonparticipant",
                  addressable: !0,
                };
              })
            : [
                {
                  user: u.value.participantParticipantMixin.participantMixins
                    .value.jid,
                  type: "nonparticipant",
                  addressable: !0,
                },
              ],
        m = o("WATimeUtils").castToUnixTime(c);
      return {
        action: {
          type: "remove",
          versionId: u.value.vId,
          previousVersionId: u.value.prevVId,
          participants: d,
          groupJid: a,
          participant: s,
          serverTs: m,
        },
        serverTs: m,
        ack: n,
        offline: l,
        id: i,
      };
    }
    function f(e) {
      var t = o(
          "WASmaxGroupsPromoteNotificationRPC",
        ).receivePromoteNotificationRPC(e),
        n = t.makePromoteNotificationResponseAck,
        r = t.parsedRequest,
        a = r.from,
        i = r.id,
        l = r.offline,
        s = r.participant,
        u = r.promoteParticipant,
        c = r.promotePrevVId,
        d = r.promoteVId,
        m = r.t,
        p = o("WATimeUtils").castToUnixTime(m);
      return {
        action: {
          type: "promote",
          versionId: d,
          previousVersionId: c,
          participants: u.map(function (e) {
            var t = e.participantMixins.value.jid;
            return { user: t, type: "admin", addressable: !0 };
          }),
          groupJid: a,
          participant: s,
          serverTs: p,
        },
        serverTs: p,
        offline: l,
        ack: n,
        id: i,
      };
    }
    function g(e) {
      var t = o(
          "WASmaxGroupsDemoteNotificationRPC",
        ).receiveDemoteNotificationRPC(e),
        n = t.makeDemoteNotificationResponseAck,
        r = t.parsedRequest,
        a = r.demoteParticipant,
        i = r.demotePrevVId,
        l = r.demoteVId,
        s = r.from,
        u = r.id,
        c = r.offline,
        d = r.participant,
        m = r.t,
        p = o("WATimeUtils").castToUnixTime(m);
      return {
        action: {
          type: "demote",
          versionId: l,
          previousVersionId: i,
          participants: a.map(function (e) {
            var t = e.participantMixins.value.jid;
            return { user: t, type: "participant", addressable: !0 };
          }),
          groupJid: s,
          participant: d,
          serverTs: p,
        },
        serverTs: p,
        offline: c,
        ack: n,
        id: u,
      };
    }
    function h(e) {
      var t = o(
          "WASmaxGroupsSubjectChangeNotificationRPC",
        ).receiveSubjectChangeNotificationRPC(e),
        n = t.makeSubjectChangeNotificationResponseAck,
        r = t.parsedRequest,
        a = r.from,
        i = r.id,
        l = r.offline,
        s = r.participant,
        u = r.subjectNamedSubjectOrUnnamedSubjectFallbackMixinGroup,
        c = r.subjectST,
        d = r.t;
      return {
        action: {
          type: "subject",
          subject: u.name === "NamedSubject" ? u.value.subject : null,
          ts: o("WATimeUtils").castToUnixTime(c),
          groupJid: a,
          participant: s,
        },
        serverTs: o("WATimeUtils").castToUnixTime(d),
        ack: n,
        offline: l,
        id: i,
      };
    }
    function y(e) {
      if (e === "admin_add" || e === "all_member_add") return e;
    }
    function C(e) {
      var t = o(
          "WASmaxGroupsMemberAddModeChangeNotificationRPC",
        ).receiveMemberAddModeChangeNotificationRPC(e),
        n = t.makeMemberAddModeChangeNotificationResponseAck,
        r = t.parsedRequest,
        a = r.from,
        i = r.id,
        l = r.memberAddModeMemberAddModes,
        s = r.offline,
        c = r.participant,
        d = r.t,
        m = y(l.value.elementValue),
        p = o("WATimeUtils").castToUnixTime(d);
      if (m == null) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "parseMemberAddModeNotification: Unexpected memberAddMode ",
              "",
            ])),
          l.value.elementValue,
        );
        return;
      }
      return {
        action: {
          type: "memberAddMode",
          memberAddMode: m,
          groupJid: a,
          participant: c,
          serverTs: p,
        },
        serverTs: p,
        ack: n,
        offline: s,
        id: i,
      };
    }
    l.parseGroupNotification = c;
  },
  98,
);
