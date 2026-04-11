__d(
  "WAWebHandleCTWASuggestion",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebCTWAParseSuggestion",
    "WAWebSchemaCTWASuggestion",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["bannerLocale"];
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e.type === "banner" ? yield p(e) : (e.type, yield f(e));
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebBizGatingUtils").adsActionBannersEnabled()) {
            var n = t.bannerLocale,
              r = babelHelpers.objectWithoutPropertiesLoose(t, c),
              a = yield o("WAWebBackendApi").frontendSendAndReceive(
                "getNormalizedLocale",
                void 0,
              ),
              i = yield o("WAWebBackendApi").frontendSendAndReceive(
                "normalizeLocaleToWajsLocale",
                { locale: n },
              );
            if (i !== a) {
              (o("WAWebCTWAParseSuggestion").maybeReportMetric({
                bannerIdentifier: t.id,
                validNotification: !1,
                clientLocale: a,
                bannerLocale: n,
                validLocale: !1,
              }),
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleCTWASuggestion: locale mismatch",
                    ])),
                ));
              return;
            }
            o("WAWebCTWAParseSuggestion").maybeReportMetric({
              bannerIdentifier: t.id,
              validNotification: !0,
              clientLocale: a,
              bannerLocale: n,
              validLocale: !0,
            });
            var l = r;
            if (!o("WATimeUtils").isInFuture(l.expiresAt)) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "handleCTWASuggestion: expired",
                  ])),
              );
              return;
            }
            try {
              yield o("WAWebSchemaCTWASuggestion")
                .getCTWASuggestionTable()
                .create(l);
            } catch (e) {
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "handleCTWASuggestion: suggestion de-duped",
                  ])),
              );
              return;
            }
            o("WAWebBackendApi").frontendFireAndForget("newCTWASuggestion", {
              suggestion: l,
            });
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebSchemaCTWASuggestion")
            .getCTWASuggestionTable()
            .remove(e.id),
            o("WAWebBackendApi").frontendFireAndForget("revokeCTWASuggestion", {
              suggestion: e,
            }));
        })),
        g.apply(this, arguments)
      );
    }
    l.handleCTWASuggestion = d;
  },
  98,
);
