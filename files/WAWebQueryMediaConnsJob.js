__d(
  "WAWebQueryMediaConnsJob",
  [
    "WADeprecatedSendIq",
    "WALogger",
    "WAMediaConnParser",
    "WAPromiseRaceAbort",
    "WATimeUtils",
    "WAWap",
    "WAWebBackendErrors",
    "compactMap",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p;
    function _(e) {
      return (function (e) {
        if (
          e === "kyc-id" ||
          e === "novi-image" ||
          e === "novi-video" ||
          e === "thumbnail-gif" ||
          e === "xma-image"
        )
          return null;
        if (
          e === "image" ||
          e === "sticker" ||
          e === "ptt" ||
          e === "audio" ||
          e === "document" ||
          e === "video" ||
          e === "gif" ||
          e === "ppic" ||
          e === "md-app-state" ||
          e === "md-msg-hist" ||
          e === "template" ||
          e === "thumbnail-image" ||
          e === "thumbnail-video" ||
          e === "thumbnail-document" ||
          e === "thumbnail-link" ||
          e === "payment-bg-image" ||
          e === "biz-cover-photo" ||
          e === "preview" ||
          e === "newsletter-music-artwork" ||
          e === "newsletter-audio" ||
          e === "newsletter-document" ||
          e === "newsletter-image" ||
          e === "newsletter-gif" ||
          e === "newsletter-ptt" ||
          e === "newsletter-sticker" ||
          e === "newsletter-sticker-pack" ||
          e === "newsletter-thumbnail-link" ||
          e === "newsletter-video" ||
          e === "newsletter-ptv" ||
          e === "sticker-pack" ||
          e === "thumbnail-sticker-pack" ||
          e === "music-artwork" ||
          e === "group-history" ||
          e === "ads-image" ||
          e === "ads-video" ||
          e === "ptv"
        ) {
          var t = e;
          return t;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    function f(e) {
      return {
        hostname: e.domain,
        class: e.class,
        ips: [{ ip4: e.ip4, ip6: e.ip6 }],
      };
    }
    function g(e) {
      var t = function (t) {
        var e = [],
          n = r("compactMap")(t.downloadable, _);
        n.length > 0 && e.push({ download: n });
        var o = r("compactMap")(t.uploadable, _);
        o.length > 0 && e.push({ upload: o });
        var a = t.downloadBuckets.map(function (e) {
          return e.toString();
        });
        return (a != null && a.length > 0 && e.push({ downloadBuckets: a }), e);
      };
      return {
        hosts: e.hosts.map(function (e) {
          return babelHelpers.extends({}, f(e), {
            fallback: e.fallback != null ? f(e.fallback) : void 0,
            type: e.isFallback ? "fallback" : "primary",
            rules: t(e),
          });
        }),
        auth: e.authToken,
        authTTL: e.authTokenExpiryTs,
        ttl: e.routesExpiryTs,
        maxBuckets: e.maxBuckets,
      };
    }
    function h(t) {
      var n,
        a = new Date(),
        i = o("WATimeUtils").unixTime(),
        l = (n = o("WAWap")).wap(
          "iq",
          {
            to: n.S_WHATSAPP_NET,
            xmlns: "w:m",
            type: "set",
            id: n.generateId(),
          },
          n.wap("media_conn", null),
        ),
        _ = o("WADeprecatedSendIq")
          .deprecatedSendIq(l, o("WAMediaConnParser").mediaConnParser)
          .then(function (t) {
            if (t.success) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "backend:queryMediaConn: got ",
                    " hosts",
                  ])),
                t.result.hosts.length,
              );
              var n = g(t.result),
                l = n.auth,
                _ = n.authTTL,
                f = n.hosts,
                h = n.maxBuckets,
                y = n.ttl;
              if (!l || y == null || !f || f.length === 0)
                throw (
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "backend:queryMediaConnections: auth exists ",
                        "",
                      ])),
                    String(!!l),
                  ),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "backend:queryMediaConnections: ttl exists ",
                        "",
                      ])),
                    String(!!y),
                  ),
                  o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "backend:queryMediaConnections: hosts exists ",
                        "",
                      ])),
                    String(!!f),
                  ),
                  f &&
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "backend:queryMediaConnections: hosts.length ",
                          "",
                        ])),
                      f.length,
                    ),
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "Assertion failed!",
                        ])),
                    )
                    .sendLogs(
                      "backend:queryMediaConnections unexpected mediaConn",
                    ),
                  r("err")("Invalid mediaConn")
                );
              return {
                queryStartTime: a,
                auth: l,
                hosts: f,
                ttl: y - i,
                maxBuckets: h,
                authTTL: _ - i,
              };
            } else
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "response: ",
                        " ",
                        "",
                      ])),
                    t.errorCode,
                    t.errorText,
                  )
                  .sendLogs("backend:queryMediaConn: fail"),
                t.errorCode === 507
                  ? new (o("WAWebBackendErrors").E507)(
                      t.errorText,
                      t.errorBackoff,
                    )
                  : new (o("WAWebBackendErrors").ServerStatusCodeError)(
                      t.errorCode,
                      t.errorText,
                    )
              );
          });
      return r("WAPromiseRaceAbort")(_, t);
    }
    ((l.mapParsedMediaConn = g), (l.queryMediaConn = h));
  },
  98,
);
