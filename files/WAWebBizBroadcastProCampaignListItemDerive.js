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
    "err",
    "getErrorSafe",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1e3,
      c = {
        IMAGE: {
          fallbackMimetype: o("WAWebMimeTypes").IMAGE_MIMES,
          mediaType: o("WAWebMsgType").MSG_TYPE.IMAGE,
        },
        VIDEO: {
          fallbackMimetype: "video/mp4",
          mediaType: o("WAWebMsgType").MSG_TYPE.VIDEO,
        },
      };
    function d(e, t) {
      if (e == null)
        throw r("err")("BB Pro campaign is missing broadcast_insights");
      if (t == null)
        throw r("err")(
          "BB Pro campaign broadcast_insights is missing start_time",
        );
      return { insights: e, startTime: t };
    }
    function m(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s = d(
          e.broadcast_insights,
          (t = e.broadcast_insights) == null ? void 0 : t.start_time,
        ),
        c = s.insights,
        m = s.startTime,
        f = o("WAWebBizBroadcastProInsightMetrics").deriveProInsightMetrics({
          ads_delivered: c.ads_delivered,
          cta_url_clicks: c.cta_url_clicks,
          first_customer_reply: c.first_customer_reply,
          quick_reply_clicks: c.quick_reply_clicks,
          read: c.read,
          sent: c.sent,
        }),
        h = m * u,
        y = (n = e.campaign_name) != null ? n : e.id,
        C = g(c.template),
        b = C.attachmentData,
        v = C.buttonData,
        S = C.message,
        R = (r = e.delivery_status_info) == null ? void 0 : r.status,
        L = E(R),
        k = c.currency;
      return {
        amountSpent: c.ads_amount_spent,
        attachmentData: b,
        audienceName: c.customer_list_name,
        broadcastJid: o("WAJids").toBroadcastJid(e.id),
        budget: p(c.lifetime_budget_long, k),
        campaignId: e.id,
        campaignName: y,
        createdTimestamp: h,
        ctaButtonData: v,
        currency: k,
        customReplyClickCount: f.customReplyClickCount,
        deliveredCount: f.deliveredCount,
        hsmTemplateId:
          (a = e.delivery_status_info) == null || (a = a.extra_data) == null
            ? void 0
            : a.template_id,
        isProCampaign: !0,
        lastUpdatedTimestampMs: null,
        lifecycleStatus: c.status,
        maxPrice: _(c.bid_amount_long, k),
        messageBody: S,
        msgType: null,
        rawDeliveryStatus: R,
        readRate: {
          count: f.readCount,
          percentage: (i = f.readRatePercentage) != null ? i : 0,
        },
        readRatePercentage: f.readRatePercentage,
        recipientCount: f.sentCount,
        replyRate: {
          count: f.replyCount,
          percentage: (l = f.replyRatePercentage) != null ? l : 0,
        },
        replyRatePercentage: f.replyRatePercentage,
        scheduledTimestamp: String(L) === "SCHEDULED" ? h : null,
        sentAt: h,
        status: L,
        statusSource: "PRO",
        websiteClickCount: f.websiteClickCount,
      };
    }
    function p(e, t) {
      return e == null || t == null
        ? null
        : o("WAWebBizBroadcastProCurrencyUtils").smallestUnitToDisplayAmount(
            e,
            t,
          );
    }
    function _(e, t) {
      return e == null || t == null
        ? null
        : o("WAWebBizBroadcastProCurrencyUtils").cpmSmallestUnitToDisplayAmount(
            e,
            t,
          );
    }
    function f(t) {
      try {
        return m(t);
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
    function g(e) {
      return { attachmentData: y(e), buttonData: C(e), message: h(e) };
    }
    function h(e) {
      var t,
        n,
        r = e == null ? void 0 : e.element;
      return r != null && r.trim() !== ""
        ? r
        : (t = b(
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
    function y(e) {
      var t = e == null ? void 0 : e.header_type,
        n = t == null ? null : c[t];
      if (n == null) return null;
      var r = v(e);
      return r == null ? null : S(r, n);
    }
    function C(e) {
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
      var r = b(n.text);
      if (r == null) return null;
      var o = b(n.phone_number),
        a = b(n.url);
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
    function b(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    function v(e) {
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
      return (n = R(r == null ? void 0 : r.header_url)) != null
        ? n
        : R(r == null ? void 0 : r.header_handle);
    }
    function S(e, t) {
      var n = L(e, t),
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
    function R(e) {
      return e == null
        ? void 0
        : e.find(function (e) {
            return e != null && r("WAWebURLUtils").isHttp(e);
          });
    }
    function L(e, t) {
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
    function E(e) {
      var t = e == null ? null : String(e);
      return t === "ACTIVE"
        ? k("ACTIVE")
        : t === "COMPLETED"
          ? k("COMPLETED")
          : t === "IN_DRAFT"
            ? k("IN_DRAFT")
            : t === "IN_REVIEW"
              ? k("IN_REVIEW")
              : t === "NOT_SENDING"
                ? k("NOT_SENDING")
                : t === "OFF"
                  ? k("OFF")
                  : t === "REJECTED"
                    ? k("REJECTED")
                    : t === "SCHEDULED"
                      ? k("SCHEDULED")
                      : t === "SENDING_LIMITED"
                        ? k("SENDING_LIMITED")
                        : I(e);
    }
    function k(e) {
      return r("unsafeCast")(e);
    }
    function I(e) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Encountered missing or unexpected BB Pro delivery status",
              ])),
          )
          .tags("biz-broadcast-pro")
          .sendLogs("bb-pro-campaign-delivery-status-unexpected"),
        k("OFF")
      );
    }
    ((l.requireProCampaignInsights = d),
      (l.deriveListItemFromProCampaign = m),
      (l.tryDeriveListItemFromProCampaign = f),
      (l.getProCampaignMessageData = g));
  },
  98,
);
