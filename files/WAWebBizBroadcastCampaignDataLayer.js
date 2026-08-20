__d(
  "WAWebBizBroadcastCampaignDataLayer",
  [
    "Promise",
    "WALogger",
    "WAWebApiMessageInfoStore",
    "WAWebAttachMediaCollection",
    "WAWebAttachMediaGetters",
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
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t, n) {
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
    function h(e) {
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
    function y(e) {
      if (e.type !== o("WAWebMsgType").MSG_TYPE.VIDEO) return e.fullPreview;
      var t = e.preview;
      return t == null
        ? e.fullPreview
        : t.startsWith("blob:") || t.startsWith("data:")
          ? t
          : "data:image/jpeg;base64," + t;
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            return g(
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
            var f = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              h = [{ file: _ }];
            try {
              yield f.processAttachments(
                h,
                void 0,
                o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
                1,
              );
              var C = f.getActive();
              if (
                C == null ||
                (C.processPromise != null && (yield C.processPromise),
                !o("WAWebAttachMediaGetters").getPreviewable(C))
              )
                return null;
              var b = y(C);
              return {
                fileExt: o("WAWebAttachMediaGetters").getFileExt(C),
                fileName: C.filename,
                fileSize: o("WAWebAttachMediaGetters").getFilesize(C),
                mediaType: C.type,
                mimetype: C.mimetype,
                pageCount: C.documentPageCount,
                previewSize: C.fullPreviewSize,
                previewUrl: b,
              };
            } finally {
              f.delete();
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
            var I = (R = yield v(e)) != null ? R : "",
              T = (L = S.title) != null ? L : "",
              D = String(
                o("WAWebBizBroadcastsCreationStrings").getDefaultCatalogLabel(),
              );
            return g(
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
                S.thumbnail != null
                  ? "data:image/jpeg;base64," + S.thumbnail
                  : "",
              w = String(
                o("WAWebBizBroadcastsCreationStrings").getDefaultCatalogLabel(),
              );
            return g(
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
            V = yield v(e);
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if ((t == null ? void 0 : t.mediaFile) != null) {
            var n = t.mediaFile;
            return o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(
              n.type,
            )
              ? R(n)
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebImageUtils").generateVideoThumbsAndDuration({
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
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
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
    function k(e) {
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
    function I(t, n) {
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
      if (!k(t) || t == null) return null;
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
    function T(e, t) {
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
          c = k(e),
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
    function D(e) {
      return e == null ? "" : o("WAWebChatGroupUtils").getBroadcastChatTitle(e);
    }
    function x(e, t) {
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
    function $(e, t) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null) return null;
          var n = yield w(e, t);
          if (n == null) return null;
          var r = o("WAWebDBMessageSerialization").messageFromDbRow(n);
          return (r == null ? void 0 : r.t) != null
            ? r.t * o("WAWebBroadcastConsts").MS_PER_SEC
            : null;
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i,
            l,
            s,
            c,
            d,
            m,
            p,
            _,
            g,
            y,
            b = e.broadcastJid,
            v = o("WAWebWidFactory").createWid(e.broadcastJid),
            S = o("WAWebChatCollection").ChatCollection.get(v),
            R = (i = t.get(e.campaignId)) != null ? i : null,
            L = yield (f || (f = n("Promise"))).all([
              e.msgId != null
                ? w(e.msgId, e.broadcastJid)
                : (f || (f = n("Promise"))).resolve(null),
              N(e),
            ]),
            k = L[0],
            $ = L[1],
            P =
              k != null
                ? o("WAWebDBMessageSerialization").messageFromDbRow(k)
                : null,
            M = P == null ? void 0 : P.type;
          if (e.deviceId !== a && e.msgId != null && k == null) {
            var A = new Error(
              o("WAWebBroadcastConsts").CAMPAIGN_MSG_UNAVAILABLE_ERROR,
            );
            throw (A.stack, A);
          }
          var F = E(e, k),
            O = T(k, $),
            B = x(k, e.createdTimestamp),
            W = D(S),
            q =
              (l =
                (s = R == null ? void 0 : R.recipientCount) != null
                  ? s
                  : S == null ||
                      (c = S.broadcastMetadata) == null ||
                      (c = c.recipients) == null
                    ? void 0
                    : c.length) != null
                ? l
                : 0,
            U = I(k, $),
            V = yield C(k, $),
            H = U != null ? U : h(V),
            G = (d = R == null ? void 0 : R.deliveredCount) != null ? d : 0;
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
            Q = (p = R == null ? void 0 : R.readCount) != null ? p : 0,
            X =
              ((_ = R == null ? void 0 : R.repliedCount) != null ? _ : 0) +
              ((g = R == null ? void 0 : R.quickReplyCount) != null ? g : 0),
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
              (y = R == null ? void 0 : R.lastUpdatedTimestampMs) != null
                ? y
                : null,
            messageBody: O,
            msgType: M,
            readRate: J,
            recipientCount: q,
            replyRate: Z,
            scheduledTimestamp: e.scheduledTimestamp,
            sentAt: B,
            status: F,
          };
        })),
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-data] loading campaigns",
              ])),
          );
          var e = yield (f || (f = n("Promise"))).all([
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
          var s = yield f.allSettled(
              l.map(function (e) {
                return F(e, a, i);
              }),
            ),
            u = [];
          for (var _ of s)
            if (_.status === "fulfilled") u.push(_.value);
            else {
              var g,
                h,
                y = String(
                  (g =
                    (h = r("getErrorSafe")(_.reason)) == null
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
                    .catching(r("getErrorSafe")(_.reason))
                    .sendLogs("broadcast-campaign-transform-message-failure");
            }
          return u;
        })),
        W.apply(this, arguments)
      );
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield (f || (f = n("Promise"))).all([
              e.msgId != null
                ? w(e.msgId, e.broadcastJid)
                : (f || (f = n("Promise"))).resolve(null),
              N(e),
            ]),
            o = r[0],
            a = r[1],
            i = yield C(o, a),
            l = i == null ? void 0 : i.previewUrl;
          if (
            (t == null ? void 0 : t.aborted) === !0 &&
            l != null &&
            l.startsWith("blob:")
          )
            return (
              URL.revokeObjectURL(l),
              {
                attachment: null,
                ctaButtonData: null,
                messageBody: "",
                thumbnailUrl: null,
              }
            );
          var s = T(o, a),
            u = I(o, a);
          return {
            attachment: i,
            ctaButtonData: u,
            messageBody: s,
            thumbnailUrl: l,
          };
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignByKey(e);
            if (t == null) return null;
            var n = yield N(t);
            if ((n == null ? void 0 : n.mediaFile) != null) {
              var a;
              return (a = yield o(
                "WAWebBizBroadcastContextualEntrypointUtils",
              ).getAttachmentDataFromFile(n.mediaFile)) != null
                ? a
                : null;
            }
            if (t.msgId == null) return null;
            var i = yield w(t.msgId, t.broadcastJid);
            if (i == null) return null;
            var l = o("WAWebMsgCollection").MsgCollection.get(i.id);
            if (l == null) {
              var s = o("WAWebDBMessageSerialization").messageFromDbRow(i),
                u = o("WAWebMsgCollection").MsgCollection.add([s]);
              l = u[0];
            }
            if (l == null) return null;
            l.mediaData == null &&
              (yield l.downloadMedia({
                downloadEvenIfExpensive: !0,
                isUserInitiated: !0,
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.SEND_TO_CHAT,
              }));
            var c = yield o(
              "WAWebBizBroadcastContextualEntrypointUtils",
            ).getAttachmentDataFromMsg(l);
            if ((c == null ? void 0 : c.file) != null) {
              var d,
                m =
                  (d = yield o(
                    "WAWebBizBroadcastContextualEntrypointUtils",
                  ).getAttachmentDataFromFile(c.file)) != null
                    ? d
                    : null;
              return (
                c.previewUrl != null && URL.revokeObjectURL(c.previewUrl),
                m
              );
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
        })),
        H.apply(this, arguments)
      );
    }
    ((l.getThumbnailUrl = v),
      (l.deriveCampaignStatus = E),
      (l.getDisplayMessageBody = T),
      (l.resolveCampaignSentAtMs = $),
      (l.lookupCampaignMessage = w),
      (l.filterCampaignsByDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).filterCampaignsByDevice),
      (l.getAllRawCampaignsForCurrentDevice = o(
        "WAWebBizBroadcastCampaignAPI",
      ).getAllRawCampaignsForCurrentDevice),
      (l.loadBroadcastCampaigns = B),
      (l.fetchCampaignMediaContext = q),
      (l.resolveAttachmentDataForCampaign = V));
  },
  98,
);
