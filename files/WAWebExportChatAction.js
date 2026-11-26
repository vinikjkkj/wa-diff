__d(
  "WAWebExportChatAction",
  [
    "WAAbortError",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBackendRuntime",
    "WAWebChatGetters",
    "WAWebDBMessageFindLocal",
    "WAWebExportChatLogging",
    "WAWebExportChatMarkdownFormatter",
    "WAWebExportChatPlainTextFormatter",
    "WAWebFileSaver",
    "WAWebFileSaverDownloadData",
    "WAWebFileSaverTypes",
    "WAWebForwardedBotMessageUtils",
    "WAWebLimitSharingUIUtils",
    "WAWebMediaLocalAvailability",
    "WAWebMessageQueryService",
    "WAWebMsgKey",
    "WAWebMsgModelFromData",
    "WAWebMsgType",
    "WAWebNullFunc",
    "WAWebZipUtils",
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
    async function y(e) {
      var t = e.chat,
        n = e.endDate,
        a = e.messageLimit,
        i = e.onProgress,
        l = e.signal,
        s = e.startDate,
        u = [],
        d = { remote: t.id },
        m = async function () {
          if (!(u.length >= a)) {
            if (l != null && l.aborted)
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            var e = await (
              o("WAWebBackendRuntime").isWebDiBackendEnabled()
                ? o("WAWebBackendRuntime").runtime(
                    o("WAWebMessageQueryService").MessageQueryService,
                  ).msgFindBefore
                : o("WAWebDBMessageFindLocal").msgFindBefore
            )({ anchor: d, count: c });
            if (!(e.status >= 400 || e.messages.length === 0)) {
              var t = !1;
              for (var p of e.messages) {
                var _,
                  f,
                  g = (_ = p.t) != null ? _ : 0,
                  y = (f = p.type) != null ? f : "";
                if (s != null && g < s) {
                  t = !0;
                  continue;
                }
                if (
                  !h.has(y) &&
                  p.subtype !== "change_username" &&
                  p.isViewOnce !== !0
                ) {
                  var C = p.ephemeralDuration;
                  if (
                    !(C != null && C !== 0) &&
                    !(n != null && g > n) &&
                    (u.push(p), u.length >= a)
                  )
                    break;
                }
              }
              var b = e.messages[0],
                v = Number.isFinite(a) ? a : -1;
              if (
                (i == null || i("loading", u.length, v),
                !t &&
                  u.length < a &&
                  (b == null ? void 0 : b.id) instanceof r("WAWebMsgKey"))
              )
                return ((d = b.id), m());
            }
          }
        };
      return (
        await m(),
        u.sort(function (e, t) {
          var n, r;
          return ((n = e.t) != null ? n : 0) - ((r = t.t) != null ? r : 0);
        }),
        u
      );
    }
    async function C(t) {
      var n,
        a = t.chat,
        i = t.endDate,
        l = t.includeMedia,
        u = t.onProgress,
        c = t.signal,
        h = t.startDate,
        C = f(a),
        b = l ? "with_media" : "text_only",
        v = h != null || i != null;
      if (g) {
        var S = new Error("An export is already in progress");
        throw (S.stack, S);
      }
      if (o("WAWebLimitSharingUIUtils").isLimitSharingReceiverEnabled(a)) {
        var R = new Error("Cannot export limit-sharing enabled chat");
        throw (R.stack, R);
      }
      var L = Date.now(),
        E = (n = t.messageLimit) != null ? n : p,
        k = "loading",
        I = 0;
      g = !0;
      try {
        u == null || u("loading", 0, 1);
        var T = await y({
          chat: a,
          endDate: i,
          messageLimit: E,
          onProgress: u,
          signal: c,
          startDate: h,
        });
        if (((I = T.length), c != null && c.aborted))
          throw new (o("WAAbortError").AbortError)("Export cancelled");
        var D = [],
          x = 0,
          $ = null;
        for (var P of T)
          try {
            D.push(o("WAWebMsgModelFromData").msgModelFromMsgData(P));
          } catch (e) {
            (x++, ($ = $ != null ? $ : r("getErrorSafe")(e)));
          }
        if ($ != null) {
          if (D.length === 0) throw $;
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[export_chat] skipped ",
                  " of ",
                  " unreadable messages (chatType=",
                  ")",
                ])),
              x,
              T.length,
              C,
            )
            .catching($)
            .sendLogs("export-chat-unreadable-messages");
        }
        var N = a.formattedTitle || a.name || "Chat",
          M = T.length >= E,
          w = [],
          A = new Set();
        if (l) {
          k = "downloading_media";
          var F = D.filter(function (e) {
            return (
              o("WAWebExportChatMarkdownFormatter").MEDIA_TYPES.has(e.type) &&
              o("WAWebMediaLocalAvailability").isMsgMediaAvailableLocally(e) &&
              !o("WAWebForwardedBotMessageUtils").isMaskedForwardedBotCopy(e)
            );
          });
          if (
            (u == null || u("downloading_media", 0, F.length),
            c != null && c.aborted)
          )
            throw new (o("WAAbortError").AbortError)("Export cancelled");
          await F.reduce(async function (e, t, n) {
            if ((await e, c != null && c.aborted))
              throw new (o("WAAbortError").AbortError)("Export cancelled");
            try {
              var r = await o("WAPromiseDelays").withTimeout(
                o("WAWebFileSaverDownloadData").getMsgDownloadData(t),
                m,
                o("WAWebNullFunc").returnNull,
              );
              if ((r == null ? void 0 : r.blob) != null && r.blob.size <= d) {
                var a;
                w.push({ blob: r.blob, name: _ + "/" + r.name });
                var i = (a = t.id) == null ? void 0 : a.toString();
                i != null && A.add(i);
              }
            } catch (e) {}
            u == null || u("downloading_media", n + 1, F.length);
          }, Promise.resolve());
        }
        ((k = "formatting"), u == null || u("formatting", 0, 1));
        var O = o("WAWebExportChatMarkdownFormatter").formatChatAsMarkdown({
            chatTitle: N,
            messages: D,
            includeMedia: l,
            mediaFolder: _,
            hasMoreHistory: M,
            downloadedMediaMsgIds: A,
          }),
          B = o("WAWebExportChatPlainTextFormatter").formatChatAsPlainText({
            messages: D,
            includeMedia: l,
            hasMoreHistory: M,
            downloadedMediaMsgIds: A,
          });
        if (c != null && c.aborted)
          throw new (o("WAAbortError").AbortError)("Export cancelled");
        ((k = "saving"), u == null || u("saving", 0, 1));
        var W = N.replace(/[/\\?%*:|\"<>]/g, "_"),
          q = new Blob([B], { type: "text/plain" }),
          U = new Blob([O], { type: "text/markdown" }),
          V = [
            { blob: q, name: "chat.txt" },
            { blob: U, name: "chat.md" },
          ].concat(w),
          H = await o("WAWebZipUtils").zipFiles(V);
        await o("WAWebFileSaver").FileSaver.downloadData(
          H,
          W,
          o("WAWebFileSaverTypes").AllowedFileExtensions.ZIP,
        );
        var G = Date.now() - L,
          z = { messageCount: D.length, mediaCount: w.length, durationMs: G };
        return (
          o("WAWebExportChatLogging").logExportChat({
            exportMode: b,
            chatType: C,
            messageCount: z.messageCount,
            mediaCount: z.mediaCount,
            exportDurationMs: G,
            exportResult: "success",
            dateRangeUsed: v,
            fileSizeBytes: H.size,
          }),
          z
        );
      } catch (e) {
        var j = Date.now() - L;
        throw (
          e instanceof o("WAAbortError").AbortError
            ? o("WAWebExportChatLogging").logExportChat({
                exportMode: b,
                chatType: C,
                messageCount: 0,
                mediaCount: 0,
                exportDurationMs: j,
                exportResult: "cancelled",
                dateRangeUsed: v,
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
                  C,
                  k,
                  I,
                  String(l),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("export-chat-failure"),
              o("WAWebExportChatLogging").logExportChat({
                exportMode: b,
                chatType: C,
                messageCount: I,
                mediaCount: 0,
                exportDurationMs: j,
                exportResult: "error",
                errorReason: e instanceof Error ? e.message : "unknown",
                dateRangeUsed: v,
              })),
          e
        );
      } finally {
        g = !1;
      }
    }
    l.exportChat = C;
  },
  98,
);
