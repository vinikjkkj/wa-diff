__d(
  "useWAWebGetFeatureFlag",
  ["WAWebFeatureFlagCollection", "react", "useWAWebEventTargetValue"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef,
      u = { enabled: !1, expirationTime: null, limit: null };
    function c(e) {
      var t = s(u);
      return r("useWAWebEventTargetValue")(
        o("WAWebFeatureFlagCollection").FeatureFlagCollection,
        "add remove change:enabled reset",
        function () {
          var n,
            r,
            a = o("WAWebFeatureFlagCollection").FeatureFlagCollection.get(e);
          if (a == null) return u;
          var i = {
              enabled: a.enabled === !0,
              expirationTime: (n = a.expirationTime) != null ? n : null,
              limit: (r = a.limit) != null ? r : null,
            },
            l = t.current;
          return l.enabled === i.enabled &&
            l.expirationTime === i.expirationTime &&
            l.limit === i.limit
            ? l
            : ((t.current = i), i);
        },
      );
    }
    l.default = c;
  },
  98,
);
