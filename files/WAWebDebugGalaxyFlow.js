__d(
  "WAWebDebugGalaxyFlow",
  [
    "WAWebGalaxyFlowMediaEditorCollection",
    "WAWebGalaxyFlowsSessionsCache",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        r("vulture")("eUm-ozKyRwmSXuchYpPwMuc4AbA="),
        o("WAWebGalaxyFlowMediaEditorCollection")
          .GalaxyFlowMediaEditorCollection
      );
    }
    ((e.doc = "Get the GalaxyFlowMediaEditorCollection instance"),
      (e.paramsToExecute = []));
    function s(e) {
      return (
        r("vulture")("Une-zkYRxA6IhIpFvxs2IprvUC4="),
        o(
          "WAWebGalaxyFlowMediaEditorCollection",
        ).GalaxyFlowMediaEditorCollection.getMsgs(e)
      );
    }
    s.doc =
      "Get messages for a specific collection id in GalaxyFlowMediaEditorCollection";
    function u() {
      return (
        r("vulture")("HV003Ji0RMun3qlzNhq7yS9FMPU="),
        o("WAWebGalaxyFlowMediaEditorCollection")
          .GalaxyFlowMediaEditorCollection.getModelsArray()
          .map(function (e) {
            return e.id;
          })
      );
    }
    ((u.doc = "Get all collection ids in GalaxyFlowMediaEditorCollection"),
      (u.paramsToExecute = []));
    function c() {
      (r("vulture")("ZX0CTD1-q0W9aLe-G-fXMk9oErc="),
        o(
          "WAWebGalaxyFlowMediaEditorCollection",
        ).GalaxyFlowMediaEditorCollection.reset());
    }
    ((c.doc = "Clear all collections in GalaxyFlowMediaEditorCollection"),
      (c.paramsToExecute = []));
    var d = {
      getGalaxyFlowMediaEditorCollection: e,
      getGalaxyFlowMediaEditorCollectionById: s,
      getGalaxyFlowMediaEditorCollectionAllIds: u,
      clearGalaxyFlowMediaEditorCollection: c,
      GalaxyFlowSessionsCache: o("WAWebGalaxyFlowsSessionsCache")
        .GalaxyFlowSessionsCache,
    };
    l.default = d;
  },
  98,
);
