__d(
  "WAWebNewsletterStatusUtils",
  [
    "WAAckLevel",
    "WALogger",
    "WAWebE2EProtoParser",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgUtils",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      var r = d(e, t),
        a = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          n,
        ),
        i = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: a,
          message: r,
          msgContext: "relay",
        });
      return o("WAWebNewsletterMsgUtils").cleanupMediaFields(
        babelHelpers.extends({}, i, {
          serverId: e.serverId,
          isNewMsg: !0,
          latestEditMsgKey: void 0,
        }),
      );
    }
    function u(e, t) {
      var n = d(e, t),
        a = e.isSender === "true",
        i = new (r("WAWebMsgKey"))({ remote: t, fromMe: a, id: e.id });
      return babelHelpers.extends({}, n, {
        serverId: e.serverId,
        isNewMsg: !0,
        id: new (r("WAWebMsgKey"))({
          remote: t,
          fromMe: a,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        }),
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        kind: o("WAWebMsgType").MsgKind.ProtocolRevoke,
        subtype: "admin_revoke",
        protocolMessageKey: i,
        viewMode: o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE,
      });
    }
    function c(t, n) {
      var r = t.statusNewsletterContentMixin;
      if (r == null) return null;
      var a = r.newsletterStatusContentTypeMixins;
      switch (a.name) {
        case "StatusNewsletterReaction":
        case "StatusNewsletterReactionRevoke":
        case "StatusNewsletterRevoke":
          return null;
        case "StatusNewsletterText":
        case "StatusNewsletterMedia": {
          if (t.id == null || t.t == null) return null;
          var i = a.value.plaintextNewsletterPlaintextPayloadMixin.elementValue,
            l = {
              id: t.id,
              serverId: t.serverId,
              t: t.t,
              isSender: t.isSender === "true",
              from: n,
              to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              offline: null,
              newsletterAdminProfile: null,
              payload: i,
            },
            s =
              a.name === "StatusNewsletterText"
                ? babelHelpers.extends({}, l, { type: "NewsletterText" })
                : babelHelpers.extends({}, l, { type: "NewsletterMedia" }),
            u = babelHelpers.extends(
              { isNewMsg: !1 },
              o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled()
                ? {
                    hasPaidPartnershipLabel:
                      t.hasStatusPaidPartnershipContentMixin,
                  }
                : void 0,
            );
          return o("WAWebNewsletterMsgUtils").mapMsgStanzaToMsgData(
            { msg: s, msgContext: u },
            "relay",
          );
        }
        default:
          return (
            a.name,
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[newsletter][status] Unhandled status content type: ",
                    "",
                  ])),
                a.name,
              )
              .sendLogs("newsletter-status-unhandled-type"),
            null
          );
      }
    }
    function d(e, t) {
      var n = e.isSender === "true",
        a = new (r("WAWebMsgKey"))({ remote: t, fromMe: n, id: e.id });
      return {
        ack: o("WAAckLevel").ACK.SENT,
        from: t,
        t: e.t,
        to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
        id: a,
        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        count: null,
        invis: !1,
      };
    }
    ((l.mapStatusStanzaToMsgData = s),
      (l.mapStatusRevokeToMsgData = u),
      (l.mapStatusEntryToMsgData = c));
  },
  98,
);
