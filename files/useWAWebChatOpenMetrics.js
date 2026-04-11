__d(
  "useWAWebChatOpenMetrics",
  [
    "WAWebFMXGatingUtils",
    "WAWebFMXTrustSignals",
    "WAWebFindCommonGroupsContactAction",
    "WAWebNoop",
    "WAWebPsFmxActionWamEvent",
    "WAWebSetChatOpenedAction",
    "WAWebWamEnumFmxEntryPoint",
    "WAWebWamEnumFmxEvent",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      s(function () {
        e.hasOpened !== !0 &&
          (o("WAWebSetChatOpenedAction")
            .setChatHasOpened(e)
            .catch(r("WAWebNoop")),
          self.setTimeout(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = e.msgs.some(function (e) {
                return e.subtype === "contact_info_card";
              });
              if (t && o("WAWebFMXGatingUtils").fmxLoggingEnabled()) {
                var n, r;
                new (o("WAWebPsFmxActionWamEvent").PsFmxActionWamEvent)({
                  fmxEntryPoint: o("WAWebWamEnumFmxEntryPoint").FMX_ENTRY_POINT
                    .FMX_CARD,
                  fmxEvent: o("WAWebWamEnumFmxEvent").FMX_EVENT.FMX_CARD_VIEWED,
                  countryShown: yield o(
                    "WAWebFMXTrustSignals",
                  ).shouldShowCountryCodeTrustSignal(e.contact),
                  notAContactShown: yield o(
                    "WAWebFMXTrustSignals",
                  ).shouldShowContactTrustSignal(e.contact),
                  commonGroupNum:
                    (n =
                      (r = yield o(
                        "WAWebFindCommonGroupsContactAction",
                      ).findCommonGroups(e.contact)) == null
                        ? void 0
                        : r.length) != null
                      ? n
                      : 0,
                }).commit();
              }
            }),
            1e3,
          ));
      }, []);
    }
    l.useChatOpenMetrics = u;
  },
  98,
);
