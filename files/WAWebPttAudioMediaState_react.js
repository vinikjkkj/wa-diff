__d(
  "WAWebPttAudioMediaState.react",
  [
    "fbt",
    "WALogger",
    "WAWebAck",
    "WAWebAudioDownloadIcon.react",
    "WAWebAudioPlayIcon.react",
    "WAWebAudioUploadIcon.react",
    "WAWebMarkPlayedMsgAction",
    "WAWebMediaMissingModal.react",
    "WAWebMediaTypes",
    "WAWebModalManager",
    "WAWebMsgGetters",
    "WAWebPttAudioPlayer.react",
    "WAWebStateUtils",
    "react",
    "useWAWebCallbackOnce",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = ["ref"],
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useImperativeHandle,
      _ = m.useRef;
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, u),
        i = a.enableKbSeekSpeedChange,
        l = a.msg,
        c = o("useWAWebMsgValues").useMsgValues(a.msg.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getIsSentByMe,
          o("WAWebMsgGetters").getType,
        ]),
        m = c[0],
        f = c[1],
        g = c[2],
        h = o("useWAWebModelValues").useModelValues(a.mediaData, [
          "mediaStage",
          "size",
        ]),
        y = _(null),
        C = function () {
          a.msg.forceDownloadMediaEvenIfExpensive();
        },
        b = function () {
          a.msg.resumeUpload();
        },
        v = function () {
          a.msg.resumeRemoteUpload();
        },
        S = function () {
          o("WAWebModalManager").ModalManager.open(
            d.jsx(r("WAWebMediaMissingModal.react"), { msg: a.msg.unsafe() }),
          );
        },
        R = function () {
          a.msg.cancelUpload();
        },
        L = r("useWAWebCallbackOnce")(
          function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "mediaObject state not covered in AudioMediaState: ",
                  "",
                ])),
              h.mediaStage,
            );
          },
          [h],
        );
      switch (
        (p(n, function () {
          return {
            handleKeyActivation: function (t) {
              var e;
              (e = y.current) == null || e.handleKeyActivation(t);
            },
          };
        }),
        h.mediaStage)
      ) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED:
          return d.jsx(o("WAWebPttAudioPlayer.react").WrappedAudioPlayer, {
            ref: y,
            mediaData: o("WAWebStateUtils").unproxy(a.mediaData),
            outgoingMsg: f,
            played: o("WAWebMarkPlayedMsgAction").canMarkPlayed(l.unsafe())
              ? m === o("WAWebAck").ACK.PLAYED
              : !0,
            displayType: a.displayType,
            getSequentialMsg: a.getSequentialMsg,
            msg: o("WAWebStateUtils").unproxy(l),
            enableKbSeekSpeedChange: i,
          });
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS:
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE:
          return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
            icon: d.jsx(
              o("WAWebAudioDownloadIcon.react").AudioDownloadIcon,
              {},
            ),
            ariaLabel: s._(/*BTDS*/ "Download voice message"),
            outgoingMsg: f,
            action: C,
            msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0,
          });
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD:
          return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
            icon: d.jsx(o("WAWebAudioUploadIcon.react").AudioUploadIcon, {}),
            ariaLabel: s._(/*BTDS*/ "Upload voice message"),
            outgoingMsg: f,
            action: b,
            msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0,
          });
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD:
          return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
            icon: d.jsx(o("WAWebAudioUploadIcon.react").AudioUploadIcon, {}),
            ariaLabel: s._(/*BTDS*/ "Upload voice message"),
            outgoingMsg: f,
            action: v,
            msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0,
          });
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING:
          return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
            icon: d.jsx(o("WAWebAudioPlayIcon.react").AudioPlayIcon, {
              directional: !0,
            }),
            ariaLabel: s._(/*BTDS*/ "Play voice message"),
            outgoingMsg: f,
            action: S,
            msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0,
          });
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.SENDING: {
          var E =
            h.mediaStage === o("WAWebMediaTypes").MediaDataStage.UPLOADING;
          return d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
            action: E ? R : void 0,
            canCancel: E,
            fileSize: h.size,
            outgoingMsg: f,
            spinner: !0,
            msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0,
          });
        }
        default:
          return (
            L(),
            d.jsx(o("WAWebPttAudioPlayer.react").AudioPlayerFrame, {
              spinner: !0,
              outgoingMsg: f,
              msg: l.type === "ptt" ? o("WAWebStateUtils").unproxy(l) : void 0,
            })
          );
      }
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
