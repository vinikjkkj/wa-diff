__d(
  "WAWebPostUnknownStanzaMetric",
  ["WAWebUnknownStanzaWamEvent"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      new (o("WAWebUnknownStanzaWamEvent").UnknownStanzaWamEvent)({
        unknownStanzaTag: e.tag,
        unknownStanzaType: (t = e.attrs.type) == null ? void 0 : t.toString(),
      }).commit();
    }
    l.postUnknownStanzaMetric = e;
  },
  98,
);
