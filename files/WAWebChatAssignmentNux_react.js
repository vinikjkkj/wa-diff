__d(
  "WAWebChatAssignmentNux.react",
  [
    "fbt",
    "WAWebChatAssignmentLogEvents",
    "WAWebFeatureFlagName",
    "WAWebNux",
    "WAWebTooltip.react",
    "WAWebUserPrefsStore",
    "react",
    "useWAWebGetFeatureFlag",
    "useWAWebNux",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState;
    function _(e) {
      var t = e.chat,
        n = e.targetRef,
        a = r("useWAWebNux")(o("WAWebNux").NUX.CHAT_ASSIGNMENT),
        i = a[0],
        l = a[1],
        u = p(!0),
        _ = u[0],
        f = u[1],
        g = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        ).enabled,
        h = o("WAWebTooltip.react").useTooltip({
          alignment: o("WAWebTooltip.react").PopoverAlignment.End,
          element: s._(/*BTDS*/ "Assign chat to a linked device"),
          onClick: function () {
            (y(), f(!1));
          },
          position: o("WAWebTooltip.react").PopoverPosition.Bottom,
          target: n,
        }),
        y = h.hideTooltip,
        C = h.showTooltip,
        b = h.tooltip,
        v = m(function () {
          return r("WAWebUserPrefsStore").getUser(
            "chat_assignment_agent_has_assigned_chats",
          );
        }, []),
        S = c(
          function () {
            (y(), f(!1));
          },
          [y],
        ),
        R = i && _ && g && t.assignedAgent == null && v == null;
      return (
        d(
          function () {
            R &&
              b == null &&
              n.current != null &&
              (C(), l(), o("WAWebChatAssignmentLogEvents").logNuxShown(t));
          },
          [R, b, n, C, S, l, t],
        ),
        b
      );
    }
    l.default = _;
  },
  226,
);
