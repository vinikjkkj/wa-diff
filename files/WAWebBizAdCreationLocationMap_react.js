__d(
  "WAWebBizAdCreationLocationMap.react",
  ["WAWebMap.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.latitude,
        a = e.longitude,
        i = e.radiusMeters,
        l = e.showPin,
        u = e.zoom,
        p = l === void 0 ? !0 : l,
        _ = d(null),
        f;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = { width: 0, height: 0 }), (t[0] = f))
        : (f = t[0]);
      var g = m(f),
        h = g[0],
        y = g[1],
        C,
        b;
      (t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            if (_.current) {
              var e = _.current,
                t = e.offsetHeight,
                n = e.offsetWidth;
              n > 0 && t > 0 && y({ width: n, height: t });
            }
          }),
          (b = []),
          (t[1] = C),
          (t[2] = b))
        : ((C = t[1]), (b = t[2])),
        c(C, b));
      var v;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v =
            "xyi3aci xwf5gio x1p453bz x1suzm8a x5yr21d x6ikm8r x10wlt62 xh8yej3"),
          (t[3] = v))
        : (v = t[3]);
      var S;
      t[4] !== h.height ||
      t[5] !== h.width ||
      t[6] !== n ||
      t[7] !== a ||
      t[8] !== i ||
      t[9] !== p ||
      t[10] !== u
        ? ((S =
            h.width > 0 &&
            h.height > 0 &&
            s.jsx(r("WAWebMap.react"), {
              lat: n,
              lng: a,
              width: h.width,
              height: h.height,
              linkify: !1,
              radiusMeters: i,
              showMarker: p,
              zoom: u,
            })),
          (t[4] = h.height),
          (t[5] = h.width),
          (t[6] = n),
          (t[7] = a),
          (t[8] = i),
          (t[9] = p),
          (t[10] = u),
          (t[11] = S))
        : (S = t[11]);
      var R;
      return (
        t[12] !== S
          ? ((R = s.jsx("div", { ref: _, className: v, children: S })),
            (t[12] = S),
            (t[13] = R))
          : (R = t[13]),
        R
      );
    }
    l.default = p;
  },
  98,
);
