__d(
  "WAWebMediaStage.react",
  [
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebMediaUnsupportedModal.react",
    "WAWebModalManager",
    "WAWebStateUtils",
    "WAWebVideoUtils",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e, t) {
      (e.stopPropagation(),
        t.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .MEDIA_VIEWER,
          isUserInitiated: !0,
        }));
    }
    function c(e, t) {
      (e.stopPropagation(), t.cancelDownload());
    }
    function d(e, t) {
      (e.stopPropagation(),
        o("WAWebModalManager").ModalManager.open(
          s.jsx(r("WAWebMediaUnsupportedModal.react"), {
            msg: o("WAWebStateUtils").unproxy(t),
          }),
        ));
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.mediaData,
        r = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = ["mediaStage", "size", "streamable"]), (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebModelValues").useModelValues(n, a),
        l = i.mediaStage,
        m = i.size;
      if (o("WAWebVideoUtils").isMsgStreamable(r)) return null;
      switch (l) {
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
          return null;
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
          var p;
          t[1] !== r
            ? ((p = function (t) {
                return u(t, r);
              }),
              (t[1] = r),
              (t[2] = p))
            : (p = t[2]);
          var _;
          return (
            t[3] !== m || t[4] !== p
              ? ((_ = s.jsx(o("WAWebMediaStateControls.react").Download, {
                  filesize: m,
                  onClick: p,
                })),
                (t[3] = m),
                (t[4] = p),
                (t[5] = _))
              : (_ = t[5]),
            _
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING: {
          var f;
          t[6] !== r
            ? ((f = function (t) {
                return c(t, r);
              }),
              (t[6] = r),
              (t[7] = f))
            : (f = t[7]);
          var g;
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = s.jsx(o("WAWebMediaStateControls.react").Pending, {
                cancelable: !0,
              })),
              (t[8] = g))
            : (g = t[8]);
          var h;
          return (
            t[9] !== f
              ? ((h = s.jsx("div", { onClick: f, children: g })),
                (t[9] = f),
                (t[10] = h))
              : (h = t[10]),
            h
          );
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED: {
          var y;
          t[11] !== r
            ? ((y = function (t) {
                return d(t, r);
              }),
              (t[11] = r),
              (t[12] = y))
            : (y = t[12]);
          var C;
          return (
            t[13] !== m || t[14] !== y
              ? ((C = s.jsx(o("WAWebMediaStateControls.react").Download, {
                  filesize: m,
                  onClick: y,
                })),
                (t[13] = m),
                (t[14] = y),
                (t[15] = C))
              : (C = t[15]),
            C
          );
        }
      }
    }
    l.default = m;
  },
  98,
);
