__d(
  "WAWebBlocklistModel",
  [
    "WAWebBaseModel",
    "WAWebBlocklistCollection",
    "WAWebContactCollection",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.contact = function () {
          var e = o("WAWebContactCollection").ContactCollection.gadd(this.id);
          return e;
        }),
        (n.getCollection = function () {
          return o("WAWebBlocklistCollection").BlocklistCollection;
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((s.Proxy = "blocklist"), (s.idClass = r("WAWebWid")));
    var u = o("WAWebBaseModel").defineModel(s);
    l.default = u;
  },
  98,
);
