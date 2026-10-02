__d(
  "WAHandlePrekeyLowCountNotification",
  ["WAHandleEncryptNotification"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.encryptType,
        n = t.id,
        r = t.makeAck,
        a = t.offline;
      return o("WAHandleEncryptNotification")
        .handleEncryptNotification({
          ack: r,
          notification: { encryptType: e },
          offline: a,
          stanzaId: n,
          type: "encrypt",
        })
        .then(function () {
          return r();
        });
    };
    l.handlePrekeyLowCountNotification = e;
  },
  98,
);
