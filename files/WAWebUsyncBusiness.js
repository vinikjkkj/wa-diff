__d(
  "WAWebUsyncBusiness",
  ["WAWap", "WAWebCommonParsersVerifiedName"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.assertTag("business");
      var t = e.maybeChild("error");
      if (t)
        return {
          errorCode: t.attrInt("code"),
          errorText: t.attrString("text"),
        };
      var n = e.maybeChild("verified_name"),
        o = n ? r("WAWebCommonParsersVerifiedName")(n) : null;
      return { verifiedName: o };
    }
    var s = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "business";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap(
            "business",
            null,
            o("WAWap").wap("verified_name", null),
          );
        }),
        (t.getUserElement = function (t) {
          return null;
        }),
        e
      );
    })();
    ((l.businessParser = e), (l.USyncBusinessProtocol = s));
  },
  98,
);
