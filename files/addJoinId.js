__d(
  "addJoinId",
  ["addAnnotations"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o;
      if (
        (r("addAnnotations")(e.annotations, {
          string:
            ((o = {}),
            (o.join_id = t),
            (o.qpl_join__source_clock = "unreliable".valueOf()),
            (o.qpl__source = "client_js"),
            o),
        }),
        n != null)
      ) {
        var a;
        r("addAnnotations")(e.annotations, {
          int: ((a = {}), (a.qpl_join__absolute_time_origin_ms = n), a),
        });
      }
    }
    l.default = e;
  },
  98,
);
