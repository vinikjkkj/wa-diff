__d(
  "react-dnd-cjs-9.4.0",
  [
    "react-0.0.0",
    "dnd-core-cjs-9.4.0",
    "invariant-2.2.4",
    "shallowequal-1.1.0",
    "hoist-non-react-statics-3.3.0",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("react-0.0.0"),
      l = n("dnd-core-cjs-9.4.0"),
      s = n("invariant-2.2.4"),
      u = n("shallowequal-1.1.0"),
      c = n("hoist-non-react-statics-3.3.0"),
      d = {},
      m = { exports: d };
    function p() {
      var t =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return ((t.default = e), t);
        };
      Object.defineProperty(d, "__esModule", { value: !0 });
      var n = t(e()),
        r = l();
      d.DndContext = n.createContext({ dragDropManager: void 0 });
      function o(e, t, n, o) {
        return { dragDropManager: r.createDragDropManager(e, t, n, o) };
      }
      d.createDndContext = o;
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    var g = {},
      h = { exports: g };
    function y() {
      var n =
          (this && this.__rest) ||
          function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (n[r] = e[r]);
            if (e != null && typeof Object.getOwnPropertySymbols == "function")
              for (
                var o = 0, r = Object.getOwnPropertySymbols(e);
                o < r.length;
                o++
              )
                t.indexOf(r[o]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            return n;
          },
        r =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          };
      Object.defineProperty(g, "__esModule", { value: !0 });
      var o = r(e()),
        a = e(),
        i = f(),
        l = 0;
      ((g.DndProvider = a.memo(function (e) {
        var t = e.children,
          r = n(e, ["children"]),
          a = s(r),
          c = a[0],
          m = a[1];
        return (
          o.useEffect(function () {
            return (
              m && l++,
              function () {
                if (m && (l--, l === 0)) {
                  var e = d();
                  e[u] = null;
                }
              }
            );
          }, []),
          o.createElement(i.DndContext.Provider, { value: c }, t)
        );
      })),
        (g.DndProvider.displayName = "DndProvider"));
      function s(e) {
        if ("manager" in e) {
          var t = { dragDropManager: e.manager };
          return [t, !1];
        }
        var n = c(e.backend, e.context, e.options, e.debugMode),
          r = !e.context;
        return [n, r];
      }
      var u = Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");
      function c(e, t, n, r) {
        t === void 0 && (t = d());
        var o = t;
        return (o[u] || (o[u] = i.createDndContext(e, t, n, r)), o[u]);
      }
      function d() {
        return typeof t != "undefined" ? t : window;
      }
    }
    var C = !1;
    function b() {
      return (C || ((C = !0), y()), h.exports);
    }
    var v = {},
      S = { exports: v };
    function R() {
      var t =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return ((t.default = e), t);
        };
      Object.defineProperty(v, "__esModule", { value: !0 });
      var n = t(e());
      ((v.DragPreviewImage = n.memo(function (e) {
        var t = e.connect,
          n = e.src;
        if (typeof Image != "undefined") {
          var r = new Image();
          ((r.src = n),
            (r.onload = function () {
              return t(r);
            }));
        }
        return null;
      })),
        (v.DragPreviewImage.displayName = "DragPreviewImage"));
    }
    var L = !1;
    function E() {
      return (L || ((L = !0), R()), S.exports);
    }
    var k = {},
      I = { exports: k };
    function T() {
      function e(e) {
        for (var t in e) k.hasOwnProperty(t) || (k[t] = e[t]);
      }
      (Object.defineProperty(k, "__esModule", { value: !0 }),
        e(f()),
        e(b()),
        e(E()));
    }
    var D = !1;
    function x() {
      return (D || ((D = !0), T()), I.exports);
    }
    var $ = {},
      P = { exports: $ };
    function N() {
      Object.defineProperty($, "__esModule", { value: !0 });
      var t = e();
      $.useIsomorphicLayoutEffect =
        typeof window != "undefined" ? t.useLayoutEffect : t.useEffect;
    }
    var M = !1;
    function w() {
      return (M || ((M = !0), N()), P.exports);
    }
    var A = {},
      F = { exports: A };
    function O() {
      var t =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(A, "__esModule", { value: !0 });
      var n = t(u()),
        r = e(),
        o = w();
      function a(e, t, a) {
        var i = r.useState(function () {
            return t(e);
          }),
          l = i[0],
          s = i[1],
          u = r.useCallback(
            function () {
              var r = t(e);
              n.default(l, r) || (s(r), a && a());
            },
            [l, e, a],
          );
        return (o.useIsomorphicLayoutEffect(u, []), [l, u]);
      }
      A.useCollector = a;
    }
    var B = !1;
    function W() {
      return (B || ((B = !0), O()), F.exports);
    }
    var q = {},
      U = { exports: q };
    function V() {
      Object.defineProperty(q, "__esModule", { value: !0 });
      var e = w(),
        t = W();
      function n(n, r, o) {
        var a = t.useCollector(n, r, o),
          i = a[0],
          l = a[1];
        return (
          e.useIsomorphicLayoutEffect(
            function () {
              var e = n.getHandlerId();
              if (e != null)
                return n.subscribeToStateChange(l, { handlerIds: [e] });
            },
            [n, l],
          ),
          i
        );
      }
      q.useMonitorOutput = n;
    }
    var H = !1;
    function G() {
      return (H || ((H = !0), V()), U.exports);
    }
    var z = {},
      j = { exports: z };
    function K() {
      Object.defineProperty(z, "__esModule", { value: !0 });
      function e(e, t, n) {
        var r = n.getRegistry(),
          o = r.addTarget(e, t);
        return [
          o,
          function () {
            return r.removeTarget(o);
          },
        ];
      }
      z.registerTarget = e;
      function t(e, t, n) {
        var r = n.getRegistry(),
          o = r.addSource(e, t);
        return [
          o,
          function () {
            return r.removeSource(o);
          },
        ];
      }
      z.registerSource = t;
    }
    var Q = !1;
    function X() {
      return (Q || ((Q = !0), K()), j.exports);
    }
    var Y = {},
      J = { exports: Y };
    function Z() {
      var t =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Y, "__esModule", { value: !0 });
      var n = e(),
        r = t(s()),
        o = f();
      function a() {
        var e = n.useContext(o.DndContext).dragDropManager;
        return (r.default(e != null, "Expected drag drop context"), e);
      }
      Y.useDragDropManager = a;
    }
    var ee = !1;
    function te() {
      return (ee || ((ee = !0), Z()), J.exports);
    }
    var ne = {},
      re = { exports: ne };
    function oe() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(ne, "__esModule", { value: !0 });
      var t = e(s()),
        n = !1,
        r = !1,
        o = (function () {
          function e(e) {
            ((this.sourceId = null), (this.internalMonitor = e.getMonitor()));
          }
          return (
            (e.prototype.receiveHandlerId = function (e) {
              this.sourceId = e;
            }),
            (e.prototype.getHandlerId = function () {
              return this.sourceId;
            }),
            (e.prototype.canDrag = function () {
              t.default(
                !n,
                "You may not call monitor.canDrag() inside your canDrag() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
              );
              try {
                return (
                  (n = !0),
                  this.internalMonitor.canDragSource(this.sourceId)
                );
              } finally {
                n = !1;
              }
            }),
            (e.prototype.isDragging = function () {
              if (!this.sourceId) return !1;
              t.default(
                !r,
                "You may not call monitor.isDragging() inside your isDragging() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor",
              );
              try {
                return (
                  (r = !0),
                  this.internalMonitor.isDraggingSource(this.sourceId)
                );
              } finally {
                r = !1;
              }
            }),
            (e.prototype.subscribeToStateChange = function (e, t) {
              return this.internalMonitor.subscribeToStateChange(e, t);
            }),
            (e.prototype.isDraggingSource = function (e) {
              return this.internalMonitor.isDraggingSource(e);
            }),
            (e.prototype.isOverTarget = function (e, t) {
              return this.internalMonitor.isOverTarget(e, t);
            }),
            (e.prototype.getTargetIds = function () {
              return this.internalMonitor.getTargetIds();
            }),
            (e.prototype.isSourcePublic = function () {
              return this.internalMonitor.isSourcePublic();
            }),
            (e.prototype.getSourceId = function () {
              return this.internalMonitor.getSourceId();
            }),
            (e.prototype.subscribeToOffsetChange = function (e) {
              return this.internalMonitor.subscribeToOffsetChange(e);
            }),
            (e.prototype.canDragSource = function (e) {
              return this.internalMonitor.canDragSource(e);
            }),
            (e.prototype.canDropOnTarget = function (e) {
              return this.internalMonitor.canDropOnTarget(e);
            }),
            (e.prototype.getItemType = function () {
              return this.internalMonitor.getItemType();
            }),
            (e.prototype.getItem = function () {
              return this.internalMonitor.getItem();
            }),
            (e.prototype.getDropResult = function () {
              return this.internalMonitor.getDropResult();
            }),
            (e.prototype.didDrop = function () {
              return this.internalMonitor.didDrop();
            }),
            (e.prototype.getInitialClientOffset = function () {
              return this.internalMonitor.getInitialClientOffset();
            }),
            (e.prototype.getInitialSourceClientOffset = function () {
              return this.internalMonitor.getInitialSourceClientOffset();
            }),
            (e.prototype.getSourceClientOffset = function () {
              return this.internalMonitor.getSourceClientOffset();
            }),
            (e.prototype.getClientOffset = function () {
              return this.internalMonitor.getClientOffset();
            }),
            (e.prototype.getDifferenceFromInitialOffset = function () {
              return this.internalMonitor.getDifferenceFromInitialOffset();
            }),
            e
          );
        })();
      ne.DragSourceMonitorImpl = o;
    }
    var ae = !1;
    function ie() {
      return (ae || ((ae = !0), oe()), re.exports);
    }
    var le = {},
      se = { exports: le };
    function ue() {
      var t =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(le, "__esModule", { value: !0 });
      var n = e(),
        r = t(s());
      function o(e, t) {
        typeof e == "function" ? e(t) : (e.current = t);
      }
      function a(e, t) {
        var a = e.ref;
        return (
          r.default(
            typeof a != "string",
            "Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute",
          ),
          a
            ? n.cloneElement(e, {
                ref: function (e) {
                  (o(a, e), o(t, e));
                },
              })
            : n.cloneElement(e, { ref: t })
        );
      }
      le.cloneWithRef = a;
    }
    var ce = !1;
    function de() {
      return (ce || ((ce = !0), ue()), se.exports);
    }
    var me = {},
      pe = { exports: me };
    function _e() {
      Object.defineProperty(me, "__esModule", { value: !0 });
      var t = e(),
        n = de();
      function r(e) {
        if (typeof e.type != "string") {
          var t = e.type.displayName || e.type.name || "the component";
          throw new Error(
            "Only native element nodes can now be passed to React DnD connectors." +
              ("You can either wrap " +
                t +
                " into a <div>, or turn it into a ") +
              "drag source or a drop target itself.",
          );
        }
      }
      function o(e) {
        return function (o, a) {
          if (
            (o === void 0 && (o = null),
            a === void 0 && (a = null),
            !t.isValidElement(o))
          ) {
            var i = o;
            return (e(i, a), i);
          }
          var l = o;
          r(l);
          var s = a
            ? function (t) {
                return e(t, a);
              }
            : e;
          return n.cloneWithRef(l, s);
        };
      }
      function a(e) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            var r = e[n];
            if (n.endsWith("Ref")) t[n] = e[n];
            else {
              var a = o(r);
              t[n] = function () {
                return a;
              };
            }
          }),
          t
        );
      }
      me.default = a;
    }
    var fe = !1;
    function ge() {
      return (fe || ((fe = !0), _e()), pe.exports);
    }
    var he = {},
      ye = { exports: he };
    function Ce() {
      Object.defineProperty(he, "__esModule", { value: !0 });
      function e(e) {
        return (
          e !== null && typeof e == "object" && e.hasOwnProperty("current")
        );
      }
      he.isRef = e;
    }
    var be = !1;
    function ve() {
      return (be || ((be = !0), Ce()), ye.exports);
    }
    var Se = {},
      Re = { exports: Se };
    function Le() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Se, "__esModule", { value: !0 });
      var t = e(ge()),
        n = ve(),
        r = e(u()),
        o = (function () {
          function e(e) {
            var r = this;
            ((this.hooks = t.default({
              dragSource: function (e, t) {
                (r.clearDragSource(),
                  (r.dragSourceOptions = t || null),
                  n.isRef(e) ? (r.dragSourceRef = e) : (r.dragSourceNode = e),
                  r.reconnectDragSource());
              },
              dragPreview: function (e, t) {
                (r.clearDragPreview(),
                  (r.dragPreviewOptions = t || null),
                  n.isRef(e) ? (r.dragPreviewRef = e) : (r.dragPreviewNode = e),
                  r.reconnectDragPreview());
              },
            })),
              (this.handlerId = null),
              (this.dragSourceRef = null),
              (this.dragSourceOptionsInternal = null),
              (this.dragPreviewRef = null),
              (this.dragPreviewOptionsInternal = null),
              (this.lastConnectedHandlerId = null),
              (this.lastConnectedDragSource = null),
              (this.lastConnectedDragSourceOptions = null),
              (this.lastConnectedDragPreview = null),
              (this.lastConnectedDragPreviewOptions = null),
              (this.backend = e));
          }
          return (
            (e.prototype.receiveHandlerId = function (e) {
              this.handlerId !== e && ((this.handlerId = e), this.reconnect());
            }),
            Object.defineProperty(e.prototype, "connectTarget", {
              get: function () {
                return this.dragSource;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "dragSourceOptions", {
              get: function () {
                return this.dragSourceOptionsInternal;
              },
              set: function (e) {
                this.dragSourceOptionsInternal = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "dragPreviewOptions", {
              get: function () {
                return this.dragPreviewOptionsInternal;
              },
              set: function (e) {
                this.dragPreviewOptionsInternal = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.reconnect = function () {
              (this.reconnectDragSource(), this.reconnectDragPreview());
            }),
            (e.prototype.reconnectDragSource = function () {
              var e = this.dragSource,
                t =
                  this.didHandlerIdChange() ||
                  this.didConnectedDragSourceChange() ||
                  this.didDragSourceOptionsChange();
              if ((t && this.disconnectDragSource(), !!this.handlerId)) {
                if (!e) {
                  this.lastConnectedDragSource = e;
                  return;
                }
                t &&
                  ((this.lastConnectedHandlerId = this.handlerId),
                  (this.lastConnectedDragSource = e),
                  (this.lastConnectedDragSourceOptions =
                    this.dragSourceOptions),
                  (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                    this.handlerId,
                    e,
                    this.dragSourceOptions,
                  )));
              }
            }),
            (e.prototype.reconnectDragPreview = function () {
              var e = this.dragPreview,
                t =
                  this.didHandlerIdChange() ||
                  this.didConnectedDragPreviewChange() ||
                  this.didDragPreviewOptionsChange();
              this.handlerId
                ? this.dragPreview &&
                  t &&
                  ((this.lastConnectedHandlerId = this.handlerId),
                  (this.lastConnectedDragPreview = e),
                  (this.lastConnectedDragPreviewOptions =
                    this.dragPreviewOptions),
                  this.disconnectDragPreview(),
                  (this.dragPreviewUnsubscribe =
                    this.backend.connectDragPreview(
                      this.handlerId,
                      e,
                      this.dragPreviewOptions,
                    )))
                : this.disconnectDragPreview();
            }),
            (e.prototype.didHandlerIdChange = function () {
              return this.lastConnectedHandlerId !== this.handlerId;
            }),
            (e.prototype.didConnectedDragSourceChange = function () {
              return this.lastConnectedDragSource !== this.dragSource;
            }),
            (e.prototype.didConnectedDragPreviewChange = function () {
              return this.lastConnectedDragPreview !== this.dragPreview;
            }),
            (e.prototype.didDragSourceOptionsChange = function () {
              return !r.default(
                this.lastConnectedDragSourceOptions,
                this.dragSourceOptions,
              );
            }),
            (e.prototype.didDragPreviewOptionsChange = function () {
              return !r.default(
                this.lastConnectedDragPreviewOptions,
                this.dragPreviewOptions,
              );
            }),
            (e.prototype.disconnectDragSource = function () {
              this.dragSourceUnsubscribe &&
                (this.dragSourceUnsubscribe(),
                (this.dragSourceUnsubscribe = void 0));
            }),
            (e.prototype.disconnectDragPreview = function () {
              this.dragPreviewUnsubscribe &&
                (this.dragPreviewUnsubscribe(),
                (this.dragPreviewUnsubscribe = void 0),
                (this.dragPreviewNode = null),
                (this.dragPreviewRef = null));
            }),
            Object.defineProperty(e.prototype, "dragSource", {
              get: function () {
                return (
                  this.dragSourceNode ||
                  (this.dragSourceRef && this.dragSourceRef.current)
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "dragPreview", {
              get: function () {
                return (
                  this.dragPreviewNode ||
                  (this.dragPreviewRef && this.dragPreviewRef.current)
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.clearDragSource = function () {
              ((this.dragSourceNode = null), (this.dragSourceRef = null));
            }),
            (e.prototype.clearDragPreview = function () {
              ((this.dragPreviewNode = null), (this.dragPreviewRef = null));
            }),
            e
          );
        })();
      Se.SourceConnector = o;
    }
    var Ee = !1;
    function ke() {
      return (Ee || ((Ee = !0), Le()), Re.exports);
    }
    var Ie = {},
      Te = { exports: Ie };
    function De() {
      var t =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Ie, "__esModule", { value: !0 });
      var n = e(),
        r = t(s()),
        o = X(),
        a = te(),
        i = ie(),
        l = ke(),
        u = w();
      function c() {
        var e = a.useDragDropManager(),
          t = n.useMemo(
            function () {
              return new i.DragSourceMonitorImpl(e);
            },
            [e],
          ),
          r = n.useMemo(
            function () {
              return new l.SourceConnector(e.getBackend());
            },
            [e],
          );
        return [t, r];
      }
      Ie.useDragSourceMonitor = c;
      function d(e, t, i) {
        var l = a.useDragDropManager(),
          s = n.useMemo(function () {
            return {
              beginDrag: function () {
                var n = e.current,
                  o = n.begin,
                  a = n.item;
                if (o) {
                  var i = o(t);
                  return (
                    r.default(
                      i == null || typeof i == "object",
                      "dragSpec.begin() must either return an object, undefined, or null",
                    ),
                    i || a || {}
                  );
                }
                return a || {};
              },
              canDrag: function () {
                return typeof e.current.canDrag == "boolean"
                  ? e.current.canDrag
                  : typeof e.current.canDrag == "function"
                    ? e.current.canDrag(t)
                    : !0;
              },
              isDragging: function (n, r) {
                var o = e.current.isDragging;
                return o ? o(t) : r === n.getSourceId();
              },
              endDrag: function () {
                var n = e.current.end;
                (n && n(t.getItem(), t), i.reconnect());
              },
            };
          }, []);
        u.useIsomorphicLayoutEffect(function () {
          var n = o.registerSource(e.current.item.type, s, l),
            r = n[0],
            a = n[1];
          return (t.receiveHandlerId(r), i.receiveHandlerId(r), a);
        }, []);
      }
      Ie.useDragHandler = d;
    }
    var xe = !1;
    function $e() {
      return (xe || ((xe = !0), De()), Te.exports);
    }
    var Pe = {},
      Ne = { exports: Pe };
    function Me() {
      var t =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Pe, "__esModule", { value: !0 });
      var n = e(),
        r = t(s()),
        o = G(),
        a = w(),
        i = $e();
      function l(e) {
        var t = n.useRef(e);
        ((t.current = e),
          r.default(e.item != null, "item must be defined"),
          r.default(e.item.type != null, "item type must be defined"));
        var l = i.useDragSourceMonitor(),
          s = l[0],
          u = l[1];
        i.useDragHandler(t, s, u);
        var c = o.useMonitorOutput(
            s,
            t.current.collect ||
              function () {
                return {};
              },
            function () {
              return u.reconnect();
            },
          ),
          d = n.useMemo(
            function () {
              return u.hooks.dragSource();
            },
            [u],
          ),
          m = n.useMemo(
            function () {
              return u.hooks.dragPreview();
            },
            [u],
          );
        return (
          a.useIsomorphicLayoutEffect(
            function () {
              ((u.dragSourceOptions = t.current.options || null),
                u.reconnect());
            },
            [u],
          ),
          a.useIsomorphicLayoutEffect(
            function () {
              ((u.dragPreviewOptions = t.current.previewOptions || null),
                u.reconnect());
            },
            [u],
          ),
          [c, d, m]
        );
      }
      Pe.useDrag = l;
    }
    var we = !1;
    function Ae() {
      return (we || ((we = !0), Me()), Ne.exports);
    }
    var Fe = {},
      Oe = { exports: Fe };
    function Be() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Fe, "__esModule", { value: !0 });
      var t = e(u()),
        n = e(ge()),
        r = ve(),
        o = (function () {
          function e(e) {
            var t = this;
            ((this.hooks = n.default({
              dropTarget: function (e, n) {
                (t.clearDropTarget(),
                  (t.dropTargetOptions = n),
                  r.isRef(e) ? (t.dropTargetRef = e) : (t.dropTargetNode = e),
                  t.reconnect());
              },
            })),
              (this.handlerId = null),
              (this.dropTargetRef = null),
              (this.dropTargetOptionsInternal = null),
              (this.lastConnectedHandlerId = null),
              (this.lastConnectedDropTarget = null),
              (this.lastConnectedDropTargetOptions = null),
              (this.backend = e));
          }
          return (
            Object.defineProperty(e.prototype, "connectTarget", {
              get: function () {
                return this.dropTarget;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.reconnect = function () {
              var e =
                this.didHandlerIdChange() ||
                this.didDropTargetChange() ||
                this.didOptionsChange();
              e && this.disconnectDropTarget();
              var t = this.dropTarget;
              if (this.handlerId) {
                if (!t) {
                  this.lastConnectedDropTarget = t;
                  return;
                }
                e &&
                  ((this.lastConnectedHandlerId = this.handlerId),
                  (this.lastConnectedDropTarget = t),
                  (this.lastConnectedDropTargetOptions =
                    this.dropTargetOptions),
                  (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                    this.handlerId,
                    t,
                    this.dropTargetOptions,
                  )));
              }
            }),
            (e.prototype.receiveHandlerId = function (e) {
              e !== this.handlerId && ((this.handlerId = e), this.reconnect());
            }),
            Object.defineProperty(e.prototype, "dropTargetOptions", {
              get: function () {
                return this.dropTargetOptionsInternal;
              },
              set: function (e) {
                this.dropTargetOptionsInternal = e;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.didHandlerIdChange = function () {
              return this.lastConnectedHandlerId !== this.handlerId;
            }),
            (e.prototype.didDropTargetChange = function () {
              return this.lastConnectedDropTarget !== this.dropTarget;
            }),
            (e.prototype.didOptionsChange = function () {
              return !t.default(
                this.lastConnectedDropTargetOptions,
                this.dropTargetOptions,
              );
            }),
            (e.prototype.disconnectDropTarget = function () {
              this.unsubscribeDropTarget &&
                (this.unsubscribeDropTarget(),
                (this.unsubscribeDropTarget = void 0));
            }),
            Object.defineProperty(e.prototype, "dropTarget", {
              get: function () {
                return (
                  this.dropTargetNode ||
                  (this.dropTargetRef && this.dropTargetRef.current)
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.clearDropTarget = function () {
              ((this.dropTargetRef = null), (this.dropTargetNode = null));
            }),
            e
          );
        })();
      Fe.TargetConnector = o;
    }
    var We = !1;
    function qe() {
      return (We || ((We = !0), Be()), Oe.exports);
    }
    var Ue = {},
      Ve = { exports: Ue };
    function He() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Ue, "__esModule", { value: !0 });
      var t = e(s()),
        n = !1,
        r = (function () {
          function e(e) {
            ((this.targetId = null), (this.internalMonitor = e.getMonitor()));
          }
          return (
            (e.prototype.receiveHandlerId = function (e) {
              this.targetId = e;
            }),
            (e.prototype.getHandlerId = function () {
              return this.targetId;
            }),
            (e.prototype.subscribeToStateChange = function (e, t) {
              return this.internalMonitor.subscribeToStateChange(e, t);
            }),
            (e.prototype.canDrop = function () {
              if (!this.targetId) return !1;
              t.default(
                !n,
                "You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor",
              );
              try {
                return (
                  (n = !0),
                  this.internalMonitor.canDropOnTarget(this.targetId)
                );
              } finally {
                n = !1;
              }
            }),
            (e.prototype.isOver = function (e) {
              return this.targetId
                ? this.internalMonitor.isOverTarget(this.targetId, e)
                : !1;
            }),
            (e.prototype.getItemType = function () {
              return this.internalMonitor.getItemType();
            }),
            (e.prototype.getItem = function () {
              return this.internalMonitor.getItem();
            }),
            (e.prototype.getDropResult = function () {
              return this.internalMonitor.getDropResult();
            }),
            (e.prototype.didDrop = function () {
              return this.internalMonitor.didDrop();
            }),
            (e.prototype.getInitialClientOffset = function () {
              return this.internalMonitor.getInitialClientOffset();
            }),
            (e.prototype.getInitialSourceClientOffset = function () {
              return this.internalMonitor.getInitialSourceClientOffset();
            }),
            (e.prototype.getSourceClientOffset = function () {
              return this.internalMonitor.getSourceClientOffset();
            }),
            (e.prototype.getClientOffset = function () {
              return this.internalMonitor.getClientOffset();
            }),
            (e.prototype.getDifferenceFromInitialOffset = function () {
              return this.internalMonitor.getDifferenceFromInitialOffset();
            }),
            e
          );
        })();
      Ue.DropTargetMonitorImpl = r;
    }
    var Ge = !1;
    function ze() {
      return (Ge || ((Ge = !0), He()), Ve.exports);
    }
    var je = {},
      Ke = { exports: je };
    function Qe() {
      Object.defineProperty(je, "__esModule", { value: !0 });
      var t = e(),
        n = X(),
        r = te(),
        o = qe(),
        a = ze(),
        i = w();
      function l() {
        var e = r.useDragDropManager(),
          n = t.useMemo(
            function () {
              return new a.DropTargetMonitorImpl(e);
            },
            [e],
          ),
          i = t.useMemo(
            function () {
              return new o.TargetConnector(e.getBackend());
            },
            [e],
          );
        return [n, i];
      }
      je.useDropTargetMonitor = l;
      function s(e, o, a) {
        var l = r.useDragDropManager(),
          s = t.useMemo(
            function () {
              return {
                canDrop: function () {
                  var t = e.current.canDrop;
                  return t ? t(o.getItem(), o) : !0;
                },
                hover: function () {
                  var t = e.current.hover;
                  t && t(o.getItem(), o);
                },
                drop: function () {
                  var t = e.current.drop;
                  if (t) return t(o.getItem(), o);
                },
              };
            },
            [o],
          );
        i.useIsomorphicLayoutEffect(
          function () {
            var t = n.registerTarget(e.current.accept, s, l),
              r = t[0],
              i = t[1];
            return (o.receiveHandlerId(r), a.receiveHandlerId(r), i);
          },
          [o, a],
        );
      }
      je.useDropHandler = s;
    }
    var Xe = !1;
    function Ye() {
      return (Xe || ((Xe = !0), Qe()), Ke.exports);
    }
    var Je = {},
      Ze = { exports: Je };
    function et() {
      var t =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Je, "__esModule", { value: !0 });
      var n = e(),
        r = t(s()),
        o = G(),
        a = w(),
        i = Ye();
      function l(e) {
        var t = n.useRef(e);
        ((t.current = e),
          r.default(e.accept != null, "accept must be defined"));
        var l = i.useDropTargetMonitor(),
          s = l[0],
          u = l[1];
        i.useDropHandler(t, s, u);
        var c = o.useMonitorOutput(
            s,
            t.current.collect ||
              function () {
                return {};
              },
            function () {
              return u.reconnect();
            },
          ),
          d = n.useMemo(
            function () {
              return u.hooks.dropTarget();
            },
            [u],
          );
        return (
          a.useIsomorphicLayoutEffect(
            function () {
              ((u.dropTargetOptions = e.options || null), u.reconnect());
            },
            [e.options],
          ),
          [c, d]
        );
      }
      Je.useDrop = l;
    }
    var tt = !1;
    function nt() {
      return (tt || ((tt = !0), et()), Ze.exports);
    }
    var rt = {},
      ot = { exports: rt };
    function at() {
      Object.defineProperty(rt, "__esModule", { value: !0 });
      var t = e(),
        n = te(),
        r = W();
      function o(e) {
        var o = n.useDragDropManager(),
          a = o.getMonitor(),
          i = r.useCollector(a, e),
          l = i[0],
          s = i[1];
        return (
          t.useEffect(function () {
            return a.subscribeToOffsetChange(s);
          }),
          t.useEffect(function () {
            return a.subscribeToStateChange(s);
          }),
          l
        );
      }
      rt.useDragLayer = o;
    }
    var it = !1;
    function lt() {
      return (it || ((it = !0), at()), ot.exports);
    }
    var st = {},
      ut = { exports: st };
    function ct() {
      function e(e) {
        for (var t in e) st.hasOwnProperty(t) || (st[t] = e[t]);
      }
      (Object.defineProperty(st, "__esModule", { value: !0 }),
        e(Ae()),
        e(nt()),
        e(lt()));
    }
    var dt = !1;
    function mt() {
      return (dt || ((dt = !0), ct()), ut.exports);
    }
    var pt = {},
      _t = { exports: pt };
    function ft() {
      Object.defineProperty(pt, "__esModule", { value: !0 });
      function e(e) {
        return typeof e == "function";
      }
      pt.isFunction = e;
      function t() {}
      pt.noop = t;
      function n(e) {
        return typeof e == "object" && e !== null;
      }
      function r(e) {
        if (!n(e)) return !1;
        if (Object.getPrototypeOf(e) === null) return !0;
        for (var t = e; Object.getPrototypeOf(t) !== null; )
          t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      pt.isPlainObject = r;
    }
    var gt = !1;
    function ht() {
      return (gt || ((gt = !0), ft()), _t.exports);
    }
    var yt = {},
      Ct = { exports: yt };
    function bt() {
      Object.defineProperty(yt, "__esModule", { value: !0 });
      function e(e) {
        var t = e.current;
        return t == null ? null : t.decoratedRef ? t.decoratedRef.current : t;
      }
      yt.getDecoratedComponent = e;
      function t(e) {
        return e && e.prototype && typeof e.prototype.render == "function";
      }
      yt.isClassComponent = t;
      function n(e) {
        return (
          e &&
          e.$$typeof &&
          e.$$typeof.toString() === "Symbol(react.forward_ref)"
        );
      }
      yt.isRefForwardingComponent = n;
      function r(e) {
        return t(e) || n(e);
      }
      yt.isRefable = r;
      function o(e, t) {}
      yt.checkDecoratorArguments = o;
    }
    var vt = !1;
    function St() {
      return (vt || ((vt = !0), bt()), Ct.exports);
    }
    var Rt = {},
      Lt = { exports: Rt };
    function Et() {
      Object.defineProperty(Rt, "__esModule", { value: !0 });
      var e = ht(),
        t = (function () {
          function t(t) {
            ((this.isDisposed = !1),
              (this.action = e.isFunction(t) ? t : e.noop));
          }
          return (
            (t.isDisposable = function (t) {
              return t && e.isFunction(t.dispose);
            }),
            (t._fixup = function (e) {
              return t.isDisposable(e) ? e : t.empty;
            }),
            (t.create = function (e) {
              return new t(e);
            }),
            (t.prototype.dispose = function () {
              this.isDisposed || (this.action(), (this.isDisposed = !0));
            }),
            (t.empty = { dispose: e.noop }),
            t
          );
        })();
      Rt.Disposable = t;
      var n = (function () {
        function e() {
          for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
          ((this.isDisposed = !1), (this.disposables = e));
        }
        return (
          (e.prototype.add = function (e) {
            this.isDisposed ? e.dispose() : this.disposables.push(e);
          }),
          (e.prototype.remove = function (e) {
            var t = !1;
            if (!this.isDisposed) {
              var n = this.disposables.indexOf(e);
              n !== -1 &&
                ((t = !0), this.disposables.splice(n, 1), e.dispose());
            }
            return t;
          }),
          (e.prototype.clear = function () {
            if (!this.isDisposed) {
              for (
                var e = this.disposables.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = this.disposables[n];
              this.disposables = [];
              for (var n = 0; n < e; n++) t[n].dispose();
            }
          }),
          (e.prototype.dispose = function () {
            if (!this.isDisposed) {
              this.isDisposed = !0;
              for (
                var e = this.disposables.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = this.disposables[n];
              this.disposables = [];
              for (var n = 0; n < e; n++) t[n].dispose();
            }
          }),
          e
        );
      })();
      Rt.CompositeDisposable = n;
      var r = (function () {
        function e() {
          this.isDisposed = !1;
        }
        return (
          (e.prototype.getDisposable = function () {
            return this.current;
          }),
          (e.prototype.setDisposable = function (e) {
            var t = this.isDisposed;
            if (!t) {
              var n = this.current;
              ((this.current = e), n && n.dispose());
            }
            t && e && e.dispose();
          }),
          (e.prototype.dispose = function () {
            if (!this.isDisposed) {
              this.isDisposed = !0;
              var e = this.current;
              ((this.current = void 0), e && e.dispose());
            }
          }),
          e
        );
      })();
      Rt.SerialDisposable = r;
    }
    var kt = !1;
    function It() {
      return (kt || ((kt = !0), Et()), Lt.exports);
    }
    var Tt = {},
      Dt = { exports: Tt };
    function xt() {
      var t =
          (this && this.__extends) ||
          (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              e(t, n);
              function r() {
                this.constructor = t;
              }
              t.prototype =
                n === null
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r());
            };
          })(),
        n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        r =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(Tt, "__esModule", { value: !0 });
      var a = r(e()),
        i = o(u()),
        l = o(s()),
        d = o(c()),
        m = Cn();
      ht();
      var p = It(),
        _ = St();
      function f(e) {
        var r = e.DecoratedComponent,
          o = e.createHandler,
          s = e.createMonitor,
          u = e.createConnector,
          c = e.registerHandler,
          f = e.containerDisplayName,
          g = e.getType,
          h = e.collect,
          y = e.options,
          C = y.arePropsEqual,
          b = C === void 0 ? i.default : C,
          v = r,
          S = r.displayName || r.name || "Component",
          R = (function (e) {
            t(d, e);
            function d(t) {
              var n = e.call(this, t) || this;
              return (
                (n.decoratedRef = a.createRef()),
                (n.handleChange = function () {
                  var e = n.getCurrentState();
                  i.default(e, n.state) || n.setState(e);
                }),
                (n.disposable = new p.SerialDisposable()),
                n.receiveProps(t),
                n.dispose(),
                n
              );
            }
            return (
              (d.prototype.getHandlerId = function () {
                return this.handlerId;
              }),
              (d.prototype.getDecoratedComponentInstance = function () {
                return (
                  l.default(
                    this.decoratedRef.current,
                    "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()",
                  ),
                  this.decoratedRef.current
                );
              }),
              (d.prototype.shouldComponentUpdate = function (e, t) {
                return !b(e, this.props) || !i.default(t, this.state);
              }),
              (d.prototype.componentDidMount = function () {
                ((this.disposable = new p.SerialDisposable()),
                  (this.currentType = void 0),
                  this.receiveProps(this.props),
                  this.handleChange());
              }),
              (d.prototype.componentDidUpdate = function (e) {
                b(this.props, e) ||
                  (this.receiveProps(this.props), this.handleChange());
              }),
              (d.prototype.componentWillUnmount = function () {
                this.dispose();
              }),
              (d.prototype.receiveProps = function (e) {
                this.handler &&
                  (this.handler.receiveProps(e), this.receiveType(g(e)));
              }),
              (d.prototype.receiveType = function (e) {
                if (
                  !(
                    !this.handlerMonitor ||
                    !this.manager ||
                    !this.handlerConnector
                  ) &&
                  e !== this.currentType
                ) {
                  this.currentType = e;
                  var t = c(e, this.handler, this.manager),
                    n = t[0],
                    r = t[1];
                  ((this.handlerId = n),
                    this.handlerMonitor.receiveHandlerId(n),
                    this.handlerConnector.receiveHandlerId(n));
                  var o = this.manager.getMonitor(),
                    a = o.subscribeToStateChange(this.handleChange, {
                      handlerIds: [n],
                    });
                  this.disposable.setDisposable(
                    new p.CompositeDisposable(
                      new p.Disposable(a),
                      new p.Disposable(r),
                    ),
                  );
                }
              }),
              (d.prototype.dispose = function () {
                (this.disposable.dispose(),
                  this.handlerConnector &&
                    this.handlerConnector.receiveHandlerId(null));
              }),
              (d.prototype.getCurrentState = function () {
                if (!this.handlerConnector) return {};
                var e = h(
                  this.handlerConnector.hooks,
                  this.handlerMonitor,
                  this.props,
                );
                return e;
              }),
              (d.prototype.render = function () {
                var e = this;
                return a.createElement(
                  m.DndContext.Consumer,
                  null,
                  function (t) {
                    var r = t.dragDropManager;
                    return (
                      e.receiveDragDropManager(r),
                      typeof requestAnimationFrame != "undefined" &&
                        requestAnimationFrame(function () {
                          return e.handlerConnector.reconnect();
                        }),
                      a.createElement(
                        v,
                        n({}, e.props, e.getCurrentState(), {
                          ref: _.isRefable(v) ? e.decoratedRef : null,
                        }),
                      )
                    );
                  },
                );
              }),
              (d.prototype.receiveDragDropManager = function (e) {
                this.manager === void 0 &&
                  (l.default(
                    e !== void 0,
                    "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                    S,
                    S,
                  ),
                  e !== void 0 &&
                    ((this.manager = e),
                    (this.handlerMonitor = s(e)),
                    (this.handlerConnector = u(e.getBackend())),
                    (this.handler = o(
                      this.handlerMonitor,
                      this.decoratedRef,
                    ))));
              }),
              (d.DecoratedComponent = r),
              (d.displayName = f + "(" + S + ")"),
              d
            );
          })(a.Component);
        return d.default(R, r);
      }
      Tt.default = f;
    }
    var $t = !1;
    function Pt() {
      return ($t || (($t = !0), xt()), Dt.exports);
    }
    var Nt = {},
      Mt = { exports: Nt };
    function wt() {
      Object.defineProperty(Nt, "__esModule", { value: !0 });
      function e(t, n) {
        return (
          typeof t == "string" ||
          typeof t == "symbol" ||
          (!!n &&
            Array.isArray(t) &&
            t.every(function (t) {
              return e(t, !1);
            }))
        );
      }
      Nt.isValidType = e;
    }
    var At = !1;
    function Ft() {
      return (At || ((At = !0), wt()), Mt.exports);
    }
    var Ot = {},
      Bt = { exports: Ot };
    function Wt() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Ot, "__esModule", { value: !0 });
      var t = e(s());
      ht();
      var n = St(),
        r = ["canDrag", "beginDrag", "isDragging", "endDrag"],
        o = ["beginDrag"],
        a = (function () {
          function e(e, t, n) {
            var r = this;
            ((this.props = null),
              (this.beginDrag = function () {
                if (r.props) {
                  var e = r.spec.beginDrag(r.props, r.monitor, r.ref.current);
                  return e;
                }
              }),
              (this.spec = e),
              (this.monitor = t),
              (this.ref = n));
          }
          return (
            (e.prototype.receiveProps = function (e) {
              this.props = e;
            }),
            (e.prototype.canDrag = function () {
              return this.props
                ? this.spec.canDrag
                  ? this.spec.canDrag(this.props, this.monitor)
                  : !0
                : !1;
            }),
            (e.prototype.isDragging = function (e, t) {
              return this.props
                ? this.spec.isDragging
                  ? this.spec.isDragging(this.props, this.monitor)
                  : t === e.getSourceId()
                : !1;
            }),
            (e.prototype.endDrag = function () {
              this.props &&
                this.spec.endDrag &&
                this.spec.endDrag(
                  this.props,
                  this.monitor,
                  n.getDecoratedComponent(this.ref),
                );
            }),
            e
          );
        })();
      function i(e) {
        return (
          Object.keys(e).forEach(function (n) {
            (t.default(
              r.indexOf(n) > -1,
              'Expected the drag source specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
              r.join(", "),
              n,
            ),
              t.default(
                typeof e[n] == "function",
                "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
                n,
                n,
                e[n],
              ));
          }),
          o.forEach(function (n) {
            t.default(
              typeof e[n] == "function",
              "Expected %s in the drag source specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source",
              n,
              n,
              e[n],
            );
          }),
          function (n, r) {
            return new a(e, n, r);
          }
        );
      }
      Ot.default = i;
    }
    var qt = !1;
    function Ut() {
      return (qt || ((qt = !0), Wt()), Bt.exports);
    }
    var Vt = {},
      Ht = { exports: Vt };
    function Gt() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Vt, "__esModule", { value: !0 });
      var t = e(s()),
        n = ht(),
        r = St(),
        o = e(Pt()),
        a = X(),
        i = ie(),
        l = ke(),
        u = Ft(),
        c = e(Ut());
      function d(e, s, d, m) {
        (m === void 0 && (m = {}),
          r.checkDecoratorArguments(
            "DragSource",
            "type, spec, collect[, options]",
            e,
            s,
            d,
            m,
          ));
        var p = e;
        (typeof e != "function" &&
          (t.default(
            u.isValidType(e),
            'Expected "type" provided as the first argument to DragSource to be a string, or a function that returns a string given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            e,
          ),
          (p = function () {
            return e;
          })),
          t.default(
            n.isPlainObject(s),
            'Expected "spec" provided as the second argument to DragSource to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            s,
          ));
        var _ = c.default(s);
        return (
          t.default(
            typeof d == "function",
            'Expected "collect" provided as the third argument to DragSource to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            d,
          ),
          t.default(
            n.isPlainObject(m),
            'Expected "options" provided as the fourth argument to DragSource to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source',
            d,
          ),
          function (t) {
            return o.default({
              containerDisplayName: "DragSource",
              createHandler: _,
              registerHandler: a.registerSource,
              createConnector: function (e) {
                return new l.SourceConnector(e);
              },
              createMonitor: function (e) {
                return new i.DragSourceMonitorImpl(e);
              },
              DecoratedComponent: t,
              getType: p,
              collect: d,
              options: m,
            });
          }
        );
      }
      Vt.DragSource = d;
    }
    var zt = !1;
    function jt() {
      return (zt || ((zt = !0), Gt()), Ht.exports);
    }
    var Kt = {},
      Qt = { exports: Kt };
    function Xt() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Kt, "__esModule", { value: !0 });
      var t = e(s());
      ht();
      var n = St(),
        r = ["canDrop", "hover", "drop"],
        o = (function () {
          function e(e, t, n) {
            ((this.props = null),
              (this.spec = e),
              (this.monitor = t),
              (this.ref = n));
          }
          return (
            (e.prototype.receiveProps = function (e) {
              this.props = e;
            }),
            (e.prototype.receiveMonitor = function (e) {
              this.monitor = e;
            }),
            (e.prototype.canDrop = function () {
              return this.spec.canDrop
                ? this.spec.canDrop(this.props, this.monitor)
                : !0;
            }),
            (e.prototype.hover = function () {
              this.spec.hover &&
                this.spec.hover(
                  this.props,
                  this.monitor,
                  n.getDecoratedComponent(this.ref),
                );
            }),
            (e.prototype.drop = function () {
              if (this.spec.drop) {
                var e = this.spec.drop(
                  this.props,
                  this.monitor,
                  this.ref.current,
                );
                return e;
              }
            }),
            e
          );
        })();
      function a(e) {
        return (
          Object.keys(e).forEach(function (n) {
            (t.default(
              r.indexOf(n) > -1,
              'Expected the drop target specification to only have some of the following keys: %s. Instead received a specification with an unexpected "%s" key. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
              r.join(", "),
              n,
            ),
              t.default(
                typeof e[n] == "function",
                "Expected %s in the drop target specification to be a function. Instead received a specification with %s: %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target",
                n,
                n,
                e[n],
              ));
          }),
          function (n, r) {
            return new o(e, n, r);
          }
        );
      }
      Kt.default = a;
    }
    var Yt = !1;
    function Jt() {
      return (Yt || ((Yt = !0), Xt()), Qt.exports);
    }
    var Zt = {},
      en = { exports: Zt };
    function tn() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(Zt, "__esModule", { value: !0 });
      var t = e(s()),
        n = ht(),
        r = X(),
        o = Ft(),
        a = qe(),
        i = ze(),
        l = St(),
        u = e(Pt()),
        c = e(Jt());
      function d(e, s, d, m) {
        (m === void 0 && (m = {}),
          l.checkDecoratorArguments(
            "DropTarget",
            "type, spec, collect[, options]",
            e,
            s,
            d,
            m,
          ));
        var p = e;
        (typeof e != "function" &&
          (t.default(
            o.isValidType(e, !0),
            'Expected "type" provided as the first argument to DropTarget to be a string, an array of strings, or a function that returns either given the current props. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            e,
          ),
          (p = function () {
            return e;
          })),
          t.default(
            n.isPlainObject(s),
            'Expected "spec" provided as the second argument to DropTarget to be a plain object. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            s,
          ));
        var _ = c.default(s);
        return (
          t.default(
            typeof d == "function",
            'Expected "collect" provided as the third argument to DropTarget to be a function that returns a plain object of props to inject. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            d,
          ),
          t.default(
            n.isPlainObject(m),
            'Expected "options" provided as the fourth argument to DropTarget to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target',
            d,
          ),
          function (t) {
            return u.default({
              containerDisplayName: "DropTarget",
              createHandler: _,
              registerHandler: r.registerTarget,
              createMonitor: function (e) {
                return new i.DropTargetMonitorImpl(e);
              },
              createConnector: function (e) {
                return new a.TargetConnector(e);
              },
              DecoratedComponent: t,
              getType: p,
              collect: d,
              options: m,
            });
          }
        );
      }
      Zt.DropTarget = d;
    }
    var nn = !1;
    function rn() {
      return (nn || ((nn = !0), tn()), en.exports);
    }
    var on = {},
      an = { exports: on };
    function ln() {
      var t =
          (this && this.__extends) ||
          (function () {
            var e = function (t, n) {
              return (
                (e =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                      e.__proto__ = t;
                    }) ||
                  function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                  }),
                e(t, n)
              );
            };
            return function (t, n) {
              e(t, n);
              function r() {
                this.constructor = t;
              }
              t.prototype =
                n === null
                  ? Object.create(n)
                  : ((r.prototype = n.prototype), new r());
            };
          })(),
        n =
          (this && this.__assign) ||
          function () {
            return (
              (n =
                Object.assign ||
                function (e) {
                  for (var t, n = 1, r = arguments.length; n < r; n++) {
                    t = arguments[n];
                    for (var o in t)
                      Object.prototype.hasOwnProperty.call(t, o) &&
                        (e[o] = t[o]);
                  }
                  return e;
                }),
              n.apply(this, arguments)
            );
          },
        r =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          },
        o =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(on, "__esModule", { value: !0 });
      var a = r(e()),
        i = o(u()),
        l = o(c()),
        d = o(s()),
        m = Cn(),
        p = ht(),
        _ = St();
      function f(e, r) {
        return (
          r === void 0 && (r = {}),
          _.checkDecoratorArguments("DragLayer", "collect[, options]", e, r),
          d.default(
            typeof e == "function",
            'Expected "collect" provided as the first argument to DragLayer to be a function that collects props to inject into the component. ',
            "Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer",
            e,
          ),
          d.default(
            p.isPlainObject(r),
            'Expected "options" provided as the second argument to DragLayer to be a plain object when specified. Instead, received %s. Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-layer',
            r,
          ),
          function (s) {
            var o = s,
              u = r.arePropsEqual,
              c = u === void 0 ? i.default : u,
              p = o.displayName || o.name || "Component",
              f = (function (r) {
                t(l, r);
                function l() {
                  var e = (r !== null && r.apply(this, arguments)) || this;
                  return (
                    (e.isCurrentlyMounted = !1),
                    (e.ref = a.createRef()),
                    (e.handleChange = function () {
                      if (e.isCurrentlyMounted) {
                        var t = e.getCurrentState();
                        i.default(t, e.state) || e.setState(t);
                      }
                    }),
                    e
                  );
                }
                return (
                  (l.prototype.getDecoratedComponentInstance = function () {
                    return (
                      d.default(
                        this.ref.current,
                        "In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()",
                      ),
                      this.ref.current
                    );
                  }),
                  (l.prototype.shouldComponentUpdate = function (e, t) {
                    return !c(e, this.props) || !i.default(t, this.state);
                  }),
                  (l.prototype.componentDidMount = function () {
                    ((this.isCurrentlyMounted = !0), this.handleChange());
                  }),
                  (l.prototype.componentWillUnmount = function () {
                    ((this.isCurrentlyMounted = !1),
                      this.unsubscribeFromOffsetChange &&
                        (this.unsubscribeFromOffsetChange(),
                        (this.unsubscribeFromOffsetChange = void 0)),
                      this.unsubscribeFromStateChange &&
                        (this.unsubscribeFromStateChange(),
                        (this.unsubscribeFromStateChange = void 0)));
                  }),
                  (l.prototype.render = function () {
                    var e = this;
                    return a.createElement(
                      m.DndContext.Consumer,
                      null,
                      function (t) {
                        var r = t.dragDropManager;
                        return r === void 0 ||
                          (e.receiveDragDropManager(r), !e.isCurrentlyMounted)
                          ? null
                          : a.createElement(
                              o,
                              n({}, e.props, e.state, {
                                ref: _.isRefable(o) ? e.ref : null,
                              }),
                            );
                      },
                    );
                  }),
                  (l.prototype.receiveDragDropManager = function (e) {
                    if (this.manager === void 0) {
                      ((this.manager = e),
                        d.default(
                          typeof e == "object",
                          "Could not find the drag and drop manager in the context of %s. Make sure to render a DndProvider component in your top-level component. Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context",
                          p,
                          p,
                        ));
                      var t = this.manager.getMonitor();
                      ((this.unsubscribeFromOffsetChange =
                        t.subscribeToOffsetChange(this.handleChange)),
                        (this.unsubscribeFromStateChange =
                          t.subscribeToStateChange(this.handleChange)));
                    }
                  }),
                  (l.prototype.getCurrentState = function () {
                    if (!this.manager) return {};
                    var t = this.manager.getMonitor();
                    return e(t, this.props);
                  }),
                  (l.displayName = "DragLayer(" + p + ")"),
                  (l.DecoratedComponent = s),
                  l
                );
              })(a.Component);
            return l.default(f, s);
          }
        );
      }
      on.DragLayer = f;
    }
    var sn = !1;
    function un() {
      return (sn || ((sn = !0), ln()), an.exports);
    }
    var cn = {},
      dn = { exports: cn };
    function mn() {
      function e(e) {
        for (var t in e) cn.hasOwnProperty(t) || (cn[t] = e[t]);
      }
      (Object.defineProperty(cn, "__esModule", { value: !0 }),
        e(jt()),
        e(rn()),
        e(un()));
    }
    var pn = !1;
    function _n() {
      return (pn || ((pn = !0), mn()), dn.exports);
    }
    var fn = {},
      gn = { exports: fn };
    function hn() {
      function e(e) {
        for (var t in e) fn.hasOwnProperty(t) || (fn[t] = e[t]);
      }
      (Object.defineProperty(fn, "__esModule", { value: !0 }),
        e(x()),
        e(mt()),
        e(_n()));
    }
    var yn = !1;
    function Cn() {
      return (yn || ((yn = !0), hn()), gn.exports);
    }
    function bn(e) {
      switch (e) {
        case void 0:
          return Cn();
      }
    }
    a.exports = bn;
  },
  null,
);
