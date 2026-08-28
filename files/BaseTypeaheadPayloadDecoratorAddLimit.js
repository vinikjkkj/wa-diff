__d(
  "BaseTypeaheadPayloadDecoratorAddLimit",
  ["searchBaseTypeaheadTakeNEntriesFromSectionedEntries"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return function (t) {
        var n = t.entries;
        return babelHelpers.extends({}, t, {
          entries: r("searchBaseTypeaheadTakeNEntriesFromSectionedEntries")(
            n,
            e,
          ),
        });
      };
    }
    l.default = e;
  },
  98,
);
