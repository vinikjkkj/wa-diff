__d(
  "WAWebAssociationProcessor",
  [
    "WAWebAlbumAssociationProcessor",
    "WAWebAssociationProcessorConstants",
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
    function c(e) {
      if (e == null) return !1;
      var t = u(e);
      return (
        t != null &&
        t.processorType ===
          o("WAWebAssociationProcessorConstants").AssociationProcessorType
            .WithDetachedMessages &&
        t.childRevokePolicy ===
          o("WAWebAssociationProcessorConstants").ChildRevokePolicy.DeleteChild
      );
    }
    ((l.getAssociationProcessor = s),
      (l.getAssociationProcessorByAssociationType = u),
      (l.isChildDeletedOnParentRevoke = c));
  },
  98,
);
