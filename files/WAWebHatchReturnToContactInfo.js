__d(
  "WAWebHatchReturnToContactInfo",
  [
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebDrawerManager",
    "WAWebHatchContactInfoOpen",
    "WAWebInfoFlowLoadable",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      (o("WAWebHatchContactInfoOpen").resumeHatchContactInfoOpen(e.id),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? { descriptorType: "info_flow", chat: e, threadId: t }
            : s.jsx(o("WAWebInfoFlowLoadable").InfoFlowLoadable, {
                chat: e,
                onEnd: o("WAWebDrawerManager").closeDrawerRight,
                threadId: t,
              }),
        ));
    }
    l.returnToHatchContactInfo = u;
  },
  98,
);
