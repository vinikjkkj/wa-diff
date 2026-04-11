__d(
  "ActorURI",
  ["ActorURIConfig", "URI"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      return new (e || (e = r("URI")))(t).addQueryData(
        r("ActorURIConfig").PARAMETER_ACTOR,
        n,
      );
    }
    ((l.create = s), (l.PARAMETER_ACTOR = r("ActorURIConfig").PARAMETER_ACTOR));
  },
  98,
);
