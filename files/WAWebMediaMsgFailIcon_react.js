__d(
  "WAWebMediaMsgFailIcon.react",
  [
    "fbt",
    "WAWebFailIcon.react",
    "WAWebFrontendMsgGetters",
    "WAWebMediaMsgTooLargeFailIcon.react",
    "WAWebMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.displayType,
        a = e.mediaData,
        i = e.msg,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebMsgGetters").getIsFailed,
            o("WAWebMsgGetters").getType,
            o("WAWebFrontendMsgGetters").getIsUnsentMedia,
          ]),
          (t[0] = l))
        : (l = t[0]);
      var c = o("useWAWebMsgValues").useMsgValues(i.id, l),
        d = c[0],
        m = c[1],
        p = c[2],
        _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = ["mediaStage", "type"]), (t[1] = _))
        : (_ = t[1]);
      var f = o("useWAWebModelValues").useModelValues(a, _),
        g = f.mediaStage,
        h = f.type;
      if (m === o("WAWebMsgType").MSG_TYPE.REVOKED) return null;
      if (g === o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE) {
        var y;
        return (
          t[2] !== n || t[3] !== h
            ? ((y = u.jsx(r("WAWebMediaMsgTooLargeFailIcon.react"), {
                displayType: n,
                mediaType: h,
              })),
              (t[2] = n),
              (t[3] = h),
              (t[4] = y))
            : (y = t[4]),
          y
        );
      }
      if (
        p &&
        (g === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING ||
          g === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED ||
          g === o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN)
      ) {
        var C;
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = s._(/*BTDS*/ "Couldn't send this message.")), (t[5] = C))
          : (C = t[5]);
        var b = C,
          v;
        return (
          t[6] !== n
            ? ((v = u.jsx(r("WAWebFailIcon.react"), {
                displayType: n,
                tooltip: b,
                ariaLabel: b,
              })),
              (t[6] = n),
              (t[7] = v))
            : (v = t[7]),
          v
        );
      }
      if (d) {
        if (g === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING) {
          var S;
          t[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = s._(
                /*BTDS*/ "Could not forward this message because the file is no longer on your phone.",
              )),
              (t[8] = S))
            : (S = t[8]);
          var R = S,
            L;
          return (
            t[9] !== n
              ? ((L = u.jsx(r("WAWebFailIcon.react"), {
                  displayType: n,
                  tooltip: R,
                  ariaLabel: R,
                })),
                (t[9] = n),
                (t[10] = L))
              : (L = t[10]),
            L
          );
        }
        if (
          m === o("WAWebMsgType").MSG_TYPE.PTT &&
          g === o("WAWebMediaTypes").MediaDataStage.PREPARING
        ) {
          var E;
          t[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = s._(/*BTDS*/ "Couldn't send this voice message.")),
              (t[11] = E))
            : (E = t[11]);
          var k = E,
            I;
          return (
            t[12] !== n
              ? ((I = u.jsx(r("WAWebFailIcon.react"), {
                  displayType: n,
                  tooltip: k,
                  ariaLabel: k,
                })),
                (t[12] = n),
                (t[13] = I))
              : (I = t[13]),
            I
          );
        }
        var T;
        t[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = s._(/*BTDS*/ "Couldn't send this message.")), (t[14] = T))
          : (T = t[14]);
        var D = T,
          x;
        return (
          t[15] !== n
            ? ((x = u.jsx(r("WAWebFailIcon.react"), {
                displayType: n,
                tooltip: D,
                ariaLabel: D,
              })),
              (t[15] = n),
              (t[16] = x))
            : (x = t[16]),
          x
        );
      }
      return null;
    }
    l.default = c;
  },
  226,
);
