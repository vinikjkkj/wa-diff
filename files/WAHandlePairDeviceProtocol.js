__d(
  "WAHandlePairDeviceProtocol",
  ["WABase64", "WABinary", "WAResultOrError", "WASmaxMdSetToCompanionRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WASmaxMdSetToCompanionRPC").receiveSetToCompanionRPC(e),
        n = t.makeSetToCompanionResponseClientResponse,
        r = t.parsedRequest,
        a = r.pairDeviceRef.map(function (e) {
          var t = e.elementValue,
            n = new (o("WABinary").Binary)(t);
          return n.readString(n.size());
        });
      return o("WAResultOrError").makeResult({ refs: a, makeAck: n });
    }
    var s = function (t) {
      var e = t.advSecretKey,
        n = t.publicAuthKey,
        r = t.publicIdentityKey,
        a = t.ref;
      return (
        a +
        "," +
        o("WABase64").encodeB64(n) +
        "," +
        o("WABase64").encodeB64(r) +
        "," +
        o("WABase64").encodeB64(e)
      );
    };
    ((l.parsePairDevice = e), (l.generateRegistrationQrCodeString = s));
  },
  98,
);
