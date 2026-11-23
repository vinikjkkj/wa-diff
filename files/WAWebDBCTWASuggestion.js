__d(
  "WAWebDBCTWASuggestion",
  ["WAWebSchemaCTWASuggestion"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      await o("WAWebSchemaCTWASuggestion").getCTWASuggestionTable().remove(e);
    }
    async function s(e, t) {
      await o("WAWebSchemaCTWASuggestion")
        .getCTWASuggestionTable()
        .merge(e, { nuxData: t });
    }
    async function u(e, t) {
      await o("WAWebSchemaCTWASuggestion")
        .getCTWASuggestionTable()
        .merge(e, { coolOffData: t });
    }
    ((l.removeSuggestion = e),
      (l.updateTrackingNuxData = s),
      (l.updateTrackingCoolOffData = u));
  },
  98,
);
