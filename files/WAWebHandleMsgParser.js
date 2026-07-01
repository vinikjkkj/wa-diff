__d(
  "WAWebHandleMsgParser",
  [
    "WADeprecatedWapParser",
    "WAHex",
    "WALogger",
    "WAParsableWapNode",
    "WAWebABProps",
    "WAWebAck",
    "WAWebAsISOCountryCode",
    "WAWebBackendJobs.flow",
    "WAWebBotTypes",
    "WAWebCreateNackFromStanza",
    "WAWebCurrentUser",
    "WAWebGroupHistoryGating",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePaymentAmountUtils",
    "WAWebIdentityFunction",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMessagingGatingUtils",
    "WAWebPaymentNotificationParser",
    "WAWebPaymentStatusUtils",
    "WAWebProtobufsWeb.pb",
    "WAWebScheduledMsgConstants",
    "WAWebSessionScope",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusGatingUtils",
    "WAWebThreadMetadata",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y = new (r("WADeprecatedWapParser"))("incomingMsgParser", function (e) {
        var t, n;
        e.assertTag("message");
        var r = e.maybeChild("plaintext");
        r != null && r.throw("not to be present in e2ee messages");
        var a = e.mapChildrenWithTag("enc", function (e) {
            var t;
            return {
              e2eType: e.attrEnumValues(
                "type",
                o("WAWebBackendJobs.flow").CiphertextType.members(),
              ),
              encMediaType: o("WAWebBackendJobs.flow").EncMediaType.cast(
                e.maybeAttrString("mediatype"),
              ),
              ciphertext: e.contentBytes(),
              retryCount: (t = e.maybeAttrInt("count")) != null ? t : 0,
              hideFail: e.maybeAttrString("decrypt-fail") === "hide",
              isStateless: e.maybeAttrString("state") === "false",
              sessionType: e.maybeAttrString("session_type"),
            };
          }),
          i = e.maybeChild("device-identity"),
          l = i ? i.contentBytes() : null,
          s = R(e),
          u = v(e, a),
          c = C({ botInfo: s, encs: a, msgMeta: u, node: e }),
          d = L(e, c),
          m = k(e),
          p = E(e),
          _ = D(e),
          f = x(e, a),
          g =
            (t =
              (n = e.maybeChild("rcat")) == null ? void 0 : n.contentBytes()) !=
            null
              ? t
              : null;
        return {
          encs: a,
          msgInfo: c,
          msgMeta: u,
          bizInfo: d,
          hsmInfo: p,
          paymentInfo: m,
          deviceIdentity: l,
          rcat: g,
          msgBotInfo: s,
          reportingTokenInfo: _,
          ghsReportingTokenInfos: f,
        };
      });
    function C(t) {
      var n,
        r = t.botInfo,
        a = t.encs,
        i = t.msgMeta,
        l = t.node,
        _ = o("WAWebABProps").getABPropConfigValue(
          "web_read_self_watermark_receive_store_ts",
        )
          ? l.maybeAttrInt("sts")
          : null,
        f = babelHelpers.extends(
          {
            externalId: l.attrString("id"),
            ts: l.attrTime("t"),
            edit:
              (n = l.maybeAttrInt("edit")) != null
                ? n
                : o("WAWebAck").EDIT_ATTR.NONE,
            isHsm: l.hasChild("hsm"),
            count: l.maybeAttrInt("count"),
            pushname: l.maybeAttrString("notify"),
            username: l.maybeAttrString("username"),
            displayName: l.maybeAttrString("display_name"),
            senderPn: l.hasAttr("sender_pn")
              ? o("WAWebJidToWid").userJidToUserWid(l.attrUserJid("sender_pn"))
              : null,
            senderLid: l.hasAttr("sender_lid")
              ? o("WAWebJidToWid").userJidToUserWid(l.attrUserJid("sender_lid"))
              : null,
            recipientLid: l.hasAttr("recipient_lid")
              ? o("WAWebJidToWid").lidUserJidToUserLid(
                  l.attrLidUserJid("recipient_lid"),
                )
              : null,
            recipientPn: l.hasAttr("recipient_pn")
              ? o("WAWebJidToWid").userJidToUserWid(
                  l.attrUserJid("recipient_pn"),
                )
              : null,
            peerRecipientPn: l.hasAttr("peer_recipient_pn")
              ? o("WAWebJidToWid").userJidToUserWid(
                  l.attrUserJid("peer_recipient_pn"),
                )
              : null,
            peerRecipientLid: l.hasAttr("peer_recipient_lid")
              ? o("WAWebJidToWid").lidUserJidToUserLid(
                  l.attrLidUserJid("peer_recipient_lid"),
                )
              : null,
            peerRecipientUsername: l.hasAttr("peer_recipient_username")
              ? l.attrString("peer_recipient_username")
              : null,
            recipientLatestLid: l.hasAttr("recipient_latest_lid")
              ? o("WAWebJidToWid").lidUserJidToUserLid(
                  l.attrLidUserJid("recipient_latest_lid"),
                )
              : null,
            recipientUsername: l.hasAttr("recipient_username")
              ? l.attrString("recipient_username")
              : null,
            participant: l.hasAttr("participant")
              ? o("WAWebJidToWid").deviceJidToDeviceWid(
                  l.attrDeviceJid("participant"),
                )
              : null,
            participantLid: l.hasAttr("participant_lid")
              ? o("WAWebJidToWid").lidUserJidToUserLid(
                  l.attrLidUserJid("participant_lid"),
                )
              : null,
            participantPn: l.hasAttr("participant_pn")
              ? o("WAWebJidToWid").userJidToUserWid(
                  l.attrUserJid("participant_pn"),
                )
              : null,
            participantUsername: l.maybeAttrString("participant_username"),
            category: l.maybeAttrEnum(
              "category",
              o("WAWebHandleMsgCommon").MSG_CATEGORY,
            ),
            offline: l.maybeAttrString("offline"),
            senderCountryCode: P(l.maybeChild("meta")),
          },
          _ != null ? { serverStoreTimeMicros: _ } : null,
        ),
        g = o("WAWebJidToWid").jidWithTypeToWid(l.attrJidWithType("from"));
      if (
        (g.isNewsletter() &&
          l.throw("unexpected `from` attribute with newsletter Jid"),
        g.isUser() || g.isGroup())
      ) {
        var h = g.isGroup()
          ? o("WAWebWidToJid").widToChatJid(g)
          : o("WAWebWidToJid").widToChatJid(
              o("WAWebWidFactory").asUserWidOrThrow(g),
            );
        $(i, f.offline, _, h);
      }
      var y = l.hasAttr("participant")
          ? o("WAWebJidToWid").deviceJidToDeviceWid(
              l.attrDeviceJid("participant"),
            )
          : null,
        C = l.hasAttr("recipient")
          ? o("WAWebJidToWid").userJidToUserWid(l.attrUserJid("recipient"))
          : null,
        v = !!(
          y != null &&
          y.isHosted() &&
          (g.isStatus() || g.isGroup() || g.isBroadcast())
        );
      if (v)
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          "incomingMsgParser",
          "" +
            o("WAWebCreateNackFromStanza").NackReason
              .InvalidHostedCompanionStanza,
        );
      var S = a.every(function (e) {
          return e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg;
        }),
        R = a.some(function (e) {
          return e.retryCount > 0;
        }),
        L = g.isGroup() || g.isBroadcast() ? y : g;
      if (C != null && L != null && !o("WAWebUserPrefsMeUser").isMeAccount(L))
        return l.throw("Invalid recipient from non peer device");
      var E = b(l),
        k = i == null ? void 0 : i.targetChatJid;
      if (r && g.isPnBot() && k != null) {
        var I;
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          {
            chat: o("WAWebWidFactory").asUserWidOrThrow(
              (I = i == null ? void 0 : i.targetChatJidLid) != null ? I : k,
            ),
            author: g,
            botParticipant: g,
          },
        );
      } else if (r && g.isFbidBot() && k != null) {
        var T = o("WAWebWidFactory").asUserWidOrThrow(k);
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          {
            chat: o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
              ? T
              : o("WAWebLidMigrationUtils").toPnOrThrow(T),
            author: g,
            botParticipant: g,
          },
        );
      } else if (g.isUser()) {
        var D = g;
        if (C != null) {
          if (!o("WAWebUserPrefsMeUser").isMeAccount(g))
            return l.throw("recipient on non peer chat message");
          D = C;
        }
        var x = null,
          N = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidThread(D);
        N != null &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "parseMessageInfo: forwarding ",
                " to ",
                "",
              ])),
            D.toLogString(),
            N.toLogString(),
          ),
          C != null && (x = C),
          (D = N));
        var M = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(D);
        return (
          M != null &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BIZAI] parseMessageInfo: forwarding ",
                  " to ",
                  "",
                ])),
              D.toLogString(),
              M.toLogString(),
            ),
            C != null && (x = C),
            (D = M)),
          babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
            f,
            {
              chat: o("WAWebWidFactory").asUserWidOrThrow(D),
              author: g,
              originalBotRecipient: x,
            },
          )
        );
      } else if (g.isGroup()) {
        var w;
        if (y == null) return l.throw("group message with no participant");
        var A =
          (w = l.maybeAttrEnum(
            "addressing_mode",
            o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE,
          )) != null
            ? w
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
        try {
          !o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            y.isLid() &&
            f.participantPn == null &&
            f.displayName == null &&
            !o("WAWebUserPrefsMeUser").isMeAccount(y) &&
            (o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid group] missing participant_pn for Lid message. sw worker: ",
                  "",
                ])),
              o("WAWebUserPrefsNotifications")
                .getGlobalOfflineNotifications()
                .toString(),
            ),
            o("WAWebCurrentUser").isEmployee()
              ? (o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[lid group] chat id: ",
                      " participant lid: ",
                      "",
                    ])),
                  g.toString(),
                  y.toString(),
                ),
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] missing group mapping in message parser for employee",
                      ])),
                  )
                  .sendLogs(
                    "[lid group] missing group mapping in message parser for employee",
                  ))
              : o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] missing group mapping in message parser",
                      ])),
                  )
                  .sendLogs(
                    "[lid group] missing group mapping in message parser",
                  ));
        } catch (e) {
          o("WALogger").ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[lid group] could not report missing lid in group message parser ",
                "",
              ])),
            e,
          );
        }
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP },
          f,
          { chat: g, author: y, isDirect: S, addressingMode: A },
        );
      } else {
        if (g.isBroadcast() && !g.isStatus())
          return y == null
            ? l.throw("broadcast message with no participant")
            : o("WAWebUserPrefsMeUser").isMeAccount(y)
              ? E == null && !R
                ? l.throw("peer broadcast message with no participants node")
                : babelHelpers.extends(
                    {
                      type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                        .PEER_BROADCAST,
                    },
                    f,
                    {
                      chat: g,
                      author: y,
                      isDirect: S,
                      bclParticipants: E != null ? E : [],
                      bclHashValidated: !1,
                    },
                  )
              : babelHelpers.extends(
                  {
                    type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                      .OTHER_BROADCAST,
                  },
                  f,
                  {
                    chat: g,
                    author: y,
                    isDirect: S,
                    ephSetting: l.maybeAttrString("eph_setting"),
                  },
                );
        if (g.isBroadcast() && g.isStatus()) {
          var F, O;
          if (y == null) return l.throw("status message with no participant");
          var B =
            (F =
              (O = l.maybeChild("meta")) == null
                ? void 0
                : O.maybeAttrString("status_setting")) != null
              ? F
              : void 0;
          if (o("WAWebUserPrefsMeUser").isMeAccount(y) && S) {
            if (E == null)
              return babelHelpers.extends(
                {
                  type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                    .DIRECT_PEER_STATUS,
                },
                f,
                { chat: g, author: y, isDirect: S, statusSetting: B },
              );
            var W = E.map(function (e) {
              return e.wid;
            });
            return babelHelpers.extends(
              {
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                  .DIRECT_PEER_STATUS,
              },
              f,
              {
                chat: g,
                author: y,
                directPeerStatusBclParticipants: W,
                bclHashValidated: !1,
                statusSetting: B,
              },
            );
          }
          return babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS },
            f,
            { chat: g, author: y, isDirect: S, statusSetting: B },
          );
        }
      }
      return l.throw("Unrecognized message type");
    }
    function b(e) {
      var t = e.maybeChild("participants");
      if (!t) return null;
      var n = [],
        r = 0;
      return (
        t.forEachChildWithTag("to", function (e) {
          var t = o("WAWebJidToWid").userJidToUserWid(e.attrUserJid("jid")),
            a = e.maybeAttrString("eph_setting"),
            i = e.maybeAttrLidUserJid("peer_recipient_lid"),
            l = e.maybeAttrUserJid("peer_recipient_pn"),
            s = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
              ? e.maybeAttrString("peer_recipient_username")
              : null,
            u = e.maybeAttrLidUserJid("recipient_latest_lid"),
            c = { wid: t };
          (a != null && (c.ephSetting = a),
            i != null &&
              (c.peerRecipientLid = o("WAWebJidToWid").lidUserJidToUserLid(i)),
            l != null &&
              (c.peerRecipientPn = o("WAWebJidToWid").userJidToUserWid(l)),
            s != null && (c.peerRecipientUsername = s),
            u != null &&
              (i == null && l == null && r++,
              (c.recipientLatestLid =
                o("WAWebJidToWid").lidUserJidToUserLid(u))),
            n.push(c));
        }),
        r > 0 &&
          o("WALogger").ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast] Received ",
                " recipient_latest_lid without a peer_recipient_lid nor peer_recipient_pn, this should not happen",
              ])),
            r,
          ),
        n
      );
    }
    function v(e, t) {
      var n = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
        a = e.hasAttr("participant")
          ? o("WAWebJidToWid").deviceJidToDeviceWid(
              e.attrDeviceJid("participant"),
            )
          : null,
        i = n.isGroup() || n.isBroadcast() ? a : n;
      if (i == null) return e.throw("incomingMsgParser: to have a sender");
      var l = e.hasChild("unavailable");
      !l &&
        t.length === 0 &&
        e.throw("incomingMsgParser: to have enc node children");
      var s = !1,
        u = !1;
      if (l) {
        var c = e.maybeChild("unavailable");
        ((u = (c == null ? void 0 : c.maybeAttrString("hosted")) === "true"),
          (s =
            (c == null ? void 0 : c.maybeAttrString("type")) === "view_once"));
      }
      var d = e.attrEnum("type", o("WAWebHandleMsgCommon").STANZA_MSG_TYPES),
        m = e.maybeChild("meta"),
        p =
          d === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll
            ? m == null
              ? void 0
              : m.attrEnumOrNullIfUnknown(
                  "polltype",
                  o("WAWebHandleMsgCommon").POLL_TYPES,
                )
            : null,
        _;
      o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() &&
        (_ =
          (m == null ? void 0 : m.maybeAttrString("status_mentioned")) ===
          "true");
      var f = {
        isUnavailable: l,
        isViewOnceUnavailable: s,
        isHostedMsgUnavailable: u,
        type: d,
        pollType: p,
        origin:
          m == null
            ? void 0
            : m.maybeAttrEnum(
                "origin",
                o("WAWebHandleMsgCommon").STANZA_MSG_ORIGIN,
              ),
        rawTs: e.attrString("t"),
        urlNumber: e.hasChild("url_number"),
        urlText: e.hasChild("url_text"),
        statusMentioned: _,
        appdata:
          m == null
            ? void 0
            : m.maybeAttrEnum("appdata", o("WAWebHandleMsgCommon").APPDATA),
      };
      (m &&
        m.hasAttr(o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR) &&
        (f.bizSource = m.attrString(o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR)),
        m &&
          m.hasAttr("thread_msg_id") &&
          (f.threadMsgId = m.attrString("thread_msg_id")),
        m &&
          m.hasAttr("thread_msg_sender_jid") &&
          (f.threadMsgSenderJid = o("WAWebJidToWid").jidWithTypeToWid(
            m.attrJidWithType("thread_msg_sender_jid"),
          )),
        m && m.hasAttr("target_id") && (f.targetId = m.attrString("target_id")),
        m &&
          m.hasAttr("target_sender_jid") &&
          (f.targetSenderJid = o("WAWebJidToWid").jidWithTypeToWid(
            m.attrJidWithType("target_sender_jid"),
          )),
        m &&
          m.hasAttr("target_chat_jid") &&
          (f.targetChatJid = o("WAWebJidToWid").jidWithTypeToWid(
            m.attrJidWithType("target_chat_jid"),
          )),
        m &&
          m.hasAttr("target_chat_jid_lid") &&
          (f.targetChatJidLid = o("WAWebJidToWid").jidWithTypeToWid(
            m.attrJidWithType("target_chat_jid_lid"),
          )),
        m &&
          m.hasAttr("capi") &&
          m.attrString("capi") === "true" &&
          (f.capi = !0),
        d === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event &&
          m &&
          m.hasAttr("event_type") &&
          (f.eventType = m.attrEnum(
            "event_type",
            o("WAWebHandleMsgCommon").EVENT_TYPES,
          )),
        m &&
          m.hasAttr("context_source") &&
          (f.context_source = m.attrString("context_source")),
        m &&
          m.hasAttr("read") &&
          r("justknobx")._("1799") &&
          (f.isReadByPeer = m.attrString("read") === "true"),
        m &&
          m.maybeAttrString("is_group_status") === "true" &&
          (f.isGroupStatus = !0));
      var g = m == null ? void 0 : m.maybeAttrString("session_scope");
      if (
        (g != null &&
          (f.metaSessionScope = o("WAWebSessionScope").SessionScope.cast(g)),
        m &&
          m.maybeAttrString("type") ===
            o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE)
      ) {
        var h = m.maybeAttrInt("st"),
          y = m.maybeChild("key"),
          C = y == null ? void 0 : y.maybeAttrString("rkid");
        if (h == null || y == null || C == null)
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            "parseMessageMeta",
            "scheduled_message stanza missing st/key/rkid",
          );
        var b = S(y.contentBytes());
        if (b == null)
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            "parseMessageMeta",
            "scheduled_message reveal-key content has unexpected length",
          );
        f.scheduledMsgMeta = {
          scheduledTimestampS: h,
          revealKeyId: C,
          revealKey: b,
        };
      }
      return f;
    }
    function S(e) {
      if (
        e.length ===
        o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES
      )
        return e;
      if (
        e.length ===
        o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES * 2
      )
        try {
          var t = new TextDecoder().decode(e),
            n = new Uint8Array(o("WAHex").parseHex(t));
          if (
            n.length ===
            o("WAWebScheduledMsgConstants").SCHEDULED_MSG_REVEAL_KEY_BYTES
          )
            return n;
        } catch (e) {}
      return null;
    }
    function R(e) {
      var t = e.maybeChild("bot");
      if (t) {
        var n = t.maybeAttrString("sender_timestamp_ms"),
          r = t.maybeAttrString("edit_target_id"),
          a = o("WAWebBotTypes").BotMsgEditType.cast(t.maybeAttrString("edit")),
          i;
        t.hasAttr("biz_bot") &&
          (t.attrString("biz_bot") === "1"
            ? (i = o("WAWebBotTypes").BizBotType.BIZ_1P)
            : t.attrString("biz_bot") === "3" &&
              (i = o("WAWebBotTypes").BizBotType.BIZ_3P));
        var l = o("WAWebBotTypes").BotMsgBodyType.cast(
            t.maybeAttrString("type"),
          ),
          s = {
            botSenderTimestampMs: n,
            botEditTargetId: r,
            botEditType: a,
            botMsgBodyType: l,
            bizBotType: i,
          };
        return s;
      }
    }
    function L(e, t) {
      var n,
        r,
        a,
        i,
        l = !!(!(t == null || (n = t.author) == null) && n.isBot()),
        s = !!(!(t == null || (r = t.chat) == null) && r.isBot()),
        u = !s && l;
      if (u)
        return {
          verifiedNameSerial: null,
          verifiedLevel: null,
          verifiedNameCert: null,
          privacyMode: null,
          nativeFlowName: null,
          campaignId: null,
        };
      var c = e.hasChild("verified_name")
          ? e.child("verified_name").contentBytes()
          : null,
        d = e.maybeAttrEnum(
          "verified_level",
          o("WAWebHandleMsgCommon").MSG_VERIFIED_LEVEL,
        ),
        m = e.hasAttr("verified_name") ? e.attrInt("verified_name") : -1,
        p = e.maybeChild("biz"),
        _ = null;
      if (p != null) {
        var f = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(
            p.maybeAttrInt("actual_actors"),
          ),
          g = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(
            p.maybeAttrInt("host_storage"),
          ),
          h = p.maybeAttrInt("privacy_mode_ts");
        f != null &&
          g != null &&
          h != null &&
          !l &&
          (_ = { actualActors: f, hostStorage: g, privacyModeTs: h });
      }
      var y =
          (a =
            p == null ||
            (i = p.maybeChild("interactive")) == null ||
            (i = i.maybeChild("native_flow")) == null
              ? void 0
              : i.maybeAttrString("name")) != null
            ? a
            : p == null
              ? void 0
              : p.maybeAttrString("native_flow_name"),
        C = p == null ? void 0 : p.maybeChild("quality_control"),
        b = C == null ? void 0 : C.maybeAttrString("decision_id"),
        v = C == null ? void 0 : C.maybeAttrString("source_type"),
        S = [];
      C == null ||
        C.forEachChildWithTag("decision_source", function (e) {
          var t = e.maybeAttrString("value");
          t != null && S.push(t);
        });
      var R = p == null ? void 0 : p.maybeAttrString("campaign_id");
      return babelHelpers.extends(
        {
          verifiedNameCert: c,
          verifiedLevel: d,
          verifiedNameSerial: m,
          privacyMode: _,
          nativeFlowName: y,
          campaignId: R,
        },
        p && {
          verifiedButtonsEnvelope: p.hasChild("buttons"),
          verifiedListEnvelope: p.hasChild("list"),
          verifiedHsmEnvelope: e.hasChild("hsm"),
          decisionId: b,
          sourceType: v,
          decisionSources: S.length > 0 ? S : void 0,
        },
      );
    }
    function E(e) {
      var t = e.maybeChild("hsm");
      if (t != null) {
        var n = t.maybeAttrString("tag"),
          r = t.maybeAttrString("category");
        if (n != null || r != null) return { tag: n, category: r };
      }
      return null;
    }
    function k(e) {
      var t = null,
        n = e.hasChild("pay") ? e.child("pay") : null,
        r = e.hasChild("transaction") ? e.child("transaction") : null,
        a = o("WAWebJidToWid")
          .jidWithTypeToWid(e.attrJidWithType("from"))
          .isGroup(),
        i = e.hasAttr("participant")
          ? o("WAWebJidToWid").jidWithTypeToWid(
              e.attrJidWithType("participant"),
            )
          : null;
      if (
        o("WAWebPaymentNotificationParser").isNoviTransaction(n) ||
        o("WAWebPaymentNotificationParser").isNoviTransaction(r)
      )
        t = { futureproofed: !0 };
      else if (r) {
        var l = o("WAWebPaymentNotificationParser").parseTransactionNode(r);
        l &&
          (I(a, i, o("WAWebWidFactory").createWid(l.receiver.toString()))
            ? (t = {
                receiverJid: l.receiver.toString(),
                currency: l.currency,
                amount1000: l.amount1000,
                transactionTimestamp: l.ts,
                txnStatus: o("WAWebPaymentStatusUtils").getPaymentTxnWebStatus(
                  l.status,
                ),
              })
            : (t = {
                receiverJid: l.receiver.toString(),
                currency: l.currency,
                amount1000: l.amount1000,
                transactionTimestamp: l.ts,
              }));
      } else if (n) {
        var s = n.attrEnum("type", o("WAWebHandleMsgCommon").PAY_NODE_TYPES);
        switch (s) {
          case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.send: {
            var u = o("WAWebHandlePaymentAmountUtils").getAmount1000AndCurrency(
                n,
              ),
              c = u.amount1000,
              d = u.currency,
              m = n.hasAttr("receiver")
                ? n.attrString("receiver")
                : e.attrString("recipient");
            I(a, i, o("WAWebWidFactory").createWid(m))
              ? (t = {
                  receiverJid: m,
                  currency: d,
                  amount1000: c,
                  transactionTimestamp: e.attrInt("t"),
                  txnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
                    .INIT,
                })
              : (t = {
                  receiverJid: m,
                  currency: d,
                  amount1000: c,
                  transactionTimestamp: e.attrInt("t"),
                });
            break;
          }
          case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.request:
            break;
          case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.invite:
            break;
          default:
            break;
        }
      }
      return t;
    }
    function I(e, t, n) {
      return !(
        e &&
        t != null &&
        n != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(n)
      );
    }
    var T = new (r("WADeprecatedWapParser"))(
      "incomingMsgParserForAckOnly",
      function (e) {
        e.assertTag("message");
        var t = null;
        try {
          t = e.attrEnum("type", o("WAWebHandleMsgCommon").STANZA_MSG_TYPES);
        } catch (e) {
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "incomingMsgParserForAckOnly: failed to parse stanza type: ",
                "",
              ])),
            e,
          );
        }
        var n = null;
        try {
          n = e.attrString("offline") !== "";
        } catch (e) {}
        var r = null;
        try {
          r = C({ botInfo: R(e), encs: [], node: e });
        } catch (e) {
          o("WALogger").WARN(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "incomingMsgParserForAckOnly: failed to parse msg info: ",
                "",
              ])),
            e,
          );
        }
        return {
          type: t,
          externalId: e.attrString("id"),
          from: o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("from")),
          participant: e.hasAttr("participant")
            ? o("WAWebJidToWid").deviceJidToDeviceWid(
                e.attrDeviceJid("participant"),
              )
            : null,
          msgInfo: r,
          offline: n,
        };
      },
    );
    function D(e) {
      if (!o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled())
        return null;
      var t = e.maybeChild("reporting");
      if (t == null) return null;
      var n = { stanzaTs: e.attrTime("t") },
        r = t.maybeChild("reporting_token"),
        a = t.maybeChild("reporting_tag");
      return (
        r != null &&
          ((n.reportingToken = r.contentBytes()), (n.version = r.attrInt("v"))),
        a != null && (n.reportingTag = a.contentBytes()),
        n
      );
    }
    function x(e, t) {
      if (!o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled())
        return null;
      var n = t.some(function (e) {
        return (
          e.encMediaType ===
          o("WAWebBackendJobs.flow").EncMediaType.GroupHistory
        );
      });
      if (!n) return null;
      var r = e.maybeChild("reporting");
      if (r == null) return null;
      var a = r.mapChildrenWithTag(
        "message",
        o("WAWebIdentityFunction").identityFunction,
      );
      if (
        a.length === 0 ||
        !o(
          "WAWebGroupHistoryGating",
        ).isGroupHistoryReceiverReportingTokenEnabled()
      )
        return null;
      var i = e.attrTime("t"),
        l = [];
      for (var s of a) {
        var u = s.attrString("id"),
          c = s.maybeChild("reporting_token"),
          d = s.maybeChild("reporting_tag"),
          m = d != null ? new Uint8Array(d.contentBytes()) : null,
          p = { stanzaId: u, reportingTag: m, sendTs: i };
        if (c != null) {
          var _,
            f = (_ = c.maybeAttrInt("v")) != null ? _ : 1,
            g = c.contentBytes();
          l.push(
            babelHelpers.extends({}, p, {
              reportingToken: new Uint8Array(g),
              version: f,
            }),
          );
        } else
          l.push(
            babelHelpers.extends({}, p, {
              reportingToken: null,
              version: null,
            }),
          );
      }
      return l;
    }
    function $(e, t, n, r) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_read_self_watermark_processing",
        ) &&
        !(e == null || t == null || n == null || n <= 0)
      ) {
        var a = o("WAWebThreadMetadata").getPeerWatermark(r);
        a != null && n <= a.readSts && (e.isReadByPeer = !0);
      }
    }
    function P(e) {
      var t = e == null ? void 0 : e.maybeAttrString("sender_country_code");
      if (t != null)
        try {
          return o("WAWebAsISOCountryCode").asISOCountryCode(t);
        } catch (e) {
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to parse sender country code: ",
                    "",
                  ])),
                t,
              )
              .sendLogs("failed-to-parse-sender-country-code", {
                sampling: 0.01,
              });
        }
    }
    ((l.incomingMsgParser = y), (l.incomingMsgParserForAckOnly = T));
  },
  98,
);
