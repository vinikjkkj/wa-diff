__d(
  "WAWebStatusViewExitMethod",
  ["WAWebWamEnumStatusRowEntryMethod", "WAWebWamEnumStatusViewExitMethod"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n =
        e ===
        o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
          .FOWARDS_TAP
          ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
              .FORWARD_TAP
          : e ===
              o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
                .BACKWARDS_TAP
            ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                .BACKWARD_TAP
            : e ===
                o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
                  .FOWARDS_SWIPE
              ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                  .FORWARD_SWIPE
              : e ===
                  o("WAWebWamEnumStatusRowEntryMethod").STATUS_ROW_ENTRY_METHOD
                    .BACKWARDS_SWIPE
                ? o("WAWebWamEnumStatusViewExitMethod").STATUS_VIEW_EXIT_METHOD
                    .BACKWARD_SWIPE
                : e ===
                    o("WAWebWamEnumStatusRowEntryMethod")
                      .STATUS_ROW_ENTRY_METHOD.PREVIOUS_ROW_TIMEOUT
                  ? o("WAWebWamEnumStatusViewExitMethod")
                      .STATUS_VIEW_EXIT_METHOD.STATUS_TIMEOUT
                  : void 0;
      return t
        ? n ===
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
              : n
        : n;
    }
    l.getStatusViewExitMethod = e;
  },
  98,
);
