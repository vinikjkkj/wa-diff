__d(
  "WAWebGuestCoreWamUtils",
  [
    "WALogger",
    "WAWebGuestCoreCommonUtils",
    "WAWebGuestCoreWamConstants",
    "WAWebGuestUpsellInteractionWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n, r) {
      (r === void 0 && (r = !1),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Guest upsell action: ",
              " for entrypoint: ",
              ", flushWamBuffers: ",
              "",
            ])),
          n,
          t,
          r,
        ));
      var a = new (o(
        "WAWebGuestUpsellInteractionWamEvent",
      ).GuestUpsellInteractionWamEvent)({
        guestUpsellAction: n,
        guestUpsellEntryPoint: t,
      });
      return r ? a.commitAndWaitForFlush(r) : a.commit();
    }
    function u() {
      var e = o("WAWebGuestCoreCommonUtils").getBrowserAndOsDetails();
      return {
        browser: e.browserName,
        browserVersion: e.browserVersion,
        deviceName: e.osName,
        deviceVersion: e.osVersion,
        webcTabId: o("WAWebGuestCoreWamConstants").WAM_GUEST_TAB_ID,
      };
    }
    ((l.logUpsellAction = s), (l.getGuestWamOverrides = u));
  },
  98,
);
