__d(
  "WAWebMuteExpirations",
  ["fbt", "WAWeb-moment", "WAWebClock"],
  function (t, n, r, o, a, i, l, s) {
    var e = [
      {
        getLabel: function () {
          return s._(/*BTDS*/ "8 hours");
        },
        duration: 8,
        radioId: "8-hours",
      },
      {
        getLabel: function () {
          return s._(/*BTDS*/ "1 week");
        },
        duration: 168,
        radioId: "1-week",
      },
      {
        getLabel: function () {
          return s._(/*BTDS*/ "Always");
        },
        duration: Number.POSITIVE_INFINITY,
        radioId: "always",
      },
    ];
    function u() {
      return e[0].duration;
    }
    function c(e) {
      return e === Number.POSITIVE_INFINITY
        ? o("WAWebClock").MUTE_ALWAYS_EXPIRATION_SENTINEL
        : e * 60 * 60 + r("WAWeb-moment")().unix();
    }
    ((l.ALL_MUTE_DURATIONS = e),
      (l.getDefaultMuteDuration = u),
      (l.calculateMuteExpiration = c));
  },
  226,
);
