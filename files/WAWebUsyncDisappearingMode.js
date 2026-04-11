__d(
  "WAWebUsyncDisappearingMode",
  ["WAWap", "WAWebPrivacyGatingUtils"],
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
        a = { duration: n, t: r },
        i = e.maybeAttrString("ephemerality_disabled") === "true";
      return (
        i &&
          o(
            "WAWebPrivacyGatingUtils",
          ).isPAASupportForDisabledEphemeralityEnabled() &&
          (a.ephemeralityDisabled = !0),
        a
      );
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
