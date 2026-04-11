__d(
  "WAWebNewsletterMsgParser",
  [
    "WASmaxMessageDeliverNewsletterRPC",
    "WASmaxParsingFailure",
    "WAWebJidToWid",
    "WAWebNewsletterAdminProfilesSmaxUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebReactionsBEUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = o("WASmaxMessageDeliverNewsletterRPC").receiveNewsletterRPC(e),
        a = r.makeNewsletterResponseSuccess,
        i = r.parsedRequest,
        l = {
          id: i.id,
          t: i.t,
          isSender: i.isSender === "true",
          serverId: i.serverId,
          offline: (t = i.offlineMixin) == null ? void 0 : t.offline,
          from: o("WAWebJidToWid").jidWithTypeToWid({
            jidType: "newsletter",
            newsletterJid: i.from,
          }),
          to: o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
          newsletterAdminProfile: o(
            "WAWebNewsletterAdminProfilesSmaxUtils",
          ).mapAdminProfileInfoFromAdminProfileMixin(i.adminProfileMetaMixin),
        },
        s =
          (n = i.newsletterMessageFanoutContent.value.wAMOSubMixin) == null
            ? void 0
            : n.metaIsWamoSub;
      s != null &&
        o("WAWebNewsletterGatingUtils").isWamoSubMessagesProcessingEnabled() &&
        (l.isWamoSub = s === "true");
      var u = i.hasPaidPartnershipContentMixin;
      return (
        o("WAWebNewsletterGatingUtils").isChannelDSA26ReceiverEnabled() &&
          (l.hasPaidPartnershipLabel = u),
        { ack: a(), msg: d(l, i) }
      );
    }
    function s(e) {
      return e.reactionCode;
    }
    function u(e) {
      return e.votesVote.map(function (e) {
        var t = e.elementValue;
        return t;
      });
    }
    function c(e) {
      return e.plaintextPayloadMixin.elementValue;
    }
    function d(e, t) {
      var n = t.newsletterMessageFanoutContent;
      switch (n.name) {
        case "NewsletterPollVote":
          return babelHelpers.extends({}, e, {
            type: "NewsletterPollVote",
            pollVote: u(n.value),
          });
        case "NewsletterReaction":
          return babelHelpers.extends({}, e, {
            type: "NewsletterReaction",
            reactionCode: s(n.value),
          });
        case "NewsletterReactionRevoke":
          return babelHelpers.extends({}, e, {
            type: "NewsletterReactionRevoke",
            reactionCode: o("WAWebReactionsBEUtils").REVOKED_REACTION_TEXT,
          });
        case "NewsletterRevoke":
          return babelHelpers.extends({}, e, { type: "NewsletterRevoke" });
        case "NewsletterMedia":
          return babelHelpers.extends({}, e, {
            type: n.name,
            payload: c(n.value),
          });
        case "NewsletterQuestion":
        case "NewsletterQuestionReply": {
          var r = babelHelpers.extends({}, e, {
            payload: c(n.value.newsletterTextOrMediaMixinGroup.value),
          });
          return n.value.newsletterTextOrMediaMixinGroup.name ===
            "NewsletterText"
            ? babelHelpers.extends({}, r, { type: "NewsletterText" })
            : babelHelpers.extends({}, r, { type: "NewsletterMedia" });
        }
        case "NewsletterQuestionResponse":
        case "NewsletterText":
          return babelHelpers.extends({}, e, {
            type: "NewsletterText",
            payload: c(n.value),
          });
        case "NewsletterPollCreation":
          return babelHelpers.extends({}, e, {
            type: "NewsletterPollCreation",
            payload: c(n.value),
          });
        case "NewsletterEdit": {
          var a,
            i,
            l = n.value.newsletterQuestionReplyOrTextOrMediaMixinGroup,
            d;
          switch (l.name) {
            case "NewsletterQuestionReply":
              d = c(l.value.newsletterTextOrMediaMixinGroup.value);
              break;
            case "NewsletterText":
            case "NewsletterMedia":
              d = c(l.value);
              break;
            default:
              throw (
                l.name,
                new (o("WASmaxParsingFailure").SmaxParsingFailure)(
                  "unrecognized-newsletter-edit-type",
                )
              );
          }
          return babelHelpers.extends({}, e, {
            type: "NewsletterEdit",
            payload: d,
            msgEditT:
              (a = t.newsletterMessageLastEditTimestampMixin) == null
                ? void 0
                : a.metaMsgEditT,
            msgOriginalT:
              (i = t.newsletterMessageOriginalTimestampMixin) == null
                ? void 0
                : i.metaOriginalMsgT,
          });
        }
        case "NewsletterPollResultSnapshot":
          return babelHelpers.extends({}, e, {
            type: "NewsletterPollResultSnapshot",
            payload: c(n.value),
          });
        case "NewsletterWAMOEmpty":
          return babelHelpers.extends({}, e, { type: "NewsletterWAMOEmpty" });
        case "NewsletterQuizCreation":
          return babelHelpers.extends({}, e, {
            type: "NewsletterPollCreation",
            payload: c(n.value),
          });
        default:
          throw (
            n.name,
            new (o("WASmaxParsingFailure").SmaxParsingFailure)(
              "unrecognized-newsletter-message-type",
            )
          );
      }
    }
    l.default = e;
  },
  98,
);
