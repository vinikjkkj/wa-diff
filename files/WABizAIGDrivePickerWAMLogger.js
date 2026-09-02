__d(
  "WABizAIGDrivePickerWAMLogger",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo,
      u = "file_picker_rendered",
      c = "list_files_response_received",
      d = "folder_opened",
      m = "file_selected",
      p = "file_deselected",
      _ = "bulk_toggled",
      f = "sync_tapped",
      g = "sync_files_response_received",
      h = "back_pressed",
      y = "error_caught";
    function C(e, t, n) {
      e != null &&
        e.postMessage("wamLog", {
          user_action_target: t,
          smb_user_action_type: "VIEW",
          extra_attributes: n,
        });
    }
    function b(e, t, n) {
      e != null &&
        e.postMessage("wamLog", {
          user_action_target: t,
          smb_user_action_type: "CLICK",
          extra_attributes: n,
        });
    }
    function v(e) {
      return {
        logFilePickerRendered: function () {
          C(e, u);
        },
        logListFilesResponseReceived: function (n) {
          C(e, c, n);
        },
        logFolderOpened: function (n) {
          var t = n.depth;
          b(e, d, { depth: t });
        },
        logFileSelected: function (n) {
          b(e, m, n);
        },
        logFileDeselected: function (n) {
          var t = n.selected_count;
          b(e, p, { selected_count: t });
        },
        logBulkToggled: function (n) {
          var t = n.action,
            r = n.count;
          b(e, _, { action: t, count: r });
        },
        logSyncTapped: function (n) {
          var t = n.selected_count;
          b(e, f, { selected_count: t });
        },
        logSyncFilesResponseReceived: function (n) {
          C(e, g, n);
        },
        logBackPressed: function (n) {
          var t = n.depth;
          b(e, h, { depth: t });
        },
        logErrorCaught: function (n) {
          var t = n.error_message;
          C(e, y, { error_message: t });
        },
      };
    }
    function S(e) {
      return s(
        function () {
          return v(e);
        },
        [e],
      );
    }
    ((l.TARGET_FILE_PICKER_RENDERED = u),
      (l.TARGET_LIST_FILES_RESPONSE_RECEIVED = c),
      (l.TARGET_FOLDER_OPENED = d),
      (l.TARGET_FILE_SELECTED = m),
      (l.TARGET_FILE_DESELECTED = p),
      (l.TARGET_BULK_TOGGLED = _),
      (l.TARGET_SYNC_TAPPED = f),
      (l.TARGET_SYNC_FILES_RESPONSE_RECEIVED = g),
      (l.TARGET_BACK_PRESSED = h),
      (l.TARGET_ERROR_CAUGHT = y),
      (l.useWABizAIGDrivePickerWAMLogger = S));
  },
  98,
);
