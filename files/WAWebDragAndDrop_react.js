__d(
  "WAWebDragAndDrop.react",
  ["react", "useWAWebPrevious", "useWAWebTimeout"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useState;
    function _(e) {
      if (e.dataTransfer)
        try {
          if (!e.dataTransfer.dropEffect) return;
        } catch (e) {
          return;
        }
    }
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.disableFromWithin,
        l = a.onDragChange,
        s = a.onDrop,
        c = p(!1),
        f = c[0],
        g = c[1],
        h = p(!1),
        y = h[0],
        C = h[1],
        b = p(!1),
        v = b[0],
        S = b[1],
        R = o("useWAWebTimeout").useTimeout(function () {
          (C(!1), S(!1));
        }, 250),
        L = R[0],
        E = R[1],
        k = r("useWAWebPrevious")(y),
        I = function (t) {
          i && g(!0);
        },
        T = function (t) {
          i && g(!1);
        },
        D = function (t) {
          (t.preventDefault(), t.stopPropagation(), C(!1), S(!0), !f && s(t));
        },
        x = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            E(),
            !(y || f) && (C(!0), S(!1), _(t)));
        },
        $ = function (t) {
          (t.preventDefault(), t.stopPropagation(), y && (C(!1), S(!1)));
        },
        P = function (t) {
          (L(), t.preventDefault(), t.stopPropagation());
        };
      return (
        d(
          function () {
            k == null || k === y || !l || l(y, v);
          },
          [v, y, l, k],
        ),
        m(n, function () {
          return {
            onDragStart: I,
            onDragEnd: T,
            onDragOver: x,
            onDragLeave: P,
          };
        }),
        u.jsx(
          "div",
          {
            className: "x10l6tqk x13vifvy x1o0tod x1wvqwft xh8yej3 x5yr21d",
            style: y ? {} : { display: "none" },
            onDrop: D,
            onDragLeave: $,
          },
          "mask",
        )
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
