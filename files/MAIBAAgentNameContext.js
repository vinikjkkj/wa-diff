__d(
  "MAIBAAgentNameContext",
  ["MAIBAChatSettingsContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useContext,
      d = u.useMemo,
      m = u.useRef,
      p = u.useSyncExternalStore,
      _ = s.createContext({
        getAgentNameForMessage: function () {
          return "default_maiba";
        },
        reportAgentSignal: function () {},
        subscribe: function () {
          return function () {};
        },
      });
    function f(e) {
      return e == null
        ? null
        : e.includes("transfer_to_subagent_support_subagent")
          ? "support_subagent"
          : e.includes("transfer_to_subagent_performance_subagent")
            ? "performance_subagent"
            : e.includes("transfer_to_subagent_main")
              ? "default_maiba"
              : null;
    }
    function g(e, t) {
      var n = f(e);
      if (n != null) return n;
      if (t != null)
        for (var r of t) {
          var o = f(r);
          if (o != null) return o;
        }
      return null;
    }
    function h(e) {
      var t = e.children,
        n = o("MAIBAChatSettingsContext").useMAIBAChatSettingsContext(),
        r = n.agentBadgeEnabled,
        a = n.debugMode,
        i = a && r,
        l = m(new Map()),
        u = m("default_maiba"),
        c = m(new Set()),
        p = d(
          function () {
            return i
              ? {
                  getAgentNameForMessage: function (t) {
                    var e;
                    return (e = l.current.get(t)) != null ? e : "default_maiba";
                  },
                  reportAgentSignal: function (t, n, r) {
                    var e = g(n, r);
                    if (e != null) {
                      var o = l.current.get(t);
                      o !== e &&
                        (l.current.set(t, e),
                        (u.current = e),
                        queueMicrotask(function () {
                          for (var e of c.current) e();
                        }));
                    }
                  },
                  subscribe: function (t) {
                    return (
                      c.current.add(t),
                      function () {
                        c.current.delete(t);
                      }
                    );
                  },
                }
              : {
                  getAgentNameForMessage: function () {
                    return "default_maiba";
                  },
                  reportAgentSignal: function () {},
                  subscribe: function () {
                    return function () {};
                  },
                };
          },
          [i],
        );
      return s.jsx(_.Provider, { value: p, children: t });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t, n) {
      var r = c(_),
        o = r.reportAgentSignal;
      o(e, t, n);
    }
    function C(e) {
      var t = c(_),
        n = t.getAgentNameForMessage,
        r = t.subscribe,
        o = p(
          r,
          function () {
            return n(e);
          },
          function () {
            return n(e);
          },
        );
      return o;
    }
    ((l.MAIBAAgentNameProvider = h),
      (l.useMAIBAReportAgentSignal = y),
      (l.useMAIBAAgentName = C));
  },
  98,
);
