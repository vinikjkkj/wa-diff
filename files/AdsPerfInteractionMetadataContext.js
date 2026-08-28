__d(
  "AdsPerfInteractionMetadataContext",
  ["ifRequired"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = null;
      return (
        r("ifRequired")("AdsEditingAdgroupEditorContext", function (t) {
          e = t;
        }),
        e
      );
    }
    function s() {
      var e = null;
      return (
        r("ifRequired")("AdsEditingCampaignEditorContext", function (t) {
          e = t;
        }),
        e
      );
    }
    function u() {
      var e = null;
      return (
        r("ifRequired")("AdsEditingCampaignGroupEditorContext", function (t) {
          e = t;
        }),
        e
      );
    }
    function c(t) {
      var n = null;
      switch (t) {
        case "L1":
          n = e();
          break;
        case "L2":
          n = s();
          break;
        case "L3":
          n = u();
      }
      return n;
    }
    function d(t) {
      var n = null;
      switch (t) {
        case "L1": {
          var o = e();
          o != null &&
            r("ifRequired")(
              "adsUEditorSelectedAdgroupIDsSelector",
              function (e) {
                n = e(o);
              },
            );
          break;
        }
        case "L2": {
          var a = s();
          a != null &&
            r("ifRequired")(
              "adsUEditorSelectedCampaignIDsSelector",
              function (e) {
                n = e(a);
              },
            );
          break;
        }
        case "L3": {
          var i = u();
          i != null &&
            r("ifRequired")(
              "adsUEditorSelectedCampaignGroupIDsSelector",
              function (e) {
                n = e.adsUEditorSelectedCampaignGroupIDsSelector(i);
              },
            );
        }
      }
      return n;
    }
    ((l.getEditorContext = c), (l.getSelectedIdsBySection = d));
  },
  98,
);
