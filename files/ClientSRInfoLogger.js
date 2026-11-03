__d(
  "ClientSRInfoLogger",
  ["Banzai", "ClientSrInfoFalcoEvent", "SiteData", "URI", "performance"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3e4,
      c = 250,
      d = 0,
      m = 0,
      p = !1,
      _,
      f,
      g,
      h;
    function y(e) {
      return String(Math.round(e));
    }
    function C() {
      for (
        var t = (e || (e = r("performance"))).getEntriesByType("resource"),
          n = function () {
            var n = (e || (e = r("performance"))).now() - _;
            if (n > u || m > c) return { v: void 0 };
            var o = t[d],
              a =
                o.duration >= 0
                  ? (s || (s = r("URI"))).tryParseURI(o.name)
                  : null;
            if (!a || !r("SiteData").pkg_cohort || !o.encodedBodySize) return 0;
            var i = a.getPath();
            if (
              !(i.startsWith("/rsrc.php/") || i.startsWith("/intern/rsrc.php/"))
            )
              return 0;
            var l = {
              pkg_cohort: r("SiteData").pkg_cohort,
              resource_path: a.getPath(),
              resource_domain: a.getDomain(),
              ef_page: f,
              sample_rate: y(g),
              session_id: h,
              transfer_size: o.transferSize,
              encoded_body_size: o.encodedBodySize,
              decoded_body_size: o.decodedBodySize,
              start_time: y(o.startTime),
              redirect_start: y(o.redirectStart),
              redirect_end: y(o.redirectEnd),
              fetch_start: y(o.fetchStart),
              worker_start: y(o.workerStart),
              domain_lookup_start: y(o.domainLookupStart),
              domain_lookup_end: y(o.domainLookupEnd),
              connect_start: y(o.connectStart),
              secure_connection_start: y(o.secureConnectionStart),
              connect_end: y(o.connectEnd),
              request_start: y(o.requestStart),
              response_start: y(o.responseStart),
              response_end: y(o.responseEnd),
              time_elapsed: y(n),
            };
            (r("ClientSrInfoFalcoEvent").log(function () {
              return l;
            }),
              m++);
          },
          o;
        d < t.length;
        d++
      )
        if (((o = n()), o !== 0 && o)) return o.v;
    }
    function b(t, n, o) {
      (e || (e = r("performance"))).getEntriesByType &&
        !window.externalHost &&
        !p &&
        ((_ = (e || (e = r("performance"))).now()),
        (f = t),
        (g = n),
        (h = o),
        r("Banzai").subscribe(r("Banzai").SEND, C),
        r("Banzai").subscribe(r("Banzai").SHUTDOWN, C),
        (p = !0));
    }
    l.init = b;
  },
  98,
);
