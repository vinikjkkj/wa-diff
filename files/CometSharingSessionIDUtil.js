__d(
  "CometSharingSessionIDUtil",
  ["uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("uuidv4")(),
      s = null,
      u = !1,
      c = function () {
        return e;
      },
      d = function () {
        return s;
      },
      m = function () {
        return u;
      },
      p = function (t) {
        u = t;
      },
      _ = function () {
        ((s = e), (u = !1), (e = r("uuidv4")()));
      },
      f = {
        genNext: _,
        getIsAnythingSharedInCurrentSession: m,
        getPreviousSharingSessionID: d,
        getSharingSessionID: c,
        setIsAnythingSharedInCurrentSession: p,
      };
    l.default = f;
  },
  98,
);
