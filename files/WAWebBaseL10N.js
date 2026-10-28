__d(
  "WAWebBaseL10N",
  ["WAWeb-moment", "WAWebEventEmitter", "err"],
  function (t, n, r, o, a, i, l) {
    var e = r("err")("Unimplemented method"),
      s = (function (t) {
        function n() {
          var e;
          return ((e = t.call(this) || this), e.customizeMoment(), e);
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getLocale = function () {
            throw e;
          }),
          (o.getNormalizedLocale = function () {
            throw e;
          }),
          (o.getFullLocale = function () {
            throw e;
          }),
          (o.setLocale = function (n, r, o) {
            throw e;
          }),
          (o.customizeMoment = function () {
            var e;
            ((e = r("WAWeb-moment")).relativeTimeRounding(Math.floor),
              e.relativeTimeThreshold("s", 60),
              e.relativeTimeThreshold("m", 60),
              e.relativeTimeThreshold("h", 24));
          }),
          n
        );
      })(r("WAWebEventEmitter"));
    l.WAWebBaseL10n = s;
  },
  98,
);
