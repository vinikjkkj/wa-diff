__d(
  "useCreateVideoPlayerPassiveViewabilityInfo",
  ["removeFromArray", "useStable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("useStable")(s);
    }
    function s() {
      var e = [],
        t = null;
      return {
        setVideoPlayerViewabilityInfo: function (r) {
          ((t = r), e.forEach(u));
        },
        videoPlayerPassiveViewabilityInfo: {
          getCurrent: function () {
            return t;
          },
          subscribe: function (n) {
            return (
              e.push(n),
              {
                remove: function () {
                  r("removeFromArray")(e, n);
                },
              }
            );
          },
        },
      };
    }
    function u(e) {
      return e();
    }
    l.default = e;
  },
  98,
);
