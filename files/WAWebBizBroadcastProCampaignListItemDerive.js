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
        s,
        u = p(
          e.broadcast_insights,
          (t = e.broadcast_insights) == null ? void 0 : t.start_time,
        ),
        c = u.insights,
        m = u.startTime,
        _ = o("WAWebBizBroadcastProInsightMetrics").deriveProInsightMetrics({
          ads_delivered: c.ads_delivered,
          cta_url_clicks: c.cta_url_clicks,
          first_customer_reply: c.first_customer_reply,
          quick_reply_clicks: c.quick_reply_clicks,
          read: c.read,
          read_rate: c.read_rate,
          reply_rate: c.reply_rate,
          sent: c.sent,
        }),
        h = m * d,
        C = (n = e.campaign_name) != null ? n : e.id,
        b = y(c.template),
        v = b.attachmentData,
        S = b.buttonData,
        R = b.message,
        L = P((r = e.delivery_status_info) == null ? void 0 : r.status),
        E = $(e.bb_pro_display_status),
        k = String(E) === "SCHEDULED",
        I = c.currency;
      return {
        amountSpent: c.ads_amount_spent,
        attachmentData: v,
        audienceName: c.customer_list_name,
        broadcastJid: o("WAJids").toBroadcastJid(e.id),
        budget: f(c.lifetime_budget_long, I),
        campaignId: e.id,
        campaignName: C,
        canStop: e.bb_pro_can_stop === !0,
        createdTimestamp: h,
        ctaButtonData: S,
        currency: I,
        customAudienceId: c.custom_audience_id,
        customReplyClickCount: _.customReplyClickCount,
        deliveredCount: _.deliveredCount,
        deliveredCountAvailable:
          ((a = c.ads_delivered) == null ? void 0 : a.count) != null,
        displayStatus: E,
        hsmTemplateId:
          (i = e.delivery_status_info) == null || (i = i.extra_data) == null
            ? void 0
            : i.template_id,
        isProCampaign: !0,
        lastUpdatedTimestampMs: null,
        maxPrice: g(c.bid_amount_long, I),
        messageBody: R,
        msgType: null,
        readRate: {
          count: _.readCount,
          percentage: (l = _.readRatePercentage) != null ? l : 0,
        },
        readRatePercentage: _.readRatePercentage,
        recipientCount: null,
        replyRate: {
          count: _.replyCount,
          percentage: (s = _.replyRatePercentage) != null ? s : 0,
        },
        replyRatePercentage: _.replyRatePercentage,
        scheduledTimestamp: k ? h : null,
        sentAt: h,
        sentCount: _.sentCount,
        status: L,
        statusSource: "PRO",
        websiteClickCount: _.websiteClickCount,
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
      return { attachmentData: L(e), buttonData: E(e), message: R(e) };
    }
    function C(e) {
      var t, n;
      if (e == null) throw r("err")("BB Pro source content is unavailable");
      var o = b(e),
        a = v(e, o),
        i = S(e),
        l = e.element,
        s =
          l != null && l.trim() !== ""
            ? l
            : (t =
                  (n = e.hsm_components) == null ||
                  (n = n.find(function (e) {
                    return e.type === "BODY";
                  })) == null
                    ? void 0
                    : n.text) != null
              ? t
              : "";
      if (s.trim() === "" && a == null)
        throw r("err")("BB Pro source content is unavailable");
      return { attachmentData: a, buttonData: i, message: s };
    }
    function b(e) {
      var t,
        n = (t = e.hsm_components) != null ? t : [],
        o = new Set();
      for (var a of n) {
        var i = a.type;
        if (i == null || !["BODY", "HEADER", "BUTTONS"].includes(i) || o.has(i))
          throw r("err")("BB Pro source contains unsupported components");
        o.add(i);
      }
      return o;
    }
    function v(e, t) {
      var n = e.header_type,
        o = n === "IMAGE" || n === "VIDEO";
      if ((n != null && n !== "NONE" && !o) || (t.has("HEADER") && !o))
        throw r("err")("BB Pro source contains an unsupported header");
      var a = L(e);
      if (o && a == null) throw r("err")("BB Pro source media is unavailable");
      return a;
    }
    function S(e) {
      var t,
        n,
        o =
          (t =
            (n = e.hsm_components) == null ||
            (n = n.find(function (e) {
              return e.type === "BUTTONS";
            })) == null
              ? void 0
              : n.buttons) != null
            ? t
            : [];
      if (o.length > 1)
        throw r("err")("BB Pro source contains multiple buttons");
      var a = o[0];
      if (a == null) return null;
      var i = a.text,
        l = a.url;
      if (i == null || i.trim() === "")
        throw r("err")("BB Pro source button label is unavailable");
      e: {
        if (a.type === "QUICK_REPLY")
          return { displayText: i, type: "quick_reply" };
        if (a.type === "URL" && l != null && r("WAWebURLUtils").isHttp(l))
          return {
            displayText: i,
            linkTrackingEnabled: e.cta_url_link_tracking_opted_out === !1,
            type: "cta_url",
            url: l,
          };
        throw r("err")("BB Pro source button is unsupported or unavailable");
      }
    }
    function R(e) {
      var t,
        n,
        r = e == null ? void 0 : e.element;
      return r != null && r.trim() !== ""
        ? r
        : (t = k(
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
    function L(e) {
      var t = e == null ? void 0 : e.header_type,
        n = t == null ? null : m[t];
      if (n == null) return null;
      var r = I(e);
      return r == null ? null : T(r, n);
    }
    function E(e) {
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
      var r = k(n.text);
      if (r == null) return null;
      var o = k(n.phone_number),
        a = k(n.url);
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
    function k(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    function I(e) {
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
      return (n = D(r == null ? void 0 : r.header_url)) != null
        ? n
        : D(r == null ? void 0 : r.header_handle);
    }
    function T(e, t) {
      var n = x(e, t),
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
    function D(e) {
      return e == null
        ? void 0
        : e.find(function (e) {
            return e != null && r("WAWebURLUtils").isHttp(e);
          });
    }
    function x(e, t) {
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
    function $(e) {
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
    function P(e) {
      var t = e == null ? null : String(e);
      return t === "ACTIVE"
        ? N("ACTIVE")
        : t === "COMPLETED"
          ? N("COMPLETED")
          : t === "IN_DRAFT"
            ? N("IN_DRAFT")
            : t === "IN_REVIEW"
              ? N("IN_REVIEW")
              : t === "NOT_SENDING"
                ? N("NOT_SENDING")
                : t === "OFF"
                  ? N("OFF")
                  : t === "REJECTED"
                    ? N("REJECTED")
                    : t === "SCHEDULED"
                      ? N("SCHEDULED")
                      : t === "SENDING_LIMITED"
                        ? N("SENDING_LIMITED")
                        : M(e);
    }
    function N(e) {
      return r("unsafeCast")(e);
    }
    function M(e) {
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
        N("OFF")
      );
    }
    ((l.requireProCampaignInsights = p),
      (l.deriveListItemFromProCampaign = _),
      (l.tryDeriveListItemFromProCampaign = h),
      (l.getProCampaignMessageData = y),
      (l.getProCampaignDuplicateMessageData = C),
      (l.normalizeCampaignDisplayStatus = $));
  },
  98,
);
