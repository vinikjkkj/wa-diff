__d(
  "WAWebDBLabelsReorder",
  [
    "Promise",
    "WALogger",
    "WAWebListUtils",
    "WAWebModelStorageUtils",
    "WAWebSchemaLabel",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u() {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebListUtils").isMetaAiListEnabled() &&
            (yield o("WAWebSchemaLabel")
              .getLabelTable()
              .get(o("WAWebListUtils").META_AI_LIST_ID)) != null
            ? o("WAWebListUtils").loadMetaAiList()
            : null;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u();
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["label"], function () {
              return p(e, t);
            });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null) return f(e);
          yield t.keepMetaAiListInPlace(function () {
            return f(e);
          });
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
        g.apply(this, arguments)
      );
    }
    ((l.loadMetaAiListOrderForReorder = u),
      (l.updateLabelsSortOrder = d),
      (l.writeLabelsSortOrder = p));
  },
  98,
);
