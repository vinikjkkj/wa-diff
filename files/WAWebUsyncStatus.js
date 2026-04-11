__d(
  "WAWebUsyncStatus",
  ["WAWap", "WAWebPrivacyGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      t.assertTag("status");
      var n = t.maybeChild("error");
      return n
        ? { errorCode: n.attrInt("code"), errorText: n.attrString("text") }
        : t.hasContent()
          ? t.contentString().length !== 0
            ? t.contentString()
            : e
          : t.hasAttr("code") && t.attrInt("code") === 401
            ? ""
            : e;
    }
    var u = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "status";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap("status", null);
        }),
        (t.getUserElement = function (t) {
          if (
            !o(
              "WAWebPrivacyGatingUtils",
            ).isProfileScrappingProtectionInUsyncEnabled()
          )
            return null;
          var e = t.getTcToken();
          return e ? o("WAWap").wap("tctoken", null, e) : null;
        }),
        e
      );
    })();
    ((l.statusParser = s), (l.USyncStatusProtocol = u));
  },
  98,
);
