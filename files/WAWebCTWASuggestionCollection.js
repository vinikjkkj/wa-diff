__d(
  "WAWebCTWASuggestionCollection",
  ["WATimeUtils", "WAWebBaseCollection", "WAWebCTWASuggestionModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.findFirstNotExpired = function () {
          return this.findFirst(function (e) {
            return o("WATimeUtils").isInFuture(e.suggestion.expiresAt);
          });
        }),
        (n.removeInteracted = function (t) {
          this.remove(t);
        }),
        (n.updateTrackingNuxData = function (t, n) {
          var e = this.get(t);
          e != null &&
            e.set(
              "suggestion",
              babelHelpers.extends({}, e.suggestion, { nuxData: n }),
            );
        }),
        (n.updateTrackingCoolOffData = function (t, n) {
          var e = this.get(t);
          e != null &&
            e.set(
              "suggestion",
              babelHelpers.extends({}, e.suggestion, { coolOffData: n }),
            );
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = o("WAWebCTWASuggestionModel").CTWASuggestionModel;
    var s = new e();
    l.CTWASuggestionCollection = s;
  },
  98,
);
