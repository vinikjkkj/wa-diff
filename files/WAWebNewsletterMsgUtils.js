__d(
  "WAWebNewsletterMsgUtils",
  [
    "WAAckLevel",
    "WALogger",
    "WATimeUtils",
    "WAWebE2EProtoParser",
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
    function s(t, n) {
      var a,
        i,
        l,
        s,
        c = t.msg,
        m = t.msgContext,
        p = new (r("WAWebMsgKey"))({
          remote: c.from,
          fromMe: c.isSender,
          id: c.id,
        });
      switch (c.type) {
        case "NewsletterReaction":
        case "NewsletterReactionRevoke":
          return o("WAWebNewsletterMsgStanzaAdapters").mapReactionMsgStanza(
            p,
            c,
            m,
          );
        case "NewsletterPollVote":
          return o("WAWebNewsletterMsgStanzaAdapters").mapPollVoteMsgStanza(
            p,
            c,
            m,
          );
      }
      var _ = d(p, c);
      if (c.type === "NewsletterRevoke")
        return o("WAWebNewsletterMsgStanzaAdapters").mapRevokeMsgStanza({
          msgKey: p,
          msg: c,
          msgContext: m,
          baseMsgData: _,
          parsingContext: n,
        });
      var f = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSpec,
          c.payload,
        ),
        g = o("WAWebE2EProtoParser").parseMsgProto({
          messageProtobuf: f,
          message: _,
          msgContext: n,
        }),
        h = u(
          babelHelpers.extends({}, g, {
            isNewMsg: m.isNewMsg,
            viewCount: (a = m.viewCount) != null ? a : void 0,
            forwardsCount: (i = m.forwardsCount) != null ? i : void 0,
            questionResponsesCount:
              (l = m.questionResponsesCount) != null ? l : 0,
            hasReaction: !!m.hasReaction,
            latestEditSenderTimestampMs: m.latestEditSenderTimestampMs,
            lastUpdateFromServerTs:
              (s = m.lastUpdateFromServerTs) != null ? s : void 0,
            latestEditMsgKey: m.isEdited === !0 ? p : void 0,
            serverId: c.serverId,
          }),
        );
      if (
        m.isWamoSub != null &&
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled()
      ) {
        var y;
        h.isWamoSub = (y = m.isWamoSub) != null ? y : void 0;
      }
      c.newsletterAdminProfile != null &&
        (h.newsletterAdminProfile = c.newsletterAdminProfile);
      var C = m.hasPaidPartnershipLabel;
      C != null &&
        o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() &&
        (h.hasPaidPartnershipLabel = C);
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
        c.type)
      ) {
        case "NewsletterEdit":
          return o("WAWebNewsletterMsgStanzaAdapters").mapEditMsgStanza(
            h,
            n,
            m,
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
          throw (c.type, r("err")("unreachable code"));
      }
    }
    function u(e) {
      return (
        (e.streamingSidecar = null),
        (e.mediaKey = null),
        (e.mediaKeyTimestamp = null),
        e
      );
    }
    function c(e, t, n, r) {
      var a, i, l, u, c;
      n === void 0 && (n = !1);
      var d = e.newsletterMessageHistoryContent,
        m = e.id,
        p = e.serverId,
        _ = e.t;
      if (d == null || m == null || _ == null) return null;
      var f = e.isSender === "true",
        g = {
          id: m,
          from: t,
          isSender: f,
          to: f ? t : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          t: _,
          serverId: p,
          offline: null,
          newsletterAdminProfile: o(
            "WAWebNewsletterAdminProfilesSmaxUtils",
          ).mapAdminProfileInfoFromAdminProfileMixin(e.adminProfileMetaMixin),
        },
        h =
          (a = e.newsletterMessageOriginalTimestampMixin) == null
            ? void 0
            : a.metaOriginalMsgT,
        y = e.newsletterViewsCountViewsOrDeprecatedMixinGroup,
        C = babelHelpers.extends(
          {
            hasReaction: n,
            lastUpdateFromServerTs: r,
            viewCount:
              (y == null ? void 0 : y.name) === "NewsletterViewsCountViews"
                ? (i = y.value.viewsCount[0]) == null
                  ? void 0
                  : i.count
                : y == null || (l = y.value) == null
                  ? void 0
                  : l.viewsCountCount,
            questionResponsesCount:
              (u = e.newsletterResponsesCountMixin) == null
                ? void 0
                : u.responsesCountCount,
            forwardsCount:
              (c = e.newsletterForwardsCountMixin) == null
                ? void 0
                : c.forwardsCountCount,
            isEdited: d.name === "NewsletterEdit",
            metaOriginalMsgT: h,
          },
          e.hasPaidPartnershipContentMixin != null && {
            hasPaidPartnershipLabel: e.hasPaidPartnershipContentMixin,
          },
        );
      if (
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled()
      ) {
        var b;
        C.isWamoSub =
          ((b = e.newsletterMessageHistoryContent) == null ||
          (b = b.value.wAMOSubMixin) == null
            ? void 0
            : b.metaIsWamoSub) === "true";
      }
      var v = "history";
      switch (d.name) {
        case "NewsletterEdit": {
          var S,
            R =
              (S = e.newsletterMessageLastEditTimestampMixin) == null
                ? void 0
                : S.metaMsgEditT,
            L = R != null ? o("WATimeUtils").castToMillisTime(R) : void 0,
            E = h != null ? h : _,
            k = d.value.newsletterQuestionReplyOrTextOrMediaMixinGroup;
          return (
            k.name === "NewsletterQuestionReply" &&
              (k = k.value.newsletterTextOrMediaMixinGroup),
            s(
              {
                msg: babelHelpers.extends({}, g, {
                  type: d.name,
                  t: E,
                  payload: k.value.plaintextPayloadMixin.elementValue,
                  msgEditT: R,
                  msgOriginalT: _,
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
            d.value.newsletterTextOrMediaMixinGroup.value.plaintextPayloadMixin
              .elementValue;
          return d.value.newsletterTextOrMediaMixinGroup.name ===
            "NewsletterMedia"
            ? s(
                {
                  msg: babelHelpers.extends({}, g, {
                    payload: I,
                    type: "NewsletterMedia",
                  }),
                  msgContext: C,
                },
                v,
              )
            : s(
                {
                  msg: babelHelpers.extends({}, g, {
                    payload: I,
                    type: "NewsletterText",
                  }),
                  msgContext: C,
                },
                v,
              );
        }
        case "NewsletterText":
          return s(
            {
              msg: babelHelpers.extends({}, g, {
                payload: d.value.plaintextPayloadMixin.elementValue,
                type: "NewsletterText",
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterQuizCreation":
        case "NewsletterPollCreation":
          return s(
            {
              msg: babelHelpers.extends({}, g, {
                payload: d.value.plaintextPayloadMixin.elementValue,
                type: "NewsletterPollCreation",
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterPollResultSnapshot":
          return s(
            {
              msg: babelHelpers.extends({}, g, {
                payload: d.value.plaintextPayloadMixin.elementValue,
                type: d.name,
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterMedia":
          return s(
            {
              msg: babelHelpers.extends({}, g, {
                payload: d.value.plaintextPayloadMixin.elementValue,
                type: d.name,
              }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterRevoke":
          return s(
            {
              msg: babelHelpers.extends({}, g, { type: d.name }),
              msgContext: C,
            },
            v,
          );
        case "NewsletterWAMOEmpty":
          return s(
            {
              msg: babelHelpers.extends({}, g, { type: d.name }),
              msgContext: C,
            },
            v,
          );
        default:
          return (d.name, null);
      }
    }
    function d(e, t) {
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
    ((l.mapMsgStanzaToMsgData = s),
      (l.cleanupMediaFields = u),
      (l.mapNewsletterMsgToMsgData = c));
  },
  98,
);
