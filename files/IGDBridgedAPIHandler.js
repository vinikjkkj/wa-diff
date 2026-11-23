__d(
  "IGDBridgedAPIHandler",
  ["JSResourceForInteraction", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.args,
        a = t.type;
      switch (a) {
        case "46":
          return r("JSResourceForInteraction")("IGDSendMessageTaskHandler")
            .__setRef("IGDBridgedAPIHandler")
            .load()
            .then(function (e) {
              var t = e.handleTask;
              return t.apply(void 0, n);
            });
        case "33":
          return r("JSResourceForInteraction")("IGDUnsendMessageTaskHandler")
            .__setRef("IGDBridgedAPIHandler")
            .load()
            .then(function (e) {
              var t = e.handleTask;
              return t.apply(void 0, n);
            });
        case "sendEditMessage":
          return r("JSResourceForInteraction")("IGDEditMessageTaskHandler")
            .__setRef("IGDBridgedAPIHandler")
            .load()
            .then(function (e) {
              var t = e.handleTask;
              return t.apply(void 0, n);
            });
        case "sendMediaMessage":
          return r("JSResourceForInteraction")("IGDSendMediaMessageTaskHandler")
            .__setRef("IGDBridgedAPIHandler")
            .load()
            .then(function (e) {
              var t = e.handleTask;
              return t.apply(void 0, n);
            });
        case "sendOrRemoveReaction":
          return r("JSResourceForInteraction")(
            "IGDSendRemoveReactionTaskHandler",
          )
            .__setRef("IGDBridgedAPIHandler")
            .load()
            .then(function (e) {
              var t = e.handleTask;
              return t.apply(void 0, n);
            });
        case "sendXmaReceiverFetch":
          return r("JSResourceForInteraction")(
            "IGDSendXmaReceiverFetchTaskHandler",
          )
            .__setRef("IGDBridgedAPIHandler")
            .load()
            .then(function (e) {
              var t = e.handleTask;
              return t.apply(void 0, n);
            });
        default: {
          o("WALogger")
            .DEV(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "igdapi: unsupported api call ",
                  "",
                ])),
              a,
            )
            .devConsole(n);
          return;
        }
      }
    }
    l.igdapi = s;
  },
  98,
);
