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
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.chat,
        a = e.targetRef,
        i = r("useWAWebNux")(o("WAWebNux").NUX.CHAT_ASSIGNMENT),
        l = i[0],
        u = i[1],
        c = p(!0),
        m = c[0],
        _ = c[1],
        f = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.CHAT_ASSIGNMENT,
        ).enabled,
        g;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Assign chat to a linked device")), (t[0] = g))
        : (g = t[0]);
      var h = o("WAWebTooltip.react").useTooltip({
          alignment: o("WAWebTooltip.react").PopoverAlignment.End,
          element: g,
          onClick: function () {
            (v(), _(!1));
          },
          position: o("WAWebTooltip.react").PopoverPosition.Bottom,
          target: a,
        }),
        y = h.hideTooltip,
        C = h.showTooltip,
        b = h.tooltip,
        v = y,
        S;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = r("WAWebUserPrefsStore").getUser(
            "chat_assignment_agent_has_assigned_chats",
          )),
          (t[1] = S))
        : (S = t[1]);
      var R = S,
        L;
      t[2] !== v
        ? ((L = function () {
            (v(), _(!1));
          }),
          (t[2] = v),
          (t[3] = L))
        : (L = t[3]);
      var E = L,
        k = l && m && f && n.assignedAgent == null && R == null,
        I;
      t[4] !== n ||
      t[5] !== k ||
      t[6] !== C ||
      t[7] !== a ||
      t[8] !== b ||
      t[9] !== u
        ? ((I = function () {
            k &&
              b == null &&
              a.current != null &&
              (C(), u(), o("WAWebChatAssignmentLogEvents").logNuxShown(n));
          }),
          (t[4] = n),
          (t[5] = k),
          (t[6] = C),
          (t[7] = a),
          (t[8] = b),
          (t[9] = u),
          (t[10] = I))
        : (I = t[10]);
      var T;
      return (
        t[11] !== E ||
        t[12] !== n ||
        t[13] !== k ||
        t[14] !== C ||
        t[15] !== a ||
        t[16] !== b ||
        t[17] !== u
          ? ((T = [k, b, a, C, E, u, n]),
            (t[11] = E),
            (t[12] = n),
            (t[13] = k),
            (t[14] = C),
            (t[15] = a),
            (t[16] = b),
            (t[17] = u),
            (t[18] = T))
          : (T = t[18]),
        d(I, T),
        b
      );
    }
    l.default = _;
  },
  226,
);
