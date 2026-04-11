__d(
  "relay-runtime/multi-actor-environment",
  [
    "relay-runtime/multi-actor-environment/ActorIdentifier",
    "relay-runtime/multi-actor-environment/MultiActorEnvironment",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n(
      "relay-runtime/multi-actor-environment/ActorIdentifier",
    ).getActorIdentifier;
    a.exports = {
      MultiActorEnvironment: n(
        "relay-runtime/multi-actor-environment/MultiActorEnvironment",
      ),
      getActorIdentifier: e,
    };
  },
  null,
);
