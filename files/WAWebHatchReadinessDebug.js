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
      ],
      u = [
        {
          capability: (e = o("WAWebProtobufsAICommon.pb"))
            .BotCapabilityMetadata$BotCapabilityType
            .HATCH_NOTIFICATION_METADATA_EVENT_ENABLED,
          label: "approval notifications",
          prop: "ai_hatch_approval_notification_enabled",
          offVerdict: null,
        },
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .HATCH_CONNECTOR_ACTION_CARD_ENABLED,
          label: "connector card",
          prop: "ai_hatch_connectors_enabled",
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
          offVerdict: {
            code: "browser_task_cards_off",
            text: "Browser task cards are off",
          },
        },
      ],
      c = [
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .HATCH_ARTIFACT_CARD_ENABLED,
          label: "Space card",
        },
        {
          capability:
            e.BotCapabilityMetadata$BotCapabilityType
              .AI_MUSE_JARVIS_SCHEMA_ENABLED,
          label: "Muse Jarvis schema",
        },
      ],
      d =
        "WA Web never declares 79: type Space prompts on your phone; a Web message turns Space cards off until your phone sends its next Muse message.",
      m = {
        url_override: "URL override",
        local_override: "local override",
        server: "server",
        default: "default",
      },
      p = [y, C, b, v, S];
    function _(e) {
      var t;
      return {
        appVersion: o("WAWebBuildConstants").VERSION_STR,
        abPropsReady: (t = o("WAWebABPropsCache")).isABPropConfigsReady(),
        hatchPrimaryFeature: o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .aiHatchIntegrationEnabled,
        linkedStatus: e,
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
        },
      };
    }
    function f(e) {
      return R(e)
        ? u
            .filter(function (t) {
              var n = t.prop;
              return L(e.props[n]);
            })
            .map(function (e) {
              var t = e.capability;
              return t;
            })
        : [];
    }
    function g(e) {
      for (var t of p) {
        var n = t(e);
        if (n != null) return n;
      }
      return {
        code: "ready",
        text: "No blocker found on this browser. Your next Muse message from here asks for connector, credential and browser task cards. Space cards only come from prompts typed on your phone.",
      };
    }
    function h(e) {
      var t = g(e),
        n = f(e);
      return [
        "Muse readiness on WhatsApp Web",
        "Verdict: " + t.text,
        "",
        "App version: " + e.appVersion,
        "Muse link: " + I(e.linkedStatus),
        "",
        "Hatch gates (value, source):",
        "  primary feature ai_hatch_integration_enabled (sent by your phone): " +
          x(e.hatchPrimaryFeature),
      ]
        .concat(
          s.map(function (t) {
            return "  " + t + ": " + D(e.props[t]);
          }),
          [
            "",
            "Card capabilities your next Muse message from this browser declares:",
          ],
          u.map(function (t) {
            return E(e, n, t);
          }),
          c.map(function (e) {
            var t = e.capability,
              n = e.label;
            return "  " + t + " " + n + ": no (WA Web never declares it)";
          }),
          [
            d,
            "",
            "Copyable summary (no phone number, JID or ids):",
            JSON.stringify(P(e, t, n)),
          ],
        )
        .join("\n");
    }
    function y(e) {
      return e.abPropsReady
        ? null
        : {
            code: "abprops_not_loaded",
            text: "WhatsApp Web has not loaded its ABProps yet, so the ABProp values below fall back to defaults (URL overrides still apply). Wait for your chats to load, then run Debug.hatchReadiness() again.",
          };
    }
    function C(e) {
      return e.hatchPrimaryFeature
        ? null
        : {
            code: "primary_feature_off",
            text: "The primary feature ai_hatch_integration_enabled is off on this browser, so WA Web treats Muse as off. Either your phone doesn't share Muse with linked devices, or a primary_features_disabled URL parameter turned it off.",
          };
    }
    function b(e) {
      var t = e.props.ai_hatch_integration_enabled;
      return L(t)
        ? null
        : {
            code: "integration_off",
            text:
              "Muse is off on this browser: ai_hatch_integration_enabled = " +
              D(t) +
              ".",
          };
    }
    function v(e) {
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
    function S(e) {
      for (var t of u) {
        var n = t.offVerdict,
          r = t.prop,
          o = e.props[r];
        if (n != null && !L(o))
          return {
            code: n.code,
            text: n.text + " on this browser: " + r + " = " + D(o) + ".",
          };
      }
      return null;
    }
    function R(e) {
      return e.hatchPrimaryFeature && L(e.props.ai_hatch_integration_enabled);
    }
    function L(e) {
      return e.value === !0;
    }
    function E(e, t, n) {
      var r = n.capability,
        o = n.label,
        a = n.prop,
        i = t.includes(r);
      return "  " + r + " " + o + ": " + x(i) + " (" + k(e, a) + ")";
    }
    function k(e, t) {
      return e.hatchPrimaryFeature
        ? L(e.props.ai_hatch_integration_enabled)
          ? L(e.props[t])
            ? t + " is on"
            : t + " is off"
          : "ai_hatch_integration_enabled is off"
        : "primary feature ai_hatch_integration_enabled is off";
    }
    function I(e) {
      var t,
        n = e.status;
      return (
        T(e) +
        " (last fetch: " +
        e.linkedStatusState +
        "; channel: " +
        $(n == null ? void 0 : n.hasChannel) +
        "; paired: " +
        $(n == null ? void 0 : n.isPaired) +
        "; status: " +
        ((t = n == null ? void 0 : n.status) != null ? t : "n/a") +
        ")"
      );
    }
    function T(e) {
      return e.isLinked ? "linked" : e.isUnlinked ? "not linked" : "unknown";
    }
    function D(e) {
      return String(e.value) + " (" + m[e.source] + ")";
    }
    function x(e) {
      return e ? "yes" : "no";
    }
    function $(e) {
      return e == null ? "n/a" : x(e);
    }
    function P(e, t, n) {
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
          confirmed: T(e.linkedStatus),
          last_fetch: e.linkedStatus.linkedStatusState,
          has_channel:
            (r = i == null ? void 0 : i.hasChannel) != null ? r : null,
          is_paired: (o = i == null ? void 0 : i.isPaired) != null ? o : null,
          status: (a = i == null ? void 0 : i.status) != null ? a : null,
        },
        props: e.props,
        declares: n.map(function (e) {
          return e;
        }),
      };
    }
    ((l.WEB_SPACE_CARD_NOTE = d),
      (l.collectHatchReadinessInputs = _),
      (l.getHatchDeclaredCapabilities = f),
      (l.getHatchReadinessVerdict = g),
      (l.formatHatchReadinessReport = h));
  },
  98,
);
