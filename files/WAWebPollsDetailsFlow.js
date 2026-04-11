__d(
  "WAWebPollsDetailsFlow",
  [
    "$InternalEnum",
    "WANullthrows",
    "WAWebFrontendMsgGetters",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsDetailsDrawer",
    "WAWebPollsViewAllVotesDrawer",
    "WAWebWamEnumPollActionType",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = n("$InternalEnum").Mirrored(["Details", "ViewAll"]);
    function p(e) {
      var t = e.associatedMessages,
        n = e.msg,
        a = o("useWAWebFlow").useFlow(m.Details, {
          transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
        }),
        i = a[0],
        l = a[1],
        u = d(null),
        p = u[0],
        _ = u[1],
        f = o("WAWebFrontendMsgGetters").getChat(n.unsafe());
      if (
        (c(function () {
          o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric({
            action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
              .VIEW_RESULTS_MODAL,
            chat: f,
            creationDateInSeconds: n.t,
            pollOptionsCount: n.pollOptions.length,
          });
        }, []),
        l.step == null)
      )
        return null;
      var g;
      switch (l.step) {
        case m.Details:
          g = s.jsx(o("WAWebPollsDetailsDrawer").DetailsDrawer, {
            msg: n,
            associatedMessages: t,
            onClose: function () {
              l.pop();
            },
            onViewAllVotes: function (t) {
              (_(t), l.push(m.ViewAll));
            },
          });
          break;
        case m.ViewAll:
          g = s.jsx(o("WAWebPollsViewAllVotesDrawer").ViewAllVotesDrawer, {
            msg: n,
            associatedMessages: t,
            optionLocalId: r("WANullthrows")(p),
            onBack: function () {
              l.pop();
            },
          });
          break;
      }
      return s.jsx(i, { flow: l, children: g });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
