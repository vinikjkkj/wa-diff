__d(
  "AdsCrepePerformanceUtils",
  ["AdsCopySource", "AdsPerfInteractionUtil", "FBLogger", "ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s() {
      return (
        (e = r("ifRequired")(
          "adsPECrepeIsPackageSelector",
          function (e) {
            return e();
          },
          function () {
            return (
              r("FBLogger")("ads").mustfix(
                "Creation package flow Error: %s isn't required",
                "adsPECrepeIsPackageSelector",
              ),
              !1
            );
          },
        )),
        e
      );
    }
    function u() {
      var e = o("AdsPerfInteractionUtil").getTracePolicy();
      if (e == null) return !1;
      switch (e) {
        case "manage_ads.l3":
        case "manage_ads.l2":
        case "manage_ads.l1":
        case "manage_messages.l3":
        case "manage_messages.l1":
          return s();
        case "manage_ads.package_ad_creation":
        case "manage_messages.package_ad_creation":
          return !0;
      }
      return !1;
    }
    function c(e) {
      if (e === r("AdsCopySource").UPGRADE_PACKAGE_DUPLICATE)
        return "am.editor.crepe_package";
      var t = o("AdsPerfInteractionUtil").getTracePolicy();
      if (t == null) return null;
      switch (t) {
        case "manage_ads.l3":
        case "manage_ads.l1":
        case "manage_messages.l3":
        case "manage_messages.l1":
          return s() ? "am.table.pe_modal_status" : null;
        case "manage_ads.package_ad_creation":
        case "manage_messages.package_ad_creation":
          return "am.editor.crepe_package";
      }
    }
    ((l.isCreationPackageAtTable = s),
      (l.isCreationPackage = u),
      (l.getDuplicateCreationPackageComponent = c));
  },
  98,
);
