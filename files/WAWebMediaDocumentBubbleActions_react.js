__d(
  "WAWebMediaDocumentBubbleActions.react",
  [
    "fbt",
    "WALogger",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebMediaDocumentUtils",
    "WAWebMediaTypes",
    "WAWebMessageBubbleActions.react",
    "WAWebNoop",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "cr:7565",
    "getErrorSafe",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T = I || (I = o("react"));
    function D(t) {
      var a = t.msg,
        i = o("WAWebMediaDocumentUtils").useIsFileInCacheState(a.unsafe()),
        l = o("WAWebMediaDocumentUtils").useIsFileSavedOnFileSystem(a.unsafe()),
        I = o("useWAWebModelValues").useModelValues(a.mediaData, [
          "mediaStage",
          "filehash",
          "filename",
        ]),
        D = function () {
          if (
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebMediaDocumentBubbleActions] handleOpenButtonClick triggered for msg: ",
                  ", filename: ",
                  "",
                ])),
              a.id.toString(),
              I.filename || "null",
            ),
            n("cr:7565") == null)
          ) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebMediaDocumentBubbleActions] WindowsMediaFilesHelpers is null for handleOpenButtonClick, msg: ",
                  "",
                ])),
              a.id.toString(),
            );
            return;
          }
          var t = o("WAWebStateUtils").unproxy(a).unsafe();
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMediaDocumentBubbleActions] Displaying file opening toast and initiating file open for msg: ",
                "",
              ])),
            a.id.toString(),
          ),
            o("WAWebMediaDocumentUtils").displayFileOpeningToast(t),
            n("cr:7565")
              .openMediaFile(t)
              .then(function () {
                o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebMediaDocumentBubbleActions] Successfully opened media file for msg: ",
                      "",
                    ])),
                  a.id.toString(),
                );
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Failed to open media file for msg ",
                        "",
                      ])),
                    a.id.toString(),
                  )
                  .catching(r("getErrorSafe")(e));
              }));
        },
        x = function () {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMediaDocumentBubbleActions] handleSaveAsButtonClick triggered for msg: ",
                ", filename: ",
                "",
              ])),
            a.id.toString(),
            I.filename || "null",
          );
          try {
            (o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebMediaDocumentBubbleActions] Initiating FileSaver download for msg: ",
                  "",
                ])),
              a.id.toString(),
            ),
              o("WAWebFileSaver").FileSaver.initDownload(
                o("WAWebStateUtils").unproxy(a).unsafe(),
              ),
              o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Successfully initiated save as for msg: ",
                    "",
                  ])),
                a.id.toString(),
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAWebMediaDocumentBubbleActions] Failed to initiate save as for msg ",
                    "",
                  ])),
                a.id.toString(),
              )
              .catching(r("getErrorSafe")(e));
          }
        },
        $ = function () {
          if (
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebMediaDocumentBubbleActions] handleDownloadButtonClick triggered for msg: ",
                  ", filename: ",
                  "",
                ])),
              a.id.toString(),
              I.filename || "null",
            ),
            n("cr:7565") == null)
          ) {
            o("WALogger").ERROR(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAWebMediaDocumentBubbleActions] WindowsMediaFilesHelpers is null for handleDownloadButtonClick, msg: ",
                  "",
                ])),
              a.id.toString(),
            );
            return;
          }
          var e = o("WAWebStateUtils").unproxy(a).unsafe();
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[WAWebMediaDocumentBubbleActions] Initiating file save for msg: ",
                "",
              ])),
            a.id.toString(),
          ),
            n("cr:7565")
              .saveMediaFile(e)
              .then(function () {
                (o("WALogger").LOG(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebMediaDocumentBubbleActions] Successfully downloaded/saved media file for msg: ",
                      "",
                    ])),
                  a.id.toString(),
                ),
                  o("WAWebMediaDocumentUtils").displayDownloadingToast(e));
              })
              .catch(function (e) {
                (o("WALogger")
                  .ERROR(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Failed to download/save media file for msg ",
                        "",
                      ])),
                    a.id.toString(),
                  )
                  .catching(r("getErrorSafe")(e)),
                  o("WAWebToastManager").ToastManager.open(
                    T.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Download failed. Please check your connection and try again.",
                      ),
                    }),
                  ));
              }));
        },
        P = function () {
          return r("WAWebEnvironment").isWindows
            ? l === !0 ||
              I.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED ||
              (I.mediaStage === o("WAWebMediaTypes").MediaDataStage.INIT &&
                i === !0)
              ? (o("WALogger").LOG(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAWebMediaDocumentBubbleActions] Returning Open/Save As actions for msg: ",
                      " (file resolved or cached)",
                    ])),
                  a.id.toString(),
                ),
                [
                  { label: s._(/*BTDS*/ "Open"), onClick: D },
                  { label: s._(/*BTDS*/ "Save as..."), onClick: x },
                ])
              : I.mediaStage ===
                    o("WAWebMediaTypes").MediaDataStage.DECRYPTING ||
                  I.mediaStage === o("WAWebMediaTypes").MediaDataStage.FETCHING
                ? (o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAWebMediaDocumentBubbleActions] Returning Downloading action for msg: ",
                        " (stage: ",
                        ")",
                      ])),
                    a.id.toString(),
                    I.mediaStage,
                  ),
                  [
                    {
                      label: s._(/*BTDS*/ "Downloading..."),
                      onClick: r("WAWebNoop"),
                      disabled: !0,
                    },
                  ])
                : I.mediaStage ===
                      o("WAWebMediaTypes").MediaDataStage.SENDING ||
                    I.mediaStage ===
                      o("WAWebMediaTypes").MediaDataStage.UPLOADING
                  ? (o("WALogger").LOG(
                      L ||
                        (L = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAWebMediaDocumentBubbleActions] Returning Uploading action for msg: ",
                          " (stage: ",
                          ")",
                        ])),
                      a.id.toString(),
                      I.mediaStage,
                    ),
                    [
                      {
                        label: s._(/*BTDS*/ "Uploading..."),
                        onClick: r("WAWebNoop"),
                        disabled: !0,
                      },
                    ])
                  : (o("WALogger").LOG(
                      E ||
                        (E = babelHelpers.taggedTemplateLiteralLoose([
                          "[WAWebMediaDocumentBubbleActions] Returning Download action for msg: ",
                          " (default case, stage: ",
                          ")",
                        ])),
                      a.id.toString(),
                      I.mediaStage,
                    ),
                    [{ label: s._(/*BTDS*/ "Download"), onClick: $ }])
            : [];
        };
      if (!r("WAWebEnvironment").isWindows || n("cr:7565") == null) return null;
      var N = P();
      return (
        o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "[WAWebMediaDocumentBubbleActions] Rendering BubbleActions component for msg: ",
              " with ",
              " action(s)",
            ])),
          a.id.toString(),
          N.length,
        ),
        T.jsx(o("WAWebMessageBubbleActions.react").BubbleActions, {
          items: N,
          theme: o("WAWebMessageBubbleActions.react").BubbleActionsTheme
            .MEDIA_DOCUMENT,
        })
      );
    }
    ((D.displayName = D.name + " [from " + i.id + "]"), (l.default = D));
  },
  226,
);
