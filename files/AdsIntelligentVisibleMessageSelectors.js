__d(
  "AdsIntelligentVisibleMessageSelectors",
  [
    "AdsIntelligentAYMTTipsSelectors",
    "AdsIntelligentComponentsDeliveryController",
    "AdsIntelligentComponentsServerMessagesStore",
    "AdsIntelligentComponentsStore",
    "AdsIntelligentComponentsTimerProvider",
    "AdsIntelligentComponentsUtils",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsIntelligentComponentContextBootloadedSelector",
    "adsIntelligentComponentServerContextSelector",
    "adsStoreToSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsIntelligentComponentsTimerProvider").toFluxStore(),
      u = r("adsCreateStoreSelector")(
        [r("AdsIntelligentComponentsStore")],
        function () {
          return r("AdsIntelligentComponentsStore").getState();
        },
        { name: i.id + ".icStoreSelector" },
      ),
      c = (e = r("adsCreateSelector"))(
        [
          o("AdsIntelligentAYMTTipsSelectors").serverMsgsStoreSelector,
          r("adsIntelligentComponentServerContextSelector"),
        ],
        function (t, n) {
          return r("AdsIntelligentComponentsServerMessagesStore").getMessages(
            o("AdsIntelligentComponentsUtils").getTipParams(n),
          );
        },
        { name: i.id + ".currentServerMsgsSelector" },
      ),
      d = [u, c, r("adsIntelligentComponentContextBootloadedSelector")],
      m = e(d, r("AdsIntelligentComponentsDeliveryController").tryStartCycle, {
        name: i.id + ".cycleStartSelector",
      }),
      p = e(
        [r("adsStoreToSelector")(s), m],
        function (t, n) {
          return r(
            "AdsIntelligentComponentsDeliveryController",
          ).canUpdateVisibleMessagesCheck(t.get("timerCycle"));
        },
        { name: i.id + ".canUpdateVisibleMessagesSelector" },
      ),
      _ = e(
        [p].concat(d),
        function (t, n, o, a) {
          return r("AdsIntelligentComponentsDeliveryController").update(
            n.get("resetCapCycle"),
            n.get("mountedContainers"),
            n.get("closedMessages"),
            o,
            a,
            t,
          );
        },
        { name: i.id + ".visibleMessagesSelector" },
      );
    ((l.currentServerMsgsSelector = c), (l.visibleMessagesSelector = _));
  },
  98,
);
