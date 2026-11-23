__d(
  "AdsIntelligentComponentsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t, n) {
      return { context: t, placement: n };
    };
    function l(t) {
      return e(t, "aymt_tips");
    }
    function s(t) {
      return e(t, "help_articles");
    }
    function u(t) {
      return e(t, "SAVED_MESSAGES_PANE");
    }
    function c(e) {
      var t;
      return (t = JSON.stringify(e)) != null ? t : "";
    }
    ((i.getTipParams = l),
      (i.getFAQParams = s),
      (i.getSavedMessagesParams = u),
      (i.convertContext = c));
  },
  66,
);
