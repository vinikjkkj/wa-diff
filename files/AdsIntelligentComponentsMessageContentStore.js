__d(
  "AdsIntelligentComponentsMessageContentStore",
  [
    "AdsDataAtom",
    "AdsIntelligentComponentsMessagesLoadedActionFlux",
    "FluxMapStore",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getActionTypes = function () {
            return [
              o("AdsIntelligentComponentsMessagesLoadedActionFlux").actionType,
            ];
          }),
          (n.reduce = function (t, n) {
            var e = this,
              a = n.action;
            if (a.loadedData.messages == null) return t;
            var i = a.loadedData.messages;
            switch (a.type) {
              case o("AdsIntelligentComponentsMessagesLoadedActionFlux")
                .actionType:
                return t.withMutations(function (t) {
                  (i.aymt_tips &&
                    Object.keys(i.aymt_tips).forEach(function (n) {
                      return t.set(n, {
                        aymt_tip: i.aymt_tips[n].metadata,
                        fbjoiner_key: i.aymt_tips[n].fbjoiner_key,
                        help_article: e.getHelpArticle(n),
                        saved_message: e.getSavedMessage(n),
                      });
                    }),
                    i.help_articles &&
                      Object.keys(i.help_articles).forEach(function (n) {
                        return t.set(n, {
                          help_article: r("nullthrows")(i.help_articles)[n]
                            .metadata,
                          saved_message: e.getSavedMessage(n),
                          aymt_tip: e.getAYMTTip(n),
                          fbjoiner_key: e.getFBJoinerKey(n),
                        });
                      }),
                    i.SAVED_MESSAGES_PANE &&
                      Object.keys(i.SAVED_MESSAGES_PANE).forEach(function (n) {
                        return t.set(n, {
                          saved_message: r("nullthrows")(i.SAVED_MESSAGES_PANE)[
                            n
                          ].metadata,
                          help_article: e.getHelpArticle(n),
                          aymt_tip: e.getAYMTTip(n),
                          fbjoiner_key: e.getFBJoinerKey(n),
                        });
                      }));
                });
              default:
                return t;
            }
          }),
          (n.getAYMTTip = function (t) {
            var e = this.get(t);
            return e ? e.aymt_tip : null;
          }),
          (n.getHelpArticle = function (t) {
            var e = this.get(t);
            return e ? e.help_article : null;
          }),
          (n.getSavedMessage = function (t) {
            var e = this.get(t);
            return e ? e.saved_message : null;
          }),
          (n.getFBJoinerKey = function (t) {
            var e = this.get(t);
            return e ? e.fbjoiner_key : null;
          }),
          t
        );
      })(r("FluxMapStore"));
    s.__moduleID = i.id;
    var u = new s(e || (e = r("AdsDataAtom")));
    l.default = u;
  },
  98,
);
