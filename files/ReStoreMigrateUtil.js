__d(
  "ReStoreMigrateUtil",
  ["$InternalEnum", "Promise", "ReQL", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "UPDATE_METADATA",
        "UPGRADE_COMPLETE",
        "NO_UPGRADE_NEEDED",
      ]);
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = babelHelpers.wrapAsyncGenerator(function* (e, t) {
          for (
            var n = e.iterator(new WeakMap()),
              r = [],
              o = yield babelHelpers.awaitAsyncGenerator(n.next());
            !o.done;
          ) {
            var a = o.value,
              i = a[0],
              l = a[1];
            (r.push(l),
              r.length === t && (yield r, (r = [])),
              (o = yield babelHelpers.awaitAsyncGenerator(n.next())));
          }
          r.length && (yield r);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i = !1,
            l = !1,
            s;
          try {
            for (
              var c = babelHelpers.asyncIterator(
                  u(o("ReQL").fromTableAscending(t), 100),
                ),
                d;
              (i = !(d = yield c.next()).done);
              i = !1
            ) {
              var m = d.value;
              (yield (e || (e = n("Promise"))).all(
                m.map(function (e) {
                  return r(e).then(t.put);
                }),
              ),
                a == null || a());
            }
          } catch (e) {
            ((l = !0), (s = e));
          } finally {
            try {
              i && c.return != null && (yield c.return());
            } finally {
              if (l) throw s;
            }
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      function n(t) {
        if (t != null) {
          var n = {};
          for (var r in t) n[e + "_" + r] = t[r];
          return n;
        }
      }
      return { bool: n(t.bool), int: n(t.int), string: n(t.string) };
    }
    ((l.ReStoreMigrateResult = s),
      (l.upgradeTableEntries = d),
      (l.prefixAnnotations = p));
  },
  98,
);
