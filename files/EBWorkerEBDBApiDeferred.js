__d(
  "EBWorkerEBDBApiDeferred",
  ["requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("EBWorkerEBDBApi").__setRef(
      "EBWorkerEBDBApiDeferred",
    );
    function s() {
      return e.load().then(function (e) {
        return e.startListeningEBDeviceRegistrations();
      });
    }
    function u(t) {
      return e.load().then(function (e) {
        return e.addNewDevice(t);
      });
    }
    function c(t) {
      return e.load().then(function (e) {
        return e.trackConsistency(t);
      });
    }
    function d(t) {
      return e.load().then(function (e) {
        return e.trackOverprompting(t);
      });
    }
    ((l.startListeningEBDeviceRegistrations = s),
      (l.addNewDevice = u),
      (l.trackConsistency = c),
      (l.trackOverprompting = d));
  },
  98,
);
