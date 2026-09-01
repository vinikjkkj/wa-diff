__d(
  "VideoPlayerNextgendashHostSubscribeToEventTarget",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r, o) {
      var a = [];
      return (
        new Set(r).forEach(function (r) {
          var i = function (a) {
            var n = e.host.clock(),
              i = a.timeStamp,
              l = n.perfMs - i,
              s = { perfMs: i, unixMs: n.unixMs - l };
            o({
              domEventAdjustedClock: s,
              domEventClock: n,
              domEventType: r,
              eventTarget: t,
            });
          };
          (a.push([r, i]), n.addEventListener(r, i));
        }),
        function () {
          a.forEach(function (e) {
            var t = e[0],
              r = e[1];
            n.removeEventListener(t, r);
          });
        }
      );
    }
    i.subscribeToHostEventTarget = e;
  },
  66,
);
