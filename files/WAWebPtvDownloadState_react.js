__d(
  "WAWebPtvDownloadState.react",
  [
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebVelocityTransitionGroup",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.isPlaying,
        a = e.mediaDataFileSize,
        i = e.mediaStage,
        l = e.onDownloadClick,
        u;
      e: switch (i) {
        case o("WAWebMediaTypes").MediaDataStage.INIT: {
          var c;
          (t[0] !== a || t[1] !== l
            ? ((c = s.jsx(o("WAWebMediaStateControls.react").Download, {
                filesize: a,
                onClick: l,
              })),
              (t[0] = a),
              (t[1] = l),
              (t[2] = c))
            : (c = t[2]),
            (u = c));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING: {
          var d;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s.jsx(o("WAWebMediaStateControls.react").Pending, {})),
              (t[3] = d))
            : (d = t[3]),
            (u = d));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
          var m;
          (t[4] !== a || t[5] !== l
            ? ((m = s.jsx(o("WAWebMediaStateControls.react").Download, {
                filesize: a,
                onClick: l,
              })),
              (t[4] = a),
              (t[5] = l),
              (t[6] = m))
            : (m = t[6]),
            (u = m));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
          var p;
          (t[7] !== a
            ? ((p = s.jsx(o("WAWebMediaStateControls.react").Upload, {
                filesize: a,
              })),
              (t[7] = a),
              (t[8] = p))
            : (p = t[8]),
            (u = p));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED: {
          var _;
          (t[9] !== n
            ? ((_ = n
                ? null
                : s.jsx(o("WAWebMediaStateControls.react").Play, {})),
              (t[9] = n),
              (t[10] = _))
            : (_ = t[10]),
            (u = _));
          break e;
        }
        default: {
          var f;
          (t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = s.jsx(o("WAWebMediaStateControls.react").Pending, {})),
              (t[11] = f))
            : (f = t[11]),
            (u = f));
        }
      }
      var g;
      return (
        t[12] !== u
          ? ((g = s.jsx(r("WAWebVelocityTransitionGroup"), {
              transitionName: "fade-ease-out",
              children: u,
            })),
            (t[12] = u),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    l.default = u;
  },
  98,
);
