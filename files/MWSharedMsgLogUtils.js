__d(
  "MWSharedMsgLogUtils",
  [
    "$InternalEnum",
    "I64",
    "IGDInteractionTraceAnnotations",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "MAWEBSwitch",
    "MWGetOriginalEntrypoint",
    "MWMsgActionLogUtils",
    "MWMsgMediaTypeLogUtils",
    "MWSharedS2SBaseAnnotations",
    "MultipleTabsLogger",
    "asyncToGeneratorRuntime",
    "cr:39974",
    "isArmadillo",
    "promiseDone",
    "shouldUseMAWSharedWorker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n("$InternalEnum")({ Text: "text", NonText: "non-text" });
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.attachmentTypeParams,
            i = t.composerEntrypoint,
            l = t.isPwa,
            s = t.messageOfflineThreadingId,
            u = t.source,
            c = t.thread,
            d =
              n("cr:39974") != null
                ? yield n("cr:39974").isCutoverThreadKey(c.threadKey)
                : !1,
            m = yield o(
              "MWSharedS2SBaseAnnotations",
            ).getSendToSentBaseAnnotations(a, u, i, s, l);
          return {
            bool: babelHelpers.extends(
              {},
              m.bool,
              o(
                "IGDInteractionTraceAnnotations",
              ).getInstamadilloBooleanAnnotations(c),
              {
                is_community_event: c.eventStartTimestampMs != null,
                is_cutover: r("isArmadillo")() && d,
                is_message_request: o(
                  "LSMessagingThreadTypeUtil",
                ).isMessageRequest(c),
                is_secure: o("LSMessagingThreadTypeUtil").isArmadilloSecure(
                  c.threadType,
                ),
              },
            ),
            int: babelHelpers.extends({}, m.int),
            string: babelHelpers.extends({}, m.string, {
              consistent_thread_fbid:
                c.consistentThreadFbid != null
                  ? (e || (e = o("I64"))).to_string(c.consistentThreadFbid)
                  : null,
              original_entrypoint: r("MWGetOriginalEntrypoint")(c.threadKey),
              thread_id: (e || (e = o("I64"))).to_string(c.threadKey),
              thread_subtype:
                c.threadSubtype != null
                  ? (e || (e = o("I64"))).to_string(c.threadSubtype)
                  : null,
              thread_type: e.to_string(c.threadType),
            }),
          };
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, a, i) {
      (p(
        e,
        t,
        r("MWGetOriginalEntrypoint")(n.threadKey),
        n.threadKey,
        n.consistentThreadFbid,
        n.threadType,
        n.threadSubtype,
        a,
        i,
      ),
        o(
          "IGDInteractionTraceAnnotations",
        ).addInstamadilloAnnotationsToInteractionTrace(n, e));
    }
    function p(t, a, i, l, s, c, d, m, p) {
      var _ = a.hasEphemeralSetting,
        f = _ === void 0 ? !1 : _,
        g = a.hasFile,
        h = g === void 0 ? !1 : g,
        y = a.hasGif,
        C = y === void 0 ? !1 : y,
        b = a.hasGroupInvite,
        v = b === void 0 ? !1 : b,
        S = a.hasHotEmoji,
        R = S === void 0 ? !1 : S,
        L = a.hasImage,
        E = L === void 0 ? !1 : L,
        k = a.hasLinks,
        I = k === void 0 ? !1 : k,
        T = a.hasReaction,
        D = T === void 0 ? !1 : T,
        x = a.hasReply,
        $ = x === void 0 ? !1 : x,
        P = a.hasSenderKeyDistribution,
        N = P === void 0 ? !1 : P,
        M = a.hasShare,
        w = M === void 0 ? !1 : M,
        A = a.hasSticker,
        F = A === void 0 ? !1 : A,
        O = a.hasStoryReply,
        B = O === void 0 ? !1 : O,
        W = a.hasText,
        q = W === void 0 ? !1 : W,
        U = a.hasVideo,
        V = U === void 0 ? !1 : U,
        H = a.hasVoiceClip,
        G = H === void 0 ? !1 : H,
        z = a.isAttachmentsGrouped,
        j = a.isBump,
        K = j === void 0 ? !1 : j,
        Q = a.isEdit,
        X = Q === void 0 ? !1 : Q,
        Y = a.isForward,
        J = Y === void 0 ? !1 : Y,
        Z = a.isRetry,
        ee = Z === void 0 ? !1 : Z,
        te = a.isUnsend,
        ne = te === void 0 ? !1 : te,
        re = a.numberOfAttachments,
        oe = re === void 0 ? 0 : re,
        ae = a.numberOfGroupedAttachments,
        ie = ae === void 0 ? 0 : ae,
        le = o("MWMsgActionLogUtils").getActionType({
          hasEphemeralSetting: f,
          hasGroupInvite: v,
          hasReaction: D,
          hasReply: $,
          hasSenderKeyDistribution: N,
          hasStoryReply: B,
          isBump: K,
          isEdit: X,
          isForward: J,
          isRetry: ee,
          isUnsend: ne,
        }),
        se = o("MWMsgMediaTypeLogUtils").getAttachmentType({
          hasFile: h,
          hasGif: C,
          hasHotEmoji: R,
          hasImage: E,
          hasLinks: I,
          hasShare: w,
          hasSticker: F,
          hasVideo: V,
          hasVoiceClip: G,
          numberOfAttachments: oe,
          numberOfGroupedAttachments: ie,
        }),
        ue =
          q && (!se || se === o("MWMsgMediaTypeLogUtils").AttachmentType.None)
            ? u.Text
            : u.NonText;
      (o("MultipleTabsLogger").addAnnotationWithInteractionUuid(t.getTraceId()),
        t.addAnnotation("attachment_type", se),
        t.addAnnotation("action_type", le),
        t.addAnnotation("message_type", ue),
        t.addAnnotation("original_entrypoint", i),
        m != null && t.addAnnotation("root_component", m),
        t.addAnnotationInt("number_of_attachments", oe),
        z != null && t.addAnnotationBoolean("is_attachments_grouped", z),
        t.addAnnotation("thread_id", (e || (e = o("I64"))).to_string(l)),
        s != null &&
          t.addAnnotation(
            "consistent_thread_fbid",
            (e || (e = o("I64"))).to_string(s),
          ),
        t.addAnnotation("thread_type", e.to_string(c)),
        d != null &&
          t.addAnnotation("thread_subtype", (e || (e = o("I64"))).to_string(d)),
        n("cr:39974") != null &&
          r("promiseDone")(n("cr:39974").isCutoverThreadKey(l), function (e) {
            t.addAnnotationBoolean("is_cutover", e);
          }),
        t.addAnnotationBoolean(
          "is_secure",
          o("LSMessagingThreadTypeUtil").isArmadilloSecure(c),
        ),
        p !== !0 &&
          (t.addAnnotationBoolean(
            "is_eb_enabled",
            r("MAWEBSwitch").isEnabled(),
          ),
          t.addAnnotationBoolean(
            "use_maw_shared_worker",
            o("shouldUseMAWSharedWorker").shouldUseMAWSharedWorker(),
          )));
    }
    function _(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(2),
      )
        ? "media"
        : (e || (e = o("I64"))).equal(
              t,
              (s || (s = o("LSIntEnum"))).ofNumber(4),
            )
          ? "audio"
          : (e || (e = o("I64"))).equal(
                t,
                (s || (s = o("LSIntEnum"))).ofNumber(4096),
              ) ||
              (e || (e = o("I64"))).equal(
                t,
                (s || (s = o("LSIntEnum"))).ofNumber(134217728),
              )
            ? "sticker"
            : (e || (e = o("I64"))).equal(
                  t,
                  (s || (s = o("LSIntEnum"))).ofNumber(16384),
                )
              ? "gif"
              : (e || (e = o("I64"))).equal(
                    t,
                    (s || (s = o("LSIntEnum"))).ofNumber(64),
                  )
                ? "file"
                : (e || (e = o("I64"))).equal(
                      t,
                      (s || (s = o("LSIntEnum"))).ofNumber(1),
                    )
                  ? "text"
                  : (e || (e = o("I64"))).equal(
                        t,
                        (s || (s = o("LSIntEnum"))).ofNumber(1024),
                      ) ||
                      (e || (e = o("I64"))).equal(
                        t,
                        (s || (s = o("LSIntEnum"))).ofNumber(536870912),
                      )
                    ? "XMA"
                    : "unknown";
    }
    ((l.MsgType = u),
      (l.getSendToSentAnnotations = c),
      (l.addSendMessageMetadataForInteractionTrace = m),
      (l.addSendMessageMetadataForInteractionTraceWithThreadMetadata = p),
      (l.getMessageTypeFromDisplayedContentType = _));
  },
  98,
);
