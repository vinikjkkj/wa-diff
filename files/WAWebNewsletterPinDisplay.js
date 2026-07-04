__d(
  "WAWebNewsletterPinDisplay",
  ["WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
        function e(e) {
          this.items = e;
        }
        var t = e.prototype;
        return (
          (t.isEmpty = function () {
            return this.items.length === 0;
          }),
          (t.resolvedServerIdsDescending = function () {
            return this.items
              .filter(function (e) {
                return e.kind === "resolved";
              })
              .map(function (e) {
                return e.serverId;
              })
              .sort(function (e, t) {
                return t - e;
              });
          }),
          (t.unavailableServerIds = function () {
            return this.items
              .filter(function (e) {
                return e.kind === "unavailable";
              })
              .map(function (e) {
                return e.serverId;
              });
          }),
          (t.nextExpiryTs = function () {
            return this.items.length === 0
              ? null
              : o("WATimeUtils").castToUnixTime(
                  this.items.reduce(function (e, t) {
                    return Math.min(e, t.expiryTs);
                  }, 1 / 0),
                );
          }),
          e
        );
      })(),
      s = new e([]);
    function u(e, t) {
      return e.filter(function (e) {
        return e.expiryTs > t;
      });
    }
    function c(t, n) {
      return t.length === 0
        ? s
        : new e(
            t.map(function (e) {
              return {
                kind: n(e.serverId) ? "resolved" : "unavailable",
                serverId: e.serverId,
                expiryTs: e.expiryTs,
              };
            }),
          );
    }
    var d = 30 * o("WATimeUtils").DAY_SECONDS;
    function m(e) {
      return o("WATimeUtils").unixTime() - e.t > d;
    }
    ((l.NewsletterPinDisplay = e),
      (l.EMPTY_NEWSLETTER_PIN_DISPLAY = s),
      (l.filterActiveNewsletterPins = u),
      (l.getNewsletterPinsToDisplay = c),
      (l.NEWSLETTER_MAX_PINNABLE_MSG_AGE_SECONDS = d),
      (l.isNewsletterMsgTooOldToPin = m));
  },
  98,
);
