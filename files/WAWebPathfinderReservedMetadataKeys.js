__d(
  "WAWebPathfinderReservedMetadataKeys",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Set([
      "alert_type",
      "button_count",
      "button_id",
      "button_role",
      "cancelled",
      "custom_event_type",
      "duration_ms",
      "edit_text_class",
      "entry_source",
      "frustration_repeated_action",
      "frustration_repetition_count",
      "generic_error_code",
      "generic_error_domain",
      "has_destructive",
      "is_empty",
      "network_error_endpoint_category",
      "network_error_status_code",
      "press_kind",
      "resolution",
      "screen_name",
      "selection_id",
      "selection_index",
      "selection_item_count",
      "selection_state",
      "selection_surface",
      "selection_type",
      "sheet_type",
      "toast_category",
      "toast_type",
      "toggle_change_source",
      "toggle_component",
      "toggle_state",
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
