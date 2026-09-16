__d(
  "WAWebCloudApiSignalLogger",
  [
    "WAWebABProps",
    "WAWebCloudApiSignalEventWamEvent",
    "WAWebHandleMsgTypes.flow",
    "WAWebMmSignalSharingModelUtils",
    "WAWebWamEnumCloudApiSignalType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.carouselCardIndex,
        n = e.chat,
        r = e.ctaAction,
        a = e.ctaButtonIndex,
        i = e.msg,
        l = e.templateType;
      o("WAWebABProps").getABPropConfigValue(
        "wa_biz_payment_template_click_signals",
      ) &&
        s({
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
    function s(e) {
      var t,
        n,
        r = e.carouselCardIndex,
        a = e.chat,
        i = e.ctaButtonIndex,
        l = e.msg,
        s = e.signalType,
        u = e.templateFields;
      if (
        !(
          ((t = a.contact) == null || (t = t.privacyMode) == null
            ? void 0
            : t.hostStorage) !==
            o("WAWebHandleMsgTypes.flow").HostStorageEnumType.Facebook ||
          o("WAWebMmSignalSharingModelUtils").isDisclosureEnabledForMsg(l)
        )
      ) {
        var c =
          (n = o(
            "WAWebMmSignalSharingModelUtils",
          ).getMmSignalSharingExpirationWindowItem({ chat: a, msgId: l.id })) ==
          null
            ? void 0
            : n.undisclosedToken;
        c != null &&
          new (o(
            "WAWebCloudApiSignalEventWamEvent",
          ).CloudApiSignalEventWamEvent)(
            babelHelpers.extends(
              {
                cloudApiSignalCarouselCardIndex: r,
                cloudApiSignalCtaButtonIndex: i,
                cloudApiSignalData: c,
                cloudApiSignalType: s,
              },
              u,
            ),
          ).commit();
      }
    }
    l.logCloudApiPaymentTemplateClick = e;
  },
  98,
);
