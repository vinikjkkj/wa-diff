__d(
  "RSTInteractionDataMainThread",
  [
    "ALChannel",
    "AdsALReactUtils",
    "FBLogger",
    "RSTConfig",
    "RSTEvents",
    "RSTMetadataMainThread",
    "RSTUtilsMainThread",
    "ResponsiveTrackerMainThread",
    "getErrorSafe",
    "getReactComponentStackFromDOMElement_THIS_CAN_BREAK",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5,
      s = [],
      u = 100,
      c = 10,
      d = [];
    function m(t) {
      (s.push(t),
        s.length > e && s.shift(),
        d.push(t),
        d.length > u && d.shift());
    }
    function p() {
      s.length = 0;
    }
    function _() {
      var e = s;
      return e[e.length - 1];
    }
    function f() {
      return [].concat(s);
    }
    function g(e) {
      return (e === void 0 && (e = c), d.slice(-1 * e));
    }
    function h(e, t) {
      var n = e != null ? e : {},
        a = n.context,
        i = n.name,
        l = n.stack;
      (i != null || l != null) &&
        m({
          componentName: i,
          componentStack: l,
          componentContext: a,
          eventType: "click",
          eventTime: Date.now(),
          componentText: t,
        });
      try {
        var s = o("RSTMetadataMainThread").getMainThreadMetadata();
        r("ResponsiveTrackerMainThread").postEvent(
          o("RSTEvents").RSTEvent.INTERACTION_DATA,
          babelHelpers.extends({}, s),
        );
      } catch (e) {
        r("FBLogger")("responsive-tracker")
          .catching(r("getErrorSafe")(e))
          .mustfix("Failed to send interaction data to worker");
      }
    }
    y();
    function y() {
      r("RSTConfig").SHOULD_CAPTURE_INTERACTION_DATA &&
        (o("RSTUtilsMainThread").isMonetizationApp ? b() : C());
    }
    function C() {
      window.addEventListener(
        "click",
        function (e) {
          var t = e.target;
          if (t instanceof Element)
            try {
              var n = r("getReactComponentStackFromDOMElement_THIS_CAN_BREAK")(
                  t,
                ),
                a = {
                  name: o("RSTUtilsMainThread").getAllowListedComponentName(n),
                  stack: n != null ? n : [],
                  context: o("RSTUtilsMainThread").getReactComponentContext(
                    n,
                    r("RSTConfig").isReactComponentNameBlocked,
                  ),
                },
                i = v(t, a);
              h(a, i);
            } catch (e) {
              r("FBLogger")("responsive-tracker")
                .catching(r("getErrorSafe")(e))
                .mustfix("Failed to get react component stack from Shim");
            }
        },
        !0,
      );
    }
    function b() {
      r("ALChannel").addListener("al_ui_event_capture", function (e) {
        if (e.event === "click")
          try {
            var t,
              n = {
                name: e.reactComponentName,
                stack: (t = e.reactComponentStack) != null ? t : [],
                context: o("RSTUtilsMainThread").getReactComponentContext(
                  e.reactComponentStack,
                  o("AdsALReactUtils").isComponentNameBlocked,
                ),
              },
              a = e.targetElement,
              i = v(a, n);
            h(n, i);
          } catch (e) {
            r("FBLogger")("responsive-tracker")
              .catching(r("getErrorSafe")(e))
              .mustfix("Failed to get react component stack from AL");
          }
      });
    }
    function v(e, t) {
      var n;
      if (
        !r("RSTConfig").SHOULD_CAPTURE_INTERACTION_ELEMENT_TEXT ||
        (t == null ? void 0 : t.stack) == null
      )
        return null;
      for (var o of t.stack)
        if (r("RSTConfig").isReactComponentTextBlocked(o)) return null;
      var a = (n = e == null ? void 0 : e.textContent) != null ? n : null;
      if (typeof a == "string") {
        a = a.trim();
        var i = r("RSTConfig").ELEMENT_TEXT_SIZE_LIMIT;
        a.length > i &&
          (a =
            a.substr(0, i) +
            ("... (" + (a.length - i) + " code units omitted)"));
      }
      return a === "" ? null : a;
    }
    ((l.clearInteractionData = p),
      (l.getLastInteractionDataSinceLastMessageToWorker = _),
      (l.getInteractionDataSinceLastMessageToWorker = f),
      (l.getInteractionHistory = g));
  },
  98,
);
