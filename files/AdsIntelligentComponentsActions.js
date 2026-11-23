__d(
  "AdsIntelligentComponentsActions",
  [
    "AYMTTipDismissalNotifier",
    "AdsIntelligentComponentsClickMessageAction",
    "AdsIntelligentComponentsCloseMessageAction",
    "AdsIntelligentComponentsCompleteTourAction",
    "AdsIntelligentComponentsMessageContentStore",
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
                line: "42",
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
          line: "58",
          module: "AdsIntelligentComponentsActions.js",
          moduleID: i.id,
        },
      );
    }
    function u(e, t) {
      r("AdsIntelligentComponentsMessagesLoadedAction").dispatch(
        { params: e, loadedData: t },
        {
          line: "68",
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
            line: "76",
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
            line: "109",
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
            line: "117",
            module: "AdsIntelligentComponentsActions.js",
            moduleID: i.id,
          },
        ));
    }
    function f(e) {
      var t;
      o("AYMTTipDismissalNotifier").notifyTipDismissalAfterDispatch(
        (t = r("AdsIntelligentComponentsMessageContentStore").getAYMTTip(e)) ==
          null || (t = t.aymt_data) == null
          ? void 0
          : t.tip_id,
      );
    }
    function g(e, t) {
      (t === void 0 && (t = !0),
        r("AdsIntelligentComponentsCompleteTourAction").dispatch(
          { messageID: e, shouldClose: t },
          {
            line: "133",
            module: "AdsIntelligentComponentsActions.js",
            moduleID: i.id,
          },
        ));
    }
    function h(e, t) {
      r("AdsIntelligentComponentsTourStepAction").dispatch(
        { messageID: e, step: t },
        {
          line: "140",
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
      (l.notifySequencedMessageEnded = f),
      (l.completeTour = g),
      (l.tourStep = h));
  },
  98,
);
