__d(
  "WAWebExportChatAction",
  [
    "WAAbortError",
    "WAWebChatGetters",
    "WAWebDBMessageFindLocal",
    "WAWebExportChatLogging",
    "WAWebExportChatMarkdownFormatter",
    "WAWebFileSaver",
    "WAWebFileSaverDownloadData",
    "WAWebFileSaverTypes",
    "WAWebLimitSharingUIUtils",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebZipUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 50,
      u = 15 * 1024 * 1024,
      c = 1e5,
      d = "media";
    function m(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? "group"
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? "broadcast"
          : "individual";
    }
    var p = !1,
      _ = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.PROTOCOL,
        e.MSG_TYPE.REACTION,
        e.MSG_TYPE.REACTION_ENC,
        e.MSG_TYPE.POLL_UPDATE,
        e.MSG_TYPE.KEEP_IN_CHAT,
        e.MSG_TYPE.PIN_MESSAGE,
      ]);
    function f(e, t, n, r, o, a) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, u) {
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
                        count: s,
                      });
                      if (!(e.status >= 400 || e.messages.length === 0)) {
                        var n = !1;
                        for (var p of e.messages) {
                          var f,
                            g,
                            h = (f = p.t) != null ? f : 0,
                            y = (g = p.type) != null ? g : "";
                          if (a != null && h < a) {
                            n = !0;
                            continue;
                          }
                          if (!_.has(y) && p.isViewOnce !== !0) {
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
                          (u == null || u("loading", c.length, v),
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
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = e.chat,
            r = e.endDate,
            a = e.includeMedia,
            i = e.onProgress,
            l = e.signal,
            s = e.startDate,
            _ = m(n),
            g = a ? "with_media" : "text_only",
            h = s != null || r != null;
          if (p) throw new Error("An export is already in progress");
          if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(n))
            throw new Error("Cannot export limit-sharing enabled chat");
          var y = Date.now(),
            C = (t = e.messageLimit) != null ? t : c;
          p = !0;
          try {
            i == null || i("loading", 0, 1);
            var b = yield f(n, C, s, r, l, i);
            if (l != null && l.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var v = b.map(function (e) {
                return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
              }),
              S = n.formattedTitle || n.name || "Chat",
              R = b.length >= C,
              L = [],
              E = new Set();
            if (a) {
              var k = v.filter(function (e) {
                return o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(
                  e.type,
                );
              });
              if (
                (i == null || i("downloading_media", 0, k.length),
                l != null && l.aborted)
              )
                throw new (o("WAAbortError").AbortError)("Export cancelled");
              for (var I = 0; I < k.length; I++) {
                if (l != null && l.aborted)
                  throw new (o("WAAbortError").AbortError)("Export cancelled");
                try {
                  var T = yield o(
                    "WAWebFileSaverDownloadData",
                  ).getMsgDownloadData(k[I]);
                  if (
                    (T == null ? void 0 : T.blob) != null &&
                    T.blob.size <= u
                  ) {
                    var D;
                    L.push({ blob: T.blob, name: d + "/" + T.name });
                    var x = (D = k[I].id) == null ? void 0 : D.toString();
                    x != null && E.add(x);
                  }
                } catch (e) {}
                i == null || i("downloading_media", I + 1, k.length);
              }
            }
            i == null || i("formatting", 0, 1);
            var $ = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
              chatTitle: S,
              messages: v,
              includeMedia: a,
              mediaFolder: d,
              hasMoreHistory: R,
              downloadedMediaMsgIds: E,
            });
            if (l != null && l.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            i == null || i("saving", 0, 1);
            var P = S.replace(/[/\\?%*:|\"<>]/g, "_");
            if (a && L.length > 0) {
              var N = new Blob([$], { type: "text/markdown" }),
                M = [{ blob: N, name: "chat.md" }].concat(L),
                w = yield o("WAWebZipUtils").zipFiles(M);
              yield o("WAWebFileSaver").FileSaver.downloadData(
                w,
                P,
                o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
              );
              var A = Date.now() - y,
                F = {
                  messageCount: v.length,
                  mediaCount: L.length,
                  durationMs: A,
                };
              return (
                o("WAWebExportChatLogging").logExportChat({
                  exportMode: g,
                  chatType: _,
                  messageCount: F.messageCount,
                  mediaCount: F.mediaCount,
                  exportDurationMs: A,
                  exportResult: "success",
                  dateRangeUsed: h,
                  fileSizeBytes: w.size,
                }),
                F
              );
            }
            var O = new Blob([$], { type: "text/markdown" });
            yield o("WAWebFileSaver").FileSaver.downloadData(
              O,
              P,
              o("WAWebFileSaverTypes").AllowedFileExtensions.MD,
            );
            var B = Date.now() - y,
              W = {
                messageCount: v.length,
                mediaCount: L.length,
                durationMs: B,
              };
            return (
              o("WAWebExportChatLogging").logExportChat({
                exportMode: g,
                chatType: _,
                messageCount: W.messageCount,
                mediaCount: W.mediaCount,
                exportDurationMs: B,
                exportResult: "success",
                dateRangeUsed: h,
                fileSizeBytes: O.size,
              }),
              W
            );
          } catch (e) {
            var q = Date.now() - y;
            throw (
              e instanceof o("WAAbortError").AbortError
                ? o("WAWebExportChatLogging").logExportChat({
                    exportMode: g,
                    chatType: _,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: q,
                    exportResult: "cancelled",
                    dateRangeUsed: h,
                  })
                : o("WAWebExportChatLogging").logExportChat({
                    exportMode: g,
                    chatType: _,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: q,
                    exportResult: "error",
                    errorReason: e instanceof Error ? e.message : "unknown",
                    dateRangeUsed: h,
                  }),
              e
            );
          } finally {
            p = !1;
          }
        })),
        y.apply(this, arguments)
      );
    }
    l.exportChat = h;
  },
  98,
);
