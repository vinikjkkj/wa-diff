__d(
  "WAWebPathfinderReservedMetadataKeys",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "cancelled",
      "custom_event_type",
      "edit_text_class",
      "frustration_repeated_action",
      "frustration_repetition_count",
      "generic_error_code",
      "generic_error_domain",
      "is_empty",
      "network_error_endpoint_category",
      "network_error_status_code",
      "screen_name",
      "toast_category",
      "toast_type",
      "touch_list_item_index",
      "touch_nearest_ancestor_id",
      "triggering_testid",
    ]);
    function l(e) {
      var t = {};
      for (var n of Object.keys(e)) t[n] = e[n];
      return t;
    }
    ((i.RESERVED_METADATA_KEYS = e), (i.dynamicPathfinderMetadata = l));
  },
  66,
);
