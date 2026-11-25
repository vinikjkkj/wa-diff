__d(
  "ReStoreMigrateUtil",
  ["$InternalEnum", "ReQL"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "UPDATE_METADATA",
      "UPGRADE_COMPLETE",
      "NO_UPGRADE_NEEDED",
    ]);
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = babelHelpers.wrapAsyncGenerator(function* (e, t) {
          for (
            var n = e.iterator(new WeakMap()),
              r = [],
              o = yield babelHelpers.awaitAsyncGenerator(n.next());
            o.done !== !0;
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
        u.apply(this, arguments)
      );
    }
    async function c(e, t, n) {
      var r = !1,
        a = !1,
        i;
      try {
        for (
          var l = babelHelpers.asyncIterator(
              s(o("ReQL").fromTableAscending(e), 100),
            ),
            u;
          (r = !(u = await l.next()).done);
          r = !1
        ) {
          var c = u.value;
          (await Promise.all(
            c.map(function (n) {
              return t(n).then(e.put);
            }),
          ),
            n == null || n());
        }
      } catch (e) {
        ((a = !0), (i = e));
      } finally {
        try {
          r && l.return != null && (await l.return());
        } finally {
          if (a) throw i;
        }
      }
    }
    function d(e, t) {
      function n(t) {
        if (t != null) {
          var n = {};
          for (var r in t) n[e + "_" + r] = t[r];
          return n;
        }
      }
      return { bool: n(t.bool), int: n(t.int), string: n(t.string) };
    }
    ((l.ReStoreMigrateResult = e),
      (l.upgradeTableEntries = c),
      (l.prefixAnnotations = d));
  },
  98,
);
