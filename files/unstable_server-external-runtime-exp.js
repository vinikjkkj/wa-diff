__d(
  "unstable_server-external-runtime-exp",
  ["Promise"],
  function (t, n, r, o, a, i) {
    var e;
    (function () {
      var r =
        t.__fbNativeSetTimeout != null ? t.__fbNativeSetTimeout : setTimeout;
      function o(e) {
        e = e.querySelectorAll("template");
        for (var t = 0; t < e.length; t++) i(e[t]);
      }
      function a(e) {
        function t(e) {
          for (var t = 0; t < e.length; t++)
            for (var n = e[t].addedNodes, r = 0; r < n.length; r++)
              n[r].parentNode && i(n[r]);
        }
        var n = new MutationObserver(t);
        (n.observe(e, { childList: !0 }),
          window.addEventListener("DOMContentLoaded", function () {
            (t(n.takeRecords()), n.disconnect());
          }));
      }
      function i(e) {
        if (e.nodeType === 1 && e.dataset) {
          var t = e.dataset;
          t.rxi != null
            ? (c(t.bid, t.dgst, t.msg, t.stck, t.cstck), e.remove())
            : t.rri != null
              ? (p(t.bid, t.sid, JSON.parse(t.sty)), e.remove())
              : t.rci != null
                ? (m(t.bid, t.sid), e.remove())
                : t.rsi != null && (_(t.sid, t.pid), e.remove());
        }
      }
      var l,
        s = new Map(),
        u = [],
        c = function (t, n, r, o, a) {
          var e = document.getElementById(t);
          e &&
            ((t = e.previousSibling),
            (t.data = "$!"),
            (e = e.dataset),
            n && (e.dgst = n),
            r && (e.msg = r),
            o && (e.stck = o),
            a && (e.cstck = a),
            t._reactRetry && t._reactRetry());
        },
        d = function (t, o) {
          function a(e, t) {
            var n = e.getAttribute(t);
            n &&
              ((t = e.style),
              s.push(e, t.viewTransitionName, t.viewTransitionClass),
              n !== "auto" && (t.viewTransitionClass = n),
              (e = e.getAttribute("vt-name")) || (e = "_T_" + l++ + "_"),
              (t.viewTransitionName = e),
              (i = !0));
          }
          var i = !1,
            l = 0,
            s = [];
          try {
            var c = document.__reactViewTransition;
            if (c) {
              c.finished.finally(d.bind(null, o));
              return;
            }
            var m = new Map();
            for (c = 1; c < o.length; c += 2)
              for (
                var p = o[c].querySelectorAll("[vt-share]"), _ = 0;
                _ < p.length;
                _++
              ) {
                var f = p[_];
                m.set(f.getAttribute("vt-name"), f);
              }
            var g = [];
            for (p = 0; p < o.length; p += 2) {
              var h = o[p],
                y = h.parentNode;
              if (y) {
                var C = y.getBoundingClientRect();
                if (C.left || C.top || C.width || C.height) {
                  for (f = h, c = 0; f; ) {
                    if (f.nodeType === 8) {
                      var b = f.data;
                      if (b === "/$") {
                        if (c === 0) break;
                        c--;
                      } else
                        (b !== "$" && b !== "$?" && b !== "$~" && b !== "$!") ||
                          c++;
                    } else if (f.nodeType === 1) {
                      _ = f;
                      var v = _.getAttribute("vt-name"),
                        S = m.get(v);
                      (a(_, S ? "vt-share" : "vt-exit"),
                        S && (a(S, "vt-share"), m.set(v, null)));
                      var R = _.querySelectorAll("[vt-share]");
                      for (_ = 0; _ < R.length; _++) {
                        var L = R[_],
                          E = L.getAttribute("vt-name"),
                          k = m.get(E);
                        k &&
                          (a(L, "vt-share"), a(k, "vt-share"), m.set(E, null));
                      }
                    }
                    f = f.nextSibling;
                  }
                  for (var I = o[p + 1], T = I.firstElementChild; T; )
                    (m.get(T.getAttribute("vt-name")) !== null &&
                      a(T, "vt-enter"),
                      (T = T.nextElementSibling));
                  f = y;
                  do
                    for (var D = f.firstElementChild; D; ) {
                      var x = D.getAttribute("vt-update");
                      (x && x !== "none" && !s.includes(D) && a(D, "vt-update"),
                        (D = D.nextElementSibling));
                    }
                  while (
                    (f = f.parentNode) &&
                    f.nodeType === 1 &&
                    f.getAttribute("vt-update") !== "none"
                  );
                  var $ = I.querySelectorAll('img[src]:not([loading="lazy"])');
                  g.push.apply(g, $);
                }
              }
            }
            if (i) {
              var P = (document.__reactViewTransition =
                document.startViewTransition({
                  update: function () {
                    t(o);
                    for (
                      var a = [
                          document.documentElement.clientHeight,
                          document.fonts.ready,
                        ],
                        i = {},
                        l = 0;
                      l < g.length;
                      i = {
                        $jscomp$loop$prop$suspenseyImage$8:
                          i.$jscomp$loop$prop$suspenseyImage$8,
                      },
                        l++
                    )
                      if (
                        ((i.$jscomp$loop$prop$suspenseyImage$8 = g[l]),
                        !i.$jscomp$loop$prop$suspenseyImage$8.complete)
                      ) {
                        var s =
                          i.$jscomp$loop$prop$suspenseyImage$8.getBoundingClientRect();
                        0 < s.bottom &&
                          0 < s.right &&
                          s.top < window.innerHeight &&
                          s.left < window.innerWidth &&
                          ((s = new (e || (e = n("Promise")))(
                            (function (e) {
                              return function (t) {
                                (e.$jscomp$loop$prop$suspenseyImage$8.addEventListener(
                                  "load",
                                  t,
                                ),
                                  e.$jscomp$loop$prop$suspenseyImage$8.addEventListener(
                                    "error",
                                    t,
                                  ));
                              };
                            })(i),
                          )),
                          a.push(s));
                      }
                    return (e || (e = n("Promise"))).race([
                      e.all(a),
                      new e(function (e) {
                        var t = performance.now();
                        r(e, 2300 > t && 2e3 < t ? 2300 - t : 500);
                      }),
                    ]);
                  },
                  types: [],
                }));
              (P.ready.finally(function () {
                for (var e = s.length - 3; 0 <= e; e -= 3) {
                  var t = s[e],
                    n = t.style;
                  ((n.viewTransitionName = s[e + 1]),
                    (n.viewTransitionClass = s[e + 1]),
                    t.getAttribute("style") === "" &&
                      t.removeAttribute("style"));
                }
              }),
                P.finished.finally(function () {
                  document.__reactViewTransition === P &&
                    (document.__reactViewTransition = null);
                }),
                (u = []));
              return;
            }
          } catch (e) {}
          t(o);
        }.bind(null, function (e) {
          l = performance.now();
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            o.parentNode !== null && o.parentNode.removeChild(o);
            var a = r.parentNode;
            if (a) {
              var i = r.previousSibling,
                s = 0;
              do {
                if (r && r.nodeType === 8) {
                  var u = r.data;
                  if (u === "/$" || u === "/&") {
                    if (s === 0) break;
                    s--;
                  } else
                    (u !== "$" &&
                      u !== "$?" &&
                      u !== "$~" &&
                      u !== "$!" &&
                      u !== "&") ||
                      s++;
                }
                ((u = r.nextSibling), a.removeChild(r), (r = u));
              } while (r);
              for (var c = []; o.firstChild; )
                (c.push(o.firstChild), a.insertBefore(o.firstChild, r));
              ((i.data = "$"),
                t.__onSSRInject && t.__onSSRInject(c),
                i._reactRetry && requestAnimationFrame(i._reactRetry));
            }
          }
          e.length = 0;
        }),
        m = function (t, n) {
          (n = document.getElementById(n)) &&
            ((t = document.getElementById(t))
              ? ((t.previousSibling.data = "$~"),
                u.push(t, n),
                u.length === 2 &&
                  (typeof l != "number"
                    ? requestAnimationFrame(d.bind(null, u))
                    : ((t = performance.now()),
                      (t = 2300 > t && 2e3 < t ? 2300 - t : l + 300 - t),
                      r(d.bind(null, u), t))))
              : n.parentNode.removeChild(n));
        },
        p = function (r, o, a) {
          function t(e) {
            ((this._p = null), e());
          }
          for (
            var i = new Map(),
              l = document,
              u,
              d,
              p = l.querySelectorAll(
                "link[data-precedence],style[data-precedence]",
              ),
              _ = [],
              f = 0;
            (d = p[f++]);
          )
            d.getAttribute("media") === "not all"
              ? _.push(d)
              : (d.tagName === "LINK" && s.set(d.getAttribute("href"), d),
                i.set(d.dataset.precedence, (u = d)));
          ((p = 0), (d = []));
          var g, h;
          for (f = !0; ; ) {
            if (f) {
              var y = a[p++];
              if (!y) {
                ((f = !1), (p = 0));
                continue;
              }
              var C = !1,
                b = 0,
                v = y[b++];
              if ((h = s.get(v))) {
                var S = h._p;
                C = !0;
              } else {
                for (
                  h = l.createElement("link"),
                    h.href = v,
                    h.rel = "stylesheet",
                    h.dataset.precedence = g = y[b++];
                  (S = y[b++]);
                )
                  h.setAttribute(S, y[b++]);
                ((S = h._p =
                  new (e || (e = n("Promise")))(function (e, n) {
                    ((h.onload = t.bind(h, e)), (h.onerror = t.bind(h, n)));
                  })),
                  s.set(v, h));
              }
              if (
                ((v = h.getAttribute("media")),
                !S || (v && !window.matchMedia(v).matches) || d.push(S),
                C)
              )
                continue;
            } else {
              if (((h = _[p++]), !h)) break;
              ((g = h.getAttribute("data-precedence")),
                h.removeAttribute("media"));
            }
            ((C = i.get(g) || u),
              C === u && (u = h),
              i.set(g, h),
              C
                ? C.parentNode.insertBefore(h, C.nextSibling)
                : ((C = l.head), C.insertBefore(h, C.firstChild)));
          }
          ((a = document.getElementById(r)) && (a.previousSibling.data = "$~"),
            (e || (e = n("Promise")))
              .all(d)
              .then(m.bind(null, r, o), c.bind(null, r, "CSS failed to load")));
        },
        _ = function (t, n) {
          for (
            t = document.getElementById(t),
              n = document.getElementById(n),
              t.parentNode.removeChild(t);
            t.firstChild;
          )
            n.parentNode.insertBefore(t.firstChild, n);
          n.parentNode.removeChild(n);
        };
      (function () {
        addEventListener("submit", function (e) {
          if (!e.defaultPrevented) {
            var t = e.target,
              n = e.submitter,
              r = t.action,
              o = n;
            if (n) {
              var a = n.getAttribute("formAction");
              a != null && ((r = a), (o = null));
            }
            r ===
              "javascript:throw new Error('React form unexpectedly submitted.')" &&
              (e.preventDefault(),
              o
                ? ((e = document.createElement("input")),
                  (e.name = o.name),
                  (e.value = o.value),
                  o.parentNode.insertBefore(e, o),
                  (o = new FormData(t)),
                  e.parentNode.removeChild(e))
                : (o = new FormData(t)),
              (e = t.ownerDocument || t),
              (e.$$reactFormReplay = e.$$reactFormReplay || []).push(t, n, o));
          }
        });
      })();
      var f = performance.getEntriesByType
        ? performance.getEntriesByType("paint")
        : [];
      if (
        (0 < f.length
          ? (l = f[0].startTime)
          : requestAnimationFrame(function () {
              l = performance.now();
            }),
        document.body != null)
      )
        (document.readyState === "loading" && a(document.body),
          o(document.body));
      else {
        var g = new MutationObserver(function () {
          document.body != null &&
            (document.readyState === "loading" && a(document.body),
            o(document.body),
            g.disconnect());
        });
        g.observe(document.documentElement, { childList: !0 });
      }
    })();
  },
  null,
);
