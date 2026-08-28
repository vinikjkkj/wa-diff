__d(
  "GraphAPIPerfLogging",
  ["ApiClient", "ResourceTimingsStore", "ResourceTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Map();
    function s() {
      (r("ApiClient").subscribe("request.prepare", u),
        r("ApiClient").subscribe("request.complete", c),
        r("ApiClient").subscribe("request.error", c));
    }
    function u(t, n, a) {
      var i = o("ResourceTimingsStore").getUID(r("ResourceTypes").XHR, t);
      (e.set(a, i),
        o("ResourceTimingsStore")
          .annotate(r("ResourceTypes").XHR, i)
          .addStringAnnotation("request_name", n._reqName)
          .addStringAnnotation("request_source", n._reqSrc)
          .addStringAnnotation("request_method", n.method),
        o("ResourceTimingsStore").measureRequestSent(
          r("ResourceTypes").XHR,
          i,
        ));
    }
    function c(t, n, a, i, l, s) {
      var u = e.get(s);
      u &&
        (e.delete(s),
        o("ResourceTimingsStore").measureResponseReceived(
          r("ResourceTypes").XHR,
          u,
        ),
        o("ResourceTimingsStore")
          .annotate(r("ResourceTypes").XHR, u)
          .addStringAnnotation(
            "fbtrace_id",
            (i == null ? void 0 : i.__fb_trace_id__) || "",
          )
          .addStringAnnotation(
            "www_request_id",
            (i == null ? void 0 : i.__fb_trace_id__) || "",
          ));
    }
    l.register = s;
  },
  98,
);
