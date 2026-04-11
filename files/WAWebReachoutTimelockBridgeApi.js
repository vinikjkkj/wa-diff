__d(
  "WAWebReachoutTimelockBridgeApi",
  [
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebModalManager",
    "WAWebReachoutTimelockUnrestrictedModalLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        reachoutTimelockEnforcementLifted: function (t) {
          var e = t.enforcementType,
            n = t.shouldPresentRestrictionsLiftedModal;
          (n &&
            o("WAWebModalManager").ModalManager.open(
              s.jsx(
                o("WAWebReachoutTimelockUnrestrictedModalLoadable")
                  .ReachoutTimelockUnrestrictedModalLoadable,
                { enforcementType: e },
              ),
            ),
            o("WAWebCmd").Cmd.reachoutTimelockStateChange(),
            o("WAWebContactCollection").ContactCollection.forEach(function (e) {
              e.set("canSendMsgWhileTimelocked", !0);
            }));
        },
        reachoutTimelockEnforcementSet: function () {
          o("WAWebCmd").Cmd.reachoutTimelockStateChange();
        },
      };
    l.ReachoutTimelockBridgeApi = u;
  },
  98,
);
