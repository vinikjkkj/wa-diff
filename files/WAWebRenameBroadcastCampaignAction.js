__d(
  "WAWebRenameBroadcastCampaignAction",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebBizBroadcastCampaignNotifier",
    "WAWebBroadcastCampaignSync",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[broadcast:rename-campaign] Renaming campaign ",
                ' to "',
                '"',
              ])),
            t,
            n,
          );
          try {
            var a,
              i,
              l,
              d = yield o(
                "WAWebBizBroadcastCampaignAPI",
              ).getBizBroadcastCampaignByKey(t);
            if (d == null)
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[broadcast:rename-campaign] Campaign not found",
                      ])),
                  )
                  .sendLogs("business-broadcast-rename-not-found"),
                !1
              );
            var m = Date.now(),
              p = {
                broadcastJid: d.broadcastJid,
                createTimestamp: d.createdTimestamp,
                deviceId: d.deviceId,
                msgId: (a = d.msgId) != null ? a : void 0,
                name: n,
                reservedQuota: (i = d.reservedQuota) != null ? i : void 0,
                scheduledTimestamp:
                  (l = d.scheduledTimestamp) != null ? l : void 0,
                status: d.status,
              },
              _ = r("WAWebBroadcastCampaignSync").getCampaignMutation(t, p, m);
            return (
              yield o(
                "WAWebBizBroadcastCampaignNotifier",
              ).updateCampaignWithSyncAndNotify(t, { campaignName: n }, [_]),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:rename-campaign] Campaign renamed successfully",
                  ])),
              ),
              !0
            );
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:rename-campaign] Failed to rename campaign",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("business-broadcast-rename-failed"),
              !1
            );
          }
        })),
        m.apply(this, arguments)
      );
    }
    l.renameBroadcastCampaignAction = d;
  },
  98,
);
