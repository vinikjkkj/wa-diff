__d(
  "WAWebStatusViewExitMethod",
  ["WAWebWamEnumStatusViewEntryMethod", "WAWebWamEnumStatusViewExitMethod"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e ===
        o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
          .FORWARD_TAP
        ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
            .FORWARD_TAP
        : e ===
            o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
              .BACK_TAP
          ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
              .BACKWARD_TAP
          : e ===
              o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
                .FORWARD_SWIPE
            ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                .FORWARD_SWIPE
            : e ===
                o("WAWebWamEnumStatusViewEntryMethod").STATUS_VIEW_ENTRY_METHOD
                  .BACK_SWIPE
              ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                  .BACKWARD_SWIPE
              : e ===
                  o("WAWebWamEnumStatusViewEntryMethod")
                    .STATUS_VIEW_ENTRY_METHOD.AUTO_NAVIGATE_TIMER_END
                ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                    .STATUS_TIMEOUT
                : void 0;
    }
    function s(t) {
      var n = e(t);
      return n ===
        o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
          .FORWARD_TAP
        ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
            .FORWARD_TAP_AUTO_CLOSE
        : n ===
            o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
              .FORWARD_SWIPE
          ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
              .FORWARD_SWIPE_AUTO_CLOSE
          : n ===
              o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                .STATUS_TIMEOUT
            ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                .STATUS_TIMEOUT_AUTO_CLOSE
            : n;
    }
    ((l.getStatusViewExitMethod = e), (l.getStatusViewAutoCloseExitMethod = s));
  },
  98,
);
