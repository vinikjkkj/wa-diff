__d(
  "MAIBAWorkspaceExperienceRegistry",
  ["Promise", "RelayHooks", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(e, t, n, r) {
      var a = {
        dispose: function () {
          return e.dispose();
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
    var _ = {
        autoOpenOnHistoricalLoad: !1,
        evenSplitLayout: !1,
        inlineRefresh: !1,
        refetchOnReturn: !1,
        resolveToLatestVersion: !1,
      },
      f = {},
      g = {},
      h = new Map();
    function y(e, t, n) {
      ((f[e] = t), (g[e] = babelHelpers.extends({}, _, n)), h.delete(e));
    }
    function C(e) {
      if (e == null || e === "") return null;
      var t = f[e];
      return t == null ? null : t.getModuleIfRequired();
    }
    function b(e) {
      if (e == null || e === "") return _;
      var t = g[e];
      return t == null ? _ : t;
    }
    function v(t) {
      if (t == null || t === "") return (e || (e = n("Promise"))).resolve(null);
      var r = f[t];
      if (r == null) return (e || (e = n("Promise"))).resolve(null);
      var o = r.getModuleIfRequired();
      if (o != null) return (e || (e = n("Promise"))).resolve(o);
      var a = h.get(t);
      return (a == null && ((a = r.load()), h.set(t, a)), a);
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(2);
      if (e == null || e === "") return null;
      var n = f[e];
      if (n == null) return null;
      var r;
      t[0] !== n
        ? ((r = n.getModuleIfRequired()), (t[0] = n), (t[1] = r))
        : (r = t[1]);
      var a = r;
      if (a != null) return a;
      var i = h.get(e);
      throw (i == null && ((i = n.load()), h.set(e, i)), i);
    }
    function R(e) {
      var t,
        n = o("react-compiler-runtime").c(9),
        r = (t = e.workspace_type) != null ? t : "",
        a;
      n[0] !== r
        ? ((a = function () {
            return C(r);
          }),
          (n[0] = r),
          (n[1] = a))
        : (a = n[1]);
      var i = m(a),
        l = i[0],
        s = i[1],
        u,
        c;
      if (
        (n[2] !== l || n[3] !== r
          ? ((u = function () {
              if (r !== "" && l == null) {
                var e = !1;
                return (
                  v(r).then(function (t) {
                    e || (t != null && s(t));
                  }),
                  function () {
                    e = !0;
                  }
                );
              }
            }),
            (c = [l, r]),
            (n[2] = l),
            (n[3] = r),
            (n[4] = u),
            (n[5] = c))
          : ((u = n[4]), (c = n[5])),
        d(u, c),
        l == null)
      )
        return null;
      var p = l.getPillDescriptor;
      if (p == null) return null;
      var _;
      return (
        n[6] !== e || n[7] !== p
          ? ((_ = p(e)), (n[6] = e), (n[7] = p), (n[8] = _))
          : (_ = n[8]),
        _
      );
    }
    ((l.buildLoadedEntryPoint = p),
      (l.DEFAULT_WORKSPACE_EXPERIENCE_POLICY = _),
      (l.registerWorkspaceExperience = y),
      (l.getLoadedWorkspaceExperience = C),
      (l.getWorkspaceExperiencePolicy = b),
      (l.loadWorkspaceExperienceAsync = v),
      (l.useLazyWorkspaceExperience = S),
      (l.useWorkspacePillDescriptor = R));
  },
  98,
);
