__d(
  "WAWebCommandModel",
  ["WAWebBaseModel", "WAWebCommandGetters"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.name = o("WAWebBaseModel").prop()),
          (t.label = o("WAWebBaseModel").prop()),
          (t.type = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o("WAWebCommandGetters").clearCommandGetterCacheFor(this));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "command";
    var s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
