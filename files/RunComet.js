__d(
  "RunComet",
  [
    "ExecutionEnvironment",
    "FBLogger",
    "createCancelableFunction",
    "emptyFunction",
    "getErrorSafe",
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
            (g("unload"), g("afterunload"));
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
    function f(e) {
      return {
        remove: function () {
          e.cancel();
        },
      };
    }
    function g(t) {
      for (var n = u[t] || [], o = 0; o < n.length; o++) {
        var a = n[o];
        try {
          a();
        } catch (n) {
          var i = r("getErrorSafe")(n);
          r("FBLogger")("comet_infra")
            .catching(i)
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
      u[t] = [];
    }
    function h(e) {
      if (c) return (e(), f(_(r("emptyFunction"))));
      var t = _(e);
      return (
        u.domcontentloaded == null
          ? ((u.domcontentloaded = [t]),
            (s || (s = r("ExecutionEnvironment"))).canUseEventListeners &&
              window.addEventListener(
                "DOMContentLoaded",
                function () {
                  g("domcontentloaded");
                },
                !0,
              ))
          : u.domcontentloaded.push(t),
        f(t)
      );
    }
    function y(e) {
      var t = _(e);
      return (p("afterunload", t), f(t));
    }
    function C(e) {
      var t = _(e);
      return (
        u.load == null
          ? ((u.load = [t]),
            (s || (s = r("ExecutionEnvironment"))).canUseEventListeners &&
              window.addEventListener("load", function () {
                (g("domcontentloaded"), g("load"));
              }))
          : u.load.push(t),
        d &&
          r("setTimeout")(function () {
            (g("domcontentloaded"), g("load"));
          }, 0),
        f(t)
      );
    }
    function b(e) {
      var t = _(e);
      return (p("unload", t), f(t));
    }
    function v(e) {
      var t = _(e);
      return (
        u.beforeunload == null
          ? ((u.beforeunload = [t]),
            (s || (s = r("ExecutionEnvironment"))).canUseEventListeners &&
              window.addEventListener("beforeunload", function (e) {
                var t = u.beforeunload || [];
                for (var n of t) {
                  var o = void 0;
                  try {
                    o = n();
                  } catch (e) {
                    var a = r("getErrorSafe")(e);
                    r("FBLogger")("comet_infra")
                      .catching(a)
                      .mustfix(
                        "Hit an error while executing onBeforeUnload event listeners.",
                      );
                  }
                  if (o !== void 0) {
                    (o != null && o.body != null && (o = o.body),
                      e.preventDefault());
                    var i = typeof o == "string" ? o : String(o);
                    return ((e.returnValue = i), i);
                  }
                }
              }))
          : u.beforeunload.push(t),
        f(t)
      );
    }
    var S = v;
    function R(e) {
      return (r("unexpectedUseInComet")("Run.onLeave"), m);
    }
    function L(e, t) {
      return (r("unexpectedUseInComet")("Run.onCleanupOrLeave"), m);
    }
    function E(e) {
      r("unexpectedUseInComet")("Run.removeHook");
    }
    function k() {
      if (
        (document.readyState === "loading"
          ? h(function () {
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
    (s || (s = r("ExecutionEnvironment"))).canUseDOM && k();
    var I = null,
      T = null;
    ((l.onLoad = h),
      (l.onAfterUnload = y),
      (l.onAfterLoad = C),
      (l.onUnload = b),
      (l.onBeforeUnload = v),
      (l.maybeOnBeforeUnload = S),
      (l.onLeave = R),
      (l.onCleanupOrLeave = L),
      (l.__removeHook = E),
      (l.__domContentCallback = I),
      (l.__onloadCallback = T));
  },
  98,
);
