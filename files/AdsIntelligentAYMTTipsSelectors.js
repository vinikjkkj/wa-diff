__d(
  "AdsIntelligentAYMTTipsSelectors",
  [
    "AdsIntelligentComponentsMessageContentStore",
    "AdsIntelligentComponentsServerMessagesStore",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsMemoizeWithArgs",
    "adsStoreToSelector",
    "jsObjectHash",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsStoreToSelector")(
        r("AdsIntelligentComponentsMessageContentStore"),
      ),
      s = r("adsCreateStoreSelector")(
        [r("AdsIntelligentComponentsServerMessagesStore")],
        function () {
          return r("AdsIntelligentComponentsServerMessagesStore").getState();
        },
        { name: i.id + ".serverMsgsStoreSelector" },
      ),
      u = r("adsMemoizeWithArgs")(
        function (e, t) {
          return { messagesIDs: e, placement: t };
        },
        function (e, t) {
          return r("jsObjectHash")({ messagesIDs: e, placement: t });
        },
        i.id + ".memoizeInput",
      ),
      c = r("adsCreateStoreSelector")(
        [],
        function (t) {
          return (t === void 0 && (t = {}), u(t.messagesIDs, t.placement));
        },
        { name: i.id + ".messageIDAndPlacementSelector" },
      ),
      d = r("adsCreateSelector")(
        [e, c],
        function (t, n) {
          var e = n.messagesIDs;
          return e.reduce(function (e, n) {
            var r, o, a;
            return babelHelpers.extends(
              {},
              e,
              ((a = {}),
              (a[n] =
                (r = (o = t.get(n)) == null ? void 0 : o.aymt_tip) != null
                  ? r
                  : null),
              a),
            );
          }, {});
        },
        { name: i.id + ".getAYMTTipsSelector" },
      );
    ((l.serverMsgsStoreSelector = s),
      (l.messageIDAndPlacementSelector = c),
      (l.getAYMTTipsSelector = d));
  },
  98,
);
