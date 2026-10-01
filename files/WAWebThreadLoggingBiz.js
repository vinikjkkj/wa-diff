__d(
  "WAWebThreadLoggingBiz",
  [
    "Promise",
    "WALogger",
    "WAWebThreadInteractionDataBizWamEvent",
    "WAWebThreadLoggingFalco",
    "WAWebWamEnumBizCatalogType",
    "WamThreadInteractionDataBizFalcoEvent",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [];
          try {
            (t.forEach(function (e) {
              if (a) {
                i.push(d(e));
                return;
              }
              var t = new (o(
                "WAWebThreadInteractionDataBizWamEvent",
              ).ThreadInteractionDataBizWamEvent)(m(e));
              t.commit();
            }),
              yield (s || (s = n("Promise"))).all(i));
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = m(e);
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
    function m(e) {
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
        bizCatalogType: p(t.bizCatalogType),
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
    function p(e) {
      if (e === "shop")
        return o("WAWebWamEnumBizCatalogType").BIZ_CATALOG_TYPE.SHOPS;
      if (e === "native")
        return o("WAWebWamEnumBizCatalogType").BIZ_CATALOG_TYPE.NATIVE;
    }
    ((l.ThreadInteractionBizWamTrigger = u),
      (l.logThreadInteractionBizFalcoEvent = d));
  },
  98,
);
