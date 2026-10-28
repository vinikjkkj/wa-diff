__d(
  "WAWebHatchApprovalTimeText",
  ["WAWebClock"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3;
    function s(t) {
      if (t <= 0) return null;
      var n = Math.floor(t / e);
      return u(n)
        ? o("WAWebClock").Clock.timestampStr(n)
        : String(o("WAWebClock").Clock.relativeDateAndTimeStr(n));
    }
    function u(t) {
      var n = t + o("WAWebClock").Clock.getSkew();
      return (
        new Date(n * e).toDateString() === new Date(Date.now()).toDateString()
      );
    }
    l.hatchApprovalTimeText = s;
  },
  98,
);
