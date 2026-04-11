__d(
  "CometRelayMultiActorEnvironment",
  ["relay-runtime/multi-actor-environment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s(t) {
      var n = function (n, r, o) {
        t(String(n), r, o);
      };
      for (var r of e.values()) r.commitMultiActorUpdate(n);
    }
    function u(t) {
      var n = t.actorEnvironmentKey,
        r = t.actorID,
        a = t.createMultiActorEnvironmentConfig,
        i = n != null ? n : null,
        l = e.get(i);
      return (
        l == null &&
          ((l = new (o(
            "relay-runtime/multi-actor-environment",
          ).MultiActorEnvironment)(a({ actorEnvironmentKey: i }))),
          e.set(i, l)),
        l.forActor(r)
      );
    }
    ((l.commitMultiActorUpdate = s), (l.forActor = u));
  },
  98,
);
