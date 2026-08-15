__d(
  "WAWebMLModelNamespaces",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        0: "wa_bwe_plc_mobile",
        1: "wa_bwe_undershoot_mobile",
        2: "wa_bwe_tr_mobile",
        3: "wa_bwe_cong_mobile",
        4: "wa_media_vmos_mobile",
        5: "wa_bwe_hd_target_mobile",
        6: "wa_bwe_undershoot_mobile",
        7: "wa_media_vsr_mobile",
        8: "wa_media_automos_mobile",
        9: "wa_media_ns_mobile",
        10: "wa_bwe_hd_target_mobile",
        11: "wa_bwe_rl_mobile",
        12: "wa_nadl_mobile",
        13: "wa_bwe_quickhd_mobile",
        14: "wa_media_uvq_mobile",
        15: "wa_media_mlow_companion_mobile",
      },
      l = [
        {
          namespace: "wa_bwe_plc_mobile",
          abProps: ["wavoip_ml_bwe_plc_model_download_versions_v2"],
        },
        {
          namespace: "wa_bwe_undershoot_mobile",
          abProps: [
            "wavoip_ml_bwe_undershoot_model_download_versions_v2",
            "wavoip_ml_bwe_gc_undershoot_model_download_versions_v2",
          ],
        },
        {
          namespace: "wa_bwe_tr_mobile",
          abProps: ["wavoip_ml_bwe_tr_model_download_versions_v2"],
        },
        {
          namespace: "wa_bwe_cong_mobile",
          abProps: ["wavoip_ml_bwe_cong_model_download_versions_v2"],
        },
        {
          namespace: "wa_bwe_hd_target_mobile",
          abProps: [
            "wavoip_ml_bwe_hd_target_model_download_versions_v2",
            "wavoip_ml_bwe_gc_hd_target_model_download_versions_v2",
          ],
        },
        {
          namespace: "wa_bwe_rl_mobile",
          abProps: ["wavoip_ml_bwe_rl_model_download_versions_v2"],
        },
        {
          namespace: "wa_bwe_quickhd_mobile",
          abProps: ["wavoip_ml_bwe_quickhd_model_download_versions_v2"],
        },
        {
          namespace: "wa_media_vmos_mobile",
          abProps: ["wavoip_ml_media_vmos_model_download_versions_v2"],
        },
        {
          namespace: "wa_media_vsr_mobile",
          abProps: ["wavoip_ml_media_vsr_model_download_versions_v2"],
        },
        {
          namespace: "wa_media_automos_mobile",
          abProps: ["wavoip_ml_media_automos_model_download_versions_v2"],
        },
        {
          namespace: "wa_media_ns_mobile",
          abProps: ["wavoip_ml_media_ns_model_download_versions_v2"],
        },
        {
          namespace: "wa_media_uvq_mobile",
          abProps: ["wavoip_ml_uvq_download_versions_v2"],
        },
        {
          namespace: "wa_media_mlow_companion_mobile",
          abProps: [
            "wavoip_ml_media_mlow_companion_model_download_versions_v2",
          ],
        },
        {
          namespace: "wa_nadl_mobile",
          abProps: ["wavoip_ml_nadl_model_download_versions_v2"],
        },
        {
          namespace: "wa_temp_mobile",
          abProps: ["wavoip_ml_temp_model_download_versions_v2"],
        },
        {
          namespace: "wa_transport_mobile",
          abProps: ["wavoip_ml_transport_download_versions_v2"],
        },
      ];
    function s(t) {
      return Object.hasOwn(e, t) ? e[t] : null;
    }
    ((i.PER_TYPE_NAMESPACE_ABPROPS = l), (i.getNamespaceForModelType = s));
  },
  66,
);
