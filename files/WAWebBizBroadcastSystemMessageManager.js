__d(
  "WAWebBizBroadcastSystemMessageManager",
  [
    "WALogger",
    "WAWebBizBroadcastCampaignAPI",
    "WAWebChatCollection",
    "WAWebContactSystemMsg",
    "WAWebDBMessageDelete",
    "WAWebDBProcessMessage",
    "WAWebMsgModel",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "biz_broadcast_status";
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebWidFactory").createWid(t),
            r = o("WAWebChatCollection").ChatCollection.get(n);
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:system-msg] Updating system message for broadcastJid=",
                  "",
                ])),
              t,
            ),
            r != null)
          ) {
            for (
              var a = r.msgs.getModelsArray(), i = [], l = a.length - 1;
              l >= 0;
              l--
            ) {
              var p = a[l];
              p.subtype === m && i.push(p);
            }
            if (i.length > 0) {
              var _ = i.map(function (e) {
                return e.id.toString();
              });
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:system-msg] Removing ",
                    " existing system message(s)",
                  ])),
                i.length,
              ),
                yield o("WAWebDBMessageDelete").removeMessagesFromHistory(_));
              for (var f of i) r.msgs.remove(f);
            }
          }
          var g = yield o(
              "WAWebBizBroadcastCampaignAPI",
            ).getBizBroadcastCampaignsByBroadcastJid(t),
            h = o("WAWebUserPrefsMeUser")
              .getMeDevicePnOrThrow_DO_NOT_USE()
              .getDeviceId(),
            y = 0,
            C = 0;
          for (var b of g) {
            var v = b.status;
            v ===
            o("WAWebSchemaBusinessBroadcastCampaign")
              .BusinessBroadcastCampaignStatus.FAILED
              ? C++
              : v ===
                  o("WAWebSchemaBusinessBroadcastCampaign")
                    .BusinessBroadcastCampaignStatus.PROCESSING &&
                b.deviceId === h &&
                y++;
          }
          if (
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:system-msg] Counts: processing=",
                  ", failed=",
                  "",
                ])),
              y,
              C,
            ),
            y > 0 || C > 0)
          ) {
            var S = o("WAWebContactSystemMsg").genNonE2ENotificationMsg(n, m, [
              y.toString(),
              C.toString(),
            ]);
            if (
              (yield o("WAWebDBProcessMessage").storeMessages([S], n),
              r != null)
            ) {
              var R = new (o("WAWebMsgModel").Msg)(S);
              (r.msgs.add(R),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[broadcast:system-msg] Inserted consolidated system message: processing=",
                      ", failed=",
                      "",
                    ])),
                  y,
                  C,
                ));
            }
          } else
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[broadcast:system-msg] No system message needed (all done)",
                ])),
            );
        })),
        _.apply(this, arguments)
      );
    }
    l.updateBizBroadcastSystemMessage = p;
  },
  98,
);
