__d(
  "AdsIntelligentCurrentListCustomSelectors",
  [
    "AdsIntelligentAYMTTipsSelectors",
    "AdsIntelligentComponentsServerMessagesStore",
    "AdsIntelligentComponentsUtils",
    "AdsIntelligentVisibleMessageSelectors",
    "adsCreateSelector",
    "adsIntelligentComponentServerContextSelector",
    "adsMemoizeWithArgs",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = o("AdsIntelligentComponentsUtils").getFAQParams(e),
        n = r("AdsIntelligentComponentsServerMessagesStore").getMessages(t);
      if (n != null && n.messages != null && n.messages.help_articles != null)
        return n.messages.help_articles;
    }
    function u(e) {
      if (e == null) return null;
      var t = s(e);
      if (t != null) return r("immutable").OrderedSet(Object.keys(t));
    }
    function c(e) {
      var t = o("AdsIntelligentComponentsUtils").getSavedMessagesParams(e),
        n = r("AdsIntelligentComponentsServerMessagesStore").getMessages(t);
      if (
        n != null &&
        n.messages != null &&
        n.messages.SAVED_MESSAGES_PANE != null
      )
        return n.messages.SAVED_MESSAGES_PANE;
    }
    function d(e) {
      if (e == null) return null;
      var t = c(e);
      if (t != null) return r("immutable").OrderedSet(Object.keys(t));
    }
    var m = (e = r("adsCreateSelector"))(
        [
          r("adsIntelligentComponentServerContextSelector"),
          o("AdsIntelligentAYMTTipsSelectors").serverMsgsStoreSelector,
        ],
        function (t) {
          return s(t);
        },
        { name: i.id + ".getHelpArticlesRawMessagesIDsSelector" },
      ),
      p = e(
        [m],
        function (t) {
          if (t != null) return r("immutable").OrderedSet(Object.keys(t));
        },
        { name: i.id + ".getHelpArticlesMessagesIDsSetSelector" },
      ),
      _ = e(
        [
          r("adsIntelligentComponentServerContextSelector"),
          o("AdsIntelligentAYMTTipsSelectors").serverMsgsStoreSelector,
        ],
        function (t) {
          return c(t);
        },
        { name: i.id + ".getSavedMessagesRawMessagesIDsSelector" },
      ),
      f = e(
        [_],
        function (t) {
          if (t != null) return r("immutable").OrderedSet(Object.keys(t));
        },
        { name: i.id + ".getSavedMessagesMessagesIDsSelector" },
      ),
      g = function (t, n, r) {
        switch (t) {
          case "help_articles":
            return u(r);
          case "SAVED_MESSAGES_PANE":
            return d(r);
          case "BLUES_CLUES":
          case "GLOBAL_BANNER":
          case "CAMPAIGN_MODAL":
          case "IN_FLOW":
          case "BADGES":
          case "EDITOR_CARD_FLOATING_TIP": {
            var e =
              n != null
                ? n
                : o(
                    "AdsIntelligentVisibleMessageSelectors",
                  ).visibleMessagesSelector();
            return e.get(t);
          }
        }
        return null;
      },
      h = function (t, n, o) {
        return (
          n === void 0 &&
            (n = r("adsIntelligentComponentServerContextSelector")()),
          g(t, o, n)
        );
      };
    h.getStores = function () {
      return [].concat(
        r("adsIntelligentComponentServerContextSelector").getStores(),
        o(
          "AdsIntelligentAYMTTipsSelectors",
        ).serverMsgsStoreSelector.getStores(),
        o(
          "AdsIntelligentVisibleMessageSelectors",
        ).visibleMessagesSelector.getStores(),
      );
    };
    function y(e, t, n, r) {
      var o = t != null ? t.hashCode() : "",
        a = n != null ? n.hashCode() : "",
        i = r != null ? r.hashCode() : "";
      return e.toString() + o + a + i;
    }
    var C = e(
        [
          o("AdsIntelligentVisibleMessageSelectors").visibleMessagesSelector,
          p,
          f,
        ],
        function () {
          return r("adsMemoizeWithArgs")(
            function (e) {
              return g(e);
            },
            function (e, t, n, r) {
              return y(e, t, n, r);
            },
            i.id,
          );
        },
        { name: i.id + ".currentListCustomSelector_NEW" },
      ),
      b = e(
        [o("AdsIntelligentAYMTTipsSelectors").messageIDAndPlacementSelector, C],
        function (t, n) {
          var e = t.messagesIDs,
            r = t.placement,
            o = n(r);
          return !o || !(e != null && e.length)
            ? []
            : e.filter(function (e) {
                return o == null ? void 0 : o.has(e);
              });
        },
        { name: i.id + ".visibleContainerMessagesSelector" },
      );
    ((l.currentListCustomSelector = h),
      (l.currentListCustomSelector_NEW = C),
      (l.visibleContainerMessagesSelector = b));
  },
  98,
);
