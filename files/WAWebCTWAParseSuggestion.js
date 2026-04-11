__d(
  "WAWebCTWAParseSuggestion",
  [
    "WALogger",
    "WASmaxBizCtwaActionBannerSuggestionRPC",
    "WATimeUtils",
    "WAWebApiParse",
    "WAWebBizGatingUtils",
    "WAWebCtwaActionBannerUnderstandWamEvent",
    "WAWebUpdaterVersion",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = "recreate_ad",
      h = "manage_ads",
      y = "parseCTWASuggestion: missing action link";
    function C(t) {
      if (o("WAWebBizGatingUtils").adsActionBannersLoggingEnabled()) {
        var n = new (o(
          "WAWebCtwaActionBannerUnderstandWamEvent",
        ).CtwaActionBannerUnderstandWamEvent)();
        ((n.bannerIdentifier = t.bannerIdentifier),
          (n.validNotification = t.validNotification),
          t.clientLocale != null && (n.clientLocale = t.clientLocale),
          t.bannerLocale != null && (n.bannerLocale = t.bannerLocale),
          t.validLocale != null && (n.validLocale = t.validLocale),
          n.commitAndWaitForFlush().catch(function (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "parseCTWASuggestion: metric failed",
                ])),
            );
          }));
      }
    }
    function b(e) {
      var t = e.split("-");
      return t[1];
    }
    function v(e) {
      var t = o(
          "WASmaxBizCtwaActionBannerSuggestionRPC",
        ).receiveBannerSuggestionRPC(e.node()),
        n = t.parsedRequest,
        r = n.ctwaSuggestionBanner,
        a = n.ctwaSuggestionTargetEntityId,
        i = n.t,
        l = b(a);
      if (r == null) {
        (C({ bannerIdentifier: a, validNotification: !1 }),
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "parseCTWASuggestion: missing banner data (",
                ")",
              ])),
            l,
          ));
        return;
      }
      if (r.configRevoked === "true") return { type: "revokedBanner", id: a };
      var v = r.contentLocale,
        S = r.configDisplay,
        R = r.configExpiresAt,
        L = r.contentBodyElementValue,
        E = r.contentHeadingElementValue,
        k = r.contentHighlightElementValue,
        I = r.nativeAction,
        T = I.filter(function (e) {
          return e.platform === "web";
        });
      if (T.length === 0) {
        (C({ bannerIdentifier: a, validNotification: !1 }),
          a.endsWith(g) || a.includes(h)
            ? o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " (",
                      ")",
                    ])),
                  y,
                  l,
                )
                .sendLogs(
                  "parseCTWASuggestion-missing-action-link-${bannerType}",
                )
            : o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " (",
                    ")",
                  ])),
                y,
                l,
              ));
        return;
      } else if (T.length > 1) {
        (C({ bannerIdentifier: a, validNotification: !1 }),
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "parseCTWASuggestion: too many actions (",
                  ")",
                ])),
              l,
            )
            .sendLogs("parseCTWASuggestion-too-many-actions-${bannerType}"));
        return;
      }
      var D = T[0],
        x = D.minAppVersion,
        $ = new (o("WAWebUpdaterVersion").Version)(x),
        P = new (o("WAWebUpdaterVersion").Version)(
          o("WAWebUpdaterVersion").SANITIZED_VERSION_STR,
        );
      if (P.lt($)) {
        o("WALogger").WARN(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "parseCTWASuggestion: app version too old (",
              ")",
            ])),
          l,
        );
        return;
      }
      var N = D.localLink,
        M = o("WAWebApiParse").parseAPICmd(N);
      if (M.resultType === "INVALID") {
        if (!N.startsWith("https://")) {
          (C({ bannerIdentifier: a, validNotification: !1 }),
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "parseCTWASuggestion: invalid link (",
                    ")",
                  ])),
                l,
              )
              .sendLogs("parseCTWASuggestion-invalid-link-${bannerType}"));
          return;
        }
      } else if (M.resultType === "MANAGE_ADS") {
        if (!o("WAWebBizGatingUtils").adsActionManageAdsBannerEnabled()) {
          (C({ bannerIdentifier: a, validNotification: !1 }),
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "parseCTWASuggestion: manage ads not enabled (",
                  ")",
                ])),
              l,
            ));
          return;
        }
      } else {
        (M.resultType,
          C({ bannerIdentifier: a, validNotification: !1 }),
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "parseCTWASuggestion: invalid deep link (",
                  ", ",
                  ")",
                ])),
              l,
              M.resultType,
            )
            .sendLogs("parseCTWASuggestion-invalid-deep-link-${bannerType}"));
        return;
      }
      return {
        type: "banner",
        id: a,
        expiresAt: o("WATimeUtils").castToUnixTime(R),
        heading: E,
        body: L,
        highlight: k,
        actionLink: N,
        display: S,
        ts: o("WATimeUtils").castToUnixTime(i),
        bannerLocale: v,
      };
    }
    ((l.maybeReportMetric = C), (l.parseCTWASuggestion = v));
  },
  98,
);
