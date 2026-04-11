__d(
  "WAWebCTWASuggestionInitFromStorage",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebSchemaCTWASuggestion",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      if (!o("WAWebBizGatingUtils").adsActionBannersEnabledOnStartup())
        return (s || (s = n("Promise"))).resolve();
      var t = o("WAWebSchemaCTWASuggestion").getCTWASuggestionTable();
      return t.all().then(function (n) {
        var r = [],
          a = [];
        if (
          (n.forEach(function (e) {
            o("WATimeUtils").isInFuture(e.expiresAt) ? r.push(e) : a.push(e.id);
          }),
          o("WAWebBackendApi").frontendFireAndForget("loadedCTWASuggestions", {
            suggestions: r,
          }),
          a.length > 0)
        )
          return t.bulkRemove(a).catch(function () {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "restoreCTWASuggestions: could not remove expired suggestions",
                ])),
            );
          });
      });
    }
    l.restoreCTWASuggestions = u;
  },
  98,
);
