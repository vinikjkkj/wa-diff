__d(
  "WAWebHatchJarvisCopyText",
  [
    "WAWebHatchJarvisPayload",
    "WAWebHatchJarvisRender",
    "WAWebHatchJarvisReplyGate",
    "WAWebHatchShoppingData",
    "WAWebMsgGetters",
    "WAWebMuseResponsePlainText",
    "WAWebRichResponseCopyTextRegistry",
    "WAWebURLUtils",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebRichResponseCopyTextRegistry").registerRichResponseCopyText(s),
        function () {
          return o(
            "WAWebRichResponseCopyTextRegistry",
          ).unregisterRichResponseCopyText(s);
        }
      );
    }
    function s(e) {
      var t = e.unifiedResponse;
      if (t == null) return null;
      var n = o("WAWebHatchJarvisReplyGate").getHatchJarvisDrawMode({
        chatId: e.id.remote,
        hasForwardedAttribution:
          o("WAWebMsgGetters").getForwardedAiBotMessageInfo(e) != null,
        isForwarded: o("WAWebMsgGetters").getIsForwarded(e),
        isFromMe: e.id.fromMe,
        unifiedResponse: t,
      });
      if (n === "none") return null;
      var r = o("WAWebHatchJarvisPayload").getHatchJarvisPayload(t);
      if (r == null) return null;
      var a = o("WAWebHatchJarvisRender").isHatchShoppingRenderable(
          r,
          e.id,
          n === "forwarded",
        ),
        i = o("WAWebHatchJarvisRender").buildHatchJarvisRender(
          r,
          t.response_id,
          { readOnly: n === "forwarded", shoppingEnabled: a },
        ),
        l = i.items,
        s = i.unifiedResponse;
      return o("WAWebMuseResponsePlainText").getResponsePlainText(
        s,
        function (e) {
          return u(l.get(e), a);
        },
      );
    }
    function u(e, t) {
      return e == null
        ? null
        : (function (n) {
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.type === "buttons" &&
              "buttons" in n
            ) {
              var a = n.buttons;
              return a
                .map(function (e) {
                  return e.label;
                })
                .join("\n");
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.type === "options" &&
              "options" in n
            ) {
              var i = n.options;
              return i.join("\n");
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.type === "list" &&
              "list" in n
            ) {
              var l = n.list;
              return [l.title, l.subtitle]
                .concat(
                  l.rows.flatMap(function (e) {
                    return [e.title, e.body, e.metaText];
                  }),
                )
                .filter(Boolean)
                .join("\n");
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.type === "products" &&
              "products" in n
            ) {
              var s = n.products;
              return (
                t && e.shoppingData != null
                  ? o("WAWebHatchShoppingData")
                      .decodeShoppingResults(e.shoppingData, e.fileMetadata)
                      .products.slice(0, 5)
                      .map(function (e) {
                        return e.product;
                      })
                  : s
              )
                .flatMap(function (e) {
                  return [e.brand, e.title, e.price];
                })
                .filter(r("isStringNotNullAndNotWhitespaceOnly"))
                .join("\n");
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.type === "link_card" &&
              "card" in n
            ) {
              var u,
                c = n.card;
              return (u = c.title) != null
                ? u
                : r("WAWebURLUtils").hostname(c.url);
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.type === "pairing_share" &&
              "card" in n
            ) {
              var d = n.card;
              return [d.title, d.body].filter(Boolean).join("\n");
            }
            if (
              ((typeof n == "object" && n !== null) ||
                typeof n == "function") &&
              n.type === "pairing_launcher" &&
              "card" in n
            ) {
              var m = n.card;
              return m.body;
            }
            return "";
          })(e);
    }
    ((l.registerHatchJarvisCopyText = e), (l.getHatchJarvisCopyText = s));
  },
  98,
);
