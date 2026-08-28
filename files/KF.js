__d(
  "KF",
  [
    "KF2DeferredLoader",
    "KFContext",
    "KeyframesDownloadTracker",
    "Promise",
    "asyncToGeneratorRuntime",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      for (var t = "", n = 4; n < 8; n++) t += String.fromCharCode(e[n]);
      return t;
    }
    function u(e) {
      var t = new Uint8Array(e),
        n = s(t);
      return n === "KYF3";
    }
    function c(t, o, a) {
      return new (e || (e = n("Promise")))(function (i, l) {
        var s =
          typeof t == "string"
            ? r("KeyframesDownloadTracker")(t)
            : (e || (e = n("Promise"))).resolve(t);
        (a != null && a.aborted) ||
          s
            .then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (!(a != null && a.aborted))
                      if (u(e))
                        try {
                          var t = new (r("KFContext"))(o);
                          if ((yield t.boot(e), a != null && a.aborted)) return;
                          i(t);
                        } catch (e) {
                          l(e);
                        }
                      else
                        r("promiseDone")(
                          r("KF2DeferredLoader")(),
                          (function () {
                            var t = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (t) {
                              try {
                                var n = new (r("KFContext"))(o);
                                if (
                                  (yield n.boot(e, t), a != null && a.aborted)
                                )
                                  return;
                                i(n);
                              } catch (e) {
                                l(e);
                              }
                            });
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })(),
                          l,
                        );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            )
            .catch(l);
      });
    }
    var d = {
        requestRendererFromBytes: function (t, n, r) {
          return c(t, n, r);
        },
        requestRenderer: function (t, n, r) {
          return c(t, n, r);
        },
        isKeyframes3File: u,
      },
      m = d;
    l.default = m;
  },
  98,
);
