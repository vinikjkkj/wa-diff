__d(
  "useWAWebContactValues",
  ["WAWebContactCollection", "useWAWebCollectionValues"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("useWAWebCollectionValues").useCollectionValues(
        o("WAWebContactCollection").ContactCollection,
        e,
        t,
      );
    }
    function s(e, t) {
      return o("useWAWebCollectionValues").useOptionalCollectionValues(
        o("WAWebContactCollection").ContactCollection,
        e,
        t,
      );
    }
    ((l.useContactValues = e), (l.useOptionalContactValues = s));
  },
  98,
);
