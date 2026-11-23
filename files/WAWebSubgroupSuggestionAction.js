__d(
  "WAWebSubgroupSuggestionAction",
  [
    "fbt",
    "WAWebBackendErrors",
    "WAWebCellRequestState",
    "WAWebCommunityGatingUtils",
    "WAWebCommunitySubgroupSuggestionsModals.react",
    "WAWebCommunitySubgroupSuggestionsModalsSubgroupSuggestionsApproveLimit.react",
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
      return s._(/*BTDS*/ "");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t) {
      switch (e) {
        case 401:
          return t ===
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .CANCEL
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "");
        case 404:
          return s._(/*BTDS*/ "");
        case 419:
          return s._(/*BTDS*/ "");
        case 409:
          return s._(/*BTDS*/ "");
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
      };
    async function g(e, t) {
      t == null ||
        t.forEach(function (e) {
          e.currentState = o("WAWebCellRequestState").State.Loading;
        });
      try {
        var n = await f(
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
              msg: s._(/*BTDS*/ "", [s._plural(a, "number")]),
            }),
          );
      } catch (e) {
        p(r("getErrorSafe")(e), t);
      }
    }
    async function h(e, t) {
      t == null ||
        t.forEach(function (e) {
          e.currentState = o("WAWebCellRequestState").State.Loading;
        });
      try {
        var n = await f(
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
              msg: s._(/*BTDS*/ "", [s._plural(a, "number")]),
            }),
          );
      } catch (e) {
        p(r("getErrorSafe")(e), t);
      }
    }
    async function y(e, t, n) {
      if (e.groupMetadata) {
        var a =
            e.groupMetadata.joinedSubgroups.length +
            e.groupMetadata.unjoinedSubgroups.length,
          i = o("WAWebCommunityGatingUtils").getParentGroupLinkLimit() - a;
        if (i <= 0) {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o(
                "WAWebCommunitySubgroupSuggestionsModalsSubgroupSuggestionsApproveLimit.react",
              ).SubgroupSuggestionsApproveLimit,
              { onOK: n },
            ),
          );
          return;
        } else if (
          t.length > i &&
          !(await o(
            "WAWebCommunitySubgroupSuggestionsModals.react",
          ).confirmCommunityFull(i, t.length))
        )
          return;
        t == null ||
          t.forEach(function (e) {
            e.currentState = o("WAWebCellRequestState").State.Loading;
          });
        try {
          var l = await f(
            e,
            t,
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .APPROVE,
          );
          m(
            l,
            t,
            o("WAWebSubgroupSuggestionsActionJob").SubgroupSuggestionAction
              .APPROVE,
          );
          var c = _(t, o("WAWebCellRequestState").State.Approved);
          c > 0 &&
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebToast.react").Toast, {
                msg: s._(/*BTDS*/ "", [s._plural(c, "number")]),
              }),
            );
        } catch (e) {
          p(r("getErrorSafe")(e), t);
        }
      }
    }
    ((l.cancelSubgroupSuggestions = g),
      (l.rejectSubgroupSuggestions = h),
      (l.approveSubgroupSuggestions = y));
  },
  226,
);
