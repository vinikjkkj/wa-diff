__d(
  "WAWebOfflineResumeMsgProcessReporterWorkerCompatible",
  ["$InternalEnum", "nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        Decryption: 0,
        Parsing: 1,
        PreProcessing: 2,
        Processing: 3,
        PostProcessing: 4,
        ProcessReportingTokenInfo: 5,
        DBStoring: 6,
      }),
      s;
    function u(e) {
      s = e;
    }
    function c() {
      return r("nullthrows")(s, "MsgProcessReporter is not initialised");
    }
    var d = {
      stage: e,
      startMarker: function (t) {
        return c().startMarker(t);
      },
      activate: function (t) {
        return c().activate(t);
      },
    };
    ((l.MsgProcessStage = e),
      (l.setHandler = u),
      (l.getHandler = c),
      (l.msgProcessReporter = d));
  },
  98,
);
