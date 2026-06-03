__d(
  "WAWebDBCTWASuggestion",
  ["WAWebSchemaCTWASuggestion", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebSchemaCTWASuggestion")
            .getCTWASuggestionTable()
            .remove(e);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebSchemaCTWASuggestion")
            .getCTWASuggestionTable()
            .merge(e, { nuxData: t });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebSchemaCTWASuggestion")
            .getCTWASuggestionTable()
            .merge(e, { coolOffData: t });
        })),
        m.apply(this, arguments)
      );
    }
    ((l.removeSuggestion = e),
      (l.updateTrackingNuxData = u),
      (l.updateTrackingCoolOffData = d));
  },
  98,
);
