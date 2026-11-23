__d(
  "MAIBAWorkspaceExperienceRegistry",
  ["Promise", "RelayHooks", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(e) {
      try {
        return (e.getComponent(), !0);
      } catch (e) {
        return !1;
      }
    }
    function _(e, t, n, r) {
      var a = {
        dispose: function () {
          return e.dispose();
        },
        getRootModuleStatus: function () {
          return { isLoaded: p(e), moduleID: e.rootModuleID };
        },
        render: function (r) {
          return u.jsx(o("RelayHooks").EntryPointContainer, {
            entryPointReference: e,
            props: t(r),
          });
        },
      };
      return n == null && r == null
        ? a
        : babelHelpers.extends({}, a, {
            renderInlineWorkspace:
              r == null
                ? void 0
                : function (t) {
                    var n = r(t);
                    return n == null
                      ? null
                      : u.jsx(o("RelayHooks").EntryPointContainer, {
                          entryPointReference: e,
                          props: n,
                        });
                  },
            renderInlineWorkspacePillPublish:
              n == null
                ? void 0
                : function (t) {
                    return u.jsx(o("RelayHooks").EntryPointContainer, {
                      entryPointReference: e,
                      props: n(t),
                    });
                  },
          });
    }
    var f = {
        autoOpenOnHistoricalLoad: !1,
        closeIconOnly: !1,
        evenSplitLayout: !1,
        inlineRefresh: !1,
        refetchOnReturn: !1,
        rendersInlineWorkspace: !1,
        resolveToLatestVersion: !1,
      },
      g = {},
      h = {},
      y = new Map();
    function C(e, t, n) {
      ((g[e] = t), (h[e] = babelHelpers.extends({}, f, n)), y.delete(e));
    }
    function b(e) {
      return e != null && e !== "" && g[e] != null;
    }
    function v(e) {
      if (e == null || e === "") return null;
      var t = g[e];
      return t == null ? null : t.getModuleIfRequired();
    }
    function S(e) {
      if (e == null || e === "") return f;
      var t = h[e];
      return t == null ? f : t;
    }
    function R(e, t) {
      var n = y.get(e);
      return (
        n == null &&
          ((n = t.load()),
          n.catch(function () {
            y.get(e) === n && y.delete(e);
          }),
          y.set(e, n)),
        n
      );
    }
    function L(t) {
      if (t == null || t === "") return (e || (e = n("Promise"))).resolve(null);
      var r = g[t];
      if (r == null) return (e || (e = n("Promise"))).resolve(null);
      var o = r.getModuleIfRequired();
      return o != null ? (e || (e = n("Promise"))).resolve(o) : R(t, r);
    }
    function E(e) {
      if (e == null || e === "") return null;
      var t = g[e];
      if (t == null) return null;
      var n = t.getModuleIfRequired();
      if (n != null) return n;
      throw R(e, t);
    }
    function k(e) {
      var t,
        n = (t = e.workspace_type) != null ? t : "",
        r = m(function () {
          return v(n);
        }),
        o = r[0],
        a = r[1];
      if (
        (d(
          function () {
            if (n !== "" && o == null) {
              var e = !1;
              return (
                L(n).then(function (t) {
                  e || (t != null && a(t));
                }),
                function () {
                  e = !0;
                }
              );
            }
          },
          [o, n],
        ),
        o == null)
      )
        return null;
      var i = o.getPillDescriptor;
      return i == null ? null : i(e);
    }
    ((l.buildLoadedEntryPoint = _),
      (l.DEFAULT_WORKSPACE_EXPERIENCE_POLICY = f),
      (l.registerWorkspaceExperience = C),
      (l.isWorkspaceExperienceRegistered = b),
      (l.getLoadedWorkspaceExperience = v),
      (l.getWorkspaceExperiencePolicy = S),
      (l.loadWorkspaceExperienceAsync = L),
      (l.useLazyWorkspaceExperience = E),
      (l.useWorkspacePillDescriptor = k));
  },
  98,
);
