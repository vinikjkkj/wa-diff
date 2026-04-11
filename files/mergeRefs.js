__d(
  "mergeRefs",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (e) {
        var n = [];
        return (
          t.forEach(function (t) {
            if (t != null) {
              if (typeof t == "function") {
                var o = t(e);
                typeof o == "function"
                  ? n.push(o)
                  : n.push(function () {
                      return t(null);
                    });
                return;
              }
              if (typeof t == "object") {
                ((t.current = e),
                  n.push(function () {
                    t.current = null;
                  }));
                return;
              }
              r("FBLogger")("comet_ui").mustfix(
                "mergeRefs cannot handle Refs of type boolean, number or string, received ref %s of type %s",
                String(t),
                typeof t,
              );
            }
          }),
          function () {
            n.forEach(function (e) {
              return e();
            });
          }
        );
      };
    }
    l.default = e;
  },
  98,
);
