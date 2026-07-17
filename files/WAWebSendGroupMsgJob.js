__d(
  "WAWebSendGroupMsgJob",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebApiParticipantStore",
    "WAWebDBDeviceListFanout",
    "WAWebGroupHistorySendGroupMsgJobUtils",
    "WAWebGroupMsgSendUtils",
    "WAWebLidMigrationUtils",
    "WAWebMaybe",
    "WAWebMessageEditGatingUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessageInfo",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = Object.freeze({ SKMSG: "skmsg", DIRECT: "direct" });
    function d(e) {
      return e.isLid();
    }
    function m(e) {
      return !e.isLid();
    }
    function p(e, t, n, r, o, a, i, l) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            var u = yield o(
                "WAWebApiParticipantStore",
              ).getGroupSenderKeyListFromParticipantRecord(t, l),
              p = u.skDistribList,
              _ = u.skList,
              g = s || f(e, i),
              h = g ? d : m,
              C = {
                type: c.SKMSG,
                senderKeyList: {
                  skList: _.filter(h),
                  skDistribList: p.filter(h),
                  rotateKey: !1,
                },
              };
            if (o("WAWebMsgGetters").getSubtype(e.data) === "sender_revoke") {
              var v =
                  !i &&
                  o("WAWebABProps").getABPropConfigValue(
                    "send_cag_member_revokes_as_GDM",
                  ),
                R =
                  n == null
                    ? null
                    : yield y(n, C.senderKeyList, {
                        forceDirectMessage: v,
                        normalizeAddressingModeFn: function (t) {
                          return t;
                        },
                      });
              return R != null ? R : C;
            }
            if (o("WAWebMsgGetters").getType(e.data) === "keep_in_chat") {
              var L = !i,
                E = r == null ? null : yield b(r, C.senderKeyList, L);
              return E != null ? E : C;
            }
            return a
              ? S(a, C.senderKeyList, {
                  normalizeAddressingModeFn: function (t) {
                    return t;
                  },
                })
              : C;
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
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
    function g(e, t, n, r, o, a) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            var l = yield o(
                "WAWebApiParticipantStore",
              ).getGroupSenderKeyListFromParticipantRecord(e, t),
              s = { senderKeyList: l, type: c.SKMSG },
              u = function (t) {
                return t.map(
                  o("WAWebLidMigrationUtils").toAddressingModeFactory(a),
                );
              };
            if (n) {
              var d = yield y(n, l, {
                forceDirectMessage: !1,
                normalizeAddressingModeFn: u,
              });
              return d != null ? d : s;
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
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            d = n.normalizeAddressingModeFn(u).filter(Boolean);
          if (n.forceDirectMessage === !1 && d.length === 0) return null;
          var m = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: d });
          return { type: c.DIRECT, deviceList: [].concat(m, l, i) };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
            d = [].concat(u, i, a);
          return { type: c.DIRECT, deviceList: d };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (
            o(
              "WAWebMessageEditGatingUtils",
            ).isMessageEditToMessageSecretSenderEnabled()
          )
            return { type: c.SKMSG, senderKeyList: t };
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
            d = n.normalizeAddressingModeFn(u).filter(Boolean),
            m = yield o("WAWebDBDeviceListFanout").getFanOutList({ wids: d });
          return { type: c.DIRECT, deviceList: [].concat(m) };
        })),
        R.apply(this, arguments)
      );
    }
    function L(t, n) {
      var r = n.isLidAddressingMode === !0 ? d : m;
      e: {
        var a = t;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.type === "direct" &&
          "deviceList" in a
        ) {
          var i = a.deviceList,
            l = i.filter(r);
          if (l.length < i.length) {
            var c = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(i),
              p = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(n);
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " found in ",
                    " group groupSendingList.deviceList",
                  ])),
                c,
                p,
              )
              .sendLogs("GroupLidInfra/outgoing_message");
          }
          return { type: "direct", deviceList: l };
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.type === "skmsg" &&
          "senderKeyList" in a
        ) {
          var _ = a.senderKeyList,
            f = _.skDistribList,
            g = _.skList,
            h = f.filter(r);
          if (h.length < f.length) {
            var y = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(f),
              C = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(n);
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " in ",
                    " group skDistribList",
                  ])),
                y,
                C,
              )
              .sendLogs("GroupLidInfra/outgoing_message");
          }
          var b = g.filter(r);
          if (b.length < g.length) {
            var v = o("WAWebGroupMsgSendUtils").formatWidTypeCountsForLog(g),
              S = o("WAWebGroupMsgSendUtils").formatGroupTypeForLog(n);
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
            senderKeyList: babelHelpers.extends({}, _, {
              skDistribList: h,
              skList: b,
            }),
          };
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a,
        );
      }
    }
    ((l.GROUP_MSG_TYPE = c),
      (l.getCagMessageSendList = p),
      (l.getMessageSendList = g),
      (l.getGroupSendListForRevoke = y),
      (l.filterIncorrectlyAddressedDevices = L));
  },
  98,
);
