__d(
  "useWAWebDesktopUpsellQplImpression",
  [
    "WAWebDesktopUpsellQRCodeBannerExperiment",
    "WAWebLinkDeviceExperience",
    "WAWebQplFlowWrapper",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891423256, "3261");
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            var a = o("WAWebQplFlowWrapper").QPL.markerStart(e, {
              annotations: {
                string: { context: t },
                bool: { showing_content_variation: !1 },
                int: {
                  md_link_device_experience_id: o(
                    "WAWebLinkDeviceExperience",
                  ).getWebCompanionLinkDeviceExperienceId(r),
                  sourceType: n,
                  upsellExperimentGroup: o(
                    "WAWebDesktopUpsellQRCodeBannerExperiment",
                  ).getWAWebDesktopUpsellQRCodeBannerExperiment(),
                },
              },
            });
            a.end(2);
          } catch (e) {}
        })),
        u.apply(this, arguments)
      );
    }
    l.logDesktopUpsellQplEvent = s;
  },
  98,
);
