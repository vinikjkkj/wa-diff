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
    "WAWebReportingTokenConstants",
    "WAWebScheduledMsgConstants",
    "WAWebSessionScope",
    "WAWebSimpleSignalPNToFBIDMigration",
    "WAWebStatusGatingUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
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
      y,
      C,
      b = new (r("WADeprecatedWapParser"))("incomingMsgParser", function (e) {
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
          s = k(e),
          u = L(e, a),
          c = S({ botInfo: s, encs: a, msgMeta: u, node: e }),
          d = I(e, c),
          m = x(e),
          p = m.dehydratedPaymentNode,
          _ = m.paymentInfo,
          f = D(e),
          g = N(e),
          h = M(e, a),
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
    function v(e, t) {
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
    function S(t) {
      var n,
        r = t.botInfo,
        a = t.encs,
        i = t.msgMeta,
        l = t.node,
        _ = l.maybeAttrInt("sts"),
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
            senderCountryCode: w(l.maybeChild("meta")),
          },
          _ != null ? { serverStoreTimeMicros: _ } : null,
        ),
        g = o("WAWebJidToWid").jidWithTypeToWid(l.attrJidWithType("from"));
      g.isNewsletter() &&
        l.throw("unexpected `from` attribute with newsletter Jid");
      var h = l.hasAttr("participant")
          ? o("WAWebJidToWid").deviceJidToDeviceWid(
              l.attrDeviceJid("participant"),
            )
          : null,
        y = l.hasAttr("recipient")
          ? o("WAWebJidToWid").userJidToUserWid(l.attrUserJid("recipient"))
          : null,
        C = !!(
          h != null &&
          h.isHosted() &&
          (g.isStatus() || g.isGroup() || g.isBroadcast())
        );
      if (C)
        throw new (o("WAParsableWapNode").XmppParsingFailure)(
          "incomingMsgParser",
          "" +
            o("WAWebCreateNackFromStanza").NackReason
              .InvalidHostedCompanionStanza,
        );
      var b = a.every(function (e) {
          return e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg;
        }),
        S = a.some(function (e) {
          return e.retryCount > 0;
        }),
        L = g.isGroup() || g.isBroadcast() ? h : g;
      if (y != null && L != null && !o("WAWebUserPrefsMeUser").isMeAccount(L))
        return l.throw("Invalid recipient from non peer device");
      var E = R(l),
        k = i == null ? void 0 : i.targetChatJid,
        I = i == null ? void 0 : i.from;
      if (g.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID)) {
        if (
          k != null &&
          k.isFbidBot() &&
          !k.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
          (I == null || o("WAWebUserPrefsMeUser").isMeAccount(I)) &&
          o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
        ) {
          var T = I != null ? I : o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          if (T != null)
            return babelHelpers.extends(
              { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
              f,
              { chat: k, author: g, metaFrom: T },
            );
        }
        var D = v(I, k),
          x = D.chat,
          $ = D.metaFrom;
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          { chat: x, author: g, metaFrom: $ },
        );
      }
      if (r && g.isPnBot() && k != null) {
        var P;
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          {
            chat: o("WAWebWidFactory").asUserWidOrThrow(
              (P = i == null ? void 0 : i.targetChatJidLid) != null ? P : k,
            ),
            author: g,
            botParticipant: g,
          },
        );
      } else if (r && g.isFbidBot() && k != null) {
        var N = o("WAWebWidFactory").asUserWidOrThrow(k);
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          f,
          {
            chat: o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
              ? N
              : o("WAWebLidMigrationUtils").toPnOrThrow(N),
            author: g,
            botParticipant: g,
          },
        );
      } else if (g.isUser()) {
        var M = g;
        if (y != null) {
          if (!o("WAWebUserPrefsMeUser").isMeAccount(g))
            return l.throw("recipient on non peer chat message");
          M = y;
        }
        var A = null,
          F = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidThread(M);
        F != null &&
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "parseMessageInfo: forwarding ",
                " to ",
                "",
              ])),
            M.toLogString(),
            F.toLogString(),
          ),
          y != null && (A = y),
          (M = F));
        var O = o("WAWebMaibaWASSMigration").getMaibaAiHubLidForFbidThread(M);
        return (
          O != null &&
            (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[BIZAI] parseMessageInfo: forwarding ",
                  " to ",
                  "",
                ])),
              M.toLogString(),
              O.toLogString(),
            ),
            y != null && (A = y),
            (M = O)),
          babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
            f,
            {
              chat: o("WAWebWidFactory").asUserWidOrThrow(M),
              author: g,
              originalBotRecipient: A,
            },
          )
        );
      } else if (g.isGroup()) {
        var B;
        if (h == null) return l.throw("group message with no participant");
        var W =
          (B = l.maybeAttrEnum(
            "addressing_mode",
            o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE,
          )) != null
            ? B
            : void 0;
        try {
          !o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            h.isLid() &&
            f.participantPn == null &&
            f.displayName == null &&
            !o("WAWebUserPrefsMeUser").isMeAccount(h) &&
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
                  h.toString(),
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
          { chat: g, author: h, isDirect: b, addressingMode: W },
        );
      } else {
        if (g.isBroadcast() && !g.isStatus())
          return h == null
            ? l.throw("broadcast message with no participant")
            : o("WAWebUserPrefsMeUser").isMeAccount(h)
              ? E == null && !S
                ? l.throw("peer broadcast message with no participants node")
                : babelHelpers.extends(
                    {
                      type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                        .PEER_BROADCAST,
                    },
                    f,
                    {
                      chat: g,
                      author: h,
                      isDirect: b,
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
                    author: h,
                    isDirect: b,
                    ephSetting: l.maybeAttrString("eph_setting"),
                  },
                );
        if (g.isBroadcast() && g.isStatus()) {
          var q, U;
          if (h == null) return l.throw("status message with no participant");
          var V =
            (q =
              (U = l.maybeChild("meta")) == null
                ? void 0
                : U.maybeAttrString("status_setting")) != null
              ? q
              : void 0;
          if (o("WAWebUserPrefsMeUser").isMeAccount(h) && b) {
            if (E == null)
              return babelHelpers.extends(
                {
                  type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                    .DIRECT_PEER_STATUS,
                },
                f,
                { chat: g, author: h, isDirect: b, statusSetting: V },
              );
            var H = E.map(function (e) {
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
                author: h,
                directPeerStatusBclParticipants: H,
                bclHashValidated: !1,
                statusSetting: V,
              },
            );
          }
          return babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS },
            f,
            { chat: g, author: h, isDirect: b, statusSetting: V },
          );
        }
      }
      return l.throw("Unrecognized message type");
    }
    function R(e) {
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
    function L(e, t) {
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
        u = !1,
        c = !1;
      if (l) {
        var d = e.maybeChild("unavailable");
        ((u = (d == null ? void 0 : d.maybeAttrString("hosted")) === "true"),
          (s =
            (d == null ? void 0 : d.maybeAttrString("type")) === "view_once"),
          (c =
            (d == null ? void 0 : d.maybeAttrString("type")) ===
            "sender_drop"));
      }
      var m = e.attrEnum("type", o("WAWebHandleMsgCommon").STANZA_MSG_TYPES),
        p = e.maybeChild("meta"),
        _ =
          m === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.poll
            ? p == null
              ? void 0
              : p.attrEnumOrNullIfUnknown(
                  "polltype",
                  o("WAWebHandleMsgCommon").POLL_TYPES,
                )
            : null,
        f;
      o("WAWebStatusGatingUtils").isStatusPrivateMentionsReceiveEnabled() &&
        (f =
          (p == null ? void 0 : p.maybeAttrString("status_mentioned")) ===
          "true");
      var g = {
        isUnavailable: l,
        isViewOnceUnavailable: s,
        isHostedMsgUnavailable: u,
        isAcpUnavailable: c,
        type: m,
        pollType: _,
        origin:
          p == null
            ? void 0
            : p.maybeAttrEnum(
                "origin",
                o("WAWebHandleMsgCommon").STANZA_MSG_ORIGIN,
              ),
        rawTs: e.attrString("t"),
        urlNumber: e.hasChild("url_number"),
        urlText: e.hasChild("url_text"),
        statusMentioned: f,
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
          p == null
            ? void 0
            : p.maybeAttrEnum("appdata", o("WAWebHandleMsgCommon").APPDATA),
      };
      (p &&
        p.hasAttr(o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR) &&
        (g.bizSource = p.attrString(o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR)),
        p &&
          p.hasAttr("thread_msg_id") &&
          (g.threadMsgId = p.attrString("thread_msg_id")),
        p &&
          p.hasAttr("thread_msg_sender_jid") &&
          (g.threadMsgSenderJid = o("WAWebJidToWid").jidWithTypeToWid(
            p.attrJidWithType("thread_msg_sender_jid"),
          )),
        p && p.hasAttr("target_id") && (g.targetId = p.attrString("target_id")),
        p &&
          p.hasAttr("target_sender_jid") &&
          (g.targetSenderJid = o("WAWebJidToWid").jidWithTypeToWid(
            p.attrJidWithType("target_sender_jid"),
          )),
        p &&
          p.hasAttr("target_chat_jid") &&
          (g.targetChatJid = o("WAWebJidToWid").jidWithTypeToWid(
            p.attrJidWithType("target_chat_jid"),
          )),
        p &&
          p.hasAttr("target_chat_jid_lid") &&
          (g.targetChatJidLid = o("WAWebJidToWid").jidWithTypeToWid(
            p.attrJidWithType("target_chat_jid_lid"),
          )),
        p &&
          p.hasAttr("from") &&
          (g.from = o("WAWebJidToWid").jidWithTypeToWid(
            p.attrJidWithType("from"),
          )),
        p &&
          p.hasAttr("capi") &&
          p.attrString("capi") === "true" &&
          (g.capi = !0),
        m === o("WAWebHandleMsgCommon").STANZA_MSG_TYPES.event &&
          p &&
          p.hasAttr("event_type") &&
          (g.eventType = p.attrEnum(
            "event_type",
            o("WAWebHandleMsgCommon").EVENT_TYPES,
          )),
        p &&
          p.hasAttr("context_source") &&
          (g.context_source = p.attrString("context_source")),
        p &&
          p.hasAttr("read") &&
          r("justknobx")._("1799") &&
          (g.isReadByPeer = p.attrString("read") === "true"),
        p &&
          p.maybeAttrString("is_group_status") === "true" &&
          (g.isGroupStatus = !0));
      var h = p == null ? void 0 : p.maybeAttrString("session_scope");
      if (
        (h != null &&
          (g.metaSessionScope = o("WAWebSessionScope").SessionScope.cast(h)),
        p &&
          p.maybeAttrString("type") ===
            o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE)
      ) {
        var y = p.maybeAttrInt("st"),
          C = p.maybeChild("key"),
          b = C == null ? void 0 : C.maybeAttrString("rkid");
        if (y == null || C == null || b == null)
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            "parseMessageMeta",
            "scheduled_message stanza missing st/key/rkid",
          );
        var v = E(C.contentBytes());
        if (v == null)
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            "parseMessageMeta",
            "scheduled_message reveal-key content has unexpected length",
          );
        g.scheduledMsgMeta = {
          scheduledTimestampS: y,
          revealKeyId: b,
          revealKey: v,
        };
      }
      return g;
    }
    function E(e) {
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
    function k(e) {
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
    function I(e, t) {
      var n,
        r,
        a,
        i = !!(!(t == null || (n = t.author) == null) && n.isBot());
      if (T(t))
        return {
          verifiedNameSerial: null,
          verifiedLevel: null,
          verifiedNameCert: null,
          privacyMode: null,
          nativeFlowName: null,
          campaignId: null,
        };
      var l = e.hasChild("verified_name")
          ? e.child("verified_name").contentBytes()
          : null,
        s = e.maybeAttrEnum(
          "verified_level",
          o("WAWebHandleMsgCommon").MSG_VERIFIED_LEVEL,
        ),
        u = e.hasAttr("verified_name") ? e.attrInt("verified_name") : -1,
        c = e.maybeChild("biz"),
        d = null;
      if (c != null) {
        var m = o("WAWebHandleMsgTypes.flow").ActualActorsEnumType.cast(
            c.maybeAttrInt("actual_actors"),
          ),
          p = o("WAWebHandleMsgTypes.flow").HostStorageEnumType.cast(
            c.maybeAttrInt("host_storage"),
          ),
          _ = c.maybeAttrInt("privacy_mode_ts");
        m != null &&
          p != null &&
          _ != null &&
          !i &&
          (d = { actualActors: m, hostStorage: p, privacyModeTs: _ });
      }
      var f =
          (r =
            c == null ||
            (a = c.maybeChild("interactive")) == null ||
            (a = a.maybeChild("native_flow")) == null
              ? void 0
              : a.maybeAttrString("name")) != null
            ? r
            : c == null
              ? void 0
              : c.maybeAttrString("native_flow_name"),
        g = c == null ? void 0 : c.maybeChild("quality_control"),
        h = g == null ? void 0 : g.maybeAttrString("decision_id"),
        y = g == null ? void 0 : g.maybeAttrString("source_type"),
        C = [];
      g == null ||
        g.forEachChildWithTag("decision_source", function (e) {
          var t = e.maybeAttrString("value");
          t != null && C.push(t);
        });
      var b = c == null ? void 0 : c.maybeAttrString("campaign_id");
      return babelHelpers.extends(
        {
          verifiedNameCert: l,
          verifiedLevel: s,
          verifiedNameSerial: u,
          privacyMode: d,
          nativeFlowName: f,
          campaignId: b,
        },
        c && {
          verifiedButtonsEnvelope: c.hasChild("buttons"),
          verifiedListEnvelope: c.hasChild("list"),
          verifiedHsmEnvelope: e.hasChild("hsm"),
          decisionId: h,
          sourceType: y,
          decisionSources: C.length > 0 ? C : void 0,
        },
      );
    }
    function T(e) {
      var t, n;
      return e == null
        ? !1
        : !!((t = e.author) != null && t.isBot()) &&
            !((n = e.chat) != null && n.isBot()) &&
            !o("WAWebCoexV2GatingUtils").isCoexV2RelayMessage(
              e.author,
              e.metaFrom,
            );
    }
    function D(e) {
      var t = e.maybeChild("hsm");
      if (t != null) {
        var n = t.maybeAttrString("tag"),
          r = t.maybeAttrString("category");
        if (n != null || r != null) return { tag: n, category: r };
      }
      return null;
    }
    function x(e) {
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
          ? $(i, l, o("WAWebWidFactory").createWid(s.receiver.toString()))
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
            $(i, l, o("WAWebWidFactory").createWid(p))
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
    function $(e, t, n) {
      return !(
        e &&
        t != null &&
        n != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(n)
      );
    }
    var P = new (r("WADeprecatedWapParser"))(
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
          r = S({ botInfo: k(e), encs: [], node: e });
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
    function N(e) {
      if (!o("WAWebMessagingGatingUtils").isReportingTokenReceivingEnabled())
        return null;
      var t = e.maybeChild("reporting");
      if (t == null) return null;
      var n = { stanzaTs: e.attrTime("t") },
        r = t.maybeChild("reporting_token"),
        a = t.maybeChild("reporting_tag");
      if (r != null) {
        var i;
        ((n.reportingToken = r.contentBytes()),
          (n.version = (i = r.maybeAttrInt("v")) != null ? i : void 0));
      }
      a != null && (n.reportingTag = a.contentBytes());
      var l = t.maybeAttrString("validation_policy");
      if (l != null) {
        var s = o(
          "WAWebReportingTokenConstants",
        ).ReportingTokenValidationPolicy.cast(l);
        s != null
          ? (n.validationPolicy = s)
          : o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "parseReportingTokenInfo: unknown validation_policy ",
                  "",
                ])),
              l,
            );
      }
      return n;
    }
    function M(e, t) {
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
        l = r.maybeAttrString("validation_policy"),
        s = null;
      if (l != null) {
        var u;
        ((s =
          (u = o(
            "WAWebReportingTokenConstants",
          ).ReportingTokenValidationPolicy.cast(l)) != null
            ? u
            : null),
          s == null &&
            o("WALogger").WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "parseGHSReportingMetadata: unknown validation_policy ",
                  "",
                ])),
              l,
            ));
      }
      var c = [];
      for (var d of a) {
        var m = d.attrString("id"),
          p = d.maybeChild("reporting_token"),
          _ = d.maybeChild("reporting_tag"),
          f = _ != null ? new Uint8Array(_.contentBytes()) : null,
          g = { stanzaId: m, reportingTag: f, sendTs: i, validationPolicy: s };
        if (p != null) {
          var h,
            C = (h = p.maybeAttrInt("v")) != null ? h : 1,
            b = p.contentBytes();
          c.push(
            babelHelpers.extends({}, g, {
              reportingToken: new Uint8Array(b),
              version: C,
            }),
          );
        } else
          c.push(
            babelHelpers.extends({}, g, {
              reportingToken: null,
              version: null,
            }),
          );
      }
      return c;
    }
    function w(e) {
      var t = e == null ? void 0 : e.maybeAttrString("sender_country_code");
      if (t != null)
        try {
          return o("WAWebAsISOCountryCode").asISOCountryCode(t);
        } catch (e) {
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.incomingMsgParser = b), (l.incomingMsgParserForAckOnly = P));
  },
  98,
);
