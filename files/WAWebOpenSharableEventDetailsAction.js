__d(
  "WAWebOpenSharableEventDetailsAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebLazyLoadedRetriable",
    "WAWebSharableEventDetailsFlowLoadable",
    "WAWebSharableEventGatingUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(e) {
      o("WAWebSharableEventGatingUtils").isEventsV2OnCompanionEnabledForAction(
        "open-details",
      ) &&
        (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "sharable_event_details", eventId: e }
            : u.jsx(
                r("WAWebSharableEventDetailsFlowLoadable"),
                {
                  eventId: e,
                  onClose: o("WAWebDrawerManager").closeDrawerRight,
                },
                e,
              ),
          { focusOnUnMount: !0, transition: "slide-left" },
        ),
        m(e));
    }
    var d = r("WAWebLazyLoadedRetriable")(
      n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
        return r("JSResourceForInteraction")("WAWebMarkSharableEventSeenAction")
          .__setRef("WAWebOpenSharableEventDetailsAction")
          .load();
      }),
      "WAWebMarkSharableEventSeenAction",
    );
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield d(),
              a = n.markSharableEventSeen;
            yield a(t);
          } catch (n) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][unseen] eventId=",
                    " loading mark-seen failed",
                  ])),
                t,
              )
              .catching(r("getErrorSafe")(n));
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.openSharableEventDetails = c;
  },
  98,
);
