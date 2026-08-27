__d(
  "CometProfessionalDashboardContentUtils",
  [
    "CometRouteURL",
    "ProdashContentClickFalcoEvent",
    "ProdashNavItemClickFalcoEvent",
    "ProdashNavItemVpvFalcoEvent",
    "ProdashPageOpenFalcoEvent",
    "ProdashUnitVpvFalcoEvent",
    "ProdashWidgetClickFalcoEvent",
    "ProdashWidgetVpvFalcoEvent",
    "ProfileCometContext",
    "ProfileCometSession",
    "ProfilePlusProfessionalDashboardContext",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useCurrentRoute",
    "usePartialViewImpression",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = r("requireDeferred")("ProdashContentVpvFalcoEvent").__setRef(
        "CometProfessionalDashboardContentUtils",
      );
    function m(e, t, n, a, i) {
      var l = o("react-compiler-runtime").c(8),
        s;
      l[0] !== e || l[1] !== t || l[2] !== i || l[3] !== n || l[4] !== a
        ? ((s = function () {
            p(e, t, n, a, i);
          }),
          (l[0] = e),
          (l[1] = t),
          (l[2] = i),
          (l[3] = n),
          (l[4] = a),
          (l[5] = s))
        : (s = l[5]);
      var u = s,
        c;
      return (
        l[6] !== u
          ? ((c = { onImpressionStart: u }), (l[6] = u), (l[7] = c))
          : (c = l[7]),
        r("usePartialViewImpression")(c)
      );
    }
    function p(e, t, n, a, i) {
      var l = o("CometRouteURL").getWindowURLParams(),
        s = l == null ? void 0 : l.notif_t,
        u = s != null && (t === "notif" || t === "notification"),
        c = u ? babelHelpers.extends({}, i, { notif_t: String(s) }) : i;
      r("ProdashPageOpenFalcoEvent").log(function () {
        return {
          delegate_page_id: e,
          entry_point: t,
          event_attributes: c,
          page_type: n,
          session_id: a,
        };
      });
    }
    function _(e, t, n, o, a, i, l, s) {
      r("ProdashUnitVpvFalcoEvent").log(function () {
        return {
          delegate_page_id: e,
          entry_point: t,
          event_attributes: s,
          page_type: n,
          session_id: o,
          unit_attributes: a,
          unit_position: i,
          unit_type: l,
        };
      });
    }
    function f(e, t, n, r, o, a, i, l, s, u) {
      d.onReady(function (c) {
        c.log(function () {
          return {
            content_attributes: e,
            content_position: t.toString(),
            content_type: n,
            delegate_page_id: r != null ? r : "",
            entry_point: o || "unknown",
            page_type: a || "unknown",
            session_id: i,
            unit_attributes: l,
            unit_position: s.toString(),
            unit_type: u,
          };
        });
      });
    }
    function g() {
      var e = o("react-compiler-runtime").c(7),
        t = c(r("ProfileCometContext")),
        n = t.delegatePageID,
        a = t.profileID,
        i = r("useCurrentRoute")(),
        l;
      if (e[0] !== a || e[1] !== i) {
        var s;
        ((l =
          (s = o("ProfileCometSession").get(a, i)) != null
            ? s
            : "null_comet_profile_session_id"),
          (e[0] = a),
          (e[1] = i),
          (e[2] = l));
      } else l = e[2];
      var u = l,
        d = c(r("ProfilePlusProfessionalDashboardContext")),
        m = d.referrerSurface,
        p;
      return (
        e[3] !== n || e[4] !== m || e[5] !== u
          ? ((p = function (t) {
              h(
                t.clickType,
                t.contentAttributes,
                t.contentPosition,
                t.contentType,
                n != null ? n : "",
                m != null ? m : "unknown",
                t.eventAttributes,
                t.pageType,
                u,
                t.unitAttributes,
                t.unitPosition,
                t.unitType,
              );
            }),
            (e[3] = n),
            (e[4] = m),
            (e[5] = u),
            (e[6] = p))
          : (p = e[6]),
        p
      );
    }
    function h(e, t, n, o, a, i, l, s, u, c, d, m) {
      r("ProdashContentClickFalcoEvent").log(function () {
        return {
          click_type: e,
          content_attributes: t,
          content_position: n.toString(),
          content_type: o,
          delegate_page_id: a,
          entry_point: i || "unknown",
          event_attributes: l,
          page_type: s || "unknown",
          session_id: u,
          unit_attributes: c,
          unit_position: d.toString(),
          unit_type: m,
        };
      });
    }
    function y(e, t, n, o, a, i) {
      ((o.nav_item_type = e),
        r("ProdashNavItemVpvFalcoEvent").log(function () {
          return {
            delegate_page_id: t,
            entry_point: n || "unknown",
            event_attributes: o,
            page_type: a || "unknown",
            session_id: i,
          };
        }));
    }
    function C(e, t, n, o, a, i) {
      ((o.nav_item_type = e),
        r("ProdashNavItemClickFalcoEvent").log(function () {
          return {
            delegate_page_id: t,
            entry_point: n || "unknown",
            event_attributes: o,
            page_type: a || "unknown",
            session_id: i,
          };
        }));
    }
    function b(e, t, n, o, a) {
      r("ProdashWidgetVpvFalcoEvent").log(function () {
        return {
          collection_type: "comet",
          delegate_page_id: e,
          entry_point: t,
          inventory_id: a,
          page_type: n,
          session_id: o,
          surface_type: "comet",
        };
      });
    }
    function v(e, t, n, o, a, i, l) {
      r("ProdashWidgetClickFalcoEvent").log(function () {
        return {
          click_type: i,
          collection_type: "comet",
          delegate_page_id: e,
          entry_point: t,
          event_attributes: l,
          inventory_id: a,
          page_type: n,
          session_id: o,
          surface_type: "comet",
        };
      });
    }
    ((l.useLogPageOpenImpression = m),
      (l.logPageOpen = p),
      (l.logUnitVPV = _),
      (l.logContentVPV = f),
      (l.useLogContentClickAction = g),
      (l.logContentClickAction = h),
      (l.logNavItemVPV = y),
      (l.logNavItemClick = C),
      (l.logWidgetVPV = b),
      (l.logWidgetClick = v));
  },
  98,
);
