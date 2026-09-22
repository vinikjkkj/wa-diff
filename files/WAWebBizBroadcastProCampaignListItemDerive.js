__d(
  "WAWebBizBroadcastProCampaignListItemDerive",
  [
    "WAJids",
    "WALogger",
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
        l = d(
          e.broadcast_insights,
          (t = e.broadcast_insights) == null ? void 0 : t.start_time,
        ),
        s = l.insights,
        c = l.startTime,
        m = o("WAWebBizBroadcastProInsightMetrics").deriveProInsightMetrics({
          ads_delivered: s.ads_delivered,
          cta_url_clicks: s.cta_url_clicks,
          first_customer_reply: s.first_customer_reply,
          quick_reply_clicks: s.quick_reply_clicks,
          read: s.read,
          sent: s.sent,
        }),
        p = c * u,
        f = (n = e.campaign_name) != null ? n : e.id,
        g = _(s.template),
        h = g.attachmentData,
        y = g.buttonData,
        C = g.message,
        b = (r = e.delivery_status_info) == null ? void 0 : r.status,
        v = R(b);
      return {
        amountSpent: s.ads_amount_spent,
        attachmentData: h,
        audienceName: s.customer_list_name,
        broadcastJid: o("WAJids").toBroadcastJid(e.id),
        campaignId: e.id,
        campaignName: f,
        createdTimestamp: p,
        ctaButtonData: y,
        currency: s.currency,
        customReplyClickCount: m.customReplyClickCount,
        deliveredCount: m.deliveredCount,
        isProCampaign: !0,
        lastUpdatedTimestampMs: null,
        lifecycleStatus: s.status,
        messageBody: C,
        msgType: null,
        rawDeliveryStatus: b,
        readRate: {
          count: m.readCount,
          percentage: (a = m.readRatePercentage) != null ? a : 0,
        },
        readRatePercentage: m.readRatePercentage,
        recipientCount: m.sentCount,
        replyRate: {
          count: m.replyCount,
          percentage: (i = m.replyRatePercentage) != null ? i : 0,
        },
        replyRatePercentage: m.replyRatePercentage,
        scheduledTimestamp: String(v) === "SCHEDULED" ? p : null,
        sentAt: p,
        status: v,
        statusSource: "PRO",
        websiteClickCount: m.websiteClickCount,
      };
    }
    function p(t) {
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
    function _(e) {
      return { attachmentData: g(e), buttonData: h(e), message: f(e) };
    }
    function f(e) {
      var t,
        n,
        r = e == null ? void 0 : e.element;
      return r != null && r.trim() !== ""
        ? r
        : (t = y(
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
    function g(e) {
      var t = e == null ? void 0 : e.header_type,
        n = t == null ? null : c[t];
      if (n == null) return null;
      var r = C(e);
      return r == null ? null : b(r, n);
    }
    function h(e) {
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
      var r = y(n.text);
      if (r == null) return null;
      var o = y(n.phone_number),
        a = y(n.url);
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
    function y(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    function C(e) {
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
      return (n = v(r == null ? void 0 : r.header_url)) != null
        ? n
        : v(r == null ? void 0 : r.header_handle);
    }
    function b(e, t) {
      var n = S(e, t),
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
    function v(e) {
      return e == null
        ? void 0
        : e.find(function (e) {
            return e != null && r("WAWebURLUtils").isHttp(e);
          });
    }
    function S(e, t) {
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
    function R(e) {
      var t = e == null ? null : String(e);
      return t === "ACTIVE"
        ? L("ACTIVE")
        : t === "COMPLETED"
          ? L("COMPLETED")
          : t === "IN_DRAFT"
            ? L("IN_DRAFT")
            : t === "IN_REVIEW"
              ? L("IN_REVIEW")
              : t === "NOT_SENDING"
                ? L("NOT_SENDING")
                : t === "OFF"
                  ? L("OFF")
                  : t === "REJECTED"
                    ? L("REJECTED")
                    : t === "SCHEDULED"
                      ? L("SCHEDULED")
                      : t === "SENDING_LIMITED"
                        ? L("SENDING_LIMITED")
                        : E(e);
    }
    function L(e) {
      return r("unsafeCast")(e);
    }
    function E(e) {
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
        L("OFF")
      );
    }
    ((l.requireProCampaignInsights = d),
      (l.deriveListItemFromProCampaign = m),
      (l.tryDeriveListItemFromProCampaign = p),
      (l.getProCampaignMessageData = _));
  },
  98,
);
