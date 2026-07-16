__d(
  "WAWebVoipBridgeChatHandlers",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebCallLogUtils",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebVoipEventConstants",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = {
        getTcToken: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.wid;
            if (!n.isUser())
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getTcToken: wid is not a user wid, wid domain: ",
                      "",
                    ])),
                  n.server,
                ),
                { tcToken: null }
              );
            try {
              var r = o("WAWebWidFactory").asUserWidOrThrow(n),
                a = yield o("WAWebCallLogUtils").get1x1CallLidOrPnDestination({
                  callDestinationWid: r,
                }),
                i = o("WAWebChatCollection").ChatCollection.get(a);
              return (
                i == null &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: getTcToken: chat not found, chat domain: ",
                        "",
                      ])),
                    n.server,
                  ),
                { tcToken: i == null ? void 0 : i.tcToken }
              );
            } catch (e) {
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: getTcToken: get1x1CallLidOrPnDestination failed, error: ",
                      "",
                    ])),
                  e,
                ),
                { tcToken: null }
              );
            }
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
        handleMutedByOthers: function (t) {
          var e = t.muterJid;
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: handleMutedByOthers muterJid=",
                "",
              ])),
            String(e),
          );
          var n = "";
          if (e != null) {
            var a = o("WAWebContactCollection").ContactCollection.get(e);
            a != null &&
              (n = o("WAWebFrontendContactGetters").getFormattedShortName(a));
          }
          r("WAWebCallCollection").trigger(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallCollectionEvents
                .MUTED_BY_OTHERS,
            ),
            { name: n },
          );
        },
      };
    l.VoipBridgeChatHandlers = d;
  },
  98,
);
