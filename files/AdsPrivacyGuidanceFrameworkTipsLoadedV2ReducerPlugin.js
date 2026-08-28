__d(
  "AdsPrivacyGuidanceFrameworkTipsLoadedV2ReducerPlugin",
  ["AYMTClientSideChannelNames", "LoadObject"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.channelName,
            o = n.params,
            a = n.tips,
            l = o.ad_account_id,
            s = o.tip,
            u = { accountID: l, tipName: s == null ? null : s };
          return e ===
            r("AYMTClientSideChannelNames")
              .AYMT_ADS_MANAGER_PRIVACY_GUIDANCE_FRAMEWORK_CHANNEL && l != null
            ? t.set(
                u,
                r("LoadObject").withValue(
                  a
                    .map(function (e) {
                      var t = e.aymt_data,
                        n = e.channel_id,
                        r = e.client_side_rendering_spec,
                        o = e.name;
                      return {
                        channel_id: n,
                        name: o,
                        aymt_data: t,
                        client_side_rendering_spec: r,
                      };
                    })
                    .filter(Boolean),
                  { creatorModuleID: i.id },
                ),
              )
            : t;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
