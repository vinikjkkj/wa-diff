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
            r = t.contextSource,
            a = t.deviceIdentity,
            i = t.encryptedMessage,
            l = t.keyDistribution,
            s = t.messageId,
            u = t.messageType,
            c = t.nativeFlowName,
            d = t.phash,
            m = t.recipientJid,
            p = e(n, c),
            _ = {};
          (n != null && (_.metering_type = o("WAWap").CUSTOM_STRING("smb_mm")),
            r != null && (_.context_source = o("WAWap").CUSTOM_STRING(r)));
          var f = Object.keys(_).length > 0 ? o("WAWap").wap("meta", _) : null,
            g = o("WAWap").wap(
              "message",
              {
                id: o("WAWap").CUSTOM_STRING(s),
                to: o("WAWebCommsWapMd").CHAT_JID(m),
                phash: o("WAWap").CUSTOM_STRING(d),
                type: o("WAWap").CUSTOM_STRING(u),
              },
              f,
              p,
              i,
              l,
              a,
            );
          return o("WAComms").sendSmaxStanza(g);
        })),
        u.apply(this, arguments)
      );
    }
    l.sendBroadcastMessageRPC = s;
  },
  98,
);
