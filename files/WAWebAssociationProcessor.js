__d(
  "WAWebAssociationProcessor",
  [
    "WAWebAlbumAssociationProcessor",
    "WAWebBotPluginAssociationProcessor",
    "WAWebDualUploadsAssociationProcessor",
    "WAWebMediaPollAssociationProcessor",
    "WAWebPollAddOptionAssociationProcessor",
    "WAWebUnknownAssociationProcessor",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
      r("WAWebAlbumAssociationProcessor"),
      r("WAWebUnknownAssociationProcessor"),
      r("WAWebBotPluginAssociationProcessor"),
      r("WAWebMediaPollAssociationProcessor"),
      r("WAWebPollAddOptionAssociationProcessor"),
      o("WAWebDualUploadsAssociationProcessor")
        .ImageDualUploadsAssociationProcessor,
      o("WAWebDualUploadsAssociationProcessor")
        .VideoDualUploadsAssociationProcessor,
      o("WAWebDualUploadsAssociationProcessor")
        .HevcDualUploadsAssociationProcessor,
    ];
    function s(t) {
      var n,
        r = t.associationType;
      return (n = e.find(function (e) {
        return e.type === r;
      })) != null
        ? n
        : null;
    }
    function u(t) {
      var n;
      return (n = e.find(function (e) {
        return e.type === t;
      })) != null
        ? n
        : null;
    }
    ((l.getAssociationProcessor = s),
      (l.getAssociationProcessorByAssociationType = u));
  },
  98,
);
