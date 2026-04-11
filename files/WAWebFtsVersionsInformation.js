__d(
  "WAWebFtsVersionsInformation",
  [
    "Promise",
    "WAFtsDeprecationIndexer",
    "WAFtsMultiLangTokenizer",
    "WAFtsV3Indexer",
    "WANullthrows",
    "WAWebFtsV3IndexTableAdapter",
    "WAWebFtsV3MessageSource",
    "WAWebFtsV3Signaller",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var o = new (r("WAWebFtsV3MessageSource"))(t);
      return {
        indexers: {
          1: function (o) {
            var t = new (r("WAFtsDeprecationIndexer"))("1");
            return (e || (e = n("Promise"))).resolve(t);
          },
          3: function (a) {
            var t = new (r("WAFtsV3Indexer"))(
              a,
              r("WANullthrows")(o),
              new (r("WAWebFtsV3IndexTableAdapter"))(),
            );
            return (
              t.setSignaller(new (r("WAWebFtsV3Signaller"))()),
              (e || (e = n("Promise"))).resolve(t)
            );
          },
          3.1: function (a) {
            var t = new (r("WAFtsV3Indexer"))(
              a,
              r("WANullthrows")(o),
              new (r("WAWebFtsV3IndexTableAdapter"))(),
              6,
            );
            return (
              t.setSignaller(new (r("WAWebFtsV3Signaller"))()),
              (e || (e = n("Promise"))).resolve(t)
            );
          },
        },
        tokenizers: {
          1: function () {
            return (e || (e = n("Promise"))).resolve(
              new (r("WAFtsMultiLangTokenizer"))(),
            );
          },
        },
      };
    }
    var u = "3.1",
      c = "1";
    ((l.createVersionsInfo = s),
      (l.LATEST_INDEXER_VERSION = u),
      (l.LATEST_TOKENIZER_VERSION = c));
  },
  98,
);
