__d(
  "WAWebNewCTWASuggestionAction",
  [
    "WALogger",
    "WAWebApiParse",
    "WAWebBizGatingUtils",
    "WAWebBizNativeAdsWamLogger",
    "WAWebCTWASuggestionCollection",
    "WAWebCTWASuggestionModel",
    "WAWebExecApiCmd",
    "WAWebExternalLink.react",
    "WAWebRemoveInteractedCTWASuggestion",
    "WAWebUpdateCTWASuggestionTrackingCoolOffData",
    "WAWebUpdateCTWASuggestionTrackingNuxData",
    "WAWebWamEnumManageAdsEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t = e.id,
        n = new (o("WAWebCTWASuggestionModel").CTWASuggestionModel)({
          id: t,
          suggestion: e,
        });
      o("WAWebCTWASuggestionCollection").CTWASuggestionCollection.add(n);
    }
    function m(e) {
      o(
        "WAWebCTWASuggestionCollection",
      ).CTWASuggestionCollection.removeInteracted(e.id);
    }
    function p(t, n) {
      var a = t.id;
      if (
        (o(
          "WAWebCTWASuggestionCollection",
        ).CTWASuggestionCollection.removeInteracted(a),
        n)
      ) {
        var i = t.actionLink,
          l = o("WAWebApiParse").parseAPICmd(i);
        l.resultType === "INVALID"
          ? o("WAWebExternalLink.react").openExternalLink(i)
          : l.resultType === "MANAGE_ADS"
            ? r("WAWebExecApiCmd")({ cmdData: l, isExternal: !1 })
            : (l.resultType,
              o("WALogger").ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ctwaSuggestionInteracted: unsupported deep link command ",
                    "",
                  ])),
                l.resultType,
              ));
      }
      o("WAWebRemoveInteractedCTWASuggestion")
        .removeInteractedCTWASuggestion(a)
        .catch(function (e) {
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "ctwaSuggestionInteracted: remove failed",
              ])),
          );
        });
    }
    function _(e) {
      if (o("WAWebBizGatingUtils").adsActionBannersLoggingEnabled()) {
        var t = o("WAWebApiParse").parseAPICmd(e.actionLink);
        t.resultType === "MANAGE_ADS"
          ? o("WAWebBizNativeAdsWamLogger").logManageAdsEntryPointImpression(
              o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT
                .SMB_CHAT_LIST_CTWA_BANNER,
            )
          : t.resultType;
      }
    }
    function f(e) {
      var t = Array.from(e).sort(function (e, t) {
          return e.ts - t.ts;
        }),
        n = t.map(function (e) {
          return new (o("WAWebCTWASuggestionModel").CTWASuggestionModel)({
            id: e.id,
            suggestion: e,
          });
        });
      o(
        "WAWebCTWASuggestionCollection",
      ).CTWASuggestionCollection.initializeFromCache(n);
    }
    function g(e, t) {
      (o(
        "WAWebCTWASuggestionCollection",
      ).CTWASuggestionCollection.updateTrackingNuxData(e, t),
        o("WAWebUpdateCTWASuggestionTrackingNuxData")
          .updateCTWASuggestionTrackingNuxData(e, t)
          .catch(function (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "ctwaSuggestionNuxDataChanged: update failed",
                ])),
            );
          }));
    }
    function h(e, t) {
      (o(
        "WAWebCTWASuggestionCollection",
      ).CTWASuggestionCollection.updateTrackingCoolOffData(e, t),
        o("WAWebUpdateCTWASuggestionTrackingCoolOffData")
          .updateCTWASuggestionTrackingCoolOffData(e, t)
          .catch(function (e) {
            o("WALogger").ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "ctwaSuggestionCoolOffDataChanged: update failed",
                ])),
            );
          }));
    }
    ((l.newCTWASuggestion = d),
      (l.revokeCTWASuggestion = m),
      (l.ctwaSuggestionInteracted = p),
      (l.ctwaSuggestionShown = _),
      (l.loadedCTWASuggestions = f),
      (l.ctwaSuggestionNuxDataChanged = g),
      (l.ctwaSuggestionCoolOffDataChanged = h));
  },
  98,
);
