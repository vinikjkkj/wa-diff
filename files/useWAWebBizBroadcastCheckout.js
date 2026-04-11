__d(
  "useWAWebBizBroadcastCheckout",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebGetSMBMeteredMessagingCheckoutJob",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = m,
      f = _.useEffect,
      g = _.useRef,
      h = _.useState;
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignsByStatuses([
              o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.SCHEDULED,
              o("WAWebSchemaBusinessBroadcastCampaign")
                .BusinessBroadcastCampaignStatus.PROCESSING,
            ]),
            t = e
              .filter(function (e) {
                return e.reservedQuota != null && e.reservedQuota > 0;
              })
              .map(function (e) {
                var t;
                return {
                  campaignFreeReservedMsgs:
                    (t = e.reservedQuota) != null ? t : 0,
                  campaignSendTimestamp: e.scheduledTimestamp,
                };
              });
          if (t.length > 0) return { campaignArgs: t };
        })),
        C.apply(this, arguments)
      );
    }
    function b(t, r) {
      var a,
        i,
        l = (a = r == null ? void 0 : r.enabled) != null ? a : !0,
        m = (i = r == null ? void 0 : r.skipDedupe) != null ? i : !1,
        _ = h(null),
        C = _[0],
        b = _[1],
        v = h(!1),
        S = v[0],
        R = v[1],
        L = h(null),
        E = L[0],
        k = L[1],
        I = g(!0);
      return (
        f(function () {
          return (
            (I.current = !0),
            function () {
              I.current = !1;
            }
          );
        }, []),
        f(
          function () {
            l &&
              t.length > 0 &&
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                (R(!0), k(null));
                try {
                  var n, r;
                  o("WALogger").LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastCheckout] Fetching checkout data for ",
                        " recipients",
                      ])),
                    t.length,
                  );
                  var a = yield y();
                  o("WALogger").LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastCheckout] Including ",
                        " pending campaigns",
                      ])),
                    (n =
                      a == null || (r = a.campaignArgs) == null
                        ? void 0
                        : r.length) != null
                      ? n
                      : 0,
                  );
                  var i = yield o(
                    "WAWebGetSMBMeteredMessagingCheckoutJob",
                  ).getSMBMeteredMessagingCheckout({
                    hasSkipDedupe: m,
                    hasUseAdAccount: !0,
                    pendingCampaignsArgs: a,
                    toArgs: t.map(function (e) {
                      return { toJid: o("WAWebWidToJid").widToUserJid(e) };
                    }),
                  });
                  if (!I.current) return;
                  (o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastCheckout] Checkout data fetched successfully",
                      ])),
                  ),
                    b(i));
                } catch (e) {
                  if (!I.current) return;
                  var l = String(e);
                  (e instanceof Error
                    ? o("WALogger")
                        .ERROR(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "Exception fetching checkout data",
                            ])),
                        )
                        .catching(e)
                        .sendLogs("business-broadcast-checkout-fetch-failed")
                    : o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "Exception fetching checkout data ",
                              "",
                            ])),
                          l,
                        )
                        .sendLogs("business-broadcast-checkout-fetch-failed"),
                    o(
                      "WAWebBusinessBroadcastUserJourneyLogger",
                    ).BusinessBroadcastUserJourneyLogger.checkoutFetchFailed(l),
                    k(l),
                    o("WAWebToastManager").ToastManager.open(
                      p.jsx(o("WAWebToast.react").Toast, {
                        msg: "Failed to fetch checkout information",
                      }),
                    ));
                } finally {
                  I.current && R(!1);
                }
              })();
          },
          [l, t, m],
        ),
        { checkoutData: C, error: E, isLoading: S }
      );
    }
    l.default = b;
  },
  98,
);
