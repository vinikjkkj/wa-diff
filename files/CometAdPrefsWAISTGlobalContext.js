__d(
  "CometAdPrefsWAISTGlobalContext",
  ["react", "useNullthrowsViolation"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.createContext,
      d = u.useContext,
      m = u.useMemo,
      p = c(null),
      _ = c(null),
      f = c(null),
      g = c(null),
      h = c(null);
    function y(e) {
      var t = e.adId,
        n = e.advertiserData,
        o = e.children,
        a = e.clientToken,
        i = e.waistEntrypoint,
        l = e.waistVersion,
        u = n.advertiserID,
        c = n.id,
        d = r("useNullthrowsViolation")(n.name),
        y = r("useNullthrowsViolation")(n.profilePictureUrl),
        C = m(
          function () {
            return { advertiserID: u, id: c, name: d, profilePictureUrl: y };
          },
          [u, c, d, y],
        );
      return s.jsx(g.Provider, {
        value: l,
        children: s.jsx(h.Provider, {
          value: i,
          children: s.jsx(p.Provider, {
            value: C,
            children: s.jsx(_.Provider, {
              value: t,
              children: s.jsx(f.Provider, { value: a, children: o }),
            }),
          }),
        }),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return r("useNullthrowsViolation")(d(p), "Advertiser should not be null");
    }
    function b() {
      return r("useNullthrowsViolation")(d(_), "AdId should be set");
    }
    function v() {
      return d(f);
    }
    function S() {
      return d(g);
    }
    function R() {
      return d(h);
    }
    ((l.CometAdPrefsWAISTGlobalContextProvider = y),
      (l.useAdvertiserData = C),
      (l.useAdId = b),
      (l.useClientToken = v),
      (l.useWAISTVersion = S),
      (l.useWAISTEntrypoint = R));
  },
  98,
);
