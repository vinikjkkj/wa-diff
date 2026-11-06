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
          var t;
          if (this.$EventEmitterWithValidation1.indexOf(n) === -1) {
            if (this.$EventEmitterWithValidation2 === !0) return;
            var r = new TypeError(s(n, this.$EventEmitterWithValidation1));
            throw (r.stack, r);
          }
          for (
            var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), i = 1;
            i < o;
            i++
          )
            a[i - 1] = arguments[i];
          return (t = e.prototype.emit).call.apply(t, [this, n].concat(a));
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
