__d(
  "WAWebCommonMsgTemplateParamsUtils",
  ["WAWebWid"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.length === 2 &&
        e[0] instanceof r("WAWebWid") &&
        e[1] instanceof r("WAWebWid")
        ? [e[0], e[1]]
        : e.length === 4 &&
            e[0] instanceof r("WAWebWid") &&
            e[1] instanceof r("WAWebWid") &&
            e[2] instanceof r("WAWebWid") &&
            e[3] instanceof r("WAWebWid")
          ? [e[0], e[1], e[2], e[3]]
          : null;
    }
    function s(t) {
      var n = t.templateParams,
        o = t.type;
      return n == null
        ? null
        : o === "pinned_message" || o === "payment_invite_account_set_up"
          ? n.length > 0 && n[0] instanceof r("WAWebWid")
            ? [n[0]]
            : null
          : o === "payment_transaction_request_cancelled" ||
              o === "payment_transaction_status_receiver_pending_setup" ||
              o === "payment_action_request_declined"
            ? n.length >= 3 &&
              n[0] instanceof r("WAWebWid") &&
              typeof n[1] == "string" &&
              typeof n[2] == "string"
              ? [n[0], n[1], n[2]]
              : null
            : o === "payment_action_request_expired"
              ? n.length >= 4 &&
                n[0] instanceof r("WAWebWid") &&
                n[1] instanceof r("WAWebWid") &&
                typeof n[2] == "string" &&
                typeof n[3] == "string"
                ? [n[0], n[1], n[2], n[3]]
                : null
              : o === "chat_assignment"
                ? n.length > 0 && typeof n[0] == "string"
                  ? [n[0]]
                  : null
                : o === "change_number"
                  ? e(n)
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          o,
                      );
                    })();
    }
    l.interpretMsgTemplateParams = s;
  },
  98,
);
