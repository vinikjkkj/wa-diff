__d(
  "WAWebBizBroadcastCampaignDataLayer",
  [
    "WALogger",
    "WAWebApiMessageInfoStore",
    "WAWebAttachMediaCollection",
    "WAWebBizBroadcastCTAButtonSectionStrings",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignMsgKeyUtils",
    "WAWebBizBroadcastContextualEntrypointUtils",
    "WAWebBizBroadcastInsightsStorageUtils",
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
    "WAWebImageUtils",
    "WAWebLidMigrationUtils",
    "WAWebMediaConstants",
    "WAWebMediaMessageGetValidatedProperties",
    "WAWebMmsMediaTypes",
    "WAWebMsgCollection",
    "WAWebMsgType",
    "WAWebPendingBusinessBroadcastSerialization",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaMessage",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebUserPrefsMeUser",
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
    async function h(e, t) {
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
          h = [{ file: _ }];
        await g.processAttachments(
          h,
          void 0,
          o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
          1,
        );
        var C = g.getPreviewableMedias(),
          b = C[0];
        return b == null
          ? null
          : {
              fileExt: b.fileExt,
              fileName: b.filename,
              fileSize: b.filesize,
              mediaType: b.type,
              mimetype: b.mimetype,
              pageCount: b.documentPageCount,
              previewSize: b.fullPreviewSize,
              previewUrl: b.fullPreview,
            };
      }
      if (e == null) return null;
      var v = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      if (v.type === o("WAWebMsgType").MSG_TYPE.PRODUCT) {
        var S,
          R,
          L,
          E = e.businessOwnerJid;
        if (E == null) return null;
        var k = (S = await y(e)) != null ? S : "",
          I = (R = v.title) != null ? R : "",
          T = String(
            o("WAWebBizBroadcastsCreationStrings").getDefaultCatalogLabel(),
          );
        return f(
          {
            catalogWid: E,
            productId: (L = e.productId) != null ? L : void 0,
            productImageUrl: k || null,
            productName: I,
          },
          I || T,
          k,
        );
      }
      var D =
        (n = v.matchedText) == null ? void 0 : n.match(/wa\.me\/c\/(\d+)/);
      if (D != null) {
        var x,
          $,
          P = D[1] + "@s.whatsapp.net",
          N =
            v.thumbnail != null ? "data:image/jpeg;base64," + v.thumbnail : "",
          M = String(
            o("WAWebBizBroadcastsCreationStrings").getDefaultCatalogLabel(),
          );
        return f(
          {
            catalogWid: P,
            productImageUrl: N || null,
            productName: (x = v.title) != null ? x : "",
          },
          ($ = v.title) != null ? $ : M,
          N,
        );
      }
      if (v.mimetype == null) return null;
      var w = v.type,
        A = v.mimetype,
        F = (a = e.filename) != null ? a : "",
        O = (i = e.size) != null ? i : 0,
        B = o("WAWebFileUtils").getFileExtension(F),
        W = (l = e.pageCount) != null ? l : 0,
        q = {
          height: (s = e.height) != null ? s : 0,
          width: (u = e.width) != null ? u : 0,
        },
        U = await y(e);
      return {
        fileExt: B,
        fileName: F,
        fileSize: O,
        mediaType: w,
        mimetype: A,
        pageCount: W,
        previewSize: q,
        previewUrl: U,
      };
    }
    async function y(e, t) {
      if ((t == null ? void 0 : t.mediaFile) != null) {
        var n = t.mediaFile;
        return o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(
          n.type,
        )
          ? C(n)
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
    async function C(e) {
      var t = await o("WAWebImageUtils").generateVideoThumbsAndDuration({
          debugHint: "downloadVideoThumbnail",
          file: e,
          maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
        }),
        n = t.thumbs,
        r = n[0];
      return r.url;
    }
    function b(e, t) {
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
    function v(e) {
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
    function S(t, n) {
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
      if (!v(t) || t == null) return null;
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
    function R(e, t) {
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
          c = v(e),
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
    function L(e) {
      return e == null ? "" : o("WAWebChatGroupUtils").getBroadcastChatTitle(e);
    }
    function E(e, t) {
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
    async function k(e) {
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
    async function I(e, t) {
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
    async function T(e, t, n) {
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
        y = e.broadcastJid,
        C = o("WAWebWidFactory").createWid(e.broadcastJid),
        v = o("WAWebChatCollection").ChatCollection.get(C),
        T = (a = t.get(e.campaignId)) != null ? a : null,
        D = await Promise.all([
          e.msgId != null ? I(e.msgId, e.broadcastJid) : Promise.resolve(null),
          k(e),
        ]),
        x = D[0],
        $ = D[1],
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
      var w = b(e, x),
        A = R(x, $),
        F = E(x, e.createdTimestamp),
        O = L(v),
        B =
          (i =
            (l = T == null ? void 0 : T.recipientCount) != null
              ? l
              : v == null ||
                  (s = v.broadcastMetadata) == null ||
                  (s = s.recipients) == null
                ? void 0
                : s.length) != null
            ? i
            : 0,
        W = S(x, $),
        q = await h(x, $),
        U = W != null ? W : g(q),
        V = (c = T == null ? void 0 : T.deliveredCount) != null ? c : 0;
      if (
        V === 0 &&
        e.msgId != null &&
        w === o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT
      )
        try {
          var H = o(
              "WAWebBizBroadcastCampaignMsgKeyUtils",
            ).reconstructCampaignMsgKey(e.msgId, e.broadcastJid),
            G = await o("WAWebApiMessageInfoStore").queryMsgInfo(H);
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
        j = (m = T == null ? void 0 : T.readCount) != null ? m : 0,
        K =
          ((p = T == null ? void 0 : T.repliedCount) != null ? p : 0) +
          ((_ = T == null ? void 0 : T.quickReplyCount) != null ? _ : 0),
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
        broadcastJid: y,
        campaignId: e.campaignId,
        campaignName: z,
        createdTimestamp: e.createdTimestamp,
        ctaButtonData: U,
        deliveredCount: V,
        lastUpdatedTimestampMs:
          (f = T == null ? void 0 : T.lastUpdatedTimestampMs) != null
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
    async function D() {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[broadcast:campaign-data] loading campaigns",
          ])),
      );
      var e = await Promise.all([
          o("WAWebBizBroadcastCampaignAPI").getAllBizBroadcastCampaigns(),
          o("WAWebBizBroadcastInsightsStorageUtils")
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
        a = o("WAWebUserPrefsMeUser")
          .getMeDevicePnOrThrow_DO_NOT_USE()
          .getDeviceId(),
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
            return T(e, n, a);
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
    async function x(e, t) {
      var n = await Promise.all([
          e.msgId != null ? I(e.msgId, e.broadcastJid) : Promise.resolve(null),
          k(e),
        ]),
        r = n[0],
        o = n[1],
        a = await h(r, o),
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
      var l = R(r, o),
        s = S(r, o);
      return {
        attachment: a,
        ctaButtonData: s,
        messageBody: l,
        thumbnailUrl: i,
      };
    }
    async function $(e) {
      try {
        var t = await o(
          "WAWebBizBroadcastCampaignAPI",
        ).getBizBroadcastCampaignByKey(e);
        if (t == null) return null;
        var n = await k(t);
        if ((n == null ? void 0 : n.mediaFile) != null) {
          var a;
          return (a = await o(
            "WAWebBizBroadcastContextualEntrypointUtils",
          ).getAttachmentDataFromFile(n.mediaFile)) != null
            ? a
            : null;
        }
        if (t.msgId == null) return null;
        var i = await I(t.msgId, t.broadcastJid);
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
    ((l.getThumbnailUrl = y),
      (l.deriveCampaignStatus = b),
      (l.getDisplayMessageBody = R),
      (l.lookupCampaignMessage = I),
      (l.filterCampaignsByDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).filterCampaignsByDevice),
      (l.getAllRawCampaignsForCurrentDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).getAllRawCampaignsForCurrentDevice),
      (l.loadBroadcastCampaigns = D),
      (l.fetchCampaignMediaContext = x),
      (l.resolveAttachmentDataForCampaign = $));
  },
  98,
);
