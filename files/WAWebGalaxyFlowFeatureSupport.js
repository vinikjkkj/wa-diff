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
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE
        ? p(e == null ? void 0 : e.to, r)
        : !1;
    }
    function p(e, t) {
      var n = e ? o("WAWebLidMigrationUtils").toPn(e) : null;
      return n == null
        ? !1
        : t.includes(o("WAWebWidFactory").asUserWidOrThrow(n).user);
    }
    function _(e) {
      var t = e.buttonParamsJson,
        n = e.interactiveType,
        a = e.to,
        i = o("WAWebABProps")
          .getABPropConfigValue(
            "enable_futureproof_galaxy_flow_message_for_business_numbers",
          )
          .split(",");
      return p(a, i) ||
        !o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .isGalaxyFlowCompanionSyncSupported ||
        n !== r("WAWebInteractiveMessageType").NATIVE_FLOW
        ? !1
        : c(t) != null;
    }
    function f(e, t, n) {
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE &&
        n == null
      ) {
        var r;
        return _({
          buttonParamsJson:
            (r = e.interactivePayload) == null ? void 0 : r.buttonParamsJson,
          interactiveType: e.interactiveType,
          to: e.to,
        });
      }
      if (m(e, n)) return !1;
      var a = n != null ? n.galaxyFlowDisabled !== void 0 : !1;
      if (
        !a &&
        !o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .isGalaxyFlowCompanionSyncSupported
      )
        return !1;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.AUTOMATED_GREETING_MESSAGE &&
        t != null
      )
        return u({ flow_message_version: t }, e);
      if (!g(e)) return !1;
      var i = d(e),
        l = c(i);
      return l == null ? !1 : u(l, e);
    }
    function g(e) {
      return (
        (e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
          e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE) &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW
      );
    }
    ((l.isFlowResponseSupportedFor = _), (l.isFlowSupported = f));
  },
  98,
);
