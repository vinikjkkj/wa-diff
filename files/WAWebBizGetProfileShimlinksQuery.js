__d(
  "WAWebBizGetProfileShimlinksQuery",
  [
    "WALogger",
    "WAWebBizGetProfileShimlinksQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "WAWebSignedShimmedUrl",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = { type: "error" },
      d =
        e !== void 0 ? e : (e = n("WAWebBizGetProfileShimlinksQuery.graphql"));
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (
            yield r("WAWebNetworkStatus").waitIfOffline(),
            o("WAWebRelayClient")
              .fetchQuery(d, { bizJid: e })
              .then(function (e) {
                if (e == null) return c;
                var t = e.xwa_whatsapp_smb_get_profile_linkshims,
                  n = {
                    type: "success",
                    websites: t.reduce(function (e, t) {
                      var n = t.shimmed_website_url,
                        a = t.website;
                      return (
                        r("isStringNullOrEmpty")(a) ||
                          (r("isStringNullOrEmpty")(n)
                            ? e.push({ url: a })
                            : e.push({
                                url: a,
                                signedShimmedUrl: o(
                                  "WAWebSignedShimmedUrl",
                                ).asSignedShimmedUrl(n),
                              })),
                        e
                      );
                    }, []),
                  };
                return (
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "getProfileShimlinks: success",
                      ])),
                  ),
                  n
                );
              })
              .catch(function (e) {
                return (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "getProfileShimlinks: failed with error",
                      ])),
                  ),
                  e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                    ? { type: "graphql-error", error: e }
                    : c
                );
              })
          );
        })),
        p.apply(this, arguments)
      );
    }
    l.getProfileShimlinks = m;
  },
  98,
);
