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
    var e,
      s = [
        r("WAWebAlbumAssociationProcessor"),
        r("WAWebUnknownAssociationProcessor"),
        r("WAWebBotPluginAssociationProcessor"),
        r("WAWebMediaPollAssociationProcessor"),
        r("WAWebPollAddOptionAssociationProcessor"),
        (e = o("WAWebDualUploadsAssociationProcessor"))
          .ImageDualUploadsAssociationProcessor,
        e.VideoDualUploadsAssociationProcessor,
        e.HevcDualUploadsAssociationProcessor,
        e.Av1DualUploadsAssociationProcessor,
      ];
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
    function d(e) {
      if (e == null) return !1;
      var t = c(e);
      return (
        t != null &&
        t.processorType ===
          o("WAWebAssociationProcessorConstants").AssociationProcessorType
            .WithDetachedMessages &&
        t.childRevokePolicy ===
          o("WAWebAssociationProcessorConstants").ChildRevokePolicy.DeleteChild
      );
    }
    ((l.getAssociationProcessor = u),
      (l.getAssociationProcessorByAssociationType = c),
      (l.isChildDeletedOnParentRevoke = d));
  },
  98,
);
