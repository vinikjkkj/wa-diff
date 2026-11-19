__d(
  "WAWebHatchJarvisCopyText",
  [
    "WAWebHatchJarvisPayload",
    "WAWebHatchJarvisRender",
    "WAWebHatchJarvisReplyGate",
    "WAWebMsgGetters",
    "WAWebMuseResponsePlainText",
    "WAWebRichResponseCopyTextRegistry",
    "WAWebURLUtils",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { readOnly: !0 };
    function s() {
      return (
        o("WAWebRichResponseCopyTextRegistry").registerRichResponseCopyText(u),
        function () {
          return o(
            "WAWebRichResponseCopyTextRegistry",
          ).unregisterRichResponseCopyText(u);
        }
      );
    }
    function u(t) {
      var n = t.unifiedResponse;
      if (n == null) return null;
      var r = o("WAWebHatchJarvisReplyGate").getHatchJarvisDrawMode({
        chatId: t.id.remote,
        hasForwardedAttribution:
          o("WAWebMsgGetters").getForwardedAiBotMessageInfo(t) != null,
        isForwarded: o("WAWebMsgGetters").getIsForwarded(t),
        isFromMe: t.id.fromMe,
        unifiedResponse: n,
      });
      if (r === "none") return null;
      var a = o("WAWebHatchJarvisPayload").getHatchJarvisPayload(n);
      if (a == null) return null;
      var i = o("WAWebHatchJarvisRender").buildHatchJarvisRender(
          a,
          n.response_id,
          r === "forwarded" ? e : void 0,
        ),
        l = i.items,
        s = i.unifiedResponse;
      return o("WAWebMuseResponsePlainText").getResponsePlainText(
        s,
        function (e) {
          return c(l.get(e));
        },
      );
    }
    function c(e) {
      return e == null
        ? null
        : (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "buttons" &&
              "buttons" in e
            ) {
              var t = e.buttons;
              return t
                .map(function (e) {
                  return e.label;
                })
                .join("\n");
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "options" &&
              "options" in e
            ) {
              var n = e.options;
              return n.join("\n");
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "list" &&
              "list" in e
            ) {
              var o = e.list;
              return [o.title, o.subtitle]
                .concat(
                  o.rows.flatMap(function (e) {
                    return [e.title, e.body, e.metaText];
                  }),
                )
                .filter(Boolean)
                .join("\n");
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "products" &&
              "products" in e
            ) {
              var a = e.products;
              return a
                .flatMap(function (e) {
                  return [e.brand, e.title, e.price];
                })
                .filter(r("isStringNotNullAndNotWhitespaceOnly"))
                .join("\n");
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "link_card" &&
              "card" in e
            ) {
              var i,
                l = e.card;
              return (i = l.title) != null
                ? i
                : r("WAWebURLUtils").hostname(l.url);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.type === "pairing_share" &&
              "card" in e
            ) {
              var s = e.card;
              return [s.title, s.body].filter(Boolean).join("\n");
            }
            return "";
          })(e);
    }
    ((l.registerHatchJarvisCopyText = s), (l.getHatchJarvisCopyText = u));
  },
  98,
);
