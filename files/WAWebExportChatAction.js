__d(
  "WAWebExportChatAction",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 50,
      u = 15 * 1024 * 1024,
      c = 3e4,
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
        (e = o("WAWebMsgType")).MSG_TYPE.PROTOCOL,
        e.MSG_TYPE.REACTION,
        e.MSG_TYPE.REACTION_ENC,
        e.MSG_TYPE.POLL_UPDATE,
        e.MSG_TYPE.KEEP_IN_CHAT,
        e.MSG_TYPE.PIN_MESSAGE,
      ]);
    async function g(e, t, n, a, i, l) {
      var u = [],
        c = { remote: e.id },
        d = async function () {
          if (!(u.length >= t)) {
            if (i != null && i.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var e = await o("WAWebDBMessageFindLocal").msgFindBefore({
              anchor: c,
              count: s,
            });
            if (!(e.status >= 400 || e.messages.length === 0)) {
              var m = !1;
              for (var p of e.messages) {
                var _,
                  g,
                  h = (_ = p.t) != null ? _ : 0,
                  y = (g = p.type) != null ? g : "";
                if (n != null && h < n) {
                  m = !0;
                  continue;
                }
                if (!f.has(y) && p.isViewOnce !== !0) {
                  var C = p.ephemeralDuration;
                  if (
                    !(C != null && C !== 0) &&
                    !(a != null && h > a) &&
                    (u.push(p), u.length >= t)
                  )
                    break;
                }
              }
              var b = e.messages[0],
                v = Number.isFinite(t) ? t : -1;
              if (
                (l == null || l("loading", u.length, v),
                !m &&
                  u.length < t &&
                  (b == null ? void 0 : b.id) instanceof r("WAWebMsgKey"))
              )
                return ((c = b.id), d());
            }
          }
        };
      return (
        await d(),
        u.sort(function (e, t) {
          var n, r;
          return ((n = e.t) != null ? n : 0) - ((r = t.t) != null ? r : 0);
        }),
        u
      );
    }
    async function h(e) {
      var t,
        n = e.chat,
        r = e.endDate,
        a = e.includeMedia,
        i = e.onProgress,
        l = e.signal,
        s = e.startDate,
        f = p(n),
        h = a ? "with_media" : "text_only",
        y = s != null || r != null;
      if (_) {
        var C = new Error("An export is already in progress");
        throw (C.stack, C);
      }
      if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(n)) {
        var b = new Error("Cannot export limit-sharing enabled chat");
        throw (b.stack, b);
      }
      var v = Date.now(),
        S = (t = e.messageLimit) != null ? t : d;
      _ = !0;
      try {
        i == null || i("loading", 0, 1);
        var R = await g(n, S, s, r, l, i);
        if (l != null && l.aborted)
          throw new (o("WAAbortError").AbortError)("Export cancelled");
        var L = R.map(function (e) {
            return o("WAWebMsgModelFromData").msgModelFromMsgData(e);
          }),
          E = n.formattedTitle || n.name || "Chat",
          k = R.length >= S,
          I = [],
          T = new Set();
        if (a) {
          var D = L.filter(function (e) {
            return o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(
              e.type,
            );
          });
          if (
            (i == null || i("downloading_media", 0, D.length),
            l != null && l.aborted)
          )
            throw new (o("WAAbortError").AbortError)("Export cancelled");
          await D.reduce(async function (e, t, n) {
            if ((await e, l != null && l.aborted))
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            try {
              var r = await o("WAPromiseDelays").withTimeout(
                o("WAWebFileSaverDownloadData").getMsgDownloadData(t),
                c,
                o("WAWebNullFunc").returnNull,
              );
              if ((r == null ? void 0 : r.blob) != null && r.blob.size <= u) {
                var a;
                I.push({ blob: r.blob, name: m + "/" + r.name });
                var s = (a = t.id) == null ? void 0 : a.toString();
                s != null && T.add(s);
              }
            } catch (e) {}
            i == null || i("downloading_media", n + 1, D.length);
          }, Promise.resolve());
        }
        i == null || i("formatting", 0, 1);
        var x = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
            chatTitle: E,
            messages: L,
            includeMedia: a,
            mediaFolder: m,
            hasMoreHistory: k,
            downloadedMediaMsgIds: T,
          }),
          $ = o("WAWebExportChatPlainTextFormatter").formatChatAsPlainText({
            messages: L,
            includeMedia: a,
            hasMoreHistory: k,
            downloadedMediaMsgIds: T,
          });
        if (l != null && l.aborted)
          throw new (o("WAAbortError").AbortError)("Export cancelled");
        i == null || i("saving", 0, 1);
        var P = E.replace(/[/\\?%*:|\"<>]/g, "_"),
          N = new Blob([$], { type: "text/plain" }),
          M = new Blob([x], { type: "text/markdown" }),
          w = [
            { blob: N, name: "chat.txt" },
            { blob: M, name: "chat.md" },
          ].concat(I),
          A = await o("WAWebZipUtils").zipFiles(w);
        await o("WAWebFileSaver").FileSaver.downloadData(
          A,
          P,
          o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
        );
        var F = Date.now() - v,
          O = { messageCount: L.length, mediaCount: I.length, durationMs: F };
        return (
          o("WAWebExportChatLogging").logExportChat({
            exportMode: h,
            chatType: f,
            messageCount: O.messageCount,
            mediaCount: O.mediaCount,
            exportDurationMs: F,
            exportResult: "success",
            dateRangeUsed: y,
            fileSizeBytes: A.size,
          }),
          O
        );
      } catch (e) {
        var B = Date.now() - v;
        throw (
          e instanceof o("WAAbortError").AbortError
            ? o("WAWebExportChatLogging").logExportChat({
                exportMode: h,
                chatType: f,
                messageCount: 0,
                mediaCount: 0,
                exportDurationMs: B,
                exportResult: "cancelled",
                dateRangeUsed: y,
              })
            : o("WAWebExportChatLogging").logExportChat({
                exportMode: h,
                chatType: f,
                messageCount: 0,
                mediaCount: 0,
                exportDurationMs: B,
                exportResult: "error",
                errorReason: e instanceof Error ? e.message : "unknown",
                dateRangeUsed: y,
              }),
          e
        );
      } finally {
        _ = !1;
      }
    }
    l.exportChat = h;
  },
  98,
);
