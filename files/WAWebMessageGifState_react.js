__d(
  "WAWebMessageGifState.react",
  [
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.isFailed,
        r = e.mediaDataFileSize,
        a = e.mediaStage,
        i = e.onClick,
        l = e.shouldPlay;
      switch (a) {
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
          return null;
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED: {
          if (l) {
            var u;
            return (
              t[0] !== i
                ? ((u = s.jsx(o("WAWebMediaStateControls.react").GifIcon, {
                    onClick: i,
                  })),
                  (t[0] = i),
                  (t[1] = u))
                : (u = t[1]),
              u
            );
          }
          return null;
        }
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
          var c;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = s.jsx(o("WAWebMediaStateControls.react").Pending, {
                  cancelable: !0,
                })),
                (t[2] = c))
              : (c = t[2]),
            c
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
          var d;
          return (
            t[3] !== r
              ? ((d = s.jsx(o("WAWebMediaStateControls.react").Download, {
                  filesize: r,
                })),
                (t[3] = r),
                (t[4] = d))
              : (d = t[4]),
            d
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
          var m;
          return (
            t[5] !== r
              ? ((m = s.jsx(o("WAWebMediaStateControls.react").Upload, {
                  filesize: r,
                })),
                (t[5] = r),
                (t[6] = m))
              : (m = t[6]),
            m
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.SENDING: {
          if (n) return null;
          var p;
          return (
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = s.jsx(o("WAWebMediaStateControls.react").Pending, {
                  cancelable: !0,
                })),
                (t[7] = p))
              : (p = t[7]),
            p
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          return null;
        default: {
          var _;
          return (
            t[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = s.jsx(o("WAWebMediaStateControls.react").Pending, {})),
                (t[8] = _))
              : (_ = t[8]),
            _
          );
        }
      }
    }
    l.default = u;
  },
  98,
);
