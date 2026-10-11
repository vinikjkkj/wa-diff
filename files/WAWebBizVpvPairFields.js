__d(
  "WAWebBizVpvPairFields",
  [
    "WALogger",
    "WAWebBusinessPairEligibilityProvider",
    "WAWebLidMigrationUtils",
    "WAWebWamEnumCapiPairBusinessChannelType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      try {
        var r = o(
          "WAWebBusinessPairEligibilityProvider",
        ).resolveBusinessPairEligibility(
          o("WAWebWidFactory").createWid(n),
          t.id,
        );
        if (r.result !== "ELIGIBLE") return;
        var a = o("WAWebLidMigrationUtils").toUserLid(r.businessWid);
        if (a == null) return;
        ((t.capiPairBusinessLid = a.toString()),
          (t.capiPairBusinessChannel =
            r.channel === "CLOUD_API"
              ? o("WAWebWamEnumCapiPairBusinessChannelType")
                  .CAPI_PAIR_BUSINESS_CHANNEL_TYPE.CLOUD_API
              : r.channel === "COEX"
                ? o("WAWebWamEnumCapiPairBusinessChannelType")
                    .CAPI_PAIR_BUSINESS_CHANNEL_TYPE.COEX
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        r.channel,
                    );
                  })()));
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[biz-vpv] pair context lookup failed, VPV logged without pair fields",
              ])),
          )
          .sendLogs("biz-vpv-pair-context-failed", { sampling: 0.01 });
      }
    }
    l.applyBizVpvPairFields = s;
  },
  98,
);
