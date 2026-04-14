__d(
  "WAWebMessageGifState.react",
  ["WAWebMediaStateControls.react", "WAWebMediaTypes", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.isFailed,
        n = e.mediaDataFileSize,
        r = e.mediaStage,
        a = e.onClick,
        i = e.shouldPlay;
      switch (r) {
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
          return null;
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
          return i
            ? s.jsx(o("WAWebMediaStateControls.react").GifIcon, { onClick: a })
            : null;
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          return s.jsx(o("WAWebMediaStateControls.react").Pending, {
            cancelable: !0,
          });
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          return s.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: n,
          });
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          return s.jsx(o("WAWebMediaStateControls.react").Upload, {
            filesize: n,
          });
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
          return t
            ? null
            : s.jsx(o("WAWebMediaStateControls.react").Pending, {
                cancelable: !0,
              });
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          return null;
        default:
          return s.jsx(o("WAWebMediaStateControls.react").Pending, {});
      }
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
