__d(
  "MAWHandleNotification",
  [
    "FBLogger",
    "MAWMpsGating",
    "Promise",
    "WAAPI",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WABuildMpsPayload",
    "WALogger",
    "WAMPSFlushable",
    "WAProtocolQueue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ack"],
      s,
      u;
    function c(e) {
      switch (e.type) {
        case "server": {
          r("WAAPI")
            .syncAbProps({ sendHash: !1 })
            .catch(function (e) {
              o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "SyncABProps: ",
                    "",
                  ])),
                e,
              );
            });
          return;
        }
        default: {
          e.type;
          return;
        }
      }
    }
    function d(t) {
      switch (t.type) {
        case "thread":
        case "group": {
          var n = t.ack,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e);
          return r;
        }
        default: {
          t.type;
          return;
        }
      }
    }
    function m(e) {
      switch (e.type) {
        case "group":
          return {
            jid: e.notification.groupJid,
            notification: e,
            priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
            stanzaId: e.stanzaId,
            type: "notification",
          };
        case "thread":
          return {
            jid: e.notification.chatJid,
            notification: e,
            priority: o("WAProtocolQueue").WAProtocolQueuePriorityLow,
            stanzaId: e.stanzaId,
            type: "notification",
          };
        default:
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "Received unsupported notification type: " + e.type,
          );
      }
    }
    function p(e) {
      c(e);
      var t = d(e);
      if (!t) return (u || (u = n("Promise"))).resolve(e.ack());
      if (t.type === "group") {
        var r = t.notification,
          a = t.serverTs,
          i = t.stanzaId;
        e: {
          var l = r;
          if (
            ((typeof l == "object" && l !== null) || typeof l == "function") &&
            l.type === "memberAddMode" &&
            "memberAddMode" in l
          ) {
            var s = l.memberAddMode,
              p = l,
              _ = p.groupJid,
              f = p.participant;
            f != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupMemberAddType(
                  _,
                  f,
                  s === "admin_add"
                    ? o("WAArmadilloMiTransportAdminMessage.pb")
                        .MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode
                        .ADMINS_ONLY
                    : o("WAArmadilloMiTransportAdminMessage.pb")
                        .MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode
                        .ALL_MEMBERS,
                  a,
                  i,
                ),
                function () {},
                "wa",
              );
            break e;
          }
          if (
            ((typeof l == "object" && l !== null) || typeof l == "function") &&
            l.type === "subject" &&
            "subject" in l
          ) {
            var g = l.subject,
              h = l,
              y = h.groupJid,
              C = h.participant,
              b = h.ts;
            g != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupNameChangedMsg(
                  y,
                  C,
                  g,
                  b,
                  i,
                ),
                function () {},
                "wa",
              );
            break e;
          }
          if (
            (((typeof l == "object" && l !== null) || typeof l == "function") &&
              l.type === "join") ||
            (((typeof l == "object" && l !== null) || typeof l == "function") &&
              l.type === "delete")
          )
            break e;
          if (
            ((typeof l == "object" && l !== null) || typeof l == "function") &&
            l.type === "promote" &&
            "participants" in l
          ) {
            var v = l.participants,
              S = l,
              R = S.groupJid,
              L = S.participant;
            L != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
                  R,
                  L,
                  v.map(function (e) {
                    return e.user;
                  }),
                  o("WAArmadilloMiTransportAdminMessage.pb")
                    .MiTransportAdminMessage$GroupAdminChanged$Action.ADDED,
                  a,
                  i,
                ),
                function () {},
                "wa",
              );
            break e;
          }
          if (
            ((typeof l == "object" && l !== null) || typeof l == "function") &&
            l.type === "demote" &&
            "participants" in l
          ) {
            var E = l.participants,
              k = l,
              I = k.groupJid,
              T = k.participant;
            T != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
                  I,
                  T,
                  E.map(function (e) {
                    return e.user;
                  }),
                  o("WAArmadilloMiTransportAdminMessage.pb")
                    .MiTransportAdminMessage$GroupAdminChanged$Action.REMOVED,
                  a,
                  i,
                ),
                function () {},
                "wa",
              );
            break e;
          }
          if (
            ((typeof l == "object" && l !== null) || typeof l == "function") &&
            l.type === "remove" &&
            "participants" in l
          ) {
            var D = l.participants,
              x = l,
              $ = x.groupJid,
              P = x.participant;
            P != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
                  $,
                  P,
                  D.map(function (e) {
                    return e.user;
                  }),
                  o("WAArmadilloMiTransportAdminMessage.pb")
                    .MiTransportAdminMessage$GroupParticipantChanged$Action
                    .REMOVED,
                  a,
                  i,
                ),
                function () {},
                "wa",
              );
            break e;
          }
          if (
            ((typeof l == "object" && l !== null) || typeof l == "function") &&
            l.type === "add" &&
            "participants" in l
          ) {
            var N = l.participants,
              M = l,
              w = M.groupJid,
              A = M.participant;
            A != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
                  w,
                  A,
                  N.map(function (e) {
                    return e.user;
                  }),
                  o("WAArmadilloMiTransportAdminMessage.pb")
                    .MiTransportAdminMessage$GroupParticipantChanged$Action
                    .ADDED,
                  a,
                  i,
                ),
                function () {},
                "wa",
              );
            break e;
          }
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              l,
          );
        }
      }
      return (
        o("MAWMpsGating").isFullMpsEnabled() ||
          o("WAProtocolQueue").pqFlushable.enqueue(m(t)),
        (u || (u = n("Promise"))).resolve(e.ack())
      );
    }
    l.notificationHandler = p;
  },
  98,
);
