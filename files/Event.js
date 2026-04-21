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
    "fb-error",
    "getDocumentScrollElement",
    "getObjectValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = "Event.listeners";
    Event.prototype || (Event.prototype = {});
    function c(e) {
      (e.type === "click" || e.type === "mouseover" || e.type === "keydown") &&
        r("Arbiter").inform("Event/stop", { event: e });
    }
    var d = (function () {
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
    function m(e) {
      if (e instanceof d) return e;
      if (
        (e ||
          (!window.addEventListener && document.createEventObject
            ? (e = window.event ? document.createEventObject(window.event) : {})
            : (e = {})),
        !e._inherits_from_prototype)
      )
        for (var t in Event.prototype)
          try {
            e[t] = Event.prototype[t];
          } catch (e) {}
      return e;
    }
    Object.assign(
      Event.prototype,
      {
        _inherits_from_prototype: !0,
        getRelatedTarget: function () {
          var e =
            this.relatedTarget ||
            (this.fromElement === this.srcElement
              ? this.toElement
              : this.fromElement);
          return e && e.nodeType ? e : null;
        },
        getModifiers: function () {
          var e = {
            control: !!this.ctrlKey,
            shift: !!this.shiftKey,
            alt: !!this.altKey,
            meta: !!this.metaKey,
          };
          return (
            (e.access = r("UserAgent").isPlatform("Mac OS X")
              ? e.control
              : e.alt),
            (e.any = e.control || e.shift || e.alt || e.meta),
            e
          );
        },
        isRightClick: function () {
          return this.which
            ? this.which === 3
            : this.button && this.button === 2;
        },
        isMiddleClick: function () {
          return this.which
            ? this.which === 2
            : this.button && this.button === 4;
        },
        isDefaultRequested: function () {
          return (
            this.getModifiers().any ||
            this.isMiddleClick() ||
            this.isRightClick()
          );
        },
      },
      d.prototype,
    );
    var p = {
      listen: function (n, o, a, i, l) {
        if (
          (typeof a == "function" &&
            (a = r("TimeSlice").guard(
              a,
              r("dedupString")("Event.js " + o + " handler"),
            )),
          !l || typeof l == "boolean"
            ? (l = { passive: !1 })
            : (l = { passive: l.passive || !1 }),
          !(e || (e = r("ExecutionEnvironment"))).canUseDOM)
        )
          return new R(n, a, null, o, i, null, l);
        if (
          (typeof n == "string" && (n = r("$")(n)),
          typeof i == "undefined" && (i = Event.Priority.NORMAL),
          typeof o == "object")
        ) {
          var t = {};
          for (var s in o) t[s] = Event.listen(n, s, o[s], i, l);
          return t;
        }
        if (o.match(/^on/i))
          throw new TypeError(
            "Bad event name `" + o + "': use `click', not `onclick'.",
          );
        if (!n) {
          var c = r("fb-error").TAAL.blameToPreviousFrame(
            new Error("Cannot listen to an undefined element."),
          );
          throw (
            r("FBLogger")("event")
              .catching(c)
              .mustfix("Tried to listen to element of type %s", o),
            c
          );
        }
        if (n.nodeName == "LABEL" && o == "click") {
          var d = n.getElementsByTagName("input");
          n = d.length === 1 ? d[0] : n;
        } else if (n === window && o === "scroll") {
          var m = r("getDocumentScrollElement")();
          m !== document.documentElement && m !== document.body && (n = m);
        }
        var p = r("DataStore").get(n, u, {}),
          _ = g[o];
        (_ && ((o = _.base), _.wrap && (a = _.wrap(a))), C(n, p, o, l));
        var f = p[o];
        i in f || (f[i] = []);
        var h = f[i].length,
          b = new R(n, a, p, o, i, h, l);
        return (
          (f[i][h] = b),
          f.numHandlers++,
          l.passive || (f.numNonPassiveHandlers++, y(n, p[o], o)),
          b
        );
      },
      stop: function (t) {
        var e = new (r("DOMEvent"))(t).stopPropagation();
        return (c(e.event), t);
      },
      prevent: function (t) {
        return (new (r("DOMEvent"))(t).preventDefault(), t);
      },
      isDefaultPrevented: function (t) {
        return new (r("DOMEvent"))(t).isDefaultPrevented(t);
      },
      kill: function (t) {
        var e = new (r("DOMEvent"))(t).kill();
        return (c(e.event), !1);
      },
      getKeyCode: function (t) {
        if (((t = new (r("DOMEvent"))(t).event), !t)) return !1;
        switch (t.keyCode) {
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
        if (t.shiftKey)
          switch (t.keyCode) {
            case 33:
            case 34:
            case 37:
            case 38:
            case 39:
            case 40:
              return null;
          }
        return t.keyCode;
      },
      getPriorities: function () {
        if (!_) {
          var e = r("getObjectValues")(Event.Priority);
          (e.sort(function (e, t) {
            return e - t;
          }),
            (_ = e));
        }
        return _;
      },
      fire: function (t, n, r) {
        var e = new d(t, n, r),
          o;
        do {
          var a = Event.__getHandler(t, n);
          (a && (o = a(e)), (t = t.parentNode));
        } while (t && o !== !1 && !e.cancelBubble);
        return o !== !1;
      },
      __fire: function (t, n, r) {
        var e = Event.__getHandler(t, n);
        if (e) return e(m(r));
      },
      __getHandler: function (t, n) {
        var e = r("DataStore").get(t, u);
        return e && e[n] ? e[n].domHandler : t["on" + n];
      },
      getPosition: function (t) {
        t = new (r("DOMEvent"))(t).event;
        var e = r("getDocumentScrollElement")(),
          n = t.clientX + o("Scroll").getLeft(e),
          a = t.clientY + o("Scroll").getTop(e);
        return { x: n, y: a };
      },
    };
    Object.assign(Event, p);
    var _ = null,
      f = function (t) {
        return function (e) {
          if (!o("DOMQuery").contains(this, e.getRelatedTarget()))
            return t.call(this, e);
        };
      },
      g;
    if (
      (window.navigator.msPointerEnabled
        ? (g = {
            mousedown: { base: "MSPointerDown" },
            mousemove: { base: "MSPointerMove" },
            mouseup: { base: "MSPointerUp" },
            mouseover: { base: "MSPointerOver" },
            mouseout: { base: "MSPointerOut" },
            mouseenter: { base: "MSPointerOver", wrap: f },
            mouseleave: { base: "MSPointerOut", wrap: f },
          })
        : (g = {
            mouseenter: { base: "mouseover", wrap: f },
            mouseleave: { base: "mouseout", wrap: f },
          }),
      r("UserAgent").isBrowser("Firefox < 52"))
    ) {
      var h = function (t, n) {
        n = m(n);
        for (var e = n.getTarget(); e; )
          (Event.__fire(e, t, n), (e = e.parentNode));
      };
      (document.documentElement.addEventListener(
        "focus",
        h.bind(null, "focusin"),
        !0,
      ),
        document.documentElement.addEventListener(
          "blur",
          h.bind(null, "focusout"),
          !0,
        ));
    }
    var y = function (t, n, o) {
        var e = n.numNonPassiveHandlers == 0;
        e != n.options.passive &&
          (n.domHandlerRemover.remove(),
          (n.options.passive = e),
          (n.domHandlerRemover = r("DOMEventListener").add(t, o, n.domHandler, {
            passive: e,
          })));
      },
      C = function (t, n, o, a) {
        if (!(o in n)) {
          var e = r("TimeSlice").guard(
            S.bind(t, o),
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
            var l =
                t === document.documentElement
                  ? Event.Priority._BUBBLE
                  : Event.Priority.TRADITIONAL,
              s = t[i];
            ((t[i] = null), Event.listen(t, o, s, l, a));
          }
        }
      };
    function b(e) {
      return e.href.endsWith("#")
        ? e.href === document.location.href ||
            e.href === document.location.href + "#"
        : !1;
    }
    function v(e, t) {
      return e.nodeName === "INPUT" && e.type === t;
    }
    var S = function (t, n) {
      var e = m(n);
      if (!r("DataStore").get(this, u))
        throw new Error("Bad listenHandler context.");
      var a = r("DataStore").get(this, u)[t];
      if (!a) throw new Error("No registered handlers for `" + t + "'.");
      if (
        t == "click" ||
        t == "contextmenu" ||
        (t == "mousedown" && e.which == 2)
      ) {
        var i = e.getTarget(),
          l = o("Parent").byTag(i, "a");
        l instanceof HTMLAnchorElement &&
          l.href &&
          b(l) &&
          !v(i, "file") &&
          !v(i, "submit") &&
          e.prevent();
      }
      for (var s = Event.getPriorities(), c = 0; c < s.length; c++) {
        var d = s[c];
        if (d in a) {
          for (var p = a[d], _ = 0; _ < p.length; _++)
            if (p[_]) {
              var f = p[_].fire(this, e);
              if (f === !1) return e.kill();
              e.cancelBubble && e.stop();
            }
        }
      }
      return e.returnValue;
    };
    Event.Priority = { URGENT: -20, TRADITIONAL: -10, NORMAL: 0, _BUBBLE: 1e3 };
    var R = (function () {
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
                  y(this.$1, this.$3[this.$7], this.$7))),
              (this.$3 = null));
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
    t.$E = Event.$E = m;
    var L = Event;
    l.default = L;
  },
  98,
);
