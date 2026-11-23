__d(
  "WAWebChatStickerStatusPage",
  [
    "WALogger",
    "WAWebCanvasUtils",
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
      _ = "#0A1014",
      f = 0.25,
      g = [
        [0, 0.65],
        [0.25, 0.55],
        [0.5, 0.33],
        [0.75, 0.1],
        [1, 0],
      ];
    async function h(e) {
      var t = await b(e, await y(e));
      try {
        return await R(t);
      } finally {
        t.close();
      }
    }
    async function y(e) {
      C(e) == null &&
        (await e.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .SEND_TO_CHAT,
          isUserInitiated: !0,
        }));
      var t = C(e);
      if (t == null)
        throw r("err")("renderChatStickerStatusPage: the sticker has no media");
      return t;
    }
    function C(e) {
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
    async function b(e, t) {
      return o("WAWebStickerUtils").getStickerFileType(e.mimetype) ===
        o("WAWebStickerUtils").StickerFileType.LOTTIE
        ? createImageBitmap(await r("WAWebLottieStickerFirstFrame")(e, t))
        : (await o(
              "WAWebFeatureDetectionDetectWebpSupport",
            ).detectWebpSupport())
          ? createImageBitmap(t)
          : createImageBitmap(S(await v(e, t)));
    }
    async function v(e, t) {
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
    function S(e) {
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
    async function R(e) {
      if (e.width === 0 || e.height === 0)
        throw r("err")(
          "renderChatStickerStatusPage: the sticker's first frame is empty",
        );
      var t = o("WAWebCanvasUtils").createCanvas(s, u),
        n = t.getContext("2d");
      if (n == null)
        throw r("err")("renderChatStickerStatusPage: no 2D canvas context");
      ((n.fillStyle = E(e)), n.fillRect(0, 0, s, u), L(n));
      var a = Math.min((s * d) / e.width, u / e.height),
        i = e.width * a,
        l = e.height * a;
      return (
        n.drawImage(e, (s - i) / 2, (u - l) / 2, i, l),
        o("WAWebCanvasUtils").canvasToBlob(t, c)
      );
    }
    function L(e) {
      var t = u * f,
        n = e.createLinearGradient(0, 0, 0, t);
      (g.forEach(function (e) {
        var t = e[0],
          r = e[1];
        n.addColorStop(t, "rgba(0, 0, 0, " + r + ")");
      }),
        (e.fillStyle = n),
        e.fillRect(0, 0, s, t));
    }
    function E(t) {
      try {
        return r("WAWebChatStickerStatusPageBackground")(k(t));
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
          _
        );
      }
    }
    function k(e) {
      var t = Math.min(1, p / Math.max(e.width, e.height)),
        n = Math.max(1, Math.round(e.width * t)),
        a = Math.max(1, Math.round(e.height * t)),
        i = o("WAWebCanvasUtils").createCanvas(n, a),
        l = i.getContext("2d");
      if (l == null)
        throw r("err")("renderChatStickerStatusPage: no 2D canvas context");
      return (l.drawImage(e, 0, 0, n, a), l.getImageData(0, 0, n, a));
    }
    l.default = h;
  },
  98,
);
