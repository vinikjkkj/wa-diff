__d(
  "ModalLayer",
  [
    "csx",
    "cx",
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "CometVisualCompletionConstants",
    "DOM",
    "DOMDimensions",
    "DOMQuery",
    "DataStore",
    "Event",
    "Scroll",
    "ScrollAwareDOM",
    "Style",
    "UserAgent",
    "Vector",
    "debounceAcrossTransitions",
    "ge",
    "getDocumentScrollElement",
    "isAsyncScrollQuery",
    "removeFromArray",
    "setTimeout",
    "setTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = [],
      c = null,
      d = null,
      m = null;
    function p() {
      return (
        m ||
          (m =
            o("DOMQuery").scry(document.body, "._li")[0] ||
            r("ge")("FB4BResponsiveMain")),
        m
      );
    }
    function _(e) {
      var t = { position: r("Vector").getScrollPosition(), listener: void 0 },
        n = e.offsetTop - t.position.y;
      (o("CSS").addClass(e, "_31e"),
        p().id !== "FB4BResponsiveMain" && r("Style").set(e, "top", n + "px"),
        r("Arbiter").inform("reflow"),
        (t.listener = r("ScrollAwareDOM").subscribe("scroll", function (n, a) {
          if (o("DOMQuery").contains(e, a.target)) {
            var i = e.offsetTop - a.delta.y;
            return (
              r("Style").set(e, "top", i + "px"),
              (t.position = t.position.add(a.delta)),
              !1
            );
          }
          return !0;
        })),
        o("DataStore").set(e, "ModalLayerData", t));
    }
    function f(e, t) {
      var n = t,
        a = o("DataStore").get(e, "ModalLayerData");
      if (a) {
        var i = function () {
          if (
            (o("CSS").removeClass(e, "_31e"), r("Style").set(e, "top", ""), n)
          ) {
            var t = r("getDocumentScrollElement")();
            (o("Scroll").setTop(t, a.position.y),
              o("Scroll").getTop(t) !== a.position.y &&
                (o("Scroll").setTop(t, a.position.y + 1),
                o("Scroll").setTop(t, a.position.y)));
          }
          (r("Arbiter").inform("reflow"),
            a.listener.unsubscribe(),
            (a.listener = null),
            o("DataStore").remove(e, "ModalLayerData"));
        };
        if (n && r("isAsyncScrollQuery")()) {
          var l = r("DOM").create("div", { className: "_42w" });
          (r("Style").set(l, "height", e.offsetHeight + "px"),
            r("DOM").appendContent(document.body, l));
          var s = r("getDocumentScrollElement")();
          (o("Scroll").setTop(s, a.position.y),
            (n = !1),
            r("setTimeout")(function () {
              (i(), r("DOM").remove(l));
            }, 0));
        } else i();
      }
    }
    function g() {
      var e = p();
      e != null && !o("CSS").matchesSelector(e, "._31e") && _(e);
    }
    function h() {
      e.length || f(p(), !0);
    }
    function y() {
      for (var t = e.length; t--; ) {
        var n = e[t],
          r = n.getLayerRoot();
        if (r) {
          C(r, 0);
          var a = n.getLayerContentRoot();
          if (a) {
            var i =
              a.offsetWidth +
              o("DOMDimensions").measureElementBox(a, "width", !1, !1, !0);
            C(r, i);
          }
        }
      }
    }
    function C(e, t) {
      r("Style").set(e, "min-width", t + (t ? "px" : ""));
    }
    var b = (function () {
      function t(e) {
        ((this.$2 = e), (this.$1 = !1));
      }
      var n = t.prototype;
      return (
        (n.enable = function () {
          var e = this;
          p() &&
            ((this.$3 = this.$2.subscribe(["show", "hide"], function (t) {
              t == "show" ? e.$5() : e.$6();
            })),
            this.$2.isShown() && this.$5(),
            (this.$1 = !0));
        }),
        (n.disable = function () {
          p() &&
            (this.$3 && this.$3.unsubscribe(),
            this.$2.isShown() && this.$6(),
            (this.$1 = !1));
        }),
        (n.$5 = function () {
          var n = this.getLayerRoot();
          (o("CSS").addClass(n, "_3qw"),
            this.$2.hasWash() &&
              ((this.$4 = r("DOM").create("div", { className: "_3ixn" })),
              r("DOM").prependContent(n, this.$4)),
            n &&
              this.$2._config.ignoreVC &&
              n.setAttribute(
                r("CometVisualCompletionConstants").ATTRIBUTE_NAME,
                r("CometVisualCompletionConstants").IGNORE,
              ));
          var a = e[e.length - 1];
          a ? _(a.getLayerRoot()) : g();
          var i = r("getDocumentScrollElement")();
          if ((o("Scroll").setTop(i, 0), !e.length)) {
            var l = r("debounceAcrossTransitions")(function (e) {
              return y();
            }, 100);
            ((c = r("Event").listen(window, "resize", l)),
              (d = r("Arbiter").subscribe("reflow", l)));
          }
          (e.push(this), t.inform("show", this), r("setTimeout")(y, 0));
        }),
        (n.$6 = function () {
          var n = this,
            a = this.getLayerRoot();
          (o("CSS").removeClass(a, "_3qw"),
            this.$2.hasWash() && (r("DOM").remove(this.$4), (this.$4 = null)),
            C(a, 0));
          var i = this === e[e.length - 1];
          (r("removeFromArray")(e, this),
            e.length ||
              (c && c.remove(), (c = null), d && d.unsubscribe(), (d = null)));
          var l, s;
          (r("UserAgent").isBrowser("Safari") &&
            ((l = r("Event").listen(
              document.documentElement,
              "mousewheel",
              r("Event").prevent,
            )),
            (s = l.remove.bind(l))),
            r("setTimeoutAcrossTransitions")(function () {
              var o = e[e.length - 1];
              (o
                ? (f(o.getLayerRoot(), i), t.inform("show", o))
                : (h(), t.inform("hide", n)),
                e.length && r("setTimeout")(y, 0),
                r("UserAgent").isBrowser("Safari") &&
                  r("setTimeout")(function () {
                    s();
                  }, 0));
            }, 200));
        }),
        (n.getLayerRoot = function () {
          return this.$1 ? this.$2.getRoot() : null;
        }),
        (n.getLayerContentRoot = function () {
          return this.$1 ? this.$2.getContentRoot() : null;
        }),
        (t.getTopmostModalLayer = function () {
          return e[e.length - 1];
        }),
        t
      );
    })();
    (Object.assign(b, r("ArbiterMixin")), (l.default = b));
  },
  98,
);
