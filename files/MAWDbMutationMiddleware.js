__d(
  "MAWDbMutationMiddleware",
  ["FBLogger", "MAWDbMiddlewareMutations", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        create: function (n) {
          return babelHelpers.extends({}, n, {
            table: function (a) {
              var t = n.table(a);
              try {
                return babelHelpers.extends({}, t, {
                  get: function (r) {
                    return t.get(r).then(function (t) {
                      if (t != null)
                        return o("MAWDbMiddlewareMutations").getValue(t, a, e);
                    });
                  },
                  getMany: function (r) {
                    return t.getMany(r).then(function (t) {
                      return t.map(function (t) {
                        if (t != null)
                          return o("MAWDbMiddlewareMutations").getValue(
                            t,
                            a,
                            e,
                          );
                      });
                    });
                  },
                  mutate: function (r) {
                    var n = null;
                    switch (r.type) {
                      case "add":
                      case "put":
                        n = r.values.map(function (t) {
                          return o("MAWDbMiddlewareMutations").mutateValue(
                            t,
                            a,
                            e,
                          );
                        });
                        break;
                      case "delete":
                        break;
                      case "deleteRange":
                        break;
                    }
                    return r.type === "delete" ||
                      r.type === "deleteRange" ||
                      n == null
                      ? t.mutate(r)
                      : ((r.values = n),
                        t.mutate(r).then(function (e) {
                          return e;
                        }));
                  },
                  openCursor: function (r) {
                    return t.openCursor(r).then(function (t) {
                      return t == null || t.value == null ? t : s(t, a, e);
                    });
                  },
                  query: function (r) {
                    return t.query(r).then(function (t) {
                      if (
                        t.result.length === 0 ||
                        typeof t.result[0] != "object"
                      )
                        return t;
                      var n = t.result.map(function (t) {
                        return o("MAWDbMiddlewareMutations").getValue(t, a, e);
                      });
                      return ((t.result = n), t);
                    });
                  },
                });
              } catch (e) {
                var i = r("getErrorSafe")(e);
                return (
                  r("FBLogger")("messenger_web")
                    .catching(i)
                    .mustfix("Error applying MAWDbMiddleware"),
                  t
                );
              }
            },
          });
        },
        name: "MAWDbMutationMiddleware",
        stack: "dbcore",
      };
    }
    function s(e, t, n) {
      var r;
      return Object.create(e, {
        continue: {
          get: function () {
            return e.continue;
          },
        },
        continuePrimaryKey: {
          get: function () {
            return e.continuePrimaryKey;
          },
        },
        key: {
          get: function () {
            return e.key;
          },
        },
        primaryKey: {
          get: function () {
            return e.primaryKey;
          },
        },
        start: {
          value: function (i) {
            return e.start(function () {
              r = o("MAWDbMiddlewareMutations").getValue(e.value, t, n);
              try {
                e.value = r;
              } catch (e) {}
              i();
            });
          },
        },
        value: {
          get: function () {
            return r;
          },
        },
      });
    }
    l.getMAWDbMutationMiddleware = e;
  },
  98,
);
