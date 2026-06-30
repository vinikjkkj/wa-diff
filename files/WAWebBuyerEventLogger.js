__d(
  "WAWebBuyerEventLogger",
  [
    "P2XFunnelIdGenerator",
    "WAWebBuyerEventAttributes",
    "WAWebStructuredMessageBuyerInteractionWamEvent",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "buyer_order_fs_log";
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.attributes,
            r = t.bizPlatform,
            a = t.interaction,
            i = t.isLoggingEnabled,
            l = t.psFunnelId;
          if (i) {
            var s = new (o("P2XFunnelIdGenerator").P2XFunnelIdGenerator)(l, e),
              u = yield s.genFunnelInfo(),
              c = u.funnel_id,
              d = o("WAWebBuyerEventAttributes").buyerEventAttributesToObject(
                n,
              );
            d.order_funnel_id = c;
            var m = new (o(
              "WAWebStructuredMessageBuyerInteractionWamEvent",
            ).StructuredMessageBuyerInteractionWamEvent)({
              bizPlatform: r,
              messageClass: o("WAWebWamEnumStructuredMessageClass")
                .STRUCTURED_MESSAGE_CLASS.BUTTON_NFM,
              messageClassAttributes: JSON.stringify(d),
              messageInteraction: a,
              messageMediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE,
            });
            m.commit();
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.submitBuyerInteractionEvent = s;
  },
  98,
);
