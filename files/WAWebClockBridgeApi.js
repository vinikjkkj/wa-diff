__d(
  "WAWebClockBridgeApi",
  ["WAWebClock"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setWebClockSkew: function (t) {
        var e = t.newClockSkew;
        o("WAWebClock").Clock.setSkew(e);
      },
      setIs24Hour: function (t) {
        var e = t.is24Hour;
        o("WAWebClock").Clock.setIs24Hour(
          e,
          o("WAWebClock").TimeFormatSource.PhoneTimeFormat,
        );
      },
    };
    l.ClockBridgeApi = e;
  },
  98,
);
