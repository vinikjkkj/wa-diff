__d(
  "WAWebUsyncUsername",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.assertTag("username");
      var t = e.maybeChild("error");
      return t
        ? { errorCode: t.attrInt("code"), errorText: t.attrString("text") }
        : e.hasContent()
          ? e.contentString()
          : null;
    }
    var s = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "username";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap("username", null);
        }),
        (t.getUserElement = function (t) {
          return null;
        }),
        e
      );
    })();
    ((l.usernameParser = e), (l.USyncUsernameProtocol = s));
  },
  98,
);
