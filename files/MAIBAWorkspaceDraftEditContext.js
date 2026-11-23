__d(
  "MAIBAWorkspaceDraftEditContext",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useContext,
      m = u.useMemo,
      p = u.useReducer,
      _ = u.useState,
      f = s.createContext(null);
    function g(e, t, n) {
      return e + "." + t + "." + n;
    }
    function h(e) {
      return "__prompt__." + e;
    }
    var y = Object.freeze({ byKey: new Map() });
    function C(e, t) {
      if (e.byKey.size === 0 || t.patches.length === 0) return e;
      var n = new Map(e.byKey),
        r = !1;
      for (var o of t.patches) {
        var a = g(o.level, o.adObjectID, o.field),
          i = n.get(a);
        i == null ||
          i.kind !== o.kind ||
          (((o.kind === "value" &&
            i.kind === "value" &&
            Object.is(i.value, o.value) &&
            Object.is(i.originalValue, o.originalValue) &&
            i.laneHint === o.laneHint &&
            i.executeBAUCommand === o.executeBAUCommand) ||
            (o.kind === "prompt" &&
              i.kind === "prompt" &&
              i.prompt === o.prompt)) &&
            (n.delete(a), (r = !0)));
      }
      return r ? (n.size === 0 ? y : { byKey: n }) : e;
    }
    function b(e, t) {
      if (!e.byKey.has(t)) return e;
      var n = new Map(e.byKey);
      return (n.delete(t), { byKey: n });
    }
    function v(e, t) {
      switch (t.type) {
        case "SET_VALUE": {
          var n = g(t.level, t.adObjectID, t.field);
          if (Object.is(t.value, t.originalValue)) return b(e, n);
          var r = new Map(e.byKey),
            o = {
              kind: "value",
              level: t.level,
              adObjectID: t.adObjectID,
              field: t.field,
              value: t.value,
              originalValue: t.originalValue,
            },
            a =
              t.laneHint != null
                ? babelHelpers.extends({}, o, { laneHint: t.laneHint })
                : o;
          return (
            r.set(
              n,
              t.executeBAUCommand != null
                ? babelHelpers.extends({}, a, {
                    executeBAUCommand: t.executeBAUCommand,
                  })
                : a,
            ),
            { byKey: r }
          );
        }
        case "SET_MANY_VALUES": {
          if (t.patches.length === 0) return e;
          var i = !1,
            l = new Map(e.byKey);
          for (var s of t.patches) {
            var u = g(t.level, t.adObjectID, s.field);
            if (Object.is(s.value, s.originalValue)) {
              l.has(u) && (l.delete(u), (i = !0));
              continue;
            }
            (l.set(
              u,
              babelHelpers.extends(
                {
                  kind: "value",
                  level: t.level,
                  adObjectID: t.adObjectID,
                  field: s.field,
                  value: s.value,
                  originalValue: s.originalValue,
                },
                t.laneHint != null ? { laneHint: t.laneHint } : null,
              ),
            ),
              (i = !0));
          }
          return i ? { byKey: l } : e;
        }
        case "CLEAR_FIELD": {
          var c = g(t.level, t.adObjectID, t.field);
          return b(e, c);
        }
        case "SET_PROMPT": {
          var d = g(t.level, t.adObjectID, t.field);
          if (t.prompt === "") return b(e, d);
          var m = new Map(e.byKey);
          return (
            m.set(d, {
              kind: "prompt",
              level: t.level,
              adObjectID: t.adObjectID,
              field: t.field,
              prompt: t.prompt,
            }),
            { byKey: m }
          );
        }
        case "CLEAR_SAVED_PATCHES":
          return C(e, t);
        case "DISCARD_ALL":
          return e.byKey.size === 0 ? e : y;
        default:
          return e;
      }
    }
    function S(e) {
      if (e.type !== "SET_VALUE" && e.type !== "SET_MANY_VALUES") return null;
      var t =
        e.type === "SET_VALUE"
          ? Object.is(e.value, e.originalValue)
            ? []
            : [e.field]
          : e.patches
              .filter(function (e) {
                return !Object.is(e.value, e.originalValue);
              })
              .map(function (e) {
                return e.field;
              });
      return t.length > 0
        ? { adObjectID: e.adObjectID, fields: t, level: e.level }
        : null;
    }
    function R(e) {
      var t = p(v, y),
        n = t[0],
        r = t[1],
        o = c(
          function (t) {
            r(t);
            var n = S(t);
            n != null && (e == null || e(n));
          },
          [e],
        ),
        a = _(!0),
        i = a[0],
        l = a[1];
      return m(
        function () {
          return {
            state: n,
            dispatch: o,
            isValid: i,
            setValid: l,
            patches: Array.from(n.byKey.values()),
          };
        },
        [n, o, i],
      );
    }
    function L(e) {
      var t = e.children,
        n = R();
      return s.jsx(f.Provider, { value: n, children: t });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return d(f);
    }
    ((l.MAIBAWorkspaceDraftEditContext = f),
      (l.makeKey = g),
      (l.makePromptField = h),
      (l.useMAIBAWorkspaceLocalDraftEditState = R),
      (l.MAIBAWorkspaceDraftEditContextProvider = L),
      (l.useMAIBAWorkspaceDraftEditContext = E));
  },
  98,
);
