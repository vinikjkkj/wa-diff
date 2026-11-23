__d(
  "MpsThreadContentsPostProcessor",
  [
    "I64",
    "MAWBridge",
    "MAWBridgeParticipants",
    "MAWBridgeTypesCreators",
    "MAWDbParticipant",
    "MAWFolderTypes",
    "MAWInMemoryGroupInfoStore",
    "MAWInMemoryParticipantStore",
    "MAWInMemoryThreadStore",
    "MAWJids",
    "MAWProtobufDeserializers",
    "MAWUserJidWrapper",
    "MpsErrors",
    "MpsTypes",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WAGroupInviteUtils",
    "WAJids",
    "WATimeUtils",
    "WmiErrorFixesGate",
    "WmiErrorReport",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = [];
      for (var n of e) {
        var r = o("MAWJids").threadIdToChatJid(n),
          a = o("WAJids").interpretAsUserJid(r);
        a != null &&
          t.push({
            tag: "OneToOneMessageRequestLoaded",
            value: { fbid: o("WAJids").extractUserId(a), threadJid: a },
          });
      }
      return t;
    }
    function u(e) {
      var t = [],
        n = o("MAWUserJidWrapper").getMyUserJid();
      return (
        o("WmiErrorFixesGate").wmiMapIsolatedIfFixed(
          e,
          function (e) {
            return e.message.messageId;
          },
          function (e) {
            var r;
            if (
              e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel
            ) {
              var a =
                (r = o("MAWProtobufDeserializers")
                  .DeserializedBackupMessage.create(e.message.payload)
                  .encryptedTransportMessage()) == null ||
                (r = r.consumerMessage()) == null ||
                (r = r.payload) == null ||
                (r = r.content) == null
                  ? void 0
                  : r.groupInviteMessage;
              if (a != null) {
                var i = a.caption,
                  l = a.groupJid,
                  s = a.inviteCode,
                  u = a.inviteExpiration;
                if (!(l == null || s == null || u == null)) {
                  var c = o("WAJids").interpretAsUserJid(
                    o("MAWJids").threadIdToChatJid(e.message.threadId),
                  );
                  if (c != null) {
                    var d = o("WAJids").toGroupJid(l),
                      m = {
                        caption: i == null ? void 0 : i.text,
                        inviteCode: o("WAGroupInviteUtils").toInviteCode(s),
                        invitedParticipantId: o(
                          "MAWDbParticipant",
                        ).craftParticipantId(d, n),
                        inviteeJid: n,
                        inviteExpirationTs:
                          o("WATimeUtils").castLongIntToUnixTime(u),
                        inviterJid: c,
                        threadJid: d,
                      };
                    t.push({
                      tag: "GroupInviteUpdate",
                      value: o(
                        "MAWBridgeTypesCreators",
                      ).createBridgeGroupInvite(m),
                    });
                  }
                }
              }
            }
          },
          function (e, t) {
            return o("MpsErrors").MpsErrors.classify(e, t, "infra");
          },
          "emit_group_invite_events",
        ),
        t
      );
    }
    function c(t) {
      var n = [],
        r = o("WAJids").userIdFromJid(o("MAWUserJidWrapper").getMyUserJid()),
        a = new Set();
      return (
        o("WmiErrorFixesGate").wmiMapIsolatedIfFixed(
          t,
          function (e) {
            return e.message.messageId;
          },
          function (t) {
            var i, l, s;
            if (
              !(
                a.has(t.message.threadId) ||
                t.directive.actionType !==
                  o("MpsTypes").ActionType.UpsertTopLevel
              )
            ) {
              var u = o("WAJids").interpretAsGroupJid(
                o("MAWJids").threadIdToChatJid(t.message.threadId),
              );
              if (u != null) {
                var c =
                  (i = o("MAWProtobufDeserializers")
                    .DeserializedBackupMessage.create(t.message.payload)
                    .adminMessage()) == null
                    ? void 0
                    : i.proto;
                if ((c == null ? void 0 : c.xmatGroupThreadCreated) != null) {
                  var d = [],
                    m = t.message.senderId === r,
                    p = o("MAWInMemoryThreadStore").getCommittedInMemoryThread(
                      u,
                    ),
                    _ =
                      (l = p == null ? void 0 : p.authoritativeThreadKey) !=
                      null
                        ? l
                        : null,
                    f =
                      (s = p == null ? void 0 : p.optimisticThreadKey) != null
                        ? s
                        : null;
                  ((f != null || _ == null) &&
                    d.push({
                      tag: "CreateE2EEMetadataThreadV2",
                      value: {
                        bumpTimestampMs: (e || (e = o("I64"))).of_float(
                          t.message.timestampMs,
                        ),
                        creationSource: m
                          ? "outgoing_message"
                          : "incoming_message",
                        folderId: o("MAWFolderTypes").FOLDER_ID.INBOX,
                        jid: u,
                        optimisticThreadKey: f,
                      },
                    }),
                    (f != null || _ != null) &&
                      d.push({
                        tag: "VerifyThreadExists",
                        value: {
                          authoritativeThreadKey: _,
                          cannotReplyReason: null,
                          clientThreadKey: f,
                          createAsOutgoing: m,
                          createIfMissing: !0,
                          description: "mpsThreadContentsPostProcessor",
                          folder: null,
                          instanceKey: null,
                          isGroup: !0,
                          jid: u,
                          lastReadTs: o("WATimeUtils").castToMillisTime(
                            t.message.timestampMs,
                          ),
                        },
                      }),
                    d.push({
                      tag: "ThreadUpdated",
                      value: o(
                        "MAWBridgeTypesCreators",
                      ).createBridgeUpdatedThread({ threadJid: u }),
                    }),
                    d.push({
                      tag: "UpdateThreadActivity",
                      value: {
                        bumpTimestampMs: (e || (e = o("I64"))).of_float(
                          t.message.timestampMs,
                        ),
                        chatJid: u,
                        source: m ? "outgoing_msg" : "incoming_msg",
                      },
                    }),
                    a.add(t.message.threadId),
                    n.push.apply(n, d));
                }
              }
            }
          },
          function (e, t) {
            return o("MpsErrors").MpsErrors.classify(e, t, "infra");
          },
          "emit_group_thread_created_events",
        ),
        n
      );
    }
    function d(e) {
      var t = [];
      for (var n of e) {
        var r = o("MAWJids").threadIdToChatJid(n),
          a = o("WAJids").interpretAsGroupJid(r);
        a != null && t.push(a);
      }
      return t;
    }
    function m(e) {
      var t = [];
      return (
        e.forEach(function (e) {
          e != null &&
            t.push({
              tag: "GroupInfoUpdated",
              value: o("MAWBridgeTypesCreators").createBridgeUpdatedGroupInfo(
                e,
              ),
            });
        }),
        t
      );
    }
    function p(e) {
      return e ===
        o("WAArmadilloMiTransportAdminMessage.pb")
          .MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode
          .ALL_MEMBERS
        ? "all_member_add"
        : e ===
            o("WAArmadilloMiTransportAdminMessage.pb")
              .MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode
              .ADMINS_ONLY
          ? "admin_add"
          : e ===
                o("WAArmadilloMiTransportAdminMessage.pb")
                  .MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode
                  .UNSET ||
              e === null ||
              e === void 0
            ? null
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    function _(e) {
      for (var t of e) {
        var n, r, a;
        if (
          t.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel
        ) {
          var i = o("WAJids").interpretAsGroupJid(
            o("MAWJids").threadIdToChatJid(t.message.threadId),
          );
          if (i != null) {
            var l =
              (n = o("MAWProtobufDeserializers")
                .DeserializedBackupMessage.create(t.message.payload)
                .adminMessage()) == null
                ? void 0
                : n.proto;
            if (l != null) {
              var s = o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(i);
              if (s != null) {
                var u = s,
                  c = (r = l.groupNameChanged) == null ? void 0 : r.groupName;
                c != null &&
                  (u = babelHelpers.extends({}, u, {
                    name: c.length > 0 ? c : void 0,
                    nameOwner: o("WAJids").toMsgrUserJid(t.message.senderId),
                    nameTs: o("WATimeUtils").castMilliSecondsToUnixTime(
                      t.message.timestampMs,
                    ),
                  }));
                var d = p(
                  (a = l.groupMembershipAddModeChanged) == null
                    ? void 0
                    : a.mode,
                );
                (d != null &&
                  (u = babelHelpers.extends({}, u, { memberAddMode: d })),
                  u !== s &&
                    o("MAWInMemoryGroupInfoStore").storeInMemoryGroupInfo(u));
              }
            }
          }
        }
      }
    }
    function f(e) {
      return (e != null ? e : []).map(function (e) {
        return o("WAJids").toMsgrUserJid(e);
      });
    }
    function g(e) {
      return e.length === 0
        ? []
        : [
            {
              tag: "ParticipantsUpdated",
              value: o("MAWBridgeParticipants").createBridgeParticipants(e),
            },
          ];
    }
    function h(e) {
      return e.map(function (e) {
        var t = e.threadJid,
          n = e.userJid;
        return {
          tag: "ParticipantRemoved",
          value: { threadJid: t, userId: o("WAJids").extractUserId(n) },
        };
      });
    }
    function y(e) {
      var t = [];
      for (var n of e) {
        var r;
        if (
          n.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel
        ) {
          var a = o("WAJids").interpretAsGroupJid(
            o("MAWJids").threadIdToChatJid(n.message.threadId),
          );
          if (a != null) {
            var i =
              (r = o("MAWProtobufDeserializers")
                .DeserializedBackupMessage.create(n.message.payload)
                .adminMessage()) == null
                ? void 0
                : r.proto;
            if (i != null) {
              var l = i.groupParticipantChanged,
                s = f(l == null ? void 0 : l.targetUserId);
              s.length > 0 &&
                ((l == null ? void 0 : l.action) ===
                o("WAArmadilloMiTransportAdminMessage.pb")
                  .MiTransportAdminMessage$GroupParticipantChanged$Action.ADDED
                  ? t.push.apply(
                      t,
                      g(
                        o(
                          "MAWInMemoryParticipantStore",
                        ).insertInMemoryParticipants(
                          a,
                          s.map(function (e) {
                            return { type: "participant", userJid: e };
                          }),
                        ),
                      ),
                    )
                  : (l == null ? void 0 : l.action) ===
                      o("WAArmadilloMiTransportAdminMessage.pb")
                        .MiTransportAdminMessage$GroupParticipantChanged$Action
                        .REMOVED &&
                    t.push.apply(
                      t,
                      h(
                        o(
                          "MAWInMemoryParticipantStore",
                        ).deleteInMemoryParticipants(a, s),
                      ),
                    ));
              var u = i.groupAdminChanged,
                c = f(u == null ? void 0 : u.targetUserId);
              c.length > 0 &&
                ((u == null ? void 0 : u.action) ===
                o("WAArmadilloMiTransportAdminMessage.pb")
                  .MiTransportAdminMessage$GroupAdminChanged$Action.ADDED
                  ? t.push.apply(
                      t,
                      g(
                        o(
                          "MAWInMemoryParticipantStore",
                        ).updateInMemoryParticipantTypes(a, c, "admin"),
                      ),
                    )
                  : (u == null ? void 0 : u.action) ===
                      o("WAArmadilloMiTransportAdminMessage.pb")
                        .MiTransportAdminMessage$GroupAdminChanged$Action
                        .REMOVED &&
                    t.push.apply(
                      t,
                      g(
                        o(
                          "MAWInMemoryParticipantStore",
                        ).updateInMemoryParticipantTypes(a, c, "participant"),
                      ),
                    ));
            }
          }
        }
      }
      return t;
    }
    function C(e) {
      return Promise.resolve().then(function () {
        var t = d(e).map(function (e) {
          return o("MAWInMemoryGroupInfoStore").getInMemoryGroupInfo(e);
        });
        return m(t);
      });
    }
    async function b(e) {
      var t = new Set();
      for (var n of e)
        n.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel &&
          t.add(n.message.threadId);
      if (t.size === 0) return new Map();
      try {
        _(e);
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "store_group_info_updates",
            "infra",
          ),
        );
      }
      var r = [];
      try {
        r.push.apply(r, c(e));
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "emit_group_thread_created_events",
            "infra",
          ),
        );
      }
      try {
        r.push.apply(r, y(e));
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "store_participant_updates",
            "infra",
          ),
        );
      }
      try {
        r.push.apply(r, s(t));
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "emit_one_to_one_message_request_events",
            "infra",
          ),
        );
      }
      try {
        r.push.apply(r, u(e));
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "emit_group_invite_events",
            "infra",
          ),
        );
      }
      try {
        var a = await C(t);
        r.push.apply(r, a);
      } catch (e) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(
            e,
            "emit_group_info_events",
            "infra",
          ),
        );
      }
      return (
        r.length > 0 &&
          o("MAWBridge")
            .getBridge()
            .fireAndForget("event", "uiUpdate", { events: r }),
        new Map()
      );
    }
    var v = { name: "MpsThreadContentsPostProcessor", process: b };
    l.MpsThreadContentsPostProcessor = v;
  },
  98,
);
