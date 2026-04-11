__d(
  "WAWebDebugGalaxyFlow",
  ["WAWebGalaxyFlowMediaEditorCollection", "WAWebGalaxyFlowsSessionsCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebGalaxyFlowMediaEditorCollection")
        .GalaxyFlowMediaEditorCollection;
    }
    ((e.doc = "Get the GalaxyFlowMediaEditorCollection instance"),
      (e.paramsToExecute = []));
    function s(e) {
      return o(
        "WAWebGalaxyFlowMediaEditorCollection",
      ).GalaxyFlowMediaEditorCollection.getMsgs(e);
    }
    s.doc =
      "Get messages for a specific collection id in GalaxyFlowMediaEditorCollection";
    function u() {
      return o("WAWebGalaxyFlowMediaEditorCollection")
        .GalaxyFlowMediaEditorCollection.getModelsArray()
        .map(function (e) {
          return e.id;
        });
    }
    ((u.doc = "Get all collection ids in GalaxyFlowMediaEditorCollection"),
      (u.paramsToExecute = []));
    function c() {
      o(
        "WAWebGalaxyFlowMediaEditorCollection",
      ).GalaxyFlowMediaEditorCollection.reset();
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
