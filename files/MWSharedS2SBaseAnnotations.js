__d(
  "MWSharedS2SBaseAnnotations",
  [
    "I64",
    "LSMessagingThreadAttributionType",
    "LSMessagingThreadTypeUtil",
    "MAWAppVersion",
    "MWHasLinksUtil",
    "MWMsgActionLogUtils",
    "MWMsgMediaTypeLogUtils",
    "MWPreloadableQueries",
    "MWVersion",
    "MultipleTabsLogger",
    "ReQL",
    "gkx",
    "isStringNullOrEmpty",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "hasAttachment",
        "hasAttachmentReaction",
        "hasEphemeralSetting",
        "hasGroupInvite",
        "hasReaction",
        "hasReply",
        "hasSenderKeyDistribution",
        "hasStoryReply",
        "hasText",
        "isBump",
        "isEdit",
        "isForward",
        "isRetry",
        "isUnsend",
      ],
      s = ["db", "threadKey"],
      u;
    async function c(t, n, a, i, l) {
      var s = t.hasAttachment,
        c = s === void 0 ? !1 : s,
        m = t.hasAttachmentReaction,
        p = m === void 0 ? !1 : m,
        _ = t.hasEphemeralSetting,
        f = t.hasGroupInvite,
        g = t.hasReaction,
        h = t.hasReply,
        y = t.hasSenderKeyDistribution,
        C = t.hasStoryReply,
        b = t.hasText,
        v = b === void 0 ? !1 : b,
        S = t.isBump,
        R = t.isEdit,
        L = t.isForward,
        E = t.isRetry,
        k = t.isUnsend,
        I = babelHelpers.objectWithoutPropertiesLoose(t, e);
      l === void 0 && (l = !1);
      var T = o("MWMsgActionLogUtils").getActionType({
          hasEphemeralSetting: _,
          hasGroupInvite: f,
          hasReaction: g,
          hasReply: h,
          hasSenderKeyDistribution: y,
          hasStoryReply: C,
          isBump: S,
          isEdit: R,
          isForward: L,
          isRetry: E,
          isUnsend: k,
        }),
        D = o("MWMsgMediaTypeLogUtils").getAttachmentType(I),
        x = i != null ? parseInt(i, 10) : void 0;
      return (
        isNaN(Number(x)) && (x = void 0),
        {
          bool: {
            has_attachment: c,
            has_sticker: I.hasSticker,
            has_text: v,
            is_attachment_reaction: p,
            is_attachments_grouped: I.isAttachmentsGrouped,
            is_pwa: l,
            is_tlc_public_user: r("gkx")("24028"),
            use_maw_shared_worker: o(
              "shouldUseMAWSharedWorker",
            ).shouldUseMAWSharedWorker(),
          },
          int: {
            number_of_attachments: I.numberOfAttachments,
            number_of_grouped_attachments: I.numberOfGroupedAttachments,
            offline_threading_id: x,
          },
          string: {
            action_type: T,
            attachment_type: D,
            entrypoint: d(n),
            message_type:
              v && (!D || D === o("MWMsgMediaTypeLogUtils").AttachmentType.None)
                ? "text"
                : "non-text",
            multipleTabs:
              await o("MultipleTabsLogger").getMultipleTabsAnnotation(),
            mw_version: (u || (u = o("I64"))).to_string(o("MWVersion").v2),
            offline_threading_id: i,
            root_component: a,
            wa_version: o("MAWAppVersion").getVersionNumber(),
          },
        }
      );
    }
    function d(e) {
      var t;
      return (t = Object.keys(r("LSMessagingThreadAttributionType")).find(
        function (t) {
          return r("LSMessagingThreadAttributionType")[t] === e;
        },
      )) != null
        ? t
        : "UNKNOWN";
    }
    async function m(e) {
      var t = e.db,
        n = e.threadKey,
        r = babelHelpers.objectWithoutPropertiesLoose(e, s),
        a =
          t != null && n != null
            ? await o("ReQL").toArrayAsync(
                o("MWPreloadableQueries").getMediaStagingQuery(t, n),
              )
            : [];
      return {
        mediaStagings: a,
        messageTypeParams: p(babelHelpers.extends({}, r, { mediaStagings: a })),
      };
    }
    function p(e) {
      var t = e.externalAttachmentUrl,
        n = e.hotEmojiSize,
        a = e.isAttachmentReaction,
        i = e.isBump,
        l = e.isEdit,
        s = e.isEphemeralSetting,
        u = e.isForward,
        c = e.isGroupInvite,
        d = e.isReaction,
        m = e.isRetry,
        p = e.isSenderKeyDistribution,
        _ = e.isUnsend,
        f = e.mediaGroupInfo,
        g = e.mediaStagings,
        h = e.messageText,
        y = e.numberOfAttachments,
        C = e.reply,
        b = e.sentFromShareSheet,
        v = e.sticker,
        S = e.threadType,
        R = e.voiceClip,
        L = !r("isStringNullOrEmpty")(h),
        E = o("MWHasLinksUtil").getHasLinks(h),
        k = (y != null ? y : 0) > 0,
        I = R != null;
      (I || t != null) && (k = !0);
      var T = !1,
        D = !1,
        x = !1,
        $ = y,
        P = 0,
        N;
      if (g != null && g.length > 0) {
        k = !0;
        for (var M of g) {
          var w = M.mimeType;
          (w.indexOf("image") !== -1 && (T = !0),
            w.indexOf("video") !== -1 && (D = !0),
            w.indexOf("application") !== -1 && (x = !0));
        }
        if (T && S != null) {
          var A = o("LSMessagingThreadTypeUtil").isArmadilloSecure(S);
          N = !A;
        }
        $ = g.length;
      }
      f != null && ((N = !0), (P = f.messagesAndAttachments.length));
      var F = n != null,
        O = C != null,
        B = C != null,
        W = v != null && !F,
        q = !W && t != null,
        U = b === !0,
        V = a === !0,
        H = d === !0,
        G = c === !0,
        z = s === !0,
        j = p === !0;
      return {
        hasAttachment: k,
        hasAttachmentReaction: V,
        hasEphemeralSetting: z,
        hasFile: x,
        hasGif: q,
        hasGroupInvite: G,
        hasHotEmoji: F,
        hasImage: T,
        hasLinks: E,
        hasReaction: H,
        hasReply: O,
        hasSenderKeyDistribution: j,
        hasShare: U,
        hasSticker: W,
        hasStoryReply: B,
        hasText: L,
        hasVideo: D,
        hasVoiceClip: I,
        isAttachmentsGrouped: N,
        isBump: i != null ? i : !1,
        isEdit: l != null ? l : !1,
        isForward: u != null ? u : !1,
        isRetry: m != null ? m : !1,
        isUnsend: _ != null ? _ : !1,
        numberOfAttachments: $,
        numberOfGroupedAttachments: P,
      };
    }
    ((l.getSendToSentBaseAnnotations = c),
      (l.getEntrypointAnnotation = d),
      (l.queryMediaStagingAndGetMessageTypeParams = m),
      (l.getMessageTypeParams = p));
  },
  98,
);
