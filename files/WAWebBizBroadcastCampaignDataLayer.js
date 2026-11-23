__d(
  "WAWebBizBroadcastCampaignDataLayer",
  [
    "WALogger",
    "WAWebApiMessageInfoStore",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaGetters",
    "WAWebBackendRuntime",
    "WAWebBizBroadcastCTAButtonSectionStrings",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignMsgKeyUtils",
    "WAWebBizBroadcastContextualEntrypointUtils",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBizBroadcastRateUtils",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebBroadcastConsts",
    "WAWebBroadcastHomeTypes",
    "WAWebBroadcastODS",
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebDBMessageSerialization",
    "WAWebFileUtils",
    "WAWebGetAllInsightsMap",
    "WAWebImageUtils",
    "WAWebLidMigrationUtils",
    "WAWebMediaConstants",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMessageQueryService",
    "WAWebMmsMediaTypes",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPendingBusinessBroadcastSerialization",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaMessage",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebUserUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    function f(e, t, n) {
      return {
        catalogData: e,
        fileExt: null,
        fileName: t,
        fileSize: null,
        mediaType: o("WAWebMsgType").MSG_TYPE.PRODUCT,
        mimetype: "",
        pageCount: 0,
        previewSize: { height: 0, width: 0 },
        previewUrl: n,
      };
    }
    function g(e) {
      var t = e == null ? void 0 : e.catalogData;
      return (e == null ? void 0 : e.mediaType) ===
        o("WAWebMsgType").MSG_TYPE.PRODUCT &&
        (t == null ? void 0 : t.catalogWid) != null
        ? {
            businessPhoneNumber: o("WAWebWidFactory").createWid(t.catalogWid)
              .user,
            displayText: o(
              "WAWebBizBroadcastCTAButtonSectionStrings",
            ).getCatalogCTADisplayText(t.productId),
            type: "cta_catalog",
          }
        : null;
    }
    function h(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.VIDEO) return e.fullPreview;
      var t = e.preview;
      return t == null
        ? e.fullPreview
        : t.startsWith("blob:") || t.startsWith("data:")
          ? t
          : "data:image/jpeg;base64," + t;
    }
    async function y(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c = t == null ? void 0 : t.catalogWid;
      if (c != null) {
        var d,
          m = t == null ? void 0 : t.productImageUrl,
          p = String(
            o("WAWebBizBroadcastsCreationStrings").getDefaultCatalogLabel(),
          );
        return f(
          {
            catalogWid: c,
            productId:
              (d = t == null ? void 0 : t.productId) != null ? d : void 0,
            productImageUrl: m,
          },
          p,
          m != null ? m : "",
        );
      }
      var _ = t == null ? void 0 : t.mediaFile;
      if (_ != null) {
        var g = new (r("WAWebAttachMediaCollection"))({
            chatParticipantCount: 1,
          }),
          y = [{ file: _ }];
        try {
          await g.processAttachments(
            y,
            void 0,
            o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
            1,
          );
          var b = g.getActive();
          if (
            b == null ||
            (b.processPromise != null && (await b.processPromise),
            !o("WAWebAttachMediaGetters").getPreviewable(b))
          )
            return null;
          var v = h(b);
          return {
            fileExt: o("WAWebAttachMediaGetters").getFileExt(b),
            fileName: b.filename,
            fileSize: o("WAWebAttachMediaGetters").getFilesize(b),
            mediaType: b.type,
            mimetype: b.mimetype,
            pageCount: b.documentPageCount,
            previewSize: b.fullPreviewSize,
            previewUrl: v,
          };
        } finally {
          g.delete();
        }
      }
      if (e == null) return null;
      var S = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      if (S.type === o("WAWebMsgType").MSG_TYPE.PRODUCT) {
        var R,
          L,
          E,
          k = e.businessOwnerJid;
        if (k == null) return null;
        var I = (R = await C(e)) != null ? R : "",
          T = (L = S.title) != null ? L : "",
          D = String(
            o("WAWebBizBroadcastsCreationStrings").getDefaultCatalogLabel(),
          );
        return f(
          {
            catalogWid: k,
            productId: (E = e.productId) != null ? E : void 0,
            productImageUrl: I || null,
            productName: T,
          },
          T || D,
          I,
        );
      }
      var x =
        (n = S.matchedText) == null ? void 0 : n.match(/wa\.me\/c\/(\d+)/);
      if (x != null) {
        var $,
          P,
          N = x[1] + "@s.whatsapp.net",
          M =
            S.thumbnail != null ? "data:image/jpeg;base64," + S.thumbnail : "",
          w = String(
            o("WAWebBizBroadcastsCreationStrings").getDefaultCatalogLabel(),
          );
        return f(
          {
            catalogWid: N,
            productImageUrl: M || null,
            productName: ($ = S.title) != null ? $ : "",
          },
          (P = S.title) != null ? P : w,
          M,
        );
      }
      if (S.mimetype == null) return null;
      var A = S.type,
        F = S.mimetype,
        O = (a = e.filename) != null ? a : "",
        B = (i = e.size) != null ? i : 0,
        W = o("WAWebFileUtils").getFileExtension(O),
        q = (l = e.pageCount) != null ? l : 0,
        U = {
          height: (s = e.height) != null ? s : 0,
          width: (u = e.width) != null ? u : 0,
        },
        V = await C(e);
      return {
        fileExt: W,
        fileName: O,
        fileSize: B,
        mediaType: A,
        mimetype: F,
        pageCount: q,
        previewSize: U,
        previewUrl: V,
      };
    }
    async function C(e, t) {
      if ((t == null ? void 0 : t.mediaFile) != null) {
        var n = t.mediaFile;
        return o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(
          n.type,
        )
          ? b(n)
          : URL.createObjectURL(n);
      }
      if (e != null) {
        var r,
          a,
          i = o("WAWebDBMessageSerialization").messageFromDbRow(e),
          l = (r = i.mimetype) != null ? r : "",
          s =
            ((a = o("WAWebMmsMediaTypes").getValidMimeTypes(
              o("WAWebMsgType").MSG_TYPE.IMAGE,
            )) == null
              ? void 0
              : a.has(l)) === !0,
          u = o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(l),
          c = i.type === o("WAWebMsgType").MSG_TYPE.STICKER,
          d = i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          m = s || u || c || d;
        if (m && (i == null ? void 0 : i.body) != null && i.body.length > 0)
          return "data:image/jpeg;base64," + i.body;
      }
      return null;
    }
    async function b(e) {
      var t = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
          debugHint: "bizBroadcastCampaignPreview",
          file: e,
          logContext: {
            callsite: "BIZ_BROADCAST_CAMPAIGN_PREVIEW",
            mediaType: "VIDEO",
          },
          maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
        }),
        n = t.thumbs,
        r = n[0];
      return r.url;
    }
    function v(e, t) {
      var n = e.status;
      return n ===
        o("WAWebSchemaBusinessBroadcastCampaign")
          .BusinessBroadcastCampaignStatus.SENT
        ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT
        : n ===
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.FAILED
          ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.FAILED
          : n ===
              o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.SCHEDULED
            ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue
                .SCHEDULED
            : n ===
                o("WAWebSchemaBusinessBroadcastCampaign")
                  .BusinessBroadcastCampaignStatus.DRAFT
              ? o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.DRAFT
              : o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue
                  .PROCESSING;
    }
    function S(e) {
      var t;
      if (e == null) return !1;
      var n = o("WAWebDBMessageSerialization").messageFromDbRow(e),
        r = n.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        a =
          (t = n.interactivePayload) == null || (t = t.buttons) == null
            ? void 0
            : t.at(0);
      return r && a != null;
    }
    function R(t, n) {
      var a;
      if ((n == null ? void 0 : n.ctaButtonJson) != null) {
        try {
          var i = JSON.parse(n.ctaButtonJson),
            l = i.buttons[0],
            u = l.name,
            c = JSON.parse(l.buttonParamsJson);
          if (u === "cta_url")
            return {
              displayText: c.display_text,
              linkTrackingEnabled: c.link_tracking_enabled,
              type: "cta_url",
              url: c.url,
            };
          if (u === "cta_call")
            return {
              displayText: c.display_text,
              phoneNumber: c.phone_number,
              type: "cta_call",
            };
          if (u === "quick_reply")
            return { displayText: c.display_text, type: "quick_reply" };
          if (u === "cta_catalog") {
            var d;
            return {
              businessPhoneNumber: c.business_phone_number,
              displayText:
                (d = c.display_text) != null
                  ? d
                  : o(
                      "WAWebBizBroadcastCTAButtonSectionStrings",
                    ).getCatalogCTADisplayText(c.catalog_product_id),
              type: "cta_catalog",
            };
          }
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getCTAButtonData] CTA JSON parse failed (pending)",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("business-broadcast-cta-parse-error");
        }
        return null;
      }
      if (!S(t) || t == null) return null;
      var m = o("WAWebDBMessageSerialization").messageFromDbRow(t),
        p =
          (a = m.interactivePayload) == null || (a = a.buttons) == null
            ? void 0
            : a.at(0),
        _ = p == null ? void 0 : p.name,
        f = p == null ? void 0 : p.buttonParamsJson;
      if (_ == null || f == null) return null;
      try {
        var g,
          h = JSON.parse(f);
        return _ === "cta_url"
          ? {
              displayText: h.display_text,
              linkTrackingEnabled: h.link_tracking_enabled,
              type: "cta_url",
              url: h.url,
            }
          : _ === "cta_call"
            ? {
                displayText: h.display_text,
                phoneNumber: h.phone_number,
                type: "cta_call",
              }
            : _ === "quick_reply"
              ? { displayText: h.display_text, type: "quick_reply" }
              : _ === "cta_catalog"
                ? {
                    businessPhoneNumber: h.business_phone_number,
                    displayText:
                      (g = h.display_text) != null
                        ? g
                        : o(
                            "WAWebBizBroadcastCTAButtonSectionStrings",
                          ).getCatalogCTADisplayText(h.catalog_product_id),
                    type: "cta_catalog",
                  }
                : null;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-data] CTA JSON parse failed ",
                  "",
                ])),
              m.id,
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("business-broadcast-cta-parse-error"),
          null
        );
      }
    }
    function L(e, t) {
      if (e != null) {
        var n,
          r,
          a,
          i = o("WAWebDBMessageSerialization").messageFromDbRow(e);
        if (i.type === o("WAWebMsgType").MSG_TYPE.PRODUCT) {
          var l;
          return (l = i == null ? void 0 : i.caption) != null ? l : "";
        }
        var s = (n = i.mimetype) != null ? n : "",
          u =
            ((r = o("WAWebMmsMediaTypes").getValidMimeTypes(
              o("WAWebMsgType").MSG_TYPE.IMAGE,
            )) == null
              ? void 0
              : r.has(s)) === !0,
          c = S(e),
          d = o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(s),
          m = i.type === o("WAWebMsgType").MSG_TYPE.STICKER,
          p = i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          _ = u || d || m || p;
        if (_ || c) {
          var f;
          return (f = i == null ? void 0 : i.caption) != null ? f : "";
        }
        return (a = i == null ? void 0 : i.body) != null ? a : "";
      }
      return t != null && t.messageBody != null ? t.messageBody : "";
    }
    function E(e) {
      return e == null ? "" : o("WAWebChatGroupUtils").getBroadcastChatTitle(e);
    }
    function k(e, t) {
      var n;
      if (e == null) return t;
      var r = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      return (
        ((n = r == null ? void 0 : r.t) != null
          ? n
          : t / o("WAWebBroadcastConsts").MS_PER_SEC) *
        o("WAWebBroadcastConsts").MS_PER_SEC
      );
    }
    async function I(e, t) {
      if (e == null) return null;
      var n = await D(e, t);
      if (n == null) return null;
      var r = o("WAWebDBMessageSerialization").messageFromDbRow(n);
      return (r == null ? void 0 : r.t) != null
        ? r.t * o("WAWebBroadcastConsts").MS_PER_SEC
        : null;
    }
    async function T(e) {
      var t = e.pendingBroadcastMessageId;
      if (t != null) {
        var n,
          r = await o("WAWebSchemaPendingBusinessBroadcastMessage")
            .getPendingBusinessBroadcastMessageTable()
            .get(t);
        if (r == null) return null;
        var a = {
          adGroupId: (n = e.adGroupId) != null ? n : "",
          broadcastJid: e.broadcastJid,
          freeReservedMsgs: e.reservedQuota,
          pendingBroadcastMessageId: t,
          sendTimestamp: e.scheduledTimestamp,
        };
        return o(
          "WAWebPendingBusinessBroadcastSerialization",
        ).deserializePendingBusinessBroadcast(a, r);
      }
      return null;
    }
    async function D(e, t) {
      var n = o(
          "WAWebBizBroadcastCampaignMsgKeyUtils",
        ).reconstructCampaignMsgKey(e, t),
        r = await o("WAWebSchemaMessage").getMessageTable().get(n.toString());
      if (r != null) return r;
      var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(n);
      if (a != null) {
        var i = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(a.toString());
        if (i != null) return i;
      }
      var l = o(
          "WAWebBizBroadcastCampaignMsgKeyUtils",
        ).reconstructCampaignMsgKeyWithParticipant(e, t),
        s = await o("WAWebSchemaMessage").getMessageTable().get(l.toString());
      if (s != null) return s;
      var u = o("WAWebLidMigrationUtils").getAlternateMsgKey(l);
      if (u != null) {
        var c = await o("WAWebSchemaMessage")
          .getMessageTable()
          .get(u.toString());
        if (c != null) return c;
      }
      var d = o("WAWebBizBroadcastCampaignMsgKeyUtils").extractStanzaId(e),
        m = o("WAWebWidFactory").createWid(t),
        p = o("WAWebChatCollection").ChatCollection.get(m);
      if (p != null) {
        var _ = p.msgs.getModelsArray(),
          f = _.find(function (e) {
            return e.id.id === d && e.id.fromMe === !0;
          });
        if (f != null)
          return o("WAWebSchemaMessage").getMessageTable().get(f.id.toString());
      }
      return null;
    }
    async function x(e, t, n) {
      var a,
        i,
        l,
        s,
        c,
        d,
        m,
        p,
        _,
        f,
        h = e.broadcastJid,
        C = o("WAWebWidFactory").createWid(e.broadcastJid),
        b = o("WAWebChatCollection").ChatCollection.get(C),
        S = (a = t.get(e.campaignId)) != null ? a : null,
        I = await Promise.all([
          e.msgId != null ? D(e.msgId, e.broadcastJid) : Promise.resolve(null),
          T(e),
        ]),
        x = I[0],
        $ = I[1],
        P =
          x != null
            ? o("WAWebDBMessageSerialization").messageFromDbRow(x)
            : null,
        N = P == null ? void 0 : P.type;
      if (e.deviceId !== n && e.msgId != null && x == null) {
        var M = new Error(
          o("WAWebBroadcastConsts").CAMPAIGN_MSG_UNAVAILABLE_ERROR,
        );
        throw (M.stack, M);
      }
      var w = v(e, x),
        A = L(x, $),
        F = k(x, e.createdTimestamp),
        O = E(b),
        B =
          (i =
            (l = S == null ? void 0 : S.recipientCount) != null
              ? l
              : b == null ||
                  (s = b.broadcastMetadata) == null ||
                  (s = s.recipients) == null
                ? void 0
                : s.length) != null
            ? i
            : 0,
        W = R(x, $),
        q = await y(x, $),
        U = W != null ? W : g(q),
        V = (c = S == null ? void 0 : S.deliveredCount) != null ? c : 0;
      if (
        V === 0 &&
        e.msgId != null &&
        w === o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT
      )
        try {
          var H = o(
              "WAWebBizBroadcastCampaignMsgKeyUtils",
            ).reconstructCampaignMsgKey(e.msgId, e.broadcastJid),
            G = await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageQueryService").MessageQueryService,
                  ).queryMsgInfo
                : o("WAWebApiMessageInfoStore").queryMsgInfo
            )(H);
          V = G.delivery.length;
        } catch (t) {
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-data] Error querying message info for ",
                  "",
                ])),
              e.msgId,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("business-broadcast-msg-info-query-error");
        }
      var z = (d = e.campaignName) != null ? d : A || "Broadcast Message",
        j = (m = S == null ? void 0 : S.readCount) != null ? m : 0,
        K =
          ((p = S == null ? void 0 : S.repliedCount) != null ? p : 0) +
          ((_ = S == null ? void 0 : S.quickReplyCount) != null ? _ : 0),
        Q = o("WAWebBizBroadcastRateUtils").computeCampaignRates({
          deliveredCount: V,
          readCount: j,
          recipientCount: B,
          repliedCount: K,
        }),
        X = Q.readRate,
        Y = Q.replyRate;
      return {
        attachmentData: q,
        audienceName: O,
        broadcastJid: h,
        campaignId: e.campaignId,
        campaignName: z,
        createdTimestamp: e.createdTimestamp,
        ctaButtonData: U,
        deliveredCount: V,
        lastUpdatedTimestampMs:
          (f = S == null ? void 0 : S.lastUpdatedTimestampMs) != null
            ? f
            : null,
        messageBody: A,
        msgType: N,
        readRate: X,
        recipientCount: B,
        replyRate: Y,
        scheduledTimestamp: e.scheduledTimestamp,
        sentAt: F,
        status: w,
      };
    }
    async function $() {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:campaign-data] loading campaigns",
          ])),
      );
      var e = await Promise.all([
          o("WAWebBizBroadcastCampaignAPI").getAllBizBroadcastCampaigns(),
          o("WAWebGetAllInsightsMap")
            .getAllInsightsMap()
            .catch(function (e) {
              return (
                o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:campaign-data] Failed to load insights map",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("business-broadcast-insights-load-error"),
                new Map()
              );
            }),
        ]),
        t = e[0],
        n = e[1],
        a = o("WAWebUserUtils").getMeDevicePnOrThrow_DO_NOT_USE().getDeviceId(),
        i = o("WAWebBizBroadcastCampaignAPI").filterCampaignsByDevice(t, a);
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:campaign-data] ",
            " total, ",
            " visible",
          ])),
        t.length,
        i.length,
      );
      var l = await Promise.allSettled(
          i.map(function (e) {
            return x(e, n, a);
          }),
        ),
        s = [];
      for (var u of l)
        if (u.status === "fulfilled") s.push(u.value);
        else {
          var _,
            f,
            g = String(
              (_ =
                (f = r("getErrorSafe")(u.reason)) == null
                  ? void 0
                  : f.message) != null
                ? _
                : "",
            );
          g === o("WAWebBroadcastConsts").CAMPAIGN_MSG_UNAVAILABLE_ERROR
            ? o("WAWebBroadcastODS").logCampaignTransformMsgUnavailable()
            : o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:campaign-data] Failed to transform campaign",
                    ])),
                )
                .catching(r("getErrorSafe")(u.reason))
                .sendLogs("broadcast-campaign-transform-message-failure");
        }
      return s;
    }
    async function P(e, t) {
      var n = await Promise.all([
          e.msgId != null ? D(e.msgId, e.broadcastJid) : Promise.resolve(null),
          T(e),
        ]),
        r = n[0],
        o = n[1],
        a = await y(r, o),
        i = a == null ? void 0 : a.previewUrl;
      if (
        (t == null ? void 0 : t.aborted) === !0 &&
        i != null &&
        i.startsWith("blob:")
      )
        return (
          URL.revokeObjectURL(i),
          {
            attachment: null,
            ctaButtonData: null,
            messageBody: "",
            thumbnailUrl: null,
          }
        );
      var l = L(r, o),
        s = R(r, o);
      return {
        attachment: a,
        ctaButtonData: s,
        messageBody: l,
        thumbnailUrl: i,
      };
    }
    async function N(e) {
      try {
        var t = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignByKey(e);
        if (t == null) return null;
        var n = await T(t);
        if ((n == null ? void 0 : n.mediaFile) != null) {
          var a;
          return (a = await o(
            "WAWebBizBroadcastContextualEntrypointUtils",
          ).getAttachmentDataFromFile(n.mediaFile)) != null
            ? a
            : null;
        }
        if (t.msgId == null) return null;
        var i = await D(t.msgId, t.broadcastJid);
        if (i == null) return null;
        var l = o("WAWebMsgCollection").MsgCollection.get(i.id);
        if (l == null) {
          var s = o("WAWebDBMessageSerialization").messageFromDbRow(i),
            u = o("WAWebMsgCollection").MsgCollection.add([s]);
          l = u[0];
        }
        if (l == null) return null;
        l.mediaData == null &&
          (await l.downloadMedia({
            downloadEvenIfExpensive: !0,
            isUserInitiated: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .SEND_TO_CHAT,
          }));
        var c = await o(
          "WAWebBizBroadcastContextualEntrypointUtils",
        ).getAttachmentDataFromMsg(l);
        if ((c == null ? void 0 : c.file) != null) {
          var d,
            m =
              (d = await o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getAttachmentDataFromFile(c.file)) != null
                ? d
                : null;
          return (c.previewUrl != null && URL.revokeObjectURL(c.previewUrl), m);
        }
        return c != null ? c : null;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[DuplicateBB] failed to resolve attachment for campaign",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("broadcast-duplicate-resolve-attachment-failed"),
          null
        );
      }
    }
    ((l.getThumbnailUrl = C),
      (l.deriveCampaignStatus = v),
      (l.getDisplayMessageBody = L),
      (l.resolveCampaignSentAtMs = I),
      (l.lookupCampaignMessage = D),
      (l.filterCampaignsByDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).filterCampaignsByDevice),
      (l.getAllRawCampaignsForCurrentDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).getAllRawCampaignsForCurrentDevice),
      (l.loadBroadcastCampaigns = $),
      (l.fetchCampaignMediaContext = P),
      (l.resolveAttachmentDataForCampaign = N));
  },
  98,
);
