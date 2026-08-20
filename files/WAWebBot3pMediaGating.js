__d(
  "WAWebBot3pMediaGating",
  ["$InternalEnum", "WAWebABProps", "WAWebBotSupportGating", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        None: 0,
        ImageOnly: 1,
        AllMedia: 2,
        AllMediaAndExpressions: 3,
      }),
      u = new Set(),
      c = new Set([(e = o("WAWebMsgType")).MSG_TYPE.IMAGE]),
      d = [
        e.MSG_TYPE.AUDIO,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.VIDEO,
      ],
      m = new Set(d),
      p = new Set([].concat(d, [e.MSG_TYPE.STICKER]));
    function _(e, t) {
      var n;
      return o("WAWebBotSupportGating").isSupportedThirdPartyBot(e, t)
        ? (n = s.cast(
            o("WAWebABProps").getABPropConfigValue(
              "ai_3p_agent_media_support_mode",
            ),
          )) != null
          ? n
          : s.None
        : null;
    }
    function f(e) {
      return e === s.None
        ? u
        : e === s.ImageOnly
          ? c
          : e === s.AllMedia
            ? m
            : e === s.AllMediaAndExpressions
              ? p
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function g(e) {
      return e === s.AllMediaAndExpressions;
    }
    ((l.Bot3pMediaSupportMode = s),
      (l.getBot3pMediaSupportMode = _),
      (l.getBot3pSupportedMediaTypes = f),
      (l.isBot3pExpressionsSupported = g));
  },
  98,
);
