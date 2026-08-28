__d(
  "AdsStackedErrorsCardUtils",
  [
    "errorCode",
    "fbt",
    "$InternalEnum",
    "AdsCCLogContextValue",
    "AdsLearnMore.react",
    "AdsLearnMoreStrings",
    "AdsLoginAs",
    "adsFormatErrorMessage",
    "cr:242",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react")),
      d = e.useContext,
      m = n("$InternalEnum")({
        MODAL: "modal",
        ONE_CLICK: "one-click-apply",
        LINK: "link",
        PATH: "path",
        OTHER: "other",
      });
    function p(e) {
      return e.key === 4469002 ? e.message : r("adsFormatErrorMessage")(e);
    }
    function _(e, t, n) {
      var a = o("react-compiler-runtime").c(6),
        i = n === void 0 ? "link" : n,
        l = d(r("AdsCCLogContextValue")),
        s;
      return (
        a[0] !== t ||
        a[1] !== e.fragmentID ||
        a[2] !== e.key ||
        a[3] !== l ||
        a[4] !== i
          ? ((s = function () {
              return l.onLogCTAClick(
                t,
                e.key.toString(),
                "cta",
                i,
                0,
                e.fragmentID,
              );
            }),
            (a[0] = t),
            (a[1] = e.fragmentID),
            (a[2] = e.key),
            (a[3] = l),
            (a[4] = i),
            (a[5] = s))
          : (s = a[5]),
        s
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.error,
        a = _(n, o("AdsLearnMoreStrings").STANDALONE_LEARN_MORE);
      if (n.help_center_id == null) return null;
      var i = String(n.help_center_id),
        l;
      return (
        t[0] !== a || t[1] !== i
          ? ((l = c.jsx(r("AdsLearnMore.react"), {
              cmsID: i,
              isStandalone: !1,
              onClick: a,
            })),
            (t[0] = a),
            (t[1] = i),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.error;
      if (
        !o("AdsLoginAs").isEmployeeContingentOrUsingLoginAs() ||
        (n == null ? void 0 : n.www_request_id) == null
      )
        return null;
      var r =
          "http://www.internalfb.com/intern/ads_interface/log_viewer/?query_type=requestID&www_request_id=" +
          n.www_request_id,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u._(/*BTDS*/ "[FB-Only] Debug publish - adlog")), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== r
          ? ((i = c.jsx("div", {
              children: c.jsx("a", { href: r, target: "_blank", children: a }),
            })),
            (t[1] = r),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function h(e) {
      var t,
        r = o("react-compiler-runtime").c(12),
        a = e.adObjectID,
        i = e.adObjectLevel,
        l = e.error;
      if (!o("AdsLoginAs").isEmployeeContingentOrUsingLoginAs() || !n("cr:242"))
        return null;
      var s = l.key ? String(l.key) : null,
        u = (t = l.fragmentID) != null ? t : null;
      if (l.isDeliveryIssue) {
        var d;
        return (
          r[0] !== a ||
          r[1] !== i ||
          r[2] !== l.opes_mid ||
          r[3] !== s ||
          r[4] !== u
            ? ((d = c.jsx(
                n("cr:242").AdsManagerGuidedInvestigationAndOpesMidComponent,
                {
                  adObjectID: a,
                  adObjectLevel: i,
                  errorCode: s,
                  fragmentID: u,
                  postProcessingOpesMid: l.opes_mid,
                },
              )),
              (r[0] = a),
              (r[1] = i),
              (r[2] = l.opes_mid),
              (r[3] = s),
              (r[4] = u),
              (r[5] = d))
            : (d = r[5]),
          d
        );
      }
      var m;
      return (
        r[6] !== a ||
        r[7] !== i ||
        r[8] !== l.opes_mid ||
        r[9] !== s ||
        r[10] !== u
          ? ((m = c.jsx(
              n("cr:242").AdsManagerGuidedInvestigationAndOpesMidComponent,
              {
                adObjectID: a,
                adObjectLevel: i,
                errorCode: s,
                fragmentID: u,
                validationOpesMid: l.opes_mid,
              },
            )),
            (r[6] = a),
            (r[7] = i),
            (r[8] = l.opes_mid),
            (r[9] = s),
            (r[10] = u),
            (r[11] = m))
          : (m = r[11]),
        m
      );
    }
    ((l.AdsErrorCustomCTAType = m),
      (l.getErrorText = p),
      (l.HelpLink = f),
      (l.AdlogLink = g),
      (l.AdsPublishingGuidedInvestigation = h));
  },
  226,
);
