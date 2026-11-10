__d(
  "WAWebDragHoverChatSwitch",
  [],
  function (t, n, r, o, a, i) {
    var e = 600,
      l = 0;
    function s() {
      u();
      var e = l;
      return function () {
        return e !== l;
      };
    }
    function u() {
      l += 1;
    }
    var c = (function () {
      function t() {
        var e = this;
        ((this.$1 = null),
          (this.$2 = function () {
            e.cancel();
          }));
      }
      var n = t.prototype;
      return (
        (n.start = function (n) {
          var t = this;
          (this.cancel(),
            window.addEventListener("dragend", this.$2, !0),
            (this.$1 = self.setTimeout(function () {
              (t.cancel(), n());
            }, e)));
        }),
        (n.cancel = function () {
          this.$1 != null &&
            (self.clearTimeout(this.$1),
            (this.$1 = null),
            window.removeEventListener("dragend", this.$2, !0));
        }),
        t
      );
    })();
    ((i.DRAG_HOVER_CHAT_SWITCH_DELAY_MS = e),
      (i.startDragChatOpen = s),
      (i.supersedeDragChatOpens = u),
      (i.DragHoverChatSwitch = c));
  },
  66,
);
