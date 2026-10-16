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
          return m({
            consumerWid: e,
            editedText: n,
            isWithinEditingWindow: r,
            messageId: t,
            module: o,
          });
        },
        function (e) {
          p(e, r);
        },
      ).catch(h);
    }
    function m(e) {
      var t = e.consumerWid,
        r = e.editedText,
        o = e.isWithinEditingWindow,
        a = e.messageId,
        i = e.module,
        l;
      try {
        l = i.coachAgentMessageEdit(t, a, r);
      } catch (e) {
        return (_(e, o), (u || (u = n("Promise"))).resolve());
      }
      return l.then(
        function (e) {
          g(e, o);
        },
        function (e) {
          _(e, o);
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
