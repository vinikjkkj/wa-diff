__d(
  "WAMediaConnParser",
  ["WADeprecatedWapParser", "WAServerMediaType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new (r("WADeprecatedWapParser"))("mediaConnParser", function (e) {
      var t,
        n,
        r = e.child("media_conn"),
        o = c(r);
      return {
        hosts: o,
        authToken: r.attrString("auth"),
        authTokenExpiryTs: r.attrFutureTime("auth_ttl"),
        routesExpiryTs: r.attrFutureTime("ttl"),
        maxBuckets: r.attrInt("max_buckets"),
        maxManualRetry:
          (t = r.maybeAttrInt("max_manual_retry", 0, 4)) != null ? t : 3,
        maxAutoDownloadRetry:
          (n = r.maybeAttrInt("max_auto_download_retry", 0, 4)) != null ? n : 3,
      };
    });
    function s(e) {
      var t, n;
      if (e.hasAttr("fallback_hostname"))
        return {
          domain: e.attrString("fallback_hostname"),
          class: e.maybeAttrString("fallback_class"),
          ip4: (t = e.maybeAttrString("fallback_ip4")) != null ? t : void 0,
          ip6: (n = e.maybeAttrString("fallback_ip6")) != null ? n : void 0,
        };
    }
    function u(e) {
      var t, n, r, o;
      return {
        domain: e.attrString("hostname"),
        fallback: s(e),
        uploadable: d(e, "upload"),
        downloadable: d(e, "download"),
        isFallback: e.maybeAttrString("type") === "fallback",
        downloadBuckets:
          (t =
            (n = e.maybeChild("download_buckets")) == null
              ? void 0
              : n.mapChildren(function (e) {
                  return parseInt(e.tag(), 10);
                })) != null
            ? t
            : [],
        class: e.maybeAttrString("class"),
        ip4: (r = e.maybeAttrString("ip4")) != null ? r : void 0,
        ip6: (o = e.maybeAttrString("ip6")) != null ? o : void 0,
      };
    }
    function c(e) {
      return e.mapChildrenWithTag("host", u);
    }
    function d(e, t) {
      return e.hasChild(t)
        ? e
            .child(t)
            .mapChildren(function (e) {
              var t = e.tag();
              return o("WAServerMediaType").castToServerMediaType(t);
            })
            .filter(Boolean)
        : o("WAServerMediaType").SERVER_MEDIA;
    }
    l.mediaConnParser = e;
  },
  98,
);
