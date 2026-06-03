__d(
  "WAWebGuestCoreWamUtils",
  [
    "WALogger",
    "WAWebGuestCoreCommonUtils",
    "WAWebGuestCoreWamConstants",
    "WAWebGuestUpsellInteractionWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
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
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      var e = o("WAWebGuestCoreCommonUtils").getBrowserAndOsDetails();
      return {
        browser: e.browserName,
        browserVersion: e.browserVersion,
        deviceName: e.osName,
        deviceVersion: e.osVersion,
        webcTabId: o("WAWebGuestCoreWamConstants").WAM_GUEST_TAB_ID,
      };
    }
    ((l.logUpsellAction = s), (l.getGuestWamOverrides = c));
  },
  98,
);
