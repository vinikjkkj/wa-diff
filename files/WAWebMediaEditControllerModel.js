__d(
  "WAWebMediaEditControllerModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.stage = o("WAWebBaseModel").prop()),
            (t.cropOverlay = o("WAWebBaseModel").prop()),
            (t.mediaContainer = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.clearStage = function (t) {
            t &&
              (t.children.forEach(function (e) {
                e.removeAllEventListeners();
              }),
              t.removeAllEventListeners(),
              t.removeAllChildren(),
              t.clear());
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel),
      s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
