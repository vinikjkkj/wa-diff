__d(
  "EBDBEbsmApi",
  [
    "$InternalEnum",
    "EBDB",
    "FBLogger",
    "I64",
    "QPLUserFlow",
    "ReStorePersistence",
    "getErrorSafe",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        "encrypted_backups_virtual_devices",
        "secure_encrypted_backups_recovery_code_status",
        "device_metadata",
        "secure_encrypted_backups_epochs",
        "secure_encrypted_backups_client_state",
        "encrypted_backups",
        "experiences_shared_state",
        "auto_restore_opt_out",
      ],
      u = n("$InternalEnum").Mirrored(["Success", "EmptyDb"]);
    function c(t) {
      var n = {};
      for (var r of Object.keys(t)) {
        var a = t[r];
        typeof a == "bigint"
          ? (n[r] = (e || (e = o("I64"))).of_string(String(a)))
          : (n[r] = a);
      }
      return n;
    }
    async function d(t) {
      var n = await o("EBDB").getEBDB(),
        r = Array.from(t.keys());
      await n.runInTransaction(
        r,
        "readwrite",
        async function (n) {
          var r = [],
            a = async function () {
              var t = l[0];
              i = l[1];
              var a = i.toAdd,
                s = i.toDelete,
                u = o("EBDB").schema == null ? void 0 : o("EBDB").schema[t];
              r.push(
                n.stores[t].bulkDelete(
                  s
                    .map(function (t) {
                      var n =
                        typeof t == "object"
                          ? t == null
                            ? void 0
                            : t[u.primaryKey]
                          : null;
                      if (n != null)
                        return (e || (e = o("I64"))).isI64(n)
                          ? BigInt((e || (e = o("I64"))).to_string(n))
                          : n;
                    })
                    .filter(function (e) {
                      return !!e;
                    }),
                ),
                n.stores[t].bulkPut(
                  a
                    .filter(function (e) {
                      return (
                        typeof e == "object" &&
                        (e == null ? void 0 : e[u.primaryKey]) != null
                      );
                    })
                    .map(function (t) {
                      var n = {};
                      for (var r of Object.keys(t)) {
                        var a = t[r];
                        (e || (e = o("I64"))).isI64(a)
                          ? (n[r] = BigInt((e || (e = o("I64"))).to_string(a)))
                          : (n[r] = a);
                      }
                      return n;
                    }),
                ),
              );
            },
            i;
          for (var l of t) await a();
          await Promise.all(r);
        },
        "EBDB - flush EBSM state",
        i.id + ":79",
      );
    }
    async function m(e) {
      for (var t = await e.next(); t.done === !1; ) t = await e.next();
      return t.value;
    }
    async function p(e, t, n) {
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
        var l = c(i),
          s = l[o("EBDB").schema[t].primaryKey];
        await m(a.tableSet(new WeakMap(), [s], l));
      }
    }
    async function _(e) {
      r("QPLUserFlow").addPoint(
        r("qpl")._(521481876, "1407"),
        "EBSM_HYDRATION_LOAD_DATA_FROM_EBDB",
      );
      var t = await o("EBDB").getEBDB(),
        n = !0,
        a = new Map();
      if (
        (await t.runInTransaction(
          s,
          "readonly",
          function (e) {
            return Promise.all(
              s.map(async function (t) {
                var r = await e.stores[t].readAll();
                ((n = n && r.length === 0), a.set(t, r));
              }),
            );
          },
          "EBDB - fetch for rehydration EBSM",
          i.id + ":192",
        ),
        r("QPLUserFlow").addPoint(
          r("qpl")._(521481876, "1407"),
          "EBSM_HYDRATION_LOAD_DATA_FROM_EBDB_DONE",
        ),
        n)
      )
        return u.EmptyDb;
      var l;
      try {
        await Promise.all(
          Array.from(a).map(async function (t) {
            var n = t[0],
              o = t[1];
            try {
              (await p(e, n, o),
                r("QPLUserFlow").addPoint(
                  r("qpl")._(521481876, "1407"),
                  "EBSM_HYDRATION_DONE_ON_" + n.toUpperCase(),
                ));
            } catch (e) {
              throw (
                (l = n),
                r("QPLUserFlow").addPoint(
                  r("qpl")._(521481876, "1407"),
                  "EBSM_HYDRATION_FAILED_ON_" + n.toUpperCase(),
                ),
                e
              );
            }
          }),
        );
      } catch (t) {
        var c = r("getErrorSafe")(t);
        (r("FBLogger")("wmi_eb")
          .catching(c)
          .mustfix("rehydrateEBSMFromEBDB: Invalid data to build BTree: %s", l),
          o("EBDB").clearEbStores());
        for (var d of s) {
          var m = e(d);
          m.clear();
        }
        return u.EmptyDb;
      }
      return u.Success;
    }
    function f(e) {
      return function (t, n) {
        return e.runInTransaction(
          async function (e) {
            var n = [];
            for (var r of t) {
              var a = r[0],
                i = r[1],
                l = i.toAdd,
                s = i.toDelete,
                u = o("EBDB").schema == null ? void 0 : o("EBDB").schema[a];
              for (var c of s) {
                var d =
                  typeof c == "object"
                    ? c == null
                      ? void 0
                      : c[u.primaryKey]
                    : null;
                d != null && n.push(e[a].delete(d));
              }
              for (var m of l)
                typeof m == "object" &&
                  (m == null ? void 0 : m[u.primaryKey]) != null &&
                  n.push(e[a].put(m));
            }
            await Promise.all(n);
          },
          "readwrite",
          void 0,
          { source: n, type: "user_initiated" },
          i.id + ":260",
        );
      };
    }
    ((l.flushEBSMtoEBDB = d),
      (l.rehydrateEBSMFromEBDB = _),
      (l.updateEBSM = f));
  },
  98,
);
