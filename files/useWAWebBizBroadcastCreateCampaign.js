__d(
  "useWAWebBizBroadcastCreateCampaign",
  [
    "fbt",
    "WALogger",
    "WAWebBizBroadcastBusinessInfoContext.react",
    "WAWebCreatePendingBroadcastCampaignAction",
    "WAWebPendingBusinessBroadcastAPI",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-query",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f = _ || (_ = o("react")),
      g = _,
      h = g.useEffect,
      y = g.useRef,
      C = g.useState;
    function b() {
      var t = o(
          "WAWebBizBroadcastBusinessInfoContext.react",
        ).useWAWebBizBroadcastBusinessInfoContext(),
        a = t.adAccountId,
        i = t.businessId,
        l = t.error,
        _ = t.isLoading,
        g = t.pageId,
        b = a != null && g != null && i != null,
        v = o("react-query").useMutation(
          o("WAWebCreatePendingBroadcastCampaignAction")
            .createPendingBroadcastCampaignAction,
        ),
        S = v[0],
        R = C(!1),
        L = R[0],
        E = R[1],
        k = C(null),
        I = k[0],
        T = k[1],
        D = y(!0);
      h(function () {
        return (
          (D.current = !0),
          function () {
            D.current = !1;
          }
        );
      }, []);
      var x = function (l) {
        var t = l.audiences,
          _ = l.budgetAmount,
          h = l.campaignName,
          y = l.freeReservedMsgs,
          C = l.messageContent,
          b = l.onError,
          v = l.onSuccess,
          R = l.onValidationSuccess,
          L = l.sendTimestamp,
          k = L === void 0 ? null : L;
        if (a == null || g == null || i == null) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[useWAWebBizBroadcastCreateCampaign] Missing required IDs: adAccountId: ",
                ", pageId: ",
                ", businessId: ",
                "",
              ])),
            a != null ? a : "null",
            g != null ? g : "null",
            i != null ? i : "null",
          ),
            b == null || b("Missing required business information"));
          return;
        }
        if (h.trim() === "") {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[useWAWebBizBroadcastCreateCampaign] Campaign name is empty",
              ])),
          ),
            b == null || b("Please enter a campaign name"));
          return;
        }
        (R == null || R(),
          E(!0),
          T(null),
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[useWAWebBizBroadcastCreateCampaign] Creating marketing campaign with name: ",
                    "",
                  ])),
                h,
              );
              var e = t.map(function (e) {
                  return babelHelpers.extends({}, e, {
                    freeReservedMsgs: y != null ? y : e.freeReservedMsgs,
                  });
                }),
                n = yield S({
                  audiences: e,
                  campaignInput: {
                    ad_account_id: a,
                    campaign_name: h.trim(),
                    lifetime_budget: _ != null ? _ : "0",
                    page_id: g,
                    waba_id: i,
                  },
                  messageContent: C,
                  sendTimestamp: k,
                });
              if (
                n.pendingBroadcastResult.type === "failure" &&
                n.pendingBroadcastResult.message !==
                  o("WAWebPendingBusinessBroadcastAPI")
                    .PENDING_BROADCAST_TABLE_NOT_AVAILABLE_ERROR
              ) {
                var l = n.pendingBroadcastResult.message;
                (o("WALogger")
                  .ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastCreateCampaign] Failed to create pending broadcast: ",
                        "",
                      ])),
                    l,
                  )
                  .sendLogs("business-broadcast-pending-create-failed"),
                  D.current && T(l),
                  b == null || b(l));
              } else {
                if (
                  (o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastCreateCampaign] Campaign created successfully",
                      ])),
                  ),
                  !D.current)
                )
                  return;
                (n.failedCampaignCount > 0 &&
                  (b == null ||
                    b(
                      "Failed to create " +
                        String(n.failedCampaignCount) +
                        " campaign(s)",
                    )),
                  o("WAWebToastManager").ToastManager.open(
                    f.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(/*BTDS*/ "Your broadcast is in review."),
                    }),
                  ),
                  v == null || v());
              }
            } catch (e) {
              var u =
                typeof e == "object" && e != null && "message" in e
                  ? String(e.message)
                  : String(e);
              if (
                (o("WALogger")
                  .ERROR(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[useWAWebBizBroadcastCreateCampaign] Failed to create campaign: ",
                        "",
                      ])),
                    u,
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("business-broadcast-campaign-create-hook-failed"),
                !D.current)
              )
                return;
              (T(u), b == null || b(u));
            } finally {
              D.current && E(!1);
            }
          })());
      };
      return {
        adAccountId: a,
        businessInfoError: l,
        campaignError: I,
        createCampaign: x,
        hasRequiredBusinessInfo: b,
        isCreatingCampaign: L,
        isLoadingBusinessInfo: _,
      };
    }
    l.default = b;
  },
  226,
);
