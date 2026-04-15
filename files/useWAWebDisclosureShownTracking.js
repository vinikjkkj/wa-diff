__d(
  "useWAWebDisclosureShownTracking",
  [
    "WAWebPDFNTypes",
    "WAWebSetUserDisclosureStageAction",
    "WAWebTos",
    "WAWebUserDisclosureCollection",
    "react",
    "react-compiler-runtime",
    "useVisibility",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.disclosureContentVersion,
        a = e.noticeId,
        i = e.ready,
        l = i === void 0 ? !0 : i,
        s = r("useVisibility")(),
        d = s[0],
        m = s[1],
        p = c(!1),
        _,
        f;
      return (
        t[0] !== n || t[1] !== m || t[2] !== a || t[3] !== l
          ? ((_ = function () {
              if (m && l && !p.current) {
                var e = o(
                    "WAWebUserDisclosureCollection",
                  ).UserDisclosureCollection.get(a),
                  t = o("WAWebTos").TosManager.getState(a);
                if (
                  (e == null ? void 0 : e.stage) != null ||
                  t === "SHOWN" ||
                  t === "ACCEPTED"
                )
                  return;
                ((p.current = !0),
                  o(
                    "WAWebSetUserDisclosureStageAction",
                  ).updateUserDisclosureStateAction(
                    Number(a),
                    o("WAWebPDFNTypes").DISCLOSURE_STAGE.SHOWN_0,
                    n != null ? { disclosureContentVersion: n } : void 0,
                  ));
              }
            }),
            (f = [m, a, n, l]),
            (t[0] = n),
            (t[1] = m),
            (t[2] = a),
            (t[3] = l),
            (t[4] = _),
            (t[5] = f))
          : ((_ = t[4]), (f = t[5])),
        u(_, f),
        d
      );
    }
    l.default = d;
  },
  98,
);
