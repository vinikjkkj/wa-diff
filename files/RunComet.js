__d(
  "RunComet",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "createCancelableFunction",
    "emptyFunction",
    "getErrorSafe",
    "gkx",
    "setTimeout",
    "unexpectedUseInComet",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {},
      c = !1,
      d = !1,
      m = { remove: r("emptyFunction") };
    function p(e, t) {
      (u.unload == null &&
        ((u.unload = []),
        (u.afterunload = []),
        (s || (s = r("ExecutionEnvironment"))).canUseEventListeners &&
          window.addEventListener("unload", function () {
            (h("unload"), h("afterunload"));
          })),
        u[e] == null
          ? (r("FBLogger")("comet_infra").mustfix(
              "EVENT_LISTENERS.%s wasn't initialized but should have been!",
              e,
            ),
            (u[e] = [t]))
          : u[e].push(t));
    }
    function _(e) {
      return r("createCancelableFunction")(e);
    }
    function f(e, t) {
      return {
        remove: function () {
          if ((t.cancel(), !!r("gkx")("11588"))) {
            var n = u[e];
            if (n != null) {
              var o = n.indexOf(t);
              o !== -1 && n.splice(o, 1);
            }
          }
        },
      };
    }
    function g(t, n) {
      try {
        n();
      } catch (n) {
        var o = r("getErrorSafe")(n);
        r("FBLogger")("comet_infra")
          .catching(o)
          .MUSTFIX(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Hit an error while executing '",
                "' event listeners.",
              ])),
            t,
          );
      }
    }
    function h(e) {
      var t = u[e] || [];
      if (r("gkx")("11588"))
        for (; t.length > 0; ) {
          var n = t.shift();
          n != null && g(e, n);
        }
      else for (var o = 0; o < t.length; o++) g(e, t[o]);
      u[e] = [];
    }
    function y(e) {
      var t, n;
      return (t = (n = u[e]) == null ? void 0 : n.length) != null ? t : 0;
    }
    function C(e) {
      if (c) return (e(), m);
      var t = _(e);
      return (
        u.domcontentloaded == null
          ? ((u.domcontentloaded = [t]),
            (s || (s = r("ExecutionEnvironment"))).canUseEventListeners &&
              window.addEventListener(
                "DOMContentLoaded",
                function () {
                  h("domcontentloaded");
                },
                !0,
              ))
          : u.domcontentloaded.push(t),
        f("domcontentloaded", t)
      );
    }
    function b(e) {
      var t = _(e);
      return (p("afterunload", t), f("afterunload", t));
    }
    function v(e) {
      var t = _(e);
      return (
        u.load == null
          ? ((u.load = [t]),
            (s || (s = r("ExecutionEnvironment"))).canUseEventListeners &&
              window.addEventListener("load", function () {
                (h("domcontentloaded"), h("load"));
              }))
          : u.load.push(t),
        d &&
          r("setTimeout")(function () {
            (h("domcontentloaded"), h("load"));
          }, 0),
        f("load", t)
      );
    }
    function S(e) {
      var t = _(e);
      return (p("unload", t), f("unload", t));
    }
    function R(e) {
      var t = _(e);
      return (
        u.beforeunload == null
          ? ((u.beforeunload = [t]),
            (s || (s = r("ExecutionEnvironment"))).canUseEventListeners &&
              window.addEventListener("beforeunload", function (e) {
                var t,
                  n,
                  o = r("gkx")("11588")
                    ? [].concat((t = u.beforeunload) != null ? t : [])
                    : (n = u.beforeunload) != null
                      ? n
                      : [];
                for (var a of o) {
                  var i = void 0;
                  try {
                    i = a();
                  } catch (e) {
                    var l = r("getErrorSafe")(e);
                    r("FBLogger")("comet_infra")
                      .catching(l)
                      .mustfix(
                        "Hit an error while executing onBeforeUnload event listeners.",
                      );
                  }
                  if (i !== void 0) {
                    (i != null && i.body != null && (i = i.body),
                      e.preventDefault());
                    var s = typeof i == "string" ? i : String(i);
                    return ((e.returnValue = s), s);
                  }
                }
              }))
          : u.beforeunload.push(t),
        f("beforeunload", t)
      );
    }
    var L = R;
    function E(e) {
      return (r("unexpectedUseInComet")("Run.onLeave"), m);
    }
    function k(e, t) {
      return (r("unexpectedUseInComet")("Run.onCleanupOrLeave"), m);
    }
    function I(e) {
      r("unexpectedUseInComet")("Run.removeHook");
    }
    function T() {
      if (
        (document.readyState === "loading"
          ? C(function () {
              c = !0;
            })
          : (c = !0),
        document.readyState === "complete")
      )
        d = !0;
      else {
        var e = window.onload;
        window.onload = function () {
          (e && e(), (d = !0));
        };
      }
    }
    (s || (s = r("ExecutionEnvironment"))).canUseDOM && T();
    var D = null,
      x = null;
    ((l.getEventListenerCountForTesting = y),
      (l.onLoad = C),
      (l.onAfterUnload = b),
      (l.onAfterLoad = v),
      (l.onUnload = S),
      (l.onBeforeUnload = R),
      (l.maybeOnBeforeUnload = L),
      (l.onLeave = E),
      (l.onCleanupOrLeave = k),
      (l.__removeHook = I),
      (l.__domContentCallback = D),
      (l.__onloadCallback = x));
  },
  98,
);
