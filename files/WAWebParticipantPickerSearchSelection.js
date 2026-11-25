__d(
  "WAWebParticipantPickerSearchSelection",
  [
    "WAWebContactSyncLogger",
    "WAWebFocusTracer",
    "WAWebL10NAccentFold",
    "WAWebLidMigrationUtils",
    "WAWebOutContactModel",
    "WAWebPhoneNumberSearch",
    "WAWebUsernameKeyVerificationFlowLazy",
    "WAWebWamEnumContactSearchEntrypoint",
    "useWAWebParticipantPickerUnknownSelection",
    "useWAWebStableCallback",
    "useWAWebUnknownContact",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, a, i, l, s, u, c, d, m) {
      var _ = f(n, e, a, i, l),
        g = t && e !== "" && _ != null,
        h = r("useWAWebUnknownContact")({
          phoneOrUsername: e,
          searchPhoneNumber: c && !g,
          searchUsername: c && !g,
          requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
            .UNKNOWN_CONTACT_SEARCH_GROUP,
        }),
        y = h.error,
        C = h.loading,
        b = h.onRetry,
        v = h.unknownContactInfo,
        S = r("useWAWebParticipantPickerUnknownSelection")(
          e,
          t,
          function (e) {
            return p(n, e);
          },
          async function () {
            return v == null
              ? null
              : v.wid != null
                ? v.wid
                : o(
                    "WAWebUsernameKeyVerificationFlowLazy",
                  ).usernameKeyVerificationFlow({
                    username: v.username,
                    searchLogContext: {
                      contactSearchEntrypoint: o(
                        "WAWebWamEnumContactSearchEntrypoint",
                      ).CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP,
                      searchStartsWithAt: e.startsWith("@"),
                    },
                  });
          },
          d,
          m,
        ),
        R =
          t &&
          (S.selected || ((v == null ? void 0 : v.wid) != null && p(n, v.wid))),
        L = r("useWAWebStableCallback")(async function (e) {
          (e.preventDefault(), e.stopPropagation(), R || (await S.activate(e)));
        }),
        E = r("useWAWebStableCallback")(function (n, r) {
          (t || s(""), u({ query: r != null ? r : e, contact: n }));
        });
      return {
        error: y,
        loading: C,
        onRetry: b,
        unknownContactInfo: v,
        consumedSearchMatch: g,
        unknownSelection: S,
        unknownAlreadySelected: R,
        handleUnknownContactClick: L,
        handleSearchPick: E,
      };
    }
    function s(e, t) {
      (r("WAWebFocusTracer").focus(e), t && (e == null || e.focus()));
    }
    function u(e, t) {
      t && s(e, !0);
    }
    function c(e, t) {
      return t
        ? function (t) {
            t.target instanceof HTMLInputElement && e(t);
          }
        : e;
    }
    function d(e, t) {
      var n = function (n) {
        n.target instanceof HTMLInputElement && e(n);
      };
      return t ? { backspace: n } : {};
    }
    function m(e, t, n) {
      return e === "Backspace" && t === "" && n > 0 ? "remove-last" : "none";
    }
    function p(e, t) {
      var n,
        r = (n = o("WAWebLidMigrationUtils").toUserLid(t)) != null ? n : t;
      return e.some(function (e) {
        var t;
        return (
          (t = o("WAWebLidMigrationUtils").toUserLid(e.id)) != null ? t : e.id
        ).equals(r);
      });
    }
    function _(e, t) {
      if (t === "") return [];
      var n = o("WAWebL10NAccentFold").accentFold(t),
        r = o("WAWebPhoneNumberSearch").numberSearch(n);
      return e.filter(function (e) {
        return e.searchMatchExact(n, r) != null;
      });
    }
    function f(e, t, n, a, i) {
      var l,
        s,
        u = _(e, t),
        c = o("WAWebL10NAccentFold").accentFold(t),
        d =
          n == null
            ? void 0
            : n.find(function (e) {
                return (
                  a.has(e.id) &&
                  e.searchMatchExact(
                    c,
                    o("WAWebPhoneNumberSearch").numberSearch(c),
                  ) != null
                );
              }),
        m =
          i != null &&
          i.query === t &&
          (i.contact instanceof r("WAWebOutContactModel")
            ? a.has(i.contact.id)
            : p(e, i.contact.id));
      return (l = (s = u[0]) != null ? s : d) != null
        ? l
        : m
          ? i == null
            ? void 0
            : i.contact
          : null;
    }
    ((l.useParticipantPickerSearch = e),
      (l.focusParticipantPickerSearch = s),
      (l.focusParticipantPickerSearchAfterClear = u),
      (l.getParticipantPickerSearchEnterHandler = c),
      (l.getParticipantPickerSearchKeyHandlers = d),
      (l.getParticipantPickerSearchKeyAction = m));
  },
  98,
);
