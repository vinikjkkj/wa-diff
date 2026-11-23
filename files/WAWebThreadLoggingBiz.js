__d(
  "WAWebThreadLoggingBiz",
  [
    "WALogger",
    "WAWebThreadInteractionDataBizWamEvent",
    "WAWebThreadLoggingFalco",
    "WAWebWamEnumBizCatalogType",
    "WamThreadInteractionDataBizFalcoEvent",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      var a = [];
      try {
        (t.forEach(function (e) {
          if (n) {
            a.push(u(e));
            return;
          }
          var t = new (o(
            "WAWebThreadInteractionDataBizWamEvent",
          ).ThreadInteractionDataBizWamEvent)(c(e));
          t.commit();
        }),
          await Promise.all(a));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "ctlv2: error uploading Biz WAM event",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("thread-logging-biz-upload-failure");
      }
    }
    function u(e) {
      var t = c(e);
      return o("WAWebThreadLoggingFalco").logThreadInteractionFalcoEvent(
        r("WamThreadInteractionDataBizFalcoEvent"),
        function () {
          return {
            thread_ds: t.threadDs,
            thread_id: t.threadId,
            biz_ai_suggested_replies_seen: t.bizAiSuggestedRepliesSeen,
            biz_ai_suggested_replies_sent_with_edits:
              t.bizAiSuggestedRepliesSentWithEdits,
            biz_ai_suggested_replies_sent_without_edits:
              t.bizAiSuggestedRepliesSentWithoutEdits,
            biz_catalog_type: t.bizCatalogType,
            chat_origins: t.chatOrigins,
            commerce_msgs_received: t.commerceMsgsReceived,
            commerce_msgs_sent: t.commerceMsgsSent,
            is_commerce_viewed: t.isCommerceViewed,
            is_cta_on_pdp_clicked: t.isCtaOnPdpClicked,
            is_user_agent: t.isUserAgent,
            orders_sent: t.ordersSent,
            pdp_inquiries_sent: t.pdpInquiriesSent,
            pdp_views: t.pdpViews,
          };
        },
      );
    }
    function c(e) {
      var t = e.event,
        n = e.threadDs,
        r = e.threadId;
      return {
        threadDs: n,
        threadId: r,
        bizAiSuggestedRepliesSeen: t.bizAiSuggestedRepliesSeen,
        bizAiSuggestedRepliesSentWithEdits:
          t.bizAiSuggestedRepliesSentWithEdits,
        bizAiSuggestedRepliesSentWithoutEdits:
          t.bizAiSuggestedRepliesSentWithoutEdits,
        bizCatalogType: d(t.bizCatalogType),
        chatOrigins: t.chatOrigins,
        commerceMsgsReceived: t.commerceMsgsReceived,
        commerceMsgsSent: t.commerceMsgsSent,
        isCommerceViewed: t.isCommerceViewed,
        isCtaOnPdpClicked: t.isCtaOnPdpClicked,
        isUserAgent: t.isUserAgent,
        ordersSent: t.ordersSent,
        pdpInquiriesSent: t.pdpInquiriesSent,
        pdpViews: t.pdpViews,
      };
    }
    function d(e) {
      if (e === "shop")
        return o("WAWebWamEnumBizCatalogType").BIZ_CATALOG_TYPE.SHOPS;
      if (e === "native")
        return o("WAWebWamEnumBizCatalogType").BIZ_CATALOG_TYPE.NATIVE;
    }
    ((l.ThreadInteractionBizWamTrigger = s),
      (l.logThreadInteractionBizFalcoEvent = u));
  },
  98,
);
