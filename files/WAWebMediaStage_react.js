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
      var t = e.mediaData,
        n = e.msg,
        r = o("useWAWebModelValues").useModelValues(t, [
          "mediaStage",
          "size",
          "streamable",
        ]),
        a = r.mediaStage,
        i = r.size;
      if (o("WAWebVideoUtils").isMsgStreamable(n)) return null;
      switch (a) {
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
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          return s.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: i,
            onClick: function (t) {
              return u(t, n);
            },
          });
        case o("WAWebMediaTypes").MediaDataStage.FETCHING:
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
          return s.jsx("div", {
            onClick: function (t) {
              return c(t, n);
            },
            children: s.jsx(o("WAWebMediaStateControls.react").Pending, {
              cancelable: !0,
            }),
          });
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED:
          return s.jsx(o("WAWebMediaStateControls.react").Download, {
            filesize: i,
            onClick: function (t) {
              return d(t, n);
            },
          });
      }
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
