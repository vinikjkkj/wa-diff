__d(
  "WebMpsPostprocess",
  [
    "MpsErrors",
    "WmiErrorFixesGate",
    "WmiErrorReport",
    "getSafeQplErrorMessage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      var r = function (t, n, r) {
        o("WmiErrorReport").reportWmiError(
          o("MpsErrors").MpsErrors.classify(t, n, "write_failed"),
          { loggerSubject: r },
        );
      };
      await Promise.all(
        t.map(async function (t) {
          var a = t.process(e, n),
            i =
              a instanceof Promise
                ? await a.catch(function (e) {
                    return (
                      o("WmiErrorReport").reportWmiError(
                        o("MpsErrors").MpsErrors.classify(
                          e,
                          t.name,
                          "write_failed",
                        ),
                      ),
                      null
                    );
                  })
                : a;
          i != null &&
            i.size > 0 &&
            i.forEach(function (e, n) {
              r(e, t.name, String(n));
            });
        }),
      ).catch(function (e) {
        r(e, "non_critical_postprocessors");
      });
    }
    async function s(e, t, n) {
      var r = new Map(),
        a = async function (a) {
          n.messageToQpl
            .all(
              e.map(function (e) {
                return e.message.messageId;
              }),
            )
            .addPoint(a.name + "_start");
          var t;
          if (o("WmiErrorFixesGate").isWmiErrorFixEnabled())
            try {
              t = await a.process(e, n);
            } catch (n) {
              var l = o("MpsErrors").MpsErrors.classify(
                n,
                a.name,
                "write_failed",
              );
              t = new Map(
                e.map(function (e) {
                  return [e.message.messageId, l];
                }),
              );
            }
          else {
            var i = a.process(e, n);
            t = await Promise.resolve(i).catch(function (e) {
              return (
                o("WmiErrorReport").reportWmiError(
                  o("MpsErrors").MpsErrors.classify(e, a.name, "write_failed"),
                ),
                null
              );
            });
          }
          for (var s of t != null ? t : []) {
            var u = s[0],
              c = s[1];
            {
              var d = o("MpsErrors").MpsErrors.classify(
                c,
                a.name,
                "write_failed",
              );
              (r.set(u, d),
                n.messageToQpl.addAnnotations(u, {
                  string: { error_code: o("MpsErrors").MpsErrors.codeOf(d) },
                }),
                n.messageToQpl.endFail(
                  u,
                  a.name.toLowerCase() + "-error",
                  o("getSafeQplErrorMessage").getSafeQPLErrorMessage(d),
                ));
            }
          }
          n.messageToQpl
            .all(
              e.map(function (e) {
                return e.message.messageId;
              }),
            )
            .addPoint(a.name + "_end");
        };
      for (var i of t) await a(i);
      return r;
    }
    ((l.runNonCriticalPostprocessor = e), (l.runCriticalPostprocessor = s));
  },
  98,
);
