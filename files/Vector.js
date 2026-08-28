__d(
  "Vector",
  ["DOMEvent", "DOMVector", "Scroll", "getDocumentScrollElement"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r) {
        return e.call(this, parseFloat(t), parseFloat(n), r) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.derive = function (n, r, o) {
          return new t(n, r, o || this.domain);
        }),
        (n.setElementPosition = function (t) {
          var e = this.convertTo("document");
          return (
            (t.style.left = parseInt(e.x, 10) + "px"),
            (t.style.top = parseInt(e.y, 10) + "px"),
            this
          );
        }),
        (n.setElementDimensions = function (t) {
          return this.setElementWidth(t).setElementHeight(t);
        }),
        (n.setElementWidth = function (t) {
          return ((t.style.width = parseInt(this.x, 10) + "px"), this);
        }),
        (n.setElementHeight = function (t) {
          return ((t.style.height = parseInt(this.y, 10) + "px"), this);
        }),
        (n.scrollElementBy = function (t) {
          if (t == document.body) window.scrollBy(this.x, this.y);
          else {
            var e;
            ((e = o("Scroll")).setLeft(t, e.getLeft(t) + this.x),
              e.setTop(t, e.getTop(t) + this.y));
          }
          return this;
        }),
        (t.from = function (n, r, o) {
          return new t(n, r, o);
        }),
        (t.getEventPosition = function (t, n) {
          n === void 0 && (n = "document");
          var e = new (r("DOMEvent"))(t).event,
            a = r("getDocumentScrollElement")(),
            i = e.clientX + o("Scroll").getLeft(a),
            l = e.clientY + o("Scroll").getTop(a),
            s = this.from(i, l, "document");
          return s.convertTo(n);
        }),
        (t.getTouchEventPosition = function (t, n) {
          n === void 0 && (n = "document");
          var e = t.touches[0],
            r = this.from(e.pageX, e.pageY, "document");
          return r.convertTo(n);
        }),
        (t.deserialize = function (t) {
          var e = t.split(",");
          return this.from(e[0], e[1]);
        }),
        t
      );
    })(r("DOMVector"));
    l.default = e;
  },
  98,
);
