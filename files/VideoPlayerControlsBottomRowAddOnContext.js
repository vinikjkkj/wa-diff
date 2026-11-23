__d(
  "VideoPlayerControlsBottomRowAddOnContext",
  ["react", "useStable"],
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
      var t = e.children,
        n = r("useStable")(function () {
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
        });
      return s.jsx(p.Provider, { value: n, children: t });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = c(p),
        n = m(e),
        r = n[0],
        o = n[1];
      return (
        d(
          function () {
            t != null && t.initialize(o);
          },
          [t],
        ),
        r
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = c(p);
      d(
        function () {
          t != null && t.setBottomRowAddOn(e);
        },
        [e, t],
      );
    }
    ((l.VideoPlayerControlsBottomRowAddOnContext = p),
      (l.VideoPlayerControlsBottomRowAddOnContextProvider = _),
      (l.useVideoPlayerControlsBottomRowAddOn = f),
      (l.useSetVideoPlayerControlsBottomRowAddOn = g));
  },
  98,
);
