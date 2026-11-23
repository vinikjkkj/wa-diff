__d(
  "GeoBaseHintSingletonContextProvider",
  ["GeoBaseHintSingletonContext", "GeoBaseHintSingletonRefContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = e.children,
        n = p(new Map()),
        o = n[0],
        a = n[1],
        i = d(
          function () {
            return {
              groups: o,
              setLastHintLayerForGroup: function (t, n) {
                a(function (e) {
                  var r = new Map(e);
                  return (r.set(t, n), r);
                });
              },
            };
          },
          [o, a],
        ),
        l = m(i);
      return (
        c(
          function () {
            l.current = i;
          },
          [i],
        ),
        s.jsx(r("GeoBaseHintSingletonContext").Provider, {
          value: i,
          children: s.jsx(r("GeoBaseHintSingletonRefContext").Provider, {
            value: l,
            children: t,
          }),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
