__d(
  "WAWebUsyncBusiness",
  ["WAWap", "WAWebCommonParsersVerifiedName", "WAWebJidToWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      e.assertTag("business");
      var n = e.maybeChild("error");
      if (n)
        return {
          errorCode: n.attrInt("code"),
          errorText: n.attrString("text"),
        };
      var a = e.maybeChild("verified_name"),
        i = a ? r("WAWebCommonParsersVerifiedName")(a) : null,
        l = e.hasAttr("pn_jid")
          ? o("WAWebJidToWid").deviceJidToUserWid(e.attrDeviceJid("pn_jid"))
          : null,
        s =
          (t = e.maybeChild("profile")) == null ||
          (t = t.maybeChild("aea_account_type")) == null
            ? void 0
            : t.maybeAttrString("value");
      return { pn: l, verifiedName: i, aeaAccountType: s };
    }
    var s = (function () {
      function e(e) {
        this.profileVersion = e;
      }
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "business";
        }),
        (t.getQueryElement = function () {
          var e = this.profileVersion;
          return o("WAWap").wap(
            "business",
            null,
            o("WAWap").wap("verified_name", null),
            e != null
              ? o("WAWap").wap("profile", { v: o("WAWap").INT(e) })
              : null,
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
