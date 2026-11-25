__d(
  "LSTruncateMetadataThreads.nop",
  ["LSMessagingThreadTypeUtil", "ReQL", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t, n) {
      if (r("gkx")("9855")) {
        for (var e = t.mi_act_mapping_table.keys(new WeakMap()); ; ) {
          var a,
            i = await e.next();
          if (i.done === !0) break;
          await (a = t.mi_act_mapping_table).delete.apply(a, i.value);
        }
        for (
          var l = o("ReQL")
            .fromTableAscending(t.threads)
            .filter(function (e) {
              return o("LSMessagingThreadTypeUtil").isArmadilloSecure(
                e.threadType,
              );
            })
            .iterator(new WeakMap());
          ;
        ) {
          var s,
            u = await l.next();
          if (u.done === !0) break;
          await (s = t.threads).delete.apply(s, u.value[0]);
        }
      }
      return Promise.resolve();
    };
    ((e.__nop_name__ = "LSTruncateMetadataThreads"), (l.default = e));
  },
  98,
);
