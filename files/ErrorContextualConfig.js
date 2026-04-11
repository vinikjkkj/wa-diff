__d(
  "ErrorContextualConfig",
  ["ContextualConfigConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.error = e;
      }
      var t = e.prototype;
      return (
        (t.resolve = function (t) {
          return [
            this.error,
            o("ContextualConfigConstants").EMPTY_RESULT_PARAMS,
            o("ContextualConfigConstants").EMPTY_RESOLVED_CONTEXTS,
            o("ContextualConfigConstants").EMPTY_RESOLVED_MONITORS,
          ];
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
