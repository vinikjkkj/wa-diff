__d(
  "WAWebChannelsQuickActions",
  [
    "fbt",
    "JSResourceForInteraction",
    "WAWebDrawerManager",
    "WAWebNewsletterTabFlowLoadable",
    "WAWebNewsletterTabFlowStep",
    "WAWebWamEnumChannelDirectoryEntryPoint",
    "WDSIconIcSearch.react",
    "WDSIconWdsIcNewChannel.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = [
        {
          id: "create_channel",
          Icon: r("WDSIconWdsIcNewChannel.react"),
          label: function () {
            return s._(/*BTDS*/ "Create channel");
          },
          onClick: function () {
            r("JSResourceForInteraction")("WAWebOpenNewsletterCreationFlow")
              .__setRef("WAWebChannelsQuickActions")
              .load()
              .then(function (e) {
                var t = e.openNewsletterCreationFlow;
                t({
                  tosAcceptCallback: function (t) {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                      u.jsx(
                        o("WAWebNewsletterTabFlowLoadable")
                          .NewsletterTabFlowLoadable,
                        {
                          initialStep: o("WAWebNewsletterTabFlowStep")
                            .NewsletterTabFlowStep.CreateNewsletter,
                          adminFunnelLogger: t,
                          onBack: m,
                        },
                      ),
                      {
                        disableRotateFocus: !0,
                        newDrawerContext: {
                          type: "quick_action",
                          quickActionId: "create_channel",
                        },
                      },
                    );
                  },
                });
              });
          },
        },
        {
          id: "find_channels",
          Icon: r("WDSIconIcSearch.react"),
          label: function () {
            return s._(/*BTDS*/ "Find channels");
          },
          onClick: function () {
            r("JSResourceForInteraction")("WAWebOpenNewsletterDirectory")
              .__setRef("WAWebChannelsQuickActions")
              .load()
              .then(function (e) {
                var t = e.openNewsletterDirectory;
                t({
                  tosAcceptCallback: function () {
                    o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
                      u.jsx(
                        o("WAWebNewsletterTabFlowLoadable")
                          .NewsletterTabFlowLoadable,
                        {
                          initialStep: o("WAWebNewsletterTabFlowStep")
                            .NewsletterTabFlowStep.NewsletterDirectoryFlow,
                          directoryEntryPoint: o(
                            "WAWebWamEnumChannelDirectoryEntryPoint",
                          ).CHANNEL_DIRECTORY_ENTRY_POINT.FIND_CHANNELS_BUTTON,
                          onBack: m,
                        },
                      ),
                      {
                        disableRotateFocus: !0,
                        newDrawerContext: {
                          type: "quick_action",
                          quickActionId: "find_channels",
                        },
                      },
                    );
                  },
                });
              });
          },
        },
      ],
      d = c;
    function m() {
      r("JSResourceForInteraction")("WAWebOpenNewsletterTab")
        .__setRef("WAWebChannelsQuickActions")
        .load()
        .then(function (e) {
          var t = e.openNewsletterTab;
          t();
        });
    }
    l.default = d;
  },
  226,
);
