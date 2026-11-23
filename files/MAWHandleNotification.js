__d(
  "MAWHandleNotification",
  [
    "Promise",
    "WAAPI",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WABuildMpsPayload",
    "WALogger",
    "WAMPSFlushable",
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
              m = l,
              p = m.groupJid,
              _ = m.participant;
            _ != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupMemberAddType(
                  p,
                  _,
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
            var f = l.subject,
              g = l,
              h = g.groupJid,
              y = g.participant,
              C = g.ts;
            f != null &&
              y != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupNameChangedMsg(
                  h,
                  y,
                  f,
                  C,
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
            var b = l.participants,
              v = l,
              S = v.groupJid,
              R = v.participant;
            R != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
                  S,
                  R,
                  b.map(function (e) {
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
            var L = l.participants,
              E = l,
              k = E.groupJid,
              I = E.participant;
            I != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
                  k,
                  I,
                  L.map(function (e) {
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
            var T = l.participants,
              D = l,
              x = D.groupJid,
              $ = D.participant;
            $ != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
                  x,
                  $,
                  T.map(function (e) {
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
            var P = l.participants,
              N = l,
              M = N.groupJid,
              w = N.participant;
            w != null &&
              o("WAMPSFlushable").mpsFlushable.enqueue(
                o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
                  M,
                  w,
                  P.map(function (e) {
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
      return (u || (u = n("Promise"))).resolve(e.ack());
    }
    l.notificationHandler = m;
  },
  98,
);
