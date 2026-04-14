__d(
  "VideoPlayerControlsBottomRowAddOnContext",
  ["react", "react-compiler-runtime", "useStable", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useEffect,
      m = u.useState,
      p = s.createContext(null);
    function _(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children;
      r("vulture")("UrIQ5CZRVmWxk5AHccHhL0aVe1I=");
      var a = r("useStable")(f),
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = s.jsx(p.Provider, { value: a, children: n })),
            (t[0] = n),
            (t[1] = a),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function f() {
      var e = null,
        t = null,
        n = null;
      return {
        getBottomRowAddOn: function () {
          return t;
        },
        initialize: function (o) {
          ((n = function (n) {
            ((t = n), o(n));
          }),
            e != null && (n(e), (e = null)));
        },
        setBottomRowAddOn: function (r) {
          if (n == null) {
            e = r;
            return;
          }
          n(r);
        },
      };
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n = c(p),
        r = m(e),
        a = r[0],
        i = r[1],
        l,
        s;
      return (
        t[0] !== n
          ? ((l = function () {
              n != null && n.initialize(i);
            }),
            (s = [n]),
            (t[0] = n),
            (t[1] = l),
            (t[2] = s))
          : ((l = t[1]), (s = t[2])),
        d(l, s),
        a
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(4),
        n = c(p),
        r,
        a;
      (t[0] !== e || t[1] !== n
        ? ((r = function () {
            n != null && n.setBottomRowAddOn(e);
          }),
          (a = [e, n]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = a))
        : ((r = t[2]), (a = t[3])),
        d(r, a));
    }
    ((l.VideoPlayerControlsBottomRowAddOnContext = p),
      (l.VideoPlayerControlsBottomRowAddOnContextProvider = _),
      (l.useVideoPlayerControlsBottomRowAddOn = g),
      (l.useSetVideoPlayerControlsBottomRowAddOn = h));
  },
  98,
);
