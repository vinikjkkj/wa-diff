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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(31),
        a = t.msg,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["mediaStage", "size"]), (n[0] = i))
        : (i = n[0]);
      var l = o("useWAWebModelValues").useModelValues(t.mediaData, i),
        s;
      n[1] !== a
        ? ((s = function () {
            o("WAWebModalManager").ModalManager.open(
              u.jsx(r("WAWebMediaMissingModal.react"), { msg: a.unsafe() }),
            );
          }),
          (n[1] = a),
          (n[2] = s))
        : (s = n[2]);
      var d = s,
        m;
      n[3] !== a
        ? ((m = function () {
            a.forceDownloadMediaEvenIfExpensive();
          }),
          (n[3] = a),
          (n[4] = m))
        : (m = n[4]);
      var p = m,
        _;
      n[5] !== a
        ? ((_ = function () {
            a.cancelDownload();
          }),
          (n[5] = a),
          (n[6] = _))
        : (_ = n[6]);
      var f = _,
        g;
      n[7] !== a
        ? ((g = function () {
            a.cancelUpload();
          }),
          (n[7] = a),
          (n[8] = g))
        : (g = n[8]);
      var h = g,
        y;
      n[9] !== a
        ? ((y = function () {
            a.resumeUpload();
          }),
          (n[9] = a),
          (n[10] = y))
        : (y = n[10]);
      var C = y,
        b;
      n[11] !== a
        ? ((b = function () {
            a.resumeRemoteUpload();
          }),
          (n[11] = a),
          (n[12] = b))
        : (b = n[12]);
      var v = b,
        S,
        R,
        L = l.mediaStage;
      e: switch (L) {
        case o("WAWebMediaTypes").MediaDataStage.RESOLVED: {
          ((S = null), (R = null));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.FETCHING: {
          S = f;
          var E;
          (n[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = u.jsx(o("WAWebMediaStateControls.react").Pending, {
                cancelable: !0,
              })),
              (n[13] = E))
            : (E = n[13]),
            (R = E));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_POKE: {
          S = p;
          var k;
          (n[14] !== l.size
            ? ((k = u.jsx(o("WAWebMediaStateControls.react").Download, {
                filesize: l.size,
              })),
              (n[14] = l.size),
              (n[15] = k))
            : (k = n[15]),
            (R = k));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.FINALIZING:
        case o("WAWebMediaTypes").MediaDataStage.UPLOADING: {
          S = h;
          var I;
          (n[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((I = u.jsx(o("WAWebMediaStateControls.react").Pending, {
                cancelable: !0,
              })),
              (n[16] = I))
            : (I = n[16]),
            (R = I));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.NEED_UPLOAD: {
          S = C;
          var T;
          (n[17] !== l.size
            ? ((T = u.jsx(o("WAWebMediaStateControls.react").Upload, {
                filesize: l.size,
              })),
              (n[17] = l.size),
              (n[18] = T))
            : (T = n[18]),
            (R = T));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_NEED_UPLOAD: {
          S = v;
          var D;
          (n[19] !== l.size
            ? ((D = u.jsx(o("WAWebMediaStateControls.react").Upload, {
                filesize: l.size,
              })),
              (n[19] = l.size),
              (n[20] = D))
            : (D = n[20]),
            (R = D));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING: {
          S = d;
          var x;
          (n[21] !== l.size
            ? ((x = u.jsx(o("WAWebMediaStateControls.react").Upload, {
                filesize: l.size,
              })),
              (n[21] = l.size),
              (n[22] = x))
            : (x = n[22]),
            (R = x));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED: {
          S = d;
          var $;
          (n[23] !== l.size
            ? (($ = u.jsx(o("WAWebMediaStateControls.react").Download, {
                filesize: l.size,
              })),
              (n[23] = l.size),
              (n[24] = $))
            : ($ = n[24]),
            (R = $));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE:
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN:
          break e;
        case o("WAWebMediaTypes").MediaDataStage.SENDING:
        case o("WAWebMediaTypes").MediaDataStage.DECRYPTING:
        case o("WAWebMediaTypes").MediaDataStage.INIT:
        case o("WAWebMediaTypes").MediaDataStage.PREPARING:
        case o("WAWebMediaTypes").MediaDataStage.REMOTE_UPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.REUPLOADING:
        case o("WAWebMediaTypes").MediaDataStage.EXISTS: {
          var P;
          (n[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = u.jsx(o("WAWebMediaStateControls.react").Pending, {})),
              (n[25] = P))
            : (P = n[25]),
            (R = P));
          break e;
        }
        case o("WAWebMediaTypes").MediaDataStage.ERROR_FILE_NOT_READABLE:
        case o("WAWebMediaTypes").MediaDataStage.PROGRESSIVE_READY:
          throw r("err")("invalid value for sticker mediaStage '" + L + "'");
      }
      var N;
      n[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = (e || (e = r("stylex"))).props(
            c.thumb,
            c.container,
            o("WAWebUISpacing").uiMargin.bottom2,
            o("WAWebUISpacing").uiPadding.bottom10,
          )),
          (n[26] = N))
        : (N = n[26]);
      var M;
      return (
        n[27] !== S || n[28] !== R || n[29] !== t.children
          ? ((M = u.jsxs(
              "div",
              babelHelpers.extends({}, N, {
                onClick: S,
                children: [R, t.children],
              }),
            )),
            (n[27] = S),
            (n[28] = R),
            (n[29] = t.children),
            (n[30] = M))
          : (M = n[30]),
        M
      );
    }
    l.default = d;
  },
  98,
);
