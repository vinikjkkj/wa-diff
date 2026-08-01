__d(
  "DeferredCookie",
  [
    "CSTXCookieRecordConsentControllerRouteBuilder",
    "Cookie",
    "CookieConsent",
    "FBLogger",
    "SubscriptionList",
    "URLSearchParams",
    "cr:1083116",
    "cr:3376",
    "flattenPHPQueryData",
    "gkx",
    "nullthrows",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map(),
      u = !1,
      c = new Map(),
      d = new Map(),
      m = {
        addToQueue: function (n, o, a, i, l, u, c, d) {
          if ((e || (e = r("CookieConsent"))).hasFirstPartyConsent()) {
            l
              ? r("Cookie").setWithoutChecksIfFirstPartyContext(
                  n,
                  o,
                  a,
                  i,
                  c,
                  d,
                )
              : r("Cookie").setWithoutChecks(n, o, a, i, c, d);
            return;
          }
          s.has(n) ||
            s.set(n, {
              name: n,
              value: o,
              nMilliSecs: a,
              path: i,
              firstPartyOnly: l,
              secure: c,
              domain: d,
            });
        },
        getIsDeferredCookieInQueue: function (t) {
          return s.has(t);
        },
        flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT:
          function () {
            (s.forEach(function (e, t) {
              e.firstPartyOnly
                ? r("Cookie").setWithoutChecksIfFirstPartyContext(
                    e.name,
                    e.value,
                    e.nMilliSecs,
                    e.path,
                    e.secure,
                    e.domain,
                  )
                : r("Cookie").setWithoutChecks(
                    e.name,
                    e.value,
                    e.nMilliSecs,
                    e.path,
                    e.secure,
                    e.domain,
                  );
            }),
              s.clear(),
              (e || (e = r("CookieConsent"))).setConsented());
            for (var t of c) t[1].fireCallbacks();
            for (var n of d)
              (
                e || (e = r("CookieConsent"))
              ).hasIndividualThirdPartyIntegrationConsent(n[0]) &&
                n[1].fireCallbacks();
          },
        flushAllCookiesINTERNALONLY: function (t, o, a, i, l, s, c) {
          (t === void 0 && (t = !1),
            a === void 0 && (a = !1),
            i === void 0 && (i = !1),
            s === void 0 && (s = !1),
            m.flushAllCookiesWithoutRecordingConsentDONOTCALLBEFORECONSENT());
          var e = null,
            d = {
              accept_only_essential: i,
              opted_in_controls: l,
              consent_to_everything: s,
            };
          o != null &&
            ((e = Object.fromEntries(o)),
            (d = {
              optouts: e,
              accept_only_essential: i,
              opted_in_controls: l,
              consent_to_everything: s,
            }));
          var p = r("flattenPHPQueryData")(d);
          if (!u) {
            var _ = r("CSTXCookieRecordConsentControllerRouteBuilder").buildUri(
                {},
              ),
              f = new (r("URLSearchParams"))(location.search).get(
                "ig_3p_controls",
              );
            if (f === "on") {
              var g = _.addQueryParam("ig_3p_controls", "on");
              _ = g != null ? g : _;
            }
            u = !0;
            var h = function () {
              if ((c && c(), t && location.reload(), a)) {
                var e = document.getElementsByTagName("iframe");
                e.length > 0 && location.reload();
              }
            };
            n("cr:3376") != null
              ? r("promiseDone")(
                  n("cr:3376")(_.toString(), { data: p, method: "POST" }),
                  function () {
                    return h();
                  },
                  function (e) {
                    r("gkx")("20935") &&
                      r("FBLogger")("comet_infra").mustfix(
                        "Cookie consent has not been set successfully: %s",
                        e.errorMsg,
                      );
                  },
                )
              : n("cr:1083116") != null &&
                new (n("cr:1083116"))(_.toString())
                  .setData(p)
                  .setHandler(function () {
                    return h();
                  })
                  .send();
          }
        },
        registerCallbackOnFirstPartyCookieFlush: function (n) {
          (e || (e = r("CookieConsent"))).hasFirstPartyConsent()
            ? n()
            : (c.has(1) || c.set(1, new (r("SubscriptionList"))()),
              r("nullthrows")(c.get(1)).add(n));
        },
        registerCallbackOnCookieFlushWithIntegrations: function (n, o) {
          var t = (e || (e = r("CookieConsent"))).hasThirdPartyConsent([n]);
          t.get(n) === !0
            ? o()
            : (d.has(n) || d.set(n, new (r("SubscriptionList"))()),
              r("nullthrows")(d.get(n)).add(o));
        },
      },
      p = m;
    l.default = p;
  },
  98,
);
