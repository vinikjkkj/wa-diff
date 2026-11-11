__d(
  "WebBloksCollectionPagingAnchor",
  ["Promise", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(e, t, n) {
      return t ? e.scrollTop : e.scrollLeft * (n ? -1 : 1);
    }
    var d = (function (t) {
      function r() {
        for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (e = t.call.apply(t, [this].concat(r)) || this),
          (e.placeholders = new Map()),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(r, t);
      var o = r.prototype;
      return (
        (o.componentDidMount = function () {
          var t = this;
          (e || (e = n("Promise")))
            .resolve()
            .then(function () {
              return t.findPlaceholders();
            })
            .catch(function () {});
        }),
        (o.getSnapshotBeforeUpdate = function (t) {
          var e = this.props.scrollerRef.current,
            n = t.items.length;
          return e == null || n === 0 || n === this.props.items.length
            ? null
            : c(e, this.props.isVertical, this.props.isRtl);
        }),
        (o.componentDidUpdate = function (t, n, r) {
          var e = this.props,
            o = e.isRtl,
            a = e.isVertical,
            i = this.props.scrollerRef.current;
          (r != null &&
            i != null &&
            Math.abs(c(i, a, o) - r) >= 1 &&
            (a ? (i.scrollTop = r) : (i.scrollLeft = r * (o ? -1 : 1))),
            t.items.length !== this.props.items.length &&
              this.findPlaceholders());
        }),
        (o.findPlaceholders = function () {
          var e = this.props.containerRef.current;
          if (e != null) {
            for (
              var t = this.props.items,
                n = Array.from(e.children),
                r = e.querySelectorAll("[data-collection-placeholder]"),
                o = new Map(),
                a = 0;
              a < r.length;
              a++
            ) {
              for (var i = r[a]; i != null && i.parentElement !== e; )
                i = i.parentElement;
              var l = i != null ? t[n.indexOf(i)] : null;
              if (l != null) {
                var s;
                o.set(
                  l.clientId,
                  (s = this.placeholders.get(l.clientId)) != null
                    ? s
                    : t.length,
                );
              }
            }
            this.placeholders = o;
          }
        }),
        (o.render = function () {
          var e = this,
            t = this.props,
            n = t.items,
            r = t.renderItem;
          return n.map(function (t) {
            var o = e.placeholders.get(t.clientId);
            return r(
              t,
              o == null || o === n.length
                ? t.clientId
                : t.clientId + ":" + n.length,
            );
          });
        }),
        r
      );
    })(u.Component);
    l.default = d;
  },
  98,
);
