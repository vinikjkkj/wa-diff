__d(
  "MAIBAIGAudienceSessionContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useEffect,
      _ = u.useMemo,
      f = u.useState,
      g = c(null);
    function h(e) {
      var t = e.children,
        n = f(function () {
          return new Map();
        }),
        r = n[0],
        o = n[1],
        a = f(function () {
          return new Map();
        }),
        i = a[0],
        l = a[1],
        u = d(function (e, t) {
          o(function (n) {
            if (n.get(e) === t) return n;
            var r = new Map(n);
            return (r.set(e, t), r);
          });
        }, []),
        c = d(function (e, t) {
          l(function (n) {
            if (n.has(e) && n.get(e) === t) return n;
            var r = new Map(n);
            return (r.set(e, t), r);
          });
        }, []),
        m = _(
          function () {
            return {
              audiences: r,
              locations: i,
              setAudience: u,
              setLocation: c,
            };
          },
          [r, i, u, c],
        );
      return s.jsx(g.Provider, { value: m, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t) {
      var n = m(g),
        r = f(t),
        o = r[0],
        a = r[1],
        i =
          e == null || e === ""
            ? null
            : n == null
              ? void 0
              : n.audiences.get(e),
        l = i != null ? i : o;
      p(
        function () {
          n != null &&
            e != null &&
            e !== "" &&
            !n.audiences.has(e) &&
            n.setAudience(e, o);
        },
        [e, n, o],
      );
      var s = d(
        function (t) {
          (a(t), n != null && e != null && e !== "" && n.setAudience(e, t));
        },
        [e, n],
      );
      return [l, s];
    }
    function C(e, t) {
      var n,
        r = m(g),
        o = f(t),
        a = o[0],
        i = o[1],
        l = e != null ? e : "",
        s = l !== "",
        u = s && (r == null ? void 0 : r.locations.has(l)) === !0,
        c =
          u && (n = r == null ? void 0 : r.locations.get(l)) != null ? n : null,
        _ = u ? c : a;
      p(
        function () {
          r != null && s && !u && r.setLocation(l, a);
        },
        [r, a, s, u, l],
      );
      var h = d(
        function (e) {
          (i(e), r != null && s && r.setLocation(l, e));
        },
        [r, s, l],
      );
      return [_, h];
    }
    ((l.MAIBAIGAudienceSessionProvider = h),
      (l.useMAIBAIGSuggestedAudience = y),
      (l.useMAIBAIGSuggestedAudienceLocation = C));
  },
  98,
);
