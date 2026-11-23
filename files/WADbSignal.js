__d(
  "WADbSignal",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return e + "_" + t + "_" + String(n);
    }
    var l = {
        abProps: "abProps",
        authKeyPair: "authKeyPair",
        cat: "cat",
        certificateChain: "certificateChain",
        clockSkew: "clockSkew",
        deviceId: "deviceId",
        deviceUUID: "deviceUUID",
        edgeInfo: "edgeInfo",
        fbid: "fbid",
        identityKeyPair: "identityKeyPair",
        lastPrekeyGenerationId: "lastPrekeyGenerationId",
        lastPrekeyId: "lastPrekeyId",
        lastSessionDeviceWasLinkedTo: "lastSessionDeviceWasLinkedTo",
        lastSignedPrekeyId: "lastSignedPrekeyId",
        regId: "regId",
        registrationVersion: "registrationVersion",
        deviceRegUnixTime: "deviceRegUnixTime",
      },
      s = { msgrDeviceId: "msgrDeviceId" },
      u = { registrationHistory: "registrationHistory" };
    ((i.buildSenderKeySessionId = e),
      (i.MetaKeysEnum = l),
      (i.PlainTextMetaKeysEnum = u));
  },
  66,
);
