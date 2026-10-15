__d(
  "WAWebRequestHatchIdeas",
  [
    "WALogger",
    "WAWebHatchIdeasDecoder",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 3e4;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(
              o("WAWebHatchVmTransport").JarvisPaths.IDEA_CARDS,
              "feed",
              e,
            ),
            n = o("WAWebHatchIdeasDecoder").decodeHatchIdeasFeed(t);
          if (n == null) throw f("malformed_feed");
          return n;
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e === "." || e === "..") throw f("card_invalid_id");
          var n = yield p(
              o("WAWebHatchVmTransport").JarvisPaths.IDEA_CARD(e),
              "card",
              t,
            ),
            r = o("WAWebHatchIdeasDecoder").decodeHatchIdeaCard(n);
          if (r == null) throw f("malformed_card");
          return r;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield o("WAWebHatchVmConnection").connectHatchVmApi();
          if ((n == null ? void 0 : n()) === !1)
            throw r("err")("hatch ideas read cancelled: " + t);
          if (a == null) throw f(t + "_no_session");
          var i = yield a.request("GET", e, { timeoutMs: s });
          if (i.kind !== "Ok") throw f(t + "_" + i.kind.toLowerCase());
          return i.value;
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
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
      (l.requestHatchIdeaCard = d));
  },
  98,
);
