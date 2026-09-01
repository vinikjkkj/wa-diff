__d(
  "WAWebVoipMicrophoneToggleRequest",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 0,
      l = null;
    function s(t) {
      var n,
        r = t.isOwnerCurrent,
        o = t.isUnmuting;
      if (o && ((n = l) == null ? void 0 : n.isCurrent()) === !0) return null;
      var a = e + 1;
      e = a;
      var i = function () {
        return e === a && r();
      };
      return (
        (l = o ? { isCurrent: i, requestId: a } : null),
        {
          finish: function () {
            var e;
            ((e = l) == null ? void 0 : e.requestId) === a && (l = null);
          },
          isCurrent: i,
        }
      );
    }
    i.beginMicrophoneToggleRequest = s;
  },
  66,
);
