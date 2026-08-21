__d(
  "WmiIrisInactiveSeqIdHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "iris_inactive_subscription_uq_seq_id",
      l = "iris_inactive_subscription_domain",
      s = {
        update: function (n, r) {
          var t,
            o = n.get(r.dataID);
          if (o != null) {
            var a = o.getLinkedRecord(r.fieldKey);
            if (a != null) {
              var i = r.dataID + ":" + r.handleKey,
                s = (t = n.get(i)) != null ? t : n.create(i, a.getType());
              s.setValue(a.getValue(e), e);
              var u = a.getValue(l);
              (u != null && s.setValue(u, l),
                o.setLinkedRecord(s, r.handleKey));
            }
          }
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
