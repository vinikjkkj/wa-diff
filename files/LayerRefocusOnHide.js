__d(
  "LayerRefocusOnHide",
  [
    "ContextualThing",
    "DOM",
    "DOMQuery",
    "Focus",
    "Parent",
    "getActiveElement",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.$2 = null), (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          var e = this;
          this.$2 = this.$1.subscribe("hide", function () {
            return e.$3();
          });
        }),
        (t.disable = function () {
          (r("nullthrows")(this.$2).unsubscribe(), (this.$2 = null));
        }),
        (t.$3 = function () {
          var e = r("getActiveElement")();
          if (
            e === document.body ||
            o("DOMQuery").contains(this.$1.getRoot(), e)
          ) {
            for (
              var t = this.$1.getCausalElement();
              t != null && t.offsetWidth === 0;
            ) {
              var n = o("Parent").byClass(t, "uiToggle");
              if (n != null && n.offsetWidth !== 0)
                t = r("DOM").scry(n, '[rel="toggle"]')[0];
              else {
                var a = o("ContextualThing").getContext(t);
                a ? (t = a) : (t = t.parentNode);
              }
            }
            t && ((t = t), o("Focus").set(t));
          }
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
