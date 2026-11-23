__d(
  "MpsToUIPostProcessor",
  [
    "I64",
    "MAWArmadilloPollTableSchema.pb",
    "MAWCurrentUser",
    "MAWEphemeralSettingsCache",
    "MAWEphemeralUtil",
    "MAWGroupPollsDualEncryptionUtils",
    "MAWJids",
    "MAWProtobufDeserializers",
    "MpsErrors",
    "MpsMessageToBridge",
    "MpsMessageToBridgeWrapper",
    "MpsToBridgeMessageId",
    "MpsTypes",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WAJids",
    "WALongInt",
    "WAStanzaUtils",
    "WATimeUtils",
    "WebMps",
    "WmiErrorFixesGate",
    "classifyProtobufDecodeError",
    "cr:19391",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps")
            .mps()
            .loadMessage(e)
            .then(function (e) {
              var t = e.value;
              return t;
            })
        : t
            .runMps(
              {
                boundary: "load_message",
                code: "read_failed",
                subject: e.debug.purpose,
              },
              function (n) {
                return t.loadMessage(n, e);
              },
            )
            .then(function (e) {
              return e.getOrNull();
            });
    }
    function u(e, t) {
      return t
        ? [{ tag: "MsgUpdated", value: e }]
        : [{ tag: "NewMsg", value: e }];
    }
    function c(e) {
      return [{ tag: "EditMsgHistoryAdded", value: [e] }];
    }
    function d(e) {
      if (e.type === "upsert")
        return [{ tag: "UpsertReaction", value: e.reaction }];
      if (e.type === "delete")
        return [{ tag: "DeleteReaction", value: e.reaction }];
      throw (
        e.type,
        o("MpsErrors").MpsErrors.error("invariant", "unreachable")
      );
    }
    function m(e) {
      return [{ tag: "NewMedia", value: e }];
    }
    function p(e) {
      return [{ tag: "MsgsStartCountdown", value: e }];
    }
    function _(e) {
      return [{ tag: "StoryReplyStartCountdown", value: e }];
    }
    function f(e) {
      return [{ tag: "NoteReplyStartCountdown", value: e }];
    }
    function g(e) {
      return [{ tag: "NewReceiverFetchInfo", value: e }];
    }
    function h(e) {
      return [{ tag: "NewXMA", value: e }];
    }
    function y(e) {
      var t,
        n,
        r,
        a,
        i = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
          e.message.payload,
        ),
        l =
          (t = i.encryptedTransportMessage()) == null ||
          (t = t.proto.metadata) == null
            ? void 0
            : t.chatEphemeralSetting;
      if (l == null) return [];
      var s = o("MAWJids").threadIdToChatJid(e.message.threadId),
        u = e.message.senderId,
        c = (n = l.ephemeralExpiration) != null ? n : 0,
        d =
          (r = o("WALongInt").maybeNumber(l.ephemeralSettingTimestamp)) != null
            ? r
            : 0,
        m = {
          author: u,
          chatJid: s,
          ephemeralSettingArgs: {
            ephemeralExpirationInSec: c,
            ephemeralLastUpdatedOrSetTimestamp: o("WATimeUtils").castToUnixTime(
              Math.floor(d / 1e3),
            ),
          },
          isEphemeralSettingReset:
            (a = l.isEphemeralSettingReset) != null ? a : !1,
        },
        p = o("MAWEphemeralSettingsCache").getEphemeralSettingCache(s);
      return o("MAWEphemeralUtil").shouldSendSyncResponse(
        m.ephemeralSettingArgs,
        p,
      )
        ? []
        : [{ tag: "EphemeralSettingsUpdatedForUI", value: m }];
    }
    function C(e) {
      var t = [],
        n = o(
          "MpsMessageToBridgeWrapper",
        ).MpsMessageToBridgeWrapper.fromTopLevel(e.toplevelProtobuf);
      return (
        o("WmiErrorFixesGate").wmiMapIsolatedIfFixed(
          e.supplementalProtobufs.values(),
          function (e) {
            return e.messageId;
          },
          function (e) {
            var r,
              a =
                (r = o("MAWProtobufDeserializers")
                  .DeserializedBackupMessage.create(e.payload)
                  .encryptedTransportMessage()) == null ||
                (r = r.armadillo()) == null ||
                (r = r.payload) == null
                  ? void 0
                  : r.content;
            if ((a == null ? void 0 : a.ravenActionNotifMessage) != null) {
              var i = { ravenMsgId: n.getMsgId(), threadJid: n.getChatJid() };
              t.push({ tag: "RavenActionUpdate", value: i });
            }
          },
          function (e, t) {
            return r("classifyProtobufDecodeError")(e, t, "ui_update_failed");
          },
          "extract_raven_action_events",
        ),
        t
      );
    }
    async function b(t) {
      var n,
        r,
        a,
        i,
        l,
        s = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
          t.toplevelProtobuf.payload,
        ),
        u =
          (n = s.encryptedTransportMessage()) == null
            ? void 0
            : n.subProtocol();
      if ((u == null ? void 0 : u.kind) !== "consumerApplication") return [];
      var c =
        (r = u.proto) == null ||
        (r = r.payload) == null ||
        (r = r.content) == null
          ? void 0
          : r.pollCreationMessage;
      if (c == null) return [];
      var d = o(
          "MpsMessageToBridgeWrapper",
        ).MpsMessageToBridgeWrapper.fromTopLevel(t.toplevelProtobuf),
        m = new Map();
      if (c.options != null) {
        var p = c.options
            .map(function (e) {
              return e.optionName;
            })
            .filter(Boolean),
          _ = await Promise.all(
            p.map(function (e) {
              return o("MAWGroupPollsDualEncryptionUtils").getHashForOptionName(
                e,
              );
            }),
          );
        p.forEach(function (e, t) {
          m.set(_[t], { optionText: e, voteAuthors: new Set() });
        });
      }
      var f = {
        contactIdForCurrentUser: (e || (e = o("I64"))).of_string(
          o("MAWCurrentUser").getID(),
        ),
        dbPoll: {
          chatJid: d.getChatJid(),
          encKey: (a = c.encKey) != null ? a : new ArrayBuffer(0),
          latestSenderTimestampsMs: new Map(),
          pollAuthor: d.isAuthorMe() ? o("WAJids").AUTHOR_ME : d.getSenderJid(),
          pollOptions: m,
          pollParticipantCount: 0,
          pollStanzaId: o("WAStanzaUtils").toStanzaId(d.getExternalId()),
          pollState: o("MAWArmadilloPollTableSchema.pb").POLL_STATE.OPEN,
          selectableOptionsCount:
            (i = c.selectableOptionsCount) != null ? i : 0,
          title: (l = c.name) != null ? l : "",
        },
        latestUpdateMsgId: d.getMsgId(),
        latestUpdateTimestampMs: o("WATimeUtils").castUnixTimeToMillisTime(
          d.getUnixTs(),
        ),
      };
      return [{ tag: "NewPoll", value: f }];
    }
    function v(e) {
      var t,
        n = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
          e.toplevelProtobuf.payload,
        ),
        r = n.adminMessage();
      if (r == null) return [];
      var a = r.proto.groupParticipantChanged;
      if (
        a == null ||
        a.action !==
          o("WAArmadilloMiTransportAdminMessage.pb")
            .MiTransportAdminMessage$GroupParticipantChanged$Action.ADDED
      )
        return [];
      var i = o(
          "MpsMessageToBridgeWrapper",
        ).MpsMessageToBridgeWrapper.fromTopLevel(e.toplevelProtobuf),
        l = i.getChatJid(),
        s = (t = a.targetUserId) != null ? t : [];
      if (s.length === 0) return [];
      var u = s.map(function (e) {
          return {
            deliveredWatermarkTs: o("WATimeUtils").castToUnixTime(0),
            fbid: e,
            isAdmin: !1,
            isInvited: !1,
            isSuperAdmin: !1,
            lastReadActionTs: o("WATimeUtils").castToUnixTime(0),
            readWatermarkTs: o("WATimeUtils").castToUnixTime(0),
            threadJid: l,
          };
        }),
        c = { participants: u };
      return [{ tag: "ParticipantsUpdated", value: c }];
    }
    function S(e) {
      var t = o(
        "MpsMessageToBridgeWrapper",
      ).MpsMessageToBridgeWrapper.fromTopLevel(e.toplevelProtobuf);
      if (!t.isAuthorMe()) return [];
      var n = t.getChatJid(),
        r = e.toplevelProtobuf.senderId,
        a = {
          chatJid: n,
          deliveredWatermarkTs: t.getUnixTs(),
          fbid: r,
          lastReadActionTs: o("WATimeUtils").castToUnixTime(0),
          lastReadWatermarkTs: o("WATimeUtils").castToUnixTime(0),
        };
      return [{ tag: "ReceivedReceipt", value: a }];
    }
    function R(e) {
      var t = o(
          "MpsMessageToBridgeWrapper",
        ).MpsMessageToBridgeWrapper.fromTopLevel(e.toplevelProtobuf),
        n = o("WAJids").interpretAsUserJid(t.getChatJid());
      return n == null
        ? []
        : [
            {
              tag: "OneToOneMessageRequestLoaded",
              value: { fbid: o("WAJids").extractUserId(n), threadJid: n },
            },
          ];
    }
    async function L(e) {
      var t;
      if (e.directive.actionType === o("MpsTypes").ActionType.DeleteTopLevel) {
        var n = o(
            "MpsMessageToBridgeWrapper",
          ).MpsMessageToBridgeWrapper.fromTopLevel(e.message),
          r = o("MpsToBridgeMessageId").mpsToBridgeMsgId(
            n.message.threadId,
            e.directive.targetMessageId,
          );
        return [
          {
            tag: "DeleteMessages",
            value: {
              messages: [{ msgId: r, ts: n.getUnixTs() }],
              threadJid: n.getChatJid(),
            },
          },
        ];
      }
      if (e.directive.actionType === o("MpsTypes").ActionType.Noop) return y(e);
      if (
        !(
          e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel ||
          e.directive.actionType ===
            o("MpsTypes").ActionType.UpsertSupplemental ||
          e.directive.actionType ===
            o("MpsTypes").ActionType.DeleteTopLevelWithPlaceholder
        )
      )
        return [];
      var a =
          e.directive.actionType === o("MpsTypes").ActionType.UpsertSupplemental
            ? e.directive.targetMessageId
            : e.message.messageId,
        i = await s({
          config: { shouldFetchSupplementals: !0, strategy: "local-only" },
          debug: { purpose: "UI-fetch" },
          messageId: a,
          threadId: e.message.threadId,
        });
      if (!i) return [];
      var l =
          e.directive.actionType ===
            o("MpsTypes").ActionType.UpsertSupplemental ||
          ((t = e.directive.directiveTags) == null
            ? void 0
            : t.includes(
                o("MpsTypes").MpsDirectiveTag.DidOverwriteExistingTopLevel,
              )) === !0,
        L = o("MpsMessageToBridge").mpsFullMessagetoBridge(i);
      if (L == null) return [];
      var E = [L.topLevel].concat(L.supplementals).map(function (e) {
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeMsg" &&
              "value" in e
            ) {
              var t = e.value;
              return u(t, l);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeEditHistoryMsg" &&
              "value" in e
            ) {
              var n = e.value;
              return c(n);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeReactionAction" &&
              "value" in e
            ) {
              var r = e.value;
              return d(r);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeMedia" &&
              "value" in e
            ) {
              var o = e.value;
              return m(o);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeXMAStartCountdown" &&
              "value" in e
            ) {
              var a = e.value;
              return _(a);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeNoteReplyStartCountdown" &&
              "value" in e
            ) {
              var i = e.value;
              return f(i);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeMsgsStartCountdown" &&
              "value" in e
            ) {
              var s = e.value;
              return p(s);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeReceiverFetchInfo" &&
              "value" in e
            ) {
              var y = e.value;
              return g(y);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.kind === "bridgeXMA" &&
              "value" in e
            ) {
              var C = e.value;
              return h(C);
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(e);
        }),
        k = E.flat(),
        I = o(
          "MpsMessageToBridgeWrapper",
        ).MpsMessageToBridgeWrapper.fromTopLevel(i.toplevelProtobuf),
        T = [
          {
            tag: "VerifyThreadExists",
            value: {
              authoritativeThreadKey: null,
              cannotReplyReason: null,
              clientThreadKey: null,
              createAsOutgoing: I.isAuthorMe(),
              createIfMissing: !0,
              description: "mpsToUIPostProcessor",
              folder: null,
              instanceKey: null,
              isGroup: o("WAJids").switchOnMsgrChatJidType(I.getChatJid(), {
                group: function () {
                  return !0;
                },
                user: function () {
                  return !1;
                },
              }),
              jid: I.getChatJid(),
              lastReadTs: o("WATimeUtils").castUnixTimeToMillisTime(
                I.getUnixTs(),
              ),
            },
          },
        ],
        D = C(i),
        x = await b(i),
        $ = v(i),
        P = S(i),
        N =
          e.directive.actionType === o("MpsTypes").ActionType.UpsertTopLevel
            ? R(i)
            : [];
      return T.concat(k).concat(N).concat(D).concat(x).concat($).concat(P);
    }
    l.mpsToUIEventPostProcessPayload = L;
  },
  98,
);
