__d(
  "WAWebMessageStickerMediaControl.react",
  [
    "WAWebMediaMissingModal.react",
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebUISpacing",
    "err",
    "react",
    "stylex",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        thumb: {
          alignItems: "x6s0dn4",
          borderStartStartRadius: "xaejkm2",
          borderStartEndRadius: "x1uuy6ko",
          borderEndEndRadius: "x1gfim23",
          borderEndStartRadius: "xqfj769",
          cursor: "x1ypdohk",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          maxWidth: "x193iq5w",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          position: "x1n2onr6",
          $$css: !0,
        },
        container: { cursor: "x1sqbtui", $$css: !0 },
      };
    function d(t) {
      var n = t.msg,
        a = o("useWAWebModelValues").useModelValues(t.mediaData, [
          "mediaStage",
          "size",
        ]),
        i = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebMediaMissingModal.react"), { msg: n.unsafe() }),
          );
        },
        l = function () {
          n.forceDownloadMediaEvenIfExpensive();
        },
        s = function () {
          n.cancelDownload();
        },
        d = function () {
          n.cancelUpload();
        },
        m = function () {
          n.resumeUpload();
        },
        p = function () {
          n.resumeRemoteUpload();
        },
        _,
        f,
        g = a.mediaStage;
      switch (g) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
          ((_ = null), (f = null));
          break;
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
          ((_ = s),
            (f = u.jsx(o("WAWebMediaStateControls.react").Pending, {
              cancelable: !0,
            })));
          break;
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          ((_ = l),
            (f = u.jsx(o("WAWebMediaStateControls.react").Download, {
              filesize: a.size,
            })));
          break;
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
          ((_ = d),
            (f = u.jsx(o("WAWebMediaStateControls.react").Pending, {
              cancelable: !0,
            })));
          break;
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          ((_ = m),
            (f = u.jsx(o("WAWebMediaStateControls.react").Upload, {
              filesize: a.size,
            })));
          break;
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          ((_ = p),
            (f = u.jsx(o("WAWebMediaStateControls.react").Upload, {
              filesize: a.size,
            })));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          ((_ = i),
            (f = u.jsx(o("WAWebMediaStateControls.react").Upload, {
              filesize: a.size,
            })));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
          ((_ = i),
            (f = u.jsx(o("WAWebMediaStateControls.react").Download, {
              filesize: a.size,
            })));
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
          f = u.jsx(o("WAWebMediaStateControls.react").Pending, {});
          break;
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
          throw r("err")("invalid value for sticker mediaStage '" + g + "'");
      }
      return u.jsxs(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.thumb,
            c.container,
            o("WAWebUISpacing").uiMargin.bottom2,
            o("WAWebUISpacing").uiPadding.bottom10,
          ),
          { onClick: _, children: [f, t.children] },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
