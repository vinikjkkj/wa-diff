__d(
  "WAWebMediaUrlAllowlistGating",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_validate_media_url_allowlist_enabled",
      );
    }
    l.isMediaUrlAllowlistValidationEnabled = e;
  },
  98,
);
