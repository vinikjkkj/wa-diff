__d(
  "CometPostInformTreatmentContext",
  ["react", "react-compiler-runtime", "useStatesInMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useCallback,
      m = u.useContext,
      p = u.useMemo,
      _ = c({
        postCoverSettings: { contentHidden: !1, hasPostCover: !1 },
        setHasPostCover: function () {},
        setIsContentHidden: function () {},
      });
    function f(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.children,
        a = e.hasPostCover,
        i = e.identifier,
        l;
      t[0] !== a
        ? ((l = { contentHidden: !0, hasPostCover: a }), (t[0] = a), (t[1] = l))
        : (l = t[1]);
      var u = r("useStatesInMap")(i, l),
        c = u[0],
        d = u[1],
        m;
      t[2] !== d
        ? ((m = function (t) {
            d(function (e) {
              return babelHelpers.extends({}, e, { contentHidden: t });
            });
          }),
          (t[2] = d),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        f;
      t[4] !== d
        ? ((f = function (t) {
            d(function (e) {
              return babelHelpers.extends({}, e, { hasPostCover: t });
            });
          }),
          (t[4] = d),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] !== c || t[7] !== g || t[8] !== p
        ? ((h = {
            postCoverSettings: c,
            setHasPostCover: g,
            setIsContentHidden: p,
          }),
          (t[6] = c),
          (t[7] = g),
          (t[8] = p),
          (t[9] = h))
        : (h = t[9]);
      var y = h,
        C;
      return (
        t[10] !== n || t[11] !== y
          ? ((C = s.jsx(_.Provider, { value: y, children: n })),
            (t[10] = n),
            (t[11] = y),
            (t[12] = C))
          : (C = t[12]),
        C
      );
    }
    function g() {
      var e = m(_),
        t = e.postCoverSettings;
      return t.hasPostCover ? t.contentHidden : !1;
    }
    function h() {
      var e = m(_),
        t = e.setIsContentHidden;
      return t;
    }
    function y() {
      var e = m(_),
        t = e.setHasPostCover;
      return t;
    }
    function C() {
      var e = m(_),
        t = e.postCoverSettings;
      return t.hasPostCover;
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.children,
        r = m(_),
        a = r.postCoverSettings;
      if (!a.hasPostCover) {
        var i;
        return (
          t[0] !== n
            ? ((i = s.jsx(s.Fragment, { children: n })), (t[0] = n), (t[1] = i))
            : (i = t[1]),
          i
        );
      }
      var l;
      return (
        t[2] !== n || t[3] !== a.contentHidden
          ? ((l = a.contentHidden ? null : s.jsx(s.Fragment, { children: n })),
            (t[2] = n),
            (t[3] = a.contentHidden),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    ((l.CometPostInformTreatmentContextProvider = f),
      (l.useIsContentHidden = g),
      (l.useSetIsContentHidden = h),
      (l.useSetHasPostCover = y),
      (l.useHasPostCover = C),
      (l.CometPostInformTreatmentConditionalRenderer = b));
  },
  98,
);
