__d(
  "WAWebSendGroupMsgJob",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebApiParticipantStore",
    "WAWebDBDeviceListFanout",
    "WAWebE2EProtoGenerator",
    "WAWebGroupHistorySendGroupMsgJobUtils",
    "WAWebGroupMsgSendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebMessageEditGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgKey",
    "WAWebMsgRcatUtils",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessageInfo",
    "WAWebSendGroupDirectJob",
    "WAWebSendGroupSkmsgJob",
    "WAWebSendMsgQueueMap",
    "WAWebWidFactory",
    "err",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = Object.freeze({ SKMSG: "skmsg", DIRECT: "direct" });
    function f(e) {
      return e.isLid();
    }
    function g(e) {
      return !e.isLid();
    }
    async function h(e, t, n, r, a, i, l, s) {
      var u = await o(
          "WAWebApiParticipantStore",
        ).getGroupSenderKeyListFromParticipantRecord(t, l),
        c = u.skDistribList,
        d = u.skList,
        m = s || y(e, i),
        p = m ? f : g,
        h = {
          type: _.SKMSG,
          senderKeyList: {
            skList: d.filter(p),
            skDistribList: c.filter(p),
            rotateKey: !1,
          },
        };
      if (o("WAWebMsgGetters").getSubtype(e.data) === "sender_revoke") {
        var C =
            !i &&
            o("WAWebABProps").getABPropConfigValue(
              "send_cag_member_revokes_as_GDM",
            ),
          R =
            n == null
              ? null
              : await b(n, h.senderKeyList, {
                  forceDirectMessage: C,
                  normalizeAddressingModeFn: function (t) {
                    return t;
                  },
                });
        return R != null ? R : h;
      }
      if (o("WAWebMsgGetters").getType(e.data) === "keep_in_chat") {
        var L =
            !i &&
            o("WAWebABProps").getABPropConfigValue(
              "supports_keep_in_chat_in_cag",
            ),
          E = r == null ? null : await v(r, h.senderKeyList, L);
        return E != null ? E : h;
      }
      return a
        ? S(a, h.senderKeyList, {
            normalizeAddressingModeFn: function (t) {
              return t;
            },
          })
        : h;
    }
    function y(e, t) {
      var n = e.data,
        a = n.keepType,
        i = n.subtype,
        l = n.type;
      if (a === o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL) return !1;
      switch (l) {
        case "reaction_enc":
        case "comment":
        case "event_response":
          return !0;
        case "poll_update":
          if (i === "poll_vote") return !0;
          break;
        case "protocol": {
          if (
            e.type === "addon" &&
            e.data.kind === o("WAWebMsgType").MsgKind.ProtocolAddonRevoke
          )
            return !0;
          if (i === "sender_revoke") return !1;
          break;
        }
        case "notification":
        case "status_notification":
        case "notification_template":
        case "gp2":
        case "broadcast_notification":
        case "e2e_notification":
        case "call_log":
        case "chat":
        case "location":
        case "payment":
        case "vcard":
        case "ciphertext":
        case "debug_placeholder":
        case "multi_vcard":
        case "revoked":
        case "oversized":
        case "groups_v4_invite":
        case "hsm":
        case "template_button_reply":
        case "debug":
        case "image":
        case "loading_media":
        case "video":
        case "ptv":
        case "audio":
        case "ptt":
        case "sticker":
        case "status":
        case "document":
        case "product":
        case "order":
        case "list":
        case "interactive":
        case "interactive_response":
        case "list_response":
        case "buttons_response":
        case "reaction":
        case "poll_creation":
        case "poll_result_snapshot":
        case "request_phone_number":
        case "native_flow":
        case "biz-cover-photo":
        case "keep_in_chat":
        case "pin_message":
        case "pinned_message":
        case "unknown":
        case "newsletter_notification":
        case "history_bundle":
        case "newsletter_admin_invite":
        case "event_creation":
        case "sharable_event_invite":
        case "event_edit_encrypted":
        case "poll_edit_encrypted":
        case "poll_add_option_encrypted":
        case "biz_content_placeholder":
        case "album":
        case "sticker-pack":
        case "rich_response":
        case "automated_greeting_message":
        case "newsletter_question_response":
        case "guest_upsell_system_msg":
        case "newsletter_follower_invite":
        case o("WAWebMsgType").MSG_TYPE.MESSAGE_HISTORY_BUNDLE:
        case "message_history_notice":
        case "quarantined":
        case "message_edit_encrypted":
        case "poll_add_option_decrypted":
          break;
        default:
          throw r("err")("CAG - Invalid type: " + l);
      }
      if (t) return !1;
      throw r("err")("CAG - non-admin trying to send a regular message");
    }
    async function C(e, t, n, r, a, i) {
      var l = await o(
          "WAWebApiParticipantStore",
        ).getGroupSenderKeyListFromParticipantRecord(e, t),
        s = { senderKeyList: l, type: _.SKMSG },
        u = function (t) {
          return t.map(o("WAWebLidMigrationUtils").toAddressingModeFactory(a));
        };
      if (n) {
        var c = await b(n, l, {
          forceDirectMessage: !1,
          normalizeAddressingModeFn: u,
        });
        return c != null ? c : s;
      }
      return r
        ? S(r, l, { normalizeAddressingModeFn: u })
        : i != null && i.length > 0
          ? o(
              "WAWebGroupHistorySendGroupMsgJobUtils",
            ).getGroupSendListForGroupHistoryBundle(
              i.map(o("WAWebWidFactory").createWid),
              l,
              { normalizeAddressingModeFn: u, isLidAddressingMode: a },
            )
          : s;
    }
    async function b(e, t, n) {
      var r = await o("WAWebSchemaMessageInfo")
          .getMessageInfoTable()
          .equals(["msgKey"], String(e)),
        a = r.map(function (e) {
          return o("WAWebWidFactory").createWid(e.receiverUserJid);
        });
      if (a.length === 0) return null;
      var i = t.skDistribList,
        l = t.skList,
        s = new Set(
          []
            .concat(i, l)
            .map(o("WAWebWidFactory").asUserWidOrThrow)
            .map(String),
        ),
        u = a.filter(function (e) {
          var t = o("WAWebApiContact").getAlternateUserWid(
            o("WAWebWidFactory").asUserWidOrThrow(e),
          );
          return !s.has(String(e)) && !(t != null && s.has(String(t)));
        }),
        c = n.normalizeAddressingModeFn(u).filter(Boolean);
      if (n.forceDirectMessage === !1 && c.length === 0) return null;
      var d = await o("WAWebDBDeviceListFanout").getFanOutList({ wids: c });
      return { type: _.DIRECT, deviceList: [].concat(d, l, i) };
    }
    async function v(e, t, n) {
      var r = await o("WAWebSchemaMessageInfo")
        .getMessageInfoTable()
        .equals(["msgKey"], String(e));
      if (r.length === 0) return null;
      var a = t.skDistribList,
        i = t.skList,
        l = new Set(
          a.concat(i).map(function (e) {
            return String(o("WAWebWidFactory").asUserWidOrThrow(e));
          }),
        ),
        s = r
          .filter(function (e) {
            return !l.has(e.receiverUserJid);
          })
          .map(function (e) {
            return o("WAWebWidFactory").createWid(e.receiverUserJid);
          });
      if (s.length === 0 && n !== !0) return null;
      var u = await o("WAWebDBDeviceListFanout").getFanOutList({ wids: s }),
        c = [].concat(u, i, a);
      return { type: _.DIRECT, deviceList: c };
    }
    async function S(e, t, n) {
      if (
        o(
          "WAWebMessageEditGatingUtils",
        ).isMessageEditToMessageSecretSenderEnabled()
      )
        return { type: _.SKMSG, senderKeyList: t };
      var r = t.skDistribList,
        a = t.skList,
        i = await o("WAWebSchemaMessageInfo")
          .getMessageInfoTable()
          .equals(["msgKey"], String(e)),
        l = new Set(
          r.concat(a).map(function (e) {
            return String(o("WAWebWidFactory").asUserWidOrThrow(e));
          }),
        ),
        s = function (t) {
          return o("WAWebMaybe").ifSome(
            o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            ),
            function (e) {
              return l.has(String(e));
            },
          );
        },
        u = i
          .map(function (e) {
            return o("WAWebWidFactory").createWid(e.receiverUserJid);
          })
          .filter(function (e) {
            return l.has(String(e)) || s(e);
          }),
        c = n.normalizeAddressingModeFn(u).filter(Boolean),
        d = await o("WAWebDBDeviceListFanout").getFanOutList({ wids: c });
      return { type: _.DIRECT, deviceList: [].concat(d) };
    }
    function R(t) {
      var n,
        r = t.metricReporter,
        a = t.msgProtobuf,
        i = t.msgRecord,
        l = t.scheduledMsgMetadata,
        d = i.data,
        m = d.id,
        p = d.to;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: queued ",
                "",
              ])),
            m,
          )
          .tags("messaging"),
        (n = r.sendPerfReporter) == null || n.startWaitingToEncryptStage(),
        o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          p.toString(),
          async function () {
            var e, t, n, f, g, y;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: sending ",
                    "",
                  ])),
                m,
              )
              .tags("messaging"),
              (e = r.sendPerfReporter) == null || e.postWaitingToEncryptStage(),
              (t = r.sendPerfReporter) == null || t.startReadyToSendStage());
            var b = E(a),
              v = T(a),
              S = k(a),
              R = await o("WAWebGroupMsgSendUtils").getParticipantRecord(
                p.toString(),
              ),
              I = await o("WAWebGroupMsgSendUtils").getGroupData(
                p.toString(),
                R,
                i,
              );
            ((n = r.sendReporter) == null || n.setGroupData(I),
              (f = r.sendPerfReporter) == null || f.setGroupData(I));
            var D =
                (g =
                  R == null
                    ? void 0
                    : R.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? g
                  : [],
              x = await o("WAWebMsgRcatUtils").genContentBindingForMsg(d, D),
              $ = !!I.isLidAddressingMode,
              P;
            if (I.isCag === !0) {
              var N = !!I.amIAdmin;
              (o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  N ? "admin" : "non-admin",
                )
                .tags("messaging"),
                (P = await h(i, p, b, S, v, N, R, $)));
            } else {
              var M;
              o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: ",
                      " group size: ",
                      "",
                    ])),
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(I),
                  R == null ? void 0 : R.participants.length,
                )
                .tags("messaging");
              var w = await C(
                p,
                R,
                b,
                v,
                $,
                a == null ||
                  (M = a.messageHistoryBundle) == null ||
                  (M = M.messageHistoryMetadata) == null
                  ? void 0
                  : M.historyReceivers,
              );
              P = L(w, I);
            }
            var A =
              (I == null ? void 0 : I.isCapiGroup) === !0
                ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(a)
                : a;
            if (P.type === _.DIRECT) {
              var F,
                O,
                B = P,
                W = B.deviceList;
              return (
                (F = r.sendReporter) == null || F.setDeviceCount(W.length),
                (O = r.sendPerfReporter) == null || O.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg(
                  i,
                  A,
                  W,
                  I,
                  r,
                  l,
                )
              );
            }
            var q = P,
              U = q.senderKeyList;
            return (
              (y = r.sendReporter) == null ||
                y.setDeviceCount(U.skList.length + U.skDistribList.length),
              o("WAWebSendGroupSkmsgJob").encryptAndSendSenderKeyMsg(
                i,
                A,
                U,
                I,
                r,
                x,
                l,
              )
            );
          },
        )
      );
    }
    function L(e, t) {
      var n = t.isLidAddressingMode === !0 ? f : g;
      e: {
        var r = e;
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "direct" &&
          "deviceList" in r
        ) {
          var a = r.deviceList,
            i = a.filter(n);
          if (i.length < a.length) {
            var l = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(a),
              s = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(t);
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " found in ",
                    " group groupSendingList.deviceList",
                  ])),
                l,
                s,
              )
              .sendLogs("GroupLidInfra/outgoing_message");
          }
          return { type: "direct", deviceList: i };
        }
        if (
          ((typeof r == "object" && r !== null) || typeof r == "function") &&
          r.type === "skmsg" &&
          "senderKeyList" in r
        ) {
          var u = r.senderKeyList,
            c = u.skDistribList,
            _ = u.skList,
            h = c.filter(n);
          if (h.length < c.length) {
            var y = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(c),
              C = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(t);
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " in ",
                    " group skDistribList",
                  ])),
                y,
                C,
              )
              .sendLogs("GroupLidInfra/outgoing_message");
          }
          var b = _.filter(n);
          if (b.length < _.length) {
            var v = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(_),
              S = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(t);
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " found in ",
                    " group groupSendingList.senderKeyList.skList",
                  ])),
                v,
                S,
              )
              .sendLogs("GroupLidInfra/outgoing_message");
          }
          return {
            type: "skmsg",
            senderKeyList: babelHelpers.extends({}, u, {
              skDistribList: h,
              skList: b,
            }),
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            r,
        );
      }
    }
    function E(e) {
      var t = e.protocolMessage,
        n = null;
      if (
        (t == null ? void 0 : t.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.REVOKE &&
        t != null &&
        t.key
      ) {
        var a = t.key,
          i = a.id,
          l = a.participant,
          s = a.remoteJid;
        !r("isStringNullOrEmpty")(s) &&
          !r("isStringNullOrEmpty")(i) &&
          !r("isStringNullOrEmpty")(l) &&
          (n = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(s),
            fromMe: !0,
            id: i,
            participant: o("WAWebWidFactory").createWid(l),
          }));
      }
      return n;
    }
    function k(e) {
      var t = e.keepInChatMessage;
      if (t != null && t.key) {
        var n = t.key,
          a = n.id,
          i = n.participant,
          l = n.remoteJid;
        if (
          !r("isStringNullOrEmpty")(l) &&
          !r("isStringNullOrEmpty")(a) &&
          !r("isStringNullOrEmpty")(i)
        ) {
          var s = new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(l),
            fromMe: !0,
            id: a,
            participant: o("WAWebWidFactory").createWid(i),
          });
          return s;
        }
      }
      return null;
    }
    function I(e) {
      var t = e.id,
        n = e.participant,
        a = e.remoteJid;
      return r("isStringNullOrEmpty")(a) ||
        r("isStringNullOrEmpty")(t) ||
        r("isStringNullOrEmpty")(n)
        ? null
        : new (r("WAWebMsgKey"))({
            remote: o("WAWebWidFactory").createWid(a),
            fromMe: !0,
            id: t,
            participant: o("WAWebWidFactory").createWid(n),
          });
    }
    function T(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = I(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = I(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    ((l.GROUP_MSG_TYPE = _),
      (l.getCagMessageSendList = h),
      (l.getGroupSendListForRevoke = b),
      (l.encryptAndSendGroupMsg = R),
      (l.filterIncorrectlyAddressedDevices = L));
  },
  98,
);
