__d(
  "CometAdPrefsWAISTPrivacyCenterContext",
  [
    "CometAdPrefsWAISTPrivacyCenterContextProvider_privacyCenterData.graphql",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.createContext,
      m = c.useMemo,
      p = d(null);
    function _(t) {
      var r = t.children,
        a = t.privacyCenterRef,
        i = o("RelayHooks").useFragment(
          e !== void 0
            ? e
            : (e = n(
                "CometAdPrefsWAISTPrivacyCenterContextProvider_privacyCenterData.graphql",
              )),
          a,
        ),
        l = m(
          function () {
            return { privacyCenterData: i };
          },
          [i],
        );
      return u.jsx(p.Provider, { value: l, children: r });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.CometAdPrefsWAISTPrivacyCenterProvider = _));
  },
  98,
);
