__d(
  "DialogX",
  [
    "cx",
    "fbt",
    "Arbiter",
    "CSS",
    "DOMQuery",
    "DialogPosition",
    "Event",
    "JSXDOM",
    "Layer",
    "LayerAutoFocus",
    "LayerButtons",
    "LayerFormHooks",
    "LayerRefocusOnHide",
    "LayerTabIsolation",
    "LayerTogglerContext",
    "ModalLayer",
    "Style",
    "Vector",
    "debounce",
    "getOrCreateDOMID",
    "goURI",
    "isTruthy",
    "shield",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n._configure = function (n, a) {
            var t = this;
            e.prototype._configure.call(this, n, a);
            var i = this.getRoot();
            if (
              (i != null && o("CSS").addClass(i, "_4-hy"), n.autohide != null)
            )
              var l = this.subscribe("show", function () {
                (l.unsubscribe(),
                  window.setTimeout(r("shield")(t.hide, t), n.autohide));
              });
            if (n.redirectURI != null && n.redirectURI !== "")
              var s = this.subscribe("hide", function () {
                s.unsubscribe();
                var e = n.redirectURI;
                e != null && r("goURI")(e);
              });
            ((this._fixedTopPosition = n.fixedTopPosition),
              (this._ignoreFixedTopInShortViewport =
                n.ignoreFixedTopInShortViewport),
              (this._isVerticallyCentered = n.isVerticallyCentered));
          }),
          (n._getDefaultBehaviors = function () {
            return e.prototype._getDefaultBehaviors
              .call(this)
              .concat(
                [
                  c,
                  r("ModalLayer"),
                  this._config.autofocus === !1 ? void 0 : r("LayerAutoFocus"),
                  r("LayerButtons"),
                  r("LayerFormHooks"),
                  r("LayerTabIsolation"),
                  r("LayerTogglerContext"),
                  r("LayerRefocusOnHide"),
                ].filter(r("isTruthy")),
              );
          }),
          (n.hasWash = function () {
            var e;
            return (e = this._config.hasWash) != null ? e : !0;
          }),
          (n._buildWrapper = function (t, n) {
            var e = t.xui === !0 ? "_4t2a" : "_t _9l18",
              a = t.xui === !0 ? "_59s7 _9l2g" : "_1yv";
            this._innerContent = r("JSXDOM").div(null, n);
            var i = { className: a, role: "dialog" };
            if (t.labelledBy != null && t.labelledBy !== "")
              i["aria-labelledby"] = t.labelledBy;
            else if (t.label != null && t.label !== "")
              i["aria-label"] = t.label;
            else if (t.titleID != null && t.titleID !== "")
              i["aria-labelledby"] = t.titleID;
            else if (t.titleClass != null && t.titleClass !== "") {
              var l = o("DOMQuery").scry(this._innerContent, t.titleClass);
              if (l.length) {
                var s = r("getOrCreateDOMID")(l[0]);
                i["aria-labelledby"] = s;
              } else i["aria-label"] = this._getDefaultLabel();
            } else i["aria-label"] = this._getDefaultLabel();
            var u = { className: e };
            return (
              t["data-testid"] != null &&
                t["data-testid"] !== "" &&
                (u["data-testid"] = t["data-testid"]),
              (this._wrapper = r("JSXDOM").div(
                i,
                r("JSXDOM").div(u, this._innerContent),
              )),
              t.width != null && this.setWidth(t.width),
              t.height != null && this.setHeight(t.height),
              r("JSXDOM").div({ className: "_10" }, this._wrapper)
            );
          }),
          (n._getDefaultLabel = function () {
            return u._(/*BTDS*/ "Dialog content");
          }),
          (n.getContentRoot = function () {
            return this._wrapper;
          }),
          (n.getInnerContent = function () {
            return this._innerContent;
          }),
          (n.updatePosition = function () {
            var e,
              t,
              n = r("Vector").getElementDimensions(this._wrapper),
              a = o("DialogPosition").calculateTopMargin(
                n.x,
                n.y,
                this._fixedTopPosition,
                (e = this._ignoreFixedTopInShortViewport) != null ? e : !1,
                (t = this._isVerticallyCentered) != null ? t : !1,
              );
            return (
              r("Style").set(this._wrapper, "margin-top", a + "px"),
              this.inform("update_position", { type: "DialogX", top: a }),
              !0
            );
          }),
          (n.setWidth = function (t) {
            if (t === "100%")
              ((this._width = void 0),
                r("Style").set(this._wrapper, "width", ""));
            else {
              var e = Math.floor(t);
              if (e === this._width) return;
              ((this._width = e),
                r("Style").set(this._wrapper, "width", e + "px"));
            }
          }),
          (n.getWidth = function () {
            return this._width;
          }),
          (n.setHeight = function (t) {
            var e = Math.floor(t);
            e !== this._height &&
              ((this._height = e),
              r("Style").set(this._wrapper, "height", e + "px"));
          }),
          (n.getFixedTopPosition = function () {
            return this._fixedTopPosition;
          }),
          (n.shouldIgnoreFixedTopInShortViewport = function () {
            return this._ignoreFixedTopInShortViewport;
          }),
          t
        );
      })(r("Layer")),
      c = (function () {
        function e(e) {
          ((this._subscription = null),
            (this._resize = null),
            (this._layer = e));
        }
        var t = e.prototype;
        return (
          (t.enable = function () {
            var e = this;
            this._subscription = this._layer.subscribe(
              ["show", "hide"],
              function (t) {
                t === "show"
                  ? (e._attach(),
                    r("Arbiter").inform("layer_shown", { type: "DialogX" }))
                  : (e._detach(),
                    r("Arbiter").inform("layer_hidden", { type: "DialogX" }));
              },
            );
          }),
          (t.disable = function () {
            var e;
            ((e = this._subscription) == null || e.unsubscribe(),
              (this._subscription = null),
              this._resize && this._detach());
          }),
          (t._attach = function () {
            (this._layer.updatePosition(),
              (this._resize = r("Event").listen(
                window,
                "resize",
                r("debounce")(this._layer.updatePosition.bind(this._layer)),
              )));
          }),
          (t._detach = function () {
            var e;
            ((e = this._resize) == null || e.remove(), (this._resize = null));
          }),
          e
        );
      })();
    l.default = e;
  },
  226,
);
