__d(
  "MAIBAComparisonContext",
  ["RelayHooks", "RelayModern", "SaveResponseTonePreferenceMutation", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useRef,
      _ = u.useState,
      f = {
        comparisonConversationId: null,
        dismiss: function () {},
        getConversationIds: function () {
          return {
            comparisonConversationId: null,
            externalConversationId: null,
          };
        },
        isActive: !1,
        preference: null,
        selectPreference: function () {},
        shouldSwap: !1,
        startComparison: function () {},
        updateComparisonConversationId: function () {},
        updateExternalConversationId: function () {},
      },
      g = s.createContext(f),
      h = null;
    function y() {
      return h;
    }
    function C(e) {
      h = e;
    }
    function b() {
      return d(g);
    }
    function v(e) {
      var t = e.children,
        n = e.initialPreference,
        r = _(!1),
        a = r[0],
        i = r[1],
        l = _(n != null ? n : null),
        u = l[0],
        d = l[1],
        f = _(!1),
        y = f[0],
        C = f[1],
        b = p(null),
        v = _(null),
        S = v[0],
        R = v[1],
        L = o("RelayHooks").useRelayEnvironment(),
        E = c(function (e) {
          b.current = e;
        }, []),
        k = c(function (e) {
          (R(e), (h = e));
        }, []),
        I = c(
          function () {
            return {
              comparisonConversationId: S,
              externalConversationId: b.current,
            };
          },
          [S],
        ),
        T = c(function () {
          var e = new Uint8Array(1);
          (crypto.getRandomValues(e), C(e[0] < 128), i(!0), d(null));
        }, []),
        D = c(
          function (e, t, n) {
            var r;
            (d(e), i(!1));
            var a = t != null ? t : b.current,
              l = (r = n != null ? n : S) != null ? r : h;
            a != null &&
              o("SaveResponseTonePreferenceMutation")
                .saveResponseTonePreferenceMutation != null &&
              o("RelayModern").commitMutation(L, {
                mutation: o("SaveResponseTonePreferenceMutation")
                  .saveResponseTonePreferenceMutation,
                variables: {
                  comparison_conversation_id: l != null ? l : void 0,
                  external_conversation_id: a,
                  preference: e,
                },
              });
          },
          [S, L],
        ),
        x = c(function () {
          (i(!1), d(null));
        }, []),
        $ = m(
          function () {
            return {
              comparisonConversationId: S,
              dismiss: x,
              getConversationIds: I,
              isActive: a,
              preference: u,
              selectPreference: D,
              shouldSwap: y,
              startComparison: T,
              updateComparisonConversationId: k,
              updateExternalConversationId: E,
            };
          },
          [S, x, I, a, u, D, y, T, k, E],
        );
      return s.jsx(g, { value: $, children: t });
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.getLastComparisonConversationId = y),
      (l.setLastComparisonConversationId = C),
      (l.useMAIBAComparisonContext = b),
      (l.MAIBAComparisonProvider = v));
  },
  98,
);
