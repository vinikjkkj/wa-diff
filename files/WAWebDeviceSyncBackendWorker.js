__d(
  "WAWebDeviceSyncBackendWorker",
  [
    "NativeSchedulerTickStrategy",
    "TaskScheduler",
    "WAWebAdvKeyIndexSignatureVerify",
    "WAWebProtobufsAdv.pb",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("TaskScheduler").taskScheduler(
      "device-sync",
      { concurrency: 1 },
      o("NativeSchedulerTickStrategy").makeNativeSchedulerTickStrategy(),
    );
    function s(e) {
      var t = e.localPrimaryIdentity,
        n = e.signedKeyIndexBytes,
        r = new Uint8Array(n),
        a;
      try {
        a = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVSignedKeyIndexListSpec,
          r,
        );
      } catch (e) {
        return null;
      }
      var i = a.accountSignature,
        l = a.details;
      if (
        i == null ||
        l == null ||
        !o("WAWebAdvKeyIndexSignatureVerify").verifyKeyIndexListSignature(
          new Uint8Array(l),
          new Uint8Array(i),
          t,
        )
      )
        return null;
      var s;
      try {
        s = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsAdv.pb").ADVKeyIndexListSpec,
          l,
        );
      } catch (e) {
        return null;
      }
      var u = s,
        c = u.accountType,
        d = u.currentIndex,
        m = u.rawId,
        p = u.timestamp,
        _ = u.validIndexes;
      return p == null || m == null
        ? null
        : {
            timestamp: p,
            rawId: m,
            validIndexes: _,
            currentIndex: d,
            accountType: c,
          };
    }
    var u = 50;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = [],
            r = 0;
          for (var o of t)
            (n.push(s(o)), r++, r % u === 0 && (yield e.yield()));
          return n;
        })),
        d.apply(this, arguments)
      );
    }
    ((l.decodeSignedKeyIndexBytes = s), (l.decodeSignedKeyIndexBytesBatch = c));
  },
  98,
);
