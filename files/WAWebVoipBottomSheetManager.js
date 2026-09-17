__d(
  "WAWebVoipBottomSheetManager",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.open = function (t, n) {
            var e = this,
              r = Symbol("WAWebVoipBottomSheet");
            return (
              this.trigger("open", { content: t, id: r, options: n }),
              {
                close: function () {
                  e.trigger("close", r);
                },
              }
            );
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.WAWebVoipBottomSheetManager = s;
  },
  98,
);
