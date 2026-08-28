__d(
  "AdCreative-object_story_specification-resolver",
  [
    "AdCreativeObjectStorySpecificationResolver.graphql",
    "AdObjectStorySpecUtil",
    "RelayHooks",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n("AdCreativeObjectStorySpecificationResolver.graphql")),
        t,
      );
      return o("AdObjectStorySpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.object_story_specification = s;
  },
  98,
);
