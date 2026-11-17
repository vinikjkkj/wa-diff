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
      },
      p = ["BODY", "HEADER", "BUTTONS"];
    function _(e, t) {
      if (e == null)
        throw r("err")("BB Pro campaign is missing broadcast_insights");
      if (t == null)
        throw r("err")(
          "BB Pro campaign broadcast_insights is missing start_time",
        );
      return { insights: e, startTime: t };
    }
    function f(e) {
      var t,
        n,
        r,
        a,
        i,
        l,
        s,
        u = _(
          e.broadcast_insights,
          (t = e.broadcast_insights) == null ? void 0 : t.start_time,
        ),
        c = u.insights,
        m = u.startTime,
        p = o("WAWebBizBroadcastProInsightMetrics").deriveProInsightMetrics({
          ads_delivered: c.ads_delivered,
          cta_url_clicks: c.cta_url_clicks,
          first_customer_reply: c.first_customer_reply,
          quick_reply_clicks: c.quick_reply_clicks,
          read: c.read,
          read_rate: c.read_rate,
          reply_rate: c.reply_rate,
          sent: c.sent,
        }),
        f = m * d,
        y = (n = e.campaign_name) != null ? n : e.id,
        b = C(c.template),
        v = b.attachmentData,
        S = b.buttonData,
        R = b.message,
        L = N((r = e.delivery_status_info) == null ? void 0 : r.status),
        E = P(e.bb_pro_display_status),
        k = String(E) === "SCHEDULED",
        I = c.currency;
      return {
        amountSpent: c.ads_amount_spent,
        attachmentData: v,
        audienceName: c.customer_list_name,
        broadcastJid: o("WAJids").toBroadcastJid(e.id),
        budget: g(c.lifetime_budget_long, I),
        campaignId: e.id,
        campaignName: y,
        canStop: e.bb_pro_can_stop === !0,
        createdTimestamp: f,
        ctaButtonData: S,
        currency: I,
        customAudienceId: c.custom_audience_id,
        customReplyClickCount: p.customReplyClickCount,
        deliveredCount: p.deliveredCount,
        deliveredCountAvailable:
          ((a = c.ads_delivered) == null ? void 0 : a.count) != null,
        displayStatus: E,
        hsmTemplateId:
          (i = e.delivery_status_info) == null || (i = i.extra_data) == null
            ? void 0
            : i.template_id,
        isProCampaign: !0,
        lastUpdatedTimestampMs: null,
        maxPrice: h(c.bid_amount_long, I),
        messageBody: R,
        msgType: null,
        readRate: {
          count: p.readCount,
          percentage: (l = p.readRatePercentage) != null ? l : 0,
        },
        readRatePercentage: p.readRatePercentage,
        recipientCount: null,
        replyRate: {
          count: p.replyCount,
          percentage: (s = p.replyRatePercentage) != null ? s : 0,
        },
        replyRatePercentage: p.replyRatePercentage,
        scheduledTimestamp: k ? f : null,
        sentAt: f,
        sentCount: p.sentCount,
        status: L,
        statusSource: "PRO",
        websiteClickCount: p.websiteClickCount,
      };
    }
    function g(e, t) {
      return e == null || t == null
        ? null
        : o("WAWebBizBroadcastProCurrencyUtils").smallestUnitToDisplayAmount(
            e,
            t,
          );
    }
    function h(e, t) {
      return e == null || t == null
        ? null
        : o("WAWebBizBroadcastProCurrencyUtils").cpmSmallestUnitToDisplayAmount(
            e,
            t,
          );
    }
    function y(t) {
      try {
        return f(t);
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
    function C(e) {
      return { attachmentData: E(e), buttonData: k(e), message: L(e) };
    }
    function b(e) {
      var t, n;
      if (e == null) throw r("err")("BB Pro source content is unavailable");
      var o = v(e),
        a = S(e, o),
        i = R(e),
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
    function v(e) {
      var t,
        n = (t = e.hsm_components) != null ? t : [],
        o = new Set();
      for (var a of n) {
        var i = a.type;
        if (i == null || !p.includes(i) || o.has(i))
          throw r("err")("BB Pro source contains unsupported components");
        o.add(i);
      }
      return o;
    }
    function S(e, t) {
      var n = e.header_type,
        o = n === "IMAGE" || n === "VIDEO";
      if ((n != null && n !== "NONE" && !o) || (t.has("HEADER") && !o))
        throw r("err")("BB Pro source contains an unsupported header");
      var a = E(e);
      if (o && a == null) throw r("err")("BB Pro source media is unavailable");
      return a;
    }
    function R(e) {
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
    function L(e) {
      var t,
        n,
        r = e == null ? void 0 : e.element;
      return r != null && r.trim() !== ""
        ? r
        : (t = I(
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
    function E(e) {
      var t = e == null ? void 0 : e.header_type,
        n = t == null ? null : m[t];
      if (n == null) return null;
      var r = T(e);
      return r == null ? null : D(r, n);
    }
    function k(e) {
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
      var r = I(n.text);
      if (r == null) return null;
      var o = I(n.phone_number),
        a = I(n.url);
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
    function I(e) {
      var t = e == null ? void 0 : e.trim();
      return t == null || t === "" ? null : t;
    }
    function T(e) {
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
      return (n = x(r == null ? void 0 : r.header_url)) != null
        ? n
        : x(r == null ? void 0 : r.header_handle);
    }
    function D(e, t) {
      var n = $(e, t),
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
    function x(e) {
      return e == null
        ? void 0
        : e.find(function (e) {
            return e != null && r("WAWebURLUtils").isHttp(e);
          });
    }
    function $(e, t) {
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
    function P(e) {
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
    function N(e) {
      var t = e == null ? null : String(e);
      return t === "ACTIVE"
        ? M("ACTIVE")
        : t === "COMPLETED"
          ? M("COMPLETED")
          : t === "IN_DRAFT"
            ? M("IN_DRAFT")
            : t === "IN_REVIEW"
              ? M("IN_REVIEW")
              : t === "NOT_SENDING"
                ? M("NOT_SENDING")
                : t === "OFF"
                  ? M("OFF")
                  : t === "REJECTED"
                    ? M("REJECTED")
                    : t === "SCHEDULED"
                      ? M("SCHEDULED")
                      : t === "SENDING_LIMITED"
                        ? M("SENDING_LIMITED")
                        : w(e);
    }
    function M(e) {
      return r("unsafeCast")(e);
    }
    function w(e) {
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
        M("OFF")
      );
    }
    ((l.requireProCampaignInsights = _),
      (l.deriveListItemFromProCampaign = f),
      (l.tryDeriveListItemFromProCampaign = y),
      (l.getProCampaignMessageData = C),
      (l.getProCampaignDuplicateMessageData = b),
      (l.normalizeCampaignDisplayStatus = P));
  },
  98,
);
