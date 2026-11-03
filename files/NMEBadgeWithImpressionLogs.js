__d(
  "NMEBadgeWithImpressionLogs",
  [
    "CometProfileVerificationBadge.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCometNmeBadgeImpressionLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(15),
        a = t.is_verified,
        i = t.profile_id,
        l = t.size,
        s = t.span_syle,
        c = t.sub_surface,
        d = t.surface,
        m = l === void 0 ? "small" : l,
        p = a && i != null,
        _;
      n[0] !== p || n[1] !== i || n[2] !== c || n[3] !== d
        ? ((_ = {
            entity_owner_id: i,
            event_type: "impression_start",
            is_badge_visible: p,
            sub_surface: c,
            surface: d,
          }),
          (n[0] = p),
          (n[1] = i),
          (n[2] = c),
          (n[3] = d),
          (n[4] = _))
        : (_ = n[4]);
      var f = _,
        g = r("useCometNmeBadgeImpressionLogging")(f),
        h;
      n[5] !== s
        ? ((h = (e || (e = r("stylex"))).props(s)), (n[5] = s), (n[6] = h))
        : (h = n[6]);
      var y;
      n[7] !== p || n[8] !== i || n[9] !== m
        ? ((y = p
            ? u.jsx(r("CometProfileVerificationBadge.react"), {
                profileID: String(i),
                size: m,
              })
            : null),
          (n[7] = p),
          (n[8] = i),
          (n[9] = m),
          (n[10] = y))
        : (y = n[10]);
      var C;
      return (
        n[11] !== g || n[12] !== h || n[13] !== y
          ? ((C = u.jsx(
              "span",
              babelHelpers.extends({}, h, { ref: g, children: y }),
            )),
            (n[11] = g),
            (n[12] = h),
            (n[13] = y),
            (n[14] = C))
          : (C = n[14]),
        C
      );
    }
    l.default = c;
  },
  98,
);
