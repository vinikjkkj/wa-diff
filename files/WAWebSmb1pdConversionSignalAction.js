__d(
  "WAWebSmb1pdConversionSignalAction",
  [
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwa1pdConversionWamEvent",
    "WAWebCtwaConversationDepthUtils",
    "WAWebMobilePlatforms",
    "WAWebWamEnumCtwa1pdConversionType",
    "WAWebWamEnumCtwaDirectionFrom",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 1,
      s = "none";
    function u(e) {
      m(
        e,
        o("WAWebWamEnumCtwa1pdConversionType").CTWA_1PD_CONVERSION_TYPE
          .USER_BLOCK,
      );
    }
    function c(e) {
      m(
        e,
        o("WAWebWamEnumCtwa1pdConversionType").CTWA_1PD_CONVERSION_TYPE
          .USER_REPORT,
      );
    }
    function d(e) {
      m(
        e,
        o("WAWebWamEnumCtwa1pdConversionType").CTWA_1PD_CONVERSION_TYPE
          .USER_BLOCK_AND_REPORT,
      );
    }
    function m(t, n) {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var a = p(t);
        if (
          a != null &&
          o("WAWebCTWAGatingUtils").isCtwa1pdWebNbfSignalsEnabled()
        ) {
          var i = r("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(
            t,
          );
          new (o("WAWebCtwa1pdConversionWamEvent").Ctwa1pdConversionWamEvent)({
            ctwa1pdConversionType: n,
            ctwa1pdConversionSchemaVersion: e,
            ctwaTrackingPayload: a,
            ctwaConversationDepth: o(
              "WAWebCtwaConversationDepthUtils",
            ).getCtwaConversationDepth(t),
            ctwaConversationRepeat: o(
              "WAWebCtwaConversationDepthUtils",
            ).getCtwaConversationRepeat(t),
            ctwaDirectionFrom: o("WAWebWamEnumCtwaDirectionFrom")
              .CTWA_DIRECTION_FROM.BUSINESS,
            ctwaSignals: i != null ? i : void 0,
          }).commit();
        }
      }
    }
    function p(e) {
      var t = r(
        "WAWebCommonCTWADataSharing",
      ).getReceivedCTWAEligibilityFromChat(e);
      if (t == null || t.is3pdag || t.data == null) return null;
      var n = r("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(e);
      return _(n) ? null : t.data;
    }
    function _(e) {
      return e == null
        ? !1
        : e
            .split(",")
            .map(function (e) {
              return e.trim().toLowerCase();
            })
            .includes(s);
    }
    ((l.log1pdBlockConversionSignal = u),
      (l.log1pdReportConversionSignal = c),
      (l.log1pdBlockAndReportConversionSignal = d));
  },
  98,
);
