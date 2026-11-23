__d(
  "StartConversationsAutomatedGreetingMessageCTASection",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsFinServNuxPlacementUtils",
    "AdsIntelligentBlueTip.react",
    "AdsInterfacesLogger",
    "AdsMessengerErrorSpecUtils",
    "AdsWhatsAppNumberUtils",
    "CTWAAGMCTADefaultingLogger",
    "CTWAAGMCTADefaultingUtils",
    "ClickToMessageCTDFeatureGating",
    "GeoIcon.react",
    "GeoMediaItem.react",
    "GeoSelector.react",
    "GeoSelectorItem.react",
    "GeoTextInput.react",
    "GeoTextPairing.react",
    "adsMessengerDataModelClone",
    "adsMessengerDataModelGetCTWAAgmCtaType",
    "adsMessengerDataModelGetCTWAAgmURL",
    "getByPath",
    "meta-brand-arrow-up-diagonal-right-square-filled-16",
    "meta-brand-circle-slash-filled-16",
    "meta-brand-phone-handset-filled-16",
    "meta-brand-storefront-filled-16",
    "react",
    "setByPath",
    "stylex",
    "useAGMCTADefaulting",
    "useDebouncedAndOnCleanup",
    "useGeoTheme",
    "useVisibilityObserver",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useEffectEvent,
      _ = d.useLayoutEffect,
      f = d.useRef,
      g = d.useState,
      h = {
        waNumberSection: {
          marginTop: "x14vqqas",
          paddingTop: "x1y1aw1k",
          paddingInlineStart: "xe2zdcy",
          paddingBottom: "xwib8y2",
          $$css: !0,
        },
        visitWebsiteSection: { marginTop: "x14vqqas", $$css: !0 },
      },
      y = 750,
      C = s._(/*BTDS*/ ""),
      b = s._(/*BTDS*/ ""),
      v = "ctwa_fmx_welcome_message_cta_tool_tip_drop_down_component";
    function S(e) {
      var t,
        n,
        a,
        i,
        l,
        u = e.adgroupID,
        d = e.destinationType,
        h = e.errorSpec,
        C = e.headlineText,
        b = e.isAddAutomatedGreetingMessageCTAClick,
        S = e.onComponentReady,
        L = e.onWelcomeMessageJSONChange,
        I = e.page,
        T = e.pageWhatsAppNumberID,
        D = e.primaryText,
        x = e.shouldDefaultCTA,
        $ = x === void 0 ? !1 : x,
        P = e.welcomeMessageJSON,
        N =
          d === r("AdCampaignDestination").INSTAGRAM_DIRECT ||
          d === r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        M = T != null ? T : I == null ? void 0 : I.page_whatsapp_number_id,
        w =
          !N && I
            ? (t = o("AdsWhatsAppNumberUtils").getWhatsappInfoForNumber(
                I,
                M,
              )) == null
              ? void 0
              : t.is_calling_enabled
            : !1,
        A =
          !N &&
          ((n = I == null ? void 0 : I.has_whatsapp_catalog) != null ? n : !1),
        F = r("adsMessengerDataModelGetCTWAAgmCtaType")(P),
        O = r("adsMessengerDataModelGetCTWAAgmURL")(P),
        B = g(null),
        W = B[0],
        q = B[1],
        U = g(null),
        V = U[0],
        H = U[1],
        G = ["text_format", "message", "automated_greeting_message_cta"],
        z = r("getByPath")(
          P,
          [].concat(G, [
            o("CTWAAGMCTADefaultingUtils").AGM_CTA_DEFAULT_SOURCE_FIELD,
          ]),
        ),
        j = r("getByPath")(
          P,
          [].concat(G, [
            o("CTWAAGMCTADefaultingUtils").AGM_CTA_DEFAULT_URL_FIELD,
          ]),
        ),
        K = o("CTWAAGMCTADefaultingUtils").isAGMCTAStillDefaulted(F, O, z, j),
        Q = r("useAGMCTADefaulting")({
          adAccountVertical: I == null ? void 0 : I.page_first_vertical,
          diagnostics: {
            adgroupIDs: u != null ? [u] : [],
            existingCTAURL: O,
            existingDefaultURL: j,
            existingSource: z,
            hasManualOverride: W != null || V != null,
            surface: "greeting_dialog",
          },
          existingCTAType: F,
          headlineText: C,
          isSurfaceEligible: $ && d === r("AdCampaignDestination").WHATSAPP,
          page: I,
          pageWhatsAppNumberID: T,
          primaryText: D,
        }),
        X =
          F == null &&
          Q == null &&
          b === !0 &&
          o("ClickToMessageCTDFeatureGating").enableCTDWelcomeMessageCTA(d, !0),
        Y = Q == null ? void 0 : Q.ctaType,
        J = (a = Q == null ? void 0 : Q.url) != null ? a : null,
        Z = Q == null ? void 0 : Q.source,
        ee =
          W == null &&
          V == null &&
          Q != null &&
          ((F == null && z == null) || K),
        te =
          Q != null &&
          o("CTWAAGMCTADefaultingUtils").isAGMCTADefaultUpToDate(F, O, z, Q),
        ne = p(function (e, t, n) {
          var a = r("adsMessengerDataModelClone")(P);
          if (X) r("setByPath")(a, [].concat(G, ["type"]), "url");
          else if (e != null && n != null) {
            var i;
            ((i = r("setByPath"))(a, [].concat(G, ["type"]), e),
              i(a, [].concat(G, ["url"]), t),
              i(
                a,
                [].concat(G, [
                  o("CTWAAGMCTADefaultingUtils").AGM_CTA_DEFAULT_SOURCE_FIELD,
                ]),
                n,
              ),
              i(
                a,
                [].concat(G, [
                  o("CTWAAGMCTADefaultingUtils").AGM_CTA_DEFAULT_URL_FIELD,
                ]),
                t,
              ));
          }
          (L(a),
            !X &&
              Q != null &&
              o("CTWAAGMCTADefaultingLogger").logAGMCTADefaultApplied(
                u,
                Q,
                "greeting_dialog",
              ));
        });
      m(
        function () {
          (X || (ee && !te)) && ne(Y, J, Z);
        },
        [X, ee, te, Y, J, Z],
      );
      var re =
          (i = W != null ? W : ee ? Y : F) != null ? i : X ? "url" : "none",
        oe = function (t) {
          z != null &&
            (r("setByPath")(
              t,
              [].concat(G, [
                o("CTWAAGMCTADefaultingUtils").AGM_CTA_DEFAULT_SOURCE_FIELD,
              ]),
              null,
            ),
            r("setByPath")(
              t,
              [].concat(G, [
                o("CTWAAGMCTADefaultingUtils").AGM_CTA_DEFAULT_URL_FIELD,
              ]),
              null,
            ));
        },
        ae = f(0),
        ie = f({
          welcomeMessageJSON: P,
          cta: re,
          adgroupID: u,
          onWelcomeMessageJSONChange: L,
        });
      _(
        function () {
          ((ie.current.cta !== re || ie.current.adgroupID !== u) &&
            (ae.current += 1),
            (ie.current = {
              welcomeMessageJSON: P,
              cta: re,
              adgroupID: u,
              onWelcomeMessageJSONChange: L,
            }));
        },
        [P, re, u, L],
      );
      var le = function (t, n) {
          var e = ie.current;
          if (!(n !== ae.current || e.cta !== "url" || e.adgroupID !== u)) {
            var o = r("adsMessengerDataModelClone")(e.welcomeMessageJSON);
            (oe(o),
              r("setByPath")(o, ["user_edit"], !0),
              r("setByPath")(o, [].concat(G, ["type"]), "url"),
              r("setByPath")(o, [].concat(G, ["url"]), t.trim()),
              e.onWelcomeMessageJSONChange(o));
          }
        },
        se = (l = V != null ? V : ee ? J : O) != null ? l : "",
        ue = r("useDebouncedAndOnCleanup")(le, y),
        ce =
          $ &&
          d === r("AdCampaignDestination").WHATSAPP &&
          K &&
          W == null &&
          V == null,
        de = function (t, n) {
          ce &&
            o("CTWAAGMCTADefaultingLogger").logAGMCTAManualOverride(u, z, t, n);
        },
        me = function (t) {
          if ((de("url_edit", "url"), H(t), z != null)) {
            var e = r("adsMessengerDataModelClone")(P);
            (oe(e), L(e));
          }
          ue(t, ae.current);
        },
        pe = f(null),
        _e = function (t) {
          var e;
          (de("cta_selection", t), t !== re && (ae.current += 1), q(t));
          var n = r("adsMessengerDataModelClone")(P);
          if ((oe(n), F === t)) {
            z != null && L(n);
            return;
          }
          (r("setByPath")(n, ["user_edit"], !0),
            r("setByPath")(n, [].concat(G, ["type"]), t),
            r("setByPath")(n, [].concat(G, ["url"]), ""),
            H(""),
            L(n),
            r("AdsInterfacesLogger").log({
              eventName: "ctwa_automatic_greeting_message_cta_change",
              data:
                ((e = {}),
                (e.adgroup_id = u),
                (e.campaign_destination_type = d),
                (e.status = "cta_type: " + String(t)),
                e),
            }));
        },
        fe = function (t) {
          t === re && ce && _e(t);
        },
        ge = function () {
          var e;
          (e = pe.current) == null || e.show();
        },
        he = g(!1),
        ye = he[0],
        Ce = he[1],
        be = r("useVisibilityObserver")({
          onVisible: function () {
            var e;
            ye ||
              (Ce(!0),
              r("AdsInterfacesLogger").log({
                eventName: "ctwa_automatic_greeting_message_impression",
                data:
                  ((e = {}),
                  (e.adgroup_id = u),
                  (e.campaign_destination_type = d),
                  e),
              }));
          },
        });
      return (
        _(
          function () {
            S && pe.current && S(ge);
          },
          [S],
        ),
        c.jsxs("div", {
          id: v,
          ref: be,
          children: [
            c.jsxs(r("GeoSelector.react"), {
              imperativeRef: pe,
              label: s._(/*BTDS*/ ""),
              onChange: _e,
              value: re,
              children: [
                w === !0
                  ? c.jsx(r("GeoSelectorItem.react"), {
                      description: s._(/*BTDS*/ ""),
                      label: s._(/*BTDS*/ ""),
                      media: c.jsx("div", {
                        className:
                          "x1l1zz8g xjwep3j x1t39747 x1wcsgtt x1pczhz8",
                        children: c.jsx(r("GeoMediaItem.react"), {
                          fit: "contain",
                          media: c.jsx(r("GeoIcon.react"), {
                            icon: o("meta-brand-phone-handset-filled-16")
                              .metaBrandPhoneHandsetPhoneFilled16,
                          }),
                          ratio: "square",
                          size: 24,
                        }),
                      }),
                      onSelected: fe,
                      value: "call",
                    })
                  : null,
                A === !0
                  ? c.jsx(r("GeoSelectorItem.react"), {
                      description: s._(/*BTDS*/ ""),
                      label: s._(/*BTDS*/ ""),
                      media: c.jsx("div", {
                        className:
                          "x1l1zz8g xjwep3j x1t39747 x1wcsgtt x1pczhz8",
                        children: c.jsx(r("GeoMediaItem.react"), {
                          fit: "contain",
                          media: c.jsx(r("GeoIcon.react"), {
                            icon: o("meta-brand-storefront-filled-16")
                              .metaBrandStorefrontFilled16,
                          }),
                          ratio: "square",
                          size: 24,
                        }),
                      }),
                      onSelected: fe,
                      value: "catalog",
                    })
                  : null,
                c.jsx(r("GeoSelectorItem.react"), {
                  description: s._(/*BTDS*/ ""),
                  label: s._(/*BTDS*/ ""),
                  media: c.jsx("div", {
                    className: "x1l1zz8g xjwep3j x1t39747 x1wcsgtt x1pczhz8",
                    children: c.jsx(r("GeoMediaItem.react"), {
                      fit: "contain",
                      media: c.jsx(r("GeoIcon.react"), {
                        icon: o(
                          "meta-brand-arrow-up-diagonal-right-square-filled-16",
                        )
                          .metaBrandArrowUpDiagonalRightSquareShareExternalFilled16,
                      }),
                      ratio: "square",
                      size: 24,
                    }),
                  }),
                  onSelected: fe,
                  value: "url",
                }),
                c.jsx(r("GeoSelectorItem.react"), {
                  description: " ",
                  label: s._(/*BTDS*/ ""),
                  media: c.jsx("div", {
                    className: "x1l1zz8g xjwep3j x1t39747 x1wcsgtt x1pczhz8",
                    children: c.jsx(r("GeoMediaItem.react"), {
                      fit: "contain",
                      media: c.jsx(r("GeoIcon.react"), {
                        icon: o("meta-brand-circle-slash-filled-16")
                          .metaBrandCircleSlashQuitFilled16,
                      }),
                      ratio: "square",
                      size: 24,
                    }),
                  }),
                  onSelected: fe,
                  value: "none",
                }),
              ],
            }),
            c.jsx(k, {}),
            !N &&
              re === "call" &&
              c.jsx(R, { page: I, pageWhatsAppNumberID: M }),
            re === "url" &&
              c.jsx(E, {
                adgroupID: u,
                destinationType: d,
                errorSpec: h,
                isDefaulted: (ee || K) && W == null && V == null,
                onChange: me,
                url: se,
              }),
          ],
        })
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(t) {
      var n = t.page,
        a = t.pageWhatsAppNumberID,
        i = r("useGeoTheme")(),
        l = i.selectBorderRadius,
        s = i.selectStaticBackgroundColor;
      if (n == null || a == null) return null;
      var u = o("AdsWhatsAppNumberUtils").getWhatsAppNumberFormatted(n, a);
      return c.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            h.waNumberSection,
            s({ surface: "wash" }),
            l({ context: "addon" }),
          ),
          {
            children: c.jsx(r("GeoTextPairing.react"), {
              description: u,
              heading: C,
              size: "header4",
            }),
          },
        ),
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    var L =
      /^https:\/\/[a-zA-Z0-9][-a-zA-Z0-9]*(\.[a-zA-Z0-9][-a-zA-Z0-9]*)+(:\d+)?(\/[^\s]*)?$/;
    function E(e) {
      var t = e.adgroupID,
        n = e.destinationType,
        a = e.errorSpec,
        i = e.isDefaulted,
        l = e.onChange,
        s = e.url,
        u = o(
          "AdsMessengerErrorSpecUtils",
        ).getAutomatedGreetingMessageCTAURLErrorMessage(a, s),
        d = function () {
          var e,
            o = (e = s == null ? void 0 : s.trim()) != null ? e : "",
            a = null;
          o === ""
            ? (a = "empty_url")
            : o.startsWith("https://")
              ? L.test(o) || (a = "invalid_url")
              : (a = "missing_https");
          var l = JSON.stringify({ validation_stage: "blur", is_defaulted: i });
          if (a != null) {
            var u;
            r("AdsInterfacesLogger").log({
              eventName: "ctwa_agm_website_url_error",
              data:
                ((u = {}),
                (u.adgroup_id = t),
                (u.campaign_destination_type = n),
                (u.status = a),
                (u.subsequent_data = l),
                u),
            });
          } else if (o !== "") {
            var c;
            r("AdsInterfacesLogger").log({
              eventName: "ctwa_agm_website_url_success",
              data:
                ((c = {}),
                (c.adgroup_id = t),
                (c.campaign_destination_type = n),
                (c.subsequent_data = l),
                c),
            });
          }
        };
      return c.jsx(r("GeoTextInput.react"), {
        errorMessage: u,
        label: b,
        onBlur: d,
        onChange: l,
        placeholder: "https://your-website.com/your-page",
        value: s,
        xstyle: h.visitWebsiteSection,
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return c.jsx(r("AdsIntelligentBlueTip.react"), {
        contextNodeID: v,
        messageID: "ctwa_fmx_welcome_message_cta_tool_tip",
        offsetX: o("AdsFinServNuxPlacementUtils").getOffsetX() + 300,
        position: "below",
        validateCondition: function () {
          return !0;
        },
      });
    }
    ((k.displayName = k.name + " [from " + i.id + "]"), (l.default = S));
  },
  226,
);
