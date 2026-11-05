__d(
  "WebDi.Node",
  ["WebDi.UnsafeCoerce"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.done = !1), (this.$1 = !1), (this.value = e));
      }
      var t = e.prototype;
      return (
        (t.next = function () {
          return (
            this.$1
              ? ((this.done = !0),
                (this.value = arguments.length <= 0 ? void 0 : arguments[0]))
              : (this.$1 = !0),
            o("WebDi.UnsafeCoerce").coerce(this)
          );
        }),
        e
      );
    })();
    function s(t) {
      return o("WebDi.UnsafeCoerce").coerce(new e(t));
    }
    var u = (function () {
        function e(e) {
          ((this.tag = "Gen"), (this.body = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return s(this);
            }),
          e
        );
      })(),
      c = (function () {
        function e(e) {
          ((this.tag = "Sync"), (this.run = e));
        }
        var t = e.prototype;
        return (
          (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
            function () {
              return s(this);
            }),
          e
        );
      })();
    ((l.SingleShot = e), (l.iterate = s), (l.Gen = u), (l.Sync = c));
  },
  98,
);
