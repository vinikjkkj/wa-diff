__d(
  "WAWebUsernameSearchLogger",
  ["WAWebContactSearchExperienceWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.log = function (t) {
            var e = new (o(
              "WAWebContactSearchExperienceWamEvent",
            ).ContactSearchExperienceWamEvent)(t);
            (e.isUsernameSearch == null && (e.isUsernameSearch = !1),
              e.commit());
          }),
          e
        );
      })(),
      s = new e();
    l.UsernameSearchLogger = s;
  },
  98,
);
