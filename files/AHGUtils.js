__d(
  "AHGUtils",
  ["CurrentBusinessUser", "URI", "isTruthy"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "https://www.facebook.com/business/help/";
    function u(t, n) {
      var a = new (e || (e = r("URI")))(s + t);
      if (r("isTruthy")(n))
        for (var i of n) {
          var l = i[0],
            u = i[1];
          a.addQueryData(l, u);
        }
      return (
        o("CurrentBusinessUser").isFacebookWorkAccount &&
          a.setSubdomain("business"),
        a
      );
    }
    l.getHelpCenterURI = u;
  },
  98,
);
