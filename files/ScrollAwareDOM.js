__d(
  "ScrollAwareDOM",
  [
    "ArbiterMixin",
    "CSS",
    "DOM",
    "DOMDimensions",
    "HTML",
    "Vector",
    "ViewportBounds",
    "getDocumentScrollElement",
    "getElementPosition",
    "getViewportDimensions",
    "isAsyncScrollQuery",
    "isNode",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return function () {
        var n = arguments;
        m.monitor(arguments[e], function () {
          t.apply(null, n);
        });
      };
    }
    function u(e) {
      e instanceof Array || (e = [e]);
      for (var t = 0; t < e.length; t++) {
        var n = r("HTML").replaceJSONWrapper(e[t]);
        if (n instanceof r("HTML")) return n.getRootNode();
        if (r("isNode")(n)) return n;
      }
      return null;
    }
    function c(e) {
      return r("getElementPosition")(e).y > r("ViewportBounds").getTop();
    }
    function d(e) {
      var t =
          r("getElementPosition")(e).y +
          o("DOMDimensions").getElementDimensions(e).height,
        n =
          r("getViewportDimensions")().height - r("ViewportBounds").getBottom();
      return t >= n;
    }
    var m = babelHelpers.extends(
        {
          monitor: function (t, n) {
            if (r("isAsyncScrollQuery")()) return n();
            var e = u(t);
            if (e) {
              var o = !!e.offsetParent;
              if (o && (c(e) || d(e))) return n();
              var a = r("Vector").getDocumentDimensions(),
                i = n();
              if (o || (e.offsetParent && !c(e))) {
                var l = r("Vector").getDocumentDimensions().sub(a),
                  s = { delta: l, target: e };
                m.inform("scroll", s) !== !1 &&
                  l.scrollElementBy(r("getDocumentScrollElement")());
              }
              return i;
            } else return n();
          },
          replace: function (t, n) {
            var e = u(n);
            return (
              (!e || o("CSS").hasClass(e, "hidden_elem")) && (e = t),
              m.monitor(e, function () {
                r("DOM").replace(t, n);
              })
            );
          },
          prependContent: s(1, (e = r("DOM")).prependContent),
          insertAfter: s(1, e.insertAfter),
          insertBefore: s(1, e.insertBefore),
          setContent: s(0, e.setContent),
          appendContent: s(1, e.appendContent),
          remove: s(0, e.remove),
          empty: s(0, e.empty),
        },
        r("ArbiterMixin"),
      ),
      p = m;
    l.default = p;
  },
  98,
);
