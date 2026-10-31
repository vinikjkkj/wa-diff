__d(
  "WAWebPollsDetailsFlow",
  [
    "$InternalEnum",
    "WAWebFrontendMsgGetters",
    "WAWebGroupAgentProfileDrawerLoadable",
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
      m = n("$InternalEnum").Mirrored([
        "Details",
        "ViewAll",
        "ContactInfo",
        "GroupAgentProfile",
      ]);
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
        y = d(null),
        C = y[0],
        b = y[1],
        v = n.unsafe(),
        S = v.id,
        R = o("WAWebFrontendMsgGetters").getChat(v),
        L = function (t) {
          (h(t), l.push(m.ContactInfo));
        },
        E = function (t) {
          (b(t), l.push(m.GroupAgentProfile));
        };
      if (
        (c(function () {
          o("WAWebPollsActionsMetricUtils").commitPollsActionsMetric(
            babelHelpers.extends(
              {
                action: o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE
                  .VIEW_RESULTS_MODAL,
                chat: R,
              },
              o(
                "WAWebPollsActionsMetricUtils",
              ).getPollMetricFieldsFromCreationMsg(n),
            ),
          );
        }, []),
        o("useWAWebListener").useListener(v, "revoked", function () {
          l.end();
        }),
        o("useWAWebListener").useListener(
          o("WAWebMsgCollection").MsgCollection,
          "remove",
          function (e) {
            e.id.equals(S) && l.end();
          },
        ),
        l.step == null)
      )
        return null;
      var k;
      switch (l.step) {
        case m.Details:
          k = s.jsx(o("WAWebPollsDetailsDrawer").DetailsDrawer, {
            msgKey: S,
            associatedMessages: t,
            onClose: function () {
              l.pop();
            },
            onViewAllVotes: function (t) {
              (_(t), l.push(m.ViewAll));
            },
            onOpenContactInfo: L,
            onOpenGroupAgentProfile: E,
          });
          break;
        case m.ViewAll:
          k = s.jsx(o("WAWebPollsViewAllVotesDrawer").ViewAllVotesDrawer, {
            msgKey: S,
            associatedMessages: t,
            optionLocalId: r("nullthrows")(p),
            onBack: function () {
              l.pop();
            },
            onOpenContactInfo: L,
            onOpenGroupAgentProfile: E,
          });
          break;
        case m.ContactInfo:
          k = s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
            chat: r("nullthrows")(g),
            initialStep: o("WAWebInfoFlowStep").InfoFlowStep.ContactInfo,
            onBack: l.pop,
            onEnd: function () {
              return l.pop();
            },
          });
          break;
        case m.GroupAgentProfile:
          k =
            C == null
              ? null
              : s.jsx(
                  o("WAWebGroupAgentProfileDrawerLoadable")
                    .GroupAgentProfileDrawerLoadable,
                  {
                    contact: C,
                    onBack: function () {
                      return l.pop();
                    },
                    onClose: function () {
                      return l.end();
                    },
                    origin: "pollVoterRow",
                    sourceGroupChat: R,
                  },
                );
          break;
      }
      return s.jsx(i, { flow: l, children: k });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
