__d(
  "WAWebUsyncTextStatus",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.assertTag("text_status");
      var t = e.maybeChild("error");
      if (t)
        return {
          errorCode: t.attrInt("code"),
          errorText: t.attrString("text"),
        };
      var n = e.hasAttr("text") ? e.attrString("text") : void 0,
        r = e.hasChild("emoji") ? e.child("emoji") : void 0,
        o =
          r != null && r.hasAttr("content")
            ? r == null
              ? void 0
              : r.attrString("content")
            : void 0,
        a = e.hasAttr("ephemeral_duration_sec")
          ? e.attrInt("ephemeral_duration_sec")
          : void 0,
        i = e.hasAttr("last_update_time")
          ? e.attrString("last_update_time")
          : void 0;
      return {
        text: n,
        emoji: o,
        ephemeralDurationSeconds: a,
        lastUpdateTime: i,
      };
    }
    var s = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.getName = function () {
          return "text_status";
        }),
        (t.getQueryElement = function () {
          return o("WAWap").wap("text_status", null);
        }),
        (t.getUserElement = function (t) {
          return null;
        }),
        e
      );
    })();
    ((l.textStatusParser = e), (l.USyncTextStatusProtocol = s));
  },
  98,
);
