__d(
  "RunBlue",
  [
    "Arbiter",
    "BigPipeInstance",
    "ContextualComponent",
    "ExecutionEnvironment",
    "PageEvents",
    "TimeSlice",
    "createCancelableFunction",
    "emptyFunction",
    "performanceAbsoluteNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "onunloadhooks",
      c = "onafterunloadhooks";
    function d(e) {
      var n = t.PageHooks;
      return window.domready && n
        ? (n.runHook(e, "domreadyhooks:late"), { remove: r("emptyFunction") })
        : C("domreadyhooks", e);
    }
    function m(e) {
      var n = t.PageHooks;
      if (window.loaded && n) {
        var r = t.setTimeout(function () {
          n.runHook(e, "onloadhooks:late");
        }, 0);
        return {
          remove: function () {
            return t.clearTimeout(r);
          },
        };
      } else return C("onloadhooks", e);
    }
    function p(e, t) {
      var n = t === void 0 ? !window.loading_page_chrome : t;
      return C(n ? "onbeforeleavehooks" : "onbeforeunloadhooks", e);
    }
    function _(e, t) {
      return (
        window.onunload ||
          (window.onunload = r("TimeSlice").guard(function () {
            r("Arbiter").inform(r("PageEvents").NATIVE_ONUNLOAD, !0, "state");
          }, "window.onunload")),
        C(e, t)
      );
    }
    function f(e) {
      return _(u, e);
    }
    function g(e) {
      return _(c, e);
    }
    function h(e) {
      return C("onleavehooks", e);
    }
    function y(e, t) {
      var n = r("createCancelableFunction")(t),
        o = function () {
          (n(), n.cancel());
        },
        a = r("ContextualComponent").closestToNode(e);
      return (
        a && a.onCleanup(o),
        (window.onleavehooks = (window.onleavehooks || []).concat(o)),
        {
          remove: function () {
            n.cancel();
          },
        }
      );
    }
    function C(e, t) {
      var n = r("createCancelableFunction")(t);
      return (
        (window[e] = (window[e] || []).concat(n)),
        {
          remove: function () {
            n.cancel();
          },
        }
      );
    }
    function b(e) {
      window[e] = [];
    }
    var v = r("TimeSlice").guard(function () {
      r("Arbiter").inform(r("PageEvents").NATIVE_DOMREADY, !0, "state");
    }, "DOMContentLoaded");
    t._domcontentready = v;
    function S() {
      var e = document,
        n = window;
      if (e.addEventListener) {
        var o = /AppleWebKit.(\d+)/.exec(navigator.userAgent);
        if (o && o[1] < 525)
          var a = t.setInterval(function () {
            /loaded|complete/.test(e.readyState) && (v(), t.clearInterval(a));
          }, 10);
        else e.addEventListener("DOMContentLoaded", v, !0);
      } else {
        var i = n.location.protocol === "https:" ? "//:" : "javascript:void(0)";
        (e.write(
          '<script onreadystatechange="if (this.readyState==\'complete\') {this.parentNode.removeChild(this);_domcontentready();}" defer="defer" src="' +
            i +
            '"></',
        ),
          e.write("script>"));
      }
      var l = n.onload;
      ((n.onload = r("TimeSlice").guard(function () {
        (l && l(),
          r("Arbiter").inform(r("PageEvents").NATIVE_ONLOAD, !0, "state"));
      }, "window.onload")),
        (n.onbeforeunload = r("TimeSlice").guard(function (e) {
          var t = {};
          if (
            (r("Arbiter").inform(
              r("PageEvents").NATIVE_ONBEFOREUNLOAD,
              t,
              "state",
            ),
            t.warn ||
              r("Arbiter").inform(r("PageEvents").AJAXPIPE_ONUNLOAD, {
                transition_type: "normal",
              }),
            t.warn !== void 0)
          ) {
            var n = t.warn.body != null ? t.warn.body : t.warn;
            return (e && (e.returnValue = n), n);
          } else return;
        }, "window.onbeforeunload")));
    }
    function R() {
      var t,
        n = (e || (e = r("performanceAbsoluteNow")))();
      ((t = window.console) != null &&
        t.timeStamp &&
        window.console.timeStamp(
          'perf_trace {"name": "e2e", "parent": "PageEvents.BIGPIPE_ONLOAD"}',
        ),
        r("Arbiter").inform(
          r("PageEvents").BIGPIPE_ONLOAD,
          { ts: n },
          "state",
        ));
    }
    var L = r("Arbiter").registerCallback(
        function () {
          r("BigPipeInstance").getCurrentInstance()
            ? r("Arbiter").subscribeOnce(
                r("BigPipeInstance").Events.displayed,
                R,
              )
            : R();
        },
        [r("PageEvents").NATIVE_ONLOAD],
      ),
      E = r("Arbiter").registerCallback(
        function () {
          var e = { timeTriggered: Date.now() };
          r("Arbiter").inform(r("PageEvents").BIGPIPE_DOMREADY, e, "state");
        },
        [r("PageEvents").NATIVE_DOMREADY],
      );
    (s || (s = r("ExecutionEnvironment"))).canUseDOM && S();
    function k() {
      return { remove: function () {} };
    }
    ((l.onLoad = d),
      (l.onAfterLoad = m),
      (l.onBeforeUnload = p),
      (l.onUnload = f),
      (l.onAfterUnload = g),
      (l.onLeave = h),
      (l.onCleanupOrLeave = y),
      (l.__removeHook = b),
      (l.__onloadCallback = L),
      (l.__domContentCallback = E),
      (l.maybeOnBeforeUnload = k));
  },
  98,
);
