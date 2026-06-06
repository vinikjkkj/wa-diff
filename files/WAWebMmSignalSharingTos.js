__d(
  "WAWebMmSignalSharingTos",
  [
    "WATimeUtils",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMmSignalSharingGatingUtils",
    "WAWebTos",
    "asyncToGeneratorRuntime",
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: e,
              newMsg: t,
              handleSingleMsgOrigin: "mmSignalSharing",
            });
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? o("WAWebTos").TosManager.getState(s()) === "ACCEPTED"
        : !1;
    }
    function m() {
      return o(
        "WAWebMmSignalSharingGatingUtils",
      ).isMmSignalSharingDisclosureEnabled()
        ? o("WAWebTos").TosManager.getState(o("WAWebTos").TOS_3_ID) ===
            "ACCEPTED"
        : !1;
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o(
            "WAWebMmSignalSharingGatingUtils",
          ).isMmSignalSharingDisclosureEnabled() &&
            (yield o("WAWebTos").TosManager.run({ singleRun: !0 }));
        })),
        _.apply(this, arguments)
      );
    }
    ((l.getMmSignalSharingDisclosureTosId = s),
      (l.acceptMmSignalSharingDisclosureTos = u),
      (l.isMmSignalSharingDisclosureTosAccepted = d),
      (l.is2021TosAccepted = m),
      (l.refreshTos = p));
  },
  98,
);
