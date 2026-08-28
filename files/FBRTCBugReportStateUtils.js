__d(
  "FBRTCBugReportStateUtils",
  ["ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e;
      return {
        fluxState: (e = r("ifRequired"))("RTWebFluxDebugger", function (e) {
          return e.fluxDumpState();
        }),
        recoilStore: e("ZenonRecoilStoreDump", function (e) {
          return e.serialize();
        }),
        zenonCallsModel: e("ZenonCallsModelEmitter", function (e) {
          var t = e.CallsModelEmitterInstance;
          return t.getCallsModel();
        }),
        zenonUIDebugState: e("ZenonDebugStoreDump", function (e) {
          return e.serialize();
        }),
      };
    }
    l.getStateSnapshot = e;
  },
  98,
);
