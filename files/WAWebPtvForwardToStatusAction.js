__d(
  "WAWebPtvForwardToStatusAction",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebABProps",
    "WAWebConnGetters",
    "WAWebConnModel",
    "WAWebDownloadVideoThumbnail",
    "WAWebLazyLoadedRetriable",
    "WAWebLogStatusPost",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaLoad",
    "WAWebMediaOpaqueData",
    "WAWebMsgType",
    "WAWebNewsletterShareToStatusToast",
    "WAWebNewsletterStatusCardPalette",
    "WAWebPrepRawMedia",
    "WAWebPromiseQueue",
    "WAWebPtvStatusCard",
    "WAWebPtvStatusEligibility",
    "WAWebSendMsgResultAction",
    "WAWebWamEnumStatusPostOrigin",
    "WAWebWamEnumWebcRmrReasonCode",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 1e3,
      m = 6e4,
      p = new (o("WAWebPromiseQueue").PromiseQueue)(),
      _ = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebNewsletterStatusCardVideoEncoder",
        )
          .__setRef("WAWebPtvForwardToStatusAction")
          .load();
      }, "PtvStatusCardVideoEncoder");
    async function f(t) {
      var n = t.caption,
        r = t.msg,
        a = t.retryCount,
        i = t.statusChat;
      if (!o("WAWebPtvStatusEligibility").canPostOwnPtvAsStatus(r)) {
        (o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[ptv-status] the video note can no longer go to status",
              ])),
          )
          .sendLogs("ptv-status-not-eligible"),
          o(
            "WAWebNewsletterShareToStatusToast",
          ).showShareToStatusFailedToast());
        return;
      }
      var l = await p.enqueue(function () {
        return g(r);
      });
      if (l == null) {
        o("WAWebNewsletterShareToStatusToast").showShareToStatusFailedToast();
        return;
      }
      var s = await h(l, n, i),
        u = s == null ? void 0 : s.messageSendResult;
      (u !== o("WAWebSendMsgResultAction").SendMsgResult.OK &&
        u !== o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED &&
        o("WAWebNewsletterShareToStatusToast").showShareToStatusFailedToast(),
        o("WAWebLogStatusPost").logStatusPost({
          statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(u),
          msg: s == null ? void 0 : s.msg,
          statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN
            .FORWARD_FROM_MESSAGES,
          mediaType: o("WAWebLogStatusPost").getStatusMediaType(
            o("WAWebMsgType").MSG_TYPE.VIDEO,
          ),
          hasCaption: !!n,
          hasFilters: !1,
          retryCount: a,
          statusContainsMusic: !1,
        }));
    }
    async function g(e) {
      var t = o("WAWebNewsletterShareToStatusToast").showPreparingStatusToast();
      try {
        var n = await y(e),
          a = o("WAWebPrepRawMedia").prepRawMedia(
            await r("WAWebMediaOpaqueData").createFromData(n, n.type),
            {},
          ),
          i = await a.waitForPrep();
        if (i.type !== o("WAWebMsgType").MSG_TYPE.VIDEO)
          throw r("err")(
            "forwardOwnPtvToStatus: the card was not prepared as a video",
          );
        return a;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[ptv-status] could not make the video note into a status card video",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("ptv-status-card-video-failed"),
          null
        );
      } finally {
        t();
      }
    }
    async function h(e, t, n) {
      try {
        return await e.sendToChat({
          chat: n,
          options: { caption: t, type: o("WAWebMsgType").MSG_TYPE.VIDEO },
        });
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[ptv-status] could not post the video note card as a status",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("ptv-status-post-failed"),
          null
        );
      }
    }
    async function y(e) {
      var t = await o("WAPromiseTimeout").promiseTimeout(
          Promise.all([b(e), S(e), _()]),
          m,
          "forwardOwnPtvToStatus: the video note did not load in time",
        ),
        n = t[0],
        r = t[1],
        a = t[2];
      return a({
        maxDurationMs: C(e),
        scene: o("WAWebPtvStatusCard").getPtvStatusCardScene(
          r,
          o("WAWebConnGetters").getIsSMB(o("WAWebConnModel").Conn),
        ),
        video: n,
      });
    }
    function C(e) {
      var t,
        n,
        r = o("WAWebABProps").getABPropConfigValue(
          "status_video_max_duration_second",
        ),
        a = Math.floor(
          parseFloat(
            (t = (n = e.mediaData) == null ? void 0 : n.duration) != null
              ? t
              : "",
          ),
        ),
        i = a >= 1 && a <= r ? a + 1 : r;
      return i * d;
    }
    async function b(e) {
      var t;
      ((t = e.mediaData) == null ? void 0 : t.mediaBlob) == null &&
        (await e.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .SEND_TO_CHAT,
          isUserInitiated: !0,
        }));
      var n = v(e);
      if (n == null)
        throw r("err")("forwardOwnPtvToStatus: the video note has no media");
      return n;
    }
    function v(e) {
      var t,
        n,
        a = (t = e.mediaData) == null ? void 0 : t.mediaBlob;
      if (a instanceof r("WAWebMediaOpaqueData")) return a.forceToBlob();
      if (a instanceof Blob) return a;
      var i = (n = e.mediaData) == null ? void 0 : n.filehash;
      return i != null
        ? o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(i)
        : null;
    }
    async function S(e) {
      try {
        var t = await R(e),
          n =
            t != null ? o("WAWebPtvStatusCard").getNoteColor(await L(t)) : null;
        return n != null
          ? n
          : o("WAWebNewsletterStatusCardPalette").FALLBACK_CARD_COLOR;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[ptv-status] drawing the card on the default background, as the video note's colours could not be read",
                ])),
            )
            .catching(r("getErrorSafe")(e)),
          o("WAWebNewsletterStatusCardPalette").FALLBACK_CARD_COLOR
        );
      }
    }
    async function R(e) {
      var t,
        n,
        a,
        i = e.safe();
      i.type === o("WAWebMsgType").MSG_TYPE.PTV &&
        (await o("WAWebDownloadVideoThumbnail").downloadVideoThumbnail({
          msg: i,
        }));
      var l =
        (t = (n = e.mediaData) == null ? void 0 : n.fullPreviewData) != null
          ? t
          : (a = e.mediaData) == null
            ? void 0
            : a.preview;
      return typeof l == "string"
        ? (
            await r("WAWebMediaOpaqueData").createFromBase64Preview(l)
          ).forceToBlob()
        : l == null
          ? void 0
          : l.forceToBlob();
    }
    async function L(e) {
      var t = URL.createObjectURL(e);
      try {
        var n = await o("WAWebMediaLoad").loadImage(t);
        return { source: n, width: n.naturalWidth, height: n.naturalHeight };
      } finally {
        URL.revokeObjectURL(t);
      }
    }
    l.forwardOwnPtvToStatus = f;
  },
  98,
);
