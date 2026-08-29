__d(
  "extractTimeSpentFromCometRoute",
  ["getCometEntityKey", "getEntityIDFromRoute"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "comet.facebookweb.MWInboxHomeRoute";
    function s(t) {
      var n;
      if (t.canonicalRouteName !== e) return null;
      var r = (n = t.rootView.props) == null ? void 0 : n.thread_key;
      return typeof r == "string" && r !== "" ? r : null;
    }
    function u(e) {
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
        threadIDCandidate: s(e),
        timeSpentConfig: e.timeSpentConfig,
        tracePolicy: e.tracePolicy,
        url: e.url,
      };
    }
    l.default = u;
  },
  98,
);
