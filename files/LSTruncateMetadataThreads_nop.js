__d(
  "LSTruncateMetadataThreads.nop",
  [
    "LSMessagingThreadTypeUtil",
    "Promise",
    "ReQL",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          if (r("gkx")("9855")) {
            for (var i = t.mi_act_mapping_table.keys(new WeakMap()); ; ) {
              var l,
                s = yield i.next();
              if (s.done) break;
              yield (l = t.mi_act_mapping_table).delete.apply(l, s.value);
            }
            for (
              var u = o("ReQL")
                .fromTableAscending(t.threads)
                .filter(function (e) {
                  return o("LSMessagingThreadTypeUtil").isArmadilloSecure(
                    e.threadType,
                  );
                })
                .iterator(new WeakMap());
              ;
            ) {
              var c,
                d = yield u.next();
              if (d.done) break;
              yield (c = t.threads).delete.apply(c, d.value[0]);
            }
          }
          return (e || (e = n("Promise"))).resolve();
        });
        function a(e, n) {
          return t.apply(this, arguments);
        }
        return a;
      })();
    ((s.__nop_name__ = "LSTruncateMetadataThreads"), (l.default = s));
  },
  98,
);
