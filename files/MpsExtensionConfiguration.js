__d(
  "MpsExtensionConfiguration",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      var e = t.postProcessors,
        n = t.preprocessors,
        r = t.rankSnippetActivity,
        o = t.readSideEffects,
        a = t.skipDedupedPostprocessing;
      ((this.postProcessors = {
        critical: e.critical,
        nonCritical: e.nonCritical,
      }),
        (this.preprocessors = n),
        (this.rankSnippetActivity = r != null ? r : void 0),
        (this.readSideEffects = o != null ? o : void 0),
        (this.skipDedupedPostprocessing = a != null ? a : void 0));
    };
    i.MpsExtensionConfiguration = e;
  },
  66,
);
