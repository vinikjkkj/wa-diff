__d(
  "WebBloksNavigationManagerV2",
  [
    "WebBloksErrors",
    "WebBloksNavigationCounter",
    "WebBloksRenderDiagnostics",
    "WebBloksSSRUtils",
    "WebBloksScreen",
    "WebBloksUtils",
  ],
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
            (this.$1 = !1),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = !1),
            (this.currentScreenPointer = {
              stackIndex: -1,
              screenIndex: -1,
              isModal: !1,
              modalIndex: -1,
            }),
            (this.$6 = function (e) {
              var t = e.state;
              a.$7(t);
            }),
            (this.$13 = function () {
              document.visibilityState === "hidden"
                ? a.pendingCloses.length > 0 &&
                  a.pendingCloses.map(function () {
                    var e;
                    return (e = a.pendingCloses.pop()) == null ? void 0 : e();
                  })
                : document.visibilityState === "visible" && a.$12("visibility");
            }),
            (this.objectSet = e),
            (this.disableHistoryStack = o("WebBloksSSRUtils").canUseDOM
              ? t
              : !0),
            (this.enableCometRouter = n),
            r)
          ) {
            var i;
            ((this.$1 = !0),
              o("WebBloksSSRUtils").canUseDOM &&
                (i = window.history) != null &&
                i.scrollRestoration &&
                (window.history.scrollRestoration = "manual"));
          }
        }
        var n = t.prototype;
        return (
          (n.$7 = function (n) {
            if (n.isWebBloks) {
              this.navigationDirection = this.$8(
                babelHelpers.extends({}, n.screenPointer),
              );
              var t = this.getCurrentModalOrScreen(),
                r =
                  this.currentScreenPointer.isModal ||
                  (t == null ? void 0 : t.getIsOverlay()) === !0,
                a = this.$4;
              (this.$9(t) || this.$10(t),
                t == null || t.onExit(this.navigationDirection),
                t == null || t.dismiss());
              var i = this.screensCache.get(n.screenId),
                l = n.sessionId !== e || i == null;
              if (
                (l && window.location.reload(),
                o(
                  "WebBloksRenderDiagnostics",
                ).isWebBloksRenderDiagnosticsInstalled() &&
                  i != null &&
                  i.options.isModal !== !0 &&
                  !this.$5 &&
                  o("WebBloksRenderDiagnostics").reportWebBloksNewDocument(
                    i,
                    i.appId,
                    "back_forward",
                  ),
                (this.currentScreenPointer = babelHelpers.extends(
                  {},
                  n.screenPointer,
                )),
                this.notifyChanged(),
                this.$9(this.getCurrentScreen()) || this.$11(),
                this.pendingCloses.length > 0)
              ) {
                var s = this.pendingCloses.pop();
                s && s();
              }
              if (this.pendingOpen && this.pendingCloses.length === 0) {
                var u = this.pendingOpen;
                ((this.pendingOpen = null), u());
              }
              if (!l) {
                var c =
                  r &&
                  !this.currentScreenPointer.isModal &&
                  this.$4 === a &&
                  this.getCurrentScreen() === a;
                this.$12(c ? "overlay_dismiss" : "navigation");
              }
              n.pageTitle != null &&
                o("WebBloksSSRUtils").canUseDOM &&
                (document.title = n.pageTitle);
            }
          }),
          (n.open = function (t, n, r) {
            var e = this;
            (r === void 0 && (r = !1),
              this.$14("open", function () {
                if ((e.$15(t, n, r), r === !0)) {
                  var o = e.getCurrentScreen();
                  o != null && o.getIsOverlay() !== !0 && (e.$4 = o);
                } else e.$12("navigation");
              }));
          }),
          (n.$15 = function (t, n, r) {
            var e = this;
            (r === void 0 && (r = !1), this.$1 && this.$10(this.$3));
            var a = this.getCurrentModalOrScreen();
            if (
              (a == null || a.onExit("forward"),
              (this.navigationDirection = "forward"),
              t.options.isModal === !0)
            ) {
              var i = this.currentScreenPointer,
                l = i.modalIndex,
                s = i.stackIndex,
                u = this.$16(t, s);
              (this.modals.splice(l + 1),
                this.modals.push(u),
                this.$17({ isModal: !0, modalIndex: this.modals.length - 1 }),
                this.$18(t, r),
                this.notifyChanged());
              return;
            }
            r !== !0 &&
              o("WebBloksNavigationCounter").incrementWebBloksNavigationCount(
                t,
              );
            var c = this.getModalCount();
            if (c > 0) {
              (a == null || a.clearDismissCallback(),
                (this.$5 = !0),
                this.$14("close", function () {
                  e.$19("close");
                }),
                this.open(t, n, r));
              return;
            }
            if (
              ((this.$5 = !1),
              o(
                "WebBloksRenderDiagnostics",
              ).isWebBloksRenderDiagnosticsInstalled() &&
                (r !== !0 && this.getScreenCount() !== 0
                  ? o("WebBloksRenderDiagnostics").reportWebBloksNewDocument(
                      t,
                      t.appId,
                      "push",
                    )
                  : o("WebBloksRenderDiagnostics").reportWebBloksInitialScreen(
                      t,
                      t.appId,
                    )),
              n === !0)
            ) {
              var d = this.$20();
              d != null ? this.$21(t, d) : this.$22(t);
            } else this.$22(t);
            (this.$18(t, r), this.notifyChanged(), this.$9(t) || this.$23());
          }),
          (n.close = function (t, n, r) {
            var e = this;
            ((this.$5 = !1),
              this.$14("close", function () {
                e.$19(t, n, r);
              }));
          }),
          (n.$19 = function (t, n, r) {
            var e = this.currentScreenPointer.isModal,
              a = this.$20();
            if (a == null)
              throw new (o("WebBloksErrors").WebBloksError)(
                "Tried closing a screen when there are no modals or stacks",
              );
            this.navigationDirection = "back";
            var i = 0;
            switch (t) {
              case "close":
                if (e)
                  (this.$24("modal"), (i = this.getModalCount()), this.$25());
                else {
                  this.$24("screen");
                  var l = this.currentScreenPointer.screenIndex;
                  ((i = l + 1), this.$26());
                }
                break;
              case "pop": {
                (e
                  ? (this.$24("modal"),
                    this.$17({
                      modalIndex: this.currentScreenPointer.modalIndex - 1,
                    }))
                  : (this.$24("screen"),
                    this.$17({
                      screenIndex: this.currentScreenPointer.screenIndex - 1,
                    })),
                  (i = 1));
                break;
              }
              case "pop_to_screen": {
                this.$24("screen");
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
                this.$17({ screenIndex: s });
                break;
              }
              case "close_all": {
                (e
                  ? (this.$24("modal"),
                    (i = this.getModalCount() + this.getScreenCount()))
                  : (this.$24("screen"), (i = this.getScreenCount())),
                  this.$27());
                break;
              }
            }
            if (
              (!e &&
                (t === "pop" || t === "pop_to_screen") &&
                this.currentScreenPointer.screenIndex === -1 &&
                this.$26(),
              e &&
                t === "pop" &&
                this.currentScreenPointer.modalIndex === -1 &&
                this.$25(),
              o(
                "WebBloksRenderDiagnostics",
              ).isWebBloksRenderDiagnosticsInstalled())
            ) {
              var m = this.getCurrentScreen();
              m != null &&
                !this.$5 &&
                o("WebBloksRenderDiagnostics").reportWebBloksNewDocument(
                  m,
                  m.appId,
                  "close",
                );
            }
            (this.$28(i), this.notifyChanged());
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
            if (this.$1) {
              var e = this.getCurrentScreen();
              e != null && e.getIsOverlay() !== !0 && (this.$3 = e);
            }
            this.screenChangeListener.emit(this.getVisibleScreens());
          }),
          (n.destroy = function () {
            (this.$29(),
              (this.$3 = null),
              (this.$4 = null),
              window.removeEventListener("popstate", this.$6),
              window.removeEventListener("visibilitychange", this.$13),
              this.$27(),
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
              e.uri !== t && window.history.replaceState(e, "", t);
            }
          }),
          (n.replaceStateAndSyncUri = function (t) {
            if (!this.disableHistoryStack) {
              var e = history.state;
              (e == null ? void 0 : e.uri) !== t &&
                (window.history.replaceState(
                  babelHelpers.extends({}, e != null ? e : {}, { uri: t }),
                  "",
                  t,
                ),
                this.$12("url_swap"));
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
          (n.attachNavigationListeners = function () {
            this.disableHistoryStack ||
              this.enableCometRouter ||
              (window.addEventListener("popstate", this.$6),
              window.addEventListener("visibilitychange", this.$13));
          }),
          (n.attachAndTriggerPopStateHandler = function () {
            this.disableHistoryStack ||
              (window.addEventListener("popstate", this.$6),
              window.addEventListener("visibilitychange", this.$13),
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
          (n.getCurrentModalOrScreen = function () {
            var e;
            return (e = this.getCurrentModal()) != null
              ? e
              : this.getCurrentScreen();
          }),
          (n.getNavigationDirection = function () {
            return this.navigationDirection;
          }),
          (n.$20 = function () {
            if (this.currentScreenPointer.isModal === !0) return this.modals;
            var e = this.currentScreenPointer.stackIndex;
            return e != null ? this.screenStacks[e] : null;
          }),
          (n.$12 = function (t) {
            var e = this.objectSet.environment,
              n = t === "navigation";
            if (!n) {
              var r = this.pendingOpen != null || this.pendingCloses.length > 0;
              if (!e.enableSameControllerReporting || r) return;
            }
            var o = this.getCurrentScreen(),
              a =
                (o == null ? void 0 : o.getIsOverlay()) === !0
                  ? this.getVisibleScreens().screens.find(function (e) {
                      return e.getIsOverlay() !== !0;
                    })
                  : o;
            if (a != null) {
              var i = a !== this.$4;
              if (
                !(!i && n) &&
                !(
                  t === "overlay_dismiss" &&
                  this.getCurrentModalOrScreen() !== a
                )
              ) {
                this.$4 = a;
                var l = a.controllerName;
                if (l != null) {
                  var s;
                  (s = e.controllerNavigationLogger) == null ||
                    s.setCurrentController(l, i ? "navigation" : t);
                }
              }
            }
          }),
          (n.$21 = function (t, n) {
            var e = this.currentScreenPointer,
              r = e.screenIndex,
              o = e.stackIndex,
              a = n.splice(r + 1);
            this.$30(a);
            var i = this.screenStacks.splice(o + 1);
            for (var l of i) this.$30(l);
            var s = this.modals.splice(0);
            (this.$30(s),
              n.push(this.$16(t, o)),
              this.$17({ screenIndex: r + 1 }));
          }),
          (n.$22 = function (t) {
            var e = this.currentScreenPointer,
              n = e.screenIndex,
              r = e.stackIndex,
              o = this.screenStacks[r];
            if (o != null) {
              var a = o.splice(n + 1);
              this.$30(a);
            }
            var i = this.screenStacks.splice(r + 1);
            for (var l of i) this.$30(l);
            var s = this.modals.splice(0);
            (this.$30(s),
              this.screenStacks.push([this.$16(t, r + 1)]),
              this.$17({ stackIndex: r + 1, screenIndex: 0, isModal: !1 }));
          }),
          (n.$30 = function (t) {
            for (var e of t) {
              var n = this.screensCache.get(e);
              (n != null && n.destroy(), this.screensCache.delete(e));
            }
          }),
          (n.$24 = function (t) {
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
          (n.$17 = function (t) {
            var e = this.$8(t);
            (e === "back" && !this.disableHistoryStack) ||
              (this.currentScreenPointer = babelHelpers.extends(
                {},
                this.currentScreenPointer,
                t,
              ));
          }),
          (n.$25 = function () {
            this.$17({ isModal: !1, modalIndex: -1 });
          }),
          (n.$26 = function () {
            var e = this.currentScreenPointer.stackIndex;
            e === 0
              ? this.$17({
                  stackIndex: -1,
                  screenIndex: -1,
                  isModal: !1,
                  modalIndex: -1,
                })
              : this.$17({
                  stackIndex: e - 1,
                  screenIndex: this.screenStacks[e - 1].length - 1,
                });
          }),
          (n.$27 = function () {
            this.$17({
              stackIndex: -1,
              screenIndex: -1,
              isModal: !1,
              modalIndex: -1,
            });
          }),
          (n.$9 = function (t) {
            var e;
            return !this.$1 || t == null
              ? !0
              : ((e = t.options) == null ? void 0 : e.isModal) === !0 ||
                  t.getIsOverlay() === !0;
          }),
          (n.$10 = function (t) {
            !o("WebBloksSSRUtils").canUseDOM ||
              !this.$1 ||
              (t != null && (t.savedScrollY = window.scrollY));
          }),
          (n.$29 = function () {
            this.$2 != null &&
              (window.cancelAnimationFrame(this.$2), (this.$2 = null));
          }),
          (n.$11 = function () {
            var e = this;
            !this.$1 ||
              !o("WebBloksSSRUtils").canUseDOM ||
              (this.$29(),
              (this.$2 = window.requestAnimationFrame(function () {
                ((e.$2 = null), e.$31());
              })));
          }),
          (n.$23 = function () {
            var e = this;
            if (!(!this.$1 || !o("WebBloksSSRUtils").canUseDOM)) {
              var t = this.getCurrentScreen();
              (t != null && (t.savedScrollY = 0),
                this.$29(),
                (this.$2 = window.requestAnimationFrame(function () {
                  ((e.$2 = null), e.$32());
                })));
            }
          }),
          (n.$31 = function () {
            var e;
            if (
              !(
                !o("WebBloksSSRUtils").canUseDOM ||
                this.$9(this.getCurrentScreen())
              )
            ) {
              var t = this.getCurrentScreen();
              this.$33(
                (e = t == null ? void 0 : t.savedScrollY) != null ? e : 0,
              );
            }
          }),
          (n.$32 = function () {
            var e = this.getCurrentScreen();
            !o("WebBloksSSRUtils").canUseDOM || this.$9(e) || this.$33(0);
          }),
          (n.$33 = function (t) {
            window.scrollTo(0, Math.max(t, 1));
          }),
          (n.$18 = function (n, r) {
            var t;
            if (!this.disableHistoryStack) {
              var a = n.uri != null ? n.uri : "#",
                i = null;
              o("WebBloksSSRUtils").canUseDOM && (i = document.title);
              var l = {
                uri: a,
                pageTitle: i,
                screenId: this.$16(n, this.currentScreenPointer.stackIndex),
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
                ? window.history.replaceState(l, "", a)
                : window.history.pushState(l, "", a);
            }
          }),
          (n.$28 = function (t) {
            this.disableHistoryStack || window.history.go(-t);
          }),
          (n.$16 = function (t, n) {
            var e = t.options.isModal === !0 ? "modal" : "stack_" + n,
              r = e + ":" + t.screenId;
            return (
              (t.screenIdWithStackIndex = r),
              this.screensCache.has(r) || this.screensCache.set(r, t),
              r
            );
          }),
          (n.$14 = function (t, n) {
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
