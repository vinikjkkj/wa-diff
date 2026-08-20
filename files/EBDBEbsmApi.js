__d(
  "EBDBEbsmApi",
  [
    "$InternalEnum",
    "EBDB",
    "FBLogger",
    "I64",
    "Promise",
    "QPLUserFlow",
    "ReStorePersistence",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = [
        "encrypted_backups_virtual_devices",
        "secure_encrypted_backups_recovery_code_status",
        "device_metadata",
        "secure_encrypted_backups_epochs",
        "secure_encrypted_backups_client_state",
        "encrypted_backups",
        "experiences_shared_state",
        "auto_restore_opt_out",
      ],
      c = n("$InternalEnum").Mirrored(["Success", "EmptyDb"]);
    function d(e) {
      var t = {};
      for (var n of Object.keys(e)) {
        var r = e[n];
        typeof r == "bigint"
          ? (t[n] = (s || (s = o("I64"))).of_string(String(r)))
          : (t[n] = r);
      }
      return t;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = yield o("EBDB").getEBDB(),
            a = Array.from(t.keys());
          yield r.runInTransaction(
            a,
            "readwrite",
            (function () {
              var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (r) {
                  var a = [],
                    i = function* () {
                      var e = u[0];
                      l = u[1];
                      var t = l.toAdd,
                        n = l.toDelete,
                        i =
                          o("EBDB").schema == null
                            ? void 0
                            : o("EBDB").schema[e];
                      a.push(
                        r.stores[e].bulkDelete(
                          n
                            .map(function (e) {
                              var t =
                                typeof e == "object"
                                  ? e == null
                                    ? void 0
                                    : e[i.primaryKey]
                                  : null;
                              if (t != null)
                                return (s || (s = o("I64"))).isI64(t)
                                  ? BigInt((s || (s = o("I64"))).to_string(t))
                                  : t;
                            })
                            .filter(function (e) {
                              return !!e;
                            }),
                        ),
                        r.stores[e].bulkPut(
                          t
                            .filter(function (e) {
                              return (
                                typeof e == "object" &&
                                (e == null ? void 0 : e[i.primaryKey]) != null
                              );
                            })
                            .map(function (e) {
                              var t = {};
                              for (var n of Object.keys(e)) {
                                var r = e[n];
                                (s || (s = o("I64"))).isI64(r)
                                  ? (t[n] = BigInt(
                                      (s || (s = o("I64"))).to_string(r),
                                    ))
                                  : (t[n] = r);
                              }
                              return t;
                            }),
                        ),
                      );
                    },
                    l;
                  for (var u of t) yield* i();
                  yield (e || (e = n("Promise"))).all(a);
                },
              );
              return function (e) {
                return r.apply(this, arguments);
              };
            })(),
            "EBDB - flush EBSM state",
            i.id + ":79",
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          for (var t = yield e.next(); t.done === !1; ) t = yield e.next();
          return t.value;
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e(t),
            a = new (o("ReStorePersistence").ReStoreDbStoreTable)(
              r,
              t,
              function () {},
              {
                get: function () {},
                logError: function () {},
                shouldInline: function () {
                  return !1;
                },
              },
              "readwrite",
              function () {},
            );
          for (var i of n) {
            var l = d(i),
              s = l[o("EBDB").schema[t].primaryKey];
            yield _(a.tableSet(new WeakMap(), [s], l));
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          r("QPLUserFlow").addPoint(
            r("qpl")._(521481876, "1407"),
            "EBSM_HYDRATION_LOAD_DATA_FROM_EBDB",
          );
          var a = yield o("EBDB").getEBDB(),
            l = !0,
            s = new Map();
          if (
            (yield a.runInTransaction(
              u,
              "readonly",
              function (t) {
                return (e || (e = n("Promise"))).all(
                  u.map(
                    (function () {
                      var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* (e) {
                          var n = yield t.stores[e].readAll();
                          ((l = l && n.length === 0), s.set(e, n));
                        },
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                  ),
                );
              },
              "EBDB - fetch for rehydration EBSM",
              i.id + ":192",
            ),
            r("QPLUserFlow").addPoint(
              r("qpl")._(521481876, "1407"),
              "EBSM_HYDRATION_LOAD_DATA_FROM_EBDB_DONE",
            ),
            l)
          )
            return c.EmptyDb;
          var d;
          try {
            yield (e || (e = n("Promise"))).all(
              Array.from(s).map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var n = e[0],
                        o = e[1];
                      try {
                        (yield g(t, n, o),
                          r("QPLUserFlow").addPoint(
                            r("qpl")._(521481876, "1407"),
                            "EBSM_HYDRATION_DONE_ON_" + n.toUpperCase(),
                          ));
                      } catch (e) {
                        throw (
                          (d = n),
                          r("QPLUserFlow").addPoint(
                            r("qpl")._(521481876, "1407"),
                            "EBSM_HYDRATION_FAILED_ON_" + n.toUpperCase(),
                          ),
                          e
                        );
                      }
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
          } catch (e) {
            var m = r("getErrorSafe")(e);
            (r("FBLogger")("wmi_eb")
              .catching(m)
              .mustfix(
                "rehydrateEBSMFromEBDB: Invalid data to build BTree: %s",
                d,
              ),
              o("EBDB").clearEbStores());
            for (var p of u) {
              var _ = t(p);
              _.clear();
            }
            return c.EmptyDb;
          }
          return c.Success;
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      return function (r, a) {
        return t.runInTransaction(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = [];
                for (var i of r) {
                  var l = i[0],
                    s = i[1],
                    u = s.toAdd,
                    c = s.toDelete,
                    d = o("EBDB").schema == null ? void 0 : o("EBDB").schema[l];
                  for (var m of c) {
                    var p =
                      typeof m == "object"
                        ? m == null
                          ? void 0
                          : m[d.primaryKey]
                        : null;
                    p != null && a.push(t[l].delete(p));
                  }
                  for (var _ of u)
                    typeof _ == "object" &&
                      (_ == null ? void 0 : _[d.primaryKey]) != null &&
                      a.push(t[l].put(_));
                }
                yield (e || (e = n("Promise"))).all(a);
              },
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          "readwrite",
          void 0,
          { source: a, type: "user_initiated" },
          i.id + ":260",
        );
      };
    }
    ((l.flushEBSMtoEBDB = m),
      (l.rehydrateEBSMFromEBDB = y),
      (l.updateEBSM = b));
  },
  98,
);
