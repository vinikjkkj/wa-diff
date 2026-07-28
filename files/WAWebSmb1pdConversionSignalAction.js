__d(
  "WAWebSmb1pdConversionSignalAction",
  [
    "WAWebCTWAGatingUtils",
    "WAWebCommonCTWADataSharing",
    "WAWebCtwa1pdConversionWamEvent",
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
        var r = p(t);
        if (
          r != null &&
          o("WAWebCTWAGatingUtils").isCtwa1pdWebNbfSignalsEnabled()
        ) {
          var a = o("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(
            t,
          );
          new (o("WAWebCtwa1pdConversionWamEvent").Ctwa1pdConversionWamEvent)({
            ctwa1pdConversionType: n,
            ctwa1pdConversionSchemaVersion: e,
            ctwaTrackingPayload: r,
            ctwaConversationDepth: 0,
            ctwaConversationRepeat: 0,
            ctwaDirectionFrom: o("WAWebWamEnumCtwaDirectionFrom")
              .CTWA_DIRECTION_FROM.BUSINESS,
            ctwaSignals: a != null ? a : void 0,
          }).commit();
        }
      }
    }
    function p(e) {
      var t = o(
        "WAWebCommonCTWADataSharing",
      ).getReceivedCTWAEligibilityFromChat(e);
      if (t == null || t.is3pdag || t.data == null) return null;
      var n = o("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(e);
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
