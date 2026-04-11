__d(
  "CometProductAttribution",
  [
    "Random",
    "WebSession",
    "decodeTrackingNode",
    "getRouteInfoForCometProductAttributionDispatch",
    "getTopMostRouteInfo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        var e = t.bookmark_id,
          n = t.bookmark_type_name,
          r = t.link_context,
          a = t.tap_point,
          i = t.trace_policy;
        return {
          bookmark_id: e,
          bookmark_type_name: n,
          link_context: r,
          session: o("WebSession").getId(),
          subsession: 1,
          tap_point: a,
          timestamp: Date.now(),
          trace_policy: i,
        };
      },
      s = function (t) {
        var e = t.bookmark_id,
          n = t.link_context,
          r = t.navChainContent,
          a = t.rootName,
          i = t.tap_point,
          l = t.tracePolicy,
          s = t.trackingNodes;
        return {
          bookmark_id: e,
          class: a,
          link_context: n,
          module: l,
          navChainContent: r,
          scope_id: Math.floor(o("Random").random() * 1e6),
          tap_point: i,
          tracking_nodes: s,
          ts: Date.now(),
        };
      },
      u = function (t) {
        var e = t.productAttributionId,
          n = t.tracePolicy;
        return typeof e == "string"
          ? e
          : typeof n == "string"
            ? "tp-" + n
            : "missing";
      },
      c = new Set([
        "create_jewel",
        "mega_menu",
        "tap_tabbar",
        "tap_search_bar",
        "tap_bookmark",
        "tap_community_panel_popover",
        "tap_community_panel_shortcuts",
        "topnav-link",
        "logo",
        "via_notification",
      ]),
      d = function (t) {
        return c.has(t);
      },
      m = function (t, n) {
        var e,
          r = "mp_listing";
        return (
          t === "via_cold_start" &&
          ((e = n.entityKeyConfig) == null ? void 0 : e.entity_type.value) === r
        );
      },
      p = function (t, n) {
        var e = { class: "", module: "inboundClick" };
        return [].concat(t, [
          babelHelpers.extends({}, t[t.length - 1], {
            class: e.class,
            module: e.module,
            navChainContent: n,
          }),
        ]);
      },
      _ = function (n, r, o, a, i, l, c) {
        var t, _, f, g, h;
        l === void 0 && (l = !1);
        var y = (t = o == null ? void 0 : o.route) != null ? t : {},
          C = y.tracePolicy,
          b =
            typeof r == "string"
              ? { tap_point: r }
              : r != null
                ? r
                : { tap_point: "unexpected" },
          v = b.bookmark_id != null ? String(b.bookmark_id) : u(n),
          S = e({
            bookmark_id: v,
            bookmark_type_name:
              (_ = b == null ? void 0 : b.bookmark_type_name) != null ? _ : "",
            link_context: a,
            tap_point: b.tap_point,
            trace_policy:
              C != null ? C : (f = n.tracePolicy) != null ? f : "missing",
          });
        n.productAttributionId != null &&
          b.bookmark_id != null &&
          n.productAttributionId !== String(b.bookmark_id) &&
          (S = babelHelpers.extends({}, S, {
            route_bookmark_id: n.productAttributionId,
          }));
        var R = [
          s({
            bookmark_id:
              b.bookmark_id != null
                ? String(b.bookmark_id)
                : n.productAttributionId,
            link_context: a,
            navChainContent: null,
            rootName:
              (g = n.rootView.resource) == null ? void 0 : g.getModuleId(),
            tap_point: b.tap_point,
            tracePolicy: (h = n.tracePolicy) != null ? h : "missing",
            trackingNodes: null,
          }),
        ];
        if (o != null && !d(b.tap_point))
          if (l && o.productAttribution.v2 != null) {
            var L = [].concat(o.productAttribution.v2);
            ((L[0] = R[0]), (R = L));
          } else {
            var E = o.productAttribution.v2;
            if (E != null) {
              var k = E[0],
                I = babelHelpers.arrayLikeToArray(E).slice(1);
              R = [].concat(
                R,
                [
                  babelHelpers.extends({}, k, {
                    navChainContent: c != null ? c : null,
                    tracking_nodes: i != null ? i : null,
                  }),
                ],
                I,
              );
            }
            R.length > 10 && (R = [].concat(R.slice(0, 9), [R[R.length - 1]]));
          }
        else if (m(b.tap_point, n)) {
          var T;
          R = p(R, String((T = n.params) == null ? void 0 : T.listing_id));
        }
        return { 0: S, v2: R };
      },
      f = function (t) {
        return t.replace(/,;/g, "_");
      },
      g = function (t) {
        var e, n;
        return (e =
          t == null || (n = t.v2) == null
            ? void 0
            : n
                .map(function (e) {
                  var t, n, o, a;
                  return [
                    (t = e.class) != null ? t : "",
                    e.module,
                    e.tap_point,
                    e.ts.toString(),
                    e.scope_id.toString(),
                    (n = e.bookmark_id) != null ? n : "",
                    ((o = e.tracking_nodes) != null ? o : [])
                      .reduce(function (e, t) {
                        var n = r("decodeTrackingNode")(t);
                        return n.length === 1 ? e : e.concat(n[1][0]);
                      }, [])
                      .join("#"),
                    (a = e.navChainContent) != null ? a : "",
                  ]
                    .map(f)
                    .join();
                })
                .join(";")) != null
          ? e
          : "";
      },
      h = function (t) {
        var e;
        return t != null
          ? g(
              (e = r("getTopMostRouteInfo")(t())) == null
                ? void 0
                : e.productAttribution,
            )
          : null;
      },
      y = function (t, n) {
        var e;
        if (t == null) return null;
        var o =
          (e = r("getTopMostRouteInfo")(t())) == null
            ? void 0
            : e.productAttribution.v2;
        return o == null
          ? null
          : (o.length !== 0 && (o[0].tracking_nodes = n), g({ v2: o }));
      };
    ((l.getProductAttributionEntry = e),
      (l.getProductAttributionEntryV2 = s),
      (l.getProductAttributionIdFromRoute = u),
      (l.isSpecialTapPoint = d),
      (l.isMarketplacePDPColdStart = m),
      (l.insertInboundClickEntryWithContentForColdStart = p),
      (l.getProductAttributionFromRoute = _),
      (l.filterEntryValue = f),
      (l.minifyProductAttributionV2 = g),
      (l.getMinifiedTopMostRouteProductAttribution = h),
      (l.minifiedNavigationChainWithTrackingNodes = y),
      (l.getRouteInfoForDispatch = r(
        "getRouteInfoForCometProductAttributionDispatch",
      )));
  },
  98,
);
