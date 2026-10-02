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
            "memberAddMode" in l &&
            "participant" in l &&
            "groupJid" in l
          ) {
            var s = l.memberAddMode,
              p = l.participant,
              _ = l.groupJid;
            p != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupMemberAddType(
                  _,
                  p,
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
            "subject" in l &&
            "ts" in l &&
            "participant" in l &&
            "groupJid" in l
          ) {
            var f = l.subject,
              g = l.ts,
              h = l.participant,
              y = l.groupJid;
            f != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupNameChangedMsg(
                  y,
                  h,
                  f,
                  g,
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
            "participants" in l &&
            "participant" in l &&
            "groupJid" in l
          ) {
            var C = l.participants,
              b = l.participant,
              v = l.groupJid;
            b != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
                  v,
                  b,
                  C.map(function (e) {
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
            "participants" in l &&
            "participant" in l &&
            "groupJid" in l
          ) {
            var S = l.participants,
              R = l.participant,
              L = l.groupJid;
            R != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
                  L,
                  R,
                  S.map(function (e) {
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
            "participants" in l &&
            "participant" in l &&
            "groupJid" in l
          ) {
            var E = l.participants,
              k = l.participant,
              I = l.groupJid;
            k != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
                  I,
                  k,
                  E.map(function (e) {
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
            "participants" in l &&
            "participant" in l &&
            "groupJid" in l
          ) {
            var T = l.participants,
              D = l.participant,
              x = l.groupJid;
            D != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
                  x,
                  D,
                  T.map(function (e) {
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
