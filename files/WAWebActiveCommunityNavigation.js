__d(
  "WAWebActiveCommunityNavigation",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ActiveCommunityNavigationImpl$p_1 = null),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.setActive = function (t) {
            var e = this.$ActiveCommunityNavigationImpl$p_1,
              n =
                t == null
                  ? e == null
                  : (e == null ? void 0 : e.equals(t)) === !0;
            n ||
              ((this.$ActiveCommunityNavigationImpl$p_1 = t),
              this.trigger("change"));
          }),
          (n.getActive = function () {
            return this.$ActiveCommunityNavigationImpl$p_1;
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
