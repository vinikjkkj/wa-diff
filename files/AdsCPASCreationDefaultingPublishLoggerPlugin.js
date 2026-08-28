__d(
  "AdsCPASCreationDefaultingPublishLoggerPlugin",
  ["AdAsyncRequestStatus", "AdsDefaultsLoggingUtils", "AdsDraftFragmentStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      if ((e == null ? void 0 : e.values) == null) return t;
      for (var n of e.values)
        if (n.field != null) {
          var r = n.new_value;
          try {
            t[n.field] = JSON.parse(r);
          } catch (e) {
            t[n.field] = r;
          }
        }
      return t;
    }
    var s = {
        log: function (n) {
          var t, a;
          if (!n.isInitialRequestFailure) {
            var i =
                (t =
                  (a = n.response) == null || (a = a.fragment_statuses) == null
                    ? void 0
                    : a.data) != null
                  ? t
                  : [],
              l = i.some(function (e) {
                return e.status === r("AdAsyncRequestStatus").SUCCESS;
              });
            if (l) {
              var s = i.map(function (e) {
                  return e.fragment_id;
                }),
                u = r("AdsDraftFragmentStore").getAllCached(s),
                c = null,
                d = null,
                m = null,
                p = null,
                _ = null,
                f = "";
              for (var g of u) {
                var h = g[1];
                if (h != null)
                  switch (
                    (f === "" && h.source != null && (f = h.source),
                    h.ad_object_type)
                  ) {
                    case "campaign":
                      ((c = h), (p = h.ad_object_id));
                      break;
                    case "ad_set":
                      ((d = h), (_ = h.ad_object_id));
                      break;
                    case "ad":
                      m = h;
                      break;
                  }
              }
              if (_ != null) {
                var y = e(c),
                  C = e(d),
                  b = e(m);
                o("AdsDefaultsLoggingUtils").logCPASCreationDefaulting(
                  C,
                  y,
                  _,
                  p,
                  f,
                  b.creative,
                );
              }
            }
          }
        },
      },
      u = s;
    l.default = u;
  },
  98,
);
