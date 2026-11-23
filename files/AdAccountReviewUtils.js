__d(
  "AdAccountReviewUtils",
  [
    "fbt",
    "AdAccountReviewUtilsFetchMAIBAAccountReviewStatusQuery.graphql",
    "AdsHelpTrayUILogger",
    "FBLogger",
    "GeoBaseText.react",
    "GeoFlexbox.react",
    "GeoIcon.react",
    "GeoStatusIndicator.react",
    "RelayHooks",
    "geoMargin",
    "meta-brand-dot-filled-12",
    "react",
    "stylex",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useState;
    function f(e, t) {
      return e == null || t == null
        ? null
        : d.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(/*BTDS*/ "", [
              s._param("lower_limit", e),
              s._param("upper_limit", t),
            ]),
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e, t) {
      return t == null && e == null
        ? null
        : d.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(/*BTDS*/ "", [
              s._param("upper_limit", e != null ? e : t),
            ]),
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return e == null
        ? null
        : d.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(/*BTDS*/ "", [s._param("lower_limit", e)]),
          });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e, t) {
      return d.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        children: s._(/*BTDS*/ "", [
          s._param("lower_limit", e),
          s._param("upper_limit", t),
        ]),
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.currentStatus,
        n = e.finalLimit,
        r = e.lowerLimit,
        o = e.upperLimit;
      if (t === "IN_REVIEW") {
        var a = f(r, o);
        if (a != null) return a;
      }
      if (t === "ACTIVE") {
        var i = g(n, o);
        if (i != null) return i;
      }
      if (t === "RESTRICTED") {
        var l = h(r);
        if (l != null) return l;
      }
      return y(r, o);
    }
    C.displayName = C.name + " [from " + i.id + "]";
    var b = {
      cardContainer: {
        marginBottom: "xod5an3",
        marginTop: "x14vqqas",
        width: "x1iiql3v",
        $$css: !0,
      },
    };
    function v(e) {
      var t = e.status,
        n;
      return (
        t === "ACTIVE" ? (n = "active") : (n = "error"),
        d.jsx("div", {
          className: "x1p8j9ns",
          children: d.jsx(r("GeoStatusIndicator.react"), {
            density: "dense",
            status: n,
            variant: "filled",
          }),
        })
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      var t = e.dataTestId,
        n = e.displayAccountName,
        a = e.lowerLimit,
        i = r("useGeoTheme")(),
        l = i.selectBorderRadius,
        c = i.selectElevation;
      return d.jsx(
        "div",
        babelHelpers.extends(
          {},
          (u || (u = r("stylex"))).props(
            c({ level: 1 }),
            l({ context: "addon" }),
            b.cardContainer,
          ),
          {
            children: d.jsx(r("GeoFlexbox.react"), {
              "data-testid": void 0,
              children: d.jsx(r("GeoFlexbox.react"), {
                alignItems: "start",
                direction: "row",
                xstyle: r("geoMargin").all12,
                children: d.jsxs(r("GeoFlexbox.react"), {
                  direction: "column",
                  children: [
                    d.jsx(r("GeoBaseText.react"), {
                      color: "heading",
                      display: "truncate",
                      showTruncationTooltip: !0,
                      size: "header3",
                      children: n,
                    }),
                    d.jsxs(r("GeoFlexbox.react"), {
                      alignItems: "center",
                      direction: "row",
                      xstyle: r("geoMargin").top4,
                      children: [
                        d.jsxs(d.Fragment, {
                          children: [
                            d.jsx(v, { status: "RESTRICTED" }),
                            d.jsx(r("GeoBaseText.react"), {
                              color: "heading",
                              size: "value",
                              children: s._(/*BTDS*/ ""),
                            }),
                            d.jsx(r("GeoIcon.react"), {
                              color: "placeholder",
                              icon: o("meta-brand-dot-filled-12")
                                .metaBrandDotFilled12,
                            }),
                          ],
                        }),
                        a != null &&
                          d.jsx(r("GeoBaseText.react"), {
                            color: "placeholder",
                            size: "value",
                            children: s._(/*BTDS*/ "", [
                              s._param("lower_limit", a),
                            ]),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          },
        ),
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      var e = _(0),
        t = e[0],
        n = e[1],
        r = [
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
          s._(/*BTDS*/ ""),
        ];
      return (
        p(
          function () {
            if (t < r.length - 1) {
              var e = window.setInterval(function () {
                n(function (e) {
                  return e + 1;
                });
              }, 8e3);
              return function () {
                window.clearInterval(e);
              };
            }
          },
          [t, r.length],
        ),
        r[t]
      );
    }
    function L(e) {
      var t = e.isDailySpendLimitFlow,
        n = t === void 0 ? !1 : t,
        o = e.status;
      return o === "ACTIVE"
        ? d.jsxs(d.Fragment, {
            children: [
              d.jsx(v, { status: "ACTIVE" }),
              d.jsx(r("GeoBaseText.react"), {
                color: "heading",
                size: "value",
                children: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
              }),
            ],
          })
        : o === "RESTRICTED" || o === "IN_REVIEW"
          ? d.jsxs(d.Fragment, {
              children: [
                d.jsx(v, { status: "RESTRICTED" }),
                d.jsx(r("GeoBaseText.react"), {
                  color: "heading",
                  size: "value",
                  children: n ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
                }),
              ],
            })
          : null;
    }
    L.displayName = L.name + " [from " + i.id + "]";
    var E =
        e !== void 0
          ? e
          : (e = n(
              "AdAccountReviewUtilsFetchMAIBAAccountReviewStatusQuery.graphql",
            )),
      k = new Map(),
      I = new Map();
    async function T(e, t) {
      var n,
        r = await o("RelayHooks")
          .fetchQuery(e, E, { accountReviewTrackerId: t })
          .toPromise(),
        a =
          r == null || (n = r.xfb_maiba_account_status_review) == null
            ? void 0
            : n.review_status;
      return a != null ? a : "IN_REVIEW";
    }
    function D(e) {
      var t = o("RelayHooks").useRelayEnvironment();
      if (e == null) return null;
      var n = "" + e,
        r = k.get(n);
      if (r != null) return r;
      var a = I.get(n);
      throw (a == null && (a = x(t, e)), a);
    }
    function x(e, t) {
      var n = "" + t,
        o = k.get(n);
      if (o != null) return Promise.resolve(o);
      var a = I.get(n);
      return (
        a == null &&
          ((a = T(e, t)
            .then(function (e) {
              return (k.set(n, e), I.delete(n), e);
            })
            .catch(function (e) {
              r("FBLogger")("axp_maiba_foundations_ux")
                .catching(e)
                .warn("Failed to fetch account review status");
              var t = "IN_REVIEW";
              return (k.set(n, t), I.delete(n), t);
            })),
          I.set(n, a)),
        a
      );
    }
    function $(e, t, n, r, a, i) {
      e != null &&
        e !== "IN_REVIEW" &&
        (r === !0
          ? ((e === "ACTIVE" && n) || (e === "RESTRICTED" && !n)) &&
            o("AdsHelpTrayUILogger").logALRStatusMismatchWithAdAccountForDSL(
              a,
              void 0,
              i,
              e != null ? e : null,
              t != null ? t : "",
              r,
              String(n),
            )
          : t === "ACTIVE" &&
            e === "RESTRICTED" &&
            o("AdsHelpTrayUILogger").logALRStatusMismatchWithAdAccountForDORA(
              a,
              void 0,
              i,
              e != null ? e : null,
              t != null ? t : "",
            ));
    }
    ((l.DailySpendLimitContent = C),
      (l.DSLNotEligibleComponent = S),
      (l.useRotatingReviewText = R),
      (l.ReviewStatusContent = L),
      (l.useAccountStatusFromDB = D),
      (l.logDslDoraErrorScenarios = $));
  },
  226,
);
