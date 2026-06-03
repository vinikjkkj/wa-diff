__d(
  "WAWebBroadcastMessageRPC",
  ["WAComms", "WAWap", "WAWebCommsWapMd", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e == null && t == null) return null;
      var n =
          e != null
            ? babelHelpers.extends(
                { campaign_id: o("WAWap").CUSTOM_STRING(e.campaign_id) },
                e.free_reserved_msgs != null
                  ? {
                      free_reserved_msgs: o("WAWap").CUSTOM_STRING(
                        e.free_reserved_msgs,
                      ),
                    }
                  : null,
              )
            : {},
        r =
          t != null
            ? o("WAWap").wap(
                "interactive",
                {
                  type: o("WAWap").CUSTOM_STRING("native_flow"),
                  v: o("WAWap").CUSTOM_STRING("1"),
                },
                o("WAWap").wap("native_flow", {
                  name: o("WAWap").CUSTOM_STRING(t),
                }),
              )
            : null;
      return o("WAWap").wap("biz", n, r);
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.businessMetadata,
            r = t.deviceIdentity,
            a = t.encryptedMessage,
            i = t.keyDistribution,
            l = t.messageId,
            s = t.messageType,
            u = t.nativeFlowName,
            c = t.phash,
            d = t.recipientJid,
            m = e(n, u),
            p = n
              ? o("WAWap").wap("meta", {
                  metering_type: o("WAWap").CUSTOM_STRING("smb_mm"),
                })
              : null,
            _ = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(l),
                to: o("WAWebCommsWapMd").CHAT_JID(d),
                phash: o("WAWap").CUSTOM_STRING(c),
                type: o("WAWap").CUSTOM_STRING(s),
              },
              p,
              m,
              a,
              i,
              r,
            );
          return o("WAComms").sendSmaxStanza(_);
        })),
        u.apply(this, arguments)
      );
    }
    l.sendBroadcastMessageRPC = s;
  },
  98,
);
