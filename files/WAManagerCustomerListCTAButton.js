__d(
  "WAManagerCustomerListCTAButton",
  [
    "fbt",
    "AdsHelpTrayUILoggerStoreUtils",
    "GeoBaseText.react",
    "GeoButton.react",
    "GeoLink.react",
    "MAIBAChatNavigationContext",
    "MAIBALatestTurnBoundary",
    "MAIBASystemPostbackEvent",
    "geoMargin",
    "react",
    "useJSON",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useEffectEvent,
      _ = c.useMemo,
      f = c.useRef,
      g = c.useState,
      h = "maiba-wa-manager-customer-list-cta",
      y = "wa-manager-customer-list",
      C = "Upload customer list",
      b = "wa-manager-customer-list-picker-upload",
      v = "Create";
    function S(e) {
      var t = e.attributesJson,
        n = e.isDisabled,
        a = n === void 0 ? !1 : n,
        i = e.onCustomerListSelected,
        l = e.placement,
        c = l === void 0 ? "standalone" : l,
        S = r("useJSON")(t),
        R = o("MAIBAChatNavigationContext").useMAIBAChatNavigationContext(),
        L = R.externalConversationId,
        E = o("MAIBALatestTurnBoundary").useIsInLatestTurn(),
        k = g(null),
        I = k[0],
        T = k[1],
        D = a || (L != null && I === L) || !E,
        x =
          S.action ===
          o("MAIBASystemPostbackEvent").MAIBA_CUSTOMER_LIST_CTA_OPEN_ACTION
            ? o("MAIBASystemPostbackEvent").MAIBA_CUSTOMER_LIST_CTA_OPEN_ACTION
            : null,
        $ = c === "customer_list_picker",
        P = s._(/*BTDS*/ ""),
        N = x != null,
        M = _(
          function () {
            return {
              action: x != null ? x : "",
              "cta-type": $ ? b : y,
              label: $ ? v : C,
            };
          },
          [x, $],
        ),
        w = p(function (e) {
          var t = e.detail;
          t == null ||
            L == null ||
            L === "" ||
            t.externalConversationId !== L ||
            typeof t.message != "string" ||
            !t.message.startsWith(
              o("MAIBASystemPostbackEvent")
                .MAIBA_MARKETING_CUSTOMER_LIST_SELECTED_MESSAGE_PREFIX + " ",
            ) ||
            (T(L), i == null || i(L));
        });
      m(function () {
        var e = o("MAIBASystemPostbackEvent").observeMAIBASystemPostbacks(
            function (e) {
              return w({ detail: e });
            },
          ),
          t = function (t) {
            return w(t);
          };
        return (
          window.addEventListener(
            o("MAIBASystemPostbackEvent").MAIBA_SYSTEM_POSTBACK_EVENT_NAME,
            t,
          ),
          function () {
            (e(),
              window.removeEventListener(
                o("MAIBASystemPostbackEvent").MAIBA_SYSTEM_POSTBACK_EVENT_NAME,
                t,
              ));
          }
        );
      }, []);
      var A = d(
          function () {
            x == null ||
              D ||
              (o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_click",
                M,
              ),
              window.dispatchEvent(
                new CustomEvent(h, {
                  detail: { action: x, externalConversationId: L },
                }),
              ));
          },
          [x, L, D, M],
        ),
        F = f(!1);
      if (
        (m(
          function () {
            F.current ||
              !N ||
              D ||
              ((F.current = !0),
              o("AdsHelpTrayUILoggerStoreUtils").logHelpTrayEvents(
                "help_tray_ads_ai_non_os_cta_impression",
                M,
              ));
          },
          [D, N, M],
        ),
        x == null)
      )
        return null;
      if ($) {
        var O = s._(/*BTDS*/ "");
        return D
          ? u.jsx(r("GeoBaseText.react"), {
              color: "value",
              isDisabled: !0,
              size: "value",
              children: O,
            })
          : u.jsx(r("GeoLink.react"), { onClick: A, children: O });
      }
      return u.jsx(r("GeoButton.react"), {
        isDisabled: D,
        label: P,
        onClick: A,
        variant: "primary",
        xstyle: [r("geoMargin").end8, r("geoMargin").bottom8],
      });
    }
    ((S.displayName = S.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
