__d(
  "WhatsAppMarketingCampaignCustomerListPicker",
  [
    "fbt",
    "BizWebCometWhatsAppManagerAudienceSizeUtils",
    "CometPlaceholder.react",
    "ErrorBoundary.react",
    "GeoFlexbox.react",
    "GeoHeading.react",
    "GeoSearchableSelector.react",
    "MAIBAChatNavigationContext",
    "MAIBAInlinedContext",
    "MAIBALatestTurnBoundary",
    "MAIBASystemPostbackEvent",
    "SearchableEntry",
    "StaticSearchSource",
    "WAManagerCustomerListCTAButton",
    "WhatsAppMarketingCampaignCustomerListPickerListsQuery.graphql",
    "gkx",
    "intlNumUtils",
    "react",
    "react-relay",
    "useJSON",
    "useMAIBASendMessageFromInsideChat",
    "useSafeJSON",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useLayoutEffect,
      p = d.useMemo,
      _ = d.useRef,
      f = d.useState,
      g = JSON.stringify({
        action: o("MAIBASystemPostbackEvent")
          .MAIBA_CUSTOMER_LIST_CTA_OPEN_ACTION,
      }),
      h = "CA_INTEGRITY_SENSITIVE_DATA_RESTRICTION";
    function y() {
      return r("gkx")("28013") || r("gkx")("28014");
    }
    function C(e, t) {
      var n = e.approximate_count,
        r = e.approximate_count_lower_bound,
        a = e.approximate_count_upper_bound;
      return (function (e) {
        if (e === "NOT_AVAILABLE") return s._(/*BTDS*/ "");
        if (e === "BELOW_THRESHOLD")
          return t
            ? s._(/*BTDS*/ "", [
                s._param(
                  "audience size threshold",
                  o("intlNumUtils").formatNumberWithThousandDelimiters(1e3, 0),
                ),
              ])
            : s._(/*BTDS*/ "");
        if (e === "RANGE")
          return s._(/*BTDS*/ "", [
            s._param(
              "size range",
              o(
                "BizWebCometWhatsAppManagerAudienceSizeUtils",
              ).getFormattedAudienceSizeRange(n, r, a),
            ),
          ]);
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(
        o(
          "BizWebCometWhatsAppManagerAudienceSizeUtils",
        ).getAudienceSizeLabelKind(n, r, a),
      );
    }
    function b(e) {
      var t = e.attributesJson,
        n = r("useJSON")(t),
        a = r("useSafeJSON")(n.choices_json, null),
        l = p(
          function () {
            var e,
              t = Array.isArray(a)
                ? a
                : (e = a == null ? void 0 : a.choices) != null
                  ? e
                  : [];
            return t.filter(function (e) {
              return (
                e != null &&
                typeof e == "object" &&
                typeof e.audience_id == "string" &&
                e.audience_id !== "" &&
                typeof e.name == "string" &&
                e.name !== ""
              );
            });
          },
          [a],
        ),
        u = f(null),
        d = u[0],
        m = u[1],
        _ = d != null ? d : l,
        h = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        b = h.externalConversationId,
        S = o("MAIBALatestTurnBoundary").useIsInLatestTurn(),
        R = r("useMAIBASendMessageFromInsideChat")(),
        L = f(!1),
        E = L[0],
        k = L[1],
        I = f(null),
        T = I[0],
        D = I[1],
        x = f(null),
        $ = x[0],
        P = x[1],
        N = y(),
        M = p(
          function () {
            return new (r("StaticSearchSource"))(
              _.map(function (e) {
                return new (r("SearchableEntry"))({
                  auxiliaryData: e,
                  subtitle: C(e, N),
                  title: e.name,
                  uniqueID: e.audience_id,
                });
              }),
            );
          },
          [_, N],
        );
      if (l.length === 0 || b == null) return null;
      var w = E || T === b || !S,
        A = function (t) {
          if (!w) {
            var e = t.getAuxiliaryData();
            (P(t),
              k(!0),
              R({
                externalConversationId: b,
                hideUserMessage: !0,
                isSentFromOutOfChat: !1,
                message: o(
                  "MAIBASystemPostbackEvent",
                ).buildMAIBAMarketingCustomerListSelectedPostback(
                  e.audience_id,
                  e.name,
                ),
                originComponent: "WhatsAppMarketingCampaignCustomerListPicker",
              }));
          }
        },
        F = s._(/*BTDS*/ ""),
        O = s._(/*BTDS*/ ""),
        B = s._(/*BTDS*/ ""),
        W = s._(/*BTDS*/ "");
      return c.jsxs(r("GeoFlexbox.react"), {
        direction: "column",
        rowGap: 4,
        children: [
          S
            ? c.jsx(r("ErrorBoundary.react"), {
                fallback: function () {
                  return c.jsx(r("GeoFlexbox.react"), {});
                },
                children: c.jsx(r("CometPlaceholder.react"), {
                  fallback: null,
                  name: i.id,
                  children: c.jsx(v, { onLoad: m }),
                }),
              })
            : null,
          c.jsxs(r("GeoFlexbox.react"), {
            alignItems: "center",
            direction: "row",
            justifyContent: "space-between",
            children: [
              c.jsx(r("GeoHeading.react"), {
                display: "inline",
                level: 4,
                children: F,
              }),
              c.jsx(r("WAManagerCustomerListCTAButton"), {
                attributesJson: g,
                isDisabled: w,
                onCustomerListSelected: D,
                placement: "customer_list_picker",
              }),
            ],
          }),
          c.jsx(r("GeoSearchableSelector.react"), {
            emptySearchResultsContent: W,
            isDisabled: w,
            isLabelHidden: !0,
            label: F,
            onChange: A,
            placeholder: O,
            searchPlaceholder: B,
            searchSource: M,
            value: $,
          }),
        ],
      });
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      var t = e.onLoad,
        n = p(function () {
          var e, t;
          return (e =
            (t = o("MAIBAInlinedContext").getInlinedContext()) == null
              ? void 0
              : t.waba_id) != null
            ? e
            : null;
        }, []);
      return n == null || n === "" ? null : c.jsx(S, { onLoad: t, wabaId: n });
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(t) {
      var r = t.onLoad,
        a = t.wabaId,
        i = o("react-relay").useLazyLoadQuery(
          e !== void 0
            ? e
            : (e = n(
                "WhatsAppMarketingCampaignCustomerListPickerListsQuery.graphql",
              )),
          { wabaId: a },
          { fetchPolicy: "store-or-network" },
        ),
        l = _(!1);
      return (
        m(
          function () {
            var e, t;
            if (!l.current) {
              var n =
                  (e =
                    (t = i.whatsAppBusinessAccount) == null ||
                    (t = t.default_subscriber_pool_subscriber_lists) == null
                      ? void 0
                      : t.nodes) != null
                    ? e
                    : [],
                o = [];
              for (var a of n) {
                var s, u, c;
                a.id == null ||
                  a.id === "" ||
                  a.name == null ||
                  a.name === "" ||
                  ((s = a.operation_status) == null
                    ? void 0
                    : s.status_code) === h ||
                  o.push({
                    approximate_count: a.approximate_count,
                    approximate_count_lower_bound:
                      (u = a.audience_size_range) == null
                        ? void 0
                        : u.lower_bound,
                    approximate_count_upper_bound:
                      (c = a.audience_size_range) == null
                        ? void 0
                        : c.upper_bound,
                    audience_id: a.id,
                    name: a.name,
                  });
              }
              o.length !== 0 && ((l.current = !0), r(o));
            }
          },
          [i, r],
        ),
        null
      );
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = b));
  },
  226,
);
