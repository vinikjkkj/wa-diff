__d(
  "NetworkStatusTracker",
  ["NetworkStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("NetworkStatus").isOnline(),
      s = new Set();
    function u(t) {
      e !== t &&
        ((e = t),
        s.forEach(function (t) {
          t({ online: e });
        }));
    }
    var c = {
      emit: function (t) {
        u(t);
      },
      isOnline: function () {
        return e;
      },
      onChange: function (t) {
        return (
          s.add(t),
          {
            remove: function () {
              s.delete(t);
            },
          }
        );
      },
    };
    r("NetworkStatus").onChange(function (e) {
      c.emit(e.online);
    });
    var d = c;
    l.default = d;
  },
  98,
);
