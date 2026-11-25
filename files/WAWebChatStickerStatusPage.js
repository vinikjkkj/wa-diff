__d(
  "WAWebChatStickerStatusPage",
  [
    "WABase64",
    "WALogger",
    "WAWebCanvasUtils",
    "WAWebChatStickerForwardToMyStatusGating",
    "WAWebChatStickerStatusPageBackground",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebFileUtils",
    "WAWebLottieStickerFirstFrame",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebStickerUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebWebpToAnimationFrames",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 720,
      u = 1280,
      c = "image/jpeg",
      d = 0.5,
      m = 4,
      p = 128,
      _ = 4,
      f = "#0A1014";
    async function g(e) {
      var t = await C(e, await h(e));
      try {
        return await S(t, e.mediaData.filehash);
      } finally {
        t.close();
      }
    }
    async function h(e) {
      y(e) == null &&
        (await e.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .SEND_TO_CHAT,
          isUserInitiated: !0,
        }));
      var t = y(e);
      if (t == null)
        throw r("err")("renderChatStickerStatusPage: the sticker has no media");
      return t;
    }
    function y(e) {
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
    async function C(e, t) {
      return o("WAWebStickerUtils").getStickerFileType(e.mimetype) ===
        o("WAWebStickerUtils").StickerFileType.LOTTIE
        ? createImageBitmap(await r("WAWebLottieStickerFirstFrame")(e, t))
        : (await o(
              "WAWebFeatureDetectionDetectWebpSupport",
            ).detectWebpSupport())
          ? createImageBitmap(t)
          : createImageBitmap(v(await b(e, t)));
    }
    async function b(e, t) {
      var n = e.mediaData,
        a = n.rgbaBuffer,
        i = n.rgbaHeight,
        l = n.rgbaWidth;
      if (a != null) return { height: i, rgbaBuffer: a, width: l };
      var s = await r("WAWebWebpToAnimationFrames")(
          await o("WAWebFileUtils").blobToArrayBuffer(t),
        ),
        u = s.frames,
        c = s.height,
        d = s.width,
        m = u[0];
      if (m == null)
        throw r("err")(
          "renderChatStickerStatusPage: the animated sticker has no frames",
        );
      return { height: c, rgbaBuffer: m.rgbaBuffer, width: d };
    }
    function v(e) {
      var t = e.height,
        n = e.rgbaBuffer,
        a = e.width;
      if (!(a > 0 && t > 0) || n.byteLength !== a * t * m)
        throw r("err")(
          "renderChatStickerStatusPage: the sticker's decoded pixels don't match its size",
        );
      var i = o("WAWebCanvasUtils").createCanvas(a, t),
        l = i.getContext("2d");
      if (l == null)
        throw r("err")("renderChatStickerStatusPage: no 2D canvas context");
      var s = l.createImageData(a, t);
      return (s.data.set(new Uint8Array(n)), l.putImageData(s, 0, 0), i);
    }
    async function S(e, t) {
      if (e.width === 0 || e.height === 0)
        throw r("err")(
          "renderChatStickerStatusPage: the sticker's first frame is empty",
        );
      var n = o("WAWebCanvasUtils").createCanvas(s, u),
        a = n.getContext("2d");
      if (a == null)
        throw r("err")("renderChatStickerStatusPage: no 2D canvas context");
      ((a.fillStyle = o(
        "WAWebChatStickerForwardToMyStatusGating",
      ).isChatStickerStatusPageColorEnabled()
        ? R(e, t)
        : f),
        a.fillRect(0, 0, s, u));
      var i = Math.min((s * d) / e.width, u / e.height),
        l = e.width * i,
        m = e.height * i;
      return (
        a.drawImage(e, (s - l) / 2, (u - m) / 2, l, m),
        o("WAWebCanvasUtils").canvasToBlob(n, c)
      );
    }
    function R(t, n) {
      try {
        return r("WAWebChatStickerStatusPageBackground")(E(t), L(n));
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat-sticker-status-page] could not read the sticker to pick its page color",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("chat-sticker-status-page-color-failed"),
          f
        );
      }
    }
    function L(e) {
      if (e == null) return 0;
      var t = o("WABase64").decodeB64(e);
      return t.byteLength < _ ? 0 : new DataView(t).getUint32(0);
    }
    function E(e) {
      var t = Math.min(1, p / Math.max(e.width, e.height)),
        n = Math.max(1, Math.round(e.width * t)),
        a = Math.max(1, Math.round(e.height * t)),
        i = o("WAWebCanvasUtils").createCanvas(n, a),
        l = i.getContext("2d");
      if (l == null)
        throw r("err")("renderChatStickerStatusPage: no 2D canvas context");
      return (l.drawImage(e, 0, 0, n, a), l.getImageData(0, 0, n, a));
    }
    l.default = g;
  },
  98,
);
