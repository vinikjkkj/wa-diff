__d(
  "LayerButtons",
  ["csx", "Button", "Event", "LayerHideSources", "Parent"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      "use strict";
      function e(e) {
        var t = this;
        ((this.$2 = null),
          (this.$3 = function (e) {
            var r = e.getTarget(),
              o = n("Parent").byClass(r, "layerHide");
            if (o) {
              t.$1.hide(n("LayerHideSources").LAYER_HIDE_BUTTON);
              return;
            }
            var a = n("Parent").byClass(r, "layerConfirm");
            if (a) {
              if ((t.$4(a) && !n("Button").isEnabled(a)) || t.$5(a)) return;
              t.$1.inform("confirm", a) === !1 && e.prevent();
              return;
            }
            var i = n("Parent").byClass(r, "layerCancel");
            if (i) {
              if ((t.$4(i) && !n("Button").isEnabled(i)) || t.$5(i)) return;
              (t.$1.inform("cancel", i) !== !1 &&
                t.$1.hide(n("LayerHideSources").LAYER_CANCEL_BUTTON),
                e.prevent());
              return;
            }
            var l = n("Parent").byClass(r, "layerButton");
            if (l) {
              if ((t.$4(l) && !n("Button").isEnabled(l)) || t.$5(l)) return;
              t.$1.inform("button", l) === !1 && e.prevent();
            }
          }),
          (this.$1 = e));
      }
      var t = e.prototype;
      return (
        (t.enable = function () {
          this.$2 = n("Event").listen(this.$1.getRoot(), "click", this.$3);
        }),
        (t.disable = function () {
          (this.$2.remove(), (this.$2 = null));
        }),
        (t.$5 = function (t) {
          var e = n("Parent").byClass(t, "uiLayer"),
            r = this.$1.getRoot();
          return !!(e && r !== e);
        }),
        (t.$4 = function (t) {
          return !!(
            n("Parent").byClass(t, "uiButton") ||
            n("Parent").bySelector(t, "._42ft")
          );
        }),
        e
      );
    })();
    a.exports = e;
  },
  null,
);
