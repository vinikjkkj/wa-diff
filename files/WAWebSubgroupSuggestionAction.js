__d(
  "WAWebSubgroupSuggestionAction",
  [
    "fbt",
    "WAWebBackendErrors",
    "WAWebCellRequestState",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupSuggestionsModals.react",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebSubgroupSuggestionsActionJob",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Something went wrong. Please try again later.");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
      switch (e) {
        case 401:
          return t ===
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .CANCEL
            ? s._(/*BTDS*/ "Couldn't cancel group suggestion.")
            : s._(
                /*BTDS*/ "You're no longer a community admin. Only community admins can review group suggestions.",
              );
        case 404:
          return s._(/*BTDS*/ "Group suggestion no longer exists.");
        case 419:
          return s._(
            /*BTDS*/ "You cannot add more groups because this community is full. To add more, you must remove groups.",
          );
        case 409:
          return s._(
            /*BTDS*/ "You cannot add this group because it may have been removed or added to another community.",
          );
      }
      return c();
    }
    var m = function (t, n, r) {
        var e = new Map();
        (n.map(function (t) {
          return e.set(t.id, t);
        }),
          t.forEach(function (t) {
            if (t.error != null) {
              var n = e.get(t.id);
              n &&
                ((n.error = d(Number(t.error), r)),
                (n.currentState = o("WAWebCellRequestState").State.Error));
            }
          }));
      },
      p = function (t, n) {
        n.forEach(function (e) {
          ((e.currentState = o("WAWebCellRequestState").State.Error),
            t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
              (e.error = c()));
        });
      },
      _ = function (t, n) {
        var e = 0;
        return (
          t.forEach(function (t) {
            t.currentState !== o("WAWebCellRequestState").State.Error &&
              ((t.currentState = n), e++);
          }),
          e
        );
      },
      f = function (t, n, r) {
        var e,
          a = o("WAWebStateUtils").unproxy(t);
        return o(
          "WAWebSubgroupSuggestionsActionJob",
        ).sendSubgroupSuggestionsAction(
          a.id,
          n.map(function (e) {
            return { id: e.groupId, creator: e.owner };
          }),
          r,
          ((e = a.groupMetadata) == null ? void 0 : e.isLidAddressingMode) ===
            !0,
        );
      },
      g = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t == null ||
            t.forEach(function (e) {
              e.currentState = o("WAWebCellRequestState").State.Loading;
            });
          try {
            var n = yield f(
              e,
              t,
              o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
                .CANCEL,
            );
            m(
              n,
              t,
              o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
                .CANCEL,
            );
            var a = _(t, o("WAWebCellRequestState").State.Canceled);
            a > 0 &&
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"{number} suggestions canceled","_1":"Suggestion canceled"}',
                    [s._plural(a, "number")],
                  ),
                }),
              );
          } catch (e) {
            p(r("getErrorSafe")(e), t);
          }
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      h = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t == null ||
            t.forEach(function (e) {
              e.currentState = o("WAWebCellRequestState").State.Loading;
            });
          try {
            var n = yield f(
              e,
              t,
              o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
                .REJECT,
            );
            m(
              n,
              t,
              o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
                .REJECT,
            );
            var a = _(t, o("WAWebCellRequestState").State.Rejected);
            a > 0 &&
              o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ '_j{"*":"{number} groups rejected","_1":"Group rejected"}',
                    [s._plural(a, "number")],
                  ),
                }),
              );
          } catch (e) {
            p(r("getErrorSafe")(e), t);
          }
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })(),
      y = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            if (e.groupMetadata) {
              var a =
                  e.groupMetadata.joinedSubgroups.length +
                  e.groupMetadata.unjoinedSubgroups.length,
                i =
                  o("WAWebCommunityGatingUtils").getParentGroupLinkLimit() - a;
              if (i <= 0) {
                o("WAWebModalManager").ModalManager.open(
                  u.jsx(
                    o("WAWebCommunitySubgroupSuggestionsModals.react")
                      .SubgroupSuggestionsApproveLimit,
                    { onOK: n },
                  ),
                );
                return;
              } else if (
                t.length > i &&
                !(yield o(
                  "WAWebCommunitySubgroupSuggestionsModals.react",
                ).confirmCommunityFull(i, t.length))
              )
                return;
              t == null ||
                t.forEach(function (e) {
                  e.currentState = o("WAWebCellRequestState").State.Loading;
                });
              try {
                var l = yield f(
                  e,
                  t,
                  o("WAWebSubgroupSuggestionsActionJob")
                    .SubgroupSuggestionAction.APPROVE,
                );
                m(
                  l,
                  t,
                  o("WAWebSubgroupSuggestionsActionJob")
                    .SubgroupSuggestionAction.APPROVE,
                );
                var c = _(t, o("WAWebCellRequestState").State.Approved);
                c > 0 &&
                  o("WAWebToastManager").ToastManager.open(
                    u.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ '_j{"*":"{number} groups added","_1":"Group added"}',
                        [s._plural(c, "number")],
                      ),
                    }),
                  );
              } catch (e) {
                p(r("getErrorSafe")(e), t);
              }
            }
          },
        );
        return function (n, r, o) {
          return e.apply(this, arguments);
        };
      })();
    ((l.cancelSubgroupSuggestions = g),
      (l.rejectSubgroupSuggestions = h),
      (l.approveSubgroupSuggestions = y));
  },
  226,
);
