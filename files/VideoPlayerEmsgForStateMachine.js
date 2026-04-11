__d(
  "VideoPlayerEmsgForStateMachine",
  ["deepEquals"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n, r, o;
      return [e.type, e.emsgScheme, (n = e.emsgId) != null ? n : ""]
        .concat(
          t
            ? [
                (r = e.emsgStartTimeInSec) != null ? r : "",
                (o = e.emsgDurationInSec) != null ? o : "",
              ]
            : [],
        )
        .join(":");
    }
    function s(t, n) {
      return (t.set(e(n, !0), n), t);
    }
    function u(e, t) {
      return t.reduce(s, new Map(e));
    }
    function c(t, n, o) {
      var a =
          n == null
            ? []
            : Array.from(t.values())
                .filter(function (e) {
                  var t = e.emsgStartTimeInSec,
                    r = e.emsgDurationInSec || 0;
                  return t != null && n >= t && n < t + r;
                })
                .sort(function (e, t) {
                  return (
                    (e.emsgStartTimeInSec || 0) - (t.emsgStartTimeInSec || 0)
                  );
                }),
        i = Array.from(
          a
            .reduce(function (t, n) {
              return (t.set(e(n, !1), n), t);
            }, new Map())
            .values(),
        );
      return r("deepEquals")(o, i) ? o : i;
    }
    ((l.makeUpdatedAllEmsgBoxes = u), (l.makeUpdatedActiveEmsgBoxes = c));
  },
  98,
);
