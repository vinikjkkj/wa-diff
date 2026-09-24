__d(
  "WAWebBizAiCoachAgentEditAction",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebBizAiCoachMessageEditMutation",
        )
          .__setRef("WAWebBizAiCoachAgentEditAction")
          .load();
      }, "BizAiCoachMessageEdit");
    function d(e, t, n, r) {
      f(r);
      var o;
      try {
        o = c();
      } catch (e) {
        p(e, r);
        return;
      }
      o.then(
        function (o) {
          return m(o, e, t, n, r);
        },
        function (e) {
          p(e, r);
        },
      ).catch(h);
    }
    function m(e, t, r, o, a) {
      var i;
      try {
        i = e.coachAgentMessageEdit(t, r, o);
      } catch (e) {
        return (_(e, a), (u || (u = n("Promise"))).resolve());
      }
      return i.then(
        function (e) {
          g(e, a);
        },
        function (e) {
          _(e, a);
        },
      );
    }
    function p(t, n) {
      (g("module_load_failed", n),
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "BizAI message edit coaching module failed to load",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("biz-ai-message-edit-coaching-load-fail"));
    }
    function _(e, t) {
      (g("request_failed", t), h(e));
    }
    function f(e) {
      try {
        o(
          "WAWebBizAILargeScreensLogEvents",
        ).logApiBizAiMessageEditCoachingStart(e);
      } catch (e) {
        h(e);
      }
    }
    function g(e, t) {
      try {
        o(
          "WAWebBizAILargeScreensLogEvents",
        ).logApiBizAiMessageEditCoachingResult(e, t);
      } catch (e) {
        h(e);
      }
    }
    function h(e) {
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "BizAI message edit coaching failed unexpectedly",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("biz-ai-message-edit-coaching-unexpected");
    }
    l.startAgentEditCoaching = d;
  },
  98,
);
