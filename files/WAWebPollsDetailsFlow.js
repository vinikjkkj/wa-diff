__d(
  "WAWebPollsDetailsFlow",
  [
    "$InternalEnum",
    "WAWebFrontendMsgGetters",
    "WAWebInfoFlowLoadable",
    "WAWebInfoFlowStep",
    "WAWebMsgCollection",
    "WAWebPollsActionsMetricUtils",
    "WAWebPollsDetailsDrawer",
    "WAWebPollsViewAllVotesDrawer",
    "WAWebWamEnumPollActionType",
    "nullthrows",
    "react",
    "useWAWebFlow",
    "useWAWebListener",
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
        y = n.unsafe(),
        C = y.id,
        b = o("WAWebFrontendMsgGetters").getChat(y),
        v = function (t) {
          (h(t), l.push(m.ContactInfo));
        };
      if (
        (c(function () {
          o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(
            babelHelpers.extends(
              {
                action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
                  .VIEW_RESULTS_MODAL,
                chat: b,
              },
              o(
                "WAWebPollsActionsMetricUtils",
              ).getPollMetricFieldsFromCreationMsg(n),
            ),
          );
        }, []),
        o("useWAWebListener").useListener(y, "revoked", function () {
          l.end();
        }),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "remove",
          function (e) {
            e.id.equals(C) && l.end();
          },
        ),
        l.step == null)
      )
        return null;
      var S;
      switch (l.step) {
        case m.Details:
          S = s.jsx(o("WAWebPollsDetailsDrawer").DetailsDrawer, {
            msg: n,
            associatedMessages: t,
            onClose: function () {
              l.pop();
            },
            onViewAllVotes: function (t) {
              (_(t), l.push(m.ViewAll));
            },
            onOpenContactInfo: v,
          });
          break;
        case m.ViewAll:
          S = s.jsx(o("WAWebPollsViewAllVotesDrawer").ViewAllVotesDrawer, {
            msg: n,
            associatedMessages: t,
            optionLocalId: r("nullthrows")(p),
            onBack: function () {
              l.pop();
            },
            onOpenContactInfo: v,
          });
          break;
        case m.ContactInfo:
          S = s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
            chat: r("nullthrows")(g),
            initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
            onBack: l.pop,
            onEnd: function () {
              return l.pop();
            },
          });
          break;
      }
      return s.jsx(i, { flow: l, children: S });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
