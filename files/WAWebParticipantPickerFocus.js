__d(
  "WAWebParticipantPickerFocus",
  ["WAWebParticipantPickerSearchSelection"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      e: {
        var a = o(
          "WAWebParticipantPickerSearchSelection",
        ).getParticipantPickerSearchKeyAction(e.key, t, n());
        if (a === "remove-last") {
          (e.preventDefault(), r(e));
          break e;
        }
        if (a === "none") return;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a,
        );
      }
    }
    function s(e, t) {
      var n = e.target;
      return (
        !t || !(n instanceof Element) || n.closest('[role="checkbox"]') == null
      );
    }
    function u(e, t) {
      e || t();
    }
    ((l.handleParticipantPickerSearchKey = e),
      (l.shouldFocusParticipantPickerSearch = s),
      (l.clearParticipantPickerSearchAfterBulkPick = u));
  },
  98,
);
