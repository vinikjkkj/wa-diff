__d(
  "Toggler",
  [
    "csx",
    "invariant",
    "$",
    "Arbiter",
    "ArbiterMixin",
    "CSS",
    "ContextualThing",
    "DOM",
    "DataStore",
    "Event",
    "Focus",
    "Keys",
    "Parent",
    "TabbableElements",
    "TimeSlice",
    "createArrayFromMixed",
    "emptyFunction",
    "ge",
    "getContextualParent",
    "getObjectValues",
    "mixin",
    "queryThenMutateDOM",
    "setImmediate",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    var e = [],
      c,
      d = !1;
    function m() {
      d ||
        ((d = !0),
        r("setImmediate")(function () {
          d = !1;
        }));
    }
    var p = function () {
        ((p = r("emptyFunction")),
          r("Event").listen(
            document.documentElement,
            "click",
            function (t) {
              if (!d) {
                var n = t.getTarget();
                e.forEach(function (e) {
                  ((e.clickedTarget = n),
                    e.active &&
                      !e.sticky &&
                      !o("ContextualThing").containsIncludingLayers(
                        e.getActive(),
                        n,
                      ) &&
                      !e.inTargetFlyout(n) &&
                      e.inActiveDialog() &&
                      !e.isIgnoredByModalLayer(n) &&
                      e.hide());
                });
              }
            },
            r("Event").Priority.URGENT,
          ));
      },
      _ = (function (n) {
        function a() {
          var t;
          return (
            (t = n.call(this) || this),
            (t.active = null),
            (t.togglers = {}),
            t.setSticky(!1),
            e.push(t),
            t.subscribe(["show", "hide"], a.inform.bind(a)),
            p() || babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(a, n);
        var i = a.prototype;
        return (
          (i.focusFirstTabbableDescendant = function (t, n) {
            n.$Toggler2 && n.$Toggler2.cancel();
            var e = null;
            n.$Toggler2 = r("queryThenMutateDOM")(
              function () {
                var n = t.querySelector(".uiToggleFlyout");
                n && (e = o("TabbableElements").findFirst(n) || n);
              },
              function () {
                (delete n.$Toggler2,
                  e &&
                    (e.tabIndex == null && (e.tabIndex = -1),
                    o("Focus").setWithoutOutline(e)));
              },
            );
          }),
          (i.show = function (t) {
            var e = f(this, t),
              n = e.active;
            if (t !== n) {
              (n && e.hide(),
                (e.active = t),
                o("CSS").addClass(t, "openToggler"));
              var a = r("DOM").scry(t, 'a[rel="toggle"]');
              (a.length > 0 &&
                a[0].getAttribute("data-target") &&
                o("CSS").removeClass(
                  r("$")(a[0].getAttribute("data-target")),
                  "toggleTargetClosed",
                ),
                this.focusFirstTabbableDescendant(t, e),
                a.length > 0 &&
                  (r("DOM").appendContent(t, e.getToggler("next")),
                  r("DOM").prependContent(t, e.getToggler("prev"))),
                r("Event").listen(t, "keydown", function (n) {
                  if (
                    r("Event").getKeyCode(n) === r("Keys").ESC &&
                    e.isShown()
                  ) {
                    var o = r("DOM").scry(t, 'a[rel="toggle"]')[0];
                    (o && o.focus(), e.hide(), n.kill());
                  }
                }),
                t.getAttribute("data-toggle-wc") &&
                  (e.__continuation = r("TimeSlice").getGuardedContinuation(
                    "Toggler.show inform",
                  )),
                e.inform("show", e, "state"));
            }
          }),
          (i.hide = function (t) {
            var e = f(this, t);
            e.$Toggler2 && e.$Toggler2.cancel();
            var n = e.active;
            if (n && (!t || t === n)) {
              o("CSS").removeClass(n, "openToggler");
              var a = r("DOM").scry(n, 'a[rel="toggle"]');
              (a.length > 0 &&
                a[0].getAttribute("data-target") &&
                o("CSS").addClass(
                  r("$")(a[0].getAttribute("data-target")),
                  "toggleTargetClosed",
                ),
                r("getObjectValues")(e.togglers).forEach(r("DOM").remove),
                n.getAttribute("data-toggle-wc") &&
                  (e.__continuation = r("TimeSlice").getGuardedContinuation(
                    "Toggler.hide inform",
                  )),
                e.inform("hide", e, "state"),
                (e.active = null));
            }
          }),
          (i.toggle = function (t) {
            var e = f(this, t);
            (e.active === t ? e.hide() : e.show(t), m());
          }),
          (i.getActive = function () {
            return f(this).active;
          }),
          (i.isShown = function () {
            return (
              f(this).active && o("CSS").hasClass(f(this).active, "openToggler")
            );
          }),
          (a.isNodeShown = function (t) {
            return o("CSS").hasClass(t, "openToggler");
          }),
          (i.inTargetFlyout = function (t) {
            var e = g(this.getActive());
            return !!(e && o("ContextualThing").containsIncludingLayers(e, t));
          }),
          (i.inActiveDialog = function () {
            var e = t.Dialog && t.Dialog.getCurrent();
            return !e || r("DOM").contains(e.getRoot(), this.getActive());
          }),
          (i.isIgnoredByModalLayer = function (t) {
            var e = !!o("Parent").bySelector(t, "._3qw"),
              n = !!o("Parent").bySelector(this.getActive(), "._3qw");
            return e && !n;
          }),
          (i.getToggler = function (t) {
            var e = f(this);
            return (
              e.togglers[t] ||
                ((e.togglers[t] = r("DOM").create("button", {
                  className: "hideToggler",
                  onfocus: function () {
                    var t = r("DOM").scry(e.active, 'a[rel="toggle"]')[0];
                    (t && t.focus(), e.hide());
                  },
                  style: { right: t === "next" ? "0" : "" },
                })),
                e.togglers[t].setAttribute("type", "button")),
              this.togglers[t]
            );
          }),
          (i.setSticky = function (t) {
            var e = f(this);
            return (
              (t = t !== !1),
              t !== e.sticky &&
                ((e.sticky = t),
                t
                  ? e.$Toggler1 && e.$Toggler1.unsubscribe()
                  : (e.$Toggler1 = r("Arbiter").subscribe(
                      "pre_page_transition",
                      e.hide.bind(e, null),
                    ))),
              e
            );
          }),
          (i.setPrePageTransitionCallback = function (t) {
            var e = f(this);
            (e.$Toggler1 && e.$Toggler1.unsubscribe(),
              (e.$Toggler1 = r("Arbiter").subscribe("pre_page_transition", t)));
          }),
          (a.bootstrap = function (t) {
            var e = t.parentNode;
            e != null || u(0, 3354);
            var n = a.getInstance(e);
            (n != null || u(0, 3355), n.toggle(e));
          }),
          (a.createInstance = function (t) {
            var e = new a().setSticky(!0);
            return (o("DataStore").set(t, "toggler", e), e);
          }),
          (a.destroyInstance = function (t) {
            var e = o("DataStore").get(t, "toggler");
            (e && e.$Toggler2 && e.$Toggler2.cancel(),
              o("DataStore").remove(t, "toggler"));
          }),
          (a.getInstance = function (t) {
            for (var e = t; e; ) {
              var n = o("DataStore").get(e, "toggler");
              if (n) return n;
              if (e instanceof Element) {
                if (o("CSS").hasClass(e, "uiToggleContext"))
                  return a.createInstance(e);
                if (o("CSS").hasClass(e, "uiToggleFlyout"))
                  return a.createInstance(e).setSticky(!1);
              }
              e = r("getContextualParent")(e);
            }
            return (c = c || new a());
          }),
          (a.listen = function (t, n, o) {
            return a.subscribe(r("createArrayFromMixed")(t), function (e, t) {
              if (t.getActive() === n) {
                if (t.__continuation) {
                  var r = t.__continuation;
                  return (
                    delete t.__continuation,
                    r(function () {
                      return o(e, t);
                    })
                  );
                }
                return o(e, t);
              }
            });
          }),
          (a.addListener = function (t) {
            var e = t.element,
              n = t.events,
              r = t.handler;
            return a.listen(n, e, function () {
              return r.callback();
            });
          }),
          a
        );
      })(r("mixin")(r("ArbiterMixin")));
    (Object.assign(_, _.prototype, r("ArbiterMixin")),
      Object.assign(_, {
        subscribe: (function (t) {
          return function (n, o) {
            return (
              (n = r("createArrayFromMixed")(n)),
              n.includes("show") &&
                e.forEach(function (e) {
                  e.getActive() && setTimeout(o.bind(null, "show", e), 0);
                }),
              t(n, o)
            );
          };
        })(_.subscribe.bind(_)),
      }));
    function f(e, t) {
      return e instanceof _ ? e : _.getInstance(t);
    }
    function g(e) {
      var t = r("DOM").scry(e, 'a[rel="toggle"]');
      return t.length > 0 && t[0].getAttribute("data-target")
        ? r("ge")(t[0].getAttribute("data-target"))
        : null;
    }
    l.default = _;
  },
  98,
);
