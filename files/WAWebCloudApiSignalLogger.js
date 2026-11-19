__d(
  "WAWebCloudApiSignalLogger",
  [
    "WAWebABProps",
    "WAWebCloudApiSignalEventWamEvent",
    "WAWebHandleMsgTypes",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebMmSignalSharingModelUtils",
    "WAWebWamEnumCloudApiSignalType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "third_party";
    function s(e) {
      var t = e.carouselCardIndex,
        n = e.chat,
        r = e.ctaAction,
        a = e.ctaButtonIndex,
        i = e.msg,
        l = e.templateType;
      d({
        abPropName: "wa_biz_payment_template_click_signals",
        carouselCardIndex: t,
        chat: n,
        ctaButtonIndex: a,
        msg: i,
        signalType: o("WAWebWamEnumCloudApiSignalType").CLOUD_API_SIGNAL_TYPE
          .PAYMENT_TEMPLATE_CLICK,
        templateFields: {
          cloudApiSignalCtaAction: r,
          cloudApiSignalTemplateType: l,
        },
      });
    }
    function u(e) {
      var t = e.carouselCardIndex,
        n = e.chat,
        r = e.ctaButtonIndex,
        a = e.msg;
      d({
        abPropName: "wa_biz_url_cta_click_signals",
        carouselCardIndex: t,
        chat: n,
        ctaButtonIndex: r,
        msg: a,
        signalType: o("WAWebWamEnumCloudApiSignalType").CLOUD_API_SIGNAL_TYPE
          .URL_CTA_CLICK,
      });
    }
    function c(e) {
      var t = e.chat,
        n = e.msg;
      return m({ chat: t, msg: n }) != null;
    }
    function d(e) {
      var t = e.abPropName,
        n = e.carouselCardIndex,
        r = e.chat,
        a = e.ctaButtonIndex,
        i = e.msg,
        l = e.signalType,
        s = e.templateFields,
        u = m({ chat: r, msg: i });
      u == null ||
        !o("WAWebABProps").getABPropConfigValue(t) ||
        new (o("WAWebCloudApiSignalEventWamEvent").CloudApiSignalEventWamEvent)(
          babelHelpers.extends(
            {
              cloudApiSignalCarouselCardIndex: n,
              cloudApiSignalCtaButtonIndex: a,
              cloudApiSignalData: u,
              cloudApiSignalType: l,
            },
            s,
          ),
        ).commit();
    }
    function m(t) {
      var n,
        r,
        a = t.chat,
        i = t.msg;
      return i.id.fromMe ||
        i.sourceType !== e ||
        ((n = a.contact) == null || (n = n.privacyMode) == null
          ? void 0
          : n.hostStorage) !==
          o("WAWebHandleMsgTypes").HostStorageEnumType.Facebook ||
        o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(i) ||
        !o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled()
        ? null
        : (r = a.mmSignalSharingExpirationWindow) == null ||
            (r = r.find(function (e) {
              return e.messageId.id === i.id.id;
            })) == null
          ? void 0
          : r.undisclosedToken;
    }
    ((l.logCloudApiPaymentTemplateClick = s),
      (l.logCloudApiUrlCtaClick = u),
      (l.isCloudApiNativeClickMessage = c));
  },
  98,
);
