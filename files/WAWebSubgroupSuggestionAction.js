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
        ).sendSubgroupSuggestionsAction({
          action: r,
          isLidAddressingMode:
            ((e = a.groupMetadata) == null ? void 0 : e.isLidAddressingMode) ===
            !0,
          parentGroupId: a.id,
          subgroupSuggestions: n.map(function (e) {
            return { id: e.groupId, creator: e.owner };
          }),
        });
      },
      g = async function (t, n) {
        n == null ||
          n.forEach(function (e) {
            e.currentState = o("WAWebCellRequestState").State.Loading;
          });
        try {
          var e = await f(
            t,
            n,
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .CANCEL,
          );
          m(
            e,
            n,
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .CANCEL,
          );
          var a = _(n, o("WAWebCellRequestState").State.Canceled);
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
          p(r("getErrorSafe")(e), n);
        }
      },
      h = async function (t, n) {
        n == null ||
          n.forEach(function (e) {
            e.currentState = o("WAWebCellRequestState").State.Loading;
          });
        try {
          var e = await f(
            t,
            n,
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .REJECT,
          );
          m(
            e,
            n,
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .REJECT,
          );
          var a = _(n, o("WAWebCellRequestState").State.Rejected);
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
          p(r("getErrorSafe")(e), n);
        }
      },
      y = async function (t, n, a) {
        if (t.groupMetadata) {
          var e =
              t.groupMetadata.joinedSubgroups.length +
              t.groupMetadata.unjoinedSubgroups.length,
            i = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit() - e;
          if (i <= 0) {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(
                o("WAWebCommunitySubgroupSuggestionsModals.react")
                  .SubgroupSuggestionsApproveLimit,
                { onOK: a },
              ),
            );
            return;
          } else if (
            n.length > i &&
            !(await o(
              "WAWebCommunitySubgroupSuggestionsModals.react",
            ).confirmCommunityFull(i, n.length))
          )
            return;
          n == null ||
            n.forEach(function (e) {
              e.currentState = o("WAWebCellRequestState").State.Loading;
            });
          try {
            var l = await f(
              t,
              n,
              o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
                .APPROVE,
            );
            m(
              l,
              n,
              o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
                .APPROVE,
            );
            var c = _(n, o("WAWebCellRequestState").State.Approved);
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
            p(r("getErrorSafe")(e), n);
          }
        }
      };
    ((l.cancelSubgroupSuggestions = g),
      (l.rejectSubgroupSuggestions = h),
      (l.approveSubgroupSuggestions = y));
  },
  226,
);
