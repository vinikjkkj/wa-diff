__d(
  "useWAWebDisclosureShownTracking",
  [
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageAction",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "react",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = e.disclosureContentVersion,
        n = e.noticeId,
        a = e.ready,
        i = a === void 0 ? !0 : a,
        l = r("useVisibility")(),
        s = l[0],
        d = l[1],
        m = c(!1);
      return (
        u(
          function () {
            if (d && i && !m.current) {
              var e = o(
                  "WAWebUserDisclosureCollection",
                ).UserDisclosureCollection.get(n),
                r = o("WAWebTos").TosManager.getState(n);
              if (
                (e == null ? void 0 : e.stage) != null ||
                r === "SHOWN" ||
                r === "ACCEPTED"
              )
                return;
              ((m.current = !0),
                o(
                  "WAWebSetUserDisclosureStageAction",
                ).updateUserDisclosureStateAction(
                  Number(n),
                  o("WAWebPDFNTypes").DISCLOSURE_STAGE.SHOWN_0,
                  t != null ? { disclosureContentVersion: t } : void 0,
                ));
            }
          },
          [d, n, t, i],
        ),
        s
      );
    }
    l.default = d;
  },
  98,
);
