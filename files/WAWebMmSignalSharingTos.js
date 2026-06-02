__d(
  "WAWebMmSignalSharingTos",
  [
    "WATimeUtils",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebTos",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "20231028";
    function s() {
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? e
        : "";
    }
    async function u(e) {
      if (
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmSignalSharingDisclosureEnabled() &&
        (o("WAWebTos").TosManager.setState(
          s(),
          "ACCEPTED",
          o("WATimeUtils").unixTime(),
        ),
        o(
          "WAWebMmSignalSharingGatingUtils",
        ).isMmDataSharingDisclosureEnabledAdditionalTransparencyLargeScreens())
      ) {
        var t = o("WAWebContactSystemMsg").genMmSignalSharingSystemMsg(e);
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e,
          newMsg: t,
          handleSingleMsgOrigin: "mmSignalSharing",
        });
      }
    }
    function c() {
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? o("WAWebTos").TosManager.getState(s()) === "ACCEPTED"
        : !1;
    }
    function d() {
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? o("WAWebTos").TosManager.getState(o("WAWebTos").TOS_3_ID) ===
            "ACCEPTED"
        : !1;
    }
    async function m() {
      o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled() &&
        (await o("WAWebTos").TosManager.run({ singleRun: !0 }));
    }
    ((l.getMmSignalSharingDisclosureTosId = s),
      (l.acceptMmSignalSharingDisclosureTos = u),
      (l.isMmSignalSharingDisclosureTosAccepted = c),
      (l.is2021TosAccepted = d),
      (l.refreshTos = m));
  },
  98,
);
