__d(
  "LynxGeneration",
  ["LinkshimHandlerConfig", "URI"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new (e || (e = r("URI")))(
        r("LinkshimHandlerConfig").linkshim_path,
      ).setDomain(r("LinkshimHandlerConfig").linkshim_host),
      u = {
        getShimURI: function () {
          return new (e || (e = r("URI")))(s);
        },
        getLynxURIProtocol: function (t) {
          return r("LinkshimHandlerConfig").always_use_https
            ? "https"
            : t.getProtocol() === "http"
              ? "http"
              : "https";
        },
        getShimmedHref: function (n, o, a) {
          var t,
            i = new (e || (e = r("URI")))(n),
            l = u.getLynxURIProtocol(i),
            s = u
              .getShimURI()
              .setQueryData(
                ((t = {}),
                (t[r("LinkshimHandlerConfig").linkshim_url_param] =
                  i.toString()),
                (t[r("LinkshimHandlerConfig").linkshim_enc_param] = o),
                t),
              )
              .setProtocol(l),
            c = a == null ? void 0 : a.trackingNodes,
            d = a == null ? void 0 : a.callbacks;
          return (
            c && c.length && (s = s.addQueryData("__tn__", c.join(""))),
            d && d.length && (s = s.addQueryData("c", d)),
            s
          );
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
