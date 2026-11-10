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
    "asyncToGeneratorRuntime",
    "react-compiler-runtime",
    "useWAWebParticipantPickerUnknownSelection",
    "useWAWebStableCallback",
    "useWAWebUnknownContact",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, a, i, l, s, u, c, d, m, _) {
      var g = o("react-compiler-runtime").c(38),
        h;
      g[0] !== s || g[1] !== i || g[2] !== a || g[3] !== e || g[4] !== l
        ? ((h = f(a, e, i, l, s)),
          (g[0] = s),
          (g[1] = i),
          (g[2] = a),
          (g[3] = e),
          (g[4] = l),
          (g[5] = h))
        : (h = g[5]);
      var y = h,
        C = t && e !== "" && y != null,
        b = d && !C,
        v = d && !C,
        S;
      g[6] !== e || g[7] !== b || g[8] !== v
        ? ((S = {
            phoneOrUsername: e,
            searchPhoneNumber: b,
            searchUsername: v,
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
              .UNKNOWN_CONTACT_SEARCH_GROUP,
          }),
          (g[6] = e),
          (g[7] = b),
          (g[8] = v),
          (g[9] = S))
        : (S = g[9]);
      var R = r("useWAWebUnknownContact")(S),
        L = R.error,
        E = R.loading,
        k = R.onRetry,
        I = R.unknownContactInfo,
        T;
      g[10] !== a
        ? ((T = function (t) {
            return p(a, t);
          }),
          (g[10] = a),
          (g[11] = T))
        : (T = g[11]);
      var D;
      g[12] !== e || g[13] !== I
        ? ((D = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return I == null
                ? null
                : I.wid != null
                  ? I.wid
                  : o(
                      "WAWebUsernameKeyVerificationFlowLazy",
                    ).usernameKeyVerificationFlow({
                      username: I.username,
                      searchLogContext: {
                        contactSearchEntrypoint: o(
                          "WAWebWamEnumContactSearchEntrypoint",
                        ).CONTACT_SEARCH_ENTRYPOINT.NEW_GROUP,
                        searchStartsWithAt: e.startsWith("@"),
                      },
                    });
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (g[12] = e),
          (g[13] = I),
          (g[14] = D))
        : (D = g[14]);
      var x = r("useWAWebParticipantPickerUnknownSelection")(e, t, T, D, m, _),
        $;
      g[15] !== a || g[16] !== t || g[17] !== I || g[18] !== x
        ? (($ =
            t &&
            (x.selected ||
              ((I == null ? void 0 : I.wid) != null && p(a, I.wid)))),
          (g[15] = a),
          (g[16] = t),
          (g[17] = I),
          (g[18] = x),
          (g[19] = $))
        : ($ = g[19]);
      var P = $,
        N;
      g[20] !== P || g[21] !== x
        ? ((N = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (e.preventDefault(),
                  e.stopPropagation(),
                  P || (yield x.activate(e)));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (g[20] = P),
          (g[21] = x),
          (g[22] = N))
        : (N = g[22]);
      var M = r("useWAWebStableCallback")(N),
        w;
      g[23] !== t || g[24] !== e || g[25] !== c || g[26] !== u
        ? ((w = function (r, o) {
            (t || u(""), c({ query: o != null ? o : e, contact: r }));
          }),
          (g[23] = t),
          (g[24] = e),
          (g[25] = c),
          (g[26] = u),
          (g[27] = w))
        : (w = g[27]);
      var A = r("useWAWebStableCallback")(w),
        F;
      return (
        g[28] !== C ||
        g[29] !== L ||
        g[30] !== A ||
        g[31] !== M ||
        g[32] !== E ||
        g[33] !== k ||
        g[34] !== P ||
        g[35] !== I ||
        g[36] !== x
          ? ((F = {
              error: L,
              loading: E,
              onRetry: k,
              unknownContactInfo: I,
              consumedSearchMatch: C,
              unknownSelection: x,
              unknownAlreadySelected: P,
              handleUnknownContactClick: M,
              handleSearchPick: A,
            }),
            (g[28] = C),
            (g[29] = L),
            (g[30] = A),
            (g[31] = M),
            (g[32] = E),
            (g[33] = k),
            (g[34] = P),
            (g[35] = I),
            (g[36] = x),
            (g[37] = F))
          : (F = g[37]),
        F
      );
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
      (l.getParticipantPickerSearchKeyAction = m),
      (l.isParticipantPickerRecipientSelected = p),
      (l.getSelectedParticipantPickerMatches = _));
  },
  98,
);
