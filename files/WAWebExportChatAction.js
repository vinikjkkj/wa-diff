__d(
  "WAWebExportChatAction",
  [
    "Promise",
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
      s,
      u = 50,
      c = 15 * 1024 * 1024,
      d = 1e5,
      m = "media";
    function p(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? "group"
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? "broadcast"
          : "individual";
    }
    var _ = !1,
      f = new Set([
        (s = o("WAWebMsgType")).MSG_TYPE.PROTOCOL,
        s.MSG_TYPE.REACTION,
        s.MSG_TYPE.REACTION_ENC,
        s.MSG_TYPE.POLL_UPDATE,
        s.MSG_TYPE.KEEP_IN_CHAT,
        s.MSG_TYPE.PIN_MESSAGE,
      ]);
    function g(e, t, n, r, o, a) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
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
                            g,
                            h = (_ = p.t) != null ? _ : 0,
                            y = (g = p.type) != null ? g : "";
                          if (a != null && h < a) {
                            n = !0;
                            continue;
                          }
                          if (!f.has(y) && p.isViewOnce !== !0) {
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
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r,
            a = t.chat,
            i = t.endDate,
            l = t.includeMedia,
            s = t.onProgress,
            u = t.signal,
            f = t.startDate,
            h = p(a),
            y = l ? "with_media" : "text_only",
            C = f != null || i != null;
          if (_) throw new Error("An export is already in progress");
          if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(a))
            throw new Error("Cannot export limit-sharing enabled chat");
          var b = Date.now(),
            v = (r = t.messageLimit) != null ? r : d;
          _ = !0;
          try {
            s == null || s("loading", 0, 1);
            var S = yield g(a, v, f, i, u, s);
            if (u != null && u.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var R = S.map(function (e) {
                return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
              }),
              L = a.formattedTitle || a.name || "Chat",
              E = S.length >= v,
              k = [],
              I = new Set();
            if (l) {
              var T = R.filter(function (e) {
                return o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(
                  e.type,
                );
              });
              if (
                (s == null || s("downloading_media", 0, T.length),
                u != null && u.aborted)
              )
                throw new (o("WAAbortError").AbortError)("Export cancelled");
              yield T.reduce(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t, n) {
                      if ((yield e, u != null && u.aborted))
                        throw new (o("WAAbortError").AbortError)(
                          "Export cancelled",
                        );
                      try {
                        var r = yield o(
                          "WAWebFileSaverDownloadData",
                        ).getMsgDownloadData(t);
                        if (
                          (r == null ? void 0 : r.blob) != null &&
                          r.blob.size <= c
                        ) {
                          var a;
                          k.push({ blob: r.blob, name: m + "/" + r.name });
                          var i = (a = t.id) == null ? void 0 : a.toString();
                          i != null && I.add(i);
                        }
                      } catch (e) {}
                      s == null || s("downloading_media", n + 1, T.length);
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
            var D = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
              chatTitle: L,
              messages: R,
              includeMedia: l,
              mediaFolder: m,
              hasMoreHistory: E,
              downloadedMediaMsgIds: I,
            });
            if (u != null && u.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            s == null || s("saving", 0, 1);
            var x = L.replace(/[/\\?%*:|\"<>]/g, "_");
            if (l && k.length > 0) {
              var $ = new Blob([D], { type: "text/markdown" }),
                P = [{ blob: $, name: "chat.md" }].concat(k),
                N = yield o("WAWebZipUtils").zipFiles(P);
              yield o("WAWebFileSaver").FileSaver.downloadData(
                N,
                x,
                o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
              );
              var M = Date.now() - b,
                w = {
                  messageCount: R.length,
                  mediaCount: k.length,
                  durationMs: M,
                };
              return (
                o("WAWebExportChatLogging").logExportChat({
                  exportMode: y,
                  chatType: h,
                  messageCount: w.messageCount,
                  mediaCount: w.mediaCount,
                  exportDurationMs: M,
                  exportResult: "success",
                  dateRangeUsed: C,
                  fileSizeBytes: N.size,
                }),
                w
              );
            }
            var A = new Blob([D], { type: "text/markdown" });
            yield o("WAWebFileSaver").FileSaver.downloadData(
              A,
              x,
              o("WAWebFileSaverTypes").AllowedFileExtensions.MD,
            );
            var F = Date.now() - b,
              O = {
                messageCount: R.length,
                mediaCount: k.length,
                durationMs: F,
              };
            return (
              o("WAWebExportChatLogging").logExportChat({
                exportMode: y,
                chatType: h,
                messageCount: O.messageCount,
                mediaCount: O.mediaCount,
                exportDurationMs: F,
                exportResult: "success",
                dateRangeUsed: C,
                fileSizeBytes: A.size,
              }),
              O
            );
          } catch (e) {
            var B = Date.now() - b;
            throw (
              e instanceof o("WAAbortError").AbortError
                ? o("WAWebExportChatLogging").logExportChat({
                    exportMode: y,
                    chatType: h,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: B,
                    exportResult: "cancelled",
                    dateRangeUsed: C,
                  })
                : o("WAWebExportChatLogging").logExportChat({
                    exportMode: y,
                    chatType: h,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: B,
                    exportResult: "error",
                    errorReason: e instanceof Error ? e.message : "unknown",
                    dateRangeUsed: C,
                  }),
              e
            );
          } finally {
            _ = !1;
          }
        })),
        C.apply(this, arguments)
      );
    }
    l.exportChat = y;
  },
  98,
);
