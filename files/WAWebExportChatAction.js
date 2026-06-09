__d(
  "WAWebExportChatAction",
  [
    "Promise",
    "WAAbortError",
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 50,
      c = 15 * 1024 * 1024,
      d = 3e4,
      m = 1e5,
      p = "media";
    function _(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? "group"
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? "broadcast"
          : "individual";
    }
    var f = !1,
      g = new Set([
        (s = o("WAWebMsgType")).MSG_TYPE.PROTOCOL,
        s.MSG_TYPE.REACTION,
        s.MSG_TYPE.REACTION_ENC,
        s.MSG_TYPE.POLL_UPDATE,
        s.MSG_TYPE.KEEP_IN_CHAT,
        s.MSG_TYPE.PIN_MESSAGE,
      ]);
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            a = e.endDate,
            i = e.messageLimit,
            l = e.onProgress,
            s = e.signal,
            c = e.startDate,
            d = [],
            m = { remote: t.id },
            p = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  if (!(d.length >= i)) {
                    if (s != null && s.aborted)
                      throw new (o("WAAbortError").AbortError)(
                        "Export cancelled",
                      );
                    var e = yield o("WAWebDBMessageFindLocal").msgFindBefore({
                      anchor: m,
                      count: u,
                    });
                    if (!(e.status >= 400 || e.messages.length === 0)) {
                      var t = !1;
                      for (var n of e.messages) {
                        var _,
                          f,
                          h = (_ = n.t) != null ? _ : 0,
                          y = (f = n.type) != null ? f : "";
                        if (c != null && h < c) {
                          t = !0;
                          continue;
                        }
                        if (!g.has(y) && n.isViewOnce !== !0) {
                          var C = n.ephemeralDuration;
                          if (
                            !(C != null && C !== 0) &&
                            !(a != null && h > a) &&
                            (d.push(n), d.length >= i)
                          )
                            break;
                        }
                      }
                      var b = e.messages[0],
                        v = Number.isFinite(i) ? i : -1;
                      if (
                        (l == null || l("loading", d.length, v),
                        !t &&
                          d.length < i &&
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
            d.sort(function (e, t) {
              var n, r;
              return ((n = e.t) != null ? n : 0) - ((r = t.t) != null ? r : 0);
            }),
            d
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = t.chat,
            i = t.endDate,
            l = t.includeMedia,
            s = t.onProgress,
            u = t.signal,
            g = t.startDate,
            y = _(a),
            C = l ? "with_media" : "text_only",
            b = g != null || i != null;
          if (f) {
            var v = new Error("An export is already in progress");
            throw (v.stack, v);
          }
          if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(a)) {
            var S = new Error("Cannot export limit-sharing enabled chat");
            throw (S.stack, S);
          }
          var R = Date.now(),
            L = (r = t.messageLimit) != null ? r : m;
          f = !0;
          try {
            s == null || s("loading", 0, 1);
            var E = yield h({
              chat: a,
              endDate: i,
              messageLimit: L,
              onProgress: s,
              signal: u,
              startDate: g,
            });
            if (u != null && u.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var k = E.map(function (e) {
                return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
              }),
              I = a.formattedTitle || a.name || "Chat",
              T = E.length >= L,
              D = [],
              x = new Set();
            if (l) {
              var $ = k.filter(function (e) {
                return o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(
                  e.type,
                );
              });
              if (
                (s == null || s("downloading_media", 0, $.length),
                u != null && u.aborted)
              )
                throw new (o("WAAbortError").AbortError)("Export cancelled");
              yield $.reduce(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t, n) {
                      if ((yield e, u != null && u.aborted))
                        throw new (o("WAAbortError").AbortError)(
                          "Export cancelled",
                        );
                      try {
                        var r = yield o("WAPromiseDelays").withTimeout(
                          o("WAWebFileSaverDownloadData").getMsgDownloadData(t),
                          d,
                          o("WAWebNullFunc").returnNull,
                        );
                        if (
                          (r == null ? void 0 : r.blob) != null &&
                          r.blob.size <= c
                        ) {
                          var a;
                          D.push({ blob: r.blob, name: p + "/" + r.name });
                          var i = (a = t.id) == null ? void 0 : a.toString();
                          i != null && x.add(i);
                        }
                      } catch (e) {}
                      s == null || s("downloading_media", n + 1, $.length);
                    },
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                (e || (e = n("Promise"))).resolve(),
              );
            }
            s == null || s("formatting", 0, 1);
            var P = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
                chatTitle: I,
                messages: k,
                includeMedia: l,
                mediaFolder: p,
                hasMoreHistory: T,
                downloadedMediaMsgIds: x,
              }),
              N = o("WAWebExportChatPlainTextFormatter").formatChatAsPlainText({
                messages: k,
                includeMedia: l,
                hasMoreHistory: T,
                downloadedMediaMsgIds: x,
              });
            if (u != null && u.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            s == null || s("saving", 0, 1);
            var M = I.replace(/[/\\?%*:|\"<>]/g, "_"),
              w = new Blob([N], { type: "text/plain" }),
              A = new Blob([P], { type: "text/markdown" }),
              F = [
                { blob: w, name: "chat.txt" },
                { blob: A, name: "chat.md" },
              ].concat(D),
              O = yield o("WAWebZipUtils").zipFiles(F);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              O,
              M,
              o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
            );
            var B = Date.now() - R,
              W = {
                messageCount: k.length,
                mediaCount: D.length,
                durationMs: B,
              };
            return (
              o("WAWebExportChatLogging").logExportChat({
                exportMode: C,
                chatType: y,
                messageCount: W.messageCount,
                mediaCount: W.mediaCount,
                exportDurationMs: B,
                exportResult: "success",
                dateRangeUsed: b,
                fileSizeBytes: O.size,
              }),
              W
            );
          } catch (e) {
            var q = Date.now() - R;
            throw (
              e instanceof o("WAAbortError").AbortError
                ? o("WAWebExportChatLogging").logExportChat({
                    exportMode: C,
                    chatType: y,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: q,
                    exportResult: "cancelled",
                    dateRangeUsed: b,
                  })
                : o("WAWebExportChatLogging").logExportChat({
                    exportMode: C,
                    chatType: y,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: q,
                    exportResult: "error",
                    errorReason: e instanceof Error ? e.message : "unknown",
                    dateRangeUsed: b,
                  }),
              e
            );
          } finally {
            f = !1;
          }
        })),
        b.apply(this, arguments)
      );
    }
    l.exportChat = C;
  },
  98,
);
