__d(
  "WAWebThreadLoggingBiz",
  [
    "WALogger",
    "WAWebThreadInteractionDataBizWamEvent",
    "WAWebWamEnumBizCatalogType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      if (e === "shop")
        return o("WAWebWamEnumBizCatalogType").BIZ_CATALOG_TYPE.SHOPS;
      if (e === "native")
        return o("WAWebWamEnumBizCatalogType").BIZ_CATALOG_TYPE.NATIVE;
    }
    function u(t) {
      try {
        t.forEach(function (e) {
          var t = e.event,
            n = e.threadDs,
            r = e.threadId,
            a = {
              threadDs: n,
              threadId: r,
              bizCatalogType: s(t.bizCatalogType),
              chatOrigins: t.chatOrigins,
              commerceMsgsReceived: t.commerceMsgsReceived,
              commerceMsgsSent: t.commerceMsgsSent,
              isCommerceViewed: t.isCommerceViewed,
              isCtaOnPdpClicked: t.isCtaOnPdpClicked,
              isUserAgent: t.isUserAgent,
              ordersSent: t.ordersSent,
              pdpInquiriesSent: t.pdpInquiriesSent,
              pdpViews: t.pdpViews,
            },
            i = new (o(
              "WAWebThreadInteractionDataBizWamEvent",
            ).ThreadInteractionDataBizWamEvent)(a);
          i.commit();
        });
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
    l.ThreadInteractionBizWamTrigger = u;
  },
  98,
);
