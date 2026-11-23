__d(
  "AdsBwIConstants",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsBwIConfig",
    "AdvertiserSiloedValueOptimizationGoalGating",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = s._(/*BTDS*/ "");
    function d(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("Partner Label", t.label)]);
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("Partner Description", t.description)]);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m2",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "", [
                  s._param("Partner Label Bold", t.label),
                ]),
              }),
            ),
            s._implicitParam(
              "=m8",
              u.jsx(r("AHGHelpTrayLink2.react"), {
                helpCenterID: h,
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m2",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "", [
                  s._param("Partner Label Bold", t.label),
                ]),
              }),
            ),
          ]);
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._implicitParam(
              "=m0",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "", [
                  s._param("Partner Label", t.label),
                ]),
              }),
            ),
          ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "", [
        s._implicitParam(
          "=m1",
          u.jsx("strong", { children: s._(/*BTDS*/ "") }),
        ),
      ]);
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = "952192354843755";
    function y(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m2",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "", [
                  s._param("Partner Label Bold", t.label),
                ]),
              }),
            ),
            s._implicitParam(
              "=m8",
              u.jsx(r("AHGHelpTrayLink2.react"), {
                helpCenterID: h,
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ]);
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("Partner Label", t.label)]);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n = o("AdsBwIConfig").getConfigValues(e);
      return s._(/*BTDS*/ "", [
        s._param(
          "Partner Label",
          (t = n == null ? void 0 : n.label) != null
            ? t
            : "these selected type of",
        ),
        s._implicitParam(
          "=m0",
          u.jsx("strong", { children: s._(/*BTDS*/ "") }),
        ),
      ]);
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t,
        n = o("AdsBwIConfig").getConfigValues(e);
      return s._(/*BTDS*/ "", [
        s._param(
          "Partner Label",
          (t = n == null ? void 0 : n.label) != null
            ? t
            : "these selected type of",
        ),
      ]);
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m5",
              u.jsx("strong", { children: s._(/*BTDS*/ "") }),
            ),
          ]);
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("Partner Label", t.label)]);
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("Partner Label", t.label)]);
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E = s._(/*BTDS*/ ""),
      k = s._(/*BTDS*/ "");
    function I(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [s._param("Partner Label", t.label)]);
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      if (
        o(
          "AdvertiserSiloedValueOptimizationGoalGating",
        ).isAdvertiserSiloedValueOptimizationGoalOnSalesEnabled()
      )
        return null;
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m6",
              u.jsx("strong", { children: s._(/*BTDS*/ "") }),
            ),
          ]);
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m5",
              u.jsx("strong", { children: s._(/*BTDS*/ "") }),
            ),
          ]);
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m5",
              u.jsx("strong", { children: s._(/*BTDS*/ "") }),
            ),
          ]);
    }
    ((x.displayName = x.name + " [from " + i.id + "]"),
      (l.BUY_WITH_PRIME_LABEL = c),
      (l.AdsBwILabel = d),
      (l.AdsBwIFieldDescription = m),
      (l.AdsBwIPixelDisabledTooltip = p),
      (l.AdsBwICatalogDisabledTooltip = _),
      (l.AdsBwIPublishedCampaignDisabledTooltip = f),
      (l.AdsBwPUnready3PTooltip = g),
      (l.AdsBwINoPixelOrCatalogDisabledTooltip = y),
      (l.AdsBwIPreviewDisabledTooltip = C),
      (l.AdsBwIManualUploadDisabledTooltip = b),
      (l.AdsBwICatalogFilterNotice = v),
      (l.AdsBwIDisabledCatalogSwitchMessage = S),
      (l.inelligiblePlacementGroupLevelReasonBwI = R),
      (l.inelligiblePlacementPlatformLevelReasonBwI = L),
      (l.blockingModalContinueLabel = E),
      (l.blockingModalHeader = k),
      (l.blockingModalDescription = I),
      (l.AdsBwIPerformanceGoalDisabledSales = T),
      (l.getBwIRequireBebsiteEventsMessage = D),
      (l.getBwIAdCallToActionTooltip = x));
  },
  226,
);
