__d(
  "react-dnd-html5-backend-cjs-9.4.0",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {},
      l = { exports: e };
    function s() {
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(e) {
        var t = null,
          n = function () {
            return (t == null && (t = e()), t);
          };
        return n;
      }
      e.memoize = t;
      function n(e, t) {
        return e.filter(function (e) {
          return e !== t;
        });
      }
      e.without = n;
      function r(e, t) {
        var n = new Set(),
          r = function (e) {
            return n.add(e);
          };
        (e.forEach(r), t.forEach(r));
        var o = [];
        return (
          n.forEach(function (e) {
            return o.push(e);
          }),
          o
        );
      }
      e.union = r;
    }
    var u = !1;
    function c() {
      return (u || ((u = !0), s()), l.exports);
    }
    var d = {},
      m = { exports: d };
    function p() {
      Object.defineProperty(d, "__esModule", { value: !0 });
      var e = c(),
        t = (function () {
          function t(e) {
            ((this.entered = []), (this.isNodeInDocument = e));
          }
          return (
            (t.prototype.enter = function (t) {
              var n = this,
                r = this.entered.length,
                o = function (e) {
                  return (
                    n.isNodeInDocument(e) && (!e.contains || e.contains(t))
                  );
                };
              return (
                (this.entered = e.union(this.entered.filter(o), [t])),
                r === 0 && this.entered.length > 0
              );
            }),
            (t.prototype.leave = function (t) {
              var n = this.entered.length;
              return (
                (this.entered = e.without(
                  this.entered.filter(this.isNodeInDocument),
                  t,
                )),
                n > 0 && this.entered.length === 0
              );
            }),
            (t.prototype.reset = function () {
              this.entered = [];
            }),
            t
          );
        })();
      d.default = t;
    }
    var _ = !1;
    function f() {
      return (_ || ((_ = !0), p()), m.exports);
    }
    var g = {},
      h = { exports: g };
    function y() {
      Object.defineProperty(g, "__esModule", { value: !0 });
      var e = c();
      ((g.isFirefox = e.memoize(function () {
        return /firefox/i.test(navigator.userAgent);
      })),
        (g.isSafari = e.memoize(function () {
          return !!window.safari;
        })));
    }
    var C = !1;
    function b() {
      return (C || ((C = !0), y()), h.exports);
    }
    var v = {},
      S = { exports: v };
    function R() {
      Object.defineProperty(v, "__esModule", { value: !0 });
      var e = (function () {
        function e(e, t) {
          for (var n = e.length, r = [], o = 0; o < n; o++) r.push(o);
          r.sort(function (t, n) {
            return e[t] < e[n] ? -1 : 1;
          });
          for (var a = [], i = [], l, s, o = 0; o < n - 1; o++)
            ((l = e[o + 1] - e[o]),
              (s = t[o + 1] - t[o]),
              a.push(l),
              i.push(s / l));
          for (var u = [i[0]], o = 0; o < a.length - 1; o++) {
            var c = i[o],
              d = i[o + 1];
            if (c * d <= 0) u.push(0);
            else {
              l = a[o];
              var m = a[o + 1],
                p = l + m;
              u.push((3 * p) / ((p + m) / c + (p + l) / d));
            }
          }
          u.push(i[i.length - 1]);
          for (var _ = [], f = [], g, o = 0; o < u.length - 1; o++) {
            g = i[o];
            var h = u[o],
              y = 1 / a[o],
              p = h + u[o + 1] - g - g;
            (_.push((g - h - p) * y), f.push(p * y * y));
          }
          ((this.xs = e),
            (this.ys = t),
            (this.c1s = u),
            (this.c2s = _),
            (this.c3s = f));
        }
        return (
          (e.prototype.interpolate = function (e) {
            var t = this,
              n = t.xs,
              r = t.ys,
              o = t.c1s,
              a = t.c2s,
              i = t.c3s,
              l = n.length - 1;
            if (e === n[l]) return r[l];
            for (var s = 0, u = i.length - 1, c; s <= u; ) {
              c = Math.floor(0.5 * (s + u));
              var d = n[c];
              if (d < e) s = c + 1;
              else if (d > e) u = c - 1;
              else return r[c];
            }
            l = Math.max(0, u);
            var m = e - n[l],
              p = m * m;
            return r[l] + o[l] * m + a[l] * p + i[l] * m * p;
          }),
          e
        );
      })();
      v.default = e;
    }
    var L = !1;
    function E() {
      return (L || ((L = !0), R()), S.exports);
    }
    var k = {},
      I = { exports: k };
    function T() {
      var e =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(k, "__esModule", { value: !0 });
      var t = b(),
        n = e(E()),
        r = 1;
      function o(e) {
        var t = e.nodeType === r ? e : e.parentElement;
        if (!t) return null;
        var n = t.getBoundingClientRect(),
          o = n.top,
          a = n.left;
        return { x: a, y: o };
      }
      k.getNodeClientOffset = o;
      function a(e) {
        return { x: e.clientX, y: e.clientY };
      }
      k.getEventClientOffset = a;
      function i(e) {
        return (
          e.nodeName === "IMG" &&
          (t.isFirefox() || !document.documentElement.contains(e))
        );
      }
      function l(e, n, r, o) {
        var a = e ? n.width : r,
          i = e ? n.height : o;
        return (
          t.isSafari() &&
            e &&
            ((i /= window.devicePixelRatio), (a /= window.devicePixelRatio)),
          { dragPreviewWidth: a, dragPreviewHeight: i }
        );
      }
      function s(e, r, a, s, u) {
        var c = i(r),
          d = c ? e : r,
          m = o(d),
          p = { x: a.x - m.x, y: a.y - m.y },
          _ = e.offsetWidth,
          f = e.offsetHeight,
          g = s.anchorX,
          h = s.anchorY,
          y = l(c, r, _, f),
          C = y.dragPreviewWidth,
          b = y.dragPreviewHeight,
          v = function () {
            var e = new n.default(
                [0, 0.5, 1],
                [p.y, (p.y / f) * b, p.y + b - f],
              ),
              r = e.interpolate(h);
            return (
              t.isSafari() && c && (r += (window.devicePixelRatio - 1) * b),
              r
            );
          },
          S = function () {
            var e = new n.default(
              [0, 0.5, 1],
              [p.x, (p.x / _) * C, p.x + C - _],
            );
            return e.interpolate(g);
          },
          R = u.offsetX,
          L = u.offsetY,
          E = R === 0 || R,
          k = L === 0 || L;
        return { x: E ? R : S(), y: k ? L : v() };
      }
      k.getDragPreviewOffset = s;
    }
    var D = !1;
    function x() {
      return (D || ((D = !0), T()), I.exports);
    }
    var $ = {},
      P = { exports: $ };
    function N() {
      (Object.defineProperty($, "__esModule", { value: !0 }),
        ($.FILE = "__NATIVE_FILE__"),
        ($.URL = "__NATIVE_URL__"),
        ($.TEXT = "__NATIVE_TEXT__"));
    }
    var M = !1;
    function w() {
      return (M || ((M = !0), N()), P.exports);
    }
    var A = {},
      F = { exports: A };
    function O() {
      Object.defineProperty(A, "__esModule", { value: !0 });
      function e(e, t, n) {
        var r = t.reduce(function (t, n) {
          return t || e.getData(n);
        }, "");
        return r != null ? r : n;
      }
      A.getDataFromDataTransfer = e;
    }
    var B = !1;
    function W() {
      return (B || ((B = !0), O()), F.exports);
    }
    var q = {},
      U = { exports: q };
    function V() {
      var e =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          },
        t;
      Object.defineProperty(q, "__esModule", { value: !0 });
      var n = e(w()),
        r = W();
      q.nativeTypesConfig =
        ((t = {}),
        (t[n.FILE] = {
          exposeProperties: {
            files: function (e) {
              return Array.prototype.slice.call(e.files);
            },
            items: function (e) {
              return e.items;
            },
          },
          matchesTypes: ["Files"],
        }),
        (t[n.URL] = {
          exposeProperties: {
            urls: function (e, t) {
              return r.getDataFromDataTransfer(e, t, "").split("\n");
            },
          },
          matchesTypes: ["Url", "text/uri-list"],
        }),
        (t[n.TEXT] = {
          exposeProperties: {
            text: function (e, t) {
              return r.getDataFromDataTransfer(e, t, "");
            },
          },
          matchesTypes: ["Text", "text/plain"],
        }),
        t);
    }
    var H = !1;
    function G() {
      return (H || ((H = !0), V()), U.exports);
    }
    var z = {},
      j = { exports: z };
    function K() {
      Object.defineProperty(z, "__esModule", { value: !0 });
      var e = (function () {
        function e(e) {
          var t = this;
          ((this.config = e),
            (this.item = {}),
            Object.keys(this.config.exposeProperties).forEach(function (e) {
              Object.defineProperty(t.item, e, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return ("" + e, null);
                },
              });
            }));
        }
        return (
          (e.prototype.mutateItemByReadingDataTransfer = function (e) {
            var t = this,
              n = {};
            (e &&
              Object.keys(this.config.exposeProperties).forEach(function (r) {
                n[r] = {
                  value: t.config.exposeProperties[r](e, t.config.matchesTypes),
                };
              }),
              Object.defineProperties(this.item, n));
          }),
          (e.prototype.canDrag = function () {
            return !0;
          }),
          (e.prototype.beginDrag = function () {
            return this.item;
          }),
          (e.prototype.isDragging = function (e, t) {
            return t === e.getSourceId();
          }),
          (e.prototype.endDrag = function () {}),
          e
        );
      })();
      z.NativeDragSource = e;
    }
    var Q = !1;
    function X() {
      return (Q || ((Q = !0), K()), j.exports);
    }
    var Y = {},
      J = { exports: Y };
    function Z() {
      Object.defineProperty(Y, "__esModule", { value: !0 });
      var e = G(),
        t = X();
      function n(n) {
        return new t.NativeDragSource(e.nativeTypesConfig[n]);
      }
      Y.createNativeDragSource = n;
      function r(t) {
        if (!t) return null;
        var n = Array.prototype.slice.call(t.types || []);
        return (
          Object.keys(e.nativeTypesConfig).filter(function (t) {
            var r = e.nativeTypesConfig[t].matchesTypes;
            return r.some(function (e) {
              return n.indexOf(e) > -1;
            });
          })[0] || null
        );
      }
      Y.matchNativeItemType = r;
    }
    var ee = !1;
    function te() {
      return (ee || ((ee = !0), Z()), J.exports);
    }
    var ne = {},
      re = { exports: ne };
    function oe() {
      Object.defineProperty(ne, "__esModule", { value: !0 });
      var e = (function () {
        function e(e) {
          this.globalContext = e;
        }
        return (
          Object.defineProperty(e.prototype, "window", {
            get: function () {
              if (this.globalContext) return this.globalContext;
              if (typeof window != "undefined") return window;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "document", {
            get: function () {
              if (this.window) return this.window.document;
            },
            enumerable: !0,
            configurable: !0,
          }),
          e
        );
      })();
      ne.OptionsReader = e;
    }
    var ae = !1;
    function ie() {
      return (ae || ((ae = !0), oe()), re.exports);
    }
    var le = {},
      se = { exports: le };
    function ue() {
      var e =
          (this && this.__assign) ||
          function () {
            return (
              (e =
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
              e.apply(this, arguments)
            );
          },
        t =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          },
        n =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          };
      Object.defineProperty(le, "__esModule", { value: !0 });
      var r = t(f()),
        o = b(),
        a = x(),
        i = te(),
        l = n(w()),
        s = ie(),
        u = (function () {
          function t(e, t) {
            var n = this;
            ((this.sourcePreviewNodes = new Map()),
              (this.sourcePreviewNodeOptions = new Map()),
              (this.sourceNodes = new Map()),
              (this.sourceNodeOptions = new Map()),
              (this.dragStartSourceIds = null),
              (this.dropTargetIds = []),
              (this.dragEnterTargetIds = []),
              (this.currentNativeSource = null),
              (this.currentNativeHandle = null),
              (this.currentDragSourceNode = null),
              (this.altKeyPressed = !1),
              (this.mouseMoveTimeoutTimer = null),
              (this.asyncEndDragFrameId = null),
              (this.dragOverTargetIds = null),
              (this.getSourceClientOffset = function (e) {
                return a.getNodeClientOffset(n.sourceNodes.get(e));
              }),
              (this.endDragNativeItem = function () {
                n.isDraggingNativeItem() &&
                  (n.actions.endDrag(),
                  n.registry.removeSource(n.currentNativeHandle),
                  (n.currentNativeHandle = null),
                  (n.currentNativeSource = null));
              }),
              (this.isNodeInDocument = function (e) {
                return (
                  n.document && n.document.body && document.body.contains(e)
                );
              }),
              (this.endDragIfSourceWasRemovedFromDOM = function () {
                var e = n.currentDragSourceNode;
                n.isNodeInDocument(e) ||
                  (n.clearCurrentDragSourceNode() && n.actions.endDrag());
              }),
              (this.handleTopDragStartCapture = function () {
                (n.clearCurrentDragSourceNode(), (n.dragStartSourceIds = []));
              }),
              (this.handleTopDragStart = function (e) {
                if (!e.defaultPrevented) {
                  var t = n.dragStartSourceIds;
                  n.dragStartSourceIds = null;
                  var r = a.getEventClientOffset(e);
                  (n.monitor.isDragging() && n.actions.endDrag(),
                    n.actions.beginDrag(t || [], {
                      publishSource: !1,
                      getSourceClientOffset: n.getSourceClientOffset,
                      clientOffset: r,
                    }));
                  var o = e.dataTransfer,
                    l = i.matchNativeItemType(o);
                  if (n.monitor.isDragging()) {
                    if (o && typeof o.setDragImage == "function") {
                      var s = n.monitor.getSourceId(),
                        u = n.sourceNodes.get(s),
                        c = n.sourcePreviewNodes.get(s) || u;
                      if (c) {
                        var d = n.getCurrentSourcePreviewNodeOptions(),
                          m = d.anchorX,
                          p = d.anchorY,
                          _ = d.offsetX,
                          f = d.offsetY,
                          g = { anchorX: m, anchorY: p },
                          h = { offsetX: _, offsetY: f },
                          y = a.getDragPreviewOffset(u, c, r, g, h);
                        o.setDragImage(c, y.x, y.y);
                      }
                    }
                    try {
                      o.setData("application/json", {});
                    } catch (e) {}
                    n.setCurrentDragSourceNode(e.target);
                    var C =
                      n.getCurrentSourcePreviewNodeOptions()
                        .captureDraggingState;
                    C
                      ? n.actions.publishDragSource()
                      : setTimeout(function () {
                          return n.actions.publishDragSource();
                        }, 0);
                  } else if (l) n.beginDragNativeItem(l);
                  else {
                    if (
                      o &&
                      !o.types &&
                      ((e.target && !e.target.hasAttribute) ||
                        !e.target.hasAttribute("draggable"))
                    )
                      return;
                    e.preventDefault();
                  }
                }
              }),
              (this.handleTopDragEndCapture = function () {
                n.clearCurrentDragSourceNode() && n.actions.endDrag();
              }),
              (this.handleTopDragEnterCapture = function (e) {
                n.dragEnterTargetIds = [];
                var t = n.enterLeaveCounter.enter(e.target);
                if (!(!t || n.monitor.isDragging())) {
                  var r = e.dataTransfer,
                    o = i.matchNativeItemType(r);
                  o && n.beginDragNativeItem(o);
                }
              }),
              (this.handleTopDragEnter = function (e) {
                var t = n.dragEnterTargetIds;
                if (((n.dragEnterTargetIds = []), !!n.monitor.isDragging())) {
                  ((n.altKeyPressed = e.altKey),
                    o.isFirefox() ||
                      n.actions.hover(t, {
                        clientOffset: a.getEventClientOffset(e),
                      }));
                  var r = t.some(function (e) {
                    return n.monitor.canDropOnTarget(e);
                  });
                  r &&
                    (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = n.getCurrentDropEffect()));
                }
              }),
              (this.handleTopDragOverCapture = function () {
                n.dragOverTargetIds = [];
              }),
              (this.handleTopDragOver = function (e) {
                var t = n.dragOverTargetIds;
                if (((n.dragOverTargetIds = []), !n.monitor.isDragging())) {
                  (e.preventDefault(),
                    e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
                  return;
                }
                ((n.altKeyPressed = e.altKey),
                  n.actions.hover(t || [], {
                    clientOffset: a.getEventClientOffset(e),
                  }));
                var r = (t || []).some(function (e) {
                  return n.monitor.canDropOnTarget(e);
                });
                r
                  ? (e.preventDefault(),
                    e.dataTransfer &&
                      (e.dataTransfer.dropEffect = n.getCurrentDropEffect()))
                  : n.isDraggingNativeItem()
                    ? e.preventDefault()
                    : (e.preventDefault(),
                      e.dataTransfer && (e.dataTransfer.dropEffect = "none"));
              }),
              (this.handleTopDragLeaveCapture = function (e) {
                n.isDraggingNativeItem() && e.preventDefault();
                var t = n.enterLeaveCounter.leave(e.target);
                t && n.isDraggingNativeItem() && n.endDragNativeItem();
              }),
              (this.handleTopDropCapture = function (e) {
                ((n.dropTargetIds = []),
                  e.preventDefault(),
                  n.isDraggingNativeItem() &&
                    n.currentNativeSource.mutateItemByReadingDataTransfer(
                      e.dataTransfer,
                    ),
                  n.enterLeaveCounter.reset());
              }),
              (this.handleTopDrop = function (e) {
                var t = n.dropTargetIds;
                ((n.dropTargetIds = []),
                  n.actions.hover(t, {
                    clientOffset: a.getEventClientOffset(e),
                  }),
                  n.actions.drop({ dropEffect: n.getCurrentDropEffect() }),
                  n.isDraggingNativeItem()
                    ? n.endDragNativeItem()
                    : n.endDragIfSourceWasRemovedFromDOM());
              }),
              (this.handleSelectStart = function (e) {
                var t = e.target;
                typeof t.dragDrop == "function" &&
                  (t.tagName === "INPUT" ||
                    t.tagName === "SELECT" ||
                    t.tagName === "TEXTAREA" ||
                    t.isContentEditable ||
                    (e.preventDefault(), t.dragDrop()));
              }),
              (this.options = new s.OptionsReader(t)),
              (this.actions = e.getActions()),
              (this.monitor = e.getMonitor()),
              (this.registry = e.getRegistry()),
              (this.enterLeaveCounter = new r.default(this.isNodeInDocument)));
          }
          return (
            Object.defineProperty(t.prototype, "window", {
              get: function () {
                return this.options.window;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "document", {
              get: function () {
                return this.options.document;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.setup = function () {
              if (this.window !== void 0) {
                if (this.window.__isReactDndBackendSetUp)
                  throw new Error(
                    "Cannot have two HTML5 backends at the same time.",
                  );
                ((this.window.__isReactDndBackendSetUp = !0),
                  this.addEventListeners(this.window));
              }
            }),
            (t.prototype.teardown = function () {
              this.window !== void 0 &&
                ((this.window.__isReactDndBackendSetUp = !1),
                this.removeEventListeners(this.window),
                this.clearCurrentDragSourceNode(),
                this.asyncEndDragFrameId &&
                  this.window.cancelAnimationFrame(this.asyncEndDragFrameId));
            }),
            (t.prototype.connectDragPreview = function (e, t, n) {
              var r = this;
              return (
                this.sourcePreviewNodeOptions.set(e, n),
                this.sourcePreviewNodes.set(e, t),
                function () {
                  (r.sourcePreviewNodes.delete(e),
                    r.sourcePreviewNodeOptions.delete(e));
                }
              );
            }),
            (t.prototype.connectDragSource = function (e, t, n) {
              var r = this;
              (this.sourceNodes.set(e, t), this.sourceNodeOptions.set(e, n));
              var o = function (t) {
                  return r.handleDragStart(t, e);
                },
                a = function (e) {
                  return r.handleSelectStart(e);
                };
              return (
                t.setAttribute("draggable", "true"),
                t.addEventListener("dragstart", o),
                t.addEventListener("selectstart", a),
                function () {
                  (r.sourceNodes.delete(e),
                    r.sourceNodeOptions.delete(e),
                    t.removeEventListener("dragstart", o),
                    t.removeEventListener("selectstart", a),
                    t.setAttribute("draggable", "false"));
                }
              );
            }),
            (t.prototype.connectDropTarget = function (e, t) {
              var n = this,
                r = function (t) {
                  return n.handleDragEnter(t, e);
                },
                o = function (t) {
                  return n.handleDragOver(t, e);
                },
                a = function (t) {
                  return n.handleDrop(t, e);
                };
              return (
                t.addEventListener("dragenter", r),
                t.addEventListener("dragover", o),
                t.addEventListener("drop", a),
                function () {
                  (t.removeEventListener("dragenter", r),
                    t.removeEventListener("dragover", o),
                    t.removeEventListener("drop", a));
                }
              );
            }),
            (t.prototype.addEventListeners = function (e) {
              e.addEventListener &&
                (e.addEventListener("dragstart", this.handleTopDragStart),
                e.addEventListener(
                  "dragstart",
                  this.handleTopDragStartCapture,
                  !0,
                ),
                e.addEventListener("dragend", this.handleTopDragEndCapture, !0),
                e.addEventListener("dragenter", this.handleTopDragEnter),
                e.addEventListener(
                  "dragenter",
                  this.handleTopDragEnterCapture,
                  !0,
                ),
                e.addEventListener(
                  "dragleave",
                  this.handleTopDragLeaveCapture,
                  !0,
                ),
                e.addEventListener("dragover", this.handleTopDragOver),
                e.addEventListener(
                  "dragover",
                  this.handleTopDragOverCapture,
                  !0,
                ),
                e.addEventListener("drop", this.handleTopDrop),
                e.addEventListener("drop", this.handleTopDropCapture, !0));
            }),
            (t.prototype.removeEventListeners = function (e) {
              e.removeEventListener &&
                (e.removeEventListener("dragstart", this.handleTopDragStart),
                e.removeEventListener(
                  "dragstart",
                  this.handleTopDragStartCapture,
                  !0,
                ),
                e.removeEventListener(
                  "dragend",
                  this.handleTopDragEndCapture,
                  !0,
                ),
                e.removeEventListener("dragenter", this.handleTopDragEnter),
                e.removeEventListener(
                  "dragenter",
                  this.handleTopDragEnterCapture,
                  !0,
                ),
                e.removeEventListener(
                  "dragleave",
                  this.handleTopDragLeaveCapture,
                  !0,
                ),
                e.removeEventListener("dragover", this.handleTopDragOver),
                e.removeEventListener(
                  "dragover",
                  this.handleTopDragOverCapture,
                  !0,
                ),
                e.removeEventListener("drop", this.handleTopDrop),
                e.removeEventListener("drop", this.handleTopDropCapture, !0));
            }),
            (t.prototype.getCurrentSourceNodeOptions = function () {
              var t = this.monitor.getSourceId(),
                n = this.sourceNodeOptions.get(t);
              return e(
                { dropEffect: this.altKeyPressed ? "copy" : "move" },
                n || {},
              );
            }),
            (t.prototype.getCurrentDropEffect = function () {
              return this.isDraggingNativeItem()
                ? "copy"
                : this.getCurrentSourceNodeOptions().dropEffect;
            }),
            (t.prototype.getCurrentSourcePreviewNodeOptions = function () {
              var t = this.monitor.getSourceId(),
                n = this.sourcePreviewNodeOptions.get(t);
              return e(
                { anchorX: 0.5, anchorY: 0.5, captureDraggingState: !1 },
                n || {},
              );
            }),
            (t.prototype.isDraggingNativeItem = function () {
              var e = this.monitor.getItemType();
              return Object.keys(l).some(function (t) {
                return l[t] === e;
              });
            }),
            (t.prototype.beginDragNativeItem = function (e) {
              (this.clearCurrentDragSourceNode(),
                (this.currentNativeSource = i.createNativeDragSource(e)),
                (this.currentNativeHandle = this.registry.addSource(
                  e,
                  this.currentNativeSource,
                )),
                this.actions.beginDrag([this.currentNativeHandle]));
            }),
            (t.prototype.setCurrentDragSourceNode = function (e) {
              var t = this;
              (this.clearCurrentDragSourceNode(),
                (this.currentDragSourceNode = e));
              var n = 1e3;
              this.mouseMoveTimeoutTimer = setTimeout(function () {
                return (
                  t.window &&
                  t.window.addEventListener(
                    "mousemove",
                    t.endDragIfSourceWasRemovedFromDOM,
                    !0,
                  )
                );
              }, n);
            }),
            (t.prototype.clearCurrentDragSourceNode = function () {
              return this.currentDragSourceNode
                ? ((this.currentDragSourceNode = null),
                  this.window &&
                    (this.window.clearTimeout(
                      this.mouseMoveTimeoutTimer || void 0,
                    ),
                    this.window.removeEventListener(
                      "mousemove",
                      this.endDragIfSourceWasRemovedFromDOM,
                      !0,
                    )),
                  (this.mouseMoveTimeoutTimer = null),
                  !0)
                : !1;
            }),
            (t.prototype.handleDragStart = function (e, t) {
              e.defaultPrevented ||
                (this.dragStartSourceIds || (this.dragStartSourceIds = []),
                this.dragStartSourceIds.unshift(t));
            }),
            (t.prototype.handleDragEnter = function (e, t) {
              this.dragEnterTargetIds.unshift(t);
            }),
            (t.prototype.handleDragOver = function (e, t) {
              (this.dragOverTargetIds === null && (this.dragOverTargetIds = []),
                this.dragOverTargetIds.unshift(t));
            }),
            (t.prototype.handleDrop = function (e, t) {
              this.dropTargetIds.unshift(t);
            }),
            t
          );
        })();
      le.default = u;
    }
    var ce = !1;
    function de() {
      return (ce || ((ce = !0), ue()), se.exports);
    }
    var me = {},
      pe = { exports: me };
    function _e() {
      Object.defineProperty(me, "__esModule", { value: !0 });
      var e;
      function t() {
        return (
          e ||
            ((e = new Image()),
            (e.src =
              "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")),
          e
        );
      }
      me.getEmptyImage = t;
    }
    var fe = !1;
    function ge() {
      return (fe || ((fe = !0), _e()), pe.exports);
    }
    var he = {},
      ye = { exports: he };
    function Ce() {
      var e =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          },
        t =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (e != null)
              for (var n in e)
                Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return ((t.default = e), t);
          };
      Object.defineProperty(he, "__esModule", { value: !0 });
      var n = e(de()),
        r = t(w());
      he.NativeTypes = r;
      var o = ge();
      he.getEmptyImage = o.getEmptyImage;
      var a = function (e, t) {
        return new n.default(e, t);
      };
      he.default = a;
    }
    var be = !1;
    function ve() {
      return (be || ((be = !0), Ce()), ye.exports);
    }
    function Se(e) {
      switch (e) {
        case void 0:
          return ve();
      }
    }
    a.exports = Se;
  },
  null,
);
