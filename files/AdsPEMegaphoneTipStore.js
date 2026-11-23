__d(
  "AdsPEMegaphoneTipStore",
  [
    "AYMTClientSideLogging",
    "AYMTTipsLoader",
    "AYMTV3SequenceChangedActionFlux",
    "AdFLEXAccountSettingConfig",
    "AdsAccountStore",
    "AdsAymtTipLoadedDataActionFlux",
    "AdsAymtTipLoadedErrorDataActionFlux",
    "AdsDataAtom",
    "AdsInterfacesLogger",
    "AdsInterfacesLoggerUtils",
    "AdsManagerBindingMessagesConfig.experimental",
    "AdsMessagingAddMessageDataActionFlux",
    "AdsMessagingDismissMessageDataActionFlux",
    "CurrentBusinessUser",
    "DateConsts",
    "FBLogger",
    "FluxReduceStore",
    "ImmutableRecordWithV4Types",
    "ServerJsRuntimeEnvironment",
    "adsCreateStoreSelector",
    "areEqual",
    "getErrorSafe",
    "immutable",
    "isFalsey",
    "isNode",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "am_megaphone_channel_messages_rendered",
        data: ((t = {}), (t.item_count = e), t),
      });
    }
    var c = o("ImmutableRecordWithV4Types").Record({
        areTipsRendered: !1,
        messagesByID: r("immutable").Map(),
        tipsLoaded: !1,
        renderedMessageCount: 0,
        sequenceDelivery: "awaiting_payload",
        sequenceDeliveryCallback: null,
        sequenceIsGoverned: !1,
        sequencePermitGeneration: 0,
        sequencePermittedTipID: null,
        sequenceRetiredTipIDs: r("immutable").Set(),
        sequenceVersion: 0,
      }),
      d = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPEMegaphoneTipStore$p_1 = null),
            (n.$AdsPEMegaphoneTipStore$p_2 = !1),
            (n.$AdsPEMegaphoneTipStore$p_3 = null),
            (n.$AdsPEMegaphoneTipStore$p_4 = function () {
              var t = r("AdsAccountStore").getSelectedAccountID();
              if (t != null) {
                var o = {};
                o.ad_account_id = t;
                var a = r("CurrentBusinessUser").business_id;
                (a != null && (o.business_id = a.toString()),
                  (n.$AdsPEMegaphoneTipStore$p_2 = !0));
                try {
                  r("AYMTTipsLoader").loadTips(
                    o,
                    n.getChannelName(),
                    e || (e = r("AdsDataAtom")),
                  );
                } finally {
                  n.$AdsPEMegaphoneTipStore$p_2 = !1;
                }
                n.$AdsPEMegaphoneTipStore$p_3 = r(
                  "AYMTTipsLoader",
                ).getV3CycleToken(String(t));
              }
            }),
            (n.$AdsPEMegaphoneTipStore$p_6 = r("throttle")(
              n.$AdsPEMegaphoneTipStore$p_4,
              o("DateConsts").MS_PER_MIN * 5,
            )),
            (n.areTipsLoaded = r("adsCreateStoreSelector")(
              [n],
              function () {
                return n.getState().tipsLoaded;
              },
              { name: i.id },
            )),
            (n.isFinishRendered = r("adsCreateStoreSelector")(
              [n],
              function () {
                var e = Array.from(n.getMessagesByID().values());
                return !e.length || n.getState().areTipsRendered;
              },
              { name: i.id },
            )),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getInitialState = function () {
            return c();
          }),
          (a.__getActionTypes = function () {
            return [
              o("AdsAymtTipLoadedDataActionFlux").actionType,
              o("AdsAymtTipLoadedErrorDataActionFlux").actionType,
              o("AdsMessagingAddMessageDataActionFlux").actionType,
              o("AdsMessagingDismissMessageDataActionFlux").actionType,
              o("AYMTV3SequenceChangedActionFlux").actionType,
            ];
          }),
          (a.reduce = function (t, n) {
            var e = n.action,
              a = t.messagesByID,
              i = this.getChannelName();
            if (e.type === o("AYMTV3SequenceChangedActionFlux").actionType) {
              var l = e.data;
              if (l.channelName !== i || l.sequence <= t.sequenceVersion)
                return t;
              var s = l.permitGeneration === t.sequencePermitGeneration;
              return t.merge({
                sequenceDelivery: s ? t.sequenceDelivery : "awaiting_payload",
                sequenceDeliveryCallback: s ? t.sequenceDeliveryCallback : null,
                sequenceIsGoverned: l.isGoverned,
                sequencePermitGeneration: l.permitGeneration,
                sequencePermittedTipID: l.permittedTipID,
                sequenceRetiredTipIDs: t.sequenceRetiredTipIDs
                  .union(l.retiredTipIDs)
                  .subtract(l.restoredTipIDs),
                sequenceVersion: l.sequence,
              });
            }
            var u = t.sequencePermittedTipID;
            if (
              e.type === o("AdsAymtTipLoadedDataActionFlux").actionType &&
              e.data.channelName === i &&
              t.sequenceIsGoverned &&
              this.$AdsPEMegaphoneTipStore$p_1 == null
            ) {
              var c = r("AdsAccountStore").getSelectedAccountID(),
                d = c == null ? null : String(c),
                m =
                  u == null
                    ? null
                    : e.data.tips.find(function (e) {
                        return (
                          String(e.aymt_data.tip_id) === u &&
                          r("AYMTTipsLoader").getV3DecisionKind(d) ===
                            "treatment" &&
                          r("AYMTTipsLoader").isTipServable(d, i, e.aymt_data)
                        );
                      });
              if (m == null || u == null) return t;
              var p = new Map();
              this.$AdsPEMegaphoneTipStore$p_1 = p;
              var _;
              try {
                _ = this.reduce(
                  t.set("sequenceDelivery", "awaiting_message"),
                  babelHelpers.extends({}, n, {
                    action: babelHelpers.extends({}, e, {
                      data: babelHelpers.extends({}, e.data, { tips: [m] }),
                    }),
                  }),
                );
              } finally {
                this.$AdsPEMegaphoneTipStore$p_1 = null;
              }
              var f = p.get(u);
              return _.set(
                "sequenceDeliveryCallback",
                f == null ? null : f.getOnCloseCallback(),
              );
            }
            if (
              e.type === o("AdsMessagingAddMessageDataActionFlux").actionType &&
              t.sequenceIsGoverned &&
              u != null &&
              String(e.data.id) === u
            )
              return t.sequenceDelivery !== "awaiting_message" ||
                t.sequenceDeliveryCallback == null ||
                e.data.onDismiss !== t.sequenceDeliveryCallback
                ? t
                : t.merge({
                    areTipsRendered: !0,
                    messagesByID: t.messagesByID.set(e.data.id, e.data),
                    sequenceDelivery: "delivered",
                    tipsLoaded: !0,
                  });
            switch (e.type) {
              case o("AdsAymtTipLoadedDataActionFlux").actionType:
                if (e.data.channelName === i) {
                  var g = 0;
                  if (e.data.tips.length) {
                    var h = new Map();
                    (e.data.tips.forEach(function (e) {
                      var t = e.aymt_data.tip_id;
                      h.set(t, e);
                    }),
                      (g = this.setupTips(h)));
                  }
                  return t.merge({ tipsLoaded: !0, renderedMessageCount: g });
                }
                return t;
              case o("AdsAymtTipLoadedErrorDataActionFlux").actionType:
                return e.data.channelName === i
                  ? (r("FBLogger")("ads").warn(
                      "Failed to load tips in channel %s ",
                      i,
                    ),
                    t.set("tipsLoaded", !0))
                  : t;
              case o("AdsMessagingAddMessageDataActionFlux").actionType: {
                var y = e.data;
                this.hasMessage(y, a) || (a = a.set(y.id, y));
                var C = t.get("renderedMessageCount");
                return t.merge({
                  messagesByID: a,
                  tipsLoaded: !0,
                  areTipsRendered: C === a.size,
                });
              }
              case o("AdsMessagingDismissMessageDataActionFlux").actionType:
                return (
                  (a = a.delete(e.data.id)),
                  t.merge({ messagesByID: a, renderedMessageCount: a.size })
                );
              default:
                return t;
            }
          }),
          (a.$AdsPEMegaphoneTipStore$p_5 = function (t, n) {
            var e = r("AdsAccountStore").getSelectedAccountID();
            if (
              !this.getState().tipsLoaded ||
              this.$AdsPEMegaphoneTipStore$p_2 ||
              e == null ||
              r("AYMTTipsLoader").getV3PageKey() !== n
            )
              return !1;
            var o = String(e);
            if (!r("AYMTTipsLoader").governsAccount(o)) return !1;
            var a = r("AYMTTipsLoader").getV3CycleToken(o);
            return a == null ? t : a !== this.$AdsPEMegaphoneTipStore$p_3;
          }),
          (a.watchPageCycles = function () {
            var t = this,
              n = r("AYMTTipsLoader").getV3PageKey(),
              o = !0,
              a = !1,
              i = function (l) {
                !o ||
                  a ||
                  !t.$AdsPEMegaphoneTipStore$p_5(l, n) ||
                  ((a = !0),
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      ((a = !1),
                        o &&
                          t.$AdsPEMegaphoneTipStore$p_5(l, n) &&
                          t.$AdsPEMegaphoneTipStore$p_4());
                    },
                  ));
              };
            i(!0);
            var l = r("AYMTTipsLoader").subscribeToV3Decisions(function () {
              return i(!1);
            });
            return function () {
              ((o = !1), l());
            };
          }),
          (a.loadTips = function () {
            this.$AdsPEMegaphoneTipStore$p_6();
          }),
          (a.setupTips = function (t) {
            var e = this,
              n = 0;
            return (
              t.forEach(function (t, r) {
                var a = t.aymt_data,
                  i = r != null && e.renderTip(t, r);
                i && (o("AYMTClientSideLogging").logImpressionNew(a), ++n);
              }),
              n > 0 && u(n),
              n
            );
          }),
          (a.renderTip = function (t, n) {
            var e = this;
            if (!t) return !1;
            var o = t.client_side_rendering_spec,
              a = t.channel_id;
            try {
              var i;
              ((t.name === "adsmm_campaign_kpi_deprecation" ||
                t.name === "adsmm_cost_metrics_deprecation") &&
                (o.client_side_rendering_params.tip_message_severity = "info"),
                r(
                  "AdsManagerBindingMessagesConfig.experimental",
                ).BINDING_MESSAGES.includes(t.name) &&
                  (o.client_side_rendering_params.tip_is_binding = !0));
              var l = new o.client_side_rendering_class(
                o.client_side_rendering_params,
                n,
                a,
                function (n) {
                  return e.onTipClose(t, n);
                },
                function () {
                  return e.onTipReset(n);
                },
                "",
                t.aymt_data,
                t.name,
              );
              return (
                (t.client_side_renderer = l),
                l.run(),
                (i = this.$AdsPEMegaphoneTipStore$p_1) == null ||
                  i.set(String(n), l),
                !0
              );
            } catch (e) {
              var s = r("getErrorSafe")(e);
              return (this.handleRenderingError(s, t, n), !1);
            }
          }),
          (a.handleRenderingError = function (t, n, r) {
            n &&
              o("AdsInterfacesLoggerUtils").logException(t, {
                channel_id: n.aymt_data.channel_id,
                tip_id: r,
                rendering_spec: n.client_side_rendering_spec,
              });
          }),
          (a.getChannelName = function () {
            var e, t;
            return (e =
              r("AdFLEXAccountSettingConfig") == null ||
              (t = r("AdFLEXAccountSettingConfig").get()) == null
                ? void 0
                : t.AYMTMegaphoneChannelName) != null
              ? e
              : "AYMTCampaignManagerMegaphoneChannel";
          }),
          (a.getMessages = function () {
            var e = Array.from(this.getMessagesByID().values());
            return (
              !e.length &&
                !this.areTipsLoaded() &&
                !o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() &&
                this.loadTips(),
              e
            );
          }),
          (a.mayShowMessage = function (t, n, r) {
            var e = this.getState();
            return e.sequenceIsGoverned
              ? e.sequenceDelivery === "delivered" &&
                  String(t) === e.sequencePermittedTipID &&
                  r()
              : n() && !e.sequenceRetiredTipIDs.has(String(t));
          }),
          (a.getMessagesByID = function () {
            return this.getState().messagesByID;
          }),
          (a.hasMessage = function (t, n) {
            for (var e of n.values()) {
              var r = this.isBodySame(e, t);
              if (r) return !0;
            }
            return !1;
          }),
          (a.isBodySame = function (t, n) {
            if (!t || !n) return !1;
            var e = t.body,
              o = n.body;
            return r("isFalsey")(e) || r("isFalsey")(o)
              ? !1
              : !r("isNode")(e) && !r("isNode")(o)
                ? (s || (s = r("areEqual")))(e, o)
                : !r("isNode")(e) || !r("isNode")(o)
                  ? !1
                  : e === o;
          }),
          (a.onTipClose = function (t, n) {
            o("AYMTClientSideLogging").logXoutNew(t.aymt_data);
          }),
          n
        );
      })(r("FluxReduceStore"));
    d.__moduleID = i.id;
    var m = new d();
    l.default = m;
  },
  98,
);
