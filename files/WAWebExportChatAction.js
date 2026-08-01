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
      c = 50,
      d = 15 * 1024 * 1024,
      m = 3e4,
      p = 1e5,
      _ = "media";
    function f(e) {
      return o("WAWebChatGetters").getIsGroup(e)
        ? "group"
        : o("WAWebChatGetters").getIsBroadcast(e)
          ? "broadcast"
          : "individual";
    }
    var g = !1,
      h = new Set([
        (u = o("WAWebMsgType")).MSG_TYPE.PROTOCOL,
        u.MSG_TYPE.REACTION,
        u.MSG_TYPE.REACTION_ENC,
        u.MSG_TYPE.POLL_UPDATE,
        u.MSG_TYPE.KEEP_IN_CHAT,
        u.MSG_TYPE.PIN_MESSAGE,
      ]);
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            a = e.endDate,
            i = e.messageLimit,
            l = e.onProgress,
            s = e.signal,
            u = e.startDate,
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
                      count: c,
                    });
                    if (!(e.status >= 400 || e.messages.length === 0)) {
                      var t = !1;
                      for (var n of e.messages) {
                        var _,
                          f,
                          g = (_ = n.t) != null ? _ : 0,
                          y = (f = n.type) != null ? f : "";
                        if (u != null && g < u) {
                          t = !0;
                          continue;
                        }
                        if (
                          !h.has(y) &&
                          n.subtype !== "change_username" &&
                          n.isViewOnce !== !0
                        ) {
                          var C = n.ephemeralDuration;
                          if (
                            !(C != null && C !== 0) &&
                            !(a != null && g > a) &&
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
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = t.chat,
            l = t.endDate,
            u = t.includeMedia,
            c = t.onProgress,
            h = t.signal,
            C = t.startDate,
            b = f(i),
            v = u ? "with_media" : "text_only",
            S = C != null || l != null;
          if (g) {
            var R = new Error("An export is already in progress");
            throw (R.stack, R);
          }
          if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(i)) {
            var L = new Error("Cannot export limit-sharing enabled chat");
            throw (L.stack, L);
          }
          var E = Date.now(),
            k = (a = t.messageLimit) != null ? a : p,
            I = "loading",
            T = 0;
          g = !0;
          try {
            c == null || c("loading", 0, 1);
            var D = yield y({
              chat: i,
              endDate: l,
              messageLimit: k,
              onProgress: c,
              signal: h,
              startDate: C,
            });
            if (((T = D.length), h != null && h.aborted))
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var x = D.map(function (e) {
                return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
              }),
              $ = i.formattedTitle || i.name || "Chat",
              P = D.length >= k,
              N = [],
              M = new Set();
            if (u) {
              I = "downloading_media";
              var w = x.filter(function (e) {
                return (
                  o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(
                    e.type,
                  ) &&
                  o("WAWebFileSaverDownloadData").isMsgMediaAvailableLocally(e)
                );
              });
              if (
                (c == null || c("downloading_media", 0, w.length),
                h != null && h.aborted)
              )
                throw new (o("WAAbortError").AbortError)("Export cancelled");
              yield w.reduce(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e, t, n) {
                      if ((yield e, h != null && h.aborted))
                        throw new (o("WAAbortError").AbortError)(
                          "Export cancelled",
                        );
                      try {
                        var r = yield o("WAPromiseDelays").withTimeout(
                          o("WAWebFileSaverDownloadData").getMsgDownloadData(t),
                          m,
                          o("WAWebNullFunc").returnNull,
                        );
                        if (
                          (r == null ? void 0 : r.blob) != null &&
                          r.blob.size <= d
                        ) {
                          var a;
                          N.push({ blob: r.blob, name: _ + "/" + r.name });
                          var i = (a = t.id) == null ? void 0 : a.toString();
                          i != null && M.add(i);
                        }
                      } catch (e) {}
                      c == null || c("downloading_media", n + 1, w.length);
                    },
                  );
                  return function (t, n, r) {
                    return e.apply(this, arguments);
                  };
                })(),
                (s || (s = n("Promise"))).resolve(),
              );
            }
            ((I = "formatting"), c == null || c("formatting", 0, 1));
            var A = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
                chatTitle: $,
                messages: x,
                includeMedia: u,
                mediaFolder: _,
                hasMoreHistory: P,
                downloadedMediaMsgIds: M,
              }),
              F = o("WAWebExportChatPlainTextFormatter").formatChatAsPlainText({
                messages: x,
                includeMedia: u,
                hasMoreHistory: P,
                downloadedMediaMsgIds: M,
              });
            if (h != null && h.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            ((I = "saving"), c == null || c("saving", 0, 1));
            var O = $.replace(/[/\\?%*:|\"<>]/g, "_"),
              B = new Blob([F], { type: "text/plain" }),
              W = new Blob([A], { type: "text/markdown" }),
              q = [
                { blob: B, name: "chat.txt" },
                { blob: W, name: "chat.md" },
              ].concat(N),
              U = yield o("WAWebZipUtils").zipFiles(q);
            yield o("WAWebFileSaver").FileSaver.downloadData(
              U,
              O,
              o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
            );
            var V = Date.now() - E,
              H = {
                messageCount: x.length,
                mediaCount: N.length,
                durationMs: V,
              };
            return (
              o("WAWebExportChatLogging").logExportChat({
                exportMode: v,
                chatType: b,
                messageCount: H.messageCount,
                mediaCount: H.mediaCount,
                exportDurationMs: V,
                exportResult: "success",
                dateRangeUsed: S,
                fileSizeBytes: U.size,
              }),
              H
            );
          } catch (t) {
            var G = Date.now() - E;
            throw (
              t instanceof o("WAAbortError").AbortError
                ? o("WAWebExportChatLogging").logExportChat({
                    exportMode: v,
                    chatType: b,
                    messageCount: 0,
                    mediaCount: 0,
                    exportDurationMs: G,
                    exportResult: "cancelled",
                    dateRangeUsed: S,
                  })
                : (o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[export_chat] export failed (chatType=",
                          ", phase=",
                          ", messagesLoaded=",
                          ", includeMedia=",
                          ")",
                        ])),
                      b,
                      I,
                      T,
                      String(u),
                    )
                    .catching(r("getErrorSafe")(t))
                    .sendLogs("export-chat-failure"),
                  o("WAWebExportChatLogging").logExportChat({
                    exportMode: v,
                    chatType: b,
                    messageCount: T,
                    mediaCount: 0,
                    exportDurationMs: G,
                    exportResult: "error",
                    errorReason: t instanceof Error ? t.message : "unknown",
                    dateRangeUsed: S,
                  })),
              t
            );
          } finally {
            g = !1;
          }
        })),
        v.apply(this, arguments)
      );
    }
    l.exportChat = b;
  },
  98,
);
