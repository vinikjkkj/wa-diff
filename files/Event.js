__d(
  "Event",
  [
    "$",
    "Arbiter",
    "DOMEvent",
    "DOMEventListener",
    "DOMQuery",
    "DataStore",
    "ErrorGuard",
    "ExecutionEnvironment",
    "FBLogger",
    "Parent",
    "Scroll",
    "TimeSlice",
    "UserAgent",
    "dedupString",
    "err",
    "fb-error",
    "getDocumentScrollElement",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "Event.listeners",
      c = !1;
    Event.prototype || (Event.prototype = {});
    function d(e) {
      (e.type === "click" || e.type === "mouseover" || e.type === "keydown") &&
        r("Arbiter").inform("Event/stop", { event: e });
    }
    var m = (function () {
      function e(e, t, n) {
        ((this.cancelBubble = !1),
          (this.target = e),
          (this.type = t),
          (this.data = n));
      }
      var t = e.prototype;
      return (
        (t.getData = function () {
          return ((this.data = this.data || {}), this.data);
        }),
        (t.stop = function () {
          return Event.stop(this);
        }),
        (t.prevent = function () {
          return Event.prevent(this);
        }),
        (t.isDefaultPrevented = function () {
          return Event.isDefaultPrevented(this);
        }),
        (t.kill = function () {
          return Event.kill(this);
        }),
        (t.getTarget = function () {
          return new (r("DOMEvent"))(this).target || null;
        }),
        e
      );
    })();
    function p(e) {
      var t = e;
      if (t instanceof m) return t;
      if (
        (t ||
          (!window.addEventListener && document.createEventObject
            ? (t = window.event ? document.createEventObject(window.event) : {})
            : (t = {})),
        !t._inherits_from_prototype)
      )
        for (var n in Event.prototype)
          try {
            t[n] = Event.prototype[n];
          } catch (e) {}
      return t;
    }
    function _() {
      var e =
        this.relatedTarget ||
        (this.fromElement === this.srcElement
          ? this.toElement
          : this.fromElement);
      return e && e.nodeType ? e : null;
    }
    function f() {
      return this.which ? this.which === 3 : this.button && this.button === 2;
    }
    function g() {
      return this.which ? this.which === 2 : this.button && this.button === 4;
    }
    function h() {
      var e = {
        control: !!this.ctrlKey,
        shift: !!this.shiftKey,
        alt: !!this.altKey,
        meta: !!this.metaKey,
      };
      return (
        (e.access = r("UserAgent").isPlatform("Mac OS X") ? e.control : e.alt),
        (e.any = e.control || e.shift || e.alt || e.meta),
        e
      );
    }
    function y() {
      return (
        this.getModifiers().any || this.isMiddleClick() || this.isRightClick()
      );
    }
    Object.assign(
      Event.prototype,
      {
        _inherits_from_prototype: !0,
        getRelatedTarget: _,
        getModifiers: h,
        isRightClick: f,
        isMiddleClick: g,
        isDefaultRequested: y,
      },
      m.prototype,
    );
    var C = {
      listen: function (n, o, a, i, l) {
        var t = a;
        typeof t == "function" &&
          (t = r("TimeSlice").guard(
            t,
            r("dedupString")("Event.js " + o + " handler"),
          ));
        var s;
        if (
          (!l || typeof l == "boolean"
            ? (s = { passive: !1 })
            : (s = { passive: l.passive || !1 }),
          !(e || (e = r("ExecutionEnvironment"))).canUseDOM)
        )
          return new D(n, t, null, o, i, null, s);
        var c = typeof n == "string" ? r("$")(n) : n,
          d = i;
        if (
          (typeof d == "undefined" && (d = Event.Priority.NORMAL),
          typeof o == "object")
        ) {
          var m = {};
          for (var p in o) m[p] = Event.listen(c, p, o[p], d, s);
          return m;
        }
        var _ = o;
        if (_.match(/^on/i)) {
          var f = new TypeError(
            "Bad event name `" + _ + "': use `click', not `onclick'.",
          );
          throw (f.stack, f);
        }
        if (!c) {
          var g = r("fb-error").TAAL.blameToPreviousFrame(
            r("err")("Cannot listen to an undefined element."),
          );
          throw (
            r("FBLogger")("event")
              .catching(g)
              .mustfix("Tried to listen to element of type %s", _),
            g
          );
        }
        if (c.nodeName == "LABEL" && _ == "click") {
          var h = c.getElementsByTagName("input");
          c = h.length === 1 ? h[0] : c;
        } else if (c === window && _ === "scroll") {
          var y = r("getDocumentScrollElement")();
          y !== document.documentElement && y !== document.body && (c = y);
        }
        var C = r("DataStore").get(c, u, {}),
          b = S[_];
        (b && ((_ = b.base), b.wrap && (t = b.wrap(t))), E(c, C, _, s));
        var v = C[_];
        d in v || (v[d] = []);
        var R = v[d].length,
          k = new D(c, t, C, _, d, R, s);
        return (
          (v[d][R] = k),
          v.numHandlers++,
          s.passive || (v.numNonPassiveHandlers++, L(c, C[_], _)),
          k
        );
      },
      stop: function (t) {
        var e = new (r("DOMEvent"))(t).stopPropagation();
        return (d(e.event), t);
      },
      prevent: function (t) {
        return (new (r("DOMEvent"))(t).preventDefault(), t);
      },
      isDefaultPrevented: function (t) {
        return new (r("DOMEvent"))(t).isDefaultPrevented();
      },
      kill: function (t) {
        var e = new (r("DOMEvent"))(t).kill();
        return (d(e.event), !1);
      },
      getKeyCode: function (t) {
        var e = new (r("DOMEvent"))(t).event;
        if (!e) return !1;
        switch (e.keyCode) {
          case 63232:
            return 38;
          case 63233:
            return 40;
          case 63234:
            return 37;
          case 63235:
            return 39;
          case 63272:
          case 63273:
          case 63275:
            return null;
          case 63276:
            return 33;
          case 63277:
            return 34;
        }
        if (e.shiftKey)
          switch (e.keyCode) {
            case 33:
            case 34:
            case 37:
            case 38:
            case 39:
            case 40:
              return null;
          }
        return e.keyCode;
      },
      getPriorities: function () {
        if (!b) {
          var e = r("getObjectValues")(Event.Priority);
          (e.sort(function (e, t) {
            return e - t;
          }),
            (b = e));
        }
        return b;
      },
      fire: function (t, n, r) {
        var e = new m(t, n, r),
          o = t,
          a;
        do {
          var i = Event.__getHandler(o, n);
          (i && (a = i(e)), (o = o.parentNode));
        } while (o && a !== !1 && !e.cancelBubble);
        return a !== !1;
      },
      __fire: function (t, n, r) {
        var e = Event.__getHandler(t, n);
        if (e) return e(p(r));
      },
      __getHandler: function (t, n) {
        var e = r("DataStore").get(t, u);
        return e && e[n] ? e[n].domHandler : t["on" + n];
      },
      getPosition: function (t) {
        var e = new (r("DOMEvent"))(t).event,
          n = r("getDocumentScrollElement")(),
          a = e.clientX + o("Scroll").getLeft(n),
          i = e.clientY + o("Scroll").getTop(n);
        return { x: a, y: i };
      },
      setReleaseDomOnRemove: function (t) {
        c = t;
      },
    };
    Object.assign(Event, C);
    var b = null,
      v = function (t) {
        return function (e) {
          if (!o("DOMQuery").contains(this, e.getRelatedTarget()))
            return t.call(this, e);
        };
      },
      S;
    if (
      (window.navigator.msPointerEnabled
        ? (S = {
            mousedown: { base: "MSPointerDown" },
            mousemove: { base: "MSPointerMove" },
            mouseup: { base: "MSPointerUp" },
            mouseover: { base: "MSPointerOver" },
            mouseout: { base: "MSPointerOut" },
            mouseenter: { base: "MSPointerOver", wrap: v },
            mouseleave: { base: "MSPointerOut", wrap: v },
          })
        : (S = {
            mouseenter: { base: "mouseover", wrap: v },
            mouseleave: { base: "mouseout", wrap: v },
          }),
      r("UserAgent").isBrowser("Firefox < 52"))
    ) {
      var R = function (t, n) {
        for (var e = p(n), r = e.getTarget(); r; )
          (Event.__fire(r, t, e), (r = r.parentNode));
      };
      (document.documentElement.addEventListener(
        "focus",
        R.bind(null, "focusin"),
        !0,
      ),
        document.documentElement.addEventListener(
          "blur",
          R.bind(null, "focusout"),
          !0,
        ));
    }
    var L = function (t, n, o) {
        var e = n.numNonPassiveHandlers == 0;
        e != n.options.passive &&
          (n.domHandlerRemover.remove(),
          (n.options.passive = e),
          (n.domHandlerRemover = r("DOMEventListener").add(t, o, n.domHandler, {
            passive: e,
          })));
      },
      E = function (t, n, o, a) {
        if (!(o in n)) {
          var e = r("TimeSlice").guard(
            function (e) {
              return T(t, o, e);
            },
            r("dedupString")("Event listenHandler " + o),
          );
          n[o] = {
            numHandlers: 0,
            numNonPassiveHandlers: 0,
            domHandlerRemover: r("DOMEventListener").add(t, o, e, a),
            domHandler: e,
            options: a,
          };
          var i = "on" + o;
          if (t[i]) {
            var l = Event,
              s =
                t === document.documentElement
                  ? l.Priority._BUBBLE
                  : l.Priority.TRADITIONAL,
              u = t[i];
            ((t[i] = null), Event.listen(t, o, u, s, a));
          }
        }
      };
    function k(e) {
      return e.href.endsWith("#")
        ? e.href === document.location.href ||
            e.href === document.location.href + "#"
        : !1;
    }
    function I(e, t) {
      return e.nodeName === "INPUT" && e.type === t;
    }
    var T = function (t, n, a) {
      var e = p(a);
      if (!r("DataStore").get(t, u)) {
        var i = new Error("Bad listenHandler context.");
        throw (i.stack, i);
      }
      var l = r("DataStore").get(t, u)[n];
      if (!l) {
        var s = new Error("No registered handlers for `" + n + "'.");
        throw (s.stack, s);
      }
      if (
        n == "click" ||
        n == "contextmenu" ||
        (n == "mousedown" && e.which == 2)
      ) {
        var c = e.getTarget(),
          d = o("Parent").byTag(c, "a");
        d instanceof HTMLAnchorElement &&
          d.href &&
          k(d) &&
          !I(c, "file") &&
          !I(c, "submit") &&
          e.prevent();
      }
      for (var m = Event.getPriorities(), _ = 0; _ < m.length; _++) {
        var f = m[_];
        if (f in l) {
          for (var g = l[f], h = 0; h < g.length; h++)
            if (g[h]) {
              var y = g[h].fire(t, e);
              if (y === !1) return e.kill();
              e.cancelBubble && e.stop();
            }
        }
      }
      return e.returnValue;
    };
    Event.Priority = { URGENT: -20, TRADITIONAL: -10, NORMAL: 0, _BUBBLE: 1e3 };
    var D = (function () {
      function t(e, t, n, r, o, a, i) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$7 = r),
          (this.$6 = o),
          (this.$4 = a),
          (this.$5 = i));
      }
      var n = t.prototype;
      return (
        (n.isRemoved = function () {
          return !this.$3;
        }),
        (n.remove = function () {
          if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
            if (this.isRemoved()) {
              r("FBLogger")("Event").warn(
                "Event handler has already been removed",
              );
              return;
            }
            var t = this.$3[this.$7];
            (t.numHandlers <= 1
              ? (t.domHandlerRemover.remove(), delete this.$3[this.$7])
              : (delete t[this.$6][this.$4],
                t.numHandlers--,
                this.$5.passive ||
                  (t.numNonPassiveHandlers--,
                  L(this.$1, this.$3[this.$7], this.$7))),
              (this.$3 = null),
              c && ((this.$1 = null), (this.$2 = null), (this.$5 = null)));
          }
        }),
        (n.fire = function (n, o) {
          return (e || (e = r("ExecutionEnvironment"))).canUseDOM
            ? (s || (s = r("ErrorGuard"))).applyWithGuard(this.$2, n, [o], {
                name:
                  "eventhandler:" +
                  o.type +
                  ":" +
                  (typeof n.name == "string" ? n.name : n.id),
              })
            : !0;
        }),
        t
      );
    })();
    t.$E = Event.$E = p;
    var x = Event;
    l.default = x;
  },
  98,
);
