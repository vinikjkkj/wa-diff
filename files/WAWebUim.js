__d(
  "WAWebUim",
  [
    "$InternalEnum",
    "Keys",
    "WALogger",
    "WAWebUimUtils",
    "compactMap",
    "gkx",
    "lodash",
    "maxBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = n("$InternalEnum").Mirrored([
        "ACTIVE",
        "PASSIVE",
        "INACTIVE",
        "DEAD",
      ]),
      m = n("$InternalEnum").Mirrored(["LIFECYCLE", "UIM_INTERACTION"]),
      p = (function () {
        function e() {
          this.verbose = !r("gkx")("26258");
        }
        var t = e.prototype;
        return (
          (t.setTop = function (t) {
            var e;
            (t && (t.lastActive = Date.now()),
              t &&
                this.$1 !== t &&
                t.getState() !== d.INACTIVE &&
                t.getState() !== d.DEAD &&
                t.shouldRequestFocus &&
                t.requestFocus(),
              t && (t.shouldRequestFocus = !0),
              (e = this.$1) != null &&
                e.popable &&
                window.removeEventListener("wheel", _, { capture: !0 }),
              t != null &&
                t.popable &&
                window.addEventListener("wheel", _, { capture: !0 }),
              (this.$1 = t));
          }),
          (t.getTop = function () {
            return this.$1;
          }),
          (t.refocusTopUie = function () {
            var e = this;
            self.setTimeout(function () {
              e.$1 != null &&
                document.activeElement === document.body &&
                e.$1.requestFocus();
            }, 0);
          }),
          e
        );
      })();
    function _(e) {
      var t,
        n = (t = f.Manager.getTop()) == null ? void 0 : t.getNode();
      (o("WAWebUimUtils").isCrossWindowHTMLElement(e.target) ||
        e.target instanceof HTMLElement) &&
        n &&
        !n.contains(e.target) &&
        (e.preventDefault(), e.stopPropagation());
    }
    var f = (function () {
      function t(n, r) {
        if (
          ((this.shouldRequestFocus = !0),
          (this.dismissEvent = null),
          (this.parent = r || this),
          !r)
        ) {
          var a;
          (t.Manager.root &&
            ((a = t.Manager.root) == null ? void 0 : a.displayName) !==
              n.displayName &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[uim] multiple roots: existing=",
                    " new=",
                    "",
                  ])),
                t.Manager.root.displayName,
                n.displayName,
              )
              .sendLogs("multiple-uim-roots", { sampling: 0.01 }),
            (t.Manager.root = this));
        }
        ((this.displayName = n.displayName),
          (this.popable = n.popable),
          (this.escapable = n.escapable),
          (this.requestFocus = n.requestFocus),
          (this.$2 = n.requestDismiss),
          (this.getNode = n.getNode),
          (this.dismissOnWindowResize = n.dismissOnWindowResize),
          (this.children = []),
          this.setState(n.uimState));
      }
      var n = t.prototype;
      return (
        (n.getState = function () {
          return this.$1;
        }),
        (n.setState = function (n) {
          switch (n) {
            case d.ACTIVE:
              ((this.lastActive = Date.now()), t.Manager.setTop(this));
              break;
            case d.PASSIVE:
              ((this.lastActive = Date.now()),
                this.$1 !== d.ACTIVE &&
                  t.Manager.setTop(t.findMostRecentlyActiveFocusable()));
              break;
            case d.INACTIVE:
              this.$1 &&
                this.$1 !== n &&
                t.Manager.setTop(t.findMostRecentlyActiveFocusable());
              break;
            case d.DEAD:
              break;
          }
          this.$1 = n;
        }),
        (n.activate = function () {
          this.setState(this.$1);
        }),
        (n.register = function () {
          (this.parent !== this && this.parent.children.push(this), t.pprint());
        }),
        (n.pop = function (n, o) {
          var e = this;
          if (
            (n === void 0 && (n = m.UIM_INTERACTION),
            o === void 0 && (o = !0),
            this.getState() !== d.DEAD)
          ) {
            (this.$3(this.children, n),
              r("lodash").remove(this.parent.children, function (t) {
                return t === e;
              }),
              t.Manager.root === this && (t.Manager.root = void 0));
            var a = t.findMostRecentlyActiveFocusable(this);
            (a && (a.shouldRequestFocus = o), t.Manager.setTop(a), t.pprint());
          }
        }),
        (n.requestDismiss = function (t, n) {
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[uim] request dismiss: ",
                "",
              ])),
            this.displayName,
          ),
            (this.dismissEvent = n),
            this.$2(t, n));
        }),
        (n.$3 = function (t, n) {
          var e = this;
          t.forEach(function (t) {
            (t.setState(d.DEAD), t.requestDismiss(n), e.$3(t.children, n));
          });
        }),
        (t.findMostRecentlyActiveFocusable = function (n) {
          var e = t.Manager.root;
          if (e)
            return g(e, n, function (e) {
              var t = e.getState();
              return t === d.ACTIVE || t === d.PASSIVE;
            });
        }),
        (t.findMostRecentlyActiveDismissable = function (n) {
          var e = t.Manager.root;
          if (e)
            return (
              g(e, n, function (e) {
                return e.getState() === d.ACTIVE;
              }) ||
              g(e, n, function (e) {
                return e.getState() === d.PASSIVE;
              })
            );
        }),
        (t.pprint = function (n) {
          if (!(n !== !0 && t.Manager.verbose !== !0)) {
            var e = t.Manager.root;
            e &&
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose(["[uim] ", ""])),
                E(e, []),
              );
          }
        }),
        t
      );
    })();
    ((f.State = d), (f.Manager = new p()));
    function g(e, t, n) {
      if (!e.children.length) return e;
      var o = e.children.filter(function (e) {
          return e !== t;
        }),
        a = r("compactMap")(o, function (e) {
          return g(e, t, n);
        });
      a.push(e);
      var i = a.filter(n);
      return r("maxBy")(i, function (e) {
        return e.lastActive;
      });
    }
    var h = "\u25B6",
      y = "\u2502",
      C = "\u2514\u2500\u2500",
      b = "\u2514\u2500\u252C",
      v = "\u251C\u2500\u2500",
      S = "\u251C\u2500\u252C";
    function R(e) {
      switch (e) {
        case d.ACTIVE:
          return "A";
        case d.PASSIVE:
          return "P";
        case d.INACTIVE:
          return "I";
        case d.DEAD:
          return "D";
      }
    }
    function L(e, t, n, r) {
      var o;
      (n === !0 && r
        ? (o = S)
        : n === !0 && !r
          ? (o = v)
          : n !== !0 && r
            ? (o = b)
            : (o = C),
        e === f.Manager.root && (o = h));
      var a = e.displayName;
      e === f.Manager.getTop() && (a = a + " \u2B25");
      var i = "(" + R(e.getState()) + ")" + (r ? "\n" : "");
      return "" + t.join("") + o + " " + a + " " + i;
    }
    function E(e, t, n) {
      var r = L(e, t, n, !!e.children.length);
      return (
        r +
        e.children
          .map(function (r, o) {
            var a = n,
              i = o < e.children.length - 1,
              l = a === !0 ? t.concat([y + " "]) : t.concat(["  "]);
            return E(r, l, i);
          })
          .join("\n")
      );
    }
    var k = !1;
    function I() {
      return k;
    }
    function T(e) {
      e === void 0 && (e = window);
      var t = new WeakSet(),
        n = null,
        a = function (t) {
          if (t.keyCode === r("Keys").ESC) {
            var e = f.Manager.getTop(),
              n =
                (e == null ? void 0 : e.getState()) === d.ACTIVE
                  ? x(e) || e
                  : f.findMostRecentlyActiveDismissable();
            n &&
              (n.escapable
                ? (t.stopPropagation(),
                  t.preventDefault(),
                  n.requestDismiss(m.UIM_INTERACTION, t))
                : o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[uim] non-escapable item cannot be dismissed: ",
                        "",
                      ])),
                    n.displayName,
                  ));
          }
        };
      e.addEventListener("keydown", a, { capture: !0 });
      var i = function () {
        if (!r("gkx")("26256")) {
          var e = f.Manager.getTop(),
            n =
              (e == null ? void 0 : e.getState()) === d.ACTIVE
                ? e
                : f.findMostRecentlyActiveDismissable();
          n != null &&
            n.dismissOnWindowResize &&
            n != null &&
            n.escapable &&
            !t.has(n) &&
            (n.requestDismiss(m.UIM_INTERACTION), t.add(n));
        }
      };
      e.addEventListener("resize", i);
      var l = function (t) {
        if (
          ((k = t.metaKey || t.ctrlKey),
          (n = null),
          !(!t.screenX || !t.screenY))
        ) {
          var e = D(f.Manager.getTop(), t);
          e && t.button === 2 ? e.requestDismiss(m.UIM_INTERACTION) : (n = e);
        }
      };
      e.addEventListener("mousedown", l, { capture: !0 });
      var s = function (t) {
        if (!t.screenX || !t.screenY) {
          n = null;
          return;
        }
        var e = D(f.Manager.getTop(), t);
        (e &&
          e === n &&
          self.setTimeout(function () {
            return e.requestDismiss(m.UIM_INTERACTION, t);
          }, 0),
          (n = null));
      };
      return (
        e.addEventListener("mouseup", s, { capture: !0 }),
        function () {
          (e.removeEventListener("keydown", a, { capture: !0 }),
            e.removeEventListener("resize", i),
            e.removeEventListener("mousedown", l, { capture: !0 }),
            e.removeEventListener("mouseup", s, { capture: !0 }));
        }
      );
    }
    function D(e, t) {
      var n =
        e && e.getState() === d.ACTIVE && e.popable
          ? e
          : f.findMostRecentlyActiveDismissable();
      if (!n || !n.popable) return null;
      var r = n.getNode();
      return r &&
        (o("WAWebUimUtils").isTargetAnElementNode(t.target) ||
          t.target instanceof Node) &&
        r.contains(t.target)
        ? null
        : n;
    }
    function x(e) {
      if (!e) return null;
      var t;
      for (var n of e.children) if (((t = x(n)), t)) return t;
      return e.getState() === d.ACTIVE ? e : null;
    }
    ((l.UIMState = d),
      (l.DismissReason = m),
      (l.UIM = f),
      (l.isCmdPressed = I),
      (l.setupUimListeners = T));
  },
  98,
);
