__d(
  "WAWebBizAiChatHistoryFastSync",
  [
    "WAWebApiChat",
    "WAWebDBMessageSerialization",
    "WAWebDBMsgUtils",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 7776e3,
      s = 200,
      u = 1e6,
      c = 1e6,
      d = new TextEncoder(),
      m = new Set(
        [].concat(o("WAWebMsgType").SYSTEM_MESSAGE_TYPES, [
          "revoked",
          "ciphertext",
        ]),
      ),
      p = {
        chat: "TEXT",
        image: "IMAGE",
        audio: "VOICE",
        ptt: "VOICE",
        sticker: "STICKER",
        product: "PRODUCT",
        order: "ORDER",
        reaction: "REACTION",
        list: "PRODUCT_LIST",
        interactive: "TEMPLATE",
        native_flow: "TEMPLATE",
      };
    function _(e) {
      var t;
      return (t = p[e]) != null ? t : "UNSUPPORTED";
    }
    function f(e, t) {
      return e ? (t != null ? "AI" : "BUSINESS") : "CONSUMER";
    }
    function g(e) {
      var t, n;
      if (e.isGroup() || e.server === "broadcast" || e.server === "bot")
        return null;
      var r = e.isLid()
          ? e.user
          : (t = o("WAWebLidMigrationUtils").toLid(e)) == null
            ? void 0
            : t.user,
        a =
          e.server === "c.us"
            ? e.user
            : (n = o("WAWebLidMigrationUtils").toPn(e)) == null
              ? void 0
              : n.user;
      if (r == null && a == null) return null;
      var i = {};
      return (r != null && (i.lid = r), a != null && (i.pn = a), i);
    }
    async function h(e, t) {
      var n;
      try {
        n = o("WAWebWidFactory").createWid(e);
      } catch (e) {
        return null;
      }
      var a = g(n);
      if (a == null) return null;
      for (
        var i = await o("WAWebDBMsgUtils").getMsgsByChatId(n),
          l = [],
          c = 0,
          p = i.length - 1;
        p >= 0;
        p--
      ) {
        var h,
          y,
          C = i[p];
        if (!(C.type != null && m.has(C.type))) {
          var b = C.t;
          if (!(b == null || b < t)) {
            if (l.length >= s) break;
            var v = void 0;
            try {
              v = o("WAWebDBMessageSerialization").messageFromDbRow(C);
            } catch (e) {
              continue;
            }
            var S = (h = v.body) != null ? h : null;
            if (S != null) {
              var R = d.encode(S).length;
              if (c + R > u) break;
              c += R;
            }
            var L = void 0;
            try {
              L = r("WAWebMsgKey").fromString(C.id);
            } catch (e) {
              continue;
            }
            l.push({
              author: f(L.fromMe, v.bizBotType),
              message_type: _((y = C.type) != null ? y : "chat"),
              text: S,
              timestamp: b,
            });
          }
        }
      }
      return l.length === 0
        ? null
        : (l.reverse(),
          { thread: { consumer_uid: a, messages: l }, textBytes: c });
    }
    async function y() {
      var t = await o("WAWebApiChat").getAllChatsDeserialized(),
        n = Math.floor(Date.now() / 1e3) - e,
        r = t
          .filter(function (e) {
            if (e.t != null && e.t < n) return !1;
            try {
              var t = o("WAWebWidFactory").createWid(e.id);
              return g(t) != null;
            } catch (e) {
              return !1;
            }
          })
          .sort(function (e, t) {
            var n, r;
            return ((n = t.t) != null ? n : 0) - ((r = e.t) != null ? r : 0);
          }),
        a = [],
        i = 0;
      for (var l of r) {
        if (i >= c) break;
        var s = await h(l.id, n);
        if (s != null) {
          if (i + s.textBytes > c) break;
          (a.push(s.thread), (i += s.textBytes));
        }
      }
      return a.length === 0 ? null : { threads: a };
    }
    l.buildUploadRequest = y;
  },
  98,
);
