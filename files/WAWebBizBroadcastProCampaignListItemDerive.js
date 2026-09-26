__d(
  "WAWebBizBroadcastProCampaignListItemDerive",
  [
    "WAJids",
    "WALogger",
    "WAWebBizBroadcastProCurrencyUtils",
    "WAWebBizBroadcastProInsightMetrics",
    "WAWebFileUtils",
    "WAWebMimeTypes",
    "WAWebMsgType",
    "WAWebURLUtils",
    "XFBWABBProCampaignDisplayStatus.facebook",
    "err",
    "getErrorSafe",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1e3,
      m = {
        IMAGE: {
          fallbackMimetype: o("WAWebMimeTypes").IMAGE_MIMES,
          mediaType: o("WAWebMsgType").MSG_TYPE.IMAGE,
        },
        VIDEO: {
          fallbackMimetype: "video/mp4",
          mediaType: o("WAWebMsgType").MSG_TYPE.VIDEO,
        },
      };
    function p(e, t) {
      if (e == null)
        throw r("err")("BB Pro campaign is missing broadcast_insights");
      if (t == null)
        throw r("err")(
          "BB Pro campaign broadcast_insights is missing start_time",
        );
      return { insights: e, startTime: t };
    }
    function _(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s = p(
          e.broadcast_insights,
          (t = e.broadcast_insights) == null ? void 0 : t.start_time,
        ),
        u = s.insights,
        c = s.startTime,
        m = o("WAWebBizBroadcastProInsightMetrics").deriveProInsightMetrics({
          ads_delivered: u.ads_delivered,
          cta_url_clicks: u.cta_url_clicks,
          first_customer_reply: u.first_customer_reply,
          quick_reply_clicks: u.quick_reply_clicks,
          read: u.read,
          sent: u.sent,
        }),
        _ = c * d,
        h = (n = e.campaign_name) != null ? n : e.id,
        C = y(u.template),
        b = C.attachmentData,
        v = C.buttonData,
        S = C.message,
        R = T((r = e.delivery_status_info) == null ? void 0 : r.status),
        L = u.currency;
      return {
        amountSpent: u.ads_amount_spent,
        attachmentData: b,
        audienceName: u.customer_list_name,
        broadcastJid: o("WAJids").toBroadcastJid(e.id),
        budget: f(u.lifetime_budget_long, L),
        campaignId: e.id,
        campaignName: h,
        canStop: e.bb_pro_can_stop === !0,
        createdTimestamp: _,
        ctaButtonData: v,
        currency: L,
        customReplyClickCount: m.customReplyClickCount,
        deliveredCount: m.deliveredCount,
        displayStatus: I(e.bb_pro_display_status),
        hsmTemplateId:
          (a = e.delivery_status_info) == null || (a = a.extra_data) == null
            ? void 0
            : a.template_id,
        isProCampaign: !0,
        lastUpdatedTimestampMs: null,
        maxPrice: g(u.bid_amount_long, L),
        messageBody: S,
        msgType: null,
        readRate: {
          count: m.readCount,
          percentage: (i = m.readRatePercentage) != null ? i : 0,
        },
        readRatePercentage: m.readRatePercentage,
        recipientCount: m.sentCount,
        replyRate: {
          count: m.replyCount,
          percentage: (l = m.replyRatePercentage) != null ? l : 0,
        },
        replyRatePercentage: m.replyRatePercentage,
        scheduledTimestamp: String(R) === "SCHEDULED" ? _ : null,
        sentAt: _,
        status: R,
        statusSource: "PRO",
        websiteClickCount: m.websiteClickCount,
      };
    }
    function f(e, t) {
      return e == null || t == null
        ? null
        : o("WAWebBizBroadcastProCurrencyUtils").smallestUnitToDisplayAmount(
            e,
            t,
          );
    }
    function g(e, t) {
      return e == null || t == null
        ? null
        : o("WAWebBizBroadcastProCurrencyUtils").cpmSmallestUnitToDisplayAmount(
            e,
            t,
          );
    }
    function h(t) {
      try {
        return _(t);
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Skipping malformed BB Pro campaign ",
                  "",
                ])),
              t.id,
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("bb-pro-campaign-list-item-derive-failed"),
          null
        );
      }
    }
    function y(e) {
      return { attachmentData: b(e), buttonData: v(e), message: C(e) };
    }
    function C(e) {
      var t,
        n,
        r = e == null ? void 0 : e.element;
      return r != null && r.trim() !== ""
        ? r
        : (t = S(
              e == null ||
                (n = e.hsm_components) == null ||
                (n = n.find(function (e) {
                  return e.type === "BODY";
                })) == null
                ? void 0
                : n.text,
            )) != null
          ? t
          : "";
    }
    function b(e) {
      var t = e == null ? void 0 : e.header_type,
        n = t == null ? null : m[t];
      if (n == null) return null;
      var r = R(e);
      return r == null ? null : L(r, n);
    }
    function v(e) {
      var t,
        n =
          e == null ||
          (t = e.hsm_components) == null ||
          (t = t.find(function (e) {
            return e.type === "BUTTONS";
          })) == null ||
          (t = t.buttons) == null
            ? void 0
            : t[0];
      if (n == null) return null;
      var r = S(n.text);
      if (r == null) return null;
      var o = S(n.phone_number),
        a = S(n.url);
      return n.type === "QUICK_REPLY"
        ? { displayText: r, type: "quick_reply" }
        : n.type === "URL"
          ? a == null
            ? null
            : {
                displayText: r,
                linkTrackingEnabled: !1,
                type: "cta_url",
                url: a,
              }
          : n.type === "PHONE_NUMBER"
            ? o == null
              ? null
              : { displayText: r, phoneNumber: o, type: "cta_call" }
            : null;
    }
    function S(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    function R(e) {
      var t,
        n,
        r =
          e == null ||
          (t = e.hsm_components) == null ||
          (t = t.find(function (e) {
            return e.type === "HEADER";
          })) == null
            ? void 0
            : t.example;
      return (n = E(r == null ? void 0 : r.header_url)) != null
        ? n
        : E(r == null ? void 0 : r.header_handle);
    }
    function L(e, t) {
      var n = k(e, t),
        r = n.fileExt,
        o = n.mimetype;
      return {
        fileExt: r,
        fileName: "",
        fileSize: null,
        mediaType: t.mediaType,
        mimetype: o,
        pageCount: 0,
        previewSize: { height: 0, width: 0 },
        previewUrl: e,
      };
    }
    function E(e) {
      return e == null
        ? void 0
        : e.find(function (e) {
            return e != null && r("WAWebURLUtils").isHttp(e);
          });
    }
    function k(e, t) {
      var n = e;
      try {
        n = new URL(e).pathname;
      } catch (t) {
        n = e;
      }
      var r = o("WAWebFileUtils").getFileExtension(n),
        a =
          r == null
            ? null
            : o("WAWebMimeTypes").EXT_TO_MIME == null
              ? void 0
              : o("WAWebMimeTypes").EXT_TO_MIME[r];
      return {
        fileExt: r,
        mimetype:
          a != null && a.startsWith(t.mediaType + "/") ? a : t.fallbackMimetype,
      };
    }
    function I(e) {
      if (e == null)
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "BB Pro campaign is missing its display status",
                ])),
            )
            .tags("biz-broadcast-pro")
            .sendLogs("bb-pro-campaign-display-status-missing"),
          null
        );
      var t = r("XFBWABBProCampaignDisplayStatus.facebook").cast(String(e));
      return (
        t == null &&
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "Encountered unexpected BB Pro display status",
                ])),
            )
            .tags("biz-broadcast-pro")
            .sendLogs("bb-pro-campaign-display-status-unexpected"),
        t != null ? t : null
      );
    }
    function T(e) {
      var t = e == null ? null : String(e);
      return t === "ACTIVE"
        ? D("ACTIVE")
        : t === "COMPLETED"
          ? D("COMPLETED")
          : t === "IN_DRAFT"
            ? D("IN_DRAFT")
            : t === "IN_REVIEW"
              ? D("IN_REVIEW")
              : t === "NOT_SENDING"
                ? D("NOT_SENDING")
                : t === "OFF"
                  ? D("OFF")
                  : t === "REJECTED"
                    ? D("REJECTED")
                    : t === "SCHEDULED"
                      ? D("SCHEDULED")
                      : t === "SENDING_LIMITED"
                        ? D("SENDING_LIMITED")
                        : x(e);
    }
    function D(e) {
      return r("unsafeCast")(e);
    }
    function x(e) {
      return (
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Encountered missing or unexpected BB Pro delivery status",
              ])),
          )
          .tags("biz-broadcast-pro")
          .sendLogs("bb-pro-campaign-delivery-status-unexpected"),
        D("OFF")
      );
    }
    ((l.requireProCampaignInsights = p),
      (l.deriveListItemFromProCampaign = _),
      (l.tryDeriveListItemFromProCampaign = h),
      (l.getProCampaignMessageData = y),
      (l.normalizeCampaignDisplayStatus = I));
  },
  98,
);
