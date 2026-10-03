__d(
  "WAWebHatchConnectorsSearch",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = t.trim().toLocaleLowerCase();
      if (n === "") return e;
      var r = function (t) {
        return t.name.toLocaleLowerCase().includes(n);
      };
      return {
        connected: e.connected.filter(r),
        available: e.available.filter(r),
      };
    }
    i.filterHatchConnectorGroups = e;
  },
  66,
);
