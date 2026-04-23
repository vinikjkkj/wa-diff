__d(
  "EventEmitterWithValidation",
  ["EventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return (
          (r = e.call(this) || this),
          (r.$EventEmitterWithValidation1 = Object.keys(t)),
          (r.$EventEmitterWithValidation2 = !!n),
          r
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.emit = function (n) {
          if (this.$EventEmitterWithValidation1.indexOf(n) === -1) {
            if (this.$EventEmitterWithValidation2 === !0) return;
            var t = new TypeError(s(n, this.$EventEmitterWithValidation1));
            throw (t.stack, t);
          }
          return e.prototype.emit.apply(this, arguments);
        }),
        t
      );
    })(r("EventEmitter"));
    function s(e, t) {
      var n = 'Unknown event type "' + e + '". ';
      return ((n += "Known event types: " + t.join(", ") + "."), n);
    }
    l.default = e;
  },
  98,
);
