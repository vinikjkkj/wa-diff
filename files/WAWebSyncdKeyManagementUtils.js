__d(
  "WAWebSyncdKeyManagementUtils",
  ["WAWebSyncdKeyTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return new DataView(o("WAWebSyncdKeyTypes").fromSyncKeyId(e)).getUint16(
        0,
      );
    }
    function s(e) {
      return new DataView(o("WAWebSyncdKeyTypes").fromSyncKeyId(e)).getUint32(
        2,
      );
    }
    function u(e) {
      return s(e) + 1;
    }
    ((l.getKeyDeviceId = e), (l.getKeyEpoch = s), (l.generateNewKeyEpoch = u));
  },
  98,
);
