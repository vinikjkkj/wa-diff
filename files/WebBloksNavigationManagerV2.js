__d(
  "WebBloksNavigationManagerV2",
  ["WebBloksErrors", "WebBloksSSRUtils", "WebBloksScreen", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Date.now().toString(36) + Math.random().toString(36).substring(2),
      s = (function () {
        function t(e, t, n, r) {
          var a = this;
          if (
            ((this.screenChangeListener = new (o(
              "WebBloksUtils",
            ).EventEmitter)()),
            (this.screenStacks = []),
            (this.modals = []),
            (this.screensCache = new Map()),
            (this.navigationDirection = "forward"),
            (this.pendingCloses = []),
            (this.pendingOpen = null),
            (this.$1 = null),
            (this.$2 = !1),
            (this.$3 = null),
            (this.$4 = null),
            (this.currentScreenPointer = {
              stackIndex: -1,
              screenIndex: -1,
              isModal: !1,
              modalIndex: -1,
            }),
            (this.$5 = function (e) {
              var t = e.state;
              a.$7(t);
            }),
            (this.$6 = function () {
              document.visibilityState === "hidden" &&
                a.pendingCloses.length > 0 &&
                a.pendingCloses.map(function () {
                  var e;
                  return (e = a.pendingCloses.pop()) == null ? void 0 : e();
                });
            }),
            (this.objectSet = e),
            (this.disableHistoryStack = o("WebBloksSSRUtils").canUseDOM
              ? t
              : !0),
            (this.enableCometRouter = n),
            r)
          ) {
            var i;
            ((this.$2 = !0),
              o("WebBloksSSRUtils").canUseDOM &&
                (i = window.history) != null &&
                i.scrollRestoration &&
                (window.history.scrollRestoration = "manual"));
          }
          this.disableHistoryStack ||
            this.enableCometRouter ||
            (window.addEventListener("popstate", this.$5),
            window.addEventListener("visibilitychange", this.$6));
        }
        var n = t.prototype;
        return (
          (n.$7 = function (n) {
            var t;
            if (n.isWebBloks) {
              this.navigationDirection = this.$8(
                babelHelpers.extends({}, n.screenPointer),
              );
              var r =
                (t = this.getCurrentModal()) != null
                  ? t
                  : this.getCurrentScreen();
              (this.$9(r) || this.$10(r),
                r == null || r.onExit(this.navigationDirection),
                r == null || r.dismiss());
              var a = this.screensCache.get(n.screenId);
              if (
                ((n.sessionId !== e || a == null) && window.location.reload(),
                (a == null ? void 0 : a.controllerName) != null)
              ) {
                var i;
                (i = this.objectSet.environment.controllerNavigationLogger) ==
                  null || i.setCurrentController(a.controllerName);
              }
              if (
                ((this.currentScreenPointer = babelHelpers.extends(
                  {},
                  n.screenPointer,
                )),
                this.notifyChanged(),
                this.$9(this.getCurrentScreen()) || this.$11(),
                this.pendingCloses.length > 0)
              ) {
                var l = this.pendingCloses.pop();
                l && l();
              }
              if (this.pendingOpen && this.pendingCloses.length === 0) {
                var s = this.pendingOpen;
                ((this.pendingOpen = null), s());
              }
              n.pageTitle != null &&
                o("WebBloksSSRUtils").canUseDOM &&
                (document.title = n.pageTitle);
            }
          }),
          (n.open = function (t, n, r) {
            var e = this;
            (r === void 0 && (r = !1),
              this.$12("open", function () {
                e.$13(t, n, r);
              }));
          }),
          (n.$13 = function (t, n, r) {
            var e;
            (r === void 0 && (r = !1), this.$2 && this.$10(this.$4));
            var o =
              (e = this.getCurrentModal()) != null
                ? e
                : this.getCurrentScreen();
            if (
              (o == null || o.onExit("forward"),
              (this.navigationDirection = "forward"),
              t.options.isModal === !0)
            ) {
              var a = this.currentScreenPointer,
                i = a.modalIndex,
                l = a.stackIndex,
                s = this.$14(t, l);
              (this.modals.splice(i + 1),
                this.modals.push(s),
                this.$15({ isModal: !0, modalIndex: this.modals.length - 1 }),
                this.$16(t, r),
                this.notifyChanged());
              return;
            }
            var u = this.getModalCount();
            if (u > 0) {
              (o == null || o.clearDismissCallback(),
                this.close("close"),
                this.open(t, n, r));
              return;
            }
            if (n === !0) {
              var c = this.$17();
              c != null ? this.$18(t, c) : this.$19(t);
            } else this.$19(t);
            (this.$16(t, r), this.notifyChanged(), this.$9(t) || this.$20());
          }),
          (n.close = function (t, n, r) {
            var e = this;
            this.$12("close", function () {
              e.$21(t, n, r);
            });
          }),
          (n.$21 = function (t, n, r) {
            var e = this.currentScreenPointer.isModal,
              a = this.$17();
            if (a == null)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Tried closing a screen when there are no modals or stacks",
              );
            this.navigationDirection = "back";
            var i = 0;
            switch (t) {
              case "close":
                if (e)
                  (this.$22("modal"), (i = this.getModalCount()), this.$23());
                else {
                  this.$22("screen");
                  var l = this.currentScreenPointer.screenIndex;
                  ((i = l + 1), this.$24());
                }
                break;
              case "pop": {
                (e
                  ? (this.$22("modal"),
                    this.$15({
                      modalIndex: this.currentScreenPointer.modalIndex - 1,
                    }))
                  : (this.$22("screen"),
                    this.$15({
                      screenIndex: this.currentScreenPointer.screenIndex - 1,
                    })),
                  (i = 1));
                break;
              }
              case "pop_to_screen": {
                this.$22("screen");
                for (
                  var s = this.currentScreenPointer.screenIndex, u = !1;
                  !u && s >= 0;
                ) {
                  var c = this.screensCache.get(a[s]),
                    d = c == null ? void 0 : c.screenId;
                  d !== n ? (s--, i++) : ((u = !0), r === !0 && (s--, i++));
                }
                if (!u)
                  throw new (o("WebBloksErrors").WebBloksError)(
                    "Tried popping to a screenId that does not exist in the current stack",
                  );
                this.$15({ screenIndex: s });
                break;
              }
              case "close_all": {
                (e
                  ? (this.$22("modal"),
                    (i = this.getModalCount() + this.getScreenCount()))
                  : (this.$22("screen"), (i = this.getScreenCount())),
                  this.$25());
                break;
              }
            }
            (!e &&
              (t === "pop" || t === "pop_to_screen") &&
              this.currentScreenPointer.screenIndex === -1 &&
              this.$24(),
              e &&
                t === "pop" &&
                this.currentScreenPointer.modalIndex === -1 &&
                this.$23(),
              this.$26(i),
              this.notifyChanged());
          }),
          (n.getVisibleScreens = function () {
            var e = [],
              t = !1,
              n = this.getCurrentScreen();
            n != null && (e.push(n), n.getIsOverlay() !== !0 && (t = !0));
            for (
              var r = this.currentScreenPointer.stackIndex - 1;
              r > -1 && !t;
            ) {
              var o = this.screenStacks[r],
                a = o[o.length - 1],
                i = this.screensCache.get(a);
              (i != null && (e.push(i), i.getIsOverlay() !== !0 && (t = !0)),
                r--);
            }
            return { screens: e.reverse(), modal: this.getCurrentModal() };
          }),
          (n.notifyChanged = function () {
            if (this.$2) {
              var e = this.getCurrentScreen();
              e != null && e.getIsOverlay() !== !0 && (this.$4 = e);
            }
            this.screenChangeListener.emit(this.getVisibleScreens());
          }),
          (n.destroy = function () {
            (window.removeEventListener("popstate", this.$5),
              window.removeEventListener("visibilitychange", this.$6),
              this.$25(),
              this.enableCometRouter ||
                (this.screensCache.forEach(function (e) {
                  return e.destroy();
                }),
                this.screensCache.clear()));
          }),
          (n.refresh = function () {
            var e,
              t =
                (e = this.screenStacks[this.currentScreenPointer.stackIndex]) ==
                null
                  ? void 0
                  : e[this.currentScreenPointer.screenIndex],
              n = this.screensCache.get(t);
            if (n != null) {
              var r = n.appId,
                a = n.options,
                i = n.params,
                l = n.uri,
                s =
                  l != null
                    ? o("WebBloksScreen").WebBloksScreen.fromURI(
                        n.objectSet,
                        l,
                        r,
                        i,
                        a,
                      )
                    : r != null
                      ? o("WebBloksScreen").WebBloksScreen.fromAppId(
                          n.objectSet,
                          r,
                          i,
                          a,
                        )
                      : null;
              if (s) {
                this.push(s, !0);
                return;
              }
            }
          }),
          (n.replaceState = function (t) {
            if (!this.disableHistoryStack) {
              var e = history.state;
              e.uri !== t && window.history.replaceState(e, null, t);
            }
          }),
          (n.replacePageTitle = function (t) {
            if (!this.disableHistoryStack) {
              var e = history.state;
              e.pageTitle !== t &&
                o("WebBloksSSRUtils").canUseDOM &&
                (document.title = t);
            }
          }),
          (n.attachAndTriggerPopStateHandler = function () {
            this.disableHistoryStack ||
              (window.addEventListener("popstate", this.$5),
              window.addEventListener("visibilitychange", this.$6),
              this.$7(window.history.state));
          }),
          (n.push = function (t, n) {
            this.open(t, !0, n);
          }),
          (n.pop = function () {
            this.close("pop");
          }),
          (n.popAllModals = function () {
            this.getModalCount() > 0 && this.close("close");
          }),
          (n.getModalCount = function () {
            return this.currentScreenPointer.isModal
              ? this.currentScreenPointer.modalIndex + 1
              : 0;
          }),
          (n.getScreenCount = function (t) {
            t === void 0 && (t = !1);
            var e = this.currentScreenPointer,
              n = e.screenIndex,
              r = e.stackIndex;
            if (r < 0) return 0;
            var o = n + 1;
            if (t) return o;
            var a = this.screenStacks.slice(0, r).reduce(function (e, t) {
              return e + t.length;
            }, 0);
            return o + a;
          }),
          (n.getCurrentScreen = function () {
            var e = this.currentScreenPointer,
              t = e.screenIndex,
              n = e.stackIndex;
            if (n < 0 || t < 0) return null;
            var r = this.screenStacks[n];
            if (r == null) return null;
            var o = r[t];
            return this.screensCache.get(o);
          }),
          (n.getCurrentModal = function () {
            var e = this.currentScreenPointer,
              t = e.isModal,
              n = e.modalIndex;
            if (!t || n < 0) return null;
            var r = this.modals[n];
            return this.screensCache.get(r);
          }),
          (n.getNavigationDirection = function () {
            return this.navigationDirection;
          }),
          (n.$17 = function () {
            if (this.currentScreenPointer.isModal === !0) return this.modals;
            var e = this.currentScreenPointer.stackIndex;
            return e != null ? this.screenStacks[e] : null;
          }),
          (n.$18 = function (t, n) {
            var e = this.currentScreenPointer,
              r = e.screenIndex,
              o = e.stackIndex,
              a = n.splice(r + 1);
            this.$27(a);
            var i = this.screenStacks.splice(o + 1);
            for (var l of i) this.$27(l);
            var s = this.modals.splice(0);
            (this.$27(s),
              n.push(this.$14(t, o)),
              this.$15({ screenIndex: r + 1 }));
          }),
          (n.$19 = function (t) {
            var e = this.currentScreenPointer,
              n = e.screenIndex,
              r = e.stackIndex,
              o = this.screenStacks[r];
            if (o != null) {
              var a = o.splice(n + 1);
              this.$27(a);
            }
            var i = this.screenStacks.splice(r + 1);
            for (var l of i) this.$27(l);
            var s = this.modals.splice(0);
            (this.$27(s),
              this.screenStacks.push([this.$14(t, r + 1)]),
              this.$15({ stackIndex: r + 1, screenIndex: 0, isModal: !1 }));
          }),
          (n.$27 = function (t) {
            for (var e of t) {
              var n = this.screensCache.get(e);
              (n != null && n.destroy(), this.screensCache.delete(e));
            }
          }),
          (n.$22 = function (t) {
            if (this.disableHistoryStack) {
              var e;
              if (
                (t === "screen"
                  ? (e = this.getCurrentScreen())
                  : (e = this.getCurrentModal()),
                e == null)
              )
                throw new (o("WebBloksErrors").WebBloksError)(
                  "Unexpected null " + t + " while executing onExit callback",
                );
              (e.onExit("back"), e.dismiss());
            }
          }),
          (n.$8 = function (t) {
            var e = this.currentScreenPointer,
              n = babelHelpers.extends({}, e, t);
            return e.isModal && !n.isModal
              ? "back"
              : !e.isModal && n.isModal
                ? "forward"
                : e.isModal && n.isModal
                  ? n.modalIndex > e.modalIndex
                    ? "forward"
                    : "back"
                  : n.stackIndex !== e.stackIndex
                    ? n.stackIndex > e.stackIndex
                      ? "forward"
                      : "back"
                    : n.screenIndex > e.screenIndex
                      ? "forward"
                      : "back";
          }),
          (n.$15 = function (t) {
            var e = this.$8(t);
            (e === "back" && !this.disableHistoryStack) ||
              (this.currentScreenPointer = babelHelpers.extends(
                {},
                this.currentScreenPointer,
                t,
              ));
          }),
          (n.$23 = function () {
            this.$15({ isModal: !1, modalIndex: -1 });
          }),
          (n.$24 = function () {
            var e = this.currentScreenPointer.stackIndex;
            e === 0
              ? this.$15({
                  stackIndex: -1,
                  screenIndex: -1,
                  isModal: !1,
                  modalIndex: -1,
                })
              : this.$15({
                  stackIndex: e - 1,
                  screenIndex: this.screenStacks[e - 1].length - 1,
                });
          }),
          (n.$25 = function () {
            this.$15({
              stackIndex: -1,
              screenIndex: -1,
              isModal: !1,
              modalIndex: -1,
            });
          }),
          (n.$9 = function (t) {
            var e;
            return !this.$2 || t == null
              ? !0
              : ((e = t.options) == null ? void 0 : e.isModal) === !0 ||
                  t.getIsOverlay() === !0;
          }),
          (n.$10 = function (t) {
            var e, n;
            !o("WebBloksSSRUtils").canUseDOM ||
              !this.$2 ||
              (t != null &&
                (t.savedScrollY =
                  (e = (n = this.$1) == null ? void 0 : n.scrollTop) != null
                    ? e
                    : window.scrollY));
          }),
          (n.setScrollContainer = function (t) {
            this.$1 = t;
          }),
          (n.$28 = function () {
            this.$3 != null &&
              (window.cancelAnimationFrame(this.$3), (this.$3 = null));
          }),
          (n.$11 = function () {
            var e = this;
            this.$2 &&
              (this.$28(),
              (this.$3 = window.requestAnimationFrame(function () {
                ((e.$3 = null), e.$29());
              })));
          }),
          (n.$20 = function () {
            var e = this;
            if (this.$2) {
              var t = this.getCurrentScreen();
              (t != null && (t.savedScrollY = 0),
                this.$28(),
                (this.$3 = window.requestAnimationFrame(function () {
                  ((e.$3 = null), e.$30());
                })));
            }
          }),
          (n.$29 = function () {
            var e;
            if (
              !(
                !o("WebBloksSSRUtils").canUseDOM ||
                this.$9(this.getCurrentScreen())
              )
            ) {
              var t = this.getCurrentScreen();
              this.$31(
                (e = t == null ? void 0 : t.savedScrollY) != null ? e : 0,
              );
            }
          }),
          (n.$30 = function () {
            !o("WebBloksSSRUtils").canUseDOM ||
              this.$9(this.getCurrentScreen()) ||
              this.$31(0);
          }),
          (n.$31 = function (t) {
            var e = this.$1;
            e != null ? (e.scrollTop = t) : window.scrollTo(0, Math.max(t, 1));
          }),
          (n.$16 = function (n, r) {
            var t;
            if (!this.disableHistoryStack) {
              var a = n.uri != null ? n.uri : "#",
                i = null;
              o("WebBloksSSRUtils").canUseDOM && (i = document.title);
              var l = {
                uri: a,
                pageTitle: i,
                screenId: this.$14(n, this.currentScreenPointer.stackIndex),
                appId: n.appId,
                isWebBloks: !0,
                sessionId: e,
                screenPointer: babelHelpers.extends(
                  {},
                  this.currentScreenPointer,
                ),
                key: (t = window.history.state) == null ? void 0 : t.key,
              };
              r
                ? window.history.replaceState(l, null, a)
                : window.history.pushState(l, null, a);
            }
          }),
          (n.$26 = function (t) {
            this.disableHistoryStack || window.history.go(-t);
          }),
          (n.$14 = function (t, n) {
            var e = t.options.isModal === !0 ? "modal" : "stack_" + n,
              r = e + ":" + t.screenId;
            return (
              (t.screenIdWithStackIndex = r),
              this.screensCache.has(r) || this.screensCache.set(r, t),
              r
            );
          }),
          (n.$12 = function (t, n) {
            if (this.disableHistoryStack) {
              n();
              return;
            }
            if (t === "open") {
              this.pendingCloses.length ? (this.pendingOpen = n) : n();
              return;
            }
            if (t === "close") {
              ((this.pendingOpen = null),
                this.pendingCloses.length > 0
                  ? this.pendingCloses.push(n)
                  : (this.pendingCloses.push(null), n()));
              return;
            }
          }),
          t
        );
      })();
    l.NavigationManagerV2 = s;
  },
  98,
);
