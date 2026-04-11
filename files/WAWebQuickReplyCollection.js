__d(
  "WAWebQuickReplyCollection",
  [
    "WAWebBaseCollection",
    "WAWebFrontendQuickReplyGetters",
    "WAWebQuickReplyModel",
    "WAWebQuickReplySmartDefaults",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.smartDefaultsAdded = !1),
          (t.sortQuickReply = function (e, t) {
            var n = o("WAWebFrontendQuickReplyGetters").getTotalCount(e),
              r = o("WAWebFrontendQuickReplyGetters").getTotalCount(t);
            return n === r ? (e.id < t.id ? -1 : 1) : n > r ? -1 : 1;
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.addSmartDefaultsIfNeeded = function () {
          this.smartDefaultsAdded === !1 &&
            (o("WAWebQuickReplySmartDefaults").addSmartDefaults(),
            (this.smartDefaultsAdded = !0));
        }),
        (n.filterShortcuts = function (t) {
          var e = this.filter(function (e) {
            var n = e.shortcut;
            return n.toLowerCase().startsWith(t.toLowerCase());
          });
          return e.sort(this.sortQuickReply);
        }),
        t
      );
    })(o("WAWebBaseCollection").BaseCollection);
    e.model = r("WAWebQuickReplyModel");
    var s = new e();
    l.QuickReplyCollection = s;
  },
  98,
);
