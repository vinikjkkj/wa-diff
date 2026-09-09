__d(
  "WAWebPastParticipantCollection",
  [
    "WATimeUtils",
    "WAWebCollection",
    "WAWebGroupConstants",
    "WAWebGroupParticipantGetters",
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
        (n.remove = function (n, r) {
          var t = e.prototype.remove.call(this, n, r);
          return (
            t.forEach(function (e) {
              e != null &&
                o(
                  "WAWebGroupParticipantGetters",
                ).clearGroupParticipantGetterCacheFor(e);
            }),
            t
          );
        }),
        (n.reset = function () {
          (this.forEach(
            o("WAWebGroupParticipantGetters")
              .clearGroupParticipantGetterCacheFor,
          ),
            e.prototype.reset.call(this));
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
