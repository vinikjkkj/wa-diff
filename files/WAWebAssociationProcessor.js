__d(
  "WAWebAssociationProcessor",
  [
    "WAWebAlbumAssociationProcessor",
    "WAWebBotPluginAssociationProcessor",
    "WAWebDualUploadsAssociationProcessor",
    "WAWebMediaPollAssociationProcessor",
    "WAWebPollAddOptionAssociationProcessor",
    "WAWebUnknownAssociationProcessor",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("justknobx")._("4912"),
      s = [
        r("WAWebAlbumAssociationProcessor"),
        r("WAWebUnknownAssociationProcessor"),
        r("WAWebBotPluginAssociationProcessor"),
        r("WAWebMediaPollAssociationProcessor"),
        r("WAWebPollAddOptionAssociationProcessor"),
        e
          ? o("WAWebDualUploadsAssociationProcessor")
              .ImageDualUploadsAssociationProcessor
          : null,
        e
          ? o("WAWebDualUploadsAssociationProcessor")
              .VideoDualUploadsAssociationProcessor
          : null,
        e
          ? o("WAWebDualUploadsAssociationProcessor")
              .HevcDualUploadsAssociationProcessor
          : null,
      ].filter(Boolean);
    function u(e) {
      var t,
        n = e.associationType;
      return (t = s.find(function (e) {
        return e.type === n;
      })) != null
        ? t
        : null;
    }
    function c(e) {
      var t;
      return (t = s.find(function (t) {
        return t.type === e;
      })) != null
        ? t
        : null;
    }
    ((l.getAssociationProcessor = u),
      (l.getAssociationProcessorByAssociationType = c));
  },
  98,
);
