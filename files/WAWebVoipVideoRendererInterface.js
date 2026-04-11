__d(
  "WAWebVoipVideoRendererInterface",
  ["$InternalEnum", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
        DEFAULT: 0,
        RASTER: 1,
        VIDEOFRAME: 2,
        WEBGL: 3,
        WEBCODECS_H264: 4,
        WEBGPU: 5,
      }),
      s = n("$InternalEnum")({
        DEFAULT: 0,
        MAIN_THREAD: 1,
        SINGLE_WORKER: 2,
        WORKER_PER_CANVAS: 3,
        POOLED_WORKERS: 4,
      }),
      u = "selfPreviewJid";
    ((l.WAWebVoipVideoRendererType = e),
      (l.WAWebVoipVideoRendererThreadingMode = s),
      (l.selfPreviewJid = u),
      (l.onRenderCallbackNoop = r("WAWebNoop")));
  },
  98,
);
