__d(
  "WAWebBizProfileAddressFieldMap.react",
  ["WAWebMap.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = u.useState,
      p = 140;
    function _(e) {
      var t = e.latitude,
        n = e.longitude,
        o = e.serviceAreaRadius,
        a = e.value,
        i = d(null),
        l = m(0),
        u = l[0],
        _ = l[1];
      return (
        c(function () {
          if (i.current) {
            var e = i.current.offsetWidth;
            e > 0 && _(e);
          }
        }, []),
        s.jsx("div", {
          className: "xkh2ocl xde1mab x17smslp",
          children: s.jsx("div", {
            ref: i,
            className:
              "x1hx6dwl x15udqip x19c2an0 x1yujic9 xhjk10j x6ikm8r x10wlt62 xh8yej3",
            children: s.jsx(r("WAWebMap.react"), {
              lat: t,
              lng: n,
              name: a,
              radiusMeters: o,
              width: u,
              height: p,
            }),
          }),
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
