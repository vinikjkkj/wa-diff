__d(
  "useWAWebGalaxyFlowsResponseViewer",
  [
    "WAFlowsInitEnvironmentTypes",
    "WAWebBusinessProfileCollection",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e, t) {
      var n = s(function () {
          return o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        }, []),
        r = !!o("WAWebBusinessProfileCollection").BusinessProfileCollection.get(
          n,
        ),
        a =
          r === !0 &&
          !t &&
          e === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE;
      return a
        ? o("WAFlowsInitEnvironmentTypes").ResponseViewer.SMB
        : o("WAFlowsInitEnvironmentTypes").ResponseViewer.CONSUMER;
    }
    l.default = u;
  },
  98,
);
