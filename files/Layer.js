__d(
  "Layer",
  [
    "invariant",
    "ArbiterMixin",
    "BehaviorsMixin",
    "CSS",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "FBLogger",
    "HTML",
    "KeyEventController",
    "KeyStatus",
    "Parent",
    "ReactDOM_DEPRECATED",
    "Style",
    "ge",
    "isNode",
    "isValidReactElement",
    "mixin",
    "react",
    "removeFromArray",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useLayoutEffect;
    n("KeyStatus");
    var d = [],
      m = (function (e) {
        function t(t, n) {
          var o;
          if (((o = e.call(this) || this), (o._config = t || {}), n)) {
            o._configure(o._config, n);
            var a = o._config.addedBehaviors || [];
            o.enableBehaviors(o._getDefaultBehaviors().concat(a));
          } else
            r("FBLogger")("layer").warn(
              "The markup param wasn't provided to the Layer constructor",
            );
          return o;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.init = function (t) {
            this._configure(this._config, t);
            var e = this._config.addedBehaviors || [];
            return (
              this.enableBehaviors(this._getDefaultBehaviors().concat(e)),
              (this._initialized = !0),
              this
            );
          }),
          (n._configure = function (t, n) {
            var e = this,
              a = n;
            if (n) {
              var i = r("isNode")(n),
                l = typeof n == "string" || r("HTML").isHTML(n);
              if (
                ((this.containsReactComponent = r("isValidReactElement")(n)),
                !i &&
                  !l &&
                  !this.containsReactComponent &&
                  r("FBLogger")("layer").warn(
                    "Layer must be init with HTML, DOM node or React instance",
                  ),
                l)
              )
                a = r("HTML")(n).getRootNode();
              else if (this.containsReactComponent) {
                var s = document.createElement("div");
                (f(n, s, function () {
                  (e.inform("reactshow"), e.updatePosition());
                }),
                  (a = this._reactContainer = s));
              }
            }
            ((this._root = this._buildWrapper(t, a)),
              t.attributes && r("DOM").setAttributes(this._root, t.attributes),
              t.classNames &&
                t.classNames.forEach(o("CSS").addClass.bind(null, this._root)),
              o("CSS").addClass(this._root, "uiLayer"),
              t.causalElement != null &&
                (this._causalElement = r("ge")(t.causalElement)),
              t.permanent === !0 && (this._permanent = t.permanent),
              t.isStrictlyControlled === !0 &&
                (this._isStrictlyControlled = t.isStrictlyControlled),
              o("DataStore").set(this._root, "layer", this));
          }),
          (n._getDefaultBehaviors = function () {
            return [];
          }),
          (n.getCausalElement = function () {
            return this._causalElement;
          }),
          (n.setCausalElement = function (t) {
            return ((this._causalElement = t), this);
          }),
          (n.getInsertParent = function () {
            return this._insertParent || document.body;
          }),
          (n.hasWash = function () {
            return !0;
          }),
          (n.getRoot = function () {
            return (
              this._root ||
                (this._destroyed
                  ? r("FBLogger")("layer").warn(
                      "No root node for this Layer. It has either not yet been set or the Layer has been destroyed.  This layer has been destroyed.",
                    )
                  : r("FBLogger")("layer").warn(
                      "No root node for this Layer. It has probably not been set.",
                    )),
              this._root
            );
          }),
          (n.getContentRoot = function () {
            return this.getRoot();
          }),
          (n._buildWrapper = function (t, n) {
            return n;
          }),
          (n.setInsertParent = function (t) {
            return (
              t &&
                (this._shown &&
                  t !== this.getInsertParent() &&
                  (r("DOM").appendContent(t, this.getRoot()),
                  this.updatePosition()),
                (this._insertParent = t)),
              this
            );
          }),
          (n.showAfterDelay = function (t) {
            var e = this;
            window.setTimeout(function () {
              return e.show();
            }, t);
          }),
          (n.show = function () {
            var e = this;
            if (this._shown) return this;
            var n = this.getRoot();
            return (
              n != null || s(0, 5142),
              this.inform("beforeshow"),
              r("Style").set(n, "visibility", "hidden"),
              r("Style").set(n, "overflow", "hidden"),
              o("CSS").show(n),
              r("DOM").appendContent(this.getInsertParent(), n),
              this.updatePosition() !== !1
                ? ((this._shown = !0),
                  this.inform("show"),
                  t.inform("show", this),
                  this._permanent ||
                    window.setTimeout(function () {
                      e._shown && d.push(e);
                    }, 0))
                : o("CSS").hide(n),
              r("Style").set(n, "visibility", ""),
              r("Style").set(n, "overflow", ""),
              r("Style").set(n, "opacity", "1"),
              this.inform("aftershow"),
              this
            );
          }),
          (n.hide = function (t) {
            return this._isStrictlyControlled
              ? (this._shown && this.inform("runhide", t), this)
              : this._hide();
          }),
          (n._hide = function () {
            return this._hiding ||
              !this._shown ||
              this.inform("beforehide") === !1
              ? this
              : ((this._hiding = !0),
                this.inform("starthide") !== !1 && this.finishHide(),
                this);
          }),
          (n.conditionShow = function (t) {
            return t ? this.show() : this._hide();
          }),
          (n.finishHide = function () {
            if (this._shown) {
              (this._permanent || r("removeFromArray")(d, this),
                (this._hiding = !1),
                (this._shown = !1));
              var e = this.getRoot();
              (e != null || s(0, 5143),
                o("CSS").hide(e),
                this.inform("hide"),
                t.inform("hide", this));
            }
          }),
          (n.isShown = function () {
            return this._shown;
          }),
          (n.updatePosition = function () {
            return !0;
          }),
          (n.destroy = function () {
            (this.containsReactComponent &&
              o("ReactDOM_DEPRECATED").unmountComponentAtNode_DEPRECATED(
                this._reactContainer,
              ),
              this.finishHide());
            var e = this.getRoot();
            (r("DOM").remove(e),
              this.destroyBehaviors(),
              this.inform("destroy"),
              t.inform("destroy", this),
              o("DataStore").remove(e, "layer"),
              (this._root = this._causalElement = null),
              (this._destroyed = !0));
          }),
          (t.init = function (t, n) {
            t.init(n);
          }),
          (t.initAndShow = function (t, n) {
            t.init(n).show();
          }),
          (t.show = function (t) {
            t.show();
          }),
          (t.showAfterDelay = function (t, n) {
            t.showAfterDelay(n);
          }),
          (t.getTopmostLayer = function () {
            return d[d.length - 1];
          }),
          (t.informBlur = function (t) {
            ((p = null), (_ = null));
            var e = d.length;
            if (e)
              for (; e--; ) {
                var n = d[e],
                  r = n.getContentRoot();
                if (
                  (r != null || s(0, 5144),
                  o("ContextualThing").containsIncludingLayers(r, t) ||
                    n.inform("blur", { target: t }) === !1 ||
                    n.isShown())
                )
                  return;
              }
          }),
          t
        );
      })(r("mixin")(r("ArbiterMixin"), r("BehaviorsMixin")));
    (Object.assign(m, r("ArbiterMixin")),
      Object.assign(m.prototype, {
        _destroyed: !1,
        _initialized: !1,
        _root: null,
        _shown: !1,
        _hiding: !1,
        _causalElement: null,
        _reactContainer: null,
      }),
      r("Event").listen(
        document.documentElement,
        "keydown",
        function (e) {
          if (r("KeyEventController").filterEventTargets(e, "keydown")) {
            for (var t = d.length - 1; t >= 0; t--)
              if (d[t].inform("key", e) === !1) return !1;
          }
          return !0;
        },
        r("Event").Priority.URGENT,
      ));
    var p;
    r("Event").listen(document.documentElement, "mousedown", function (e) {
      p = e.getTarget();
    });
    var _;
    (r("Event").listen(document.documentElement, "mouseup", function (e) {
      ((_ = e.getTarget()),
        r("setImmediate")(function () {
          ((p = null), (_ = null));
        }));
    }),
      r("Event").listen(document.documentElement, "click", function (e) {
        var t = p,
          n = _;
        ((p = null), (_ = null));
        var a = d.length;
        if (a) {
          var i = e.getTarget();
          i !== n ||
            i !== t ||
            (r("DOM").contains(document.documentElement, i) &&
              ((i.offsetWidth != null && !i.offsetWidth) ||
                o("Parent").byClass(i, "generic_dialog") ||
                m.informBlur(i)));
        }
      }));
    function f(e, t, n) {
      r("setImmediate")(function () {
        o("ReactDOM_DEPRECATED").render_DEPRECATED(
          u.jsx(g, { onRender: n, children: e }),
          t,
        );
      });
    }
    function g(e) {
      var t = e.children,
        n = e.onRender;
      return (
        c(
          function () {
            n();
          },
          [n],
        ),
        t
      );
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
