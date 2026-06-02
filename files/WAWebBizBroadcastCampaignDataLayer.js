__d(
  "WAWebBizBroadcastCampaignDataLayer",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebApiMessageInfoStore",
    "WAWebAttachMediaCollection",
    "WAWebBizBroadcastCTAButtonSectionStrings",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignMsgKeyUtils",
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
    "WAWebMsgType",
    "WAWebPendingBusinessBroadcastSerialization",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaMessage",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield g.processAttachments(
              h,
              void 0,
              o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
              1,
            );
            var y = g.getPreviewableMedias(),
              b = y[0];
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
            var k = (S = yield C(e)) != null ? S : "",
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
                v.thumbnail != null
                  ? "data:image/jpeg;base64," + v.thumbnail
                  : "",
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
            U = yield C(e);
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
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t == null ? void 0 : t.mediaFile) != null) {
            var n = t.mediaFile;
            return o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(
              n.type,
            )
              ? v(n)
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
              u = o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(
                l,
              ),
              c = i.type === o("WAWebMsgType").MSG_TYPE.STICKER,
              d = i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
              m = s || u || c || d;
            if (m && (i == null ? void 0 : i.body) != null && i.body.length > 0)
              return "data:image/jpeg;base64," + i.body;
          }
          return null;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebImageUtils").generateVideoThumbsAndDuration({
              debugHint: "downloadVideoThumbnail",
              file: e,
              maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
            }),
            n = t.thumbs,
            r = n[0];
          return r.url;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
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
    function L(e) {
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
    function E(t, n) {
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
      if (!L(t) || t == null) return null;
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
    function k(e, t) {
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
          c = L(e),
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
    function I(e) {
      return e == null ? "" : o("WAWebChatGroupUtils").getBroadcastChatTitle(e);
    }
    function T(e, t) {
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
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.pendingBroadcastMessageId;
          if (t != null) {
            var n,
              r = yield o("WAWebSchemaPendingBusinessBroadcastMessage")
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
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WAWebBizBroadcastCampaignMsgKeyUtils",
            ).reconstructCampaignMsgKey(e, t),
            r = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(n.toString());
          if (r != null) return r;
          var a = o("WAWebLidMigrationUtils").getAlternateMsgKey(n);
          if (a != null) {
            var i = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(a.toString());
            if (i != null) return i;
          }
          var l = o(
              "WAWebBizBroadcastCampaignMsgKeyUtils",
            ).reconstructCampaignMsgKeyWithParticipant(e, t),
            s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .get(l.toString());
          if (s != null) return s;
          var u = o("WAWebLidMigrationUtils").getAlternateMsgKey(l);
          if (u != null) {
            var c = yield o("WAWebSchemaMessage")
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
              return o("WAWebSchemaMessage")
                .getMessageTable()
                .get(f.id.toString());
          }
          return null;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i,
            l,
            s,
            c,
            d,
            m,
            p,
            f,
            y,
            C,
            b = o("WAJids").toBroadcastJid(e.broadcastJid),
            v = o("WAWebWidFactory").createWid(e.broadcastJid),
            S = o("WAWebChatCollection").ChatCollection.get(v),
            L = (i = t.get(e.campaignId)) != null ? i : null,
            x = yield (_ || (_ = n("Promise"))).all([
              e.msgId != null
                ? $(e.msgId, e.broadcastJid)
                : (_ || (_ = n("Promise"))).resolve(null),
              D(e),
            ]),
            P = x[0],
            N = x[1],
            M =
              P != null
                ? o("WAWebDBMessageSerialization").messageFromDbRow(P)
                : null,
            w = M == null ? void 0 : M.type;
          if (e.deviceId !== a && e.msgId != null && P == null) {
            var A = new Error(
              o("WAWebBroadcastConsts").CAMPAIGN_MSG_UNAVAILABLE_ERROR,
            );
            throw (A.stack, A);
          }
          var F = R(e, P),
            O = k(P, N),
            B = T(P, e.createdTimestamp),
            W = I(S),
            q =
              (l =
                (s = L == null ? void 0 : L.recipientCount) != null
                  ? s
                  : S == null ||
                      (c = S.broadcastMetadata) == null ||
                      (c = c.recipients) == null
                    ? void 0
                    : c.length) != null
                ? l
                : 0,
            U = E(P, N),
            V = yield h(P, N),
            H = U != null ? U : g(V),
            G = (d = L == null ? void 0 : L.deliveredCount) != null ? d : 0;
          if (
            G === 0 &&
            e.msgId != null &&
            F === o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT
          )
            try {
              var z = o(
                  "WAWebBizBroadcastCampaignMsgKeyUtils",
                ).reconstructCampaignMsgKey(e.msgId, e.broadcastJid),
                j = yield o("WAWebApiMessageInfoStore").queryMsgInfo(z);
              G = j.delivery.length;
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
          var K = (m = e.campaignName) != null ? m : O || "Broadcast Message",
            Q = (p = L == null ? void 0 : L.readCount) != null ? p : 0,
            X =
              ((f = L == null ? void 0 : L.repliedCount) != null ? f : 0) +
              ((y = L == null ? void 0 : L.quickReplyCount) != null ? y : 0),
            Y = o("WAWebBizBroadcastRateUtils").computeCampaignRates({
              deliveredCount: G,
              readCount: Q,
              recipientCount: q,
              repliedCount: X,
            }),
            J = Y.readRate,
            Z = Y.replyRate;
          return {
            attachmentData: V,
            audienceName: W,
            broadcastJid: b,
            campaignId: e.campaignId,
            campaignName: K,
            createdTimestamp: e.createdTimestamp,
            ctaButtonData: H,
            deliveredCount: G,
            lastUpdatedTimestampMs:
              (C = L == null ? void 0 : L.lastUpdatedTimestampMs) != null
                ? C
                : null,
            messageBody: O,
            msgType: w,
            readRate: J,
            recipientCount: q,
            replyRate: Z,
            scheduledTimestamp: e.scheduledTimestamp,
            sentAt: B,
            status: F,
          };
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-data] loading campaigns",
              ])),
          );
          var e = yield (_ || (_ = n("Promise"))).all([
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
            a = e[1],
            i = o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId(),
            l = o("WAWebBizBroadcastCampaignAPI").filterCampaignsByDevice(t, i);
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-data] ",
                " total, ",
                " visible",
              ])),
            t.length,
            l.length,
          );
          var s = yield _.allSettled(
              l.map(function (e) {
                return N(e, a, i);
              }),
            ),
            u = [];
          for (var f of s)
            if (f.status === "fulfilled") u.push(f.value);
            else {
              var g,
                h,
                y = String(
                  (g =
                    (h = r("getErrorSafe")(f.reason)) == null
                      ? void 0
                      : h.message) != null
                    ? g
                    : "",
                );
              y === o("WAWebBroadcastConsts").CAMPAIGN_MSG_UNAVAILABLE_ERROR
                ? o("WAWebBroadcastODS").logCampaignTransformMsgUnavailable()
                : o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[broadcast:campaign-data] Failed to transform campaign",
                        ])),
                    )
                    .catching(r("getErrorSafe")(f.reason))
                    .sendLogs("broadcast-campaign-transform-message-failure");
            }
          return u;
        })),
        A.apply(this, arguments)
      );
    }
    ((l.getThumbnailUrl = C),
      (l.deriveCampaignStatus = R),
      (l.getDisplayMessageBody = k),
      (l.filterCampaignsByDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).filterCampaignsByDevice),
      (l.getAllRawCampaignsForCurrentDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).getAllRawCampaignsForCurrentDevice),
      (l.loadBroadcastCampaigns = w));
  },
  98,
);
