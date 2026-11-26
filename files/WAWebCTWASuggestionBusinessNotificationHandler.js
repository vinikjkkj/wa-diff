__d(
  "WAWebCTWASuggestionBusinessNotificationHandler",
  [
    "WAWebBizSuggestionsGatingUtils",
    "WAWebCTWAParseSuggestion",
    "WAWebHandleCTWASuggestion",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      matches: function (t) {
        return t.hasChild("ctwa_suggestion");
      },
      parse: function (t) {
        if (!o("WAWebBizSuggestionsGatingUtils").adsActionBannersEnabled())
          return null;
        var e = o("WAWebCTWAParseSuggestion").parseCTWASuggestion(t);
        return e == null
          ? null
          : function () {
              return o("WAWebHandleCTWASuggestion").handleCTWASuggestion(e);
            };
      },
    };
    l.default = e;
  },
  98,
);
