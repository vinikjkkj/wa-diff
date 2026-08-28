__d(
  "WebBloksCAAGetKeyboardDetailsExtension",
  ["CAAWebBloksMinificationKeys", "UserAgent", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 60,
      c = 230,
      d = 12,
      m = r("UserAgent").isDevice("iPhone"),
      p = r("UserAgent").isPlatform("Android"),
      _ = {
        hasLayoutWrapper: function () {
          return !1;
        },
        wrap: function (t, n) {
          return s.jsxs(s.Fragment, {
            children: [
              s.jsx("style", {
                children:
                  "\n          @keyframes blink_input_opacity_to_prevent_scrolling_when_focus {\n            0% { opacity: 0; }\n            100% { opacity: 1; }\n          }\n          input:focus {\n              animation: blink_input_opacity_to_prevent_scrolling_when_focus 0.01s;\n          }\n        ",
              }),
              n,
            ],
          });
        },
        onMount: function (t, n, r) {
          var e = window.visualViewport;
          if (e) {
            var o = c,
              a,
              i = y(n);
            if (i) {
              var l = i.cleanup,
                s = i.domNode,
                d = i.onKeyboardChange,
                m = i.topOffset,
                p = C(t, n, r),
                _ = function (t) {
                  t.target instanceof HTMLInputElement &&
                    (window.clearTimeout(a), p(o - m, d));
                },
                f = function (t) {
                  t.target instanceof HTMLInputElement &&
                    (t.relatedTarget instanceof HTMLInputElement ||
                      (a = window.setTimeout(function () {
                        p(0, d);
                      }, 100)));
                },
                g = function (t) {
                  var e,
                    n,
                    r,
                    a,
                    i =
                      (e =
                        (n = document.body) == null
                          ? void 0
                          : n.clientHeight) != null
                        ? e
                        : 0,
                    l =
                      (r =
                        (a = document.body) == null ? void 0 : a.clientWidth) !=
                      null
                        ? r
                        : 0;
                  if (i < l) {
                    p(0, d);
                    return;
                  }
                  var s = i - t.target.height * t.target.scale;
                  s > u && (o = s);
                };
              return (
                s.addEventListener("focusin", _),
                s.addEventListener("focusout", f),
                e.addEventListener("resize", g),
                function () {
                  (s.removeEventListener("focusin", _),
                    s.removeEventListener("focusout", f),
                    e.removeEventListener("resize", g),
                    l());
                }
              );
            }
          }
        },
      },
      f = {
        hasLayoutWrapper: function () {
          return !1;
        },
        onMount: function (t, n, r) {
          var e = window.visualViewport;
          if (e) {
            var o = y(n);
            if (o) {
              var a = o.cleanup,
                i = C(t, n, r),
                l = !1,
                s = function (t) {
                  var e,
                    n,
                    r,
                    o,
                    a =
                      (e =
                        (n = document.body) == null
                          ? void 0
                          : n.clientHeight) != null
                        ? e
                        : 0,
                    s =
                      (r =
                        (o = document.body) == null ? void 0 : o.clientWidth) !=
                      null
                        ? r
                        : 0;
                  if (a < s) {
                    i(0);
                    return;
                  }
                  var c = a - t.target.height * t.target.scale;
                  c = c < u ? 0 : c;
                  var d = !1;
                  (!l && c > u
                    ? ((l = !0), (d = !0))
                    : l && c <= u && ((l = !1), (d = !0)),
                    d && i(c));
                };
              return (
                e.addEventListener("resize", s),
                function () {
                  (e.removeEventListener("resize", s), a());
                }
              );
            }
          }
        },
      },
      g = p ? f : m ? _ : {},
      h = g,
      y = function (t) {
        var e,
          n,
          r =
            (e = t.current.uiMutableContainer.domNode) == null
              ? void 0
              : e.current;
        if (!r) return null;
        var o = Math.max(0, r.getBoundingClientRect().top - d),
          a = (n = document.body) != null ? n : r,
          i = { transition: a.style.transition, transform: a.style.transform };
        m && (a.style.transition = "all 180ms ease-in-out");
        function l(e) {
          if (a) {
            var t = e ? "-" + o + "px" : 0;
            a.style.transform = "translateY(" + t + ")";
          }
        }
        function s() {
          ((a.style.transform = i.transform),
            (a.style.transition = i.transition));
        }
        return { domNode: r, topOffset: o, onKeyboardChange: l, cleanup: s };
      },
      C = function (t, n, r) {
        var e = r.executeCatch,
          a = t.getExpression(
            o("CAAWebBloksMinificationKeys").KEYBOARD_DETAILS_ON_SIZE_CHANGE,
          );
        return function (t, o) {
          a != null && (e(n.current, a, [t, n.current, r]), o && o(t > 0));
        };
      };
    l.default = h;
  },
  98,
);
