__d(
  "WmiIrisInactiveSeqIdHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "iris_inactive_subscription_uq_seq_id",
      l = {
        update: function (n, r) {
          var t,
            o = n.get(r.dataID);
          if (o != null) {
            var a = o.getLinkedRecord(r.fieldKey);
            if (a != null) {
              var i = r.dataID + ":" + r.handleKey,
                l = (t = n.get(i)) != null ? t : n.create(i, a.getType());
              (l.setValue(a.getValue(e), e), o.setLinkedRecord(l, r.handleKey));
            }
          }
        },
      },
      s = l;
    i.default = s;
  },
  66,
);
