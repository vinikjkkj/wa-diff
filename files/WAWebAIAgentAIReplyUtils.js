__d(
  "WAWebAIAgentAIReplyUtils",
  [
    "WAWebAiAgentAutoReplyControlMutation",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiMuteUnmuteErrorDrawer.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = !o("WAWebBizAiAgentStatusUtils").isChatAiEnabled(e),
        n = t ? "ENABLED" : "MUTED";
      return o("WAWebAiAgentAutoReplyControlMutation")
        .changeAiReplyStatus(e.id, n)
        .then(function (n) {
          if (n.isSuccess) {
            var a = t
              ? o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_TAKEN
              : o("WAWebProtobufsE2E.pb")
                  .Message$CloudAPIThreadControlNotification$CloudAPIThreadControl
                  .CONTROL_PASSED;
            e.setCapiThreadControl(a);
          } else
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {}),
            );
          return n.isSuccess;
        })
        .catch(function () {
          return (
            o("WAWebModalManager").ModalManager.open(
              s.jsx(r("WAWebBizAiMuteUnmuteErrorDrawer.react"), {}),
            ),
            !1
          );
        });
    }
    l.mutateAiReplyStatus = u;
  },
  98,
);
