__d(
  "adsDraftGetAdsErrorFromDraftError",
  [
    "errorCode",
    "errorDesc",
    "AdsAPIAdgroupPaths",
    "AdsError",
    "AdsErrorsCTAStrings",
    "UsabilityFlow63Utils",
    "emptyObject",
    "getAdsErrorExtraData",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = (
          (t = (n = e.error_description) != null ? n : e.error_message) != null
            ? t
            : ""
        ).toString();
      return (
        r.includes("omnichannel_link_spec['web']['url']") &&
        o("UsabilityFlow63Utils").is3COWebURLErrorImprovementsEnabled()
      );
    }
    function c(t, n) {
      var a;
      if ((n === void 0 && (n = {}), e(t)))
        return r("AdsError").createError(
          2446458,
          u._(function (e, t) {
            return e._(
              /*BTDS*/ "Ad is missing a Website URL: To publish your ad, go to Destination and add a Website URL.",
            );
          }, {}),
          babelHelpers.extends({}, n, {
            cta: r("AdsErrorsCTAStrings").ADD_URL_CTA,
            level: r("AdsError").Level.WARN,
            path: r("AdsAPIAdgroupPaths").CREATIVE.OMNICHANNEL_LINK_SPEC.WEB
              .URL,
            isServerError: !0,
            helpCenterID: t.help_center_id,
            wwwRequestID: t.www_request_id,
            errorPlacementType: t.error_placement,
            opesMid: t.opes_mid,
          }),
        );
      var i = Number(t.error_code),
        l = t.error_description || t.error_message || "?",
        s =
          (a = o("getAdsErrorExtraData").getAdsErrorExtraData(i)) != null
            ? a
            : r("emptyObject"),
        c = babelHelpers.extends({}, n, s, {
          path: t.blame_field_spec || s.path || null,
          helpCenterID: t.help_center_id,
          isServerError: !0,
          wwwRequestID: t.www_request_id,
          errorPlacementType: t.error_placement,
          opesMid: t.opes_mid,
        });
      return t.error_severity === "warning"
        ? r("AdsError").createNotice(t.error_code, l.toString(), c)
        : t.error_severity === "quiet"
          ? r("AdsError").createError(
              t.error_code,
              l.toString(),
              babelHelpers.extends({}, c, { level: r("AdsError").Level.QUIET }),
            )
          : r("AdsError").createError(t.error_code, l.toString(), c);
    }
    l.default = c;
  },
  226,
);
