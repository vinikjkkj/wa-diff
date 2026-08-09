__d(
  "MAWCreateOptimisticThread",
  [
    "I64",
    "LSAuthorityLevel",
    "LSCreateOfflineThreadingIDStoredProcedure",
    "LSFactory",
    "LSIntEnum",
    "LSMailboxType",
    "LSRtcCallState",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield r("LSCreateOfflineThreadingIDStoredProcedure")(
              r("LSFactory")(t),
              { timestampMs: (e || (e = o("I64"))).of_float(Date.now()) },
            ),
            a = n[0];
          return a;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = {
            authorityLevel: (s || (s = o("LSIntEnum"))).ofNumber(
              r("LSAuthorityLevel").OPTIMISTIC,
            ),
            folderName: "inbox",
            lastReadWatermarkTimestampMs: (e || (e = o("I64"))).of_float(0),
            mailboxType: s.ofNumber(r("LSMailboxType").MESSENGER),
            ongoingCallState: s.ofNumber(r("LSRtcCallState").NO_ONGOING_CALL),
            parentThreadKey: e.zero,
            threadKey: n,
            threadType: s.ofNumber(15),
          };
          return (yield t.threads.put(a), n);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield u(e);
          return (yield d(e, t), t);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.createOfflineThreadingId = u),
      (l.createOptimisticThreadWithThreadKey = d),
      (l.createOptimisticThread = p));
  },
  98,
);
