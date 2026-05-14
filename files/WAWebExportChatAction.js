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
    function h(e, t, n, r, o, a) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var c = [],
              d = { remote: e.id },
              m = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    if (!(c.length >= t)) {
                      if (l != null && l.aborted)
                        throw new (o("WAAbortError").AbortError)(
                          "Export cancelled",
                        );
                      var e = yield o("WAWebDBMessageFindLocal").msgFindBefore({
                        anchor: d,
                        count: u,
                      });
                      if (!(e.status >= 400 || e.messages.length === 0)) {
                        var n = !1;
                        for (var p of e.messages) {
                          var _,
                            f,
                            h = (_ = p.t) != null ? _ : 0,
                            y = (f = p.type) != null ? f : "";
                          if (a != null && h < a) {
                            n = !0;
                            continue;
                          }
                          if (!g.has(y) && p.isViewOnce !== !0) {
                            var C = p.ephemeralDuration;
                            if (
                              !(C != null && C !== 0) &&
                              !(i != null && h > i) &&
                              (c.push(p), c.length >= t)
                            )
                              break;
                          }
                        }
                        var b = e.messages[0],
                          v = Number.isFinite(t) ? t : -1;
                        if (
                          (s == null || s("loading", c.length, v),
                          !n &&
                            c.length < t &&
                            (b == null ? void 0 : b.id) instanceof
                              r("WAWebMsgKey"))
                        )
                          return ((d = b.id), m());
                      }
                    }
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })();
            return (
              yield m(),
              c.sort(function (e, t) {
                var n, r;
                return (
                  ((n = e.t) != null ? n : 0) - ((r = t.t) != null ? r : 0)
                );
              }),
              c
            );
          },
        )),
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
          if (f) throw new Error("An export is already in progress");
          if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(a))
            throw new Error("Cannot export limit-sharing enabled chat");
          var v = Date.now(),
            S = (r = t.messageLimit) != null ? r : m;
          f = !0;
          try {
            s == null || s("loading", 0, 1);
            var R = yield h(a, S, g, i, u, s);
            if (u != null && u.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var L = R.map(function (e) {
                return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
              }),
              E = a.formattedTitle || a.name || "Chat",
              k = R.length >= S,
              I = [],
              T = new Set();
            if (l) {
              var D = L.filter(function (e) {
                return o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(
                  e.type,
                );
              });
              if (
                (s == null || s("downloading_media", 0, D.length),
                u != null && u.aborted)
              )
                throw new (o("WAAbortError").AbortError)("Export cancelled");
              yield D.reduce(
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
                          I.push({ blob: r.blob, name: p + "/" + r.name });
                          var i = (a = t.id) == null ? void 0 : a.toString();
                          i != null && T.add(i);
                        }
                      } catch (e) {}
                      s == null || s("downloading_media", n + 1, D.length);
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
            var x = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
                chatTitle: E,
                messages: L,
                includeMedia: l,
                mediaFolder: p,
                hasMoreHistory: k,
                downloadedMediaMsgIds: T,
              }),
              $ = o("WAWebExportChatPlainTextFormatter").formatChatAsPlainText({
                messages: L,
                includeMedia: l,
                hasMoreHistory: k,
                downloadedMediaMsgIds: T,
              });
            if (u != null && u.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            s == null || s("saving", 0, 1);
            var P = E.replace(/[/\\?%*:|\"<>]/g, "_"),
              N = new Blob([$], { type: "text/plain" }),
              M = new Blob([x], { type: "text/markdown" }),
              w = [
                { blob: N, name: "chat.txt" },
                { blob: M, name: "chat.md" },
              ].concat(I),
              A = yield o("WAWebZipUtils").zipFiles(w);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              A,
              P,
              o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
            );
            var F = Date.now() - v,
              O = {
                messageCount: L.length,
                mediaCount: I.length,
                durationMs: F,
              };
            return (
              o("WAWebExportChatLogging").logExportChat({
                exportMode: C,
                chatType: y,
                messageCount: O.messageCount,
                mediaCount: O.mediaCount,
                exportDurationMs: F,
                exportResult: "success",
                dateRangeUsed: b,
                fileSizeBytes: A.size,
              }),
              O
            );
          } catch (e) {
            var B = Date.now() - v;
            throw (
              e instanceof o("WAAbortError").AbortError
                ? o("WAWebExportChatLogging").logExportChat({
                    exportMode: C,
                    chatType: y,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: B,
                    exportResult: "cancelled",
                    dateRangeUsed: b,
                  })
                : o("WAWebExportChatLogging").logExportChat({
                    exportMode: C,
                    chatType: y,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: B,
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
