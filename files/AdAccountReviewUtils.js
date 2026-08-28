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
    "Promise",
    "RelayHooks",
    "asyncToGeneratorRuntime",
    "geoMargin",
    "meta-brand-dot-filled-12",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useGeoTheme",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useState;
    function g(e, t) {
      return e == null || t == null
        ? null
        : m.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(
              /*BTDS*/ "Daily spend limit: {lower_limit} \u2192 {upper_limit}",
              [s._param("lower_limit", e), s._param("upper_limit", t)],
            ),
          });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e, t) {
      return t == null && e == null
        ? null
        : m.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(/*BTDS*/ "Updated to {upper_limit}", [
              s._param("upper_limit", e != null ? e : t),
            ]),
          });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return e == null
        ? null
        : m.jsx(r("GeoBaseText.react"), {
            color: "placeholder",
            size: "value",
            children: s._(/*BTDS*/ "Remains at {lower_limit}", [
              s._param("lower_limit", e),
            ]),
          });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e, t) {
      return m.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        children: s._(
          /*BTDS*/ "Daily spend limit: {lower_limit} \u2192 {upper_limit}",
          [s._param("lower_limit", e), s._param("upper_limit", t)],
        ),
      });
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.currentStatus,
        r = e.finalLimit,
        a = e.lowerLimit,
        i = e.upperLimit;
      if (n === "IN_REVIEW") {
        var l;
        t[0] !== a || t[1] !== i
          ? ((l = g(a, i)), (t[0] = a), (t[1] = i), (t[2] = l))
          : (l = t[2]);
        var s = l;
        if (s != null) return s;
      }
      if (n === "ACTIVE") {
        var u;
        t[3] !== r || t[4] !== i
          ? ((u = h(r, i)), (t[3] = r), (t[4] = i), (t[5] = u))
          : (u = t[5]);
        var c = u;
        if (c != null) return c;
      }
      if (n === "RESTRICTED") {
        var d;
        t[6] !== a ? ((d = y(a)), (t[6] = a), (t[7] = d)) : (d = t[7]);
        var m = d;
        if (m != null) return m;
      }
      var p;
      return (
        t[8] !== a || t[9] !== i
          ? ((p = C(a, i)), (t[8] = a), (t[9] = i), (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    var v = {
      cardContainer: {
        marginBottom: "xod5an3",
        marginTop: "x14vqqas",
        width: "x1iiql3v",
        $$css: !0,
      },
    };
    function S(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.status,
        a;
      n === "ACTIVE" ? (a = "active") : (a = "error");
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { className: "x1p8j9ns" }), (t[0] = i))
        : (i = t[0]);
      var l;
      return (
        t[1] !== a
          ? ((l = m.jsx(
              "div",
              babelHelpers.extends({}, i, {
                children: m.jsx(r("GeoStatusIndicator.react"), {
                  density: "dense",
                  status: a,
                  variant: "filled",
                }),
              }),
            )),
            (t[1] = a),
            (t[2] = l))
          : (l = t[2]),
        l
      );
    }
    function R(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.dataTestId,
        a = e.displayAccountName,
        i = e.lowerLimit,
        l = r("useGeoTheme")(),
        u = l.selectBorderRadius,
        d = l.selectElevation,
        p;
      t[0] !== u || t[1] !== d
        ? ((p = (c || (c = r("stylex"))).props(
            d({ level: 1 }),
            u({ context: "addon" }),
            v.cardContainer,
          )),
          (t[0] = u),
          (t[1] = d),
          (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== a
        ? ((_ = m.jsx(r("GeoBaseText.react"), {
            color: "heading",
            display: "truncate",
            showTruncationTooltip: !0,
            size: "header3",
            children: a,
          })),
          (t[3] = a),
          (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = m.jsx(S, { status: "RESTRICTED" })), (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = m.jsxs(m.Fragment, {
            children: [
              f,
              m.jsx(r("GeoBaseText.react"), {
                color: "heading",
                size: "value",
                children: s._(/*BTDS*/ "Not eligible"),
              }),
              m.jsx(r("GeoIcon.react"), {
                color: "placeholder",
                icon: o("meta-brand-dot-filled-12").metaBrandDotFilled12,
              }),
            ],
          })),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] !== i
        ? ((h =
            i != null &&
            m.jsx(r("GeoBaseText.react"), {
              color: "placeholder",
              size: "value",
              children: s._(/*BTDS*/ "Remains at {lower_limit}", [
                s._param("lower_limit", i),
              ]),
            })),
          (t[7] = i),
          (t[8] = h))
        : (h = t[8]);
      var y;
      t[9] !== h
        ? ((y = m.jsxs(r("GeoFlexbox.react"), {
            alignItems: "center",
            direction: "row",
            xstyle: r("geoMargin").top4,
            children: [g, h],
          })),
          (t[9] = h),
          (t[10] = y))
        : (y = t[10]);
      var C;
      t[11] !== _ || t[12] !== y
        ? ((C = m.jsx(r("GeoFlexbox.react"), {
            alignItems: "start",
            direction: "row",
            xstyle: r("geoMargin").all12,
            children: m.jsxs(r("GeoFlexbox.react"), {
              direction: "column",
              children: [_, y],
            }),
          })),
          (t[11] = _),
          (t[12] = y),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] !== n || t[15] !== C
        ? ((b = m.jsx(r("GeoFlexbox.react"), {
            "data-testid": void 0,
            children: C,
          })),
          (t[14] = n),
          (t[15] = C),
          (t[16] = b))
        : (b = t[16]);
      var R;
      return (
        t[17] !== p || t[18] !== b
          ? ((R = m.jsx("div", babelHelpers.extends({}, p, { children: b }))),
            (t[17] = p),
            (t[18] = b),
            (t[19] = R))
          : (R = t[19]),
        R
      );
    }
    function L() {
      var e = o("react-compiler-runtime").c(4),
        t = f(0),
        n = t[0],
        r = t[1],
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            s._(/*BTDS*/ "Checking eligibility..."),
            s._(/*BTDS*/ "Reviewing options..."),
            s._(/*BTDS*/ "Making decisions..."),
            s._(/*BTDS*/ "Completing request..."),
          ]),
          (e[0] = a))
        : (a = e[0]);
      var i = a,
        l,
        u;
      return (
        e[1] !== n
          ? ((l = function () {
              if (n < i.length - 1) {
                var e = window.setInterval(function () {
                  r(E);
                }, 8e3);
                return function () {
                  window.clearInterval(e);
                };
              }
            }),
            (u = [n, i.length]),
            (e[1] = n),
            (e[2] = l),
            (e[3] = u))
          : ((l = e[2]), (u = e[3])),
        _(l, u),
        i[n]
      );
    }
    function E(e) {
      return e + 1;
    }
    function k(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.isDailySpendLimitFlow,
        a = e.status,
        i = n === void 0 ? !1 : n;
      if (a === "ACTIVE") {
        var l;
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = m.jsx(S, { status: "ACTIVE" })), (t[0] = l))
          : (l = t[0]);
        var u;
        return (
          t[1] !== i
            ? ((u = m.jsxs(m.Fragment, {
                children: [
                  l,
                  m.jsx(r("GeoBaseText.react"), {
                    color: "heading",
                    size: "value",
                    children: i
                      ? s._(/*BTDS*/ "Eligible")
                      : s._(/*BTDS*/ "Active"),
                  }),
                ],
              })),
              (t[1] = i),
              (t[2] = u))
            : (u = t[2]),
          u
        );
      } else if (a === "RESTRICTED" || a === "IN_REVIEW") {
        var c;
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = m.jsx(S, { status: "RESTRICTED" })), (t[3] = c))
          : (c = t[3]);
        var d;
        return (
          t[4] !== i
            ? ((d = m.jsxs(m.Fragment, {
                children: [
                  c,
                  m.jsx(r("GeoBaseText.react"), {
                    color: "heading",
                    size: "value",
                    children: i
                      ? s._(/*BTDS*/ "Failed")
                      : s._(/*BTDS*/ "Restricted"),
                  }),
                ],
              })),
              (t[4] = i),
              (t[5] = d))
            : (d = t[5]),
          d
        );
      }
      return null;
    }
    var I =
        e !== void 0
          ? e
          : (e = n(
              "AdAccountReviewUtilsFetchMAIBAAccountReviewStatusQuery.graphql",
            )),
      T = new Map(),
      D = new Map();
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = yield o("RelayHooks")
              .fetchQuery(e, I, { accountReviewTrackerId: t })
              .toPromise(),
            a =
              r == null || (n = r.xfb_maiba_account_status_review) == null
                ? void 0
                : n.review_status;
          return a != null ? a : "IN_REVIEW";
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      var n = o("react-compiler-runtime").c(2),
        r = o("RelayHooks").useRelayEnvironment();
      if (e == null) return null;
      if (t != null) return t;
      var a = "" + e,
        i;
      n[0] !== a ? ((i = T.get(a)), (n[0] = a), (n[1] = i)) : (i = n[1]);
      var l = i;
      if (l != null) return l;
      var s = D.get(a);
      throw (s == null && (s = N(r, e)), s);
    }
    function N(e, t) {
      var o = "" + t,
        a = T.get(o);
      if (a != null) return (u || (u = n("Promise"))).resolve(a);
      var i = D.get(o);
      return (
        i == null &&
          ((i = x(e, t)
            .then(function (e) {
              return (T.set(o, e), D.delete(o), e);
            })
            .catch(function (e) {
              r("FBLogger")("axp_maiba_foundations_ux")
                .catching(e)
                .warn("Failed to fetch account review status");
              var t = "IN_REVIEW";
              return (T.set(o, t), D.delete(o), t);
            })),
          D.set(o, i)),
        i
      );
    }
    function M(e, t, n, r, a, i, l) {
      e != null &&
        e !== "IN_REVIEW" &&
        (r === !0
          ? ((e === "ACTIVE" && n) || (e === "RESTRICTED" && !n)) &&
            o("AdsHelpTrayUILogger").logALRStatusMismatchWithAdAccountForDSL(
              a,
              i,
              l,
              e != null ? e : null,
              t != null ? t : "",
              r,
              String(n),
            )
          : t === "ACTIVE" &&
            e === "RESTRICTED" &&
            o("AdsHelpTrayUILogger").logALRStatusMismatchWithAdAccountForDORA(
              a,
              i,
              l,
              e != null ? e : null,
              t != null ? t : "",
            ));
    }
    ((l.DailySpendLimitContent = b),
      (l.DSLNotEligibleComponent = R),
      (l.useRotatingReviewText = L),
      (l.ReviewStatusContent = k),
      (l.useAccountStatusFromDB = P),
      (l.logDslDoraErrorScenarios = M));
  },
  226,
);
