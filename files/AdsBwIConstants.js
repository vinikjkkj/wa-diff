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
      c = s._(/*BTDS*/ "Buy with Prime");
    function d(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "{Partner Label}", [s._param("Partner Label", t.label)]);
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "{Partner Description}", [
            s._param("Partner Description", t.description),
          ]);
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "To turn on {=m2}, first set up a Meta pixel and then contact your Meta account manager to make your pixel eligible for {Partner Label} ads. {=m8}",
            [
              s._param("Partner Label", t.label),
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{Partner Label Bold}", [
                    s._param("Partner Label Bold", t.label),
                  ]),
                }),
              ),
              s._implicitParam(
                "=m8",
                u.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: h,
                  children: s._(/*BTDS*/ "Learn how to setup a pixel"),
                }),
              ),
            ],
          );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "To turn on {=m2}, contact your Meta account manager to set up your catalog for {Partner Label} ads.",
            [
              s._param("Partner Label", t.label),
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{Partner Label Bold}", [
                    s._param("Partner Label Bold", t.label),
                  ]),
                }),
              ),
            ],
          );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "{=m0} can't be changed because your campaign was published.",
            [
              s._implicitParam(
                "=m0",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{Partner Label}", [
                    s._param("Partner Label", t.label),
                  ]),
                }),
              ),
            ],
          );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(
        /*BTDS*/ "To turn on {=m1}, go to Amazon to complete the steps required to create Buy with Prime ads on Ads Manager.",
        [
          s._implicitParam(
            "=m1",
            u.jsx("strong", { children: s._(/*BTDS*/ "Buy with Prime") }),
          ),
        ],
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    var h = "952192354843755";
    function y(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "To turn on {=m2}, contact your Meta account manager to set up both a catalog and a pixel for {Partner Label} ads. {=m8}",
            [
              s._param("Partner Label", t.label),
              s._implicitParam(
                "=m2",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "{Partner Label Bold}", [
                    s._param("Partner Label Bold", t.label),
                  ]),
                }),
              ),
              s._implicitParam(
                "=m8",
                u.jsx(r("AHGHelpTrayLink2.react"), {
                  helpCenterID: h,
                  children: s._(/*BTDS*/ "See how"),
                }),
              ),
            ],
          );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "Ad preview isn't available for {Partner Label} ads.", [
            s._param("Partner Label", t.label),
          ]);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t,
        n = o("AdsBwIConfig").getConfigValues(e);
      return s._(
        /*BTDS*/ "{=m0} isn\u2019t available for {Partner Label} ads.",
        [
          s._param(
            "Partner Label",
            (t = n == null ? void 0 : n.label) != null
              ? t
              : "these selected type of",
          ),
          s._implicitParam(
            "=m0",
            u.jsx("strong", { children: s._(/*BTDS*/ "Manual upload") }),
          ),
        ],
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t,
        n = o("AdsBwIConfig").getConfigValues(e);
      return s._(
        /*BTDS*/ "We're only showing catalogs that are set up for {Partner Label} ads.",
        [
          s._param(
            "Partner Label",
            (t = n == null ? void 0 : n.label) != null
              ? t
              : "these selected type of",
          ),
        ],
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "For {Partner Label} ads, {=m5} must be turned on.", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m5",
              u.jsx("strong", { children: s._(/*BTDS*/ "Catalog") }),
            ),
          ]);
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "This placement isn't available with {Partner Label} ads.",
            [s._param("Partner Label", t.label)],
          );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "This platform isn't available with {Partner Label} ads.",
            [s._param("Partner Label", t.label)],
          );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E = s._(/*BTDS*/ "Continue with changes"),
      k = s._(/*BTDS*/ "Some settings may change");
    function I(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "Some of the settings you selected may not be available for {Partner Label} ads. We\u2019ll keep your existing settings where possible and automatically update the rest so you can create a {Partner Label} ad.",
            [s._param("Partner Label", t.label)],
          );
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
        : s._(
            /*BTDS*/ "For {Partner Label} ads within the sales campaign, {=m6} is the only conversion goal available",
            [
              s._param("Partner Label", t.label),
              s._implicitParam(
                "=m6",
                u.jsx("strong", {
                  children: s._(/*BTDS*/ "Maximize number of conversions"),
                }),
              ),
            ],
          );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(/*BTDS*/ "For {Partner Label} ads, {=m5} must be selected.", [
            s._param("Partner Label", t.label),
            s._implicitParam(
              "=m5",
              u.jsx("strong", { children: s._(/*BTDS*/ "Website events") }),
            ),
          ]);
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      var t = o("AdsBwIConfig").getConfigValues(e);
      return t == null
        ? null
        : s._(
            /*BTDS*/ "For {Partner Label} ads, {=m5} is the only call to action available.",
            [
              s._param("Partner Label", t.label),
              s._implicitParam(
                "=m5",
                u.jsx("strong", { children: s._(/*BTDS*/ "Shop now") }),
              ),
            ],
          );
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
