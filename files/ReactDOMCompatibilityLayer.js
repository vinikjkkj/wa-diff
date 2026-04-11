__d(
  "ReactDOMCompatibilityLayer",
  ["ReactDOM"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = typeof WeakMap == "function" ? new WeakMap() : new Map();
    function s(t, n) {
      var r = e.get(n);
      r == null && ((r = o("ReactDOM").createRoot(n)), e.set(n, r));
      var a = null,
        i = t.props.ref;
      return (
        o("ReactDOM").flushSync(function () {
          var e, n;
          return (e = r) == null
            ? void 0
            : e.render(
                typeof t.type == "string" ||
                  ((n = t.type) != null &&
                    (n = n.prototype) != null &&
                    n.isReactComponent)
                  ? babelHelpers.extends({}, t, {
                      props: babelHelpers.extends({}, t.props, {
                        ref: function (t) {
                          (typeof i == "function"
                            ? i(t)
                            : i != null && (i.current = t),
                            (a = t));
                        },
                      }),
                    })
                  : t,
              );
        }),
        a
      );
    }
    function u(t) {
      if (t == null) return !1;
      var n = e.get(t);
      return n
        ? (o("ReactDOM").flushSync(function () {
            n.unmount();
          }),
          e.delete(t),
          !0)
        : !1;
    }
    ((l.render_DEPRECATED = s), (l.unmountComponentAtNode_DEPRECATED = u));
  },
  98,
);
