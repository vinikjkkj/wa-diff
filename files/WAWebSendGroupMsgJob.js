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
    "asyncToGeneratorRuntime",
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
    function h(e, t, n, r, o, a, i, l) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            var u = yield o(
                "WAWebApiParticipantStore",
              ).getGroupSenderKeyListFromParticipantRecord(t, l),
              c = u.skDistribList,
              d = u.skList,
              m = s || C(e, i),
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
              var y =
                  !i &&
                  o("WAWebABProps").getABPropConfigValue(
                    "send_cag_member_revokes_as_GDM",
                  ),
                b =
                  n == null
                    ? null
                    : yield S(n, h.senderKeyList, {
                        forceDirectMessage: y,
                        normalizeAddressingModeFn: function (t) {
                          return t;
                        },
                      });
              return b != null ? b : h;
            }
            if (o("WAWebMsgGetters").getType(e.data) === "keep_in_chat") {
              var v =
                  !i &&
                  o("WAWebABProps").getABPropConfigValue(
                    "supports_keep_in_chat_in_cag",
                  ),
                R = r == null ? null : yield L(r, h.senderKeyList, v);
              return R != null ? R : h;
            }
            return a
              ? k(a, h.senderKeyList, {
                  normalizeAddressingModeFn: function (t) {
                    return t;
                  },
                })
              : h;
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
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
    function b(e, t, n, r, o, a) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = yield o(
                "WAWebApiParticipantStore",
              ).getGroupSenderKeyListFromParticipantRecord(e, t),
              s = { senderKeyList: l, type: _.SKMSG },
              u = function (t) {
                return t.map(
                  o("WAWebLidMigrationUtils").toAddressingModeFactory(a),
                );
              };
            if (n) {
              var c = yield S(n, l, {
                forceDirectMessage: !1,
                normalizeAddressingModeFn: u,
              });
              return c != null ? c : s;
            }
            return r
              ? k(r, l, { normalizeAddressingModeFn: u })
              : i != null && i.length > 0
                ? o(
                    "WAWebGroupHistorySendGroupMsgJobUtils",
                  ).getGroupSendListForGroupHistoryBundle(
                    i.map(o("WAWebWidFactory").createWid),
                    l,
                    { normalizeAddressingModeFn: u, isLidAddressingMode: a },
                  )
                : s;
          },
        )),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessageInfo")
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
          var d = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: c });
          return { type: _.DIRECT, deviceList: [].concat(d, l, i) };
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebSchemaMessageInfo")
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
          var u = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: s }),
            c = [].concat(u, i, a);
          return { type: _.DIRECT, deviceList: c };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            o(
              "WAWebMessageEditGatingUtils",
            ).isMessageEditToMessageSecretSenderEnabled()
          )
            return { type: _.SKMSG, senderKeyList: t };
          var r = t.skDistribList,
            a = t.skList,
            i = yield o("WAWebSchemaMessageInfo")
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
            d = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: c });
          return { type: _.DIRECT, deviceList: [].concat(d) };
        })),
        I.apply(this, arguments)
      );
    }
    function T(t) {
      var r,
        a = t.metricReporter,
        i = t.msgProtobuf,
        l = t.msgRecord,
        d = t.scheduledMsgMetadata,
        m = l.data,
        p = m.id,
        f = m.to;
      return (
        o("WALogger")
          .LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "encryptAndSendGroupMsg: queued ",
                "",
              ])),
            p,
          )
          .tags("messaging"),
        (r = a.sendPerfReporter) == null || r.startWaitingToEncryptStage(),
        o("WAWebSendMsgQueueMap").sendMsgQueueMap.enqueue(
          f.toString(),
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e, t, n, r, g, y;
            (o("WALogger")
              .LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "encryptAndSendGroupMsg: sending ",
                    "",
                  ])),
                p,
              )
              .tags("messaging"),
              (e = a.sendPerfReporter) == null || e.postWaitingToEncryptStage(),
              (t = a.sendPerfReporter) == null || t.startReadyToSendStage());
            var C = x(i),
              v = N(i),
              S = $(i),
              R = yield o("WAWebGroupMsgSendUtils").getParticipantRecord(
                f.toString(),
              ),
              L = yield o("WAWebGroupMsgSendUtils").getGroupData(
                f.toString(),
                R,
                l,
              );
            ((n = a.sendReporter) == null || n.setGroupData(L),
              (r = a.sendPerfReporter) == null || r.setGroupData(L));
            var E =
                (g =
                  R == null
                    ? void 0
                    : R.participants.map(function (e) {
                        return o("WAWebWidFactory").createUserWidOrThrow(e);
                      })) != null
                  ? g
                  : [],
              k = yield o("WAWebMsgRcatUtils").genContentBindingForMsg(m, E),
              I = !!L.isLidAddressingMode,
              T;
            if (L.isCag === !0) {
              var P = !!L.amIAdmin;
              (o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "encryptAndSendGroupMsg: CAG ",
                      " ",
                    ])),
                  P ? "admin" : "non-admin",
                )
                .tags("messaging"),
                (T = yield h(l, f, C, S, v, P, R, I)));
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
                  o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(L),
                  R == null ? void 0 : R.participants.length,
                )
                .tags("messaging");
              var w = yield b(
                f,
                R,
                C,
                v,
                I,
                i == null ||
                  (M = i.messageHistoryBundle) == null ||
                  (M = M.messageHistoryMetadata) == null
                  ? void 0
                  : M.historyReceivers,
              );
              T = D(w, L);
            }
            var A =
              (L == null ? void 0 : L.isCapiGroup) === !0
                ? o("WAWebE2EProtoGenerator").updateGroupMsgProtoWithCapiFlag(i)
                : i;
            if (T.type === _.DIRECT) {
              var F,
                O,
                B = T,
                W = B.deviceList;
              return (
                (F = a.sendReporter) == null || F.setDeviceCount(W.length),
                (O = a.sendPerfReporter) == null || O.setIsDirectedMessage(!0),
                o("WAWebSendGroupDirectJob").encryptAndSendGroupDirectMsg(
                  l,
                  A,
                  W,
                  L,
                  a,
                  d,
                )
              );
            }
            var q = T,
              U = q.senderKeyList;
            return (
              (y = a.sendReporter) == null ||
                y.setDeviceCount(U.skList.length + U.skDistribList.length),
              o("WAWebSendGroupSkmsgJob").encryptAndSendSenderKeyMsg(
                l,
                A,
                U,
                L,
                a,
                k,
                d,
              )
            );
          }),
        )
      );
    }
    function D(e, t) {
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
    function x(e) {
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
    function $(e) {
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
    function P(e) {
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
    function N(e) {
      var t,
        n,
        r = e.protocolMessage,
        a = null;
      return (
        (r == null ? void 0 : r.type) ===
          o("WAWebProtobufsE2E.pb").Message$ProtocolMessage$Type.MESSAGE_EDIT &&
        r != null &&
        r.key
          ? (a = P(r.key))
          : ((t = e.secretEncryptedMessage) == null
              ? void 0
              : t.secretEncType) ===
              o("WAWebProtobufsE2E.pb")
                .Message$SecretEncryptedMessage$SecretEncType.MESSAGE_EDIT &&
            ((n = e.secretEncryptedMessage) == null
              ? void 0
              : n.targetMessageKey) != null &&
            (a = P(e.secretEncryptedMessage.targetMessageKey)),
        a
      );
    }
    ((l.GROUP_MSG_TYPE = _),
      (l.getCagMessageSendList = h),
      (l.getGroupSendListForRevoke = S),
      (l.encryptAndSendGroupMsg = T),
      (l.filterIncorrectlyAddressedDevices = D));
  },
  98,
);
