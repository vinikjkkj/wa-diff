__d(
  "ZenonIceStatsParser",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = [],
        n = e.split("\r\n");
      return (
        n.forEach(function (e) {
          l(e) && t.push({ gen: s(e), type: u(e) });
        }),
        t
      );
    }
    function l(e) {
      return e.indexOf("candidate:") > -1;
    }
    function s(e) {
      var t = 0,
        n = e.match(/generation (\d+)/);
      return (n && (t = parseInt(n[1], 10)), t);
    }
    function u(e) {
      var t = e.match(/typ (host|relay|srflx|prflx)/);
      return t ? t[1] : "unknown";
    }
    i.extractIceInfo = e;
  },
  66,
);
