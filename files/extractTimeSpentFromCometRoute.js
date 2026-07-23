__d(
  "extractTimeSpentFromCometRoute",
  ["getCometEntityKey", "getEntityIDFromRoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        o,
        a =
          (t =
            (n = r("getCometEntityKey")(e)) == null ? void 0 : n.entity_id) !=
          null
            ? t
            : r("getEntityIDFromRoute")(e),
        i =
          (o = r("getCometEntityKey")(e)) == null
            ? void 0
            : o.parent_container_id;
      return {
        entityID: a,
        parentContainerId: i,
        timeSpentConfig: e.timeSpentConfig,
        tracePolicy: e.tracePolicy,
        url: e.url,
      };
    }
    l.default = e;
  },
  98,
);
