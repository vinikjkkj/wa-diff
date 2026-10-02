__d(
  "WAHandlePairSuccessProtocol",
  ["WAAdv", "WAResultOrError", "WASmaxMdSetRegRPC"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WASmaxMdSetRegRPC").receiveSetRegRPC(e),
        n = t.makeSetRegResponseClientResponse,
        r = t.makeSetRegResponseError,
        a = t.makeSetRegResponseHostedClientResponse,
        i = t.parsedRequest,
        l = i.pairSuccessBiz,
        s = i.pairSuccessDeviceIdentityElementValue,
        u = i.pairSuccessDeviceJid,
        c = i.pairSuccessPlatformName;
      return o("WAResultOrError").makeResult({
        bizName: l == null ? void 0 : l.name,
        platformName: c,
        deviceJid: u,
        advSignedDeviceIdentityHmacProtobuf:
          o("WAAdv").castToAdvSignedDeviceIdentityHmacProtobuf(s),
        makeSetRegResponseHostedClientResponse: a,
        makeSetRegResponseClientResponse: n,
        makeSetRegResponseError: r,
      });
    }
    l.parsePairSuccess = e;
  },
  98,
);
