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
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
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
          s = L(e),
          u = S(e, a),
          c = b({ botInfo: s, encs: a, msgMeta: u, node: e }),
          d = E(e, c),
          m = I(e),
          p = m.dehydratedPaymentNode,
          _ = m.paymentInfo,
          f = k(e),
          g = x(e),
          h = $(e, a),
          y =
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
          hsmInfo: f,
          paymentInfo: _,
          dehydratedPaymentNode: p,
          deviceIdentity: l,
          rcat: y,
          msgBotInfo: s,
          reportingTokenInfo: g,
          ghsReportingTokenInfos: h,
        };
      });
    function C(e, t) {
      var n = o("WAWebUserPrefsMeUser").isMeAccount(e),
        r =
          e != null &&
          t != null &&
          e.isLid() &&
          !o("WAWebUserPrefsMeUser").isMeAccount(e) &&
          t.equals(e);
      if (
        e == null ||
        t == null ||
        !t.isUser() ||
        !(n || r) ||
        !o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
      )
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          "incomingMsgParser",
          "" +
            o("WAWebCreateNackFromStanza").NackReason
              .InvalidHostedCompanionStanza,
        );
      var a = o("WAWebWidFactory").asUserWidOrThrow(t),
        i = o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated()
          ? a
          : o("WAWebLidMigrationUtils").toPn(a);
      if (i == null)
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          "incomingMsgParser",
          "" +
            o("WAWebCreateNackFromStanza").NackReason
              .InvalidHostedCompanionStanza,
        );
      return { chat: i, metaFrom: e };
    }
    function b(t) {
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
            senderCountryCode: N(l.maybeChild("meta")),
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
        P({ chatJid: h, msgMeta: i, offline: f.offline, sts: _ });
      }
      var y = l.hasAttr("participant")
          ? o("WAWebJidToWid").deviceJidToDeviceWid(
              l.attrDeviceJid("participant"),
            )
          : null,
        b = l.hasAttr("recipient")
          ? o("WAWebJidToWid").userJidToUserWid(l.attrUserJid("recipient"))
          : null,
        S = !!(
          y != null &&
          y.isHosted() &&
          (g.isStatus() || g.isGroup() || g.isBroadcast())
        );
      if (S)
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          "incomingMsgParser",
          "" +
            o("WAWebCreateNackFromStanza").NackReason
              .InvalidHostedCompanionStanza,
        );
      var R = a.every(function (e) {
          return e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg;
        }),
        L = a.some(function (e) {
          return e.retryCount > 0;
        }),
        E = g.isGroup() || g.isBroadcast() ? y : g;
      if (b != null && E != null && !o("WAWebUserPrefsMeUser").isMeAccount(E))
        return l.throw("Invalid recipient from non peer device");
      var k = v(l),
        I = i == null ? void 0 : i.targetChatJid,
        T = i == null ? void 0 : i.from;
      if (g.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
        if (
          I != null &&
          I.isFbidBot() &&
          !I.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
          (T == null || o("WAWebUserPrefsMeUser").isMeAccount(T)) &&
          o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
        ) {
          var D = T != null ? T : o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          if (D != null)
            return babelHelpers.extends(
              { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
              f,
              { chat: I, author: g, metaFrom: D },
            );
        }
        var x = C(T, I),
          $ = x.chat,
          M = x.metaFrom;
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          { chat: $, author: g, metaFrom: M },
        );
      }
      if (r && g.isPnBot() && I != null) {
        var w;
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          {
            chat: o("WAWebWidFactory").asUserWidOrThrow(
              (w = i == null ? void 0 : i.targetChatJidLid) != null ? w : I,
            ),
            author: g,
            botParticipant: g,
          },
        );
      } else if (r && g.isFbidBot() && I != null) {
        var A = o("WAWebWidFactory").asUserWidOrThrow(I);
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          {
            chat: o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
              ? A
              : o("WAWebLidMigrationUtils").toPnOrThrow(A),
            author: g,
            botParticipant: g,
          },
        );
      } else if (g.isUser()) {
        var F = g;
        if (b != null) {
          if (!o("WAWebUserPrefsMeUser").isMeAccount(g))
            return l.throw("recipient on non peer chat message");
          F = b;
        }
        var O = null,
          B = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidThread(F);
        B != null &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "parseMessageInfo: forwarding ",
                " to ",
                "",
              ])),
            F.toLogString(),
            B.toLogString(),
          ),
          b != null && (O = b),
          (F = B));
        var W = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(F);
        return (
          W != null &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BIZAI] parseMessageInfo: forwarding ",
                  " to ",
                  "",
                ])),
              F.toLogString(),
              W.toLogString(),
            ),
            b != null && (O = b),
            (F = W)),
          babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
            f,
            {
              chat: o("WAWebWidFactory").asUserWidOrThrow(F),
              author: g,
              originalBotRecipient: O,
            },
          )
        );
      } else if (g.isGroup()) {
        var q;
        if (y == null) return l.throw("group message with no participant");
        var U =
          (q = l.maybeAttrEnum(
            "addressing_mode",
            o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE,
          )) != null
            ? q
            : void 0;
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
          { chat: g, author: y, isDirect: R, addressingMode: U },
        );
      } else {
        if (g.isBroadcast() && !g.isStatus())
          return y == null
            ? l.throw("broadcast message with no participant")
            : o("WAWebUserPrefsMeUser").isMeAccount(y)
              ? k == null && !L
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
                      isDirect: R,
                      bclParticipants: k != null ? k : [],
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
                    isDirect: R,
                    ephSetting: l.maybeAttrString("eph_setting"),
                  },
                );
        if (g.isBroadcast() && g.isStatus()) {
          var V, H;
          if (y == null) return l.throw("status message with no participant");
          var G =
            (V =
              (H = l.maybeChild("meta")) == null
                ? void 0
                : H.maybeAttrString("status_setting")) != null
              ? V
              : void 0;
          if (o("WAWebUserPrefsMeUser").isMeAccount(y) && R) {
            if (k == null)
              return babelHelpers.extends(
                {
                  type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                    .DIRECT_PEER_STATUS,
                },
                f,
                { chat: g, author: y, isDirect: R, statusSetting: G },
              );
            var z = k.map(function (e) {
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
                directPeerStatusBclParticipants: z,
                bclHashValidated: !1,
                statusSetting: G,
              },
            );
          }
          return babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS },
            f,
            { chat: g, author: y, isDirect: R, statusSetting: G },
          );
        }
      }
      return l.throw("Unrecognized message type");
    }
    function v(e) {
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
    function S(e, t) {
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
        isSkdm:
          t.some(function (e) {
            return (
              e.e2eType === o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            );
          }) &&
          t.some(function (e) {
            return (
              e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg
            );
          }),
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
          m.hasAttr("from") &&
          (f.from = o("WAWebJidToWid").jidWithTypeToWid(
            m.attrJidWithType("from"),
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
        var b = R(y.contentBytes());
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
    function R(e) {
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
    function L(e) {
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
    function E(e, t) {
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
    function k(e) {
      var t = e.maybeChild("hsm");
      if (t != null) {
        var n = t.maybeAttrString("tag"),
          r = t.maybeAttrString("category");
        if (n != null || r != null) return { tag: n, category: r };
      }
      return null;
    }
    function I(e) {
      var t = null,
        n = null,
        r = e.hasChild("pay") ? e.child("pay") : null,
        a = e.hasChild("transaction") ? e.child("transaction") : null,
        i = o("WAWebJidToWid")
          .jidWithTypeToWid(e.attrJidWithType("from"))
          .isGroup(),
        l = e.hasAttr("participant")
          ? o("WAWebJidToWid").jidWithTypeToWid(
              e.attrJidWithType("participant"),
            )
          : null;
      if (a) {
        var s = o("WAWebPaymentNotificationParser").parseTransactionNode(a);
        s
          ? T(i, l, o("WAWebWidFactory").createWid(s.receiver.toString()))
            ? (t = {
                receiverJid: s.receiver.toString(),
                currency: s.currency,
                amount1000: s.amount1000,
                transactionTimestamp: s.ts,
                txnStatus: o("WAWebPaymentStatusUtils").getPaymentTxnWebStatus(
                  s.status,
                ),
              })
            : (t = {
                receiverJid: s.receiver.toString(),
                currency: s.currency,
                amount1000: s.amount1000,
                transactionTimestamp: s.ts,
              })
          : o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(a) &&
            (n = "transaction");
      } else if (r) {
        var u = r.attrEnum("type", o("WAWebHandleMsgCommon").PAY_NODE_TYPES);
        switch (u) {
          case o("WAWebHandleMsgCommon").PAY_NODE_TYPES.send: {
            if (
              o("WAWebABProps").getABPropConfigValue(
                "wa_web_xb_bubble_enabled",
              ) !== !0 &&
              r.hasAttr("transaction-type") &&
              r.attrString("transaction-type") === "remittance"
            ) {
              t = { futureproofed: !0 };
              break;
            }
            if (o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(r)) {
              ((n = "pay"), (t = { futureproofed: !0 }));
              break;
            }
            var c = o("WAWebHandlePaymentAmountUtils").getAmount1000AndCurrency(
                r,
              ),
              d = c.amount1000,
              m = c.currency,
              p = r.hasAttr("receiver")
                ? r.attrString("receiver")
                : e.attrString("recipient");
            T(i, l, o("WAWebWidFactory").createWid(p))
              ? (t = {
                  receiverJid: p,
                  currency: m,
                  amount1000: d,
                  transactionTimestamp: e.attrInt("t"),
                  txnStatus: o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
                    .INIT,
                })
              : (t = {
                  receiverJid: p,
                  currency: m,
                  amount1000: d,
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
      return { paymentInfo: t, dehydratedPaymentNode: n };
    }
    function T(e, t, n) {
      return !(
        e &&
        t != null &&
        n != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(n)
      );
    }
    var D = new (r("WADeprecatedWapParser"))(
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
          r = b({ botInfo: L(e), encs: [], node: e });
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
    function x(e) {
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
    function $(e, t) {
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
    function P(e) {
      var t = e.chatJid,
        n = e.msgMeta,
        r = e.offline,
        a = e.sts;
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_read_self_watermark_processing",
        ) &&
        !(n == null || r == null || a == null || a <= 0)
      ) {
        var i = o("WAWebThreadMetadata").getPeerWatermark(t);
        i != null && a <= i.readSts && (n.isReadByPeer = !0);
      }
    }
    function N(e) {
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
    ((l.incomingMsgParser = y), (l.incomingMsgParserForAckOnly = D));
  },
  98,
);
