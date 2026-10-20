__d(
  "WAWebUsyncDisappearingMode",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.assertTag("disappearing_mode");
      var t = e.maybeChild("error");
      if (t)
        return {
          errorCode: t.attrInt("code"),
          errorText: t.attrString("text"),
        };
      var n = e.attrInt("duration", 0),
        r = e.attrInt("t"),
        o = { duration: n, t: r };
      return o;
    }
    var s = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "disappearing_mode";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap("disappearing_mode", null);
        }),
        (t.getUserElement = function (t) {
          return null;
        }),
        e
      );
    })();
    ((l.disappearingModeParser = e), (l.USyncDisappearingModeProtocol = s));
  },
  98,
);
