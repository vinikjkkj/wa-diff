__d(
  "WAWebDBLabelsReorder",
  [
    "Promise",
    "WALogger",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["label"], function () {
              return d(e);
            });
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = t.reduce(function (e, t, n) {
            return (e.set(t, n), e);
          }, new Map([]));
          try {
            var a = t.map(function (e) {
                return String(e);
              }),
              i = yield o("WAWebSchemaLabel").getLabelTable().bulkGet(a),
              l = [];
            (i.forEach(function (e) {
              if (e != null) {
                var t = r.get(Number(e.id));
                t != null &&
                  l.push(
                    o("WAWebSchemaLabel")
                      .getLabelTable()
                      .merge(e.id, { orderIndex: t }),
                  );
              }
            }),
              yield (s || (s = n("Promise"))).all(l));
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[Label] writeLabelsSortOrder: updating storage failed",
                    ])),
                )
                .tags("labels")
                .sendLogs("labels-db-update-failed"),
              t
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.updateLabelsSortOrder = u), (l.writeLabelsSortOrder = d));
  },
  98,
);
