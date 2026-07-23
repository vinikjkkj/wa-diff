__d(
  "CometRouteResourceContainer",
  ["FBLogger", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      function t(t) {
        var n = new Set(),
          o = !1,
          a = null,
          i = null,
          l = null,
          s = function () {
            r("setTimeout")(function () {
              n.size > 0 ||
                (i != null && e.dispose(i), (i = null), (a = null), (o = !0));
            }, 0);
          },
          u = function () {
            if (((o = !1), !(i != null || a != null))) {
              var n = e.prepare(t, function () {
                return o || i != null;
              });
              n.type === "resource"
                ? (i = n.value)
                : (a = n.value
                    .then(function (t) {
                      return (
                        t != null &&
                          (i == null
                            ? (i = t)
                            : (r("FBLogger")("comet_infra").mustfix(
                                "Existing resource was re-loaded without disposing",
                              ),
                              e.dispose(t))),
                        i
                      );
                    })
                    .finally(function () {
                      return (a = null);
                    }));
            }
          };
        return {
          getHash: function () {
            return (l == null && (l = e.getHash(t)), l);
          },
          getIfLoaded: function () {
            return i;
          },
          getInput: function () {
            return t;
          },
          loadIfNeeded: u,
          lock: function (t) {
            (n.add(t), u());
          },
          readOrSuspend: function () {
            if (i == null)
              throw a == null
                ? r("FBLogger")("comet_infra").mustfixThrow(
                    "Trying to use an unloaded entry point from router",
                  )
                : a;
            return i;
          },
          unlock: function (t) {
            (n.delete(t), n.size === 0 && s());
          },
        };
      }
      return t;
    }
    l.createCometResourceContainerFactory = e;
  },
  98,
);
