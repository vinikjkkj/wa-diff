__d(
  "WAWebMediaCacheCollection",
  ["WAWebMediaCacheModel", "WAWebStaleBaseCollection"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    e.model = o("WAWebMediaCacheModel").MediaCache;
    var s = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.add = function (n, r) {
          var t = e.prototype.add.call(this, n, r);
          if (this.length > this.constructor.maxsize) {
            var o = this.length - this.constructor.maxsize,
              a = this.slice(0, o);
            this.remove(a);
          }
          return t;
        }),
        t
      );
    })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((s.model = o("WAWebMediaCacheModel").ResizeRotateMediaCache),
      (s.maxsize = 5),
      (l.WAWebMediaCacheCollection = e),
      (l.WAWebMediaResizeRotateCacheCollection = s));
  },
  98,
);
