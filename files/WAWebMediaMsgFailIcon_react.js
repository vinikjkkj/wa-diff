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
    "useWAWebModelValues",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.displayType,
        n = e.mediaData,
        a = e.msg,
        i = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getIsFailed,
          o("WAWebMsgGetters").getType,
          o("WAWebFrontendMsgGetters").getIsUnsentMedia,
        ]),
        l = i[0],
        c = i[1],
        d = i[2],
        m = o("useWAWebModelValues").useModelValues(n, ["mediaStage", "type"]),
        p = m.mediaStage,
        _ = m.type;
      if (c === o("WAWebMsgType").MSG_TYPE.REVOKED) return null;
      if (p === o("WAWebMediaTypes").MediaDataStage.ERROR_TOO_LARGE)
        return u.jsx(r("WAWebMediaMsgTooLargeFailIcon.react"), {
          displayType: t,
          mediaType: _,
        });
      if (
        d &&
        (p === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING ||
          p === o("WAWebMediaTypes").MediaDataStage.ERROR_UNSUPPORTED ||
          p === o("WAWebMediaTypes").MediaDataStage.ERROR_FORBIDDEN)
      ) {
        var f = s._(/*BTDS*/ "Couldn't send this message.");
        return u.jsx(r("WAWebFailIcon.react"), {
          displayType: t,
          tooltip: f,
          ariaLabel: f,
        });
      }
      if (l) {
        if (p === o("WAWebMediaTypes").MediaDataStage.ERROR_MISSING) {
          var g = s._(
            /*BTDS*/ "Could not forward this message because the file is no longer on your phone.",
          );
          return u.jsx(r("WAWebFailIcon.react"), {
            displayType: t,
            tooltip: g,
            ariaLabel: g,
          });
        }
        if (
          c === o("WAWebMsgType").MSG_TYPE.PTT &&
          p === o("WAWebMediaTypes").MediaDataStage.PREPARING
        ) {
          var h = s._(/*BTDS*/ "Couldn't send this voice message.");
          return u.jsx(r("WAWebFailIcon.react"), {
            displayType: t,
            tooltip: h,
            ariaLabel: h,
          });
        }
        var y = s._(/*BTDS*/ "Couldn't send this message.");
        return u.jsx(r("WAWebFailIcon.react"), {
          displayType: t,
          tooltip: y,
          ariaLabel: y,
        });
      }
      return null;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
