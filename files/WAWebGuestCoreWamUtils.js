__d(
  "WAWebGuestCoreWamUtils",
  [
    "WALogger",
    "WAWebGuestCoreCommonUtils",
    "WAWebGuestCoreGetDeviceClass",
    "WAWebGuestCoreLocalStorage",
    "WAWebGuestUpsellInteractionWamEvent",
    "WAWebWamEnumDeviceClassification",
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
        deviceClassification: (function (e) {
          if (e === "mobile")
            return o("WAWebWamEnumDeviceClassification").DEVICE_CLASSIFICATION
              .MOBILE;
          if (e === "tablet")
            return o("WAWebWamEnumDeviceClassification").DEVICE_CLASSIFICATION
              .TABLET;
          if (e === "desktop")
            return o("WAWebWamEnumDeviceClassification").DEVICE_CLASSIFICATION
              .DESKTOP;
          throw Error(
            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
              e,
          );
        })(o("WAWebGuestCoreGetDeviceClass").getGuestDeviceClass()),
        deviceName: e.osName,
        deviceVersion: e.osVersion,
        webcTabId: o("WAWebGuestCoreLocalStorage").getGuestExperienceType(),
      };
    }
    ((l.logUpsellAction = s), (l.getGuestWamOverrides = c));
  },
  98,
);
