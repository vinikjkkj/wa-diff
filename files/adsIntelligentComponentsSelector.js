__d(
  "adsIntelligentComponentsSelector",
  [
    "AdsIntelligentAYMTTipsSelectors",
    "AdsIntelligentCurrentListCustomSelectors",
    "AdsIntelligentVisibleMessageSelectors",
    "adsCreateSelector",
    "adsIntelligentComponentServerContextSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("immutable").OrderedSet([
        "EDITOR_CARD_FLOATING_TIP",
        "BLUES_CLUES",
      ]),
      u = function (t, n) {
        var e = o(
          "AdsIntelligentCurrentListCustomSelectors",
        ).currentListCustomSelector(n);
        return !e || t == null ? !1 : e.has(t);
      };
    u.getStores = function () {
      return [].concat(
        o(
          "AdsIntelligentCurrentListCustomSelectors",
        ).currentListCustomSelector.getStores(),
      );
    };
    var c = r("adsCreateSelector")(
        [
          (e = o("AdsIntelligentAYMTTipsSelectors"))
            .messageIDAndPlacementSelector,
          r("adsIntelligentComponentServerContextSelector"),
          o("AdsIntelligentVisibleMessageSelectors").visibleMessagesSelector,
        ],
        function (t, n, r) {
          var e = t.placement;
          return o(
            "AdsIntelligentCurrentListCustomSelectors",
          ).currentListCustomSelector(e, n, r);
        },
        { name: i.id + ".currentListSelector" },
      ),
      d = r("adsCreateSelector")(
        [e.messageIDAndPlacementSelector, c],
        function (t, n) {
          var e = t.messagesIDs;
          return !n || !(e != null && e.length)
            ? []
            : e.filter(function (e) {
                return n == null ? void 0 : n.has(e);
              });
        },
        { name: i.id + ".visibleContainerMessagesSelector" },
      ),
      m = {
        currentServerMsgsSelector: o("AdsIntelligentVisibleMessageSelectors")
          .currentServerMsgsSelector,
        getAYMTTipsSelector: e.getAYMTTipsSelector,
        isVisible: u,
        currentList: o("AdsIntelligentCurrentListCustomSelectors")
          .currentListCustomSelector,
        visibleContainerMessagesSelector: d,
        messageIDAndPlacementSelector: e.messageIDAndPlacementSelector,
      };
    l.default = m;
  },
  98,
);
