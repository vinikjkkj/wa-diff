__d(
  "WAWebParticipantPickerSearchSelection",
  [
    "WAWebFocusTracer",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebPhoneNumberSearch",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      (r("WAWebFocusTracer").focus(e), t && (e == null || e.focus()));
    }
    function s(t, n) {
      n && e(t, !0);
    }
    function u(e, t) {
      return t
        ? function (t) {
            t.target instanceof HTMLInputElement && e(t);
          }
        : e;
    }
    function c(e, t) {
      var n = function (n) {
        n.target instanceof HTMLInputElement && e(n);
      };
      return t ? { backspace: n } : {};
    }
    function d(e, t, n) {
      return e === "Backspace" && t === "" && n > 0 ? "remove-last" : "none";
    }
    function m(e, t) {
      var n,
        r = (n = o("WAWebLidMigrationUtils").toUserLid(t)) != null ? n : t;
      return e.some(function (e) {
        var t;
        return (
          (t = o("WAWebLidMigrationUtils").toUserLid(e.id)) != null ? t : e.id
        ).equals(r);
      });
    }
    function p(e, t) {
      if (t === "") return [];
      var n = o("WAWebL10NAccentFold").accentFold(t),
        r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return e.filter(function (e) {
        return e.searchMatchExact(n, r) != null;
      });
    }
    ((l.focusParticipantPickerSearch = e),
      (l.focusParticipantPickerSearchAfterClear = s),
      (l.getParticipantPickerSearchEnterHandler = u),
      (l.getParticipantPickerSearchKeyHandlers = c),
      (l.getParticipantPickerSearchKeyAction = d),
      (l.isParticipantPickerRecipientSelected = m),
      (l.getSelectedParticipantPickerMatches = p));
  },
  98,
);
