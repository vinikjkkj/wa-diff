__d(
  "A2UIAssetImageResolver",
  [
    "A2UIAssetImageResolverQuery.graphql",
    "RelayHooks",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useMemo,
      m = u.useState,
      p = e !== void 0 ? e : (e = n("A2UIAssetImageResolverQuery.graphql"));
    function _(e) {
      var t = o("react-compiler-runtime").c(9),
        n = o("RelayHooks").useRelayEnvironment(),
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = {}), (t[0] = r))
        : (r = t[0]);
      var a = m(r),
        i = a[0],
        l = a[1],
        s;
      t[1] !== e
        ? ((s = e.map(g).join(",")), (t[1] = e), (t[2] = s))
        : (s = t[2]);
      var u = s,
        d;
      t[3] !== u
        ? ((d = u === "" ? [] : u.split(",").map(f)), (t[3] = u), (t[4] = d))
        : (d = t[4]);
      var _ = d,
        h,
        y;
      return (
        t[5] !== _ || t[6] !== n
          ? ((h = function () {
              if (_.length !== 0) {
                var e = o("RelayHooks")
                  .fetchQuery(n, p, { input: { assets: _ } })
                  .subscribe({
                    next: function (t) {
                      var e = {};
                      for (var n of (r = t.asa_asset_images) != null ? r : []) {
                        var r;
                        n.image_url != null && (e[n.asset_id] = n.image_url);
                      }
                      l(e);
                    },
                  });
                return function () {
                  return e.unsubscribe();
                };
              }
            }),
            (y = [n, _]),
            (t[5] = _),
            (t[6] = n),
            (t[7] = h),
            (t[8] = y))
          : ((h = t[7]), (y = t[8])),
        c(h, y),
        i
      );
    }
    function f(e) {
      var t = e.split(":"),
        n = t[0],
        r = t[1];
      return { asset_id: n, asset_type: r };
    }
    function g(e) {
      return e.asset_id + ":" + e.asset_type;
    }
    l.useAssetImageResolver = _;
  },
  98,
);
