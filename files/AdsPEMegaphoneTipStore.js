__d(
  "AdsPEMegaphoneTipStore",
  [
    "AYMTClientSideLogging",
    "AYMTTipsLoader",
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
    "DateConsts",
    "FBLogger",
    "FluxReduceStore",
    "ImmutableRecordWithV4Types",
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
      }),
      d = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.$AdsPEMegaphoneTipStore$p_1 = function () {
              var t = r("AdsAccountStore").getSelectedAccountID();
              if (t != null) {
                var o = {};
                o.ad_account_id = t;
                var a = r("AdsAccountStore").getSelectedBusinessID();
                (a != null && (o.business_id = a.toString()),
                  r("AYMTTipsLoader").loadTips(
                    o,
                    n.getChannelName(),
                    e || (e = r("AdsDataAtom")),
                  ));
              }
            }),
            (n.$AdsPEMegaphoneTipStore$p_2 = r("throttle")(
              n.$AdsPEMegaphoneTipStore$p_1,
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
            ];
          }),
          (a.reduce = function (t, n) {
            var e = n.action,
              a = t.messagesByID,
              i = this.getChannelName();
            switch (e.type) {
              case o("AdsAymtTipLoadedDataActionFlux").actionType:
                if (e.data.channelName === i) {
                  var l = 0;
                  if (e.data.tips.length) {
                    var s = new Map();
                    (e.data.tips.forEach(function (e) {
                      var t = e.aymt_data.tip_id;
                      s.set(t, e);
                    }),
                      (l = this.setupTips(s)));
                  }
                  return t.merge({ tipsLoaded: !0, renderedMessageCount: l });
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
                var u = e.data;
                this.hasMessage(u, a) || (a = a.set(u.id, u));
                var c = t.get("renderedMessageCount");
                return t.merge({
                  messagesByID: a,
                  tipsLoaded: !0,
                  areTipsRendered: c === a.size,
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
          (a.loadTips = function () {
            this.$AdsPEMegaphoneTipStore$p_2();
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
              ((t.name === "adsmm_campaign_kpi_deprecation" ||
                t.name === "adsmm_cost_metrics_deprecation") &&
                (o.client_side_rendering_params.tip_message_severity = "info"),
                r(
                  "AdsManagerBindingMessagesConfig.experimental",
                ).BINDING_MESSAGES.includes(t.name) &&
                  (o.client_side_rendering_params.tip_is_binding = !0));
              var i = new o.client_side_rendering_class(
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
              return ((t.client_side_renderer = i), i.run(), !0);
            } catch (e) {
              var l = r("getErrorSafe")(e);
              return (this.handleRenderingError(l, t, n), !1);
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
            return (!e.length && !this.areTipsLoaded() && this.loadTips(), e);
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
