__d(
  "AdsManagerRelayClientStateUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      var o = !1,
        a = function (a) {
          var t = e.get(a);
          if (t == null) {
            var i = e.create(a, n);
            (i.setValue(a, "id"),
              i.setValue(!0, "__placeholder"),
              r.push(i),
              (o = !0));
          } else {
            if (t.getType() !== n && !t.getValue("__placeholder")) return 1;
            r.some(function (e) {
              return (e == null ? void 0 : e.getDataID()) === a;
            }) || (r.push(t), (o = !0));
          }
        };
      for (var i of t) a(i);
      return o;
    }
    i.createAndAppendRecords = e;
  },
  66,
);
