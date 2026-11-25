__d(
  "GetLsDatabaseDeferredForDisplay",
  ["requireDeferredForDisplay"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferredForDisplay")("GetLsDatabase").__setRef(
      "GetLsDatabaseDeferredForDisplay",
    );
    async function s() {
      var t = await e.load();
      return t.get();
    }
    l.get = s;
  },
  98,
);
