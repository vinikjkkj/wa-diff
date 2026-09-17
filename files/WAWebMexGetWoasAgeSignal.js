__d(
  "WAWebMexGetWoasAgeSignal",
  [
    "WABase64",
    "WABase64UrlSafe",
    "WALogger",
    "WAWebMexClient",
    "WAWebMexGetWoasAgeSignalQuery.graphql",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = e !== void 0 ? e : (e = n("WAWebMexGetWoasAgeSignalQuery.graphql")),
      d = "o18";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          try {
            n = yield o("WAWebMexClient").fetchQuery(c, {
              input: { query_input: [{ jid: e.toJid() }] },
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[age-gating] WOAS fetch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("subscription-age-gating-woas-fetch-failed", {
                  sampling: 0.01,
                }),
              null
            );
          }
          var a =
            (t = n) == null ||
            (t = t.xwa2_fetch_wa_users) == null ||
            (t = t[0]) == null ||
            (t = t.age_collection_info) == null
              ? void 0
              : t.assets;
          if (a == null) return null;
          for (var i of a)
            if (!(i == null || i.name !== "WOAS")) {
              var l = i.ttl_sec,
                s = i.value;
              if (!(s == null || s === "" || l == null || l <= 0)) {
                var d = _(s);
                if (!(d == null || d === "")) return { ttlSec: l, value: d };
              }
            }
          return null;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      try {
        return new TextDecoder().decode(
          new Uint8Array(
            o("WABase64").decodeB64(
              o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
            ),
          ),
        );
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[age-gating] WOAS asset value was not decodable",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("subscription-age-gating-woas-decode-failed", {
              sampling: 0.01,
            }),
          null
        );
      }
    }
    ((l.WOAS_OVER_18_VALUE = d), (l.fetchWoasAgeSignal = m));
  },
  98,
);
