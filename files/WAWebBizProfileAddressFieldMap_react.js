__d(
  "WAWebBizProfileAddressFieldMap.react",
  ["WAWebMap.react", "react", "react-compiler-runtime"],
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
      var t = o("react-compiler-runtime").c(10),
        n = e.latitude,
        a = e.longitude,
        i = e.serviceAreaRadius,
        l = e.value,
        u = d(null),
        _ = m(0),
        f = _[0],
        g = _[1],
        h,
        y;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            if (u.current) {
              var e = u.current.offsetWidth;
              e > 0 && g(e);
            }
          }),
          (y = []),
          (t[0] = h),
          (t[1] = y))
        : ((h = t[0]), (y = t[1])),
        c(h, y));
      var C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = "xkh2ocl xde1mab x17smslp"), (t[2] = C))
        : (C = t[2]);
      var b;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((b =
            "x1hx6dwl x15udqip x19c2an0 x1yujic9 xhjk10j x6ikm8r x10wlt62 xh8yej3"),
          (t[3] = b))
        : (b = t[3]);
      var v;
      return (
        t[4] !== n || t[5] !== a || t[6] !== f || t[7] !== i || t[8] !== l
          ? ((v = s.jsx("div", {
              className: C,
              children: s.jsx("div", {
                ref: u,
                className: b,
                children: s.jsx(r("WAWebMap.react"), {
                  lat: n,
                  lng: a,
                  name: l,
                  radiusMeters: i,
                  width: f,
                  height: p,
                }),
              }),
            })),
            (t[4] = n),
            (t[5] = a),
            (t[6] = f),
            (t[7] = i),
            (t[8] = l),
            (t[9] = v))
          : (v = t[9]),
        v
      );
    }
    l.default = _;
  },
  98,
);
