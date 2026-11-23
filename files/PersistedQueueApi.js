__d(
  "PersistedQueueApi",
  ["PersistedQueueDB", "WALogger", "WAThrottle", "getErrorSafe", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 36e5,
      c = function (t, n) {
        return "PersistedQueue:" + t + ":" + n;
      };
    function d() {
      return {
        ack: _,
        clear: f,
        count: L,
        delete: h,
        get: m,
        index: p,
        keys: v,
        read: b,
        write: S,
      };
    }
    function m(e, t) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readonly",
          function (n) {
            var r = n.stores[e];
            return r.get(t);
          },
          c(e, "get"),
        );
    }
    function p(e, t) {
      return {
        equals: function (r) {
          return {
            read: function (a) {
              return o("PersistedQueueDB")
                .getPersistedQueues()
                .runInTransaction(
                  [e],
                  "readonly",
                  function (n) {
                    return n.stores[e].readIndexRange(t, { only: r }, a);
                  },
                  c(e, "index-equal"),
                );
            },
          };
        },
        keys: function () {
          return o("PersistedQueueDB")
            .getPersistedQueues()
            .runInTransaction(
              [e],
              "readonly",
              function (n) {
                return n.stores[e].readIndexKeys(t);
              },
              "index-keys",
            );
        },
        read: async function (r) {
          var n = await o("PersistedQueueDB")
            .getPersistedQueues()
            .runInTransaction(
              [e],
              "readonly",
              function (n) {
                return n.stores[e].readIndex(t, void 0, r);
              },
              c(e, "index-read"),
            );
          return n;
        },
      };
    }
    function _(e, t) {
      return h(e, t);
    }
    function f(e) {
      return g(e, "clear");
    }
    function g(e, t) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readwrite",
          function (t) {
            return t.stores[e].clear();
          },
          c(e, t),
        );
    }
    async function h(e, t) {
      try {
        await y(e, t, "delete");
      } catch (n) {
        if (!r("justknobx")._("7903")) throw n;
        await C(e, t);
      }
    }
    function y(e, t, n) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readwrite",
          async function (n) {
            var r = n.stores[e];
            (await r.bulkDelete(t), E(e));
          },
          c(e, n),
        );
    }
    async function C(t, n) {
      try {
        await y(t, n, "delete-retry");
      } catch (n) {
        if (r("getErrorSafe")(n).name !== "UnknownError") throw n;
        (o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[PersistedQueueV2] Clearing ",
              " after repeated delete failure",
            ])),
          String(t),
        ),
          await g(t, "clear-after-delete-failure"));
      }
    }
    function b(e, t) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readonly",
          function (n) {
            return n.stores[e].readAll(t);
          },
          c(e, "read"),
        );
    }
    function v(e) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readonly",
          function (t) {
            return t.stores[e].readKeys();
          },
          c(e, "keys"),
        );
    }
    function S(e, t) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readwrite",
          function (n) {
            return n.stores[e].bulkAdd(t);
          },
          c(e, "write"),
        );
    }
    function R(e) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readwrite",
          async function (t) {
            var n = t.stores[e],
              r = await n.readAll({ limit: 1 });
            r.length === 0 && (await n.clear());
          },
          c(e, "ClearIfEmpty"),
        );
    }
    function L(e) {
      return o("PersistedQueueDB")
        .getPersistedQueues()
        .runInTransaction(
          [e],
          "readonly",
          function (t) {
            return t.stores[e].count();
          },
          c(e, "count"),
        );
    }
    var E = o("WAThrottle").throttle(function (e) {
      R(e).catch(function (t) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[PersistedQueueV2] Error during PQ clear operation of ",
              ": ",
              "",
            ])),
          e,
          t,
        );
      });
    }, u);
    l.persistedQueueApi = d;
  },
  98,
);
