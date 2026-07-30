__d(
  "WAWebUsyncBusiness",
  ["WAWap", "WAWebCommonParsersVerifiedName", "WAWebJidToWid"],
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
        a = n ? r("WAWebCommonParsersVerifiedName")(n) : null,
        i = e.hasAttr("pn_jid")
          ? o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("pn_jid"))
          : null;
      return { pn: i, verifiedName: a };
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
