__d(
  "AdsVideoUploadToastLoggingUtils",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.length === 1 ? e[0] : null;
    }
    function s(e, t) {
      return JSON.stringify({
        card_type: t,
        adgroup_ids: e,
        num_adgroups: e.length,
      });
    }
    function u(t, n) {
      if (n === "success") {
        var o;
        r("AdsInterfacesLogger").log({
          eventName: "ads_video_upload__success_toast_impression",
          data: ((o = {}), (o.adgroup_id = e(t)), (o.metadata = s(t, n)), o),
        });
      } else if (n === "error") {
        var a;
        r("AdsInterfacesLogger").log({
          eventName: "ads_video_upload__error_toast_impression",
          data: ((a = {}), (a.adgroup_id = e(t)), (a.metadata = s(t, n)), a),
        });
      }
    }
    function c(t, n) {
      if (n === "success") {
        var o;
        r("AdsInterfacesLogger").log({
          eventName: "ads_video_upload__success_toast_cta_click",
          data: ((o = {}), (o.adgroup_id = e(t)), (o.metadata = s(t, n)), o),
        });
      } else if (n === "error") {
        var a;
        r("AdsInterfacesLogger").log({
          eventName: "ads_video_upload__error_toast_cta_click",
          data: ((a = {}), (a.adgroup_id = e(t)), (a.metadata = s(t, n)), a),
        });
      }
    }
    function d(t, n) {
      var o;
      r("AdsInterfacesLogger").log({
        eventName: "ads_video_upload__toast_dismiss",
        data: ((o = {}), (o.adgroup_id = e(t)), (o.metadata = s(t, n)), o),
      });
    }
    ((l.logVideoUploadToastImpression = u),
      (l.logVideoUploadToastClickCTA = c),
      (l.logVideoUploadToastDismiss = d));
  },
  98,
);
