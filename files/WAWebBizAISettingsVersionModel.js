__d(
  "WAWebBizAISettingsVersionModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.version = o("WAWebBaseModel").prop(0)),
          (t.updatedAtMs = o("WAWebBaseModel").prop(0)),
          (t.stale = o("WAWebBaseModel").session(!0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.markStale = function () {
          ((this.stale = !0),
            this.hasObservers() && this.getCollection().find(this.id));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "bizAiSettingsVersion";
    var s = o("WAWebBaseModel").defineModel(e);
    l.BizAISettingsVersionModel = s;
  },
  98,
);
