__d(
  "WAWebPastParticipantCollection",
  [
    "WATimeUtils",
    "WAWebCollection",
    "WAWebGroupConstants",
    "WAWebGroupParticipantModel",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getValidRecords = function () {
          return this.filter(function (e) {
            var t = o("WATimeUtils").castToUnixTime(e.leaveTs),
              n =
                o("WATimeUtils").DAY_SECONDS *
                o("WAWebGroupConstants").PAST_PARTICIPANT_EXPIRATION_DAYS;
            return o("WATimeUtils").happenedWithin(t, n);
          });
        }),
        t
      );
    })(r("WAWebCollection"));
    ((e.model = r("WAWebGroupParticipantModel")),
      (e.comparator = function (e, t) {
        return t.leaveTs - e.leaveTs;
      }),
      (l.default = e));
  },
  98,
);
