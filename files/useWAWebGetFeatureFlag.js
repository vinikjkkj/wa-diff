__d(
  "useWAWebGetFeatureFlag",
  [
    "WAWebFeatureFlagCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef,
      u = { enabled: !1, expirationTime: null, limit: null };
    function c(e) {
      var t = o("react-compiler-runtime").c(2),
        n = s(u),
        a;
      return (
        t[0] !== e
          ? ((a = function () {
              var t,
                r,
                a = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(
                  e,
                );
              if (a == null) return u;
              var i = {
                  enabled: a.enabled === !0,
                  expirationTime: (t = a.expirationTime) != null ? t : null,
                  limit: (r = a.limit) != null ? r : null,
                },
                l = n.current;
              return l.enabled === i.enabled &&
                l.expirationTime === i.expirationTime &&
                l.limit === i.limit
                ? l
                : ((n.current = i), i);
            }),
            (t[0] = e),
            (t[1] = a))
          : (a = t[1]),
        r("useWAWebEventTargetValue")(
          o("WAWebFeatureFlagCollection").FeatureFlagCollection,
          "add remove change:enabled reset",
          a,
        )
      );
    }
    l.default = c;
  },
  98,
);
