__d(
  "WAWebRequestHatchIdeas",
  [
    "WALogger",
    "WAWebHatchIdeasDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4;
    async function u(e) {
      var t = await d(
          o("WAWebHatchVmTransport").JarvisPaths.IDEA_CARDS,
          "feed",
          e,
        ),
        n = o("WAWebHatchIdeasDecoder").decodeHatchIdeasFeed(t);
      if (n == null) throw m("malformed_feed");
      return n;
    }
    async function c(e, t) {
      if (e === "." || e === "..") throw m("card_invalid_id");
      var n = await d(
          o("WAWebHatchVmTransport").JarvisPaths.IDEA_CARD(e),
          "card",
          t,
        ),
        r = o("WAWebHatchIdeasDecoder").decodeHatchIdeaCard(n);
      if (r == null) throw m("malformed_card");
      return r;
    }
    async function d(e, t, n) {
      var a = await o("WAWebHatchVmConnection").connectHatchVmApi();
      if ((n == null ? void 0 : n()) === !1)
        throw r("err")("hatch ideas read cancelled: " + t);
      if (a == null) throw m(t + "_no_session");
      var i = await a.request("GET", e, { timeoutMs: s });
      if (i.kind !== "Ok") throw m(t + "_" + i.kind.toLowerCase());
      return i.value;
    }
    function m(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-ideas: VM read failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-ideas-read-failed"),
        r("err")("hatch ideas read failed: " + t)
      );
    }
    ((l.IDEAS_TIMEOUT_MS = s),
      (l.requestHatchIdeasFeed = u),
      (l.requestHatchIdeaCard = c));
  },
  98,
);
