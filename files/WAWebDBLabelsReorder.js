__d(
  "WAWebDBLabelsReorder",
  ["Promise", "WALogger", "WAWebModelStorageUtils", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["label"],
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (r) {
                    var a = r[0],
                      i = t.reduce(function (e, t, n) {
                        return (e.set(t, n), e);
                      }, new Map([]));
                    try {
                      var l = t.map(function (e) {
                          return String(e);
                        }),
                        u = yield a.bulkGet(l),
                        c = [];
                      return (
                        u.forEach(function (e) {
                          if (e != null) {
                            var t = i.get(Number(e.id));
                            t != null &&
                              c.push(a.merge(e.id, { orderIndex: t }));
                          }
                        }),
                        (s || (s = n("Promise"))).all(c)
                      );
                    } catch (t) {
                      throw (
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "[Label] updateLabelsSortOrder: updating storage failed",
                              ])),
                          )
                          .tags("labels")
                          .sendLogs("labels-db-update-failed"),
                        t
                      );
                    }
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
        })),
        c.apply(this, arguments)
      );
    }
    l.updateLabelsSortOrder = u;
  },
  98,
);
