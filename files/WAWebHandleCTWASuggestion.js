__d(
  "WAWebHandleCTWASuggestion",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebBizGatingUtils",
    "WAWebCTWAParseSuggestion",
    "WAWebSchemaCTWASuggestion",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = ["bannerLocale"];
    async function d(e) {
      e.type === "banner" ? await m(e) : (e.type, await p(e));
    }
    async function m(t) {
      if (o("WAWebBizGatingUtils").adsActionBannersEnabled()) {
        var n = t.bannerLocale,
          r = babelHelpers.objectWithoutPropertiesLoose(t, c),
          a = await o("WAWebBackendApi").frontendSendAndReceive(
            "getNormalizedLocale",
            void 0,
          ),
          i = await o("WAWebBackendApi").frontendSendAndReceive(
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
          await o("WAWebSchemaCTWASuggestion")
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
    }
    async function p(e) {
      (await o("WAWebSchemaCTWASuggestion")
        .getCTWASuggestionTable()
        .remove(e.id),
        o("WAWebBackendApi").frontendFireAndForget("revokeCTWASuggestion", {
          suggestion: e,
        }));
    }
    l.handleCTWASuggestion = d;
  },
  98,
);
