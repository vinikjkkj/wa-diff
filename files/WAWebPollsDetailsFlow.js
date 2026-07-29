__d(
  "WAWebPollsDetailsFlow",
  [
    "$InternalEnum",
    "WAWebFrontendMsgGetters",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsDetailsDrawer",
    "WAWebPollsViewAllVotesDrawer",
    "WAWebWamEnumPollActionType",
    "nullthrows",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = n("$InternalEnum").Mirrored(["Details", "ViewAll", "ContactInfo"]);
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
        f = d(null),
        g = f[0],
        h = f[1],
        y = o("WAWebFrontendMsgGetters").getChat(n.unsafe()),
        C = function (t) {
          (h(t), l.push(m.ContactInfo));
        };
      if (
        (c(function () {
          o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(
            babelHelpers.extends(
              {
                action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
                  .VIEW_RESULTS_MODAL,
                chat: y,
              },
              o(
                "WAWebPollsActionsMetricUtils",
              ).getPollMetricFieldsFromCreationMsg(n),
            ),
          );
        }, []),
        l.step == null)
      )
        return null;
      var b;
      switch (l.step) {
        case m.Details:
          b = s.jsx(o("WAWebPollsDetailsDrawer").DetailsDrawer, {
            msg: n,
            associatedMessages: t,
            onClose: function () {
              l.pop();
            },
            onViewAllVotes: function (t) {
              (_(t), l.push(m.ViewAll));
            },
            onOpenContactInfo: C,
          });
          break;
        case m.ViewAll:
          b = s.jsx(o("WAWebPollsViewAllVotesDrawer").ViewAllVotesDrawer, {
            msg: n,
            associatedMessages: t,
            optionLocalId: r("nullthrows")(p),
            onBack: function () {
              l.pop();
            },
            onOpenContactInfo: C,
          });
          break;
        case m.ContactInfo:
          b = s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
            chat: r("nullthrows")(g),
            initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
            onBack: l.pop,
            onEnd: function () {
              return l.pop();
            },
          });
          break;
      }
      return s.jsx(i, { flow: l, children: b });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
