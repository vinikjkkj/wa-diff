__d(
  "DecoilAtomStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        var e = t,
          n = new Set();
        return {
          getSnapshot: function () {
            return e;
          },
          subscribe: function (t) {
            return (
              n.add(t),
              function () {
                n.delete(t);
              }
            );
          },
          update: function (r) {
            var t =
              typeof r == "function"
                ? r
                : function (e) {
                    return r;
                  };
            e = t(e);
            for (var o of n) o();
          },
        };
      },
      l = e;
    i.default = l;
  },
  66,
);
