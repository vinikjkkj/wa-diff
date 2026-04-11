__d(
  "DOMEvent",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    var e = (function () {
      function e(e) {
        ((this.event = e || window.event),
          typeof this.event.srcElement != "unknown" || s(0, 5798),
          (this.target = this.event.target || this.event.srcElement));
      }
      var t = e.prototype;
      return (
        (t.preventDefault = function () {
          var e = this.event;
          return (
            e.preventDefault
              ? (e.preventDefault(),
                "defaultPrevented" in e || (e.defaultPrevented = !0))
              : (e.returnValue = !1),
            this
          );
        }),
        (t.isDefaultPrevented = function () {
          var e = this.event;
          return "defaultPrevented" in e
            ? e.defaultPrevented
            : e.returnValue === !1;
        }),
        (t.stopPropagation = function () {
          var e = this.event;
          return (
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0),
            this
          );
        }),
        (t.kill = function () {
          return (this.stopPropagation().preventDefault(), this);
        }),
        (e.killThenCall = function (n) {
          return function (t) {
            return (new e(t).kill(), n());
          };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
