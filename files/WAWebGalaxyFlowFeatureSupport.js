__d(
  "WAWebGalaxyFlowFeatureSupport",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebPrimaryFeaturesModel",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 3;
    function u(e, t) {
      return (
        (t == null ? void 0 : t.type) ===
          o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE ||
        e.wa_flow_response_params != null ||
        (e.flow_message_version != null && +e.flow_message_version >= s)
      );
    }
    function c(t) {
      if (t == null) return null;
      try {
        return JSON.parse(t);
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to parse button params JSON: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    function d(e) {
      if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
        var t,
          n =
            e == null || (t = e.interactivePayload) == null
              ? void 0
              : t.buttons;
        if (n != null && n.length > 0) {
          var a;
          return (a = n.find(function (e) {
            return (
              e.name === r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
            );
          })) == null
            ? void 0
            : a.buttonParamsJson;
        }
      }
      if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) {
        var i;
        return e == null || (i = e.interactivePayload) == null
          ? void 0
          : i.buttonParamsJson;
      }
      return null;
    }
    function m(e, t) {
      var n,
        r = o("WAWebABProps")
          .getABPropConfigValue(
            "enable_futureproof_galaxy_flow_message_for_business_numbers",
          )
          .split(",");
      if (r.length === 0) return !1;
      if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) {
        var a = t == null ? o("WAWebMsgGetters").getSender(e) : t.from;
        if (a) {
          var i = o("WAWebLidMigrationUtils").toPn(a);
          i && (n = o("WAWebWidFactory").asUserWidOrThrow(i).user);
        }
        if (n != null) return r.includes(n);
      }
      if (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) {
        var l = e == null ? void 0 : e.to;
        if (l) {
          var s = o("WAWebLidMigrationUtils").toPn(l);
          s && (n = o("WAWebWidFactory").asUserWidOrThrow(s).user);
        }
        if (n != null) return r.includes(n);
      }
      return !1;
    }
    function p(e, t, n) {
      if (!o("WAWebABProps").getABPropConfigValue("flows_wa_web") || m(e, n))
        return !1;
      var r = n != null ? n.galaxyFlowDisabled !== void 0 : !1;
      if (
        !r &&
        !o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .isGalaxyFlowCompanionSyncSupported
      )
        return !1;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        t != null
      )
        return u({ flow_message_version: t }, e);
      if (!_(e)) return !1;
      var a = d(e),
        i = c(a);
      return i == null ? !1 : u(i, e);
    }
    function _(e) {
      return (
        (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW
      );
    }
    l.isFlowSupported = p;
  },
  98,
);
