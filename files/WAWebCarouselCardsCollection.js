__d(
  "WAWebCarouselCardsCollection",
  ["WAWebBaseCollection", "WAWebMsgModel"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.clone = function () {
          var e = new t();
          return (e.add(this.slice()), e);
        }),
        (n.getCardsById = function () {
          var e = {};
          return (
            this.forEach(function (t) {
              e[t.id.toString()] = t;
            }),
            e
          );
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    ((s.model = o("WAWebMsgModel").Msg), (l.default = s));
  },
  98,
);
