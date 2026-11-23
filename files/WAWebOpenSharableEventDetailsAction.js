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
    var d = r("WAWebLazyLoadedRetriable")(async function () {
      return r("JSResourceForInteraction")("WAWebMarkSharableEventSeenAction")
        .__setRef("WAWebOpenSharableEventDetailsAction")
        .load();
    }, "WAWebMarkSharableEventSeenAction");
    async function m(t) {
      try {
        var n = await d(),
          a = n.markSharableEventSeen;
        await a(t);
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
    }
    l.openSharableEventDetails = c;
  },
  98,
);
