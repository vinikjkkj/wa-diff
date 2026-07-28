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
          )));
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
    function d(e, t, n, r) {
      var a, i, l;
      n === void 0 && (n = !1);
      var c = e.newsletterMessageHistoryContent,
        d = e.id,
        m = e.serverId,
        p = e.t;
      if (c == null || d == null || p == null) return null;
      var _ = e.isSender === "true",
        f = {
          id: d,
          from: t,
          isSender: _,
          to: _ ? t : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
          t: p,
          serverId: m,
          offline: null,
          newsletterAdminProfile: o(
            "WAWebNewsletterAdminProfilesSmaxUtils",
          ).mapAdminProfileInfoFromAdminProfileMixin(e.adminProfileMetaMixin),
        },
        g =
          (a = e.newsletterMessageOriginalTimestampMixin) == null
            ? void 0
            : a.metaOriginalMsgT,
        h = babelHelpers.extends(
          {
            hasReaction: n,
            lastUpdateFromServerTs: r,
            viewCount: s(e.newsletterViewsCountViewsOrDeprecatedMixinGroup),
            questionResponsesCount:
              (i = e.newsletterResponsesCountMixin) == null
                ? void 0
                : i.responsesCountCount,
            forwardsCount:
              (l = e.newsletterForwardsCountMixin) == null
                ? void 0
                : l.forwardsCountCount,
            isEdited: c.name === "NewsletterEdit",
            metaOriginalMsgT: g,
          },
          e.hasPaidPartnershipContentMixin != null && {
            hasPaidPartnershipLabel: e.hasPaidPartnershipContentMixin,
          },
        );
      if (
        (e.hasNewsletterAIContentMetaMixin != null &&
          (h.hasSelfDisclosedAiContent = e.hasNewsletterAIContentMetaMixin),
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled())
      ) {
        var y;
        h.isWamoSub =
          ((y = e.newsletterMessageHistoryContent) == null ||
          (y = y.value.wAMOSubMixin) == null
            ? void 0
            : y.metaIsWamoSub) === "true";
      }
      var C = "history";
      switch (c.name) {
        case "NewsletterEdit": {
          var b,
            v =
              (b = e.newsletterMessageLastEditTimestampMixin) == null
                ? void 0
                : b.metaMsgEditT,
            S = v != null ? o("WATimeUtils").castToMillisTime(v) : void 0,
            R = g != null ? g : p,
            L = c.value.newsletterQuestionReplyOrTextOrMediaMixinGroup;
          return (
            L.name === "NewsletterQuestionReply" &&
              (L = L.value.newsletterTextOrMediaMixinGroup),
            u(
              {
                msg: babelHelpers.extends({}, f, {
                  type: c.name,
                  t: R,
                  payload: L.value.plaintextPayloadMixin.elementValue,
                  msgEditT: v,
                  msgOriginalT: p,
                }),
                msgContext: babelHelpers.extends({}, h, {
                  latestEditSenderTimestampMs: S,
                }),
              },
              C,
            )
          );
        }
        case "NewsletterQuestion":
        case "NewsletterQuestionReply": {
          var E =
            c.value.newsletterTextOrMediaMixinGroup.value.plaintextPayloadMixin
              .elementValue;
          return c.value.newsletterTextOrMediaMixinGroup.name ===
            "NewsletterMedia"
            ? u(
                {
                  msg: babelHelpers.extends({}, f, {
                    payload: E,
                    type: "NewsletterMedia",
                  }),
                  msgContext: h,
                },
                C,
              )
            : u(
                {
                  msg: babelHelpers.extends({}, f, {
                    payload: E,
                    type: "NewsletterText",
                  }),
                  msgContext: h,
                },
                C,
              );
        }
        case "NewsletterText":
          return u(
            {
              msg: babelHelpers.extends({}, f, {
                payload: c.value.plaintextPayloadMixin.elementValue,
                type: "NewsletterText",
              }),
              msgContext: h,
            },
            C,
          );
        case "NewsletterQuizCreation":
        case "NewsletterPollCreation":
          return u(
            {
              msg: babelHelpers.extends({}, f, {
                payload: c.value.plaintextPayloadMixin.elementValue,
                type: "NewsletterPollCreation",
              }),
              msgContext: h,
            },
            C,
          );
        case "NewsletterPollResultSnapshot":
          return u(
            {
              msg: babelHelpers.extends({}, f, {
                payload: c.value.plaintextPayloadMixin.elementValue,
                type: c.name,
              }),
              msgContext: h,
            },
            C,
          );
        case "NewsletterMedia":
          return u(
            {
              msg: babelHelpers.extends({}, f, {
                payload: c.value.plaintextPayloadMixin.elementValue,
                type: c.name,
              }),
              msgContext: h,
            },
            C,
          );
        case "NewsletterRevoke":
          return u(
            {
              msg: babelHelpers.extends({}, f, { type: c.name }),
              msgContext: h,
            },
            C,
          );
        case "NewsletterWAMOEmpty":
          return u(
            {
              msg: babelHelpers.extends({}, f, { type: c.name }),
              msgContext: h,
            },
            C,
          );
        default:
          return (c.name, null);
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
