__d(
  "WAWebBizBroadcastCampaignDataLayer",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WAWebApiMessageInfoStore",
    "WAWebAttachMediaCollection",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignMsgKeyUtils",
    "WAWebBizBroadcastInsightsStorageUtils",
    "WAWebBizBroadcastMediaProcessor",
    "WAWebBizBroadcastRateUtils",
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
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a,
            i,
            l,
            s,
            u,
            c = t == null ? void 0 : t.mediaFile;
          if (c != null) {
            var d = new (r("WAWebAttachMediaCollection"))({
                chatParticipantCount: 1,
              }),
              m = [{ file: c }];
            yield d.processAttachments(
              m,
              void 0,
              o("WAWebBizBroadcastMediaProcessor").SUPPORTED_MEDIA_TYPES,
              1,
            );
            var p = d.getPreviewableMedias(),
              _ = p[0];
            return _ == null
              ? null
              : {
                  fileExt: _.fileExt,
                  fileName: _.filename,
                  fileSize: _.filesize,
                  mediaType: _.type,
                  mimetype: _.mimetype,
                  pageCount: _.documentPageCount,
                  previewSize: _.fullPreviewSize,
                  previewUrl: _.fullPreview,
                };
          }
          if (e == null) return null;
          var f = o("WAWebDBMessageSerialization").messageFromDbRow(e);
          if (f.mimetype == null) return null;
          var g = f.type,
            y = f.mimetype,
            C = (n = e.filename) != null ? n : "",
            b = (a = e.size) != null ? a : 0,
            v = o("WAWebFileUtils").getFileExtension(C),
            S = (i = e.pageCount) != null ? i : 0,
            R = {
              height: (l = e.height) != null ? l : 0,
              width: (s = e.width) != null ? s : 0,
            },
            L = (u = yield h(e)) != null ? u : "";
          return {
            fileExt: v,
            fileName: C,
            fileSize: b,
            mediaType: g,
            mimetype: y,
            pageCount: S,
            previewSize: R,
            previewUrl: L,
          };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebImageUtils").generateVideoThumbsAndDuration({
              debugHint: "downloadVideoThumbnail",
              file: e,
              maxDimensions: [o("WAWebMediaConstants").VIDEO_THUMB_MAX_EDGE],
            }),
            n = t.thumbs,
            r = n[0];
          return r.url;
        })),
        b.apply(this, arguments)
      );
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
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[getCTAButtonData] Error parsing CTA button JSON from pendingBroadcast",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("business-broadcast-cta-parse-error");
        }
        return null;
      }
      if (!S(t) || t == null) return null;
      var d = o("WAWebDBMessageSerialization").messageFromDbRow(t),
        m =
          (a = d.interactivePayload) == null || (a = a.buttons) == null
            ? void 0
            : a.at(0),
        p = m == null ? void 0 : m.name,
        _ = m == null ? void 0 : m.buttonParamsJson;
      if (p == null || _ == null) return null;
      try {
        var f = JSON.parse(_);
        return p === "cta_url"
          ? {
              displayText: f.display_text,
              linkTrackingEnabled: f.link_tracking_enabled,
              type: "cta_url",
              url: f.url,
            }
          : p === "cta_call"
            ? {
                displayText: f.display_text,
                phoneNumber: f.phone_number,
                type: "cta_call",
              }
            : p === "quick_reply"
              ? { displayText: f.display_text, type: "quick_reply" }
              : null;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:campaign-data] Error parsing CTA button JSON data for msg ",
                  "",
                ])),
              d.id,
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
          i = o("WAWebDBMessageSerialization").messageFromDbRow(e),
          l = (n = i.mimetype) != null ? n : "",
          s =
            ((r = o("WAWebMmsMediaTypes").getValidMimeTypes(
              o("WAWebMsgType").MSG_TYPE.IMAGE,
            )) == null
              ? void 0
              : r.has(l)) === !0,
          u = S(e),
          c = o("WAWebMediaMessageGetValidatedProperties").isVideoMimeType(l),
          d = i.type === o("WAWebMsgType").MSG_TYPE.STICKER,
          m = i.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT,
          p = s || c || d || m;
        if (p || u) {
          var _;
          return (_ = i == null ? void 0 : i.caption) != null ? _ : "";
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
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i,
            l,
            s,
            c,
            d,
            m,
            p,
            g,
            h,
            y,
            C = o("WAJids").toBroadcastJid(e.broadcastJid),
            b = o("WAWebWidFactory").createWid(e.broadcastJid),
            S = o("WAWebChatCollection").ChatCollection.get(b),
            T = (i = t.get(e.campaignId)) != null ? i : null,
            x = yield (_ || (_ = n("Promise"))).all([
              e.msgId != null
                ? D(e.msgId, e.broadcastJid)
                : (_ || (_ = n("Promise"))).resolve(null),
              I(e),
            ]),
            $ = x[0],
            P = x[1],
            N =
              $ != null
                ? o("WAWebDBMessageSerialization").messageFromDbRow($)
                : null,
            M = N == null ? void 0 : N.type;
          if (e.deviceId !== a && e.msgId != null && $ == null)
            throw new Error(
              o("WAWebBroadcastConsts").CAMPAIGN_MSG_UNAVAILABLE_ERROR,
            );
          var w = v(e, $),
            A = L($, P),
            F = k($, e.createdTimestamp),
            O = E(S),
            B =
              (l =
                (s = T == null ? void 0 : T.recipientCount) != null
                  ? s
                  : S == null ||
                      (c = S.broadcastMetadata) == null ||
                      (c = c.recipients) == null
                    ? void 0
                    : c.length) != null
                ? l
                : 0,
            W = R($, P),
            q = yield f($, P),
            U = (d = T == null ? void 0 : T.deliveredCount) != null ? d : 0;
          if (
            U === 0 &&
            e.msgId != null &&
            w === o("WAWebBroadcastHomeTypes").BroadcastCampaignStatusValue.SENT
          )
            try {
              var V = o(
                  "WAWebBizBroadcastCampaignMsgKeyUtils",
                ).reconstructCampaignMsgKey(e.msgId, e.broadcastJid),
                H = yield o("WAWebApiMessageInfoStore").queryMsgInfo(V);
              U = H.delivery.length;
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
          var G = (m = e.campaignName) != null ? m : A || "Broadcast Message",
            z = (p = T == null ? void 0 : T.readCount) != null ? p : 0,
            j =
              ((g = T == null ? void 0 : T.repliedCount) != null ? g : 0) +
              ((h = T == null ? void 0 : T.quickReplyCount) != null ? h : 0),
            K = o("WAWebBizBroadcastRateUtils").computeCampaignRates({
              deliveredCount: U,
              readCount: z,
              recipientCount: B,
              repliedCount: j,
            }),
            Q = K.readRate,
            X = K.replyRate;
          return {
            attachmentData: q,
            audienceName: O,
            broadcastJid: C,
            campaignId: e.campaignId,
            campaignName: G,
            ctaButtonData: W,
            deliveredCount: U,
            lastUpdatedTimestampMs:
              (y = T == null ? void 0 : T.lastUpdatedTimestampMs) != null
                ? y
                : null,
            messageBody: A,
            msgType: M,
            readRate: Q,
            recipientCount: B,
            replyRate: X,
            scheduledTimestamp: e.scheduledTimestamp,
            sentAt: F,
            status: w,
          };
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      return e.filter(function (e) {
        return e.status ===
          o("WAWebSchemaBusinessBroadcastCampaign")
            .BusinessBroadcastCampaignStatus.SENT ||
          e.status ===
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.FAILED
          ? !0
          : e.deviceId === t;
      });
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-data] Loading campaigns from biz-broadcast-campaigns table",
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
            l = N(t, i);
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:campaign-data] Found ",
                " total campaigns, ",
                " visible on current device",
              ])),
            t.length,
            l.length,
          );
          var s = yield _.allSettled(
              l.map(function (e) {
                return $(e, a, i);
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
        w.apply(this, arguments)
      );
    }
    ((l.getThumbnailUrl = h),
      (l.deriveCampaignStatus = v),
      (l.getDisplayMessageBody = L),
      (l.filterCampaignsByDevice = N),
      (l.loadBroadcastCampaigns = M));
  },
  98,
);
