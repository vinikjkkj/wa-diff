__d(
  "WAWebHandleMsgParser",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAParsableWapNode",
    "WAWebAck",
    "WAWebAsISOCountryCode",
    "WAWebBackendJobs.flow",
    "WAWebBizCoexGatingUtils",
    "WAWebBotTypes",
    "WAWebCreateNackFromStanza",
    "WAWebCurrentUser",
    "WAWebGroupHistoryGating",
    "WAWebHandleMsgCommon",
    "WAWebHandleMsgTypes.flow",
    "WAWebHandlePaymentAmountUtils",
    "WAWebJidToWid",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebMessagingGatingUtils",
    "WAWebPaymentNotificationParser",
    "WAWebPaymentStatusUtils",
    "WAWebProtobufsWeb.pb",
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
      h = new (r("WADeprecatedWapParser"))("incomingMsgParser", function (e) {
        var t, n;
        (e.assertTag("message"),
          e.hasAttr("to") &&
            e.assertAttr(
              "to",
              o("WAWebUserPrefsMeUser")
                .getMeDevicePnOrThrow_DO_NOT_USE()
                .toJid(),
            ));
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
            };
          }),
          i = e.maybeChild("device-identity"),
          l = i ? i.contentBytes() : null,
          s = v(e),
          u = b(e, a),
          c = y(e, a, s, u),
          d = S(e, c),
          m = L(e),
          p = R(e),
          _ = I(e),
          f = T(e, a),
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
    function y(t, n, r, a) {
      var i,
        l = {
          externalId: t.attrString("id"),
          ts: t.attrTime("t"),
          edit:
            (i = t.maybeAttrInt("edit")) != null
              ? i
              : o("WAWebAck").EDIT_ATTR.NONE,
          isHsm: t.hasChild("hsm"),
          count: t.maybeAttrInt("count"),
          pushname: t.maybeAttrString("notify"),
          username: t.maybeAttrString("username"),
          displayName: t.maybeAttrString("display_name"),
          senderPn: t.hasAttr("sender_pn")
            ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("sender_pn"))
            : null,
          senderLid: t.hasAttr("sender_lid")
            ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("sender_lid"))
            : null,
          recipientLid: t.hasAttr("recipient_lid")
            ? o("WAWebJidToWid").lidUserJidToUserLid(
                t.attrLidUserJid("recipient_lid"),
              )
            : null,
          recipientPn: t.hasAttr("recipient_pn")
            ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("recipient_pn"))
            : null,
          peerRecipientPn: t.hasAttr("peer_recipient_pn")
            ? o("WAWebJidToWid").userJidToUserWid(
                t.attrUserJid("peer_recipient_pn"),
              )
            : null,
          peerRecipientLid: t.hasAttr("peer_recipient_lid")
            ? o("WAWebJidToWid").lidUserJidToUserLid(
                t.attrLidUserJid("peer_recipient_lid"),
              )
            : null,
          peerRecipientUsername: t.hasAttr("peer_recipient_username")
            ? t.attrString("peer_recipient_username")
            : null,
          recipientLatestLid: t.hasAttr("recipient_latest_lid")
            ? o("WAWebJidToWid").lidUserJidToUserLid(
                t.attrLidUserJid("recipient_latest_lid"),
              )
            : null,
          recipientUsername: t.hasAttr("recipient_username")
            ? t.attrString("recipient_username")
            : null,
          participant: t.hasAttr("participant")
            ? o("WAWebJidToWid").deviceJidToDeviceWid(
                t.attrDeviceJid("participant"),
              )
            : null,
          participantLid: t.hasAttr("participant_lid")
            ? o("WAWebJidToWid").lidUserJidToUserLid(
                t.attrLidUserJid("participant_lid"),
              )
            : null,
          participantPn: t.hasAttr("participant_pn")
            ? o("WAWebJidToWid").userJidToUserWid(
                t.attrUserJid("participant_pn"),
              )
            : null,
          participantUsername: t.maybeAttrString("participant_username"),
          category: t.maybeAttrEnum(
            "category",
            o("WAWebHandleMsgCommon").MSG_CATEGORY,
          ),
          offline: t.maybeAttrString("offline"),
          senderCountryCode: D(t.maybeChild("meta")),
        },
        p = o("WAWebJidToWid").jidWithTypeToWid(t.attrJidWithType("from"));
      p.isNewsletter() &&
        t.throw("unexpected `from` attribute with newsletter Jid");
      var _ = t.hasAttr("participant")
          ? o("WAWebJidToWid").deviceJidToDeviceWid(
              t.attrDeviceJid("participant"),
            )
          : null,
        f = t.hasAttr("recipient")
          ? o("WAWebJidToWid").userJidToUserWid(t.attrUserJid("recipient"))
          : null;
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var g = !!(
          _ != null &&
          _.isHosted() &&
          (p.isStatus() || p.isGroup() || p.isBroadcast())
        );
        if (g)
          throw new (o("WAParsableWapNode").XmppParsingFailure)(
            "incomingMsgParser",
            "" +
              o("WAWebCreateNackFromStanza").NackReason
                .InvalidHostedCompanionStanza,
          );
      }
      var h = n.every(function (e) {
          return e.e2eType !== o("WAWebBackendJobs.flow").CiphertextType.Skmsg;
        }),
        y = n.some(function (e) {
          return e.retryCount > 0;
        }),
        b = p.isGroup() || p.isBroadcast() ? _ : p;
      if (f != null && b != null && !o("WAWebUserPrefsMeUser").isMeAccount(b))
        return t.throw("Invalid recipient from non peer device");
      var v = C(t),
        S = a == null ? void 0 : a.targetChatJid;
      if (r && p.isPnBot() && S != null) {
        var R;
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          l,
          {
            chat: o("WAWebWidFactory").asUserWidOrThrow(
              (R = a == null ? void 0 : a.targetChatJidLid) != null ? R : S,
            ),
            author: p,
            botParticipant: p,
          },
        );
      } else if (r && p.isFbidBot() && S != null) {
        var L = o("WAWebWidFactory").asUserWidOrThrow(S);
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
          l,
          {
            chat: o(
              "WAWebLid1X1MigrationGating",
            ).Lid1X1MigrationUtils.isLidMigrated()
              ? L
              : o("WAWebLidMigrationUtils").toPnOrThrow(L),
            author: p,
            botParticipant: p,
          },
        );
      } else if (p.isUser()) {
        var E = p;
        if (f != null) {
          if (!o("WAWebUserPrefsMeUser").isMeAccount(p))
            return t.throw("recipient on non peer chat message");
          E = f;
        }
        var k = null,
          I = o(
            "WAWebSimpleSignalPNToFBIDMigration",
          ).getDeprecatedPnChatForFbidThread(E);
        return (
          I != null &&
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseMessageInfo: forwarding ",
                  " to ",
                  "",
                ])),
              E.toLogString(),
              I.toLogString(),
            ),
            f != null && (k = f),
            (E = I)),
          babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.CHAT },
            l,
            {
              chat: o("WAWebWidFactory").asUserWidOrThrow(E),
              author: p,
              originalBotRecipient: k,
            },
          )
        );
      } else if (p.isGroup()) {
        var T;
        if (_ == null) return t.throw("group message with no participant");
        var x =
          (T = t.maybeAttrEnum(
            "addressing_mode",
            o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE,
          )) != null
            ? T
            : o("WAWebHandleMsgCommon").STANZA_MSG_ADDRESSING_MODE.pn;
        try {
          !o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            _.isLid() &&
            l.participantPn == null &&
            l.displayName == null &&
            !o("WAWebUserPrefsMeUser").isMeAccount(_) &&
            (o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[lid group] missing participant_pn for Lid message. sw worker: ",
                  "",
                ])),
              o("WAWebUserPrefsNotifications")
                .getGlobalOfflineNotifications()
                .toString(),
            ),
            o("WAWebCurrentUser").isEmployee()
              ? (o("WALogger").ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[lid group] chat id: ",
                      " participant lid: ",
                      "",
                    ])),
                  p.toString(),
                  _.toString(),
                ),
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] missing group mapping in message parser for employee",
                      ])),
                  )
                  .sendLogs(
                    "[lid group] missing group mapping in message parser for employee",
                  ))
              : o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[lid group] missing group mapping in message parser",
                      ])),
                  )
                  .sendLogs(
                    "[lid group] missing group mapping in message parser",
                  ));
        } catch (e) {
          o("WALogger").ERROR(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[lid group] could not report missing lid in group message parser ",
                "",
              ])),
            e,
          );
        }
        return babelHelpers.extends(
          { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.GROUP },
          l,
          { chat: p, author: _, isDirect: h, addressingMode: x },
        );
      } else {
        if (p.isBroadcast() && !p.isStatus())
          return _ == null
            ? t.throw("broadcast message with no participant")
            : o("WAWebUserPrefsMeUser").isMeAccount(_)
              ? v == null && !y
                ? t.throw("peer broadcast message with no participants node")
                : babelHelpers.extends(
                    {
                      type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                        .PEER_BROADCAST,
                    },
                    l,
                    {
                      chat: p,
                      author: _,
                      isDirect: h,
                      bclParticipants: v != null ? v : [],
                      bclHashValidated: !1,
                    },
                  )
              : babelHelpers.extends(
                  {
                    type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                      .OTHER_BROADCAST,
                  },
                  l,
                  {
                    chat: p,
                    author: _,
                    isDirect: h,
                    ephSetting: t.maybeAttrString("eph_setting"),
                  },
                );
        if (p.isBroadcast() && p.isStatus()) {
          var $, P;
          if (_ == null) return t.throw("status message with no participant");
          var N =
            ($ =
              (P = t.maybeChild("meta")) == null
                ? void 0
                : P.maybeAttrString("status_setting")) != null
              ? $
              : void 0;
          if (o("WAWebUserPrefsMeUser").isMeAccount(_) && h) {
            if (v == null)
              return babelHelpers.extends(
                {
                  type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                    .DIRECT_PEER_STATUS,
                },
                l,
                { chat: p, author: _, isDirect: h, statusSetting: N },
              );
            var M = v.map(function (e) {
              return e.wid;
            });
            return babelHelpers.extends(
              {
                type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE
                  .DIRECT_PEER_STATUS,
              },
              l,
              {
                chat: p,
                author: _,
                directPeerStatusBclParticipants: M,
                bclHashValidated: !1,
                statusSetting: N,
              },
            );
          }
          return babelHelpers.extends(
            { type: o("WAWebHandleMsgTypes.flow").MESSAGE_TYPE.OTHER_STATUS },
            l,
            { chat: p, author: _, isDirect: h, statusSetting: N },
          );
        }
      }
      return t.throw("Unrecognized message type");
    }
    function C(e) {
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
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast] Received ",
                " recipient_latest_lid without a peer_recipient_lid nor peer_recipient_pn, this should not happen",
              ])),
            r,
          ),
        n
      );
    }
    function b(e, t) {
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
      return (
        m &&
          m.hasAttr(o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR) &&
          (f.bizSource = m.attrString(
            o("WAWebHandleMsgCommon").BIZ_SOURCE_ATTR,
          )),
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
          (f.isGroupStatus = !0),
        f
      );
    }
    function v(e) {
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
    function S(e, t) {
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
    function R(e) {
      var t = e.maybeChild("hsm");
      if (t != null) {
        var n = t.maybeAttrString("tag"),
          r = t.maybeAttrString("category");
        if (n != null || r != null) return { tag: n, category: r };
      }
      return null;
    }
    function L(e) {
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
          (E(a, i, o("WAWebWidFactory").createWid(l.receiver.toString()))
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
            E(a, i, o("WAWebWidFactory").createWid(m))
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
    function E(e, t, n) {
      return !(
        e &&
        t != null &&
        n != null &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(n)
      );
    }
    var k = new (r("WADeprecatedWapParser"))(
      "incomingMsgParserForAckOnly",
      function (e) {
        e.assertTag("message");
        var t = null;
        try {
          t = e.attrEnum("type", o("WAWebHandleMsgCommon").STANZA_MSG_TYPES);
        } catch (e) {
          o("WALogger").WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
          r = y(e, [], v(e));
        } catch (e) {
          o("WALogger").WARN(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
    function I(e) {
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
    function T(e, t) {
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
      var a = r.mapChildrenWithTag("message", function (e) {
        return e;
      });
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
    function D(e) {
      var t = e == null ? void 0 : e.maybeAttrString("sender_country_code");
      if (t != null)
        try {
          return o("WAWebAsISOCountryCode").asISOCountryCode(t);
        } catch (e) {
          o("WAWebCurrentUser").isEmployee() &&
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.incomingMsgParser = h), (l.incomingMsgParserForAckOnly = k));
  },
  98,
);
