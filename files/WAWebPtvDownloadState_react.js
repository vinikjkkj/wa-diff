__d(
  "WAWebPtvDownloadState.react",
  [
    "WAWebMediaStateControls.react",
    "WAWebMediaTypes",
    "WAWebVelocityTransitionGroup",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.isPlaying,
        n = e.mediaDataFileSize,
        a = e.mediaStage,
        i = e.onDownloadClick,
        l = null;
      switch (a) {
        case o("WAWebMediaTypes").MediaDataStage.INIT:
          l = s.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: n,
            onClick: i,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
          l = s.jsx(o("WAWebMediaStateControls.react").Pending, {});
          break;
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          l = s.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: n,
            onClick: i,
          });
          break;
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          l = s.jsx(o("WAWebMediaStateControls.react").Upload, { filesize: n });
          break;
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
          l = t ? null : s.jsx(o("WAWebMediaStateControls.react").Play, {});
          break;
        default:
          l = s.jsx(o("WAWebMediaStateControls.react").Pending, {});
          break;
      }
      return s.jsx(r("WAWebVelocityTransitionGroup"), {
        transitionName: "fade-ease-out",
        children: l,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
