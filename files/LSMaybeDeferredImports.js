__d(
  "LSMaybeDeferredImports",
  ["LSSynchronousPromise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s(e);
    }
    function s(e) {
      var t = null;
      return {
        load: function () {
          return t == null
            ? e.load().then(function (e) {
                return ((t = e), t);
              })
            : o("LSSynchronousPromise").makeSynchronousPromise(t);
        },
      };
    }
    l.wrapJSResourceForInteractionMaybeSync = e;
  },
  98,
);
