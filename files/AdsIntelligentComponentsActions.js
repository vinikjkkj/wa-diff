__d(
  "AdsIntelligentComponentsActions",
  [
    "AdsIntelligentComponentsClickMessageAction",
    "AdsIntelligentComponentsCloseMessageAction",
    "AdsIntelligentComponentsCompleteTourAction",
    "AdsIntelligentComponentsMessagesLoadErrorAction",
    "AdsIntelligentComponentsMessagesLoadedAction",
    "AdsIntelligentComponentsMountingBatchAction",
    "AdsIntelligentComponentsResetMessagesCapAction",
    "AdsIntelligentComponentsTourStepAction",
    "requestIdleCallback",
    "setTimeout",
    "throttle",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      var e = [],
        t = r("throttle")(function () {
          r("setTimeout")(function () {
            (r("AdsIntelligentComponentsMountingBatchAction").dispatch(
              { changes: e },
              {
                line: "39",
                module: "AdsIntelligentComponentsActions.js",
                moduleID: i.id,
              },
            ),
              (e = []));
          });
        }, 300);
      return function (n) {
        (e.push(n), t());
      };
    })();
    function s(e, t) {
      r("AdsIntelligentComponentsMessagesLoadErrorAction").dispatch(
        { params: e, error: t },
        {
          line: "55",
          module: "AdsIntelligentComponentsActions.js",
          moduleID: i.id,
        },
      );
    }
    function u(e, t) {
      r("AdsIntelligentComponentsMessagesLoadedAction").dispatch(
        { params: e, loadedData: t },
        {
          line: "65",
          module: "AdsIntelligentComponentsActions.js",
          moduleID: i.id,
        },
      );
    }
    function c() {
      r("requestIdleCallback")(function () {
        r("AdsIntelligentComponentsResetMessagesCapAction").dispatch(
          {},
          {
            line: "73",
            module: "AdsIntelligentComponentsActions.js",
            moduleID: i.id,
          },
        );
      });
    }
    function d(t, n, r, o, a) {
      (o === void 0 &&
        (o = function () {
          return !0;
        }),
        e({
          type: "mount",
          messageID: t,
          messageFormat: n,
          componentName: r,
          messageGroup: a,
          validateCondition: o,
        }));
    }
    function m(t) {
      e({ type: "unmount", messageID: t });
    }
    function p(e, t, n) {
      (t === void 0 && (t = null),
        n === void 0 && (n = null),
        r("AdsIntelligentComponentsCloseMessageAction").dispatch(
          { messageID: e, messageFormat: t, step: n },
          {
            line: "106",
            module: "AdsIntelligentComponentsActions.js",
            moduleID: i.id,
          },
        ));
    }
    function _(e, t) {
      (t === void 0 && (t = !0),
        r("AdsIntelligentComponentsClickMessageAction").dispatch(
          { messageID: e, shouldClose: t },
          {
            line: "114",
            module: "AdsIntelligentComponentsActions.js",
            moduleID: i.id,
          },
        ));
    }
    function f(e, t) {
      (t === void 0 && (t = !0),
        r("AdsIntelligentComponentsCompleteTourAction").dispatch(
          { messageID: e, shouldClose: t },
          {
            line: "121",
            module: "AdsIntelligentComponentsActions.js",
            moduleID: i.id,
          },
        ));
    }
    function g(e, t) {
      r("AdsIntelligentComponentsTourStepAction").dispatch(
        { messageID: e, step: t },
        {
          line: "128",
          module: "AdsIntelligentComponentsActions.js",
          moduleID: i.id,
        },
      );
    }
    ((l.messagesLoadError = s),
      (l.dispatchMessages = u),
      (l.resetMessagesCap = c),
      (l.mount = d),
      (l.unmount = m),
      (l.closeMessage = p),
      (l.clickMessage = _),
      (l.completeTour = f),
      (l.tourStep = g));
  },
  98,
);
