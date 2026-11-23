__d(
  "MAIBACreationStepsSectionContent",
  ["fbt", "MAIBACreationStepsSection"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = s._(/*BTDS*/ ""),
      f =
        ((e = {}),
        (e[(p = r("MAIBACreationStepsSection")).AUDIENCE] = s._(/*BTDS*/ "")),
        (e[p.PLACEMENTS] = _),
        (e[p.BUDGET] = s._(/*BTDS*/ "")),
        (e[p.BUDGET_SCHEDULE] = s._(/*BTDS*/ "")),
        (e[p.CREATIVE] = s._(/*BTDS*/ "")),
        (e[p.OPTIMIZATION] = s._(/*BTDS*/ "")),
        (e[p.CONVERSION_LOCATION] = s._(/*BTDS*/ "")),
        (e[p.AD_SETUP] = s._(/*BTDS*/ "")),
        e),
      g =
        ((u = {}),
        (u[p.AUDIENCE] = s._(/*BTDS*/ "")),
        (u[p.PLACEMENTS] = s._(/*BTDS*/ "")),
        (u[p.BUDGET] = s._(/*BTDS*/ "")),
        (u[p.AD_SETUP] = s._(/*BTDS*/ "")),
        (u[p.CONVERSION_LOCATION] = s._(/*BTDS*/ "")),
        u),
      h =
        ((c = {}),
        (c[p.AUDIENCE] = s._(/*BTDS*/ "")),
        (c[p.PLACEMENTS] = s._(/*BTDS*/ "")),
        (c[p.BUDGET] = s._(/*BTDS*/ "")),
        (c[p.AD_SETUP] = s._(/*BTDS*/ "")),
        c);
    function y(e, t, n) {
      if ((t === void 0 && (t = !1), n === void 0 && (n = !1), t)) {
        var r,
          o = (r = n ? h[e] : null) != null ? r : g[e];
        if (o != null) return o;
      }
      return f[e];
    }
    var C =
        ((d = {}),
        (d[p.AUDIENCE] = s._(/*BTDS*/ "")),
        (d[p.BUDGET] = s._(/*BTDS*/ "")),
        (d[p.CREATIVE] = s._(/*BTDS*/ "")),
        d),
      b =
        ((m = {}),
        (m[p.AUDIENCE] = s._(/*BTDS*/ "")),
        (m[p.BUDGET] = s._(/*BTDS*/ "")),
        (m[p.CREATIVE] = s._(/*BTDS*/ "")),
        m);
    function v(e) {
      return C[e];
    }
    var S = s._(/*BTDS*/ "");
    function R(e) {
      return b[e];
    }
    ((l.getCreationStepsSectionEntrypointPrompt = y),
      (l.getEditFlowEntrypointPrompt = v),
      (l.MAIBA_CREATION_STEPS_SECTION_ENTRYPOINT_CTA = S),
      (l.getEditFlowEntrypointCTA = R));
  },
  226,
);
