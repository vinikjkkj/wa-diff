__d(
  "WAWebHatchReadinessDebug",
  [
    "WAWebABPropsCache",
    "WAWebBuildConstants",
    "WAWebPrimaryFeaturesModel",
    "WAWebProtobufsAICommon.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = [
        "ai_hatch_integration_enabled",
        "ai_hatch_approval_notification_enabled",
        "ai_hatch_connectors_enabled",
        "ai_hatch_secure_credentials_enabled",
        "ai_hatch_browser_enabled",
        "ai_hatch_response_ux_parity_enabled",
      ],
      u = ["ai_hatch_approval_notification_enabled"],
      c = [
        {
          capability: (e = o("WAWebProtobufsAICommon.pb"))
            .BotCapabilityMetadata$BotCapabilityType
            .HATCH_NOTIFICATION_METADATA_EVENT_ENABLED,
          label: "approval notifications",
          prop: "ai_hatch_approval_notification_enabled",
          primaryFeature: "ai_hatch_approval_notification_enabled",
          offVerdict: null,
        },
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .HATCH_CONNECTOR_ACTION_CARD_ENABLED,
          label: "connector card",
          prop: "ai_hatch_connectors_enabled",
          primaryFeature: null,
          offVerdict: {
            code: "connector_cards_off",
            text: "Connector cards are off",
          },
        },
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .HATCH_SECURE_CREDENTIAL_CARD_ENABLED,
          label: "credential card",
          prop: "ai_hatch_secure_credentials_enabled",
          primaryFeature: null,
          offVerdict: {
            code: "credential_cards_off",
            text: "Credential cards are off",
          },
        },
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .HATCH_BROWSER_TASK_CARD_ENABLED,
          label: "browser task card",
          prop: "ai_hatch_browser_enabled",
          primaryFeature: null,
          offVerdict: {
            code: "browser_task_cards_off",
            text: "Browser task cards are off",
          },
        },
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .AI_MUSE_JARVIS_SCHEMA_ENABLED,
          label: "Muse Jarvis schema",
          prop: "ai_hatch_response_ux_parity_enabled",
          primaryFeature: null,
          offVerdict: null,
        },
      ],
      d = [
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .HATCH_ARTIFACT_CARD_ENABLED,
          label: "Space card",
        },
      ],
      m =
        "WA Web never declares 79: type Space prompts on your phone; a Web message turns Space cards off until your phone sends its next Muse message.",
      p = {
        url_override: "URL override",
        local_override: "local override",
        server: "server",
        default: "default",
      },
      _ = [C, b, v, S, R];
    function f(e) {
      var t;
      return {
        appVersion: o("WAWebBuildConstants").VERSION_STR,
        abPropsReady: (t = o("WAWebABPropsCache")).isABPropConfigsReady(),
        hatchPrimaryFeature: o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .aiHatchIntegrationEnabled,
        linkedStatus: e,
        primaryFeatures: {
          ai_hatch_approval_notification_enabled: o(
            "WAWebPrimaryFeaturesModel",
          ).PrimaryFeatures.hasFeature(
            "ai_hatch_approval_notification_enabled",
          ),
        },
        props: {
          ai_hatch_integration_enabled: t.peekABPropConfigValue(
            "ai_hatch_integration_enabled",
          ),
          ai_hatch_approval_notification_enabled: t.peekABPropConfigValue(
            "ai_hatch_approval_notification_enabled",
          ),
          ai_hatch_connectors_enabled: t.peekABPropConfigValue(
            "ai_hatch_connectors_enabled",
          ),
          ai_hatch_secure_credentials_enabled: t.peekABPropConfigValue(
            "ai_hatch_secure_credentials_enabled",
          ),
          ai_hatch_browser_enabled: t.peekABPropConfigValue(
            "ai_hatch_browser_enabled",
          ),
          ai_hatch_response_ux_parity_enabled: t.peekABPropConfigValue(
            "ai_hatch_response_ux_parity_enabled",
          ),
        },
      };
    }
    function g(e) {
      return L(e)
        ? c
            .filter(function (t) {
              var n = t.primaryFeature,
                r = t.prop;
              return E(e.props[r]) && k(e, n);
            })
            .map(function (e) {
              var t = e.capability;
              return t;
            })
        : [];
    }
    function h(e) {
      for (var t of _) {
        var n = t(e);
        if (n != null) return n;
      }
      return {
        code: "ready",
        text: "No blocker found on this browser. Your next Muse message from here asks for connector, credential and browser task cards. Space cards only come from prompts typed on your phone.",
      };
    }
    function y(e) {
      var t = h(e),
        n = g(e);
      return [
        "Muse readiness on WhatsApp Web",
        "Verdict: " + t.text,
        "",
        "App version: " + e.appVersion,
        "Muse link: " + D(e.linkedStatus),
        "",
        "Hatch gates (value, source):",
        "  primary feature ai_hatch_integration_enabled (sent by your phone): " +
          P(e.hatchPrimaryFeature),
      ]
        .concat(
          u.map(function (t) {
            return (
              "  primary feature " +
              t +
              " (sent by your phone): " +
              P(e.primaryFeatures[t])
            );
          }),
          s.map(function (t) {
            return "  " + t + ": " + $(e.props[t]);
          }),
          [
            "",
            "Card capabilities your next Muse message from this browser declares:",
          ],
          c.map(function (t) {
            return I(e, n, t);
          }),
          d.map(function (e) {
            var t = e.capability,
              n = e.label;
            return "  " + t + " " + n + ": no (WA Web never declares it)";
          }),
          [
            m,
            "",
            "Copyable summary (no phone number, JID or ids):",
            JSON.stringify(M(e, t, n)),
          ],
        )
        .join("\n");
    }
    function C(e) {
      return e.abPropsReady
        ? null
        : {
            code: "abprops_not_loaded",
            text: "WhatsApp Web has not loaded its ABProps yet, so the ABProp values below fall back to defaults (URL overrides still apply). Wait for your chats to load, then run Debug.hatchReadiness() again.",
          };
    }
    function b(e) {
      return e.hatchPrimaryFeature
        ? null
        : {
            code: "primary_feature_off",
            text: "The primary feature ai_hatch_integration_enabled is off on this browser, so WA Web treats Muse as off. Either your phone doesn't share Muse with linked devices, or a primary_features_disabled URL parameter turned it off.",
          };
    }
    function v(e) {
      var t = e.props.ai_hatch_integration_enabled;
      return E(t)
        ? null
        : {
            code: "integration_off",
            text:
              "Muse is off on this browser: ai_hatch_integration_enabled = " +
              $(t) +
              ".",
          };
    }
    function S(e) {
      var t = e.linkedStatus,
        n = t.isLinked,
        r = t.isUnlinked,
        o = t.linkedStatusState;
      return n
        ? null
        : r
          ? {
              code: "not_linked",
              text: "Muse isn't linked to this WhatsApp account yet.",
            }
          : o === "failed"
            ? {
                code: "link_check_failed",
                text: "The Muse link check failed. Open the Muse chat to retry, then run Debug.hatchReadiness() again.",
              }
            : {
                code: "link_not_loaded",
                text: "The Muse link status has not loaded yet. Open the Muse chat, then run Debug.hatchReadiness() again.",
              };
    }
    function R(e) {
      for (var t of c) {
        var n = t.offVerdict,
          r = t.prop,
          o = e.props[r];
        if (n != null && !E(o))
          return {
            code: n.code,
            text: n.text + " on this browser: " + r + " = " + $(o) + ".",
          };
      }
      return null;
    }
    function L(e) {
      return e.hatchPrimaryFeature && E(e.props.ai_hatch_integration_enabled);
    }
    function E(e) {
      return e.value === !0;
    }
    function k(e, t) {
      return t == null || e.primaryFeatures[t];
    }
    function I(e, t, n) {
      var r = n.capability,
        o = n.label,
        a = n.primaryFeature,
        i = n.prop,
        l = t.includes(r);
      return "  " + r + " " + o + ": " + P(l) + " (" + T(e, i, a) + ")";
    }
    function T(e, t, n) {
      return e.hatchPrimaryFeature
        ? E(e.props.ai_hatch_integration_enabled)
          ? n != null && !k(e, n)
            ? "primary feature " + n + " is off"
            : E(e.props[t])
              ? t + " is on"
              : t + " is off"
          : "ai_hatch_integration_enabled is off"
        : "primary feature ai_hatch_integration_enabled is off";
    }
    function D(e) {
      var t,
        n = e.status;
      return (
        x(e) +
        " (last fetch: " +
        e.linkedStatusState +
        "; channel: " +
        N(n == null ? void 0 : n.hasChannel) +
        "; paired: " +
        N(n == null ? void 0 : n.isPaired) +
        "; status: " +
        ((t = n == null ? void 0 : n.status) != null ? t : "n/a") +
        ")"
      );
    }
    function x(e) {
      return e.isLinked ? "linked" : e.isUnlinked ? "not linked" : "unknown";
    }
    function $(e) {
      return String(e.value) + " (" + p[e.source] + ")";
    }
    function P(e) {
      return e ? "yes" : "no";
    }
    function N(e) {
      return e == null ? "n/a" : P(e);
    }
    function M(e, t, n) {
      var r,
        o,
        a,
        i = e.linkedStatus.status;
      return {
        platform: "web",
        app_version: e.appVersion,
        verdict: t.code,
        abprops_ready: e.abPropsReady,
        hatch_primary_feature: e.hatchPrimaryFeature,
        link: {
          confirmed: x(e.linkedStatus),
          last_fetch: e.linkedStatus.linkedStatusState,
          has_channel:
            (r = i == null ? void 0 : i.hasChannel) != null ? r : null,
          is_paired: (o = i == null ? void 0 : i.isPaired) != null ? o : null,
          status: (a = i == null ? void 0 : i.status) != null ? a : null,
        },
        primary_features: e.primaryFeatures,
        props: e.props,
        declares: n.map(function (e) {
          return e;
        }),
      };
    }
    ((l.WEB_SPACE_CARD_NOTE = m),
      (l.collectHatchReadinessInputs = f),
      (l.getHatchDeclaredCapabilities = g),
      (l.getHatchReadinessVerdict = h),
      (l.formatHatchReadinessReport = y));
  },
  98,
);
