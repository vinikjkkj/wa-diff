__d(
  "relay-runtime/multi-actor-environment/ActorUtils",
  ["relay-runtime/multi-actor-environment/ActorIdentifier"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "actor_key",
      l = n(
        "relay-runtime/multi-actor-environment/ActorIdentifier",
      ).getActorIdentifier;
    function s(t) {
      if (t != null && typeof t == "object" && typeof t[e] == "string")
        return l(t[e]);
    }
    a.exports = {
      ACTOR_IDENTIFIER_FIELD_NAME: e,
      getActorIdentifierFromPayload: s,
    };
  },
  null,
);
