__d(
  "hyperionAutoLogging",
  [
    "Promise",
    "hyperionChannel",
    "hyperionCore",
    "hyperionDOM",
    "hyperionFlowlet",
    "hyperionFlowletCore",
    "hyperionGlobals",
    "hyperionHook",
    "hyperionReact",
    "hyperionTestAndSet",
    "hyperionTimedTrigger",
    "hyperionUtil",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g = new (u || (u = o("hyperionHook"))).Hook(),
      h,
      y = function () {
        return Date.now();
      };
    function C(e) {
      y = e;
    }
    var b = -1,
      v = 0,
      S = typeof performance == "object",
      R = S && typeof performance.now == "function";
    S &&
      (performance.timeOrigin
        ? (b = performance.timeOrigin)
        : performance.timing &&
          performance.timing.navigationStart &&
          (b = performance.timing.navigationStart));
    var L,
      E,
      k = function () {
        return 0;
      };
    if (R && b !== -1) {
      if (
        ((L = function () {
          return performance.now() + b;
        }),
        (E = function () {
          return L() + v;
        }),
        (k = function () {
          var e = Date.now() - L();
          return (e > 500 && ((v = e), g.call(e)), e);
        }),
        typeof window == "object" &&
          typeof window.addEventListener == "function")
      ) {
        var I = { capture: !1, passive: !0 };
        (window.addEventListener("blur", k, I),
          window.addEventListener("focus", k, I));
      }
    } else
      E = L = function () {
        return y();
      };
    var T = {
      setFallback: C,
      fromRelativeTime: (function () {
        if (
          (o("hyperionGlobals").assert(
            b !== -1,
            "cannot convert from relative time without a time origin value for navigation start",
          ),
          b === -1)
        ) {
          var e = R ? Date.now() - performance.now() : 0;
          return function (t) {
            return t + e;
          };
        } else
          return function (e) {
            return e + b;
          };
      })(),
      __adjust: k,
    };
    h = Object.assign(E, T);
    var D = new (c || (c = o("hyperionUtil"))).SessionPersistentData(
      "alcei",
      function () {
        return -1;
      },
      function (e) {
        return "" + e;
      },
      function (e) {
        return parseInt(e) || -1;
      },
    );
    function x() {
      return D.setValue(D.getValue() + 1);
    }
    function $() {
      return D.getValue();
    }
    var P = Object.freeze({
      __proto__: null,
      getLastUsedEventIndex: $,
      getNextEventIndex: x,
    });
    function N(e) {
      return { id: e.id, name: e.getFullName() };
    }
    var M = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.toJSON = function () {
            return babelHelpers.extends({}, N(this), {
              data: {
                surface: this.data.surface,
                triggerFlowlet:
                  this.data.triggerFlowlet && N(this.data.triggerFlowlet),
              },
            });
          }),
          t
        );
      })((d || (d = o("hyperionFlowletCore"))).Flowlet),
      w = (function (e) {
        function t() {
          return e.call(this, M) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(d.FlowletManager),
      A = new w();
    function F(e, t, n) {
      var r,
        o = A.top(),
        a = babelHelpers.extends(
          {
            event: "custom",
            eventTimestamp: h(),
            eventIndex:
              (r = n == null ? void 0 : n.eventIndex) != null ? r : x(),
            callFlowlet: o,
            triggerFlowlet: o == null ? void 0 : o.data.triggerFlowlet,
            metadata: t,
          },
          n,
        );
      return (e.emit("al_custom_event", a), a);
    }
    var O = Object.freeze({ __proto__: null, emitALCustomEvent: F }),
      B = function (t) {
        return !0;
      },
      W = B;
    function q(e) {
      W = e;
    }
    var U = null,
      V = "__reactFiber$",
      H = function (t) {
        var e = null,
          n = null,
          r = !1,
          o = t;
        if ((U != null && (e = o[V + U]), e != null)) return e;
        for (var a of Object.keys(t))
          if (a.startsWith(V)) {
            ((n = a), (U = a.replace(V, "")));
            break;
          } else a.startsWith("_reactListening") && (r = !0);
        return n == null
          ? r && t.parentElement != null
            ? H(t.parentElement)
            : null
          : o[n];
      },
      G = function (t) {
        var e,
          n,
          r = (e = t.displayName) != null ? e : t.name;
        if (r == null) return null;
        var o = r.match(/.*\[from (.*)\.react\]/);
        return (n = o == null ? void 0 : o[1]) != null ? n : r;
      };
    function z(e, t) {
      if (e == null) return null;
      var n = e;
      try {
        for (var r = null, o = [], a = H(n), i = 0, l = !1; a; ) {
          if (t != null && t(r != null, i++)) {
            (o.push("..."), (l = !0));
            break;
          }
          var s = a.type;
          if (s == null || typeof s == "string") {
            a = a.return;
            continue;
          }
          var u = G(s);
          (u == null && s.render != null && (u = G(s.render)),
            u != null && u !== "" && (o.push(u), r == null && W(u) && (r = u)),
            (a = a.return));
        }
        return o.length > 0 ? { name: r, stack: o, isTruncated: l } : null;
      } catch (e) {
        return null;
      }
    }
    var j = "__alInfo",
      K = "data-auto-logging-component-type",
      Q = (function () {
        function e(e) {
          ((this.reactComponentData = null),
            (this.reactComponentType = null),
            (this.element = e),
            (m || (m = o("hyperionCore"))).intercept(
              e,
              (p || (p = o("hyperionDOM"))).IElementtPrototype,
            ),
            m.setVirtualPropertyValue(e, j, this),
            this.cacheInfo());
        }
        var t = e.prototype;
        return (
          (t.cacheInfo = function () {
            (this.getReactComponentData(), this.getReactComponentType());
          }),
          (e.get = function (t) {
            return (m || (m = o("hyperionCore"))).getVirtualPropertyValue(t, j);
          }),
          (e.getOrCreate = function (n) {
            var t;
            return (t = e.get(n)) != null ? t : new e(n);
          }),
          (e.getReactComponentData = function (n, r) {
            var t, o;
            return (t =
              (o = e.get(n)) == null ? void 0 : o.getReactComponentData()) !=
              null
              ? t
              : z(n, r);
          }),
          (t.getReactComponentData = function () {
            return (
              this.reactComponentData ||
                (this.reactComponentData = z(this.element)),
              this.reactComponentData
            );
          }),
          (t.getReactComponentName = function () {
            var e;
            return (e = this.getReactComponentData()) == null ? void 0 : e.name;
          }),
          (t.getReactComponentType = function () {
            return (
              this.reactComponentType ||
                (this.reactComponentType = this.element.getAttribute(K)),
              this.reactComponentType
            );
          }),
          e
        );
      })();
    function X(e, t) {
      var n;
      return (n = e.__ext) == null ? void 0 : n[t];
    }
    function Y(e, t, n) {
      var r, o, a;
      (r = e.__ext) != null || (e.__ext = {});
      var i = (a = (o = e.__ext)[t]) != null ? a : (o[t] = {});
      Object.assign(i, n);
    }
    var J = Object.freeze({
        __proto__: null,
        getEventExtension: X,
        setEventExtension: Y,
      }),
      Z = "data-surface",
      ee = "data-non-int-surface",
      te = "/",
      ne = "data-surface-wrapper";
    function re(e) {
      var t, n;
      return (t = (n = oe(e)) == null ? void 0 : n.getAttribute(Z)) != null
        ? t
        : null;
    }
    function oe(e) {
      var t;
      return (t = e == null ? void 0 : e.closest("[" + Z + "]")) != null
        ? t
        : null;
    }
    function ae(e) {
      var t;
      return (t = e == null ? void 0 : e.getAttribute(Z)) != null ? t : null;
    }
    function ie() {
      return document.querySelectorAll("[" + Z + "]");
    }
    function le(e) {
      return e.getAttribute(ne) === "1";
    }
    function se(e) {
      return Array.from(
        document.querySelectorAll(
          "[" + Z + '="' + e + '"],[' + ee + '="' + e + '"]',
        ),
      );
    }
    var ue = Object.freeze({
        __proto__: null,
        getAncestralSurfaceNode: oe,
        getElementSurface: ae,
        getElementsWithSurfaces: ie,
        getSurfaceElement: se,
        getSurfacePath: re,
        isSurfaceWrapper: le,
      }),
      ce = {
        click: "onClick",
        contextmenu: "onContextMenu",
        dblclick: "onDoubleClick",
        drag: "onDrag",
        dragend: "onDragEnd",
        dragenter: "onDragEnter",
        dragexit: "onDragExit",
        dragleave: "onDragLeave",
        dragover: "onDragOver",
        dragstart: "onDragStart",
        drop: "onDrop",
        keydown: "onKeyDown",
        keypress: "onKeyPress",
        keyup: "onKeyUp",
        mousedown: "onMouseDown",
        mouseenter: "onMouseEnter",
        mouseleave: "onMouseLeave",
        mousemove: "onMouseMove",
        mouseout: "onMouseOut",
        mouseover: "onMouseOver",
        mouseup: "onMouseUp",
        submit: "onSubmit",
      },
      de = { capture: !0, passive: !0 },
      me = { capture: !1, passive: !0 },
      pe = "data-interactable",
      _e = "interactableAncestor",
      fe = function (t, n, r) {
        var e;
        function a(e, t, n, r) {
          var i, l, s, u;
          u = (m || (m = o("hyperionCore"))).getVirtualPropertyValue(e, _e);
          var c = (i = u) == null || (i = i[t]) == null ? void 0 : i[n ? 0 : 1];
          if (c !== void 0) return c;
          r != null ||
            (r =
              "[" +
              pe +
              '*="' +
              t +
              '"]' +
              (n
                ? ""
                : ",input,button,select,option,details,dialog,summary,a[href]"));
          var d = e;
          ((d.matches(r) || he(d, t)) && !ye(d)
            ? (c = d)
            : d.parentElement
              ? (c = a(d.parentElement, t, n, r))
              : (c = null),
            u != null || (u = {}));
          var p = (s = (l = u)[t]) != null ? s : (l[t] = []);
          return ((p[n ? 0 : 1] = c), m.setVirtualPropertyValue(e, _e, u), c);
        }
        function i(e, t, n) {
          for (
            var r =
                "[" +
                pe +
                '*="' +
                t +
                '"]' +
                (n
                  ? ""
                  : ",input,button,select,option,details,dialog,summary,a[href]"),
              o = e;
            o != null;
            o = o.parentElement
          )
            if (o.matches(r) || he(o, t)) {
              if (ye(o)) continue;
              return o;
            }
          return null;
        }
        var l =
          (e = o("hyperionGlobals").getFlags()) == null
            ? void 0
            : e.optimizeInteractibiltyCheck;
        return ((fe = l ? a : i), fe(t, n, r));
      };
    function ge(e, t, n) {
      return (
        n === void 0 && (n = !1),
        e instanceof Element ? fe(e, t, n) : null
      );
    }
    function he(e, t) {
      var n = e["on" + t];
      return n != null;
    }
    var ye = function (t) {
        var e;
        function n(e) {
          return (
            e.tagName === "BODY" ||
            e.tagName === "HTML" ||
            e.tagName === "LABEL" ||
            (e.clientHeight === window.innerHeight &&
              e.clientWidth === window.innerWidth)
          );
        }
        var r = "ignoreInteractivity";
        function a(e) {
          var t;
          return (
            (t = (m || (m = o("hyperionCore"))).getVirtualPropertyValue(e, r)),
            t === !1 ||
              t === !0 ||
              ((t = n(e)),
              t &&
                (m || (m = o("hyperionCore"))).setVirtualPropertyValue(
                  e,
                  r,
                  t,
                )),
            t
          );
        }
        return (
          (ye =
            (e = o("hyperionGlobals").getFlags()) != null &&
            e.optimizeInteractibiltyCheck
              ? a
              : n),
          ye(t)
        );
      },
      Ce = new Map(),
      be = new Set();
    function ve(e) {
      var t = Ce.get(e);
      (t == null ? void 0 : t.active) === !0 &&
        (window.document.removeEventListener(e, t.captureHandler, de),
        window.document.removeEventListener(e, t.bubbleHandler, me),
        be.delete(e),
        Ce.set(e, babelHelpers.extends({}, t, { active: !1 })));
    }
    function Se(e, t) {
      var n,
        r = Ce.get(e);
      (t != null && (ve(e), (r = babelHelpers.extends({}, t, { active: !1 }))),
        ((n = r) == null ? void 0 : n.active) === !1 &&
          (Re(),
          window.document.addEventListener(e, r.captureHandler, de),
          window.document.addEventListener(e, r.bubbleHandler, me),
          be.add(e),
          Ce.set(e, babelHelpers.extends({}, r, { active: !0 }))));
    }
    var Re = function () {
      var e = function (t) {
        return "|" + t + "|";
      };
      function t(t, n) {
        var r = e(t);
        return n ? (n.includes(r) ? n : n + r) : r;
      }
      function n(t, n) {
        var r = e(t);
        return n == null ? void 0 : n.replace(r, "");
      }
      ((p || (p = o("hyperionDOM"))).addEventListener.onBeforeCallObserverAdd(
        function (e, n) {
          be.has(e) &&
            this instanceof Element &&
            !ye(this) &&
            this.setAttribute(pe, t(e, this.getAttribute(pe)));
        },
      ),
        p.removeEventListener.onBeforeCallObserverAdd(function (e, t) {
          if (this instanceof Element) {
            var r = n(e, this.getAttribute(pe));
            r ? this.setAttribute(pe, r) : this.removeAttribute(pe);
          }
        }),
        (f || (f = o("hyperionReact"))).onReactDOMElement.add(function (e, n) {
          if (n != null) {
            var r = n[pe];
            (be.forEach(function (e) {
              n[ce[e]] != null && (r = t(e, r));
            }),
              r && (n[pe] = r));
          }
        }),
        (Re = function () {}));
    };
    function Le(e) {
      return be.has(e);
    }
    function Ee(e) {
      var t = e.replace(/[\u200B-\u200D\uFEFF]/g, "");
      if (t) {
        var n = t.split(/\r\n|\r|\n/),
          r = n && n.length > 0 ? n[0] : null;
        if (r != null) return r;
      }
      return "";
    }
    var ke = null,
      Ie = 20,
      Te = null;
    function De(e) {
      var t;
      ((ke = e),
        (Ie = (t = ke.maxDepth) != null ? t : Ie),
        e.enableElementTextCache && (Te = new WeakMap()));
    }
    function xe(e, t, n, r) {
      var o, a, i;
      return (
        (o =
          (a = r == null ? void 0 : r.updateText) != null
            ? a
            : (i = ke) == null
              ? void 0
              : i.updateText) == null || o(e, t),
        n.push(e),
        n
      );
    }
    function $e(e, t, n, r, o) {
      var a = t.nodeValue;
      return a != null && a !== "" ? xe({ text: a, source: n }, e, r, o) : null;
    }
    function Pe(e) {
      return e instanceof Element;
    }
    function Ne(e, t, n, r) {
      var o,
        a =
          (o = e.element.getAttribute(t)) == null
            ? void 0
            : o
                .split(" ")
                .filter(function (e, t, n) {
                  return n.indexOf(e) === t;
                })
                .map(function (e) {
                  return document.getElementById(e);
                })
                .filter(function (e) {
                  return Pe(e);
                });
      if (!(a != null && a.length)) return null;
      for (var i = 0; i < a.length; i++)
        (i && n.push({ text: " ", source: t }),
          (e.element = a[i]),
          we(e, t, n, r));
      return n;
    }
    function Me(e, t, n, r) {
      var o = e.element.getAttribute(t);
      return o != null && o !== "" ? xe({ text: o, source: t }, e, n, r) : null;
    }
    function we(e, t, n, r) {
      for (
        var o = e.element, a = e.surface, i = o.firstChild;
        i;
        i = i.nextSibling
      )
        i instanceof Element && i.nodeType === Node.ELEMENT_NODE
          ? we({ element: i, surface: a }, t, n, r)
          : i instanceof Text &&
            i.nodeType === Node.TEXT_NODE &&
            $e({ element: o, surface: a }, i, t, n, r);
      return null;
    }
    var Ae =
        typeof ((e = window.CSS) == null ? void 0 : e.escape) == "function"
          ? function (e) {
              return window.CSS.escape(e);
            }
          : function (e) {
              return e.replace(/[\'\"\[\]\(\)]/g, function (e) {
                return "\\" + e;
              });
            },
      Fe = /BUTTON|INPUT|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/;
    function Oe(e, t, n, r) {
      var o = e.element,
        a = e.surface,
        i = o.labels;
      if (i && i.length) {
        for (var l = 0, s = i.length; l < s; ++l) {
          var u = i[l];
          we({ element: u, surface: a }, t, n, r);
        }
        return n;
      }
      if (!Fe.test(o.nodeName)) return null;
      if (o.parentElement instanceof HTMLLabelElement)
        return (we({ element: o.parentElement, surface: a }, t, n, r), n);
      if (o.id)
        try {
          var c = Ae(o.id),
            d = document.querySelectorAll("label[for='" + c + "']");
          if (d.length > 0) {
            for (var m = 0, p = d.length; m < p; ++m) {
              var _ = d[m];
              we({ element: _, surface: a }, t, n, r);
            }
            return n;
          }
        } catch (e) {}
      return null;
    }
    function Be(e, t, n, r, o) {
      var a, i, l, s;
      if ((r === void 0 && (r = 0), !(r > Ie))) {
        var u = { element: e, surface: t },
          c =
            (a =
              (i =
                (l =
                  (s = Oe(u, "label", n, o)) != null
                    ? s
                    : Ne(u, "aria-labelledby", n, o)) != null
                  ? l
                  : Me(u, "aria-label", n, o)) != null
                ? i
                : Me(u, "aria-description", n, o)) != null
              ? a
              : Ne(u, "aria-describedby", n, o);
        if (!c)
          for (var d = e.firstChild; d; d = d.nextSibling)
            (o != null &&
              o.skipChildSurface &&
              d instanceof Element &&
              ae(d) != null) ||
              (d instanceof HTMLElement && d.nodeType === Node.ELEMENT_NODE
                ? Be(d, t, n, r + 1, o)
                : d instanceof Text &&
                  d.nodeType === Node.TEXT_NODE &&
                  $e({ element: e, surface: t }, d, "innerText", n, o));
      }
    }
    function We(e, t, n, r, o) {
      var a, i, l, s, u;
      if (!e || !(e instanceof HTMLElement))
        return { elementName: null, elementText: null };
      if (r) {
        var c,
          d = (c = Te) == null ? void 0 : c.get(e);
        if (d && d.surface === t) return d.result;
      }
      var m = [];
      if ((Be(e, t, m, 0, o), m.length === 0 && n)) {
        var p = ge(e.parentElement, n, !0);
        p && Be(p, t, m, 0, o);
      }
      var _ =
          (a =
            (i =
              (l = o == null ? void 0 : o.getText) != null
                ? l
                : (s = ke) == null
                  ? void 0
                  : s.getText) == null
              ? void 0
              : i(m)) != null
            ? a
            : m.reduce(
                function (e, t) {
                  var n = Ee(t.text),
                    r = babelHelpers.extends({}, e, t, { text: e.text + n });
                  return r;
                },
                { text: "", source: "innerText" },
              ),
        f = {
          elementName: (u = _ == null ? void 0 : _.text) != null ? u : null,
          elementText: _,
        };
      if (r) {
        var g;
        (g = Te) == null || g.set(e, { surface: t, result: f });
      }
      return f;
    }
    var qe = Object.freeze({
        __proto__: null,
        SafeBubbleEventListenerOptions: me,
        SafeCaptureEventListenerOptions: de,
        UIEventNames: be,
        cssEscape: Ae,
        disableUIEventHandlers: ve,
        enableUIEventHandlers: Se,
        extractCleanText: Ee,
        getElementTextEvent: We,
        getInteractable: ge,
        init: De,
        isTrackedEvent: Le,
      }),
      Ue;
    (function (e) {
      ((e.REGAIN_PAGE_VISIBILITY = "REGAIN_PAGE_VISIBILITY"),
        (e.PAGE_FOCUS_GAINED = "PAGE_FOCUS_GAINED"),
        (e.PAGE_FOCUS_LOST = "PAGE_FOCUS_LOST"),
        (e.SCHEDULED = "SCHEDULED"),
        (e.START = "START"),
        (e.STOP = "STOP"));
    })(Ue || (Ue = {}));
    var Ve = 30 * 1e3,
      He = 4 * Ve,
      Ge = "visibilitychange",
      ze = 0,
      je = h(),
      Ke = null,
      Qe = null,
      Xe;
    function Ye() {
      var e, t;
      return (e = (t = Qe) == null ? void 0 : t.heartbeatInterval) != null
        ? e
        : Ve;
    }
    function Je() {
      return Ke != null;
    }
    function Ze(e) {
      if (!Je()) {
        Qe = e;
        var t = e.channel,
          r = t.addListener("al_ui_event", function (e) {
            var t = e.eventTimestamp;
            je = t;
          }),
          o = function (t) {
            var e = document.hidden;
            if (!e) {
              var n = h();
              if (n - ze >= Ve)
                if (((je = n), tt(Ue.REGAIN_PAGE_VISIBILITY), Je())) {
                  var r;
                  (r = Ke) == null || r.delay(Ye());
                } else nt();
            }
          };
        document.addEventListener(Ge, o);
        var a;
        window.addEventListener(
          "focus",
          (a = function () {
            return tt(Ue.PAGE_FOCUS_GAINED);
          }),
          me,
        );
        var i;
        (window.addEventListener(
          "blur",
          (i = function () {
            return tt(Ue.PAGE_FOCUS_LOST);
          }),
          me,
        ),
          (Xe = function () {
            (document.removeEventListener(Ge, o),
              window.removeEventListener("focus", a, me),
              window.removeEventListener("blur", i, me),
              t.removeListener("al_ui_event", r));
          }),
          tt(Ue.START),
          nt(),
          window.addEventListener("beforeunload", function () {
            (s || (s = n("Promise"))).resolve().then(et);
          }));
      }
    }
    function et() {
      Je() &&
        (Ke != null && (Ke.cancel(), (Ke = null)),
        Xe == null || Xe(),
        tt(Ue.STOP));
    }
    function tt(e) {
      var t = h();
      if (t - je <= He) {
        var n;
        ((n = Qe) == null ||
          n.channel.emit("al_heartbeat_event", {
            event: "heartbeat",
            eventIndex: x(),
            eventTimestamp: t,
            heartbeatType: e,
            metadata: {},
          }),
          (ze = t));
      }
    }
    function nt() {
      Ke = new (o("hyperionTimedTrigger").TimedTrigger)(function () {
        Je() && (tt(Ue.SCHEDULED), nt());
      }, Ye());
    }
    var rt = "data-auto-logging-id";
    function ot(e) {
      return e ? e.getAttribute(rt) : null;
    }
    function at(e) {
      var t = (c || (c = o("hyperionUtil"))).guid();
      return (e.setAttribute(rt, t), t);
    }
    function it(e) {
      var t;
      return (t = ot(e)) != null ? t : at(e);
    }
    var lt;
    function st(e) {
      var t,
        n,
        r = window.location.hostname;
      o("hyperionGlobals").assert(
        r.endsWith(e.domain),
        "invalid top level domain for this page",
      );
      var a = e.maxAge || 10;
      lt = new (c || (c = o("hyperionUtil"))).CookiePersistentData(
        (t = e.cookieName) != null ? t : "alsfid",
        function () {
          return { id: (c || (c = o("hyperionUtil"))).guid(), timestamp: h() };
        },
        function (e) {
          return JSON.stringify(e);
        },
        function (e) {
          return JSON.parse(e);
        },
        "; max-age=" +
          a +
          "; path=" +
          ((n = e.path) != null ? n : "/") +
          "; domain=" +
          e.domain,
      );
      var i = h(),
        l = (i - lt.getValue().timestamp) / 1e3;
      l > a &&
        lt.setValue({
          id: (c || (c = o("hyperionUtil"))).guid(),
          timestamp: i,
        });
      var s = new (o("hyperionTimedTrigger").TimedTrigger)(function () {
        lt.setValue({ id: lt.getValue().id, timestamp: h() });
      }, 500);
      function u() {
        s.restart();
      }
      (e.channel.addListener("al_ui_event_capture", u),
        e.channel.addListener("al_ui_event", u),
        e.channel.addListener("al_heartbeat_event", function (e) {
          e.heartbeatType === Ue.STOP && u();
        }));
    }
    function ut() {
      var e;
      return (e = lt) == null ? void 0 : e.getValue();
    }
    var ct = (function () {
        function e(e, t) {
          var n, r;
          ((this.$1 = !1),
            (this.elements = new Set()),
            (this.childrenMap = new Map()),
            (this.surface = e),
            (this.parent = t),
            (this.__ext = Object.create(
              (n = (r = this.parent) == null ? void 0 : r.__ext) != null
                ? n
                : null,
            )));
        }
        var t = e.prototype;
        return (
          (t.getChild = function (t) {
            var e;
            return (e = this.childrenMap.get(t)) != null ? e : null;
          }),
          (t.getChildren = function () {
            return Array.from(this.childrenMap.values());
          }),
          (t.addChild = function (t) {
            this.childrenMap.set(t.surfaceName, t);
          }),
          (t.removeChild = function (t) {
            return this.childrenMap.delete(t.surfaceName);
          }),
          (t.addElement = function (t) {
            this.elements.add(t);
          }),
          (t.getElements = function (t) {
            return (t === void 0 && (t = !1), Array.from(this.elements));
          }),
          (t.removeElement = function (t) {
            this.elements.delete(t);
          }),
          (t.isRemovable = function () {
            var e = this.childrenMap.size === 0;
            return e && !this.$1;
          }),
          (t.remove = function () {
            return this.isRemovable();
          }),
          (t.getInheritedPropery = function (t) {
            return this.__ext[t];
          }),
          (t.setInheritedPropery = function (t, n) {
            return ((this.__ext[t] = n), (this.$1 = !0), n);
          }),
          e
        );
      })(),
      dt = (function (e) {
        function t() {
          var n;
          return (
            (n = e.call(this, null, null) || this),
            (n.surface = null),
            (n.parent = null),
            (n.nonInteractiveSurface = null),
            (n.callFlowlet = null),
            (n.capability = null),
            (n.domAttributeName = null),
            (n.domAttributeValue = null),
            o("hyperionGlobals").assert(
              !t.singlton,
              "There should be only one instance of root ALSurfaceData",
            ),
            n
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.isRemovable = function () {
            return !1;
          }),
          t
        );
      })(ct);
    dt.singlton = new dt();
    var mt = "__uiEventMetadata",
      pt = new Map(),
      _t = (function (e) {
        function t(t, n, r, o, a, i, l, s, u, c) {
          var d;
          return (
            (d = e.call(this, n, r) || this),
            (d.$ALSurfaceData$p_1 = null),
            (d.$ALSurfaceData$p_2 = null),
            (d.surfaceName = t),
            (d.surface = n),
            (d.parent = r),
            (d.nonInteractiveSurface = o),
            (d.callFlowlet = a),
            (d.capability = i),
            (d.metadata = l),
            (d.domAttributeName = u),
            (d.domAttributeValue = c),
            d.parent.addChild(d),
            (i != null && i.nonInteractive) || pt.set(n, d),
            d.setUIEventMetadata(s),
            d
          );
        }
        (babelHelpers.inheritsLoose(t, e),
          (t.tryGet = function (t) {
            return pt.get(t);
          }),
          (t.get = function (t) {
            var e = pt.get(t);
            return (
              o("hyperionGlobals").assert(
                e != null,
                "Invalid situation! Surface " + t + " does not exits!",
              ),
              e
            );
          }));
        var n = t.prototype;
        return (
          (n.getElements = function (n) {
            var t = e.prototype.getElements.call(this, n);
            if (t.length === 0 && n)
              for (
                var r = document.querySelectorAll(
                    "[" +
                      this.domAttributeName +
                      '="' +
                      this.domAttributeValue +
                      '"]',
                  ),
                  o = 0;
                o < r.length;
                o++
              ) {
                var a = r.item(o);
                (this.addElement(a), t.push(a));
              }
            return t;
          }),
          (n.setUIEventMetadata = function (t) {
            if (t) {
              var e = this.getInheritedPropery(mt),
                n;
              (e
                ? ((n = Object.create(e)),
                  Object.keys(t).forEach(function (r) {
                    n[r] = babelHelpers.extends({}, e[r], t[r]);
                  }))
                : (n = t),
                this.setInheritedPropery(mt, n));
            }
          }),
          (n.getInheriteUIEventMetadata = function (t) {
            var e;
            return (e = this.getInheritedPropery(mt)) == null ? void 0 : e[t];
          }),
          (n.getMutationEvent = function () {
            return this.$ALSurfaceData$p_1;
          }),
          (n.setMutationEvent = function (t) {
            if (t === null) {
              var e;
              this.$ALSurfaceData$p_2 = null;
            }
            return ((this.$ALSurfaceData$p_1 = t), t);
          }),
          (n.getVisibilityEvent = function () {
            return this.$ALSurfaceData$p_2;
          }),
          (n.setVisibilityEvent = function (t) {
            return t;
          }),
          (n.isRemovable = function () {
            return (
              e.prototype.isRemovable.call(this) &&
              this.$ALSurfaceData$p_1 === null &&
              this.$ALSurfaceData$p_2 === null
            );
          }),
          (n.remove = function () {
            if (!this.isRemovable()) return !1;
            if (this.parent) {
              var e = this.parent.removeChild(this);
              e && this.parent.isRemovable() && this.parent.remove();
            }
            return (pt.delete(this.surface), !0);
          }),
          t
        );
      })(ct);
    _t.root = dt.singlton;
    var ft = _t.root,
      gt = new c.SafeGetterSetter("ALSurfaceContext");
    function ht(e) {
      o("hyperionGlobals").assert(!gt.isSet(), "Already initilized");
      var t = (f || (f = o("hyperionReact"))).ReactModule.get();
      return (gt.set(t.createContext(ft)), gt.get());
    }
    function yt() {
      if (!gt.isSet()) return ft;
      var e = (f || (f = o("hyperionReact"))).ReactModule.get().useContext(
        gt.get(),
      );
      return (
        o("hyperionGlobals").assert(
          !!e,
          "useALSurfaceContext must be used within an ALSurface",
        ),
        e != null ? e : ft
      );
    }
    var Ct = new c.SafeGetterSetter();
    function bt(e) {
      return e ? JSON.stringify(e) : "";
    }
    var vt = new c.SafeGetterSetter();
    function St(e) {
      var t = e.surfaceData,
        n = e.nodeRef,
        r = e.domAttributeName,
        a = e.domAttributeValue,
        i = e.capability,
        l = e.callFlowlet,
        s = e.triggerFlowlet,
        u = e.metadata,
        c = e.isProxy,
        d = Ct.get(),
        m = (f || (f = o("hyperionReact"))).ReactModule.get();
      return (
        vt.get().enableRenderEvents &&
          d.emit("al_surface_render", {
            surface: a,
            surfaceData: t,
            callFlowlet: l,
            triggerFlowlet: s,
            metadata: u,
            isProxy: c,
            capability: i,
          }),
        m.useLayoutEffect(
          function () {
            var e = t.surfaceName,
              o = n.current;
            if (o != null) {
              if (
                (o.setAttribute(r, a),
                t.addElement(o),
                (i == null ? void 0 : i.trackMutation) === !1)
              )
                return function () {
                  t.removeElement(o);
                };
              var m = {
                surface: a,
                surfaceData: t,
                callFlowlet: l,
                triggerFlowlet: s,
                metadata: u,
                element: o,
                isProxy: c,
                capability: i,
              };
              return (
                d.emit("al_surface_mount", m),
                function () {
                  (d.emit(
                    "al_surface_unmount",
                    babelHelpers.extends({}, m, {
                      triggerFlowlet: l.data.triggerFlowlet,
                    }),
                  ),
                    t.removeElement(o));
                }
              );
            }
          },
          [t, r, a, n],
        ),
        e.children
      );
    }
    function Rt(e) {
      var t = e.capability,
        n = e.domAttributeName,
        r = e.domAttributeValue,
        a = e.surfaceData,
        i = e.children,
        l = (f || (f = o("hyperionReact"))).ReactModule.get(),
        s = e.nodeRef == null,
        u = f.ReactModule.get().useRef();
      if (s) {
        var c,
          d,
          m =
            (c = t == null ? void 0 : t.wrapperStyle) != null
              ? c
              : { display: "contents" };
        i = l.createElement(
          e.wrapperElementType,
          ((d = {}), (d[ne] = "1"), (d[n] = r), (d.style = m), (d.ref = u), d),
          i,
        );
      }
      if (!t || t.trackMutation !== !1 || t.trackVisibilityThreshold) {
        var p,
          _ = e.callFlowlet,
          g = e.metadata,
          h = e.isProxy,
          y = _.data.triggerFlowlet,
          C = (p = e.nodeRef) != null ? p : u;
        i = l.createElement(
          St,
          {
            nodeRef: C,
            domAttributeName: n,
            domAttributeValue: r,
            surfaceData: a,
            callFlowlet: _,
            triggerFlowlet: y,
            metadata: g,
            isProxy: h,
            capability: t,
          },
          i,
        );
      }
      return l.createElement(gt.get().Provider, { value: a }, i);
    }
    var Lt = function (t) {
      var e,
        n = t.surface,
        r = (f || (f = o("hyperionReact"))).ReactModule.get(),
        a,
        i,
        l,
        s,
        u = yt(),
        c = u.surface,
        d = u.nonInteractiveSurface,
        m = t.capability,
        p;
      ((i = (d != null ? d : "") + te + n),
        m != null && m.nonInteractive
          ? ((a = c != null ? c : te), (l = ee), (s = i))
          : ((a = (c != null ? c : "") + te + n), (l = Z), (s = a)),
        (p = u.getChild(n)));
      var _ = (e = t.metadata) != null ? e : {},
        g = t.uiEventMetadata,
        h;
      if (p) h = p.callFlowlet;
      else {
        var y;
        ((h = new A.flowletCtor(n, (y = u.callFlowlet) != null ? y : A.root)),
          (h.data.surface = i),
          (p = new _t(n, a, u, i, h, m, _, g, l, s)));
      }
      ((_.original_call_flowlet = h.getFullName()),
        (_.surface_capability = bt(m)),
        (p.metadata = _),
        p.setUIEventMetadata(g));
      var C = t.renderer ? t.renderer(t.children) : t.children;
      return r.createElement(
        Rt,
        {
          wrapperElementType: "span",
          capability: m,
          domAttributeName: l,
          domAttributeValue: s,
          surfaceData: p,
          callFlowlet: h,
          metadata: _,
          isProxy: !1,
          nodeRef: t.nodeRef,
        },
        C,
      );
    };
    function Et(e) {
      (vt.set(e), Ct.set(e.channel), ht());
    }
    var kt;
    (function (e) {
      ((e.MOUSE = "mouse"), (e.KEY = "key"), (e.INPUT = "input"));
    })(kt || (kt = {}));
    var It = new WeakMap(),
      Tt = {};
    function Dt(e, t) {
      t.reduce(function (t, n, r) {
        return (
          n.forEach(function (n) {
            t[n] = { order: r, groupType: e };
          }),
          t
        );
      }, Tt);
    }
    (Dt(kt.MOUSE, [
      ["mouseover", "mouseenter"],
      ["mousedown", "mouseup", "click"],
      ["mouseout", "mouseleave"],
    ]),
      Dt(kt.INPUT, [["input", "change"]]));
    function xt(e) {
      return e in Tt;
    }
    function $t(e) {
      var t = e.target,
        n = Tt[e.type];
      if (t instanceof Element && n) {
        var r = It.get(t);
        if (r && r.eventOrder <= n.order && r.type === n.groupType)
          return (
            (r.eventOrder = n.order),
            (r.eventName = e.type),
            r.groupFlowlet
          );
        var o = n.groupType,
          a = new A.flowletCtor(o, A.root);
        return (
          (r = { groupFlowlet: a, type: o, eventOrder: n.order }),
          It.set(t, r),
          a
        );
      }
      return A.root;
    }
    var Pt = new URL("http://undefined");
    function Nt() {
      return Pt;
    }
    var Mt = new u.Hook();
    function wt(e, t) {
      t === void 0 && (t = !1);
      try {
        if (Pt.href !== e) {
          var n = new URL(e, Pt.href);
          if (Pt.href !== n.href) {
            ((Pt = n), Mt.call(Pt));
            return;
          }
        }
        if (!t) {
          var r, a;
          (r = (a = o("hyperionGlobals").getLogger()).warn) == null ||
            r.call(a, "ignoring url: path didn't change in " + e);
        }
      } catch (e) {
        o("hyperionGlobals").getLogger().error("invalid url");
      }
    }
    if (
      typeof window == "object" &&
      typeof window.location == "object" &&
      typeof window.location.href == "string"
    ) {
      wt(window.location.href);
      var At = function () {
        return wt(window.location.href, !0);
      };
      (window.addEventListener("hashchange", At),
        window.addEventListener("popstate", At),
        typeof window.navigation == "object" &&
          window.navigation.addEventListener("navigate", function (e) {
            wt(window.location.href, !0);
          }),
        (p || (p = o("hyperionDOM"))).replaceState.onAfterCallMapperAdd(At),
        p.pushState.onAfterCallMapperAdd(At));
    }
    var Ft = 500;
    function Ot(e, t) {
      Se(e, t);
    }
    function Bt(e, t, n) {
      var r = h(),
        o = e.eventFilter,
        a = e.interactableElementsOnly,
        i = a === void 0 ? !0 : a;
      if (o && !o(n)) return null;
      var l = null,
        s = null;
      if (i) {
        if (((l = ge(n.target, t)), l == null)) return null;
        s = it(l);
      } else l = n.target instanceof Element ? n.target : null;
      var u,
        c = {};
      if (t === "change" && l)
        switch (l.nodeName) {
          case "INPUT": {
            var d,
              m = l;
            ((u = m.checked + ""),
              (c.type = (d = m.getAttribute("type")) != null ? d : ""));
            break;
          }
          case "SELECT": {
            var p = l;
            ((u = p.value),
              (c.type = "select"),
              (c.text = p.options[p.selectedIndex].text));
            break;
          }
        }
      return {
        domEvent: n,
        event: t,
        element: l,
        targetElement: n.target instanceof Element ? n.target : null,
        eventTimestamp: r,
        isTrusted: n.isTrusted,
        autoLoggingID: s,
        metadata: c,
        value: u,
        pageURI: Nt(),
      };
    }
    var Wt;
    function qt() {
      var e;
      return (e = Wt) == null ? void 0 : e.data;
    }
    function Ut(e) {
      var t = e.uiEvents,
        n = e.channel,
        r = A;
      t.forEach(function (e) {
        var t = e.eventName,
          i = e.cacheElementReactInfo,
          l = i === void 0 ? !1 : i,
          s = e.useCachedElementText,
          u = s === void 0 ? !/click|change|input|key/.test(t) : s,
          c = e.enableElementTextExtraction,
          _ = c === void 0 ? !1 : c;
        if (!Le(t)) {
          var f = function (s) {
            var i,
              c,
              p = Bt(e, t, s);
            if (p) {
              var f = p.element,
                g = p.targetElement,
                h = p.autoLoggingID,
                y = re(g),
                C = t + "(",
                b = "",
                v = null;
              if (y) {
                var S;
                ((C += b + "surface=" + y), (b = "&"), (v = _t.get(y)));
                var R =
                  (S = v) == null ? void 0 : S.getInheriteUIEventMetadata(t);
                R && Object.assign(p.metadata, R);
              }
              (h && (C += b + "element=" + h), (C += ")"));
              var L = new r.flowletCtor(C, $t(s));
              y && ((L.data.surface = y), (L.data.triggerUIEventName = t));
              var E = o("hyperionGlobals").getFlags().preciseTriggerFlowlet
                  ? r.top()
                  : L,
                k = null;
              if (g && l) {
                var I = Q.getOrCreate(g);
                k = I.getReactComponentData();
              }
              var T = _ ? We(f, y, t, u) : We(null, null),
                D = babelHelpers.extends(
                  {},
                  p,
                  {
                    callFlowlet: E,
                    triggerFlowlet: L,
                    surface: y,
                    surfaceData: v,
                  },
                  T,
                  {
                    reactComponentName: (i = k) == null ? void 0 : i.name,
                    reactComponentStack: (c = k) == null ? void 0 : c.stack,
                  },
                );
              (a(D),
                (m || (m = o("hyperionCore"))).intercept(s),
                (d || (d = o("hyperionFlowletCore"))).setTriggerFlowlet(s, L),
                n.emit("al_ui_event_capture", D));
            }
          };
          (p || (p = o("hyperionDOM"))).stopPropagation.onBeforeCallObserverAdd(
            function () {
              Wt != null &&
                Wt.data.domEvent === this &&
                ((Wt.data.metadata.propagation_was_stopped = "true"),
                Wt.timedEmitter.run());
            },
          );
          var g = function (o) {
            var r = Bt(e, t, o);
            if (r && (n.emit("al_ui_event_bubble", r), Wt != null)) {
              var a = Wt,
                i = a.data,
                l = a.timedEmitter;
              i.event === t &&
                i.domEvent.target === o.target &&
                (Object.assign(i.metadata, r.metadata), l.run());
            }
          };
          Ot(t, { captureHandler: f, bubbleHandler: g });
        }
      });
      function a(e) {
        if (Wt != null) {
          var t = Wt,
            r = t.timedEmitter;
          r.run();
        }
        var a = babelHelpers.extends({}, e, { eventIndex: x() });
        Wt = {
          data: a,
          timedEmitter: new (o("hyperionTimedTrigger").TimedTrigger)(function (
            e,
          ) {
            ((a.metadata.has_timed_out_before_bubble = "" + e),
              n.emit("al_ui_event", a),
              (Wt = null));
          }, Ft),
        };
      }
    }
    function Vt(e) {
      var t = e.channel;
      function n(e, t) {
        var n = window.getComputedStyle(e);
        Array.from(n).forEach(function (e) {
          return t.style.setProperty(
            e,
            n.getPropertyValue(e),
            n.getPropertyPriority(e),
          );
        });
      }
      function r(e) {
        var t = e.cloneNode();
        if (t instanceof HTMLElement && e instanceof HTMLElement) {
          n(e, t);
          for (var o = e.firstChild; o; o = o.nextSibling) t.appendChild(r(o));
        }
        return t;
      }
      function o(e) {
        var n = e.element;
        if (n) {
          var o = r(n),
            a = o.outerHTML,
            i = F(
              t,
              { event_name: "dom_snapshot", snapshot: a },
              { relatedEventIndex: e.eventIndex },
            );
          ((e.metadata.snapshot_event_index = "" + i.eventIndex),
            Y(e, "autologging", { snapshot: a }));
        }
      }
      e.eventConfig.forEach(function (e) {
        switch (e) {
          case "al_ui_event": {
            t.addListener("al_ui_event", function (e) {
              e.event === "click" && o(e);
            });
            break;
          }
          case "al_surface_visibility_event": {
            t.addListener("al_surface_visibility_event", o);
            break;
          }
        }
      });
    }
    function Ht(e) {
      var t = e.channel,
        n = A,
        r = e.uiEvents.find(function (e) {
          return e.eventName === "change";
        });
      if (!r || r.eventName !== "change") return;
      var a = r.cacheElementReactInfo,
        i = r.includeInitialDefaultState,
        l = i === void 0 ? !0 : i,
        s = r.includeInitialDefaultDisabledState,
        u = s === void 0 ? !1 : s,
        c = r.enableElementTextExtraction,
        d = c === void 0 ? !1 : c,
        m = r.interactableElementsOnly ? null : "click";
      function _(e) {
        var r,
          o,
          i = e.element,
          l = e.surface,
          s = null;
        if (a) {
          var u = Q.getOrCreate(i);
          s = u.getReactComponentData();
        }
        var c = d ? We(i, l, m, !0) : We(null, null),
          p = n.top();
        t.emit(
          "al_ui_event",
          babelHelpers.extends(
            {
              event: "change",
              domEvent: new CustomEvent("change"),
              isTrusted: !1,
            },
            e,
            {
              targetElement: e.element,
              eventIndex: x(),
              eventTimestamp: h(),
              autoLoggingID: it(i),
              callFlowlet: p,
              triggerFlowlet: p.data.triggerFlowlet,
            },
            c,
            {
              reactComponentName: (r = s) == null ? void 0 : r.name,
              reactComponentStack: (o = s) == null ? void 0 : o.stack,
              pageURI: Nt(),
            },
          ),
        );
      }
      var f = (function () {
        function e(e) {
          try {
            return (document.querySelectorAll(e), e);
          } catch (t) {}
          return null;
        }
        if (u) {
          var t, n;
          return (t =
            (n = e(
              "input[type=radio][checked], input[type=checkbox], select:has(option[selected])",
            )) != null
              ? n
              : e(
                  "input[type=radio][checked], input[type=checkbox], select",
                )) != null
            ? t
            : "input[type=radio], input[type=checkbox], select";
        } else {
          var r, o;
          return (r =
            (o = e(
              "input[type=radio][checked], input[type=checkbox][checked], select:has(option[selected])",
            )) != null
              ? o
              : e(
                  "input[type=radio][checked], input[type=checkbox][checked], select",
                )) != null
            ? r
            : "input[type=radio], input[type=checkbox], select";
        }
      })();
      function g(e, t, n) {
        var r,
          o = t.querySelectorAll(f);
        if (o.length)
          for (
            var a = (r = n.getMutationEvent()) == null ? void 0 : r.eventIndex,
              i = 0;
            i < o.length;
            ++i
          ) {
            var l = o[i],
              s = oe(l);
            if (s === t)
              switch (l.nodeName) {
                case "INPUT": {
                  var c = l;
                  if (u || c.checked) {
                    var d;
                    _({
                      surface: e,
                      surfaceData: n,
                      element: l,
                      relatedEventIndex: a,
                      value: String(c.checked),
                      metadata: {
                        type: (d = c.getAttribute("type")) != null ? d : "",
                        is_default: "true",
                      },
                    });
                  }
                  break;
                }
                case "SELECT": {
                  var m = l;
                  m.selectedIndex > -1 &&
                    _({
                      surface: e,
                      surfaceData: n,
                      element: l,
                      relatedEventIndex: a,
                      value: m.value,
                      metadata: {
                        type: "select",
                        text: m.options[m.selectedIndex].text,
                        is_default: "true",
                      },
                    });
                  break;
                }
              }
          }
      }
      l &&
        t.addListener("al_surface_mount", function (e) {
          var t;
          if (!((t = e.capability) != null && t.nonInteractive)) {
            var n = e.surface,
              r = e.element,
              o = e.surfaceData;
            !n == null || !r || !o || g(n, r, o);
          }
        });
      var y = null;
      (t.addListener("al_surface_mutation_event", function (e) {
        e.event === "mount_component" &&
          (y = { event: "mount_component", eventIndex: e.eventIndex });
      }),
        t.addListener("al_ui_event", function (e) {
          e.event === "click"
            ? (y = { event: "ui_event", eventIndex: e.eventIndex })
            : (y = null);
        }),
        (p || (p = o("hyperionDOM"))).checked.setter.onBeforeCallObserverAdd(
          function (e) {
            var t, n, r, o;
            if (this.checked !== e) {
              var a = re(this);
              if (a) {
                var i =
                  (t = (n = y) == null ? void 0 : n.eventIndex) != null
                    ? t
                    : -1;
                _({
                  element: this,
                  surface: a,
                  surfaceData: a ? _t.get(a) : null,
                  relatedEventIndex: i,
                  value: "" + e,
                  metadata: {
                    type: (r = this.getAttribute("type")) != null ? r : "",
                    old_value: this.checked + "",
                    is_default:
                      ((o = y) == null ? void 0 : o.event) === "mount_component"
                        ? "true"
                        : "false",
                  },
                });
              }
            }
          },
        ));
    }
    function Gt(e) {
      (d || (d = o("hyperionFlowletCore"))).onFlowletInit.add(function (t) {
        e.channel.emit("al_flowlet_event", { flowlet: t, metadata: {} });
      });
    }
    function zt(e) {
      var t = e.channel,
        n = e.uiEvents,
        r = n.find(function (e) {
          return e.eventName === "mouseover";
        });
      if (r == null || r.eventName !== "mouseover") return;
      var o = r.durationThresholdToEmitHoverEvent;
      if (o == null) return;
      var a = null;
      t.addListener("al_ui_event_capture", function (e) {
        var t;
        if (e.event === "mouseover") {
          var n, r;
          (((n = a) == null ? void 0 : n.targetElement) ===
            ((r = e.domEvent) == null ? void 0 : r.relatedTarget) &&
            a != null &&
            i(a, e, o),
            (a = e));
        } else
          a != null &&
            (e.event === "click" || e.event === "mousedown") &&
            (t = e.element) != null &&
            t.contains(a.targetElement) &&
            (a != null && i(a, e, o), (a = null));
      });
      function i(e, n, r) {
        var o = n.eventTimestamp - e.eventTimestamp;
        if (o > r) {
          var a = e.domEvent;
          t.emit(
            "al_ui_event",
            babelHelpers.extends({}, e, {
              metadata: babelHelpers.extends({}, e.metadata, {
                hover_duration_ms: o.toString(),
              }),
              domEvent: a,
              eventIndex: x(),
              event: "hover",
            }),
          );
        }
      }
    }
    function jt(e) {
      return new URL(e, "http://undefined");
    }
    function Kt(e, t) {
      var n = e.indexOf("?") !== -1 ? "&" : "?",
        r = decodeURIComponent(t.toString());
      return "" + e + n + r;
    }
    var Qt = "requestInfo";
    function Xt() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var r = t[0],
        o = t[1],
        a;
      if (typeof r == "string") {
        var i;
        a = {
          body: o == null ? void 0 : o.body,
          method: (i = o == null ? void 0 : o.method) != null ? i : "GET",
          url: r,
          uri: jt(r),
        };
      } else
        r instanceof Request
          ? (a = { body: r.body, method: r.method, url: r.url, uri: jt(r.url) })
          : (a = { method: "GET", url: r.href, uri: r });
      return a;
    }
    function Yt(e) {
      var t = e.channel,
        n = e.requestUrlMarker,
        r = A;
      (n &&
        (p || (p = o("hyperionDOM"))).fetch.onBeforeCallMapperAdd(function (e) {
          var t = new URLSearchParams(),
            r = e[0];
          if (typeof r == "string") {
            var o,
              a = e[1];
            (n(
              {
                method: (o = a == null ? void 0 : a.method) != null ? o : "GET",
                url: r,
              },
              t,
            ),
              (e[0] = Kt(r, t)));
          } else
            r instanceof Request &&
              (n(r, t),
              (e[0] = new Request(Kt(r.url, t), {
                credentials: r.credentials,
                headers: r.headers,
                integrity: r.integrity,
                keepalive: r.keepalive,
                method: r.method,
                mode: r.mode,
                redirect: r.redirect,
                referrer: r.referrer,
                referrerPolicy: r.referrerPolicy,
                signal: r.signal,
              })));
          return e;
        }),
        (p || (p = o("hyperionDOM"))).fetch.onBeforeAndAfterCallMapperAdd(
          function (n) {
            var a,
              i = n[0],
              l = n[1],
              s,
              u = Xt(i, l);
            if (!e.requestFilter || e.requestFilter(u)) {
              var c = r.top();
              t.emit(
                "al_network_request",
                (s = babelHelpers.extends(
                  {
                    initiatorType: "fetch",
                    event: "network_request",
                    eventTimestamp: h(),
                    eventIndex: x(),
                    callFlowlet: c,
                    triggerFlowlet: c == null ? void 0 : c.data.triggerFlowlet,
                  },
                  u,
                  { metadata: {} },
                )),
              );
            } else s = null;
            var p = (a = r.top()) == null ? void 0 : a.data.triggerFlowlet,
              _ = new r.flowletCtor(
                "fetch(method=" + u.method + "&url=" + u.uri.pathname + ")",
                p,
              );
            return function (e) {
              return (
                (d || (d = o("hyperionFlowletCore"))).setTriggerFlowlet(e, _),
                s &&
                  ((m || (m = o("hyperionCore"))).intercept(
                    e,
                    m.IPromisePrototype,
                  ),
                  m.setVirtualPropertyValue(e, Qt, s),
                  e.then(function (n) {
                    var a,
                      i = (
                        m || (m = o("hyperionCore"))
                      ).getVirtualPropertyValue(e, Qt);
                    o("hyperionGlobals").assert(
                      i != null,
                      "Unexpected situation! Request info missing from fetch promise object",
                    );
                    var l = i == null ? void 0 : i.callFlowlet;
                    (o("hyperionGlobals").assert(
                      _ ===
                        ((a = r.top()) == null
                          ? void 0
                          : a.data.triggerFlowlet),
                      "Broken trigger flowlet chain!",
                    ),
                      t.emit("al_network_response", {
                        initiatorType: "fetch",
                        event: "network_response",
                        eventTimestamp: h(),
                        eventIndex: x(),
                        relatedEventIndex: i.eventIndex,
                        callFlowlet: l,
                        triggerFlowlet: _,
                        requestEvent: i,
                        response: n,
                        metadata: {},
                      }));
                  })),
                e
              );
            };
          },
        ));
    }
    function Jt(e) {
      var t = e.channel,
        n = e.requestUrlMarker,
        r = A;
      (n &&
        (p || (p = o("hyperionDOM"))).open.onBeforeCallMapperAdd(function (e) {
          var t = new URLSearchParams(),
            r = e[0],
            o = e[1];
          return (
            typeof o == "string"
              ? (n({ method: r, url: o }, t), (e[1] = Kt(o, t)))
              : o instanceof URL &&
                n({ method: r, url: o.href }, o.searchParams),
            e
          );
        }),
        (p || (p = o("hyperionDOM"))).open.onBeforeCallObserverAdd(
          function (e, t) {
            var n,
              a =
                typeof t == "string"
                  ? { method: e, url: t, uri: jt(t) }
                  : { method: e, url: t.href, uri: t };
            (m || (m = o("hyperionCore"))).setVirtualPropertyValue(this, Qt, a);
            var i = (n = r.top()) == null ? void 0 : n.data.triggerFlowlet,
              l = new r.flowletCtor(
                "xhr(method=" + e + "&url=" + a.uri.pathname + ")",
                i,
              );
            (d || (d = o("hyperionFlowletCore"))).setTriggerFlowlet(this, l);
          },
        ),
        p.send.onBeforeCallObserverAdd(function (n) {
          var a = this,
            i = (m || (m = o("hyperionCore"))).getVirtualPropertyValue(
              this,
              Qt,
            );
          o("hyperionGlobals").assert(
            i != null,
            "Unexpected situation! Request info is missing from xhr object",
          );
          var l =
              n instanceof Document
                ? i
                : babelHelpers.extends({}, i, { body: n }),
            s = r.top(),
            u = (d || (d = o("hyperionFlowletCore"))).getTriggerFlowlet(this);
          if (!e.requestFilter || e.requestFilter(l)) {
            var c;
            (t.emit(
              "al_network_request",
              (c = babelHelpers.extends(
                {
                  initiatorType: "xmlhttprequest",
                  event: "network_request",
                  eventTimestamp: h(),
                  eventIndex: x(),
                  callFlowlet: s,
                  triggerFlowlet: u,
                },
                l,
                { metadata: {} },
              )),
            ),
              this.addEventListener(
                "loadend",
                function (e) {
                  var n;
                  (o("hyperionGlobals").assert(
                    e.target === a,
                    "Invalid xhr target for loadend event",
                  ),
                    o("hyperionGlobals").assert(
                      u ===
                        ((n = r.top()) == null
                          ? void 0
                          : n.data.triggerFlowlet),
                      "top trigger flowlet on the stack not set correctly!",
                    ),
                    t.emit("al_network_response", {
                      initiatorType: "xmlhttprequest",
                      event: "network_response",
                      eventTimestamp: h(),
                      eventIndex: x(),
                      relatedEventIndex: c.eventIndex,
                      callFlowlet: s,
                      triggerFlowlet: u,
                      requestEvent: c,
                      response: a,
                      metadata: {},
                    }));
                },
                { once: !0 },
              ));
          }
        }));
    }
    function Zt(e) {
      (Yt(e), Jt(e));
    }
    function en(e) {
      var t,
        n = e.channel,
        r = e.cacheElementReactInfo,
        a = e.enableElementTextExtraction,
        i = a === void 0 ? !1 : a,
        l = A,
        s =
          (t = o("hyperionGlobals").getFlags().enableSurfaceDataGC) != null
            ? t
            : !1;
      function u(e, t) {
        var o = h(),
          a = e.element,
          u = e.surface,
          c = e.metadata,
          d = e.surfaceData,
          m = l.top();
        if (
          !(!(a instanceof HTMLElement) || /LINK|SCRIPT/.test(a.nodeName)) &&
          u != null
        ) {
          var p = d.getMutationEvent();
          switch (t) {
            case "added": {
              if (p)
                a === p.element
                  ? "" + u
                  : d.getInheritedPropery("hasDuplicates") ||
                    ("" + u,
                    p.element,
                    d.setInheritedPropery("hasDuplicates", !0));
              else {
                var _,
                  f,
                  g = null;
                if (r) {
                  var y = Q.getOrCreate(a);
                  g = y.getReactComponentData();
                }
                var C = i ? We(a, u) : We(null, null);
                (m &&
                  (c.add_call_flowlet = m == null ? void 0 : m.getFullName()),
                  n.emit(
                    "al_surface_mutation_event",
                    (p = d.setMutationEvent(
                      babelHelpers.extends(
                        {},
                        e,
                        {
                          event: "mount_component",
                          eventTimestamp: o,
                          eventIndex: x(),
                          surface: u,
                          surfaceData: d,
                          element: a,
                          autoLoggingID: it(a),
                          reactComponentName: (_ = g) == null ? void 0 : _.name,
                          reactComponentStack:
                            (f = g) == null ? void 0 : f.stack,
                        },
                        C,
                        { metadata: c, pageURI: Nt() },
                      ),
                    )),
                  ));
              }
              break;
            }
            case "removed": {
              if (p && p.element === a && p.event === "mount_component") {
                var b = o;
                (m && (p.metadata.remove_call_flowlet = m.getFullName()),
                  n.emit(
                    "al_surface_mutation_event",
                    d.setMutationEvent(
                      babelHelpers.extends({}, p, {
                        event: "unmount_component",
                        eventTimestamp: b,
                        eventIndex: x(),
                        relatedEventIndex: p.eventIndex,
                        mountedDuration: (b - p.eventTimestamp) / 1e3,
                        mountEvent: p,
                        triggerFlowlet: e.triggerFlowlet,
                      }),
                    ),
                  ),
                  d.setMutationEvent(null),
                  s && d.remove());
              } else d.getInheritedPropery("hasDuplicates") || "" + u;
              break;
            }
          }
        }
      }
      (n.addListener("al_surface_mount", function (e) {
        !e.isProxy && u(e, "added");
      }),
        n.addListener("al_surface_unmount", function (e) {
          !e.isProxy && u(e, "removed");
        }));
    }
    function tn(e) {
      var t = e.children,
        n = e.container,
        r = yt();
      if (r.surface == null) return t;
      var a = r.domAttributeName,
        i = r.domAttributeValue,
        l = r.capability,
        s = r.callFlowlet,
        u = r.metadata,
        c = (f || (f = o("hyperionReact"))).ReactModule.get().useRef();
      return (
        n instanceof Element &&
          (n.childElementCount === 0 || n.getAttribute(a) === i) &&
          (n.setAttribute(a, i), (c.current = n)),
        f.ReactModule.get().createElement(
          Rt,
          {
            wrapperElementType: n instanceof SVGElement ? "g" : "span",
            capability: l,
            domAttributeName: a,
            domAttributeValue: i,
            surfaceData: r,
            callFlowlet: s,
            metadata: u,
            isProxy: !0,
            nodeRef: c.current != null ? c : null,
          },
          t,
        )
      );
    }
    function nn(e) {
      var t = e.react.IReactDOMModule;
      if (t instanceof (s || (s = n("Promise")))) {
        t.then(function (t) {
          nn(
            babelHelpers.extends({}, e, {
              react: babelHelpers.extends({}, e.react, { IReactDOMModule: t }),
            }),
          );
        });
        return;
      }
      t.createPortal.onBeforeCallMapperAdd(function (t) {
        var n = t[0],
          r = t[1];
        return (
          n != null &&
            (t[0] = (
              f || (f = o("hyperionReact"))
            ).ReactModule.get().createElement(
              tn,
              babelHelpers.extends({}, e, { container: r }),
              n,
            )),
          t
        );
      });
    }
    var rn = "_vis_observer",
      on = "_vis_surfacedata";
    function an(e) {
      var t = e.channel,
        n = o("hyperionGlobals").getFlags().enableDynamicChildTracking === !0,
        r = (function () {
          function e() {
            this.map = new Map();
          }
          var t = e.prototype;
          return (
            (t.get = function (t) {
              return this.map.get(t);
            }),
            (t.set = function (t, n) {
              var e = this.map.get(t);
              e ? e.push(n) : ((e = []), this.map.set(t, [n]));
            }),
            (t.delete = function (t, n) {
              var e = this.map.get(t);
              if (e) {
                var r = e.indexOf(n);
                r > -1 &&
                  ((e[r] = e[e.length - 1]),
                  (e.length -= 1),
                  e.length === 0 && this.map.delete(t));
              }
            }),
            (t[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] =
              function () {
                return this.map[
                  typeof Symbol == "function" ? Symbol.iterator : "@@iterator"
                ]();
              }),
            e
          );
        })(),
        a = new r(),
        i = new r(),
        l = new Map();
      function s(e) {
        if (le(e)) {
          for (var t = [], n = e.firstElementChild; n; n = n.nextElementSibling)
            le(n) || t.push(n);
          if (t.length > 0) return t;
          for (var r = e.firstElementChild; r; r = r.nextElementSibling) {
            var o = s(r);
            if (o.length > 0) return o;
          }
          return [];
        } else return [e];
      }
      function u(e, t, r, l) {
        (l === void 0 && (l = !0),
          l && e.observe(t),
          n &&
            ((m || (m = o("hyperionCore"))).setVirtualPropertyValue(t, rn, e),
            m.setVirtualPropertyValue(t, on, r)),
          a.set(t, r),
          i.set(r, t));
      }
      function c(e, t, r) {
        (e.unobserve(t),
          n &&
            ((m || (m = o("hyperionCore"))).setVirtualPropertyValue(
              t,
              rn,
              null,
            ),
            m.setVirtualPropertyValue(t, on, null)),
          a.delete(t, r),
          i.delete(r, t));
      }
      var d = null;
      n &&
        (d = new MutationObserver(function (e) {
          for (var t of e)
            if (t.type === "childList") {
              var n = t.target,
                r = (m || (m = o("hyperionCore"))).getVirtualPropertyValue(
                  n,
                  rn,
                ),
                i = m.getVirtualPropertyValue(n, on);
              if (!r || !i) return;
              if (
                (t.removedNodes.length > 0 && _(r, n, i, t.removedNodes),
                t.addedNodes.length > 0)
              ) {
                var l = a.get(n);
                if (l && l.includes(i)) {
                  c(r, n, i);
                  var d = s(n);
                  if (d.length > 0)
                    for (var p = 0; p < d.length; ++p) {
                      u(r, d[p], i);
                      break;
                    }
                  else u(r, n, i);
                }
              }
            }
        }));
      function p(e, t, r) {
        var o = s(t);
        if (o.length > 0) for (var a = 0; a < o.length; ++a) u(e, o[a], r);
        else if (n) {
          var i;
          (u(e, t, r, !1), (i = d) == null || i.observe(t, { childList: !0 }));
        }
      }
      function _(e, t, n, r) {
        for (var o = !1, i = 0; i < r.length; i++) {
          var l = r[i];
          if (l.nodeType === Node.ELEMENT_NODE) {
            var s = l,
              u = a.get(s);
            u && u.includes(n) && (c(e, s, n), (o = !0));
          }
        }
        o && p(e, t, n);
      }
      function f(e, t, n) {
        var r = y(n);
        p(r, t, e);
      }
      function g(e, t, r) {
        var o = y(r),
          a = s(t);
        if (a.length > 0) for (var i = 0; i < a.length; ++i) c(o, a[i], e);
        else n && c(o, t, e);
      }
      (t.addListener("al_surface_mutation_event", function (e) {
        var t;
        if ((t = e.capability) != null && t.trackVisibilityThreshold)
          switch (e.event) {
            case "mount_component": {
              f(
                e.surfaceData,
                e.element,
                e.capability.trackVisibilityThreshold,
              );
              break;
            }
            case "unmount_component": {
              g(
                e.surfaceData,
                e.element,
                e.capability.trackVisibilityThreshold,
              );
              break;
            }
          }
      }),
        t.addListener("al_surface_mount", function (e) {
          var t;
          !e.isProxy ||
            !((t = e.capability) != null && t.trackVisibilityThreshold) ||
            !e.element ||
            f(e.surfaceData, e.element, e.capability.trackVisibilityThreshold);
        }),
        t.addListener("al_surface_unmount", function (e) {
          var t;
          !e.isProxy ||
            !((t = e.capability) != null && t.trackVisibilityThreshold) ||
            g(e.surfaceData, e.element, e.capability.trackVisibilityThreshold);
        }));
      function y(e) {
        var n = l.get(e);
        return (
          n ||
            ((n = new IntersectionObserver(
              function (e, n) {
                var i = new r();
                for (var l of e) {
                  var s = l.target,
                    u = a.get(s);
                  if (!u) {
                    o("hyperionGlobals").assert(
                      !1,
                      "Unexpected situation! tracking visibility of unmounted surface",
                    );
                    continue;
                  }
                  for (var c = 0; c < u.length; ++c) {
                    var d = u[c];
                    d.getMutationEvent()
                      ? i.set(d, l)
                      : "" + d.nonInteractiveSurface;
                  }
                }
                for (var m of i) {
                  var p = m[0],
                    _ = m[1];
                  {
                    var f = _[0];
                    _.length > 1;
                    var g = p.getMutationEvent();
                    o("hyperionGlobals").assert(
                      g != null,
                      "Invalid situation! Surface visibility change without mutation event first",
                    );
                    var y = f.isIntersecting;
                    (t.emit(
                      "al_surface_visibility_event",
                      p.setVisibilityEvent(
                        babelHelpers.extends(
                          {},
                          y
                            ? { event: "surface_visible", isIntersecting: y }
                            : { event: "surface_hidden", isIntersecting: y },
                          {
                            eventTimestamp: h.fromRelativeTime(f.time),
                            eventIndex: x(),
                            relatedEventIndex: g.eventIndex,
                            surface: p.nonInteractiveSurface,
                            surfaceData: p,
                            element: g.element,
                            autoLoggingID: g.autoLoggingID,
                            metadata: babelHelpers.extends({}, p.metadata, {
                              emit_time: "" + h(),
                            }),
                            callFlowlet: g.callFlowlet,
                            triggerFlowlet: g.triggerFlowlet,
                            intersectionEntry: f,
                            pageURI: g.pageURI,
                          },
                        ),
                      ),
                    ),
                      y || p.setVisibilityEvent(null));
                  }
                }
              },
              { threshold: e },
            )),
            l.set(e, n)),
          n
        );
      }
    }
    var ln = new (o("hyperionTestAndSet").TestAndSet)();
    function sn(e) {
      if (!ln.testAndSet()) {
        var t = e.channel,
          n = A,
          r = new n.flowletCtor("pageload", n.root);
        r.data.triggerFlowlet = r;
        var a = new ((function () {
          function e() {
            this.$1 = new Set();
          }
          var t = e.prototype;
          return (
            (t.add = function (t) {
              if (!t.parent && t !== t.data.triggerFlowlet) {
                var e;
                (this.$1.add(t),
                  (e = t.data).triggerFlowlet || (e.triggerFlowlet = r));
              }
              return this;
            }),
            (t.delete = function (t) {
              return !t.parent && t.data.surface ? !1 : this.$1.delete(t);
            }),
            (t.values = function () {
              return this.$1;
            }),
            e
          );
        })())();
        a.add(n.root);
        var i = function (t, n) {
          if (t) {
            for (var e of a.values()) e.data.triggerFlowlet = t;
            r = t;
          }
        };
        (i(r, null),
          t.addListener("al_ui_event_capture", function (e) {
            i(e.triggerFlowlet, e.surface);
          }));
        var l = "isTriggerFlowletSetup";
        if (
          ((
            p || (p = o("hyperionDOM"))
          ).addEventListener.onBeforeCallObserverAdd(function (e, t) {
            xt(e) &&
              !Le(e) &&
              this instanceof Element &&
              !(m || (m = o("hyperionCore"))).getVirtualPropertyValue(
                this,
                l,
              ) &&
              ((m || (m = o("hyperionCore"))).setVirtualPropertyValue(
                this,
                l,
                !0,
              ),
              (p || (p = o("hyperionDOM"))).addEventListener.getOriginal().call(
                this,
                e,
                function (t) {
                  if (
                    !(d || (d = o("hyperionFlowletCore"))).getTriggerFlowlet(t)
                  ) {
                    var r = $t(t),
                      a = new n.flowletCtor(e + "(ts=" + h() + ")", r);
                    (d || (d = o("hyperionFlowletCore"))).setTriggerFlowlet(
                      t,
                      a,
                    );
                  }
                },
                !0,
              ));
          }),
          e.enablePerSurfaceTracking)
        ) {
          var s = new Map(),
            u = (m || (m = o("hyperionCore"))).interceptFunction(i);
          ((i = u.interceptor),
            u.onBeforeCallObserverAdd(function (e, t) {
              if (t && e) {
                var n = s.get(t);
                n && (n.data.triggerFlowlet = e);
              }
            }),
            t.addListener("al_surface_mount", function (e) {
              var t = e.surface,
                n = e.callFlowlet;
              s.set(t, n);
              for (var r = n; r.parent; ) r = r.parent;
              a.add(r);
            }),
            t.addListener("al_surface_unmount", function (e) {
              (s.delete(e.surface), a.delete(e.callFlowlet));
            }));
        }
        e.enableFlowletConstructorTracking &&
          ((n.root.data.isRooted = !0),
          (d || (d = o("hyperionFlowletCore"))).onFlowletInit.add(function (e) {
            (e.data.isRooted || e.getFullName(), e.parent || a.add(e));
          }));
        var c = e.react.IReactModule;
        if (
          (e.enableReactUseCallbackTracking &&
            [c.useCallback].forEach(function (e) {
              e.onAfterCallMapperAdd(function (t) {
                return n.wrap(t, e.name);
              });
            }),
          [c.useEffect, c.useLayoutEffect]
            .filter(function (t) {
              return (
                (e.enableReactUseEffectTracking && t === c.useEffect) ||
                (e.enableReactUseLayoutEffectTracking &&
                  t === c.useLayoutEffect)
              );
            })
            .forEach(function (e) {
              e.onBeforeCallMapperAdd(function (t) {
                t[0] = n.wrap(t[0], e.name);
                var r = (m || (m = o("hyperionCore"))).getFunctionInterceptor(
                  t[0],
                );
                return (
                  r &&
                    !r.testAndSet(l) &&
                    r.onAfterCallMapperAdd(function (t) {
                      return t && n.wrap(t, e.name + "_cleanup");
                    }),
                  t
                );
              });
            }),
          [c.useState, c.useReducer]
            .filter(function (t) {
              return (
                (e.enableReactUseStateTracking && t === c.useState) ||
                (e.enableReactUseReducerTracking && t === c.useReducer)
              );
            })
            .forEach(function (e) {
              e.onAfterCallMapperAdd(function (t) {
                t[1] = n.wrap(t[1], e.name);
                var r = (m || (m = o("hyperionCore"))).getFunctionInterceptor(
                  t[1],
                );
                return (
                  r &&
                    !r.testAndSet(l) &&
                    (r == null ||
                      r.onBeforeCallObserverAdd(function () {
                        var e,
                          t =
                            (e = n.top()) == null
                              ? void 0
                              : e.data.triggerFlowlet;
                        i(t, null);
                      })),
                  t
                );
              });
            }),
          e.enableReactSetStateTracking &&
            (o("hyperionGlobals").assert(
              e.react.enableInterceptClassComponentMethods,
              "Trigger Flowlet would need interception of class component methods",
            ),
            (f || (f = o("hyperionReact"))).onReactClassComponentIntercept.add(
              function (e) {
                var t = e.setState;
                t.testAndSet(l) ||
                  t.onBeforeCallObserverAdd(function () {
                    var e,
                      t =
                        (e = n.top()) == null ? void 0 : e.data.triggerFlowlet;
                    i(t, null);
                  });
              },
            )),
          e.enableReactMethodFlowlet)
        ) {
          var _ = "isFlowletSetup";
          ((f || (f = o("hyperionReact"))).onReactClassComponentIntercept.add(
            function (e) {
              var t = e.ctor,
                r = t.getOriginal();
              !r.contextType &&
                !r.contextTypes &&
                ((r.contextType = gt),
                (t.interceptor.contextType = gt),
                t.onAfterCallObserverAdd(function (e) {
                  var t;
                  e._callFlowlet =
                    (t = e.context) == null ? void 0 : t.callFlowlet;
                }));
              var o = [
                e.render,
                e.componentWillMount,
                e.componentDidMount,
                e.componentWillReceiveProps,
                e.shouldComponentUpdate,
                e.componentWillUpdate,
                e.componentDidUpdate,
                e.componentWillUnmount,
                e.componentDidCatch,
              ];
              o.forEach(function (e) {
                e.testAndSet(_) ||
                  (e.onBeforeCallObserverAdd(function () {
                    var e = this._callFlowlet;
                    e && n.push(e);
                  }),
                  e.onAfterCallObserverAdd(function () {
                    var e = this._callFlowlet;
                    e && n.pop(e);
                  }));
              });
            },
          ),
            f.onReactFunctionComponentIntercept.add(function (e) {
              e.testAndSet(_) ||
                e.onBeforeAndAfterCallMapperAdd(function (e) {
                  var t = e[0],
                    r = yt(),
                    o = r == null ? void 0 : r.callFlowlet;
                  return o
                    ? (n.push(o),
                      function (e) {
                        return (n.pop(o), e);
                      })
                    : function (e) {
                        return e;
                      };
                });
            }));
        }
      }
    }
    var un = new c.SafeGetterSetter("AutoLogging options");
    function cn(e) {
      var t;
      if (un.isSet()) return !1;
      un.set(e);
      var n = e.channel;
      if (e.plugins) {
        var r = new (o("hyperionChannel").Channel)();
        (r.pipe(e.channel),
          e.plugins.forEach(function (e) {
            return e == null ? void 0 : e(r);
          }),
          (n = r));
      }
      e.componentNameValidator && q(e.componentNameValidator);
      var a = { channel: n };
      typeof o("hyperionGlobals").globalScope != "undefined" &&
        (o("hyperionGlobals").globalScope == null ||
        (t = o("hyperionGlobals").globalScope.document) == null
          ? void 0
          : t.createElement) != null &&
        ((_ || (_ = o("hyperionFlowlet"))).initFlowletTrackers(A),
        e.triggerFlowlet &&
          sn(babelHelpers.extends({ react: e.react }, a, e.triggerFlowlet)));
      var i = e.react;
      if (typeof i.enableInterceptClassComponentConstructor != "boolean") {
        var l;
        i.enableInterceptClassComponentConstructor =
          (l = e.triggerFlowlet) == null ? void 0 : l.enableReactMethodFlowlet;
      }
      if (typeof i.enableInterceptClassComponentMethods != "boolean") {
        var s, u;
        i.enableInterceptClassComponentMethods =
          ((s = e.triggerFlowlet) == null
            ? void 0
            : s.enableReactSetStateTracking) ||
          ((u = e.triggerFlowlet) == null
            ? void 0
            : u.enableReactMethodFlowlet);
      }
      if (typeof i.enableInterceptFunctionComponentRender != "boolean") {
        var c;
        i.enableInterceptFunctionComponentRender =
          (c = e.triggerFlowlet) == null ? void 0 : c.enableReactMethodFlowlet;
      }
      return (
        (e.enableReactComponentVisitors ||
          i.enableInterceptClassComponentConstructor ||
          i.enableInterceptClassComponentMethods ||
          i.enableInterceptDomElement ||
          i.enableInterceptFunctionComponentRender) &&
          (f || (f = o("hyperionReact"))).init(e.react),
        e.sessionFlowID && st(babelHelpers.extends({}, a, e.sessionFlowID)),
        e.elementText && De(e.elementText),
        e.flowletPublisher &&
          Gt(babelHelpers.extends({}, a, e.flowletPublisher)),
        e.surfaceMutationPublisher &&
          en(babelHelpers.extends({}, a, e.surfaceMutationPublisher)),
        e.surfaceVisibilityPublisher &&
          an(babelHelpers.extends({}, a, e.surfaceVisibilityPublisher)),
        e.uiEventPublisher &&
          (Ut(babelHelpers.extends({}, a, e.uiEventPublisher)),
          zt(babelHelpers.extends({}, a, e.uiEventPublisher)),
          Ht(babelHelpers.extends({}, a, e.uiEventPublisher))),
        e.heartbeat && Ze(babelHelpers.extends({}, a, e.heartbeat)),
        e.network && Zt(babelHelpers.extends({}, a, e.network)),
        e.domSnapshotPublisher &&
          Vt(babelHelpers.extends({}, a, e.domSnapshotPublisher)),
        Et(babelHelpers.extends({}, a, e.surface)),
        nn({ react: e.react }),
        !0
      );
    }
    function dn() {
      return un.get();
    }
    var mn = Object.freeze({ __proto__: null, getInitOptions: dn, init: cn });
    ((l.ALCustomEvent = O),
      (l.ALElementInfo = Q),
      (l.ALEventExtension = J),
      (l.ALEventIndex = P),
      (l.ALFlowlet = M),
      (l.ALFlowletManager = w),
      (l.ALFlowletManagerInstance = A),
      (l.ALHeartbeatType = Ue),
      (l.ALInteractableDOMElement = qe),
      (l.ALSurfaceChannel = Ct),
      (l.ALSurfaceData = _t),
      (l.ALSurfaceUtils = ue),
      (l.AutoLogging = mn),
      (l.SURFACE_SEPARATOR = te),
      (l.Surface = Lt),
      (l.getCurrentUIEventData = qt),
      (l.getOrSetAutoLoggingID = it),
      (l.getSessionFlowID = ut),
      (l.useALSurfaceContext = yt));
  },
  98,
);
