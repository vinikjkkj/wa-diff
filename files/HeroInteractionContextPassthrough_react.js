__d(
  "HeroInteractionContextPassthrough.react",
  [
    "HeroCurrentInteractionForLoggingContext",
    "HeroInteractionContext",
    "HeroInteractionIDContext",
    "RelayProfilerContext",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.use,
      c = { current: null },
      d = {
        consumeBootload: function () {},
        retainQuery: function () {},
        wrapPrepareQueryResource: function (t) {
          return t();
        },
      };
    function m(e) {
      var t = e.children,
        n = e.clear,
        a = n === void 0 ? !0 : n;
      return s.jsx(o("HeroInteractionContext").Context.Provider, {
        value: a
          ? o("HeroInteractionContext").DEFAULT_CONTEXT_VALUE
          : u(o("HeroInteractionContext").Context),
        children: s.jsx(r("HeroCurrentInteractionForLoggingContext").Provider, {
          value: a ? c : u(r("HeroCurrentInteractionForLoggingContext")),
          children: s.jsx(r("HeroInteractionIDContext").Provider, {
            value: a ? null : u(r("HeroInteractionIDContext")),
            children: s.jsx(r("RelayProfilerContext").Provider, {
              value: a ? d : u(r("RelayProfilerContext")),
              children: t,
            }),
          }),
        }),
      });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (m.displayName = "HeroInteractionContextPassthrough"),
      (l.default = m));
  },
  98,
);
