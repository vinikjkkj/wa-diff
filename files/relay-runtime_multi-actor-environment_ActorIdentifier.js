__d(
  "relay-runtime/multi-actor-environment/ActorIdentifier",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE";
    function s(t) {
      t === e || l(0, 48286, t);
    }
    a.exports = {
      INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE: e,
      assertInternalActorIdentifier: s,
      getActorIdentifier: function (t) {
        return t;
      },
      getDefaultActorIdentifier: function () {
        throw new Error("Not Implemented");
      },
    };
  },
  null,
);
