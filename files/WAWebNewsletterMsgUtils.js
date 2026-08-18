__d(
  "WAWebNewsletterMsgUtils",
  [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebE2EProtoParser",
    "WAWebMsgAIProvenance",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNewsletterAdminProfilesSmaxUtils",
    "WAWebNewsletterFutureProofUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterMsgStanzaAdapters",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "decodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t;
      if (e != null) {
        if (e.name === "NewsletterViewsCountDeprecated")
          return e.value.viewsCountCount;
        var n = e.value.viewsCount;
        if (
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterViewsVPVDefinitionEnabled()
        ) {
          var r, a, i;
          return (r =
            (a = n.find(function (e) {
              return e.type === "views";
            })) == null
              ? void 0
              : a.count) != null
            ? r
            : (i = n.find(function (e) {
                  return e.type == null;
                })) == null
              ? void 0
              : i.count;
        }
        return (t = n.find(function (e) {
          return e.type == null;
        })) == null
          ? void 0
          : t.count;
      }
    }
    function u(t, n) {
      var a,
        i,
        l,
        s,
        u = t.msg,
        d = t.msgContext,
        p = new (r("WAWebMsgKey"))({
          remote: u.from,
          fromMe: u.isSender,
          id: u.id,
        });
      switch (u.type) {
        case "NewsletterReaction":
        case "NewsletterReactionRevoke":
          return o("WAWebNewsletterMsgStanzaAdapters").mapReactionMsgStanza(
            p,
            u,
            d,
          );
        case "NewsletterPollVote":
          return o("WAWebNewsletterMsgStanzaAdapters").mapPollVoteMsgStanza(
            p,
            u,
            d,
          );
      }
      var _ = m(p, u);
      if (u.type === "NewsletterRevoke")
        return o("WAWebNewsletterMsgStanzaAdapters").mapRevokeMsgStanza({
          msgKey: p,
          msg: u,
          msgContext: d,
          baseMsgData: _,
          parsingContext: n,
        });
      var f = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          u.payload,
        ),
        g = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: f,
          message: _,
          msgContext: n,
        }),
        h = c(
          babelHelpers.extends({}, g, {
            isNewMsg: d.isNewMsg,
            viewCount: (a = d.viewCount) != null ? a : void 0,
            forwardsCount: (i = d.forwardsCount) != null ? i : void 0,
            questionResponsesCount:
              (l = d.questionResponsesCount) != null ? l : 0,
            hasReaction: !!d.hasReaction,
            latestEditSenderTimestampMs: d.latestEditSenderTimestampMs,
            lastUpdateFromServerTs:
              (s = d.lastUpdateFromServerTs) != null ? s : void 0,
            latestEditMsgKey: d.isEdited === !0 ? p : void 0,
            serverId: u.serverId,
          }),
        );
      if (
        d.isWamoSub != null &&
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled()
      ) {
        var y;
        h.isWamoSub = (y = d.isWamoSub) != null ? y : void 0;
      }
      u.newsletterAdminProfile != null &&
        (h.newsletterAdminProfile = u.newsletterAdminProfile);
      var C = d.hasPaidPartnershipLabel;
      (C != null &&
        o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() &&
        (h.hasPaidPartnershipLabel = C),
        d.hasSelfDisclosedAiContent === !0 &&
          o("WAWebNewsletterGatingUtils").isChannelSGIReceiverEnabled() &&
          (h.aiProvenance = o("WAWebMsgAIProvenance").withSelfDisclosed(
            h.aiProvenance,
          )),
        d.isNewsletterStatus === !0 && (h.isNewsletterStatus = !0));
      var b = o("WAWebNewsletterFutureProofUtils").isMsgSupported(h),
        v = b.reason,
        S = b.supported;
      switch (
        (S ||
          ((h.type = o("WAWebMsgType").MSG_TYPE.UNKNOWN),
          (h.subtype = v),
          (h.kind = o("WAWebMsgType").MsgKind.Unknown),
          (h.futureproofType = g.type),
          (h.futureproofSubtype = g.subtype),
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter] unsupported msg type=",
                  " sub=",
                  "",
                ])),
              g.type,
              g.subtype,
            )
            .sendLogs("unsupported-newsletter-message", { sampling: 0.1 })),
        u.type)
      ) {
        case "NewsletterEdit":
          return o("WAWebNewsletterMsgStanzaAdapters").mapEditMsgStanza(
            h,
            n,
            d,
          );
        case "NewsletterPollCreation":
        case "NewsletterPollResultSnapshot":
        case "NewsletterText":
        case "NewsletterMedia":
          return h;
        case "NewsletterWAMOEmpty":
          return babelHelpers.extends({}, h, {
            isWamoSub: !0,
            viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN,
          });
        default:
          throw (u.type, r("err")("unreachable code"));
      }
    }
    function c(e) {
      return (
        (e.streamingSidecar = null),
        (e.mediaKey = null),
        (e.mediaKeyTimestamp = null),
        e
      );
    }
    function d(e) {
      var t,
        n,
        r,
        a = e.from,
        i = e.hasReaction,
        l = i === void 0 ? !1 : i,
        c = e.lastUpdateFromServerTs,
        d = e.message,
        m = d.newsletterMessageHistoryContent,
        p = d.id,
        _ = d.serverId,
        f = d.t;
      if (m == null || p == null || f == null) return null;
      var g = d.isSender === "true",
        h = {
          id: p,
          from: a,
          isSender: g,
          to: g ? a : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
          t: f,
          serverId: _,
          offline: null,
          newsletterAdminProfile: o(
            "WAWebNewsletterAdminProfilesSmaxUtils",
          ).mapAdminProfileInfoFromAdminProfileMixin(d.adminProfileMetaMixin),
        },
        y =
          (t = d.newsletterMessageOriginalTimestampMixin) == null
            ? void 0
            : t.metaOriginalMsgT,
        C = babelHelpers.extends(
          {
            hasReaction: l,
            lastUpdateFromServerTs: c,
            viewCount: s(d.newsletterViewsCountViewsOrDeprecatedMixinGroup),
            questionResponsesCount:
              (n = d.newsletterResponsesCountMixin) == null
                ? void 0
                : n.responsesCountCount,
            forwardsCount:
              (r = d.newsletterForwardsCountMixin) == null
                ? void 0
                : r.forwardsCountCount,
            isEdited: m.name === "NewsletterEdit",
            metaOriginalMsgT: y,
          },
          d.hasPaidPartnershipContentMixin != null && {
            hasPaidPartnershipLabel: d.hasPaidPartnershipContentMixin,
          },
        );
      if (
        (d.hasNewsletterAIContentMetaMixin != null &&
          (C.hasSelfDisclosedAiContent = d.hasNewsletterAIContentMetaMixin),
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled())
      ) {
        var b;
        C.isWamoSub =
          ((b = d.newsletterMessageHistoryContent) == null ||
          (b = b.value.wAMOSubMixin) == null
            ? void 0
            : b.metaIsWamoSub) === "true";
      }
      var v = "history";
      switch (m.name) {
        case "NewsletterEdit": {
          var S,
            R =
              (S = d.newsletterMessageLastEditTimestampMixin) == null
                ? void 0
                : S.metaMsgEditT,
            L = R != null ? o("WATimeUtils").castToMillisTime(R) : void 0,
            E = y != null ? y : f,
            k = m.value.newsletterQuestionReplyOrTextOrMediaMixinGroup;
          return (
            k.name === "NewsletterQuestionReply" &&
              (k = k.value.newsletterTextOrMediaMixinGroup),
            u(
              {
                msg: babelHelpers.extends({}, h, {
                  type: m.name,
                  t: E,
                  payload: k.value.plaintextPayloadMixin.elementValue,
                  msgEditT: R,
                  msgOriginalT: f,
                }),
                msgContext: babelHelpers.extends({}, C, {
                  latestEditSenderTimestampMs: L,
                }),
              },
              v,
            )
          );
        }
        case "NewsletterQuestion":
        case "NewsletterQuestionReply": {
          var I =
            m.value.newsletterTextOrMediaMixinGroup.value.plaintextPayloadMixin
              .elementValue;
          return m.value.newsletterTextOrMediaMixinGroup.name ===
            "NewsletterMedia"
            ? u(
                {
                  msg: babelHelpers.extends({}, h, {
                    payload: I,
                    type: "NewsletterMedia",
                  }),
                  msgContext: C,
                },
                v,
              )
            : u(
                {
                  msg: babelHelpers.extends({}, h, {
                    payload: I,
                    type: "NewsletterText",
                  }),
                  msgContext: C,
                },
                v,
              );
        }
        case "NewsletterText":
          return u(
            {
              msg: babelHelpers.extends({}, h, {
                payload: m.value.plaintextPayloadMixin.elementValue,
                type: "NewsletterText",
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterQuizCreation":
        case "NewsletterPollCreation":
          return u(
            {
              msg: babelHelpers.extends({}, h, {
                payload: m.value.plaintextPayloadMixin.elementValue,
                type: "NewsletterPollCreation",
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterPollResultSnapshot":
          return u(
            {
              msg: babelHelpers.extends({}, h, {
                payload: m.value.plaintextPayloadMixin.elementValue,
                type: m.name,
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterMedia":
          return u(
            {
              msg: babelHelpers.extends({}, h, {
                payload: m.value.plaintextPayloadMixin.elementValue,
                type: m.name,
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterRevoke":
          return u(
            {
              msg: babelHelpers.extends({}, h, { type: m.name }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterWAMOEmpty":
          return u(
            {
              msg: babelHelpers.extends({}, h, { type: m.name }),
              msgContext: C,
            },
            v,
          );
        default:
          return (m.name, null);
      }
    }
    function m(e, t) {
      return {
        ack: o("WAAckLevel").ACK.SENT,
        from: t.from,
        t: t.t,
        to: t.to,
        id: e,
        type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        count: null,
        invis: !1,
      };
    }
    ((l.getNewsletterViewCount = s),
      (l.mapMsgStanzaToMsgData = u),
      (l.cleanupMediaFields = c),
      (l.mapNewsletterMsgToMsgData = d));
  },
  98,
);
