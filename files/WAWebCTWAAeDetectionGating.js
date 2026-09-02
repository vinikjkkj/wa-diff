__d(
  "WAWebCTWAAeDetectionGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_3pd_conversion_on_ae_detection",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ae_model_meta_data_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "ctwa_ae_model_meta_data_signal_enabled",
      );
    }
    ((l.isCtwa3pdConversionOnAeDetectionEnabled = e),
      (l.isCtwaAeModelMetadataIngestionEnabled = s),
      (l.isCtwaAeModelMetadataEmissionEnabled = u));
  },
  98,
);
