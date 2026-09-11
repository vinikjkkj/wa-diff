__d(
  "WAWebExportChatAction",
  [
    "Promise",
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebChatGetters",
    "WAWebDBMessageFindLocal",
    "WAWebExportChatLogging",
    "WAWebExportChatMarkdownFormatter",
    "WAWebExportChatPlainTextFormatter",
    "WAWebFileSaver",
    "WAWebFileSaverDownloadData",
    "WAWebFileSaverTypes",
    "WAWebLimitSharingUIUtils",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebZipUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 50,
      m = 15 * 1024 * 1024,
      p = 3e4,
      _ = 1e5,
      f = "media";
    function g(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? "group"
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? "broadcast"
          : "individual";
    }
    var h = !1,
      y = new Set([
        (c = o("WAWebMsgType")).MSG_TYPE.PROTOCOL,
        c.MSG_TYPE.REACTION,
        c.MSG_TYPE.REACTION_ENC,
        c.MSG_TYPE.POLL_UPDATE,
        c.MSG_TYPE.KEEP_IN_CHAT,
        c.MSG_TYPE.PIN_MESSAGE,
      ]);
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            a = e.endDate,
            i = e.messageLimit,
            l = e.onProgress,
            s = e.signal,
            u = e.startDate,
            c = [],
            m = { remote: t.id },
            p = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!(c.length >= i)) {
                    if (s != null && s.aborted)
                      throw new (o("WAAbortError").AbortError)(
                        "Export cancelled",
                      );
                    var e = yield o("WAWebDBMessageFindLocal").msgFindBefore({
                      anchor: m,
                      count: d,
                    });
                    if (!(e.status >= 400 || e.messages.length === 0)) {
                      var t = !1;
                      for (var n of e.messages) {
                        var _,
                          f,
                          g = (_ = n.t) != null ? _ : 0,
                          h = (f = n.type) != null ? f : "";
                        if (u != null && g < u) {
                          t = !0;
                          continue;
                        }
                        if (
                          !y.has(h) &&
                          n.subtype !== "change_username" &&
                          n.isViewOnce !== !0
                        ) {
                          var C = n.ephemeralDuration;
                          if (
                            !(C != null && C !== 0) &&
                            !(a != null && g > a) &&
                            (c.push(n), c.length >= i)
                          )
                            break;
                        }
                      }
                      var b = e.messages[0],
                        v = Number.isFinite(i) ? i : -1;
                      if (
                        (l == null || l("loading", c.length, v),
                        !t &&
                          c.length < i &&
                          (b == null ? void 0 : b.id) instanceof
                            r("WAWebMsgKey"))
                      )
                        return ((m = b.id), p());
                    }
                  }
                },
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            yield p(),
            c.sort(function (e, t) {
              var n, r;
              return ((n = e.t) != null ? n : 0) - ((r = t.t) != null ? r : 0);
            }),
            c
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.chat,
            l = t.endDate,
            c = t.includeMedia,
            d = t.onProgress,
            y = t.signal,
            b = t.startDate,
            v = g(i),
            S = c ? "with_media" : "text_only",
            R = b != null || l != null;
          if (h) {
            var L = new Error("An export is already in progress");
            throw (L.stack, L);
          }
          if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(i)) {
            var E = new Error("Cannot export limit-sharing enabled chat");
            throw (E.stack, E);
          }
          var k = Date.now(),
            I = (a = t.messageLimit) != null ? a : _,
            T = "loading",
            D = 0;
          h = !0;
          try {
            d == null || d("loading", 0, 1);
            var x = yield C({
              chat: i,
              endDate: l,
              messageLimit: I,
              onProgress: d,
              signal: y,
              startDate: b,
            });
            if (((D = x.length), y != null && y.aborted))
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var $ = [],
              P = 0,
              N = null;
            for (var M of x)
              try {
                $.push(o("WAWebMsgModelFromData").msgModelFromMsgData(M));
              } catch (e) {
                (P++, (N = N != null ? N : r("getErrorSafe")(e)));
              }
            if (N != null) {
              if ($.length === 0) throw N;
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[export_chat] skipped ",
                      " of ",
                      " unreadable messages (chatType=",
                      ")",
                    ])),
                  P,
                  x.length,
                  v,
                )
                .catching(N)
                .sendLogs("export-chat-unreadable-messages");
            }
            var w = i.formattedTitle || i.name || "Chat",
              A = x.length >= I,
              F = [],
              O = new Set();
            if (c) {
              T = "downloading_media";
              var B = $.filter(function (e) {
                return (
                  o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(
                    e.type,
                  ) &&
                  o("WAWebFileSaverDownloadData").isMsgMediaAvailableLocally(e)
                );
              });
              if (
                (d == null || d("downloading_media", 0, B.length),
                y != null && y.aborted)
              )
                throw new (o("WAAbortError").AbortError)("Export cancelled");
              yield B.reduce(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t, n) {
                      if ((yield e, y != null && y.aborted))
                        throw new (o("WAAbortError").AbortError)(
                          "Export cancelled",
                        );
                      try {
                        var r = yield o("WAPromiseDelays").withTimeout(
                          o("WAWebFileSaverDownloadData").getMsgDownloadData(t),
                          p,
                          o("WAWebNullFunc").returnNull,
                        );
                        if (
                          (r == null ? void 0 : r.blob) != null &&
                          r.blob.size <= m
                        ) {
                          var a;
                          F.push({ blob: r.blob, name: f + "/" + r.name });
                          var i = (a = t.id) == null ? void 0 : a.toString();
                          i != null && O.add(i);
                        }
                      } catch (e) {}
                      d == null || d("downloading_media", n + 1, B.length);
                    },
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                (u || (u = n("Promise"))).resolve(),
              );
            }
            ((T = "formatting"), d == null || d("formatting", 0, 1));
            var W = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
                chatTitle: w,
                messages: $,
                includeMedia: c,
                mediaFolder: f,
                hasMoreHistory: A,
                downloadedMediaMsgIds: O,
              }),
              q = o("WAWebExportChatPlainTextFormatter").formatChatAsPlainText({
                messages: $,
                includeMedia: c,
                hasMoreHistory: A,
                downloadedMediaMsgIds: O,
              });
            if (y != null && y.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            ((T = "saving"), d == null || d("saving", 0, 1));
            var U = w.replace(/[/\\?%*:|\"<>]/g, "_"),
              V = new Blob([q], { type: "text/plain" }),
              H = new Blob([W], { type: "text/markdown" }),
              G = [
                { blob: V, name: "chat.txt" },
                { blob: H, name: "chat.md" },
              ].concat(F),
              z = yield o("WAWebZipUtils").zipFiles(G);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              z,
              U,
              o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
            );
            var j = Date.now() - k,
              K = {
                messageCount: $.length,
                mediaCount: F.length,
                durationMs: j,
              };
            return (
              o("WAWebExportChatLogging").logExportChat({
                exportMode: S,
                chatType: v,
                messageCount: K.messageCount,
                mediaCount: K.mediaCount,
                exportDurationMs: j,
                exportResult: "success",
                dateRangeUsed: R,
                fileSizeBytes: z.size,
              }),
              K
            );
          } catch (e) {
            var Q = Date.now() - k;
            throw (
              e instanceof o("WAAbortError").AbortError
                ? o("WAWebExportChatLogging").logExportChat({
                    exportMode: S,
                    chatType: v,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: Q,
                    exportResult: "cancelled",
                    dateRangeUsed: R,
                  })
                : (o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[export_chat] export failed (chatType=",
                          ", phase=",
                          ", messagesLoaded=",
                          ", includeMedia=",
                          ")",
                        ])),
                      v,
                      T,
                      D,
                      String(c),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("export-chat-failure"),
                  o("WAWebExportChatLogging").logExportChat({
                    exportMode: S,
                    chatType: v,
                    messageCount: D,
                    mediaCount: 0,
                    exportDurationMs: Q,
                    exportResult: "error",
                    errorReason: e instanceof Error ? e.message : "unknown",
                    dateRangeUsed: R,
                  })),
              e
            );
          } finally {
            h = !1;
          }
        })),
        S.apply(this, arguments)
      );
    }
    l.exportChat = v;
  },
  98,
);
