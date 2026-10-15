__d(
  "WAWebBizBroadcastProSubscriberPoolStateQuery",
  [
    "CometRelay",
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizBroadcastProRecipientNameRestriction",
    "WAWebBizBroadcastProSubscriberPoolStateQuery.graphql",
    "react",
    "react-compiler-runtime",
    "useWAWebCallbackOnce",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = p.useEffect,
      g = r("JSResourceForInteraction")(
        "WAWebBizBroadcastProSubscriberPoolSelectionDialog.react",
      ).__setRef("WAWebBizBroadcastProSubscriberPoolStateQuery"),
      h =
        e !== void 0
          ? e
          : (e = n("WAWebBizBroadcastProSubscriberPoolStateQuery.graphql"));
    function y(e) {
      return o("CometRelay").loadQuery(
        e,
        h,
        {},
        { fetchPolicy: "network-only" },
      );
    }
    function C(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(3),
        i = e.children,
        l = e.queryRef,
        s = o("CometRelay").usePreloadedQuery(h, l),
        u = v((t = s.xfb_whatsapp_bb_pro) != null ? t : null),
        c = u.state,
        d = u.warningReason,
        m = r("useWAWebCallbackOnce")(
          function () {
            d != null && S(d);
          },
          [d],
        ),
        p,
        _;
      return (
        a[0] !== m
          ? ((p = function () {
              m();
            }),
            (_ = [m]),
            (a[0] = m),
            (a[1] = p),
            (a[2] = _))
          : ((p = a[1]), (_ = a[2])),
        f(p, _),
        i(
          c,
          o(
            "WAWebBizBroadcastProRecipientNameRestriction",
          ).shouldOmitRecipientNames(
            (n = s.viewer) == null || (n = n.backing_waba) == null
              ? void 0
              : n.is_custom_param_restricted_for_first_party_paid_messaging,
          ),
        )
      );
    }
    function b(e) {
      return v(e).state;
    }
    function v(e) {
      if (e == null)
        return { state: { status: "error" }, warningReason: "root_missing" };
      if (e.default_subscriber_pool != null) {
        var t = e.default_subscriber_pool.id;
        return t == null
          ? {
              state: { status: "error" },
              warningReason: "default_pool_id_missing",
            }
          : {
              state: { status: "ready", subscriberPoolID: t },
              warningReason: null,
            };
      }
      if (e.subscriber_pools == null)
        return {
          state: { status: "error" },
          warningReason: "pool_list_missing",
        };
      var n = [];
      for (var r of e.subscriber_pools) {
        var o, a;
        if (r == null || r.id == null)
          return {
            state: { status: "error" },
            warningReason: "pool_id_missing",
          };
        var i =
          (r == null || (o = r.name) == null ? void 0 : o.trim()) ||
          (r == null || (a = r.owning_business) == null || (a = a.name) == null
            ? void 0
            : a.trim());
        if (i == null || i === "")
          return {
            state: { status: "error" },
            warningReason: "pool_name_missing",
          };
        n.push(r);
      }
      return {
        state: { status: "needs_setup", subscriberPools: n },
        warningReason: null,
      };
    }
    function S(e) {
      e: {
        if (e === "root_missing") {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "BB Pro subscriber pool state response is missing",
                ])),
            )
            .sendLogs("bb-pro-subscriber-pool-state-root-missing");
          break e;
        }
        if (e === "default_pool_id_missing") {
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "BB Pro default subscriber pool has no ID",
                ])),
            )
            .sendLogs("bb-pro-subscriber-pool-state-default-pool-id-missing");
          break e;
        }
        if (e === "pool_list_missing") {
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "BB Pro subscriber pool list is missing",
                ])),
            )
            .sendLogs("bb-pro-subscriber-pool-state-list-missing");
          break e;
        }
        if (e === "pool_id_missing") {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "BB Pro subscriber pool has no ID",
                ])),
            )
            .sendLogs("bb-pro-subscriber-pool-state-pool-id-missing");
          break e;
        }
        if (e === "pool_name_missing") {
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "BB Pro subscriber pool has no display name",
                ])),
            )
            .sendLogs("bb-pro-subscriber-pool-state-pool-name-missing");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.WAWebBizBroadcastProSubscriberPoolSelectionDialogResource = g),
      (l.subscriberPoolStateQuery = h),
      (l.preloadSubscriberPoolStateQuery = y),
      (l.WAWebBizBroadcastProSubscriberPoolStateQueryReader = C),
      (l.deriveSubscriberPoolState = b));
  },
  98,
);
