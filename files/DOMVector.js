__d(
  "DOMVector",
  [
    "BasicVector",
    "FBLogger",
    "getDocumentScrollElement",
    "getElementPosition",
    "getUnboundedScrollPosition",
    "getViewportDimensions",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r) {
        var o;
        return ((o = e.call(this, t, n) || this), (o.domain = r || "pure"), o);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.derive = function (n, r, o) {
          return new t(n, r, o || this.domain);
        }),
        (n.add = function (r, o) {
          return (
            r instanceof t &&
              r.getDomain() !== "pure" &&
              (r = r.convertTo(this.domain)),
            e.prototype.add.call(this, r, o)
          );
        }),
        (n.convertTo = function (n) {
          if (n != "pure" && n != "viewport" && n != "document")
            return (
              r("FBLogger")("DOMVector").mustfix(
                "Domain %s is invalid; valid coordinate domains are pure, viewport, and document.",
                n,
              ),
              this.derive(0, 0)
            );
          if (n == this.domain) return this.derive(this.x, this.y, this.domain);
          if (n == "pure") return this.derive(this.x, this.y);
          if (this.domain == "pure")
            return (
              r("FBLogger")("DOMVector").mustfix(
                "Unable to covert a pure vector to %s coordinates; a pure vector is abstract and does not exist in any document coordinate system. If you need to hack around this, create the vector explicitly in some document coordinate domain, by passing a third argument to the constructor. But you probably don't, and are just using the class wrong. Stop doing that.",
                n,
              ),
              this.derive(0, 0)
            );
          var e = t.getScrollPosition("document"),
            o = this.x,
            a = this.y;
          return (
            this.domain == "document"
              ? ((o -= e.x), (a -= e.y))
              : ((o += e.x), (a += e.y)),
            this.derive(o, a, n)
          );
        }),
        (n.getDomain = function () {
          return this.domain;
        }),
        (t.from = function (n, r, o) {
          return new t(n, r, o);
        }),
        (t.getScrollPosition = function (t) {
          t = t || "document";
          var e = r("getUnboundedScrollPosition")(window);
          return this.from(e.x, e.y, "document").convertTo(t);
        }),
        (t.getElementPosition = function (t, n) {
          n = n || "document";
          var e = r("getElementPosition")(t);
          return this.from(e.x, e.y, "viewport").convertTo(n);
        }),
        (t.getElementDimensions = function (t) {
          return this.from(t.offsetWidth || 0, t.offsetHeight || 0);
        }),
        (t.getViewportDimensions = function () {
          var e = r("getViewportDimensions")();
          return this.from(e.width, e.height, "viewport");
        }),
        (t.getLayoutViewportDimensions = function () {
          var e = r("getViewportDimensions").layout();
          return this.from(e.width, e.height, "viewport");
        }),
        (t.getViewportWithoutScrollbarDimensions = function () {
          var e = r("getViewportDimensions").withoutScrollbars();
          return this.from(e.width, e.height, "viewport");
        }),
        (t.getDocumentDimensions = function (t) {
          var e = r("getDocumentScrollElement")(t);
          return this.from(e.scrollWidth, e.scrollHeight, "document");
        }),
        t
      );
    })(r("BasicVector"));
    l.default = e;
  },
  98,
);
