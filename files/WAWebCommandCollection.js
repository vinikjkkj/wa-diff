__d(
  "WAWebCommandCollection",
  [
    "WAWebActions",
    "WAWebBaseCollection",
    "WAWebCommandModel",
    "WAWebL10NAccentFold",
    "WAWebSettings",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      throw new TypeError('"' + e + '" is read-only');
    }
    var s = (function (e) {
      function t() {
        var t;
        return ((t = e.call(this) || this), t.initializeCommands(), t);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initializeCommands = function () {
          (this.addCommandsFromActions(), this.addCommandsFromSettings());
        }),
        (n.query = function (t) {
          var e = o("WAWebL10NAccentFold").accentFold(t.query.toLowerCase());
          return this.filter(function (n) {
            var r = o("WAWebL10NAccentFold").accentFold(n.label.toLowerCase()),
              a = r.includes(e),
              i = t.type === n.type;
            return a && i;
          });
        }),
        (n.addCommandsFromActions = function () {
          for (var e of o("WAWebActions").Action.members())
            this.add({
              name: e,
              id: e,
              label: o("WAWebActions").getLabel(e).toString(),
              type: "action",
            });
        }),
        (n.addCommandsFromSettings = function () {
          for (var e of Array.from(
            o("WAWebSettings").SettingsSteps.members(),
          ).filter(function (e) {
            return o("WAWebSettings").isSettingAvailable(e);
          }))
            this.add({
              name: e,
              id: e,
              label: o("WAWebSettings").getLabel(e).toString(),
              type: "setting",
            });
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    s.model = r("WAWebCommandModel");
    var u = new s();
    l.CommandCollection = u;
  },
  98,
);
