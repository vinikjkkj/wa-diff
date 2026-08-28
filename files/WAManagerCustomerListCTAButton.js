__d(
  "WAManagerCustomerListCTAButton",
  [
    "AdsHelpTrayUILoggerStoreUtils",
    "GeoButton.react",
    "react",
    "react-compiler-runtime",
    "useJSON",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useRef,
      _ = "maiba-wa-manager-customer-list-cta",
      f = "wa-manager-customer-list";
    function g(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.attributesJson,
        a = r("useJSON")(n),
        i = a.action != null && a.action !== "" ? a.action : null,
        l = a.label != null && a.label !== "" ? a.label : null,
        u = i != null && l != null,
        c = i != null ? i : "",
        m = l != null ? l : "",
        g;
      t[0] !== c || t[1] !== m
        ? ((g = { action: c, "cta-type": f, label: m }),
          (t[0] = c),
          (t[1] = m),
          (t[2] = g))
        : (g = t[2]);
      var h = g,
        y;
      t[3] !== i || t[4] !== h
        ? ((y = function () {
            i != null &&
              (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_click",
                h,
              ),
              window.dispatchEvent(
                new CustomEvent(_, { detail: { action: i } }),
              ));
          }),
          (t[3] = i),
          (t[4] = h),
          (t[5] = y))
        : (y = t[5]);
      var C = y,
        b = p(!1),
        v,
        S;
      if (
        (t[6] !== u || t[7] !== h
          ? ((v = function () {
              b.current ||
                !u ||
                ((b.current = !0),
                o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                  "help_tray_ads_ai_non_os_cta_impression",
                  h,
                ));
            }),
            (S = [u, h]),
            (t[6] = u),
            (t[7] = h),
            (t[8] = v),
            (t[9] = S))
          : ((v = t[8]), (S = t[9])),
        d(v, S),
        i == null || l == null)
      )
        return null;
      var R;
      return (
        t[10] !== C || t[11] !== l
          ? ((R = s.jsx(r("GeoButton.react"), {
              label: l,
              onClick: C,
              variant: "primary",
            })),
            (t[10] = C),
            (t[11] = l),
            (t[12] = R))
          : (R = t[12]),
        R
      );
    }
    l.default = g;
  },
  98,
);
