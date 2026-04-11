__d(
  "ImmediateImplementation",
  ["ImmediateImplementationExperiments"],
  function (t, n, r, o, a, i) {
    (function (e, t) {
      "use strict";
      var r = 1,
        o = {},
        a = {},
        l = a,
        s = !1,
        u = e.document,
        c,
        d,
        m,
        p = "setImmediate$" + Math.random() + "$";
      function _() {
        var t = e.event;
        return t
          ? (t.isTrusted &&
              [
                "change",
                "click",
                "contextmenu",
                "dblclick",
                "mouseup",
                "pointerup",
                "reset",
                "submit",
                "touchend",
              ].includes(t.type)) ||
              (t.type === "message" &&
                t.source === e &&
                typeof t.data == "string" &&
                t.data.indexOf(p) === 0)
          : !1;
      }
      function f(e) {
        var n = e[0];
        return (
          (e = Array.prototype.slice.call(e, 1)),
          (o[r] = function () {
            n.apply(t, e);
          }),
          (l = l.next = { handle: r++ }),
          l.handle
        );
      }
      function g() {
        for (var e, t; !s && (e = a.next); )
          if (((a = e), (t = o[e.handle]))) {
            s = !0;
            try {
              (t(), (s = !1));
            } finally {
              (h(e.handle), s && ((s = !1), a.next && c(g)));
            }
          }
      }
      function h(e) {
        delete o[e];
      }
      function y() {
        if (e.postMessage && !e.importScripts) {
          var t = !0,
            n = function () {
              ((t = !1),
                e.removeEventListener
                  ? e.removeEventListener("message", n, !1)
                  : e.detachEvent("onmessage", n));
            };
          if (e.addEventListener) e.addEventListener("message", n, !1);
          else if (e.attachEvent) e.attachEvent("onmessage", n);
          else return !1;
          return (e.postMessage("", "*"), t);
        }
      }
      function C() {
        var t = function (n) {
          n.source === e &&
            typeof n.data == "string" &&
            n.data.indexOf(p) === 0 &&
            g();
        };
        (e.addEventListener
          ? e.addEventListener("message", t, !1)
          : e.attachEvent("onmessage", t),
          (c = function () {
            var t = f(arguments);
            return (
              e.originalPostMessage
                ? e.originalPostMessage(p + t, "*")
                : e.postMessage(p + t, "*"),
              t
            );
          }),
          (d = c));
      }
      function b() {
        var e = new MessageChannel(),
          t = !1;
        ((e.port1.onmessage = function (e) {
          ((t = !1), g());
        }),
          (c = function () {
            var n = f(arguments);
            return (t || (e.port2.postMessage(n), (t = !0)), n);
          }),
          (m = c));
      }
      function v() {
        var e = u.documentElement;
        c = function () {
          var t = f(arguments),
            n = u.createElement("script");
          return (
            (n.onreadystatechange = function () {
              ((n.onreadystatechange = null),
                e.removeChild(n),
                (n = null),
                g());
            }),
            e.appendChild(n),
            t
          );
        };
      }
      function S() {
        c = function () {
          return (setTimeout(g, 0), f(arguments));
        };
      }
      (y()
        ? e.MessageChannel &&
          n("ImmediateImplementationExperiments").prefer_message_channel
          ? (C(),
            b(),
            (c = function () {
              return _() ? d.apply(null, arguments) : m.apply(null, arguments);
            }))
          : C()
        : e.MessageChannel
          ? b()
          : u &&
              u.createElement &&
              "onreadystatechange" in u.createElement("script")
            ? v()
            : S(),
        (i.setImmediate = c),
        (i.clearImmediate = h));
    })(
      typeof self == "undefined" ? (typeof t == "undefined" ? this : t) : self,
    );
  },
  null,
);
