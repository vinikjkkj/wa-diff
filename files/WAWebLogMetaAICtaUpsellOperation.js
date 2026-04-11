__d(
  "WAWebLogMetaAICtaUpsellOperation",
  ["WAWebMetaAiUpsellCtaWamEvent", "WAWebWamEnumMetaAiUpsellCtaSourceType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = new (o("WAWebMetaAiUpsellCtaWamEvent").MetaAiUpsellCtaWamEvent)({
        metaAiUpsellCtaOperation: e,
        metaAiUpsellCtaSource: o("WAWebWamEnumMetaAiUpsellCtaSourceType")
          .META_AI_UPSELL_CTA_SOURCE_TYPE.PERSISTENT_CHAT_BANNER,
      });
      t.commit();
    }
    l.logMetaAICtaUpsellOperation = e;
  },
  98,
);
