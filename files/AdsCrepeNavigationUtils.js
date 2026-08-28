__d(
  "AdsCrepeNavigationUtils",
  [
    "AdsCrepeGetCurrentStep",
    "AdsObjectTypes",
    "AdsPERouterHelper",
    "AdsUEditorLayoutAutoScrollUtils",
    "FBLogger",
    "adsCrepeNavigateToCPFlow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "PACKAGE_AD_CREATION";
    }
    function s(e) {
      switch (e) {
        case "ad":
          return "L1";
        case "ad_set":
          return "L2";
        case "campaign":
          return "L3";
        default:
          return null;
      }
    }
    function u(e, t) {
      switch (e) {
        case "ad":
          return r("AdsCrepeGetCurrentStep")(r("AdsObjectTypes").ADGROUP, t);
        case "ad_set":
          return r("AdsCrepeGetCurrentStep")(r("AdsObjectTypes").CAMPAIGN, t);
        case "campaign":
          return r("AdsCrepeGetCurrentStep")(
            r("AdsObjectTypes").CAMPAIGN_GROUP,
            t,
          );
        default:
          return 0;
      }
    }
    function c(e, t, n) {
      var o = r("AdsPERouterHelper").getRouter().getParams(),
        a = o.section;
      if (a !== "PACKAGE_AD_CREATION") {
        d(e, t, n);
        return;
      }
      var i = r("AdsPERouterHelper").getRouteBuilder().closeTray();
      (n != null && i.tray(n), i.navigate());
    }
    function d(e, t, n, o) {
      r("adsCrepeNavigateToCPFlow")(e, t, !1, n, function () {}, o);
    }
    function m(e, t) {
      var n,
        o = e.adgroupIDs,
        a = e.campaignGroupIDs,
        i = e.campaignIDs;
      if (a.length === 0 || i.length === 0 || o.length === 0) {
        r("FBLogger")("ads").debug("Package ad object IDs must be specified");
        return;
      }
      r("AdsPERouterHelper")
        .getRouteBuilder()
        .section((n = s(t)) != null ? n : "L1")
        .selectedIDs(a, "campaign")
        .selectedIDs(i, "ad_set")
        .selectedIDs(o, "ad")
        .tray("INSIGHTS_DRAWER")
        .navigate();
    }
    function p(e, t, n, o, a) {
      var i = e.adgroupIDs,
        l = e.campaignGroupIDs,
        s = e.campaignIDs,
        u = e.parentAdObjectType,
        c = e.step,
        d = r("AdsPERouterHelper").getRouteBuilder();
      return (
        l.length > 0 && (d = d.selectedIDs(l, "campaign")),
        (t === !0 || s.length > 0) && (d = d.selectedIDs(s, "ad_set")),
        (n === !0 || i.length > 0) && (d = d.selectedIDs(i, "ad")),
        u === r("AdsObjectTypes").CAMPAIGN_GROUP
          ? (d = d.section("L2"))
          : u === r("AdsObjectTypes").CAMPAIGN && (d = d.section("L1")),
        c != null && d.setCurrentStep(c),
        o != null &&
          a != null &&
          d.action(function () {
            window.setTimeout(function () {
              a.activatePath(o.toArray());
            }, 2e3);
          }),
        d.navigate()
      );
    }
    function _(e) {
      var t = e.adgroupIDs,
        n = e.adsPathLinkContext,
        a = e.campaignGroupIDs,
        i = e.campaignIDs,
        l = e.getChildrenIDs,
        s = e.ids,
        u = e.isAutoScrollEnabled,
        c = e.objectIDs,
        d = e.objectType,
        m = e.step;
      switch (d) {
        case r("AdsObjectTypes").CAMPAIGN_GROUP: {
          (u === !0 &&
            n &&
            n.activatePath([
              o("AdsUEditorLayoutAutoScrollUtils").LayoutAutoScrollKey
                .ADS_UEDITOR_CAMPAIGN_GROUP_LAYOUT,
            ]),
            p({
              step: m,
              campaignGroupIDs: s,
              campaignIDs: i != null ? i : c.campaignIDs,
              adgroupIDs: t != null ? t : c.adgroupIDs,
            }));
          break;
        }
        case r("AdsObjectTypes").CAMPAIGN: {
          u === !0 &&
            n &&
            n.activatePath([
              o("AdsUEditorLayoutAutoScrollUtils").LayoutAutoScrollKey
                .ADS_UEDITOR_CAMPAIGN_LAYOUT,
            ]);
          var _;
          (t && t.length > 0
            ? (_ = t)
            : c.adgroupIDs && c.adgroupIDs.length > 0
              ? (_ = c.adgroupIDs)
              : l
                ? (_ = l(s))
                : (_ = []),
            p(
              {
                step: m,
                campaignGroupIDs: a != null ? a : c.campaignGroupIDs,
                campaignIDs: s,
                adgroupIDs: _,
              },
              !1,
              !0,
            ));
          break;
        }
        case r("AdsObjectTypes").ADGROUP: {
          (u === !0 &&
            n &&
            n.activatePath([
              o("AdsUEditorLayoutAutoScrollUtils").LayoutAutoScrollKey
                .ADS_UEDITOR_ADS_GROUP_LAYOUT,
            ]),
            p(
              {
                step: m,
                campaignGroupIDs: a != null ? a : c.campaignGroupIDs,
                campaignIDs: i != null ? i : c.campaignIDs,
                adgroupIDs: s,
              },
              !0,
            ));
          break;
        }
      }
    }
    function f(e) {
      r("AdsPERouterHelper").getRouteBuilder().setCurrentStep(e).navigate();
    }
    ((l.isInCreationPackageFlow = e),
      (l.genNavSectionFromLevel = s),
      (l.getCurrentStepFromObjectLevel = u),
      (l.toggleCreationPackageTab = c),
      (l.navigateToCPFlow = d),
      (l.navigateToInsightsTab = m),
      (l.navigateToObjects = p),
      (l.navigateToStep = _),
      (l.setCurrentStep = f));
  },
  98,
);
