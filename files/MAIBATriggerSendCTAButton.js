__d(
  "MAIBATriggerSendCTAButton",
  [
    "fbt",
    "CometPlaceholder.react",
    "GeoBaseText.react",
    "GeoButton.react",
    "GeoFlexbox.react",
    "GeoGlimmer.react",
    "GeoVStack.react",
    "JSResourceForInteraction",
    "MAIBALatestTurnBoundary",
    "MAIBAMessageContext",
    "geoMargin",
    "lazyLoadComponent",
    "react",
    "useJSON",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e.useCallback;
    function d(e) {
      return u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "valueDescription",
        children: s._(/*BTDS*/ ""),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    var m = r("lazyLoadComponent")(
        r("JSResourceForInteraction")(
          "MAIBATriggerSendInfoCard.react",
        ).__setRef("MAIBATriggerSendCTAButton"),
        d,
      ),
      p = { summary: { minWidth: "xeuugli", width: "xh8yej3", $$css: !0 } },
      _ = "maiba-wa-manager-trigger-send-cta";
    function f(e) {
      var t = e.attributesJson,
        n = r("useJSON")(t),
        a = o("MAIBAMessageContext").useMAIBAMessageContext(),
        l = a.externalConversationId,
        d = a.isFromHistory,
        f = o("MAIBALatestTurnBoundary").useIsInLatestTurn(),
        g = !d && f,
        h = c(
          function () {
            !g ||
              n.action == null ||
              n.action === "" ||
              window.dispatchEvent(
                new CustomEvent(_, {
                  detail: { action: n.action, externalConversationId: l },
                }),
              );
          },
          [n.action, l, g],
        );
      if (n.action == null || n.action === "") return null;
      var y = n.label != null && n.label !== "" ? n.label : null;
      if (y == null) return null;
      var C = [
        n.campaign_name,
        n.crm_app_title,
        n.crm_account_title,
        n.messages_summary,
      ].some(function (e) {
        return e != null && e !== "";
      });
      return u.jsxs(r("GeoVStack.react"), {
        alignItems: "start",
        context: "content",
        relation: "paragraph",
        xstyle: r("geoMargin").top8,
        children: [
          C
            ? u.jsx(r("GeoFlexbox.react"), {
                direction: "column",
                xstyle: p.summary,
                children: u.jsx(r("CometPlaceholder.react"), {
                  fallback: u.jsx(r("GeoGlimmer.react"), {
                    height: 240,
                    shape: "rectangle",
                    width: "100%",
                    loggingName: i.id,
                  }),
                  name: i.id,
                  children: u.jsx(m, {
                    campaignName: n.campaign_name,
                    crmAccountTitle: n.crm_account_title,
                    crmAppTitle: n.crm_app_title,
                    messagesSummary: n.messages_summary,
                  }),
                }),
              })
            : null,
          u.jsx(r("GeoButton.react"), {
            disabledMessage: g ? null : s._(/*BTDS*/ ""),
            isDisabled: !g,
            label: y,
            onClick: h,
            variant: "primary",
          }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
