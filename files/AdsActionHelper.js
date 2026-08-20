__d(
  "AdsActionHelper",
  ["AdsPoliticalAction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.getBannerCTAData = function (t, n, o) {
            var e = null,
              a = t.action_list,
              i = n != null ? t.disapproval_reason_to_action[n] : null;
            return (
              i == null ||
                i.forEach(function (t) {
                  var n = a[t];
                  if (n == null || n == null) return e;
                  switch (n.type) {
                    case 6:
                    case 7:
                      e = r("AdsPoliticalAction").getCTAData(n.props, o);
                      break;
                    default:
                      break;
                  }
                }),
              e
            );
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
